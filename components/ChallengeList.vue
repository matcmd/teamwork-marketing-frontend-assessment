<template>
  <div class="challenge-list" role="main">
    <transition name="fade" mode="out-in">
      <img
        :key="current.image"
        class="challenge-list__illustration"
        :src="current.image"
        alt="A challenge illustration" />
    </transition>
    <div class="challenge-list__container">
      <p class="tag" :aria-labelledby="data.tag">{{ data.tag }}</p>
      <h1 class="title" :aria-labelledby="data.title">{{ data.title }}</h1>
      <div
        v-for="(item, index) in data.items"
        :key="`challengesList-${index}-${item.id}`"
        class="challenge-item__wrapper">
        <LazyChallengeItem :data="item" @toggle="(id) => $emit('toggle', id)" />
      </div>
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
      return this.data?.items?.find(({ isOpen }) => isOpen)
    }
  }
}
</script>

<style lang="scss" scoped>
.challenge-list {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.challenge-list__illustration {
  display: none;
  max-width: 50%;
  flex: 1;
  margin-right: 50px;

  @include md {
    display: flex;
  }

  @include xl {
    max-width: 40%;
  }

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
}

.challenge-list__container {
  display: flex;
  flex-direction: column;
  width: 100%;

  @include sm {
    min-width: 326px;
    max-width: 400px;
  }

  .tag {
    color: $color--pink;
    font-size: $font-size--14;
    font-weight: $font-weight;
    margin: 0;
  }

  .title {
    color: $color--black;
    font-size: $font-size--28;
    font-weight: $font-weight--bold;
    margin: 0 0 34px 0;

    @include sm {
      font-size: $font-size--40;
    }
  }

  .challenge-item__wrapper {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
