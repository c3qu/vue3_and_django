<script setup>
import {defineProps} from "vue";

defineProps({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  pageCount: {
    type: String,
    required: true
  },
  download_url:{
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="infoss">
    <h1>{{name}}</h1>
    <ul class="clear">
      <li><i>分类：</i>{{category}}</li>
      <li class="sh"><i>下载：</i><span id="countnum">0</span>次</li>
      <li><i>比例：</i>宽屏16:9</li>
      <li class="sh"><i>页数：</i>{{pageCount}}</li>
      <li><i>格式：</i>PPTX</li>
      <li class="sh"><i>大小：</i>未知</li>
      <li><i>软件：</i>PowerPoint</li>
      <li class="sh"><i>效果：</i>动态</li>
    </ul>
    <br>
    <br>
    <div class="button"><a :href="download_url" rel="nofollow" class="down-button" target="_blank">点击下载</a>
    </div>
  </div>
</template>

<style scoped>
.infoss {
  width: 300px;
  height: 302px;
  background: #FFF;
  border: 1px #eee solid;
  //border-bottom: none;
}

.infoss h1 {
  border-bottom: 1px #C7C7C7 solid;
  font-size: 15px;
  padding: 0 0 8px 4px;
  color: #777;
  margin-bottom: 6px;
}

.infoss li {
  line-height: 40px;
  border-bottom: 1px dotted #e5e5e5;
  width: 162px;
  color: #7A7A7A;
  float: left;
}

.infoss ul {
  list-style-type: none;
}

.infoss li i {
  font-style: normal;
  padding: 0 4px;
  margin-right: 8px;
  color: #7A7A7A;
}

.infoss .sh {
  width: 134px;
}
.button {
  display: inline-block;
  margin: 20px 0 0 80px;
  background: #269edc linear-gradient(#39ade8, #269edc);
}

.down-button {
  display: block;
  width: 100px;
  height: 26px;
  font-size: 14px;
  line-height: 25px;
  padding: 3px 3px 3px 28px;
  color: #fff;
  text-shadow: 0 1px 0 #0088cc;
  text-align: center;
  background: url(../assets/icon-sprite.png) no-repeat 22px -107px;
  border: 1px solid #0095e0;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.15) inset;
}
a {
  text-decoration: none;
  outline: none;
  border: 0;
}
</style>