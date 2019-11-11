import { Vue, Component, Watch } from 'vue-property-decorator'
import { Vssue, VssueAPI } from 'vssue'
import { getCleanURL } from '@vssue/utils'
import i18n from './i18n'

@Component({ i18n })
class VssueStore extends Vue implements Vssue.Store {
  get version () {
    return <string>process.env.VUE_APP_VERSION
  }

  title: string | ((options: Vssue.Options) => string) = options => `${options.prefix}${document.title}`

  titleR: string | ((options: Vssue.Options) => string) = options => `${options.prefix}[Meta]${document.title}`

  get issueTitle (): string {
    if (this.options === null) {
      return ''
    }
    return typeof this.title === 'function' ? this.title(this.options) : `${this.title}[Comment]`
  }

  get issueTitleR (): string {
    if (this.options === null) {
      return ''
    }
    return `${this.title}[Rating]`
  }

  issueId: number | string | null = null

  issueIdR: number | string | null = null

  options: Vssue.Options | null = null

  API: VssueAPI.Instance | null = null

  accessToken: string | null = null

  user: VssueAPI.User | null = null

  issue: VssueAPI.Issue | null = null

  issueR: VssueAPI.Issue | null = null

  comments: VssueAPI.Comments | null = null

  totalRating: number = 0

  ratings: VssueAPI.Comments | null = null

  userRating: VssueAPI.Comment | null = null

  query: VssueAPI.Query = {
    page: 1,
    perPage: 10,
    sort: 'desc',
  }

  isInitializing: boolean = true

  isIssueNotCreated: boolean = false

  isLoginRequired: boolean = false

  isFailed: boolean = false

  isCreatingIssue: boolean = false

  isLoadingComments: boolean = false

  isCreatingComment: boolean = false

  isUpdatingComment: boolean = false

  isRating: boolean = false

  isDeletingVote: boolean = false

  isUpdatingVote: boolean = false

  get isPending (): boolean {
    return this.isLoadingComments || this.isCreatingComment || this.isUpdatingComment
  }

  get isLogined (): boolean {
    return this.accessToken !== null && this.user !== null
  }

  get isAdmin (): boolean {
    return this.options !== null && this.accessToken !== null && this.user !== null &&
      (
        this.user.username === this.options.owner ||
        this.options.admins.includes(this.user.username)
      )
  }

  /**
   * the key of access token for local storage
   */
  get accessTokenKey (): string {
    return this.API ? `Vssue.${this.API.platform.name.toLowerCase()}.access_token` : ''
  }

  @Watch('query.perPage')
  onQueryPerPageChange () {
    this.query.page = 1
    this.getComments()
  }

  @Watch('query.page')
  @Watch('query.sort')
  onQueryChange () {
    this.getComments()
  }

  /**
   * Set options of Vssue
   */
  setOptions (options: Partial<Vssue.Options>): void {
    this.options = <Vssue.Options>Object.assign({
      labels: ['Vssue'],
      state: 'Vssue',
      prefix: '[Vssue]',
      admins: [],
      perPage: 10,
      proxy: (url: string): string => `https://cors-anywhere.herokuapp.com/${url}`,
      issueContent: ({ url }): string => url,
      autoCreateIssue: true,
    }, options)

    // check options
    const requiredOptions = [
      'api',
      'owner',
      'repo',
      'clientId',
    ]
    for (const opt of requiredOptions) {
      if (!this.options[opt]) {
        console.warn(`[Vssue] the option '${opt}' is required`)
      }
    }

    // set locale
    if (this.options.locale) {
      this.$i18n.locale = this.options.locale
    } else {
      const locales = Object.keys(this.$i18n.messages)
      const navLangs = window.navigator.languages
      this.$i18n.locale = navLangs.filter(item => locales.includes(item)).shift() || 'en'
    }
  }

  /**
   * Initialization
   */
  async init (): Promise<void> {
    try {
      // init VssueStore
      await this.initStore()

      // init comments
      await this.initComments()

      // init rating
      await this.initRatings()

      await this.getTotalRating()

      await this.getUserRating()
    } catch (e) {
      if (e.response && [401, 403].includes(e.response.status)) {
        // in some cases, require login to load comments
        this.isLoginRequired = true
      } else {
        this.isFailed = true
      }
      console.error(e)
    }
  }

