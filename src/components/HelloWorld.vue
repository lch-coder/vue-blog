<template>
    <div class="hello">
        <div class="pic">
            <img :src="now" />
        </div>
        <el-table :data="studentsDataList" ref="multipleTable">
            <el-table-column
                type="index"
                label="序号"
                width="60"
            ></el-table-column>
            <el-table-column
                prop="student_id"
                label="学号"
                width="100"
            ></el-table-column>
            <el-table-column prop="class" label="班级"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="age" label="年龄"></el-table-column>
            <el-table-column prop="avgScores" label="平均分">
                <template slot-scope="scope">
                    <span v-if="scope.row.avgScores >= 60" style="">{{
                        scope.row.avgScores
                    }}</span>
                    <span v-else style="color:red;">{{
                        scope.row.avgScores
                    }}</span>
                    <el-select>
                        <el-option
                            v-for="(item, index) in scope.row.scores"
                            :class="{ active: item < 60 }"
                            :key="index"
                            :label="item"
                            :value="item"
                        ></el-option>
                    </el-select>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            layout="total, sizes, prev, pager, next"
            :curzrent-page="currentpage"
            :page-size="pagesize"
            :page-sizes="pagesizes"
            @current-change="handleCurrentChange"
            :total="totalCount"
        >
        </el-pagination>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: '啊哈！没想到吧！',
            totalCount: 0,
            pic: [
                'http://hipanda.hf.openstorage.cn/pic/84604a62-4089-4208-b475-66aac94e2521.jpg',
                'http://hipanda.hf.openstorage.cn/pic/4510e493-5c54-44e1-ba11-cfef8bb0c0ab.jpg',
                'http://hipanda.hf.openstorage.cn/pic/2b1fbe31-be40-450e-b64a-e007fe995fbc.jpg',
            ],

            i: '0',

            now:
                'http://hipanda.hf.openstorage.cn/pic/84604a62-4089-4208-b475-66aac94e2521.jpg',
            pagesize: 4, // 行数
            pagesizes: [4], // 条数列
            currentpage: 1,
            studentsDataList: '',
            studentsData: {},
        }
    },
    created() {
        this.studentList()
    },
    mounted: function() {
        this.now = this.pic[0]

        var _this = this

        setInterval(function() {
            _this.i++

            _this.now = _this.pic[_this.i]

            if (_this.i >= _this.pic.length - 1) {
                _this.i = -1
            }
        }, 5000)
    },
    methods: {
        studentList(page = 1) {
            axios({
                method: 'get',
                url: '/api/points/test_system',
            }).then(res => {
                console.log(res.data, 's')
                this.studentsData = res.data
                console.log(this.studentsData)
                this.studentsData.student_list.forEach(e => {
                    e.avgScores =
                        (e.scores.Chinese +
                            e.scores.Math +
                            e.scores.English +
                            e.scores.Physics) /
                        4
                })
                this.studentsData.student_list.sort(function(a, b) {
                    return b.avgScores - a.avgScores
                })
                this.totalCount = this.studentsData.student_list.length
                this.studentsDataList = this.studentsData.student_list
                this.studentsDataList = this.studentsDataList.slice(
                    (page - 1) * 4,
                    page * 4
                )
                console.log(this.studentsDataList, 'sakjdak', page)
                return this.studentsDataList
            })
        },
        handleSizeChange(val) {
            this.pageSize = 4
        },
        // 当前页
        handleCurrentChange(val) {
            console.log(val, 'asdkjasdkjkjak')
            this.currentPage = val
            this.studentList(val)
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
.fail {
    color: red;
}
.active {
    color: red;
}
</style>
