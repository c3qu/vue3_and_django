<script setup>

import CategoryName from "@/components/CategoryName.vue";
import ColorBar from "@/components/ColorBar.vue";
import WordTag from "@/components/WordTag.vue";
import CardComponent from "@/components/CardComponent.vue";
import PageToolBar from "@/components/PageToolBar.vue";
import {getPptTemplateInfo} from "@/api.js";
import {currentPageStore} from "@/stores/counter.js";
import {ref, watch} from "vue";

const categoriesOfChartsGraphs = [
  "柱形图",
  "饼状图",
  "表格",
  "并列关系",
  "递进关系",
  "扩散关系",
  "关联关系",
  "冲突关系",
  "包含关系",
  "循环关系",
  "折线图",
  "雷达图",
  "地图",
  "强调关系",
  "层级关系",
  "聚合关系",
  "联动关系",
  "对比关系",
  "交叉关系",
]
const specializedCharts = [
  "SWOT分析图",
  "时间轴",
  "甘特图",
  "鱼骨图",
  "流程图",
  "组织结构",
  "图表合集",
]

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
const keyword = '图'
watch(currentPageStore(), (state) => {
  doRequest(state.getCurrentPage, keyword)
})
doRequest(currentPageStore().getCurrentPage, keyword)
</script>

<template>
  <div class="body">
    <div class="content">
      <br>
      <div style="display: flex;flex-direction: row">
        <WordTag word="图表分类"/>
        <CategoryName
            v-for="item in categoriesOfChartsGraphs"
            url="javascript:void(0);"
            :category-name="item"
            class="category-name"
        />
      </div>

      <div style="display: flex;flex-direction: row">
        <WordTag word="专项图表"/>
        <CategoryName
            v-for="item in specializedCharts"
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
            :name="item.template_name"
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