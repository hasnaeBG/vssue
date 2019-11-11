import Vue from 'vue'
import VssuePlugin, {
  Vssue,
  VssueComponent,
} from 'vssue'
// @ts-ignore
import PlatformAPI from '@vssue/api-bitbucket-v2'

import 'vssue/dist/vssue.css'
import 'github-markdown-css'

const onlyComponent: boolean = process.env.VUE_APP_ONLY_COMPONENT === 'true'

const options: Partial<Vssue.Options> = {
  api: PlatformAPI,
  owner: process.env.VUE_APP_OWNER,
  repo: process.env.VUE_APP_REPO,
  clientId: process.env.VUE_APP_CLIENT_ID,
  clientSecret: process.env.VUE_APP_CLIENT_SECRET,
  state: 'Vssue',
  labels: ['Vssue'],
  prefix: '[Vssue]',
  admins: [],
  perPage: 5,
  proxy: url => `https://cors-anywhere.herokuapp.com/${url}`,
  issueContent: ({ url }) => url,
  autoCreateIssue: true,
}

if (!onlyComponent) {
  Vue.use(VssuePlugin, options)
} else {
  Vue.component('Vssue', VssueComponent)
}

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',

  data () {
    return {
      title: 'Vssue Dev',
      // issueId: 2,
      options: onlyComponent ? options : {
        // override the default options here if use plugin
        perPage: 7,
        // locale: 'en',
        // issueContent: ({ url }) => `This issue is created by Vssue to store comments of page: ${url}`,
        // issueContent: async ({ url }) => await Promise.resolve(`This issue is created by Vssue to store comments of page: ${url}`),
      },
    }
  },

  // template: '<Vssue :title:"title" :issueId="issueId" :options="options" />',
  template: '<Vssue :title="title" :options="options" />',
})
