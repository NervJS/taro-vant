<template>
  <demo-block v-if="!isWeapp" :title="t('showWordLimit')">
    <van-field
      v-model="value"
      show-word-limit
      rows="2"
      type="textarea"
      maxlength="50"
      :label="t('message')"
      :placeholder="t('placeholder')"
    />
  </demo-block>
</template>

<script>
import { Field } from 'vant'

export default {
  components: {
    'van-field': Field
  },
  i18n: {
    'zh-CN': {
      message: '留言',
      placeholder: '请输入留言',
      showWordLimit: '显示字数统计',
    },
    'en-US': {
      message: 'Message',
      placeholder: 'Message',
      showWordLimit: 'Show Word Limit',
    },
  },

  data() {
    return {
      value: '',
    };
  },
};
</script>
