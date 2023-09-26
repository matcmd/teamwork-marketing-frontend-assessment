<template>
  <div class="page-wrapper">
    <LazyLoadingSpinner
      v-if="$fetchState.pending"
      text="Loading challenges, do not refresh" />
    <LazyErrorMessage
      v-else-if="$fetchState.error"
      :text="$fetchState.error.message" />
    <LazyChallengeList v-else :data="challenges" @toggle="showChallenge" />
  </div>
</template>

<script>
import { fetchChallenges } from '@/utils/api'

export default {
  name: 'IndexPage',
  async fetch() {
    this.addChallenges(await fetchChallenges())
    this.showChallenge(this.challenges?.items[0]?.id)
  },
  fetchOnServer: true,
  head() {
    return {
      title: 'List of Challenges'
    }
  },
  computed: {
    challenges() {
      return this.$store.state.challenges.data
    }
  },
  methods: {
    addChallenges(challenges) {
      this.$store.commit('challenges/add', challenges)
    },
    showChallenge(challengeId) {
      this.$store.commit('challenges/open', challengeId)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-wrapper {
  display: flex;
  margin: 40px 30px;
  width: 100%;
}
</style>
