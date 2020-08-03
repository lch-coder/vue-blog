<template>
    <div>
        <div class="new-article">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="标题">
                    <el-input
                        v-model="form.title"
                        style="width: 50%;"
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
                            将文件拖到此处，或
                            <em>点击上传</em>
                        </div>
                        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </el-form-item>
                <el-form-item label="简介">
                    <el-input
                        type="textarea"
                        autosize
                        style="width: 50%;"
                        v-model="form.desc"
                        placeholder="请输入简介"
                        autofocus
                    ></el-input>
                </el-form-item>
                <el-form-item label="内容">
                    <editor @handleMarkdownChange="handleMarkdownChange"></editor>
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
                    <el-button type="primary" size="medium" @click="saveArticle">存为草稿</el-button>
                    <el-button type="primary" size="medium" @click="publish">发布</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import editor from '@/components/mavonEditor'
import { mapActions } from 'vuex'
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
            tagList: [],
        }
    },
    created() {
        this.getTagLists()
    },
    methods: {
        ...mapActions(['addArticle', 'getTagList']),
        getTagLists() {
            let params = { deleted: false }
            this.getTagList(params).then(res => {
                if (res.code === 200) {
                    this.tagList = res.data.list
                } else {
                    this.$message.error(res.msg)
                }
            })
        },
        addArticle1(body) {
            this.addArticle(body).then(res => {
                if (res.code === 200) {
                    console.log(res)
                } else {
                    this.$message.error('res.msg')
                }
            })
        },
        handleMarkdownChange(value, render) {
            this.form.content = value
            this.form.html = render
        },
        publish() {},
        saveArticle() {
            this.addArticle1(this.form)
        },
    },
}
</script>
<style scoped lang="less">
.new-article {
    margin-top: 20px;
}
</style>
