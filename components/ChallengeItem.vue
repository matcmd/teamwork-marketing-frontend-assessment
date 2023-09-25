<template>
  <div class="challenge-item__container">
    {{ data.title }}
    <div v-show="data.open">
      {{ data.text }}
      <img :src="data.image" style="max-width: 300px;"/>
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
}
</script>
  
<style lang="scss" scoped>
</style>