<template>
  <div class="loading-spinner__container">
    <div
      class="loading-spinner"
      aria-live="polite"
      role="status"
      :aria-label="text"></div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Loading...'
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-spinner__container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.loading-spinner {
  display: inline-block;
  width: $font-size--40;
  height: $font-size--40;
  border: 4px solid $color--gray-light;
  border-radius: 50%;
  border-top-color: $color--gray-dark;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
