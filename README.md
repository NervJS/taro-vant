# Ant Design Mobile

> Taro v3.3+

在 Taro 中使用有赞前端团队开源的移动端组件库[Vant](https://vant-contrib.gitee.io/vant/#/zh-CN/home)。

`Vant` 官方示例：https://vant-contrib.gitee.io/vant/mobile.html#/zh-CN。

能直接兼容使用的组件大概为 **70%**，具体适配情况请见下文。

## Getting Start

```bash
# 安装 CLI
npm i @tarojs/cli@next -g

# 启动项目
cd taro-vant
npm i
taro build --type weapp --watch

# 预览项目时需要以 prod 模式打包
taro build --type weapp
```

## 兼容工作

相对于官方示例的 H5 代码，本项目主要做了以下兼容工作：

### 1. `<body>`

`<body>` 标签使用 `<div className='h5-body'>` 进行模拟。

### 2. 浏览器默认样式

#### 方式一、开发者可以选择在全局引入浏览器的默认样式

Taro 提供两种内置样式我们可以直接引入生效：

- `@tarojs/taro/html.css`: W3C HTML4 的内置样式，只有 HTML4 标签样式，体积较小，兼容性强，能适应大多数情况。
- `@tarojs/taro/html5.css`: Chrome(Blink) HTML5 的内置样式，内置样式丰富，包括了大多数 HTML5 标签，体积较大，不一定支持所有小程序容器。

```scss
// app.css
// html4
import '@tarojs/taro/html.css';
// html5
import '@tarojs/taro/html5.css';
```

#### 方式二、只摘取部分需要的浏览器默认样式

以往编写 H5 应用时，我们常常会写一些样式去重置浏览器默认样式。所以一般情况不需要引入，或者可以手动挑选必须的样式。

```scss
// app.css
// 以下是为了适配 VantUI 项目所需要的默认样式
.h5-span {
  display: inline;
}

.h5-button,
.h5-input {
  display: inline-block;
}

.h5-button::after {
  border: none;
}

.van-button--hairline::after {
  transform-origin: unset;
  width: unset;
  height: unset;
}
```

### 3. 尺寸单位

Taro 默认会对开发者编写的尺寸进行转换：

- 小程序：px -> rpx
- H5：px -> rem

但是组件库一般按照 750px 设计稿的 1/2 编写尺寸，Taro 不需要再对组件库的尺寸进行转换。

可以配置 `@tarojs/plugin-html` 的 `pxtransformBlackList` 选项进行过滤：

```js
// config/index.js
config = {
  plugins: [
    ['@tarojs/plugin-html', {
      // 过滤 vant 组件库的前缀：van-
      pxtransformBlackList: [/demo-/, /van-/]
    }]
  ]
  // ...
}
```

### 4. SVG 图标

小程序不支持 SVG，目前组件库中的 SVG 图标都不能使用。

开发者可以配置的图标尽量使用 `<img>`，组件内置的 SVG 图标则暂时没有办法处理。

### 5. 获取元素尺寸

因为在小程序中获取元素尺寸的 API（SelectorQuery） 是**异步**的，和 H5 的**同步**获取（如 `elment.offsetHeight`）不一样。所以需要调用 H5 DOM API 获取元素尺寸的组件，如 `Calendar` 等均不能使用。

### 6. 样式选择器

以下选择器不能正常工作：

- 通配符 `*`
- 媒体查询
- 属性选择器，当属性不是对应小程序组件的内置属性时

### 7. 兼容 Vue `<transition>`

`<transition>` 组件内部使用了 `getComputedStyle`，用于嗅探组件上的动画样式。但是在小程序中没有办法实现 `getComputedStyle`，可以通过以下方法进行 hack：

为元素的 `style` 设置 `transitionDuration` 或 `animationDuration` 指定过渡时间，即可兼容 `<transition>`。

```jsx
<transition>
  <div style="animationDuration: 0.5s" />
</transition>
```

### 8. 兼容使用了过渡动画的组件

**VantUI** 中使用到过渡效果的组件，都是使用 `<transition>` 实现的。因此需要对它们进行兼容，可以分为两种情况：

#### 情况一、组件可以设置 `duration` 属性

**VantUI** 中部分组件可以设置 `duration` 属性，它能为组件增加 `animationDuration` 的 style，这时我们直接设置 `duration` 属性即可。

这些组件包括： `Popup`、`ActionSheet`、`Overlay`、`ShareSheet`、`Coupon`

#### 情况二

另外一些带有过渡动画的组件则没有 `duration` 属性，我们要手动为它们加上 `animationDuration` 的 style，例如 `内置样式` 的 demo。

还有一些组件把过渡动画的元素封装在内，又没有对外暴露 `duration` 属性，则只能改写 **VantUI** 的源码，或忍受没有过渡动画了。

这些组件包括： `Dialog`、`NumberKeyboard`

### 兼容 `Tabs`

`Tabs` 在 **line** 风格下，需要调用 `getBoundingClientRect` API，这样是不支持的。

我们可以魔改它的样式来进行兼容：

```scss
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
```

另外，复合组件 `Cascader`、 `Coupon` 也使用了 `Tabs` 组件，在使用它们时也需要加上上述兼容样式。

### 兼容 `Form`

`Form`  组件里可以使用 **VantUI** 的 `Field`、`Checkbox`、`Radio`、`Stepper`、`Rate` 组件。

也可以兼容原生的 `Switch` 和 `Slider` 组件，但是增加需要以下兼容代码：

```jsx
<template>
  <van-form @submit="onSubmit">

    <van-field name="switch" :label="t('switch')">
      <template #input>
        <custom :value="switchChecked">
          <switch name="switch" :checked="switchChecked" @change="onSwitchChanged" />
        </custom>
      </template>
    </van-field>

    <van-field name="slider" :label="t('slider')">
      <template #input>
        <custom :value="slider">
          <slider class="my-slider" :value="slider" @change="onSliderChange" />
        </custom>
      </template>
    </van-field>

  </van-form>
</template>

<script>
import { FieldMixin } from 'vant/es/mixins/field'

// 开发者可以写一个类似的 Custom 组件去兼容 Switch 和 Slider 组件
// 详情请看完整 Form Demo
const Custom = {
  props: {
    value: null
  },
  mixins: [FieldMixin],
  render (h) {
    return this.$slots.default
  }
}
</script>
```

## 组件支持列表

### 基础组件

|  组件  | 是否支持 |  备注  |
| :---- | :------ | :---- |
| Button | ✓ | 不能使用 SVG ICON |
| Cell | ✓ | |
| Icon | ✓ | |
| Image | ✓ | 1. 不能使用 `Lazyload`。2. 各种 `object-fit` 样式会失效。 |
| Row | ✓ | |
| Col | ✓ | |
| Popup | ✓ | 必须设置 `duration` 属性 |
| 内置样式 | ✓ | 动画的元素的 `style` 需要设置 `animationDuration` |
| Toast | ✗ | 使用 `Taro.showToast` 代替 |

### 表单组件

|  组件  | 是否支持 |  备注  |
| :---- | :------ | :---- |
| Calendar | ✗ | 不支持以浏览器的同步 API 获取 DOM 尺寸 |
| Cascader | ✓ | `<van-tabs>` 的样式需要魔改 |
| Checkbox | ✓ | |
| DatetimePicker | - | 使用小程序的 `<Picker>` 代替 |
| Field | ✓ | 清除按钮失效（`<Text>` 不会触发 `touchstart`）；不支持 `audosize` |
| Form | ✓ | 某些表单组件不能使用；`<Switch>` 和 `<Slider>` 需要额外兼容 |
| NumberKeyboard | ✓ | 不能使用 SVG ICON；过渡动画失效 |
| PasswordInput | ✓ | |
| Picker | - | 使用小程序的 `<Picker>` 代替 |
| Radio | ✓ | |
| Rate | ✓ | 不支持手势滑动评分 |
| Search | ✓ | |
| Slider | - | 使用小程序的 `<Slider>` 代替 |
| Stepper | ✓ | 注意 `<input>`； `<button>` 需要 `display: inline-block` |
| Switch | - | 使用小程序的 `<Switch>` 代替 |
| Uploader | ✗ | H5 与小程序上传文件的方式不同 |

### 反馈组件

|  组件  | 是否支持 |  备注  |
| :---- | :------ | :---- |
| ActionSheet | ✓ | 必须设置 `duration` 属性；不能使用 SVG ICON |
| Dialog | ✓ | 只能以组件形式调用；过渡效果部分丢失；不能使用 SVG ICON |
| DropdownMenu | ✗ | 不支持以浏览器的同步 API 获取 DOM 尺寸 |
| Loading | ✓ | 不能使用 SVG ICON |
| Notify | ✗ | 不能在页面组件的 DOM 树之外插入元素 |
| Overlay | ✓ | 必须设置 `duration` 属性 |
| PullRefresh | ✗ | 不支持以浏览器的同步 API 获取 DOM 尺寸 |
| ShareSheet | ✓ | 必须设置 `duration` 属性 |
| SwipeCell | ✗ | 不支持以浏览器的同步 API 获取 DOM 尺寸 |

### 展示组件

|  组件  | 是否支持 |  备注  |
| :---- | :------ | :---- |
| Badge | ✓ |  |
| Circle | ✗ | 小程序不支持 SVG |
| Collapse | ✓ | 过渡动画效果缺失（不支持以浏览器的同步 API 获取 DOM 尺寸） |
| CountDown | ✓ |  |
| Divider | ✓ |  |
| Empty | ✓ | 不能使用 SVG ICON |
| ImagePreview | ✗ | 使用 `Taro.previewImage` 代替 |
| Lazyload | ✗ |  |
| List | ✗ | 不支持以浏览器的同步 API 获取 DOM 尺寸 |
| NoticeBar | ✓ | 不支持滚动播放（不支持以浏览器的同步 API 获取 DOM 尺寸） |
| Popover | ✗ | 不能在页面组件的 DOM 树之外插入元素 |
| Progress | ✗ | 不支持以浏览器的同步 API 获取 DOM 尺寸 |
| Skeleton | ✓ |  |
| Steps | ✓ |  |
| Sticky | ✗ | 使用小程序的 `IntersectionObserver` 代替 |
| Swipe | ✗ | 使用小程序的 `Swiper` 代替 |
| Tag | ✓ |  |

### 导航组件

|  组件  | 是否支持 |  备注  |
| :---- | :------ | :---- |
| Grid  | ✓ | 徽标失效（`<i>` 里不能嵌套 `<div>`） |
| IndexBar  | ✗ | 不支持以浏览器的同步 API 获取 DOM 尺寸 |
| NavBar  | ✓ |  |
| Pagination  | ✓ |  |
| Sidebar  | ✓ |  |
| Tab  | ✓ | `line` 风格需要对样式进行魔改 |
| Tabbar  | ✓ |  |
| TreeSelect  | ✓ |  |


### 业务组件

|  组件  | 是否支持 |  备注  |
| :---- | :------ | :---- |
| AddressEdit | ✗ |  |
| AddressList | ✓ |  |
| Area | - | 使用小程序的 `<Picker>` 代替 |
| Card | ✓ |  |
| ContactCard | ✓ |  |
| ContactEdit | ✗ | 删除按钮失效（不能在页面组件的 DOM 树之外插入元素） |
| ContactList | ✓ |  |
| Coupon | ✓ | `<van-popup>` 必须设置 `duration` 属性；`<van-tabs>` 的样式需要魔改 |
| GoodsAction | ✓ |  |
| SubmitBar | ✓ |  |
| Sku | ✗ | 按钮提示弹层不显示（不能在页面组件的 DOM 树之外插入元素）；留言区部分表单组件不支持 |

## 共建

**VantUI** 的组件非常丰富且实用，如 `Sku` 等组件目前未能兼容实在非常遗憾。

但其实很多目前没能兼容的组件，只要针对小程序环境做一点兼容工作，是可以使用的。因此，我们十分期待各位同学参与共建～
