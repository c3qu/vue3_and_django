<script setup>
import {defineProps} from "vue";

defineProps({
  colorItemList: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="box">
    <div v-for="colorItem in colorItemList" :style="colorItem.style" class="box-item">
      <a :href="colorItem.url">{{ colorItem.desc }}</a>
    </div>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  flex-direction: row;
}
.box-item {
  width: 45px;
  height: 14px;
  border-top-right-radius: 1px;
  border-bottom-right-radius: 1px;
}
.box-item:hover{
  transform: scale(1.25);
}

a {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  margin: 6px 0;
  display: block;
  text-indent: -9999px;

}

a:hover {
  //transform: scale(1.25);
  //transform: scale(2);
  //box-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}
</style>