// https://www.cherylgood.cn/detail/5bdaf4722382b4646c27143b.html
const highlight = require('highlight.js')
const marked = require('marked')
const tocObj = {
  add: function (text, level) {
    var anchor = `#toc${level}${++this.index}`
    this.toc.push({ anchor: anchor, level: level, text: text })
    return anchor
  },
  toHTML: function () {
    let levelStack = []
    let result = ''
    const addStartUL = () => {
      result += '<ul class="anchor-ul" id="anchor-fix">'
    }
    const addEndUL = () => {
      result += '</ul>\n'
    }
    const addLI = (anchor, text) => {
      result +=
        '<li><a class="toc-link" href="#' +
        anchor +
        '">' +
        text +
        '<a></li>\n'
    }

    this.toc.forEach(function (item) {
      let levelIndex = levelStack.indexOf(item.level)
      // 没有找到相应level的ul标签，则将li放入新增的ul中
      if (levelIndex === -1) {
        levelStack.unshift(item.level)
        addStartUL()
        addLI(item.anchor, item.text)
        // 找到了相应level的ul标签，并且在栈顶的位置则直接将li放在此ul下
      } else if (levelIndex === 0) {
        addLI(item.anchor, item.text)
        // 找到了相应level的ul标签，但是不在栈顶位置，需要将之前的所有level出栈并且打上闭合标签，最后新增li
      } else {
        while (levelIndex--) {
          levelStack.shift()
          addEndUL()
        }
        addLI(item.anchor, item.text)
      }
    })
    // 如果栈中还有level，全部出栈打上闭合标签
    while (levelStack.length) {
      levelStack.shift()
      addEndUL()
    }
    // 清理先前数据供下次使用
    this.toc = []
    this.index = 0
    return result
  },
  toc: [],
  index: 0,
}

class MarkUtils {
  constructor() {
    this.rendererMD = new marked.Renderer()
    this.rendererMD.heading = function (text, level, raw) {
      console.log(raw)
      var anchor = tocObj.add(text, level)
      return `<h${level} id=${anchor}>${text}</h${level}>\n`
    }
    this.rendererMD.table = function (header, body) {
      return (
        '<table class="table" border="0" cellspacing="0" cellpadding="0">' +
        header +
        body +
        '</table>'
      )
    }
    highlight.configure({ useBR: true })
    marked.setOptions({
      renderer: this.rendererMD,
      headerIds: false,
      gfm: true, // 默认：true， 启用Github的风格
      tables: true, // 默认：true，启动表格， 前提必须gfm: true,
      breaks: false, // 默认：false，启用回车换行，前提必须gfm: true,
      pedantic: false, // 默认：false，尽可能地兼容 markdown.pl的晦涩部分。不纠正原始模型任何的不良行为和错误。
      smartLists: true, // 默认：true，使用比原生markdown更时髦的列表。 旧的列表将可能被作为pedantic的处理内容过滤掉
      sanitize: false, // 默认：false，对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
      smartypants: false, // 默认：false，使用更为时髦的标点，比如在引用语法中加入破折号。
      highlight: function (code) {
        return highlight.highlightAuto(code).value
      },
    })
  }

  async marked (data) {
    if (data) {
      let content = await marked(data)
      let toc = tocObj.toHTML()
      return { content: content, toc: toc }
    } else {
      return null
    }
  }
}

const markdown = new MarkUtils()

export default markdown
