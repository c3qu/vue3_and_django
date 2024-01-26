<template>

  <el-menu
      :default-active="$router.currentRoute.value.fullPath"
      :router="true"
      class="el-menu"
      mode="horizontal"
      @select="handleSelect"
      background-color="#222222"
      text-color="#ccc"
      :ellipsis="false"
  >
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/template">PPT模板</el-menu-item>
    <el-menu-item index="/background">PPT背景</el-menu-item>
    <el-menu-item index="/diagrams">PPT图表</el-menu-item>
<!--    <el-menu-item index="/detail">详情页</el-menu-item>-->
  </el-menu>
  <RouterView class="router-view"/>
  <div class="foot-bar">
    <div class="foot-bar-1-col">
      <div class="words-box">
        <div class="words">关于我们</div>
        <div class="words">联系方式</div>
        <div class="words">版权声明</div>
      </div>
      <div class="words-box">
        <div class="words">友链申请</div>
        <div class="words">意见建议</div>
        <div class="words">网站地图</div>
      </div>
    </div>
    <div class="foot-bar-2-col">
      <h3>bcsPPT</h3>
      <div>
        本站是一家专注于分享高质量的免费PPT模板下载网站。包括PPT图表、PPT背景图片、PPT素材、PPT教程等各类PPT资源。致力于打造国内最大最权威的PPT下载一站式服务平台。
      </div>
    </div>
    <div class="foot-bar-3-col">
      <i class="fa fa-angle-up cb-circle" @click="toTop"></i>
    </div>
  </div>

</template>

<script setup>
import {ref} from 'vue'

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
const toTop = () => {
  window.scrollTo(0, 0)
}
</script>

<style scoped>
i {
  height: 50px;
  line-height: 46px;
  width: 50px;
  display: inline-block;
  position: relative;
  transition: all 0.2s;
  animation: ripple 1.6s linear infinite;
  border: 2px solid #fff;
  border-radius: 50%;
  background: url(./assets/angle-up.png) no-repeat center;
  margin-left: 100px;
  margin-top: 30px;
}

.foot-bar {
  display: flex;
  height: 150px;
  background-color: #222;
  color: #747474;
  font-size: 12px;
}

.foot-bar-1-col {
  flex:1;
  display: flex;
  flex-direction: column;
}
.foot-bar-2-col {
  flex:1;
}
.foot-bar-3-col {
  flex:1;
}

.words-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.words {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  width: 100px;
  height: 60px;
  text-align: center;
}

.el-menu {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  border:0;
}

.router-view {
  margin-top: 0;
}
</style>
