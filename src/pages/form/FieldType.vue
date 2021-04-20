<template>
  <demo-block :title="t('fieldType')">
    <van-form @submit="onSubmit">

      <van-field name="switch" :label="t('switch')">
        <template #input>
          <custom :value="switchChecked">
            <switch name="switch" :checked="switchChecked" @change="onSwitchChanged" />
          </custom>
        </template>
      </van-field>

      <van-field name="checkbox" :label="t('checkbox')">
        <template #input>
          <van-checkbox v-model="checkbox" shape="square" />
        </template>
      </van-field>

      <van-field name="checkboxGroup" :label="t('checkboxGroup')">
        <template #input>
          <van-checkbox-group v-model="checkboxGroup" direction="horizontal">
            <van-checkbox name="1" shape="square">
              {{ t('checkbox') }} 1
            </van-checkbox>
            <van-checkbox name="2" shape="square">
              {{ t('checkbox') }} 2
            </van-checkbox>
          </van-checkbox-group>
        </template>
      </van-field>

      <van-field name="radio" :label="t('radio')">
        <template #input>
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1">{{ t('radio') }} 1</van-radio>
            <van-radio name="2">{{ t('radio') }} 2</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <van-field name="stepper" :label="t('stepper')">
        <template #input>
          <van-stepper v-model="stepper" />
        </template>
      </van-field>

      <van-field name="rate" :label="t('rate')">
        <template #input>
          <van-rate v-model="rate" :touchable="false" />
        </template>
      </van-field>

      <van-field name="slider" :label="t('slider')">
        <template #input>
          <custom :value="slider">
            <slider class="my-slider" :value="slider" @change="onSliderChange" />
          </custom>
        </template>
      </van-field>

      <div style="margin: 16px 16px 0">
        <van-button round block type="info" native-type="submit">
          {{ t('submit') }}
        </van-button>
      </div>
    </van-form>
  </demo-block>
</template>

<script>
import { Field, Form, Button, RadioGroup, Radio, CheckboxGroup, Checkbox, Stepper, Rate } from 'vant'
import { FieldMixin } from 'vant/es/mixins/field'

// 开发者可以写一个类似的 Custom 组件去兼容 Switch 和 Slider 组件
const Custom = {
  props: {
    value: null
  },
  mixins: [FieldMixin],
  render (h) {
    return this.$slots.default
  }
}

export default {
  components: {
    'van-form': Form,
    'van-button': Button,
    'van-field': Field,
    'van-radio-group': RadioGroup,
    'van-radio': Radio,
    'van-checkbox-group': CheckboxGroup,
    'van-checkbox': Checkbox,
    'van-stepper': Stepper,
    'van-rate': Rate,
    'custom': Custom
  },
  i18n: {
    'zh-CN': {
      rate: '评分',
      radio: '单选框',
      submit: '提交',
      switch: '开关',
      slider: '滑块',
      picker: '选择器',
      stepper: '步进器',
      checkbox: '复选框',
      uploader: '文件上传',
      fieldType: '表单项类型',
      checkboxGroup: '复选框组',
      requireCheckbox: '请勾选复选框',
    },
    'en-US': {
      rate: 'Rate',
      radio: 'Radio',
      submit: 'Submit',
      switch: 'Switch',
      slider: 'Slider',
      picker: 'Picker',
      stepper: 'Stepper',
      checkbox: 'Checkbox',
      uploader: 'Uploader',
      fieldType: 'Field Type',
      checkboxGroup: 'Checkbox Group',
      requireCheckbox: 'Checkbox is required',
    },
  },
  data() {
    return {
      rate: 3,
      radio: '1',
      slider: 50,
      stepper: 1,
      uploader: [{ url: 'https://img01.yzcdn.cn/vant/leaf.jpg' }],
      checkbox: false,
      checkboxGroup: [],
      switchChecked: false,
    };
  },
  methods: {
    onSubmit(values) {
      console.log(values);
    },
    onSwitchChanged (e) {
      this.switchChecked = e.detail.value
    },
    onSliderChange (e) {
      this.slider = e.detail.value
    }
  },
};
</script>

<style lang="less">
.my-slider {
  width: 100%;
}
</style>
