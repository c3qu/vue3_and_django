<script setup>
import {defineProps} from "vue";
defineProps({
  word: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>{{ word }}</div>
</template>

<style scoped>
div {
  color: #666;
  line-height: 19px;
  border: 1px solid #ccc;
  border-radius: 2px;
  position: relative;
  margin-right: 18px;
  padding: 0 6px;
  display: inline-block;
}

div:after {
  content: " ";
  width: 0;
  height: 0;
  border-left: 4px solid #fff;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  display: inline-block;
  position: absolute;
  left: 60px;
  top: 5px;
}

div:before {
  content: " ";
  width: 0;
  height: 0;
  border-left: 4px solid #ccc;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  display: inline-block;
  position: absolute;
  left: 61px;
  top: 5px;
}
</style>