  /**
   * Init VssueStore
   */
  async initStore (): Promise<void> {
    try {
      if (!this.options) throw new Error('Options are required to initialize Vssue')
      // reset data
      this.API = null
      this.accessToken = null
      this.user = null
      this.issue = null
      this.comments = null
      this.ratings = null
      this.totalRating = 0
      this.query = {
        page: 1,
        perPage: this.options.perPage,
        sort: 'desc',
      }

      // reset status
      this.isInitializing = true
      this.isIssueNotCreated = false
      this.isLoginRequired = false
      this.isFailed = false
      this.isCreatingIssue = false
      this.isLoadingComments = false
      this.isCreatingComment = false
      this.isUpdatingComment = false
      this.isRating = false
      this.isDeletingVote = false
      this.isUpdatingVote = false
      // get the VssueAPI instance according to the options.api
      const APIConstructor = this.options.api

      this.API = new APIConstructor({
        baseURL: this.options.baseURL,
        labels: this.options.labels,
        state: this.options.state,
        owner: this.options.owner,
        repo: this.options.repo,
        clientId: this.options.clientId,
        clientSecret: this.options.clientSecret,
        proxy: this.options.proxy,
      })

      // handle authorization
      await this.handleAuth()
    } finally {
      this.isInitializing = false
    }
  }

  /**
   * Init comments
   */
  async initComments (): Promise<void> {
    if (!this.API || !this.options) return

    if (this.issueId) {
      // if issueId is set, get the issue and comments in the mean time
      // notice that vssue will not try to create the issue is not found
      const [issue, comments] = await Promise.all([
        this.API.getIssue({
          accessToken: this.accessToken,
          issueId: this.issueId,
        }),
        this.API.getComments({
          accessToken: this.accessToken,
          issueId: this.issueId,
          query: this.query,
        }),
      ])
      this.issue = issue
      this.comments = comments
    } else {
      // get issue according to title
      this.issue = await this.API.getIssue({
        accessToken: this.accessToken,
        issueTitle: this.issueTitle,
      })

      if (this.issue === null) {
        console.log('hellooooo')
        // if the issue of this page does not exist
        this.isIssueNotCreated = true

        // try to create issue when `autoCreateIssue = true`
        if (this.options.autoCreateIssue) {
          console.log('lets create the issue')
          await this.postIssue()
        }
      } else {
        // try to load comments
        await this.getComments()
      }
    }
  }

  /**
   * Init Rating
   */
  async initRatings (): Promise<void> {
    if (!this.API || !this.options) return

    if (this.issueIdR) {
      // if issueId is set, get the issue and comments in the mean time
      // notice that vssue will not try to create the issue is not found
      const [issueR, ratings] = await Promise.all([
        this.API.getIssue({
          accessToken: this.accessToken,
          issueId: this.issueIdR,
        }),
        this.API.getRatings({
          accessToken: this.accessToken,
          issueId: this.issueIdR,
          query: this.query,
        }),
      ])
      this.issueR = issueR
      this.ratings = ratings
    } else {
      // get issue according to title
      this.issueR = await this.API.getIssue({
        accessToken: this.accessToken,
        issueTitle: this.issueTitleR,
      })

      if (this.issueR === null) {
        // if the issue of this page does not exist
        this.isIssueNotCreated = true

        // try to create issue when `autoCreateIssue = true`
        if (this.options.autoCreateIssue) {
          await this.postIssue()
        }
      } else {
        // try to load comments
        await this.getRatings()
      }
    }
  }

  getRatingFromContent (comment : VssueAPI.Comment): number {
    return JSON.parse(comment.content.slice(3, comment.content.length - 4)).rating
  }

  async getTotalRating () : Promise <void> {
    if (this.ratings) {
      let m = 0
      this.ratings.data.forEach(element => {
        m += this.getRatingFromContent(element)
      })
      this.totalRating = m / this.ratings.count
    }
  }

  async getUserRating () : Promise <void> {
    if (this.ratings) {
      const Rating = this.ratings.data.filter(rating => {
        if (this.user) { return rating.author.username === this.user.username }
      })

      if (Rating.length === 1) this.userRating = Rating[0]
      else this.userRating = null
    }
  }

