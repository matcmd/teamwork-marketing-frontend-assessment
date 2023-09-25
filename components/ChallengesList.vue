<template>
  <div class="challenges-list__container">
    <img :src="current.image" style="max-width: 300px;"/>
    {{ data.tag }}
    {{ data.title }}
    <div v-for="(item, index) in data.items" :key="`challengesList-${index}-${item.id}`">
      <ChallengeItem :data="item" />
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    current() {
      return this.data?.items?.find(({ open }) => open)
    }
  }
}
</script>
  
<style lang="scss" scoped>
</style>