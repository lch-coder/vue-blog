<template>
  <div class="right">
    <img class="portrait"
         :src='"http://image.biaobaiju.com/uploads/20180801/23/1533135955-dtBgwzRrXC.jpg"' />
    <h4 class="title">哈哈哈！</h4>
    <div class="line"></div>
    <div class="tags">
      <div>标签云</div>
      <router-link v-for="item in list.data.list"
                   class="item"
                   :key="item._id"
                   :to="`/articles?tag_id=${item._id}&tag_name=${item.name}&category_id=`">
        <span :key="item._id">{{item.name}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'slider',
  data () {
    return {
      list: { "code": 0, "message": "success", "data": { "count": 16, "list": [{ "_id": "5cf37d2874289f3d47ed1468", "name": "数据结构与算法" }, { "_id": "5cd6929974289f3d47ed13e8", "name": "vue-router" }, { "_id": "5cab59b566f24111e0f2ee59", "name": "理财" }, { "_id": "5c8cadaeb87b8a04f1860c9e", "name": "performance" }, { "_id": "5bf4b78a245730373274df59", "name": "浏览器内核" }, { "_id": "5bf405e1245730373274df55", "name": "react.js" }, { "_id": "5bf405d6245730373274df54", "name": "vue.js" }, { "_id": "5bf01438bc1e7805eb83dba3", "name": "简历" }, { "_id": "5bf01431bc1e7805eb83dba2", "name": "关于博主" }, { "_id": "5bf01425bc1e7805eb83dba1", "name": "vuex" }, { "_id": "5bf0141cbc1e7805eb83dba0", "name": "webpack" }, { "_id": "5bf013dcbc1e7805eb83db9e", "name": "mongodb" }, { "_id": "5bf013d2bc1e7805eb83db9d", "name": "随笔" }, { "_id": "5bf013c2bc1e7805eb83db9b", "name": "express" }, { "_id": "5bf013bbbc1e7805eb83db9a", "name": "node" }, { "_id": "5bf013a6bc1e7805eb83db97", "name": "javaScript" }] } }
    }
  },
}
</script>

<style scoped>
.right {
  width: 350px;
  padding-top: 50px;
  text-align: center;
}
.portrait {
  width: 130px;
  border-radius: 50%;
  animation: portrait 3s;
  -moz-animation: portrait 3s; /* Firefox */
  -webkit-animation: portrait 3s; /* Safari and Chrome */
  -o-animation: portrait 3s; /* Opera */
  animation-iteration-count: infinite;
}
.title {
  font-size: 25px;
  font-weight: 700;
}
.line {
  padding: 10px 0 20px 0;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
}
.tags:first-child {
  font-size: 14px;
  color: #969696;
}
.item {
  display: inline-block;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #eee;
  color: #333;
  margin: 10px 10px 0 0;
  text-decoration: none;
}

@keyframes portrait {
  0% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
  25% {
    transform: rotate(0deg) scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
}

@-moz-keyframes portrait {
  0% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
  25% {
    transform: rotate(0deg) scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
}

@-webkit-keyframes portrait {
  0% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
  25% {
    transform: rotate(0deg) scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
}

@-o-keyframes portrait {
  0% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
  25% {
    transform: rotate(0deg) scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
}
</style>