  /**
   * Post a new issue
   */
  async postIssue (): Promise<void> {
    if (!this.API || !this.options || this.issue || this.issueId) return

    // login to create issue
    if (!this.isLogined) {
      this.login()
    }

    // only owner/admins can create issue
    // if (!this.isAdmin) return

    try {
      this.isCreatingIssue = true

      const issue = await this.API.postIssue({
        title: this.issueTitle,
        content: await this.options.issueContent({
          options: this.options,
          url: getCleanURL(window.location.href),
        }),
        accessToken: this.accessToken,
      })

      const issueR = await this.API.postIssue({
        title: this.issueTitleR,
        content: await this.options.issueContent({
          options: this.options,
          url: getCleanURL(window.location.href),
        }),
        accessToken: this.accessToken,
      })

      this.issue = issue
      this.issueR = issueR
      this.isIssueNotCreated = false

      await this.getComments()
      await this.getRatings()
      await this.getTotalRating()
      await this.getUserRating()
    } catch (e) {
      this.isFailed = true
    } finally {
      this.isCreatingIssue = false
    }
  }

  /**
   * Get comments of this vssue according to the issue id
   */
  async getComments (): Promise<VssueAPI.Comments | void> {
    try {
      if (!this.API || !this.issue || this.isLoadingComments) return

      this.isLoadingComments = true

      const comments = await this.API.getComments({
        accessToken: this.accessToken,
        issueId: this.issue.id,
        query: this.query,
      })

      this.comments = comments

      if (this.query.page !== comments.page) {
        this.query.page = comments.page
      }

      if (this.query.perPage !== comments.perPage) {
        this.query.perPage = comments.perPage
      }

      return comments
    } catch (e) {
      if (e.response && [401, 403].includes(e.response.status) && !this.isLogined) {
        this.isLoginRequired = true
      } else {
        this.$emit('error', e)
        throw e
      }
    } finally {
      this.isLoadingComments = false
    }
  }

  /**
   * Post a new comment
   */
  async postComment ({
    content,
  }: {
    content: string
  }): Promise<VssueAPI.Comment | void> {
    try {
      if (!this.API || !this.issue || this.isCreatingComment) return

      this.isCreatingComment = true

      const comment = await this.API.postComment({
        accessToken: this.accessToken,
        content,
        issueId: this.issue.id,
      })

      return comment
    } catch (e) {
      this.$emit('error', e)
      throw e
    } finally {
      this.isCreatingComment = false
    }
  }

  /**
   * Post a new vote
   */
  async postRating ({
    content,
  }: {
    content: string
  }): Promise<VssueAPI.Comment | void> {
    try {
      if (!this.API || !this.issueR || this.isRating) return

      this.isRating = true

      const comment = await this.API.postComment({
        accessToken: this.accessToken,
        content,
        issueId: this.issueR.id,
      })

      return comment
    } catch (e) {
      this.$emit('error', e)
      throw e
    } finally {
      this.isRating = false
    }
  }

  /**
   * Post a new vote
   */
  async deleteRating ({
    commentId,
  }: {
    commentId: number | string
  }): Promise<boolean | void> {
    try {
      if (!this.API || !this.issueR) return

      this.isDeletingVote = true

      const success = await this.API.deleteComment({
        accessToken: this.accessToken,
        issueId: this.issueR.id,
        commentId,
      })

      return success
    } catch (e) {
      this.$emit('error', e)
      throw e
    } finally {
      this.isDeletingVote = false
    }
  }

  /**
   * Edit rating
   */
  async putRating ({
    commentId,
    content,
  }: {
    commentId: number | string
    content: string
  }): Promise<VssueAPI.Comment | void> {
    try {
      if (!this.API || !this.issueR) return

      this.isUpdatingVote = true

      const comment = await this.API.putComment({
        accessToken: this.accessToken,
        issueId: this.issueR.id,
        commentId,
        content,
      })

      return comment
    } catch (e) {
      this.$emit('error', e)
      throw e
    } finally {
      this.isUpdatingVote = false
    }
  }

