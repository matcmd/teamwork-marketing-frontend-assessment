<template>
  <div class="page-wrapper">
    <template v-if="$fetchState.pending">
      <p>Loading...</p>
    </template>
    <template v-else-if="$fetchState.error">
      <p>{{ $fetchState.error.message }}</p>
    </template>
    <template v-else>
      <ChallengesList :data="challenges"/>
    </template>
  </div>
</template>

<script>
import { fetchChallenges } from '@/utils/api'

export default {
  name: 'IndexPage',
  async fetch() {
    this.addChallenges(await fetchChallenges());
    this.showChallenge(this.challenges?.items[0]?.id);
  },
  fetchOnServer: true,
  head() {
    return {
      title: 'List of Challenges'
    };
  },
  computed: {
    challenges() {
      return this.$store.state.challenges.data;
    }
  },
  methods: {
    addChallenges(challenges) {
      this.$store.commit('challenges/add', challenges);
    },
    showChallenge(challengeId) {
      this.$store.commit('challenges/open', challengeId);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>