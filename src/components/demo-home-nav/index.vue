<template>
  <div class="demo-home-nav">
    <div class="demo-home-nav__title">
      {{ group.title }}
    </div>
    <div class="demo-home-nav__group">
      <a
        v-for="navItem in group.items"
        :key="navItem.title"
        class="demo-home-nav__block"
        :href="navItem.path"
      >
        {{ navItem.title }}
        <arrow-right v-if="navItem.path" class="demo-home-nav__icon" />
      </a>
    </div>
  </div>
</template>

<script>
import ArrowRight from '../arrow-right';
export default {
  components: {
    ArrowRight,
  },
  props: {
    group: Object,
  },
  data() {
    return {
      active: [],
    };
  }
};
</script>

<style lang="less">
@import '../../common/style/var';
.demo-home-nav {
  &__title {
    margin: 24px 0 8px 16px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
  }
  &__block {
    position: relative;
    display: flex;
    margin: 0 0 12px;
    padding-left: 20px;
    color: #323233;
    font-weight: 600;
    font-size: 14px;
    line-height: 40px;
    background: #f7f8fa;
    border-radius: 99px;
    transition: background 0.3s;
    &:hover {
      background: darken(#f7f8fa, 3%);
    }
    &:active {
      background: darken(#f7f8fa, 6%);
    }
  }
  &__icon {
    position: absolute;
    top: 50%;
    right: 16px;
    width: 16px;
    height: 16px;
    margin-top: -8px;
  }
}
</style>
