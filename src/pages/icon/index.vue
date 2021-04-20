<template>
  <demo-section class="demo-icon">
    <van-tabs v-model="tab" :sticky="true">
      <van-tab :title="t('demo')">
        <demo-block :title="t('basicUsage')">
          <van-col span="6">
            <van-icon :name="demoIcon" />
          </van-col>
          <van-col span="6">
            <van-icon :name="demoImage" />
          </van-col>
        </demo-block>

        <demo-block :title="t('badge')">
          <van-col span="6">
            <van-icon :name="demoIcon" dot />
          </van-col>
          <van-col span="6">
            <van-icon :name="demoIcon" badge="9" />
          </van-col>
          <van-col span="6">
            <van-icon :name="demoIcon" badge="99+" />
          </van-col>
        </demo-block>

        <demo-block :title="t('color')">
          <van-col span="6">
            <van-icon name="cart-o" color="#1989fa" />
          </van-col>
          <van-col span="6">
            <van-icon name="fire-o" :color="RED" />
          </van-col>
        </demo-block>

        <demo-block :title="t('size')">
          <van-col span="6">
            <van-icon :name="demoIcon" size="40" />
          </van-col>
          <van-col span="6">
            <van-icon :name="demoIcon" size="3rem" />
          </van-col>
        </demo-block>
      </van-tab>

      <van-tab :title="t('basic')">
        <van-col
          v-for="icon in icons.basic"
          :key="icon"
          span="6"
        >
          <van-icon :name="icon" />
          <span>{{ icon }}</span>
        </van-col>
      </van-tab>

      <van-tab :title="t('outline')">
        <van-col
          v-for="icon in icons.outline"
          :key="icon"
          span="6"
        >
          <van-icon :name="icon" />
          <span>{{ icon }}</span>
        </van-col>
      </van-tab>

      <van-tab :title="t('filled')">
        <van-col
          v-for="icon in icons.filled"
          :key="icon"
          span="6"
        >
          <van-icon :name="icon" />
          <span>{{ icon }}</span>
        </van-col>
      </van-tab>
    </van-tabs>
  </demo-section>
</template>

<script>
import { Tabs, Tab, Col, Icon } from 'vant'
import icons from '@vant/icons';
import { RED } from '../../utils/constant.ts';

export default {
  components: {
    'van-tabs': Tabs,
    'van-tab': Tab,
    'van-col': Col,
    'van-icon': Icon,
  },
  i18n: {
    'zh-CN': {
      title: '图标列表',
      badge: '徽标提示',
      basic: '基础图标',
      copied: '复制成功',
      outline: '线框风格',
      filled: '实底风格',
      demo: '用法示例',
      color: '图标颜色',
      size: '图标大小',
    },
    'en-US': {
      title: 'Icon List',
      badge: 'Show Badge',
      basic: 'Basic',
      copied: 'Copied',
      outline: 'Outline',
      filled: 'Filled',
      demo: 'Demo',
      color: 'Icon Color',
      size: 'Icon Size',
    },
  },
  data() {
    this.RED = RED;
    this.icons = icons;
    return {
      tab: 0,
      demoIcon: 'chat-o',
      demoImage: 'https://b.yzcdn.cn/vant/icon-demo-1126.png',
    };
  }
};
</script>

<style lang="less">
@import '../../style/var';
.demo-icon {
  font-size: 0;
  &-list {
    box-sizing: border-box;
    min-height: calc(100vh - 65px);
    padding-top: 10px;
  }
  &-notify {
    font-size: 13px;
  }
  .van-col {
    display: inline-block;
    float: none;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    span {
      display: block;
      height: 36px;
      margin: -4px 0 4px;
      padding: 0 5px;
      color: @gray-7;
      font-size: 12px;
      line-height: 18px;
    }
    &:active {
      background-color: @active-color;
    }
  }
  .van-icon {
    margin: 16px 0 16px;
    color: @text-color;
    font-size: 32px;
  }
  .van-tab__pane {
    width: auto;
    margin: 20px;
    background-color: #fff;
    border-radius: 12px;
  }
}
// 魔改 tabs 样式
.van-tabs__line {
  display: none;
}
.van-tab.van-tab--active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -20px;
  z-index: 1;
  width: 40px;
  height: 3px;
  background-color: #ee0a24;
  border-radius: 3px;
}
</style>
