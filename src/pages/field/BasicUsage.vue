<template>
  <demo-block :title="t('basicUsage')">
    <van-cell-group>
      <van-field
        v-model="value"
        :label="t('label')"
        :placeholder="t('placeholder')"
      />
    </van-cell-group>
  </demo-block>
</template>

<script>
import { CellGroup, Field } from 'vant'

export default {
  components: {
    'van-cell-group': CellGroup,
    'van-field': Field
  },
  i18n: {
    'zh-CN': {
      label: '文本',
      placeholder: '请输入文本',
    },
    'en-US': {
      label: 'Label',
      placeholder: 'Text',
    },
  },

  data() {
    return {
      value: '',
    };
  },
};
</script>
