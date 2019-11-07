<template>
  <Vssue
    :issue-id="issueId"
    :options="options"
  />
</template>

<script>
import BitbucketV2 from '@vssue/api-bitbucket-v2'

const platforms = {
  'bitbucket': {
    options: {
      api: BitbucketV2,
      owner: 'meteorlxy',
      repo: 'vssue',
      clientId: '6tKVqDXYzuvmzCnbGw',
    },
    issueId: 1,
  },
}

export default {
  name: 'VssueDemo',

  props: {
    platform: {
      type: String,
      required: true,
    },
  },

  computed: {
    options () {
      return platforms[this.platform].options
    },

    issueId () {
      return platforms[this.platform].issueId
    },
  },
}
</script>
