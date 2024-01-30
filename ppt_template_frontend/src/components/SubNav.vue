<template>
  <div class="title-and-list">
    <h3 class="title">{{ title }}</h3>
    <ul class="horizontal-list">
      <li v-for="item in items" :key="item">
        <a href="javascript:void(0);"
           @click="$router.push({path:'/template',query: {search_keyword:item}})"
        >
          {{ item }}
        </a>
      </li>
      <li class="more">
        <a href="javascript:void(0);" @click="$router.push({path:'/template',query: {search_keyword:title}})">更多</a>
      </li>
    </ul>

  </div>
</template>

<script setup>
import {defineProps} from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true
  }
})


</script>

<style scoped>
.title-and-list {
  display: flex;
  flex-direction: row;
//justify-content: center; align-items: center;
}

.title {
  border-left: 10px solid #0099e5;
  margin-right: 10px;
  padding-left: 5px;
  flex: 0 0 auto;
}

.horizontal-list {
  display: flex;
  list-style: none;
  padding: 0;
//width: 1000px; flex: 1;
}

a {
  text-decoration: none;
  color: #444;
}

a:hover {
  text-decoration: underline;
}

.more {
  margin-left: auto;
}

.horizontal-list li {
  margin-right: 10px;
}
</style>