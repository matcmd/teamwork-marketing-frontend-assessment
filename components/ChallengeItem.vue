<template>
  <div class="challenge-item" :class="{ active: data.isOpen }" aria-pressed="false" role="button" tabindex="0"
    @keyup.enter="toggle" @click="toggle">
    <div class="challenge-item__header">
      <h2 :aria-labelledby="data.title" class="title">{{ data.title }}</h2>
      <div class="arrow-icon">
        <ArrowIcon alt="An arrow icon" />
      </div>
    </div>
    <transition name="expand" mode="out-in">
      <div v-if="data.isOpen" :key="data.isOpen">
        <p :aria-hidden="!data.isOpen" :aria-labelledby="data.text" class="challenge-item__description">
          {{ data.text }}
        </p>
        <img class="challenge-item__illustration" :src="data.image" alt="A challenge illustration" />
      </div>
    </transition>
  </div>
</template>

<script>
import ArrowIcon from '@/assets/icons/arrow.svg?inline'

export default {
  components: {
    ArrowIcon
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggle() {
      !this.data.isOpen && this.$emit('toggle', this.data.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.challenge-item {
  background-color: $color--gray-light;
  padding: 18px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;

  &.active {
    .title {
      color: $color--blue;
    }

    .arrow-icon {
      transform: rotate(180deg);
    }
  }

  &:not(.active) {
    cursor: pointer;
  }
}

.challenge-item__header {
  display: flex;
  align-items: center;

  .title {
    color: $color--black-alt;
    font-size: $font-size--18;
    font-weight: $font-weight--medium;
    margin: 0;
    flex: 1;

    @include sm {
      font-size: $font-size--21;
    }
  }

  .arrow-icon {
    height: 18px;
    width: 18px;
    transition: transform .4s linear;
  }
}

.challenge-item__description {
  color: $color--gray-dark;
  font-size: $font-size--15;
  font-weight: $font-weight;
  margin: 15px 0;

  @include sm {
    font-size: $font-size--16;
  }
}

.challenge-item__illustration {
  max-width: 100%;
  align-self: center;

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  @include md {
    display: none;
  }
}

.expand-enter-active,
.expand-leave-active {
  transition: opacity .4s ease;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
}
</style>
