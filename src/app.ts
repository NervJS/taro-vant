import Vue from 'vue'
import DemoBlock from './components/demo-block'
import DemoSection from './components/demo-section'
import './locales'
import './app.less'

const App = {
  onShow (options) {
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
}

Vue.component(DemoBlock.name, DemoBlock)
Vue.component(DemoSection.name, DemoSection)

export default App
