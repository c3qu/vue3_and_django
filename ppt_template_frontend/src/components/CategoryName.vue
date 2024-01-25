<script setup>
import {defineProps} from "vue";
defineProps({
  categoryName: {
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
<a :href="url">{{categoryName}}</a>
</template>

<style scoped>
a{
  line-height: 22px;
  font-size: 12px;
  color: #666;
  text-decoration: none;
  outline: none;
  border: 0;
}
a:hover{
  background-image: linear-gradient(0deg, #cce7ff 40%, transparent 40%);
}
</style>