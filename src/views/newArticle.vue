<template>
  <div>
    <mavon-editor ref=md
    class="editor" :toolbars="toolbars"
                  @imgAdd="$imgAdd"
                  @imgDel="$imgDel"></mavon-editor>
  </div>
</template>

<script>
import {toolbars} from '../config/axiosConfig'
export default {
  data () {
    return {
      toolbars: toolbars
    }
  }
}
</script>

<style scoped>
.editor {
  width: 100%;
  min-height: 700px;
  margin-bottom: 20px;
}
</style>
