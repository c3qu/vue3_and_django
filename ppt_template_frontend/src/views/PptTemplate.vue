<script setup>

import CurrentLocation from "@/components/CurrentLocation.vue";
import WordTag from "@/components/WordTag.vue";
import CategoryName from "@/components/CategoryName.vue";
import ColorBar from "@/components/ColorBar.vue";
import TotalNum from "@/components/TotalNum.vue";
import cardImageUrl from "@/assets/1-1PFZP0160-L.jpg";
import CardComponent from "@/components/CardComponent.vue";
import PageToolBar from "@/components/PageToolBar.vue";

const locationList = [
  {
    name: "优品PPT",
    url: "https://baidu.com"
  },
  {
    name: "PPT模板",
    url: "https://baidu.com"
  },
  {
    name: "社会生活",
    url: "https://baidu.com"
  }
]
const colorItemList = [
  {
    desc: "颜色",
    style: "background: #cc0000;",
    url: "https://baidu.com"
  },
  {
    desc: "颜色",
    style: "background: #ea4c88;",
    url: "https://baidu.com"
  },
  {
    desc: "颜色",
    style: "background: #663399;",
    url: "https://baidu.com"
  },
  {
    desc: "颜色",
    style: "background: #0066cc;",
    url: "https://baidu.com"
  },
  {
    desc: "颜色",
    style: "background-image: linear-gradient(45deg, #ec5f67, #f99157, #fac863, #99c794, #5fb3b3, #6699cc, #c594c5);",
    url: "https://baidu.com"
  }
]
const justify = "center"
const categoryNameList = [
  "党建工作",
  "教育教学",
  "网络科技",
  "卡通风格",
  "医学医疗",
  "环境保护",
  "经济金融",
  "自然风景",
  "建筑地产",
  "读书笔记",
  "旅游旅行",
  "植物模板",
  "动物模板",
  "美食水果",
  "艺术抽象",
  "公司企业",
  "体育运动",
  "婚礼爱情",
  "影视音乐",
  "社会生活"
]

// 最大20
const pptList = Array.from({length: 20}, (_, index) => index)
</script>

<template>
  <div class="body">
    <div class="content">
      <CurrentLocation :location-list="locationList"/>
      <div style="display: flex;flex-direction: row">
        <WordTag word="热门分类"/>
        <CategoryName url="https://baidu.com" category-name="开题报告" class="category-name"/>
      </div>

      <div style="display: flex;flex-direction: row">
        <WordTag word="颜色分类"/>
        <ColorBar
            :color-item-list="colorItemList"
            class="color-bar"
        />
      </div>

      <div style="display: flex;flex-direction: row">
        <WordTag word="模板分类"/>
        <CategoryName
            v-for="item in categoryNameList"
            url="https://baidu.com"
            :category-name="item"
            class="category-name"
        />
      </div>

      <div style="display: flex;flex-direction: row;flex-wrap: wrap;align-content: flex-start;">
        <CardComponent
            v-for="_ in 10"
            views="1234"
            add-time="2024-01-10"
            name="小清新MBE风模板"
            :image-src="cardImageUrl"
            url="https://baidu.com"
        />
      </div>
      <br>
        <PageToolBar :page-count="50" :current-page="50"/>

    </div>

  </div>

  <br><br><br>


</template>

<style scoped>
.body {
  display: flex;
  flex-direction: row;
  justify-content: center;

}

.content {
  width: 1310px;
  display: flex;
  flex-direction: column;
}
.category-name{
  margin-right: 10px;
}
</style>