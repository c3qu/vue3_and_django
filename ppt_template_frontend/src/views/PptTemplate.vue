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
const route = useRoute();
let searchKeyword = ref("")
const pptTemplateInfoList = ref([])
const pageSize = ref(20)

const doRequest = (pageIndex, keyword) => {
  getPptTemplateInfo({
    search: keyword,
    page: pageIndex,
    page_size: pageSize.value
  }).then((res) => {
    pptTemplateInfoList.value = res.data.results
    if (pageIndex === 1) {
      currentPageStore().init(Math.ceil(res.data.count / pageSize.value))
    }
  })
}


const dealPath = () => {
  searchKeyword.value = route.query.search_keyword
  if (searchKeyword.value === undefined) {
    searchKeyword.value = "模板"
  }
  doRequest(1, searchKeyword.value)
}

dealPath()

watch(currentPageStore(), (state) => {
  doRequest(state.getCurrentPage, searchKeyword.value)
})

watch(() => route.query.search_keyword, (value, oldValue, onCleanup) => {
  if (value !== oldValue) {
    dealPath()
  }
}, {immediate: true, deep: true})

</script>

<template>
  <div class="body">
    <div class="content">
      <br>
      <div v-if="searchKeyword==='模板'">
        <div style="display: flex;flex-direction: row">
          <WordTag word="热门分类"/>
          <CategoryName url="javascript:void(0);" category-name="开题报告" class="category-name"/>
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
              url="javascript:void(0);"
              :category-name="item"
              class="category-name"
          />
        </div>
      </div>
      <h1 v-else class="search-keyword">
        搜索关键字:{{ searchKeyword }}
      </h1>
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
  user-select: none;
  width: 1310px;
  display: flex;
  flex-direction: column;
}

.category-name {
  margin-right: 10px;
}
</style>