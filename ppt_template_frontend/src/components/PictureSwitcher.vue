<script setup>
import {ref} from "vue";
import {defineProps} from "vue";

const parameters = defineProps({
  urlList: {
    type: Array,
    required: true
  }
})
const currentPicIndex = ref(0)

const preOrNextPicture = (preOrNext) => {
  if (preOrNext === 0) {
    currentPicIndex.value -= 1
    currentPicIndex.value =
        currentPicIndex.value < 0 ?
            0 : currentPicIndex.value
  }
  if (preOrNext === 1) {
    currentPicIndex.value += 1
    currentPicIndex.value =
        currentPicIndex.value > parameters.urlList.length - 1 ?
            parameters.urlList.length - 1 : currentPicIndex.value
  }
}

const setCurrentPicIndex = (index) => {
  currentPicIndex.value = index
}

const workoutSrc = (src_list) => {
  const first_src = src_list.split(',')[0]
  // console.log(local_img_src + "," + first_src)
  return "/assets/cover_img/" + first_src.split("/").slice(-1)[0]
}

</script>

<template>
  <div class="article">
    <div id="play">
      <ul class="img_ul">
        <li v-for="(url,index) in urlList " :style="currentPicIndex===index?'display:list-item':'display:none'">
          <img
              :src="workoutSrc(url)" width="668" alt=""
              @error="e=>e.target.src=url.split(',')[0]"
          />
        </li>
      </ul>
      <a href="javascript:void(0)" @click="preOrNextPicture(0)" class="prev_a change_a" title="上一张"></a>
      <a href="javascript:void(0)" @click="preOrNextPicture(1)" class="next_a change_a" title="下一张"></a>
    </div>

    <div class="img_hd">
      <ul class="clearfix" :style="'margin-left: -'+126*(currentPicIndex-2)+'px'">
        <li v-for="(url,index) in urlList"
            :class="currentPicIndex===index?'on':''"
            @click="setCurrentPicIndex(index)"
        >
          <img
              :src="workoutSrc(url)" alt=""
              @error="e=>e.target.src=url.split(',')[0]"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.article {
  user-select: none;
}

#play {
  position: relative;
  width: 668px;
  height: 400px;
  text-align: center;
  overflow: hidden;
  margin: 0 auto;
}

#play .prev_a {
  left: 0;
  cursor: url(../assets/prev.png), auto;
}

#play .next_a {
  right: 0;
  cursor: url(../assets/next.png), auto;
}

.change_a {
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
  cursor: pointer;
  display: block;
  overflow: hidden;
//background: url(about:blank);
}

.img_hd ul {
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  z-index: 1;
  margin: 0;
}

.img_ul {
  margin: 0;
}

.img_hd {
  width: 668px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  background-color: #eee;
  overflow: hidden;
  height: 73px;
  position: relative;
}


.img_hd ul li img {
  height: 67px;
  width: 120px;
  display: block;
}

.img_hd ul li.on {
  border-color: rgb(116, 116, 116);
}

.img_hd ul li {
  float: left;
  width: 120px;
  height: 67px;
  border: 3px solid #eee;
  cursor: pointer;
  overflow: hidden;
  *display: inline;
  text-align: center;
}


</style>