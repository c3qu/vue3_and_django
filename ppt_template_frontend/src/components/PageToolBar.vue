<script setup>
import {defineProps} from "vue";
const parameters=defineProps({
  pageCount: {
    type: Number,
    required: true
  },
  currentPage: {
    type: Number,
    required: true
  }
})

const leftShowPage=parameters.currentPage-6<1?
    1:parameters.currentPage-6
const rightShowPage= leftShowPage+12>parameters.pageCount?
    parameters.pageCount:leftShowPage+12
const isCurrent=(index)=>{
  if (index===parameters.currentPage){
    return "current-page"
  }
}
const getNumbers=(start,stop)=>{
  return new Array(stop+1-start).fill(start).map((n,i)=>n+i);
}
console.log(getNumbers(leftShowPage,rightShowPage))

</script>

<template>
  <div class="page-navi">
    <a href="https://baidu.com">首页</a>
    <a href="https://baidu.com">上一页</a>
    <a href="https://baidu.com"
       v-for="index in getNumbers(leftShowPage,rightShowPage)"
       :key="index"
       :class="isCurrent(index)"
    >
      {{index}}
    </a>
    <a href="https://baidu.com">下一页</a>
  </div>
</template>

<style scoped>
.page-navi{
  text-align:center;
}
a{
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
.current-page{
  border: solid 1px #0099e5;
  color: #fff;
  background: #0099e5;
  font-size: 14px;
}
</style>