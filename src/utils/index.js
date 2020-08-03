export default {
  formatTime (timestamp) {
    const date = new Date(timestamp)
    const Y = date.getFullYear() + '-'
    const M =
      (date.getMonth() + 1 < 10
        ? '0' + (date.getMonth() + 1)
        : date.getMonth() + 1) + '-'
    const D =
      date.getDate() < 10
        ? '0' + date.getDate() + ' '
        : date.getDate() + ' '
    const h =
      date.getHours() < 10
        ? '0' + date.getHours() + ':'
        : date.getHours() + ':'
    const m =
      date.getMinutes() < 10
        ? '0' + date.getMinutes() + ':'
        : date.getMinutes() + ':'
    const s =
      date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    return Y + M + D + h + m + s
  },
}

// import 'highlight.js/styles/googlecode.css'
// import hljs from 'highlight.js' //导入代码高亮文件

// async function highlighthandle(){
//     await hljs;
//     let highlight = document.querySelectorAll('code,pre');
//     highlight.forEach((block)=>{
//        hljs.highlightBlock(block);
//     })
// }
// highlighthandle();
