<template>
  <div class="error-message">
    <ErrorIcon class="error-message__icon" alt="A error icon" />
    <p class="error-message__text" :aria-labelledby="text">
      {{ text }}
    </p>
  </div>
</template>

<script>
import ErrorIcon from '@/assets/icons/error.svg?inline'

export default {
  components: {
    ErrorIcon
  },
  props: {
    text: {
      type: String,
      default: 'An error occurred'
    }
  }
}
</script>

<style lang="scss" scoped>
.error-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
}

.error-message__icon {
  height: 150px;
}

.error-message__text {
  font-size: $font-size--21;
  margin: 5px 0;
  text-align: center;
}
</style>
