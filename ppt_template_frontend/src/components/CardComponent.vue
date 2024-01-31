<template>
  <div class="card">
    <div class="card-image">
      <img
          :src="workoutSrc(imageSrc)"
          alt="Card Image"
          @error="e=>e.target.src=imageSrc.split(',')[0]"
      />
    </div>
    <div class="card-body">
      <div class="card-title">{{ name }}</div>
      <div class="card-info">
        <div>{{ pageCount }}</div>
        <div>
          <span class="right">
          </span>
          {{ views }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from 'vue'

defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  pageCount: {
    type: String,
    required: true
  },
  views: {
    type: Number,
    required: true
  }
});
const workoutSrc = (src_list) => {
  const first_src = src_list.split(',')[0]
  // console.log(local_img_src + "," + first_src)
  return "/assets/cover_img/" + first_src.split("/").slice(-1)[0]
}
</script>

<style scoped>
.right {
  background: url(../assets/icon-sprite.png) no-repeat -1px -42px;
  padding-left: 21px;
  font-size: 12px;
}

.card {
  user-select: none;
  cursor: pointer;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  width: 260px;
}

.card-image img {
  width: 100%;
  height: auto;
  display: block;
}

.card-body {
  padding: 10px;
}

.card-title {
  margin: 0 0 10px;
  font-size: 1em;
  color: #757575;
}

.card-info {
  display: flex;
  justify-content: space-between;
//padding: 8px 0; font-size: 0.5em; color: #999999;
}
</style>