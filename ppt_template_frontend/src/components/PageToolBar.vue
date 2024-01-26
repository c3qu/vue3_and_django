<script setup>
import {currentPageStore} from "@/stores/counter.js";

const isCurrent = (index) => {
  if (index === currentPageStore().getCurrentPage) {
    return "current-page"
  }
}
const getNumbers = (start, stop) => {
  return new Array(stop + 1 - start).fill(start).map((n, i) => n + i);
}

</script>

<template>
  <div class="page-navi">
    <a href="#" @click="currentPageStore().setCurrentPage(1)">首页</a>
    <a href="#" @click="currentPageStore().pre()" v-show="currentPageStore().getCurrentPage!==1">上一页</a>
    <a href="#"
       v-for="index in getNumbers(currentPageStore().getLeftShowPage,currentPageStore().getRightShowPage)"
       :key="index"
       :class="isCurrent(index)"
       @click="currentPageStore().setCurrentPage(index)"
    >
      {{ index }}
    </a>
    <a href="#" @click="currentPageStore().next()"
       v-show="currentPageStore().getCurrentPage!==currentPageStore().getPageCount">下一页</a>
  </div>
</template>

<style scoped>
.page-navi {
  text-align: center;
}

a {
  border: solid 1px #e2e2e2;
  box-shadow: none;
  min-width: 18px;
  padding: 11px 16px;
  color: #666;
  text-align: center;
  background: #FFFFFF;
  font-size: 14px;

  text-decoration: none;
  outline: none;
}

a:hover {
  border: solid 1px #0099e5;
  color: #0099e5;
  background: #FFFFFF;
  z-index: 1;
}

.current-page {
  border: solid 1px #0099e5;
  color: #fff;
  background: #0099e5;
  font-size: 14px;
}
</style>