<script setup>

import PictureSwitcher from "@/components/PictureSwitcher.vue";
import PptInfo from "@/components/PptInfo.vue";
import {useRoute} from "vue-router"
import {getPptTemplateInfoById} from "@/api.js";
import {ref} from "vue";

const route = useRoute();
const pptId = route.query.id
const pptInfo = ref({})
getPptTemplateInfoById(pptId).then((res) => {
  pptInfo.value = res.data
})

const workoutDownloadUrl = (url) => {
  return "/assets/ppt_file/" + url.split("/").slice(-1)
}
</script>

<template>
  <br>
  <div class="ppt-class-and-info">

    <PictureSwitcher :url-list="pptInfo.cover_img_url.split(',')"/>
    <PptInfo
        class="ppt-info"
        :download_url="workoutDownloadUrl(pptInfo.download_url)"
        :page-count="pptInfo.page_count"
        :category="pptInfo.category"
        :name="pptInfo.name"
    />

  </div>
</template>

<style scoped>
.ppt-class-and-info {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.ppt-info {
  margin: 5px 0 0 10px;
}
</style>