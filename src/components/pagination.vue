<template lang="html">
    <div class="pages">
        <el-pagination
            v-if="totalPage > 0"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pageSize"
            :page-sizes="pageSizes"
            layout="total, sizes, prev, pager, next, jumper"
            background
            :total="totalPage"
        ></el-pagination>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    name: 'pagination',
    props: {
        pageSizes: {
            type: Array,
            default() {
                return [10, 30, 50, 100]
            },
        },
        pageSize: {
            type: Number,
            default: 10,
        },
        totalPage: Number,
        currentPage: {
            type: Number,
            default() {
                return 1
            },
        },
    },
    methods: {
        handleSizeChange(val) {
            this.$emit('handleSizeChange', val)
        },
        handleCurrentChange(val) {
            this.$emit('handleCurrentChange', val)
        },
    },
}
</script>

<style lang="less" scoped>
.pages {
    padding: 20px 0;
    text-align: center;
}
</style>
