<template>
  <div class="demo-home">
    <h1 class="demo-home__title">
      <img src="https://img01.yzcdn.cn/vant/logo.png">
      <span>Vant</span>
    </h1>
    <h2 class="demo-home__desc">
      轻量、可靠的移动端组件库
    </h2>
    <template v-for="(group, index) in nav">
      <demo-home-nav :group="group" :key="index" />
    </template>
  </div>
</template>

<script>
import DemoHomeNav from '../../components/demo-home-nav';

export default {
  components: {
    DemoHomeNav,
  },
  data () {
    return {
      nav: [
        {
          title: '基础组件',
          items: [
            {
              title: 'Button 按钮',
              path: '/pages/button/index'
            },
            {
              title: 'Cell 单元格',
              path: '/pages/cell/index'
            },
            {
              title: 'Icon 图标',
              path: '/pages/icon/index'
            },
            {
              title: 'Image 图片',
              path: '/pages/image/index'
            },
            {
              title: 'Layout 布局',
              path: '/pages/layout/index'
            },
            {
              title: 'Popup 弹出层',
              path: '/pages/popup/index'
            },
            {
              title: 'Style 内置样式',
              path: '/pages/style/index'
            },
            {
              title: 'Toast 轻提示',
              path: '/pages/toast/index'
            }
          ]
        },
        {
          title: '表单组件',
          items: [
            {
              title: 'Calendar 日历'
            },
            {
              title: 'Cascader 级联选择',
              path: '/pages/cascader/index'
            },
            {
              title: 'Checkbox 复选框',
              path: '/pages/checkbox/index'
            },
            {
              title: 'DatetimePicker 时间选择'
            },
            {
              title: 'Field 输入框',
              path: '/pages/field/index'
            },
            {
              title: 'Form 表单',
              path: '/pages/form/index'
            },
            {
              title: 'NumberKeyboard 数字键盘',
              path: '/pages/number-keyboard/index'
            },
            {
              title: 'PasswordInput 密码输入框',
              path: '/pages/password-input/index'
            },
            {
              title: 'Picker 选择器'
            },
            {
              title: 'Radio 单选框',
              path: '/pages/radio/index'
            },
            {
              title: 'Rate 评分',
              path: '/pages/rate/index'
            },
            {
              title: 'Search 搜索',
              path: '/pages/search/index'
            },
            {
              title: 'Slider 滑块'
            },
            {
              title: 'Stepper 步进器',
              path: '/pages/stepper/index'
            },
            {
              title: 'Switch 开关'
            },
            {
              title: 'Uploader 文件上传'
            }
          ]
        },
        {
          title: '反馈组件',
          items: [
            {
              title: 'ActionSheet 动作面板',
              path: '/pages/action-sheet/index'
            },
            {
              title: 'Dialog 弹出框',
              path: '/pages/dialog/index'
            },
            {
              title: 'DropdownMenu 下拉菜单'
            },
            {
              title: 'Loading 加载',
              path: '/pages/loading/index'
            },
            {
              title: 'Notify 消息通知'
            },
            {
              title: 'Overlay 遮罩层',
              path: '/pages/overlay/index'
            },
            {
              title: 'PullRefresh 下拉刷新'
            },
            {
              title: 'ShareSheet 分享面板',
              path: '/pages/share-sheet/index'
            },
            {
              title: 'SwipeCell 滑动单元格',
              path: '/pages/demo/index'
            }
          ]
        },
        {
          title: '展示组件',
          items: [
            {
              title: 'Badge 徽标',
              path: '/pages/badge/index'
            },
            {
              title: 'Circle 环形进度条',
              path: ''
            },
            {
              title: 'Collapse 折叠面板',
              path: '/pages/collapse/index'
            },
            {
              title: 'CountDown 倒计时',
              path: '/pages/countdown/index'
            },
            {
              title: 'Divider 分割线',
              path: '/pages/divider/index'
            },
            {
              title: 'Empty 空状态',
              path: '/pages/empty/index'
            },
            {
              title: 'ImagePreview 图片预览'
            },
            {
              title: 'Lazyload 懒加载'
            },
            {
              title: 'List 列表',
              path: ''
            },
            {
              title: 'NoticeBar 通知栏',
              path: '/pages/notice-bar/index'
            },
            {
              title: 'Popover 气泡弹出框',
              path: ''
            },
            {
              title: 'Progress 进度条',
              path: ''
            },
            {
              title: 'Skeleton 骨架屏',
              path: '/pages/skeleton/index'
            },
            {
              title: 'Steps 步骤条',
              path: '/pages/steps/index'
            },
            {
              title: 'Sticky 粘性布局',
              path: ''
            },
            {
              title: 'Swipe 轮播',
              path: ''
            },
            {
              title: 'Tag 标签',
              path: '/pages/tag/index'
            }
          ]
        },
        {
          title: '导航组件',
          items: [
            {
              title: 'Grid 宫格',
              path: '/pages/grid/index'
            },
            {
              title: 'IndexBar 索引栏',
              path: ''
            },
            {
              title: 'NavBar 导航栏',
              path: '/pages/nav-bar/index'
            },
            {
              title: 'Pagination 分页',
              path: '/pages/pagination/index'
            },
            {
              title: 'Sidebar 侧边导航',
              path: '/pages/sidebar/index'
            },
            {
              title: 'Tab 标签页',
              path: '/pages/tab/index'
            },
            {
              title: 'Tabbar 标签栏',
              path: '/pages/tabbar/index'
            },
            {
              title: 'TreeSelect 分类选择',
              path: '/pages/tree-select/index'
            }
          ]
        },
        {
          title: '业务组件',
          items: [
            {
              title: 'AddressEdit 地址编辑'
            },
            {
              title: 'AddressList 地址列表',
              path: '/pages/address-list/index'
            },
            {
              title: 'Area 省市区选择'
            },
            {
              title: 'Card 商品卡片',
              path: '/pages/card/index'
            },
            {
              title: 'ContactCard 联系人卡片',
              path: '/pages/contact-card/index'
            },
            {
              title: 'ContactEdit 联系人编辑'
            },
            {
              title: 'ContactList 联系人列表',
              path: '/pages/contact-list/index'
            },
            {
              title: 'Coupon 优惠券',
              path: '/pages/coupon/index'
            },
            {
              title: 'GoodsAction 商品导航',
              path: '/pages/goods-action/index'
            },
            {
              title: 'SubmitBar 提交订单栏',
              path: '/pages/submit-bar/index'
            },
            {
              title: 'Sku 商品规格'
            }
          ]
        }
      ]
    }
  }
};
</script>

<style lang="less">
@import '../../common/style/var';
.demo-home {
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  padding: 46px 20px 20px;
  background: #fff;
  &__title,
  &__desc {
    padding-left: 16px;
    font-weight: normal;
    line-height: 1;
    user-select: none;
  }
  &__title {
    margin: 0 0 16px;
    font-size: 32px;
    img,
    span {
      display: inline-block;
      vertical-align: middle;
    }
    img {
      width: 32px;
      height: 32px;
    }
    span {
      margin-left: 16px;
    }
    &--small {
      font-size: 24px;
    }
  }
  &__desc {
    margin: 0 0 40px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
  }
}
</style>