  /**
   * Edit a comment
   */
  async putComment ({
    commentId,
    content,
  }: {
    commentId: number | string
    content: string
  }): Promise<VssueAPI.Comment | void> {
    try {
      if (!this.API || !this.issue) return

      const comment = await this.API.putComment({
        accessToken: this.accessToken,
        issueId: this.issue.id,
        commentId,
        content,
      })

      return comment
    } catch (e) {
      this.$emit('error', e)
      throw e
    }
  }

  /**
   * Delete a new comment
   */
  async deleteComment ({
    commentId,
  }: {
    commentId: number | string
  }): Promise<boolean | void> {
    try {
      if (!this.API || !this.issue) return

      const success = await this.API.deleteComment({
        accessToken: this.accessToken,
        issueId: this.issue.id,
        commentId,
      })

      return success
    } catch (e) {
      this.$emit('error', e)
      throw e
    }
  }

  /**
   * Get reactions of a comment
   */
  async getCommentReactions ({
    commentId,
  }: {
    commentId: string | number
  }): Promise<VssueAPI.Reactions | void> {
    try {
      if (!this.API || !this.issue) return

      const reactions = await this.API.getCommentReactions({
        accessToken: this.accessToken,
        issueId: this.issue.id,
        commentId,
      })

      return reactions
    } catch (e) {
      this.$emit('error', e)
      throw e
    }
  }

  /**
   * Create a new reaction to a certain comment
   */
  async postCommentReaction ({
    commentId,
    reaction,
  }: {
    commentId: string | number
    reaction: keyof VssueAPI.Reactions
  }): Promise<boolean> {
    try {
      if (!this.API || !this.issue) return false

      const success = await this.API.postCommentReaction({
        accessToken: this.accessToken,
        issueId: this.issue.id,
        commentId,
        reaction,
      })

      return success
    } catch (e) {
      this.$emit('error', e)
      throw e
    }
  }

  /**
   * Get Ratings of this vssue according to the issue id
   */
  async getRatings (): Promise<VssueAPI.Comments | void> {
    try {
      if (!this.API || !this.issueR || this.isLoadingComments) return

      this.isLoadingComments = true

      const ratings = await this.API.getRatings({
        accessToken: this.accessToken,
        issueId: this.issueR.id,
        query: this.query,
      })

      this.ratings = ratings

      if (this.query.page !== ratings.page) {
        this.query.page = ratings.page
      }

      if (this.query.perPage !== ratings.perPage) {
        this.query.perPage = ratings.perPage
      }

      return ratings
    } catch (e) {
      if (e.response && [401, 403].includes(e.response.status) && !this.isLogined) {
        this.isLoginRequired = true
      } else {
        this.$emit('error', e)
        throw e
      }
    } finally {
      this.isLoadingComments = false
    }
  }

  /**
   * Redirect to the platform's authorization page
   */
  login (): void {
    if (!this.API) return
    this.API.redirectAuth()
  }

  /**
   * Clean the access token stored in local storage
   */
  logout (): void {
    this.setAccessToken(null)
    this.user = null
  }

  /**
   * Handle authorization and set access_token
   */
  async handleAuth (): Promise<void> {
    if (!this.API) return

    // handle authorize and try to get the access_token
    const accessToken = await this.API.handleAuth()

    if (accessToken) {
      // new access_token
      this.setAccessToken(accessToken)
      this.user = await this.API.getUser({ accessToken })
    } else if (this.getAccessToken()) {
      // have access_token in localstorage
      this.user = await this.API.getUser({ accessToken: this.accessToken })
    } else {
      // no access_token
      this.setAccessToken(null)
      this.user = null
    }
  }

  /**
   * Get access token from local storage
   */
  getAccessToken (): VssueAPI.AccessToken {
    this.accessToken = window.localStorage.getItem(this.accessTokenKey)
    return this.accessToken
  }

  /**
   * Save access token to local storage
   */
  setAccessToken (token: VssueAPI.AccessToken): void {
    if (token === null) {
      window.localStorage.removeItem(this.accessTokenKey)
    } else {
      window.localStorage.setItem(this.accessTokenKey, token)
    }
    this.accessToken = token
  }
}

export default VssueStore
