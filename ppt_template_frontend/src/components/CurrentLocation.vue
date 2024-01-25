<script setup>
import {defineProps} from "vue";

defineProps({
  locationList: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <el-row>
    <div>当前位置:</div>
    <div v-for="(item,index) in locationList">
      <span v-if="index!==0">></span>
      <a :href="item.url">
        {{item.name}}
      </a>
    </div>
  </el-row>
</template>

<style scoped>

</style>