<template>
  <demo-section class="demo-dialog">
    <demo-block card :title="t('basicUsage')">
      <van-cell is-link :title="t('alert1')" @click="show1 = true" />
      <van-dialog
        v-model="show1"
        :title="t('title')"
        :message="t('content')"
      />

      <van-cell is-link :title="t('alert2')" @click="show2 = true" />
      <van-dialog
        v-model="show2"
        :message="t('content')"
      />

      <van-cell is-link :title="t('confirm')" @click="show3 = true" />
      <van-dialog
        v-model="show3"
        :title="t('title')"
        :message="t('content')"
        show-cancel-button
      />
    </demo-block>

    <demo-block card :title="t('roundButton')">
      <van-cell is-link :title="t('alert1')" @click="show4 = true" />
      <van-dialog
        v-model="show4"
        theme="round-button"
        :title="t('title')"
        :message="t('content')"
      />

      <van-cell is-link :title="t('alert2')" @click="show5 = true" />
      <van-dialog
        v-model="show5"
        theme="round-button"
        :message="t('content')"
      />
    </demo-block>

    <demo-block card :title="t('asyncClose')">
      <van-cell is-link :title="t('asyncClose')" @click="show6 = true" />
      <van-dialog
        v-model="show6"
        :title="t('title')"
        :message="t('content')"
        show-cancel-button
        :before-close="asyncClose"
      />
    </demo-block>

    <demo-block card :title="t('componentCall')">
      <van-cell is-link :title="t('componentCall')" @click="show7 = true" />
      <van-dialog
        v-model="show7"
        :title="t('title')"
        show-cancel-button
        :lazy-render="false"
        :overlay-style="{ 'animation-duration': '0.3s' }"
      >
        <img :src="image">
      </van-dialog>
    </demo-block>
  </demo-section>
</template>

<script>
import { Cell, Dialog } from 'vant'

export default {
  components: {
    'van-cell': Cell,
    'van-dialog': Dialog.Component
  },
  i18n: {
    'zh-CN': {
      alert1: '提示弹窗',
      alert2: '提示弹窗（无标题）',
      confirm: '确认弹窗',
      asyncClose: '异步关闭',
      roundButton: '圆角按钮样式',
      componentCall: '组件调用',
      content: '代码是写出来给人看的，附带能在机器上运行',
    },
    'en-US': {
      alert1: 'Alert',
      alert2: 'Alert without title',
      confirm: 'Confirm dialog',
      asyncClose: 'Async Close',
      roundButton: 'Round Button Style',
      componentCall: 'Component Call',
    },
  },
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      image: 'https://img01.yzcdn.cn/vant/apple-3.jpg',
    };
  },
  methods: {
    asyncClose (action, done) {
      if (action === 'confirm') {
        setTimeout(done, 1000);
      } else {
        done();
      }
    }
  },
};
</script>

<style lang="less">
@import '../../style/var';
.demo-dialog {
  img {
    box-sizing: border-box;
    width: 100%;
    padding: 25px 20px 0;
  }
}
</style>
