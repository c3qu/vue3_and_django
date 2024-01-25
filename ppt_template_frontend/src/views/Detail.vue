<script setup>
const urlList = [
  "/assets/cover_img/1-211101194326.jpg",
  "/assets/cover_img/1-211101194326-51.jpg",
  "/assets/cover_img/1-211101194326.jpg",
  "/assets/cover_img/1-211101194327-50.jpg",
  "/assets/cover_img/1-211101194327-51.jpg",
  "/assets/cover_img/1-211101194327-52.jpg",
  "/assets/cover_img/1-211101194327-53.jpg",
  "/assets/cover_img/1-211101194327-54.jpg",
  "/assets/cover_img/1-211101194327.jpg",
  "/assets/cover_img/1-211101194328-50.jpg",
  "/assets/cover_img/1-211101194328.jpg"
]
import PictureSwitcher from "@/components/PictureSwitcher.vue";
import PptInfo from "@/components/PptInfo.vue";
</script>

<template>
  <br>
  <div class="ppt-class-and-info">

    <PictureSwitcher :url-list="urlList"/>
    <PptInfo class="ppt-info"/>

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