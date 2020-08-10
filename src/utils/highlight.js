import hljs from 'highlight.js';
import 'highlight.js/styles/atelier-savanna-dark.css'

let Highlight = {};
// 自定义插件
Highlight.install = function (Vue) {
  // 自定义指令 v-highlight
  Vue.directive('highlight', {
    // 被绑定元素插入父节点时调用
    // inserted: function (el) {
    // let blocks = el.querySelectorAll('pre code');
    // blocks.forEach((block) => {
    //   hljs.highlightBlock(block)
    // })
    // },
    // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
    componentUpdated: function (el) {
      let blocks = el.querySelectorAll('pre code');
      blocks.forEach((block) => {
        let i = 1
        const n = (m) => `<em aria-hidden="true" class="line-label">${m > 9 ? m : '0' + m}</em>`
        block.innerHTML = block.innerHTML.replace(/\n+$/g, "")
        block.innerHTML = `<div class="line" >${n(i)}${block.innerHTML.replace(/\n/g, () => {
          i++
          return `</div><div class="line">${n(i)}`
        })}</div>`
        hljs.highlightBlock(block)
      })
    }
  })
};

export default Highlight;
