<script setup>
import {useRoute} from "vue-router";
import {getPptTemplateInfo} from "@/api.js";
import {currentPageStore} from "@/stores/counter.js";
import {ref, watch} from "vue";

const route = useRoute();
const searchKeyword = route.query.searchKeyword
const pptTemplateInfoList = ref([])
const pageSize = ref(20)
const doRequest = (pageIndex) => {
  getPptTemplateInfo({
    search: searchKeyword,
    page: pageIndex,
    page_size:20
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
  <div>搜索结果:{{}}</div>
</template>

<style scoped>

</style>