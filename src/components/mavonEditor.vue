<template>
    <div>
        <mavon-editor
            ref="md"
            class="mavonEditor"
            v-model="content"
            :toolbars="toolbars"
            :codeStyle="codeStyle"
            :ishljs="ishljs"
            :toolbarsBackground="'#f9f9f9'"
            :placeholder="'输入内容...'"
            @imgAdd="$imgAdd"
            @imgDel="$imgDel"
            @change="$handleMarkdownChange"
        />
    </div>
</template>
<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
    components: {
        mavonEditor,
    },
    data() {
        return {
            codeStyle: 'atom-one-dark',
            ishljs: true,
            img_file: {
                pos: '',
            },
            content: '', // 输入的数据
            toolbars: {
                bold: true, // 粗体
                italic: true, // 斜体
                header: true, // 标题
                underline: true, // 下划线
                strikethrough: true, // 中划线
                mark: true, // 标记
                superscript: true, // 上角标
                subscript: true, // 下角标
                quote: true, // 引用
                ol: true, // 有序列表
                ul: true, // 无序列表
                link: true, // 链接
                imagelink: true, // 图片链接
                code: true, // code
                table: true, // 表格
                fullscreen: true, // 全屏编辑
                readmodel: true, // 沉浸式阅读
                htmlcode: true, // 展示html源码
                help: true, // 帮助
                /* 1.3.5 */
                undo: true, // 上一步
                redo: true, // 下一步
                trash: true, // 清空
                save: false, // 保存（触发events中的save事件）
                /* 1.4.2 */
                navigation: true, // 导航目录
                /* 2.1.8 */
                alignleft: true, // 左对齐
                aligncenter: true, // 居中
                alignright: true, // 右对齐
                /* 2.2.1 */
                subfield: true, // 单双栏模式
                preview: true, // 预览
            },
        }
    },
    name: 'editor',
    props: {},
    methods: {
        $imgAdd(pos, $file) {
            // 第一步.将图片上传到服务器.
            var formdata = new FormData()
            formdata.append('image', $file)
            this.img_file[pos] = $file
            console.log($file)
            console.log(formdata.get('image'))
            this.axios({
                url: '/file/uploadImg',
                method: 'post',
                data: formdata,
                headers: { 'Content-Type': 'multipart/form-data' },
            }).then(response => {
                console.log(response)
                // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
                /**
                 * $vm 指为mavonEditor实例，可以通过如下两种方式获取
                 * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
                 * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
                 */
                if (response.data.code === '1001') {
                    this.$refs.md.$img2Url(pos, response.data.url)
                    this.$message({
                        message: '文件上传成功',
                        type: 'success',
                    })
                }
            })
        },
        $imgDel(pos) {
            delete this.img_file[pos]
        },
        $handleMarkdownChange(value, render) {
            this.$emit('handleMarkdownChange', value, render)
        },
    },
}
</script>
<style scoped lang="less">
.mavonEditor {
    width: 100%;
    min-height: 600px;
    height: 600px;
    overflow: auto;
}
</style>
