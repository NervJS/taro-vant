<template>
  <demo-block :title="t('insertButton')">
    <van-field
      v-model="sms"
      center
      clearable
      :label="t('sms')"
      :placeholder="t('smsPlaceholder')"
    >
      <template #button>
        <van-button size="small" type="primary">
          {{ t('sendSMS') }}
        </van-button>
      </template>
    </van-field>
  </demo-block>
</template>

<script>
import { Button, Field } from 'vant'

export default {
  components: {
    'van-field': Field,
    'van-button': Button
  },
  i18n: {
    'zh-CN': {
      sms: '短信验证码',
      sendSMS: '发送验证码',
      insertButton: '插入按钮',
      smsPlaceholder: '请输入短信验证码',
    },
    'en-US': {
      sms: 'SMS',
      sendSMS: 'Send SMS',
      insertButton: 'Insert Button',
      smsPlaceholder: 'SMS',
    },
  },

  data() {
    return {
      sms: '',
    };
  },
};
</script>
