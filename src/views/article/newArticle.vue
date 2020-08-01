<template>
    <div>
        <div class="new-article">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="标题">
                    <el-input
                        v-model="form.title"
                        placeholder="请输入标题"
                        autofocus
                    ></el-input>
                </el-form-item>
                <el-form-item label="封面">
                    <el-upload
                        class="upload-demo"
                        drag
                        action="https://jsonplaceholder.typicode.com/posts/"
                        multiple
                    >
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">
                            将文件拖到此处，或<em>点击上传</em>
                        </div>
                        <div class="el-upload__tip" slot="tip">
                            只能上传jpg/png文件，且不超过500kb
                        </div>
                    </el-upload>
                </el-form-item>
                <el-form-item label="简介">
                    <el-input
                        type="textarea"
                        v-model="form.desc"
                        placeholder="请输入简介"
                        autofocus
                    ></el-input>
                </el-form-item>
                <el-form-item label="内容">
                    <editor
                        @handleMarkdownChange="handleMarkdownChange"
                    ></editor>
                </el-form-item>
                <el-form-item label="标签">
                    <el-select
                        v-model="form.tag"
                        multiple
                        :popper-append-to-body="false"
                        placeholder="请选择标签"
                    >
                        <el-option
                            v-for="item in tagList"
                            :key="item._id"
                            :label="item.name"
                            :value="item._id"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size="medium" @click="saveArticle"
                        >存为草稿</el-button
                    >
                    <el-button type="primary" size="medium" @click="publish"
                        >发布</el-button
                    >
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import editor from '@/components/mavonEditor'
export default {
    components: {
        editor,
    },
    data() {
        return {
            form: {
                title: '',
                desc: '',
                content: '',
                html: '',
                tag: '',
            },
            tagList: [{ _id: 1, name: '动漫' }],
        }
    },
    created() {},
    methods: {
        handleMarkdownChange(value, render) {
            this.form.content = value
            this.form.html = render
        },
        publish() {
            if (this.title.length < 1) {
                this.$message({
                    message: '标题不能为空',
                    type: 'warning',
                })
            } else if (this.context.length < 1) {
                this.$message({
                    message: '内容不能为空',
                    type: 'warning',
                })
            } else if (this.tags.length < 1) {
                this.$message({
                    message: '请选择标签',
                    type: 'warning',
                })
            } else {
                this.addArticle(1)
            }
        },
        addArticle(state) {
            let html = this.$refs.md.d_render
            let article = {
                userId: this.userId,
                title: this.title,
                content: this.context,
                html: html,
                tags: this.tags,
                state: state,
            }
            this.$store
                .dispatch('addArticle', article)
                .then(res => {
                    if (res.isSuccess !== false) {
                        this.$message({
                            message: '保存成功',
                            type: 'success',
                        })
                        this.title = ''
                        this.context = ''
                        this.tags = []
                    } else {
                        this.$message({
                            message: res.message,
                            type: 'error',
                        })
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        },
        saveArticle() {
            if (this.title.length < 1) {
                this.$message({
                    message: '标题不能为空',
                    type: 'warning',
                })
            } else if (this.context.length < 1) {
                this.$message({
                    message: '内容不能为空',
                    type: 'warning',
                })
            } else if (this.tags.length < 1) {
                this.$message({
                    message: '请选择标签',
                    type: 'warning',
                })
            } else {
                this.addArticle(0)
            }
        },
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
    },
    mounted() {
        this.userId = localStorage.getItem('userId')
    },
}
</script>
<style scoped lang="less">
.new-article {
    margin-top: 20px;
    /deep/ .el-input {
        width: 50%;
    }
}
</style>
