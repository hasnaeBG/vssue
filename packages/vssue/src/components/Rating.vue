<template>
  <div>
    <VssueNotice />
    <br>
    <star-rating
      v-model="vssue.totalRating"
      :increment="0.5"
      :read-only="true"
      :star-size="30"
      :round-start-rating="false"
    />

    <div
      v-if="user"
      class="py-4"
    >
      <button
        class="btn btn-outline-secondary"
        @click="show=true"
      >
        Vote for the post
      </button>

      <stack-modal
        :show="show"
        title="Your vote"
        @close="closeModal"
      >
        <!-- Confirm modal to delete the vote -->
        <div v-if="confirmModal">
          <p>Are you sure you want to delete your review ?</p>
          <VssueButton
            class="vssue-button-submit-comment"
            type="default"
            @click="deleteVote()"
          >
            <VssueIcon
              v-show="deleting"
              name="loading"
            />

            {{ vssue.$t(deleting ? 'deleting' : 'deleteVote') }}
          </VssueButton>
        </div>
        <!-- Confirm modal to delete the vote ! end -->

        <!-- Submit and edit modal -->
        <div v-else>
          <p v-if="editModal">
            Update your vote :
          </p>
          <star-rating
            v-model="userRatingValue"
            :increment="0.5"
            text-class="custom text"
            :star-size="30"
            :read-only="!isRatingDisabled"
          />
          <br>

          <!-- Edit modal footer -->
          <div v-if="vssue.userRating && !editModal">
            <VssueButton
              class="vssue-button-submit-comment modalButton"
              type="primary"
              @click="activeUpdate()"
            >
              <VssueIcon
                v-show="updating"
                name="loading"
              />

              {{ vssue.$t(updating ? 'updating' : 'updateVote') }}
            </VssueButton>

            <VssueButton
              class="vssue-button-submit-comment modalButton"
              type="default"
              @click="confirmDelete()"
            >
              Delete
            </VssueButton>
          </div>
          <!-- Edit modal footer ! end -->

          <!-- Submit modal footer -->
          <div v-else>
            <VssueButton
              class="vssue-button-submit-comment"
              type="primary"
              @click="submit()"
            >
              <VssueIcon
                v-show="loading"
                name="loading"
              />
              {{ vssue.$t(loading ? 'submitting' : 'submit') }}
            </VssueButton>
          </div>
          <!-- Submit modal footer ! end -->
        </div>

        <div slot="modal-footer" />
      </stack-modal>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Inject } from 'vue-property-decorator'
import { VssueAPI, Vssue } from 'vssue'
import StarRating from 'vue-star-rating'
import StackModal from '@innologica/vue-stackable-modal'
import VssueNotice from './VssueNotice.vue'
import TransitionFade from './TransitionFade.vue'
import VssueButton from './VssueButton.vue'
import VssueIcon from './VssueIcon.vue'

@Component({
  components: {
    StarRating,
    StackModal,
    VssueNotice,
    TransitionFade,
    VssueButton,
    VssueIcon,
  },
})

export default class Rating extends Vue {
  @Inject() vssue!: Vssue.Store

  rating: number | null = null

  show: boolean = false

  editModal: boolean = false

  confirmModal : boolean = false

  get user (): VssueAPI.User | null {
    return this.vssue.user
  }

  get isRatingDisabled (): boolean {
    return this.user === null || this.vssue.issueR === null || this.userRatingValue === null || this.editModal
  }

  get isSubmitDisabled (): boolean {
    return this.vssue.isRating || this.vssue.issueR === null
  }

  get loading (): boolean {
    return this.vssue.isRating || this.vssue.isUpdatingVote
  }

  get deleting () : boolean {
    return this.vssue.isDeletingVote
  }

  get updating () : boolean {
    return this.vssue.isUpdatingVote
  }

  get userRatingValue (): number | null {
    if (this.vssue.userRating) { return JSON.parse(this.vssue.userRating.content.slice(3, this.vssue.userRating.content.length - 4)).rating }
    return null
  }

  set userRatingValue (rating : number | null) {
    this.rating = rating
  }

  async init () : Promise<void> {
    await this.vssue.getRatings()
    await this.vssue.getTotalRating()
    await this.vssue.getUserRating()
  }

  closeModal () : void {
    this.confirmModal = false
    this.editModal = false
    this.show = false
  }

  confirmDelete () : void {
    this.confirmModal = true
  }

  activeUpdate () : void {
    this.editModal = true
  }

  async submit (): Promise<void> {
    if (this.editModal && this.vssue.userRating !== null) {
      await this.vssue.putRating({ commentId: this.vssue.userRating.id, content: JSON.stringify({ rating: this.rating }) })
    } else {
      await this.vssue.postRating({ content: JSON.stringify({ rating: this.rating }) })
    }

    this.closeModal()
    await this.init()
  }

  async deleteVote (): Promise<void> {
    if (this.vssue.isPending || this.vssue.userRating === null) return

    const success = await this.vssue.deleteRating({
      commentId: this.vssue.userRating.id,
    })

    if (success) {
      this.closeModal()
      await this.init()
    } else {
      this.vssue.$emit('error', new Error(this.vssue.$t('deleteFailed') as string))
    }
  }
}
</script>

<style>
    @import "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
    .modalButton {
      margin: 5px
    }
</style>
