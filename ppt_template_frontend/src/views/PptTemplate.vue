<script setup>

import WordTag from "@/components/WordTag.vue";
import CategoryName from "@/components/CategoryName.vue";
import ColorBar from "@/components/ColorBar.vue";
import CardComponent from "@/components/CardComponent.vue";
import PageToolBar from "@/components/PageToolBar.vue";
import {getPptTemplateInfo} from "@/api.js";
import {ref, watch} from "vue";

import {currentPageStore} from "@/stores/counter.js";
import {useRoute} from "vue-router";

// const locationList = [
//   {
//     name: "优品PPT",
//     url: "https://baidu.com"
//   },
//   {
//     name: "PPT模板",
//     url: "https://baidu.com"
//   },
//   {
//     name: "社会生活",
//     url: "https://baidu.com"
//   }
// ]
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
const pptTemplateInfoList = ref([])
const pageSize = ref(20)

const route = useRoute();
let searchKeyword = route.query.search_keyword
if (searchKeyword === undefined) {
  searchKeyword = "模板"
}

const doRequest = (pageIndex) => {
  getPptTemplateInfo({
    search: searchKeyword,
    page: pageIndex,
    page_size: pageSize.value
  }).then((res) => {
    pptTemplateInfoList.value = res.data.results
    if (pageIndex === 1) {
      currentPageStore().init(Math.ceil(res.data.count / pageSize.value))
    }
  })
}
doRequest(1)

const store = currentPageStore()
// 监听 state 的变化
watch(store, (state) => {
  doRequest(state.getCurrentPage)
})

</script>

<template>
  <div class="body">
    <div class="content">
      <br>

      <div v-if="searchKeyword==='模板'">
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
      </div>
      <h1 v-else class="search-keyword">
        搜索关键字:{{searchKeyword}}
      </h1>
      <div style="display: flex;flex-direction: row;flex-wrap: wrap;align-content: flex-start;">
        <CardComponent
            v-for="item in pptTemplateInfoList"
            :key="item.id"
            :views="0"
            :page-count="item.page_count"
            :name="item.template_name"
            :image-src="item.cover_img_url"
            @click="$router.push({path:'/detail',query: {id:item.id}})"
        />
      </div>
      <br>
      <PageToolBar/>
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

.category-name {
  margin-right: 10px;
}
</style>