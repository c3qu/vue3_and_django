<script setup>
import {defineProps} from "vue";

const props = defineProps({
  cardInfoList: {
    type:Array,
    required: true
  }
})

</script>

<template>
  <div class="container">
    <div class="card">1</div>
    <div class="card">2</div>
    <div class="card">3</div>
    <div class="card">4</div>
    <div class="card">5</div>
    <div class="card">6</div>
    <div class="card">7</div>
    <div class="card">8</div>
    <div class="card">9</div>
    <div class="card">10</div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 列 */
  grid-template-rows: repeat(2, 1fr); /* 2 行 */
  gap: 10px; /* 卡片之间的间距 */
}

.card {
  width: 100%;
  height: 100px; /* 设置卡片的高度 */
  background-color: lightblue;
}
</style>