<template>
  <div class="container">
    <img src="~/assets/workload-example.png" />
    <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching plans</p>
    <ul v-else>
      <li v-for="(plan, index) in plans" :key="index">
        {{ plan }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      plans: []
    }
  },
  async fetch() {
    this.plans = await fetch('https://eoyge3duj7xtdqd.m.pipedream.net/').then(
      (res) => res.json()
    )
  }
}
</script>

<style lang="sass">
.container
  display: flex
  align-item: center
  img
    max-width: 60%
</style>
