<template>
  <div class="editor-wrap">
    <mavon-editor ref=md
                  class="editor"
                  :toolbars="toolbars"
                  @imgAdd="$imgAdd"
                  @imgDel="$imgDel"></mavon-editor>
  </div>
</template>

<script>
import { toolbars } from '../config/axiosConfig'
export default {
  data () {
    return {
      toolbars: toolbars
    }
  },
  created () {

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
  z-index: 100 !important;
  min-height: 700px;
  height: 700px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
