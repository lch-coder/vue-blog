<template>
  <div class="nav">
    <div class="nav-content">
      <div class="nav-rows">
        <div class="row-col-1">
          <router-link to="/">
            <img class="logo"
                 src="../assets/avat.jpg"
                 alt="">
          </router-link>
        </div>
        <div class="row-col-2">
          <ul>
            <li class="item">
              <router-link to="/">首页</router-link>
            </li>
            <li class="item">
              <router-link to="/article">文章</router-link>
            </li>
            <li class="item">
              <router-link to="/">归档</router-link>
            </li>
            <li class="item">
              <router-link to="/">项目</router-link>
            </li>
            <li class="item">
              <router-link to="/">历程</router-link>
            </li>
            <li class="item">
              <router-link to="/">留言</router-link>
            </li>
            <li class="item">
              <router-link to="/">关于</router-link>
            </li>
          </ul>
        </div>
        <div class="row-col-3">
          <div class="nav-right">
            <el-button size="small"
                       type="primary">登录</el-button>
            <el-button size="small"
                       type="danger">注册</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
}
.nav-content {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}
.nav-rows {
  position: relative;
  height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-left: -10px;
  margin-right: -10px;
}
.row-col-1 {
  padding: 0 10px;
  width: calc(15% - 20px);
  float: left;
}
.logo {
  height: 60px;
  width: 60px;
  border-radius: 50%;
}
.row-col-2 {
  padding: 0 10px;
  width: calc(67% - 20px);
  float: left;
}
.item {
  float: left;
  height: 60px;
  line-height: 60px;
  border-bottom: 2px solid transparent;
  color: #909399;
  font-size: 14px;
  padding: 0 20px;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  box-sizing: border-box;
}
.item > a:hover {
  cursor: pointer;
}
.row-col-3 {
  padding: 0 10px;
  width: calc(18% -20px);
  float: left;
}
.nav-right {
  position: relative;
  padding-top: 15px;
  text-align: right;
}
.login-button {
  line-height: 1;
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  margin: 0;
  outline: 0;
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  text-align: center;
}
.register-button {
  line-height: 1;
  margin-left: 10px;
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  outline: 0;
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
}
</style>
