<script setup>

import CategoryName from "@/components/CategoryName.vue";
import ColorBar from "@/components/ColorBar.vue";
import WordTag from "@/components/WordTag.vue";
import CardComponent from "@/components/CardComponent.vue";
import PageToolBar from "@/components/PageToolBar.vue";
import {getPptTemplateInfo} from "@/api.js";
import {currentPageStore} from "@/stores/counter.js";
import {ref, watch} from "vue";

const popularCategory = [
  "淡雅PPT背景图片",
  "简约PPT背景图片",
  "可爱PPT背景图片",
  "好看的PPT背景图片",
  "中国风PPT背景图片"
]

const colorItemList = [
  {
    desc: "红色",
    style: "background: #cc0000;",
    url: "javascript:void(0);"
  },
  {
    desc: "粉色",
    style: "background: #ea4c88;",
    url: "javascript:void(0);"
  },
  {
    desc: "紫色",
    style: "background: #663399;",
    url: "javascript:void(0);"
  },
  {
    desc: "蓝色",
    style: "background: #0066cc;",
    url: "javascript:void(0);"
  },
  {
    desc: "彩色",
    style: "background-image: linear-gradient(45deg, #ec5f67, #f99157, #fac863, #99c794, #5fb3b3, #6699cc, #c594c5);",
    url: "javascript:void(0);"
  }
]
const pictureCategories = [
  "动物",
  "植物",
  "人物",
  "静物",
  "纯色",
  "抽象",
  "风景",
  "边框",
  "爱情",
  "卡通"
]
const pptTemplateInfoList = ref([])
const pageSize = ref(20)
const doRequest = (pageIndex, type) => {
  getPptTemplateInfo({
    type: type,
    page: pageIndex,
    page_size: pageSize.value
  }).then((res) => {
    pptTemplateInfoList.value = res.data.results
    if (pageIndex === 1) {
      currentPageStore().init(Math.ceil(res.data.count / pageSize.value))
    }
  })
}

watch(currentPageStore(), (state) => {
  doRequest(state.getCurrentPage, 2)
})
doRequest(currentPageStore().getCurrentPage, 2)
</script>

<template>
  <div class="body">
    <div class="content">
      <br>
      <div style="display: flex;flex-direction: row">
        <WordTag word="热门分类"/>
        <CategoryName
            v-for="item in popularCategory"
            url="javascript:void(0);"
            :category-name="item"
            class="category-name"
        />
      </div>

      <div style="display: flex;flex-direction: row">
        <WordTag word="颜色分类"/>
        <ColorBar
            :color-item-list="colorItemList"
            class="color-bar"
        />
      </div>

      <div style="display: flex;flex-direction: row">
        <WordTag word="图片分类"/>
        <CategoryName
            v-for="item in pictureCategories"
            url="javascript:void(0);"
            :category-name="item"
            class="category-name"
        />
      </div>
      <br>
      <div style="display: flex;flex-direction: row;flex-wrap: wrap;align-content: flex-start;">
        <CardComponent
            v-for="item in pptTemplateInfoList"
            :key="item.id"
            :views="0"
            :page-count="item.page_count"
            :name="item.name"
            :image-src="item.cover_img_url"
            @click="$router.push({path:'/detail',query: {id:item.id}})"
        />
      </div>
      <br>
      <br>
      <PageToolBar/>
    </div>
  </div>
  <br><br>
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

.category-name {
  margin-right: 10px;
}
</style>