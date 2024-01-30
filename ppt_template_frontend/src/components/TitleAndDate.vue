<script setup>
import {defineProps} from "vue";

defineProps({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <a href="javascript:void(0);">
      {{title}}
    </a>
    <span>{{date}}</span>
  </div>
</template>

<style scoped>
div{
  color: #626262;
  background: url(../assets/icon-sprite.png) no-repeat -8px -183px;
  padding-left: 14px;
  float: left;
  width: 220px;
  line-height: 30px;
  height: 30px;
  margin-right: 30px;
  text-decoration: none;
  outline: none;
  border: 0;
}
span{
  float: right;
  color:rgb(204,204,204);
  font-style: italic;
  display: block;
  font-size: 12px;
}
a{
  text-decoration: none;
  color: #444;
}

a:hover{
  text-decoration: underline;
}
</style>