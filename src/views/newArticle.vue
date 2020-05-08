<template>
  <div class="editor-wrap">
    <mavon-editor ref=md
                  class="editor isFullScreen"
                  :toolbars="toolbars"
                  @save="$save"
                  @imgAdd="$imgAdd"
                  @imgDel="$imgDel">
    </mavon-editor>
  </div>
</template>

<script>
import { toolbars, baseUrl } from '../config/axiosConfig'
import axios from 'axios'
export default {
  data () {
    return {
      toolbars: toolbars
    }
  },
  created () {

  },
  methods: {
    $save (val, render) {
      console.log(val, render)
    },
    $imgAdd (pos, $file) {
      // 第一步.将图片上传到服务器.
      console.log(pos, $file)
      var formdata = new FormData()
      formdata.append('file', $file)
      axios.defaults.baseURL = baseUrl
      axios({
        url: 'file/upload',
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then((res) => {
        // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
        /**
          * $vm 指为mavonEditor实例，可以通过如下两种方式获取
          * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
          * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
          */
        console.log(res)
        if (res.data.isSuccess === true) {
          this.$refs.md.$img2Url(pos, 'http://localhost:1081/' + res.data.file)
          this.$message({
            message: '图片上传成功',
            type: 'success'
          })
        }
      })
    },
    $imgDel (pos) {
      console.log('图片路径', pos[0], pos)
    }
  }
}
</script>

<style scoped>
.editor-wrap {
  margin: auto;
  width: 100%;
  height: 100%;
}
.editor {
  min-height: 700px;
  height: 700px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.isFullScreen {
  z-index: 100;
}
</style>
