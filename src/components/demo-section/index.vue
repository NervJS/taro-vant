<template>
  <section class="van-doc-demo-section">
    <slot />
  </section>
</template>

<script>
import { decamelize } from '../../common';
export default {
  name: 'demo-section'
};
</script>

<style lang="less">
.van-doc-demo-section {
  box-sizing: border-box;
  min-height: calc(100vh - 56px);
  padding-bottom: 20px;
}
</style>
