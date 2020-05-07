<template>
  <div class="article">
    <div class="left">
      <ul>
        <li v-for="(article) in article.data.list"
            :key="article._id"
            class="item">
          <img class="img"
               :src="article.img_url" />
          <div class="content">
            <h4 class="title">{{article.title}}</h4>
            <p class="abstract">{{article.desc}}</p>
            <div class="meta">
              <span>查看 {{article.meta.views}}</span>
              <span>评论 {{article.meta.comments}}</span>
              <span>赞 {{article.meta.likes}}</span>
              <span v-if="article.create_time"
                    class="time">
                {{formatTime(article.create_time)}}
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <slider></slider>
  </div>

</template>

<script>
/* eslint-disable */
import slider from '../components/slider'
export default {
  components: {
    slider
  },
  data () {
    return {
      article: { "code": 0, "message": "操作成功！", "data": { "count": 63, "list": [{ "meta": { "views": 1599, "likes": 3, "comments": 20 }, "desc": "前端、后端、数据结构与算法、计算机基础、设计模式、数据库等书籍", "img_url": "https://upload-images.jianshu.io/upload_images/12890819-3a7d6ee6564f9407.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240", "tags": ["5bf013d2bc1e7805eb83db9d"], "category": ["5bf4088f245730373274df56"], "_id": "5e3f827ced8f0a329668ef44", "title": "共克时艰！150+ 本技术类常用电子书开源了，免费下载，包括 前端、后端、数据结构与算法、计算机基础、设计模式、数据库等书籍", "create_time": "2020-02-09T03:54:36.109Z" }, { "meta": { "views": 1589, "likes": 6, "comments": 65 }, "desc": "人就是这样，越长大，越觉得时间溜得快，时光总是在推着我们前进。  又到总结一年成长的时刻，我 2019 的关键词是：当勤精进，但念无常，何以解忧，唯有暴富。", "img_url": "https://upload-images.jianshu.io/upload_images/12890819-d2f96122f7248ee9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240", "tags": ["5bf013d2bc1e7805eb83db9d"], "category": ["5bf4088f245730373274df56"], "_id": "5e08b3544a03737f103db1be", "title": "我的 2019 年 - 当勤精进，但念无常，何以解忧，唯有暴富", "create_time": "2019-12-29T14:08:20.239Z" }, { "meta": { "views": 479, "likes": 1, "comments": 1 }, "desc": "想学得快，就得有自己的服务器来折腾才行（低于 1 折、89/年、229/3年，比学生机还便宜）", "img_url": "https://upload-images.jianshu.io/upload_images/12890819-fda7c243bf14a981?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240", "tags": ["5bf013d2bc1e7805eb83db9d"], "category": ["5bf4088f245730373274df56"], "_id": "5de65dd90283dc742f8f633a", "title": "想学得快，就得有自己的服务器来折腾才行（低于 1 折、89/年、229/3年，比学生机还便宜）", "create_time": "2019-12-03T13:06:33.737Z" }, { "meta": { "views": 1632, "likes": 2, "comments": 13 }, "desc": "GitHub 吸星大法 - 我在一年收获 2000+ Star 的心得", "img_url": "https://upload-images.jianshu.io/upload_images/12890819-42fe5f887b787f24.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240", "tags": ["5bf013d2bc1e7805eb83db9d"], "category": ["5bf4088f245730373274df56"], "_id": "5dc41f06d8450b6a10c3146a", "title": "GitHub 吸星大法 - 一年收获 2000+ Star 的心得", "create_time": "2019-11-07T13:41:26.174Z" }, { "meta": { "views": 1593, "likes": 7, "comments": 9 }, "desc": "GitHub 上能挖矿的神仙技巧 - 如何发现优秀开源项目", "img_url": "https://upload-images.jianshu.io/upload_images/12890819-4622f9c3a0179069.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240", "tags": ["5bf013d2bc1e7805eb83db9d"], "category": ["5bf4088f245730373274df56"], "_id": "5d79a06d662d5e73c62cbb03", "title": "GitHub 上能挖矿的神仙技巧 - 如何发现优秀开源项目", "create_time": "2019-09-12T01:33:33.147Z" }, { "meta": { "views": 1557, "likes": 7, "comments": 17 }, "desc": "之所以把计数排序、桶排序、基数排序 放在一起比较，是因为它们的平均时间复杂度都为 O(n)。", "img_url": "https://upload-images.jianshu.io/upload_images/12890819-bc640d464b56aac9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240", "tags": ["5cf37d2874289f3d47ed1468"], "category": ["5bf014e8bc1e7805eb83dba7"], "_id": "5d405a1896cf541789792486", "title": "JavaScript 数据结构与算法之美 - 桶排序、计数排序、基数排序", "create_time": "2019-07-30T14:54:16.633Z" }, { "meta": { "views": 524, "likes": 2, "comments": 4 }, "desc": "文中包含了 十大经典排序算法 的思想、代码实现、一些例子、复杂度分析、动画、还有算法可视化工具。", "img_url": "https://upload-images.jianshu.io/upload_images/12890819-bc640d464b56aac9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240", "tags": ["5cf37d2874289f3d47ed1468"], "category": ["5bf014e8bc1e7805eb83dba7"], "_id": "5d4059b896cf541789792485", "title": "JavaScript 数据结构与算法之美 - 十大经典排序算法汇总", "create_time": "2019-07-30T14:52:40.523Z" }, { "meta": { "views": 316, "likes": 0, "comments": 0 }, "desc": "之所以把归并排序、快速排序、希尔排序、堆排序 放在一起比较，是因为它们的平均时间复杂度都为 O(nlogn)", "img_url": "https://upload-images.jianshu.io/upload_images/12890819-bc640d464b56aac9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240", "tags": ["5cf37d2874289f3d47ed1468"], "category": ["5bf014e8bc1e7805eb83dba7"], "_id": "5d37bdea96cf541789792451", "title": "JavaScript 数据结构与算法之美 - 归并排序、快速排序、希尔排序、堆排序", "create_time": "2019-07-24T02:09:46.763Z" }, { "meta": { "views": 340, "likes": 0, "comments": 0 }, "desc": "算法为王。想学好前端，先练好内功，内功不行，就算招式练的再花哨，终究成不了高手；只有内功深厚者，前端之路才会走得更远。", "img_url": "https://upload-images.jianshu.io/upload_images/12890819-bc640d464b56aac9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240", "tags": ["5cf37d2874289f3d47ed1468"], "category": ["5bf014e8bc1e7805eb83dba7"], "_id": "5d353b3e96cf54178979244b", "title": "JavaScript 数据结构与算法之美 - 强烈推荐 GitHub 上值得前端学习的数据结构与算法项目", "create_time": "2019-07-22T04:27:42.374Z" }, { "meta": { "views": 189, "likes": 0, "comments": 0 }, "desc": "算法为王。  想学好前端，先练好内功，只有内功深厚者，前端之路才会走得更远>", "img_url": "https://upload-images.jianshu.io/upload_images/12890819-bc640d464b56aac9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240", "tags": ["5cf37d2874289f3d47ed1468"], "category": ["5bf014e8bc1e7805eb83dba7"], "_id": "5d353b1596cf54178979244a", "title": "JavaScript 数据结构与算法之美 - 冒泡排序、插入排序、选择排序", "create_time": "2019-07-22T04:27:01.189Z" }] } }
    }
  },
  methods: {
    formatTime (timestamp) {
      const date = new Date(timestamp);
      const Y = date.getFullYear() + "-";
      const M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
      const D = date.getDate() < 10 ? "0" + date.getDate() + " " : date.getDate() + " ";
      const h = date.getHours() < 10 ? "0" + date.getHours() + ":" : date.getHours() + ":";
      const m = date.getMinutes() < 10 ? "0" + date.getMinutes() + ":" : date.getMinutes() + ":";
      const s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      return Y + M + D + h + m + s;
    }
  },
}
</script>

<style scoped>
.article {
  display: flex;
  width: 1200px;
  margin: 0 auto;
}
.left {
  width: 850px;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding-right: 20px !important;
}
.item {
  line-height: 20px;
  position: relative;
  padding: 15px 0;
  padding-right: 150px;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
  cursor: pointer;
  text-align: left;
}
.img {
  position: absolute;
  top: 50%;
  margin-top: -50px;
  right: 0;
  width: 125px;
  height: 100px;
}
.title {
  color: #333;
  margin: 7px 0 4px;
  display: inherit;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
}
.abstract {
  min-height: 30px;
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 24px;
  color: #555;
}
.meta {
  padding-right: 0 !important;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
}
.meta span {
  margin-right: 10px;
  color: #666;
}
</style>
