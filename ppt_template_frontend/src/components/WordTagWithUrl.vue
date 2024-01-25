<script setup>
import {defineProps} from "vue";

defineProps({
  word: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})
</script>

<template>
  <a :href="url">{{ word }}</a>
</template>

<style scoped>
a {
  border: 1px solid #9dcde6;
  border-radius: 13px;
  float: left;
  line-height: 22px;
  padding: 2px 10px;
  color: #7A7A7A;
  margin: 0 6px 10px 0;
  height: auto;
  background-color: #f0f8ff6b;
  text-decoration: none;
  outline: none;
}

a:hover {
  border: 1px solid #ffc3c3;
}
</style>