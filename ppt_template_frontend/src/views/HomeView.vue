<script setup xmlns="http://www.w3.org/1999/html">
import CardComponent from "@/components/CardComponent.vue";
import SubNav from "@/components/SubNav.vue";
import TitleAndDate from "@/components/TitleAndDate.vue";
import {getPptTemplateInfo} from "@/api.js";
import {ref} from "vue";

const templateItems = [
  "总结汇报",
  "商务模板",
  "精美模板",
  "简约模板",
  "论文答辩",
  "述职报告",
  "个人简历",
  "开题报告",
  "中国风",
  "自我介绍",
  "职业规划",
  "公司介绍",
  "网络科技"
]
const diagramItems = [
  "柱形图",
  "线形图",
  "饼状图",
  "SWOT分析图",
  "PPT时间轴",
  "鱼骨图",
  "流程图",
  "并列",
  "层级",
  "扩散",
  "构架",
  "包含"
]
const firstModuleInformation = ref([])
getPptTemplateInfo({search: "模板"}).then((res) => {
  firstModuleInformation.value = res.data.results
})
const secondModuleInformation = ref([])
getPptTemplateInfo({search: "图"}).then((res) => {
  secondModuleInformation.value = res.data.results
})
const searchKeyword = ref("")

const template_id_name_list_1 = [
  {"id": "8638", "name": "艺术插画风可爱卡通PPT模板"},
  {"id": "8771", "name": "高端精美质感艺术鎏金PPT模板"},
  {"id": "9147", "name": "彩色艺术水彩涂鸦PP模板"},
  {"id": "9284", "name": "创意精美墨迹艺术PPT模板"},
  {"id": "9289", "name": "简洁艺术粉色女生PPT模板"},
  {"id": "9387", "name": "时尚质感艺术水彩PPT模板"},
  {"id": "9409", "name": "创意艺术不规则图文PPT模板"},
  {"id": "9439", "name": "时尚艺术黑色杂志风PPT模板"},
  {"id": "9500", "name": "炫彩艺术撞色涂鸦风PPT模板"},
  {"id": "9525", "name": "水彩墨迹艺术设计PPT模板"},
  {"id": "9542", "name": "简洁抽象艺术曲线通用PPT模板"},
  {"id": "9543", "name": "创意彩色艺术炫酷PPT模板"},
  {"id": "9562", "name": "莫兰迪彩色艺术涂鸦PPT模板"},
  {"id": "9583", "name": "创意艺术极简设计PPT模板"},
]

const template_id_name_list_2 = [
  {"id": 8615, "name": "云服务云技术云计算PPT模板"},
  {"id": 8867, "name": "区块链技术及发展前景PPT模板"},
  {"id": 9507, "name": "立方体科技风网络技术项目介绍PPT模板"},
  {"id": 9898, "name": "医疗保健康复护理新技术PPT模板"},
  {"id": 9910, "name": "区块链技术与应用PPT模板"},
  {"id": 9986, "name": "5G网络技术介绍及前景展望PPT模板"},
  {"id": 9987, "name": "科技感区块链技术介绍PPT模板"}
]
const template_id_name_list_3 = [
  {"id": 8431, "name": "卡通可爱读书分享会PPT模板"},
  {"id": 8560, "name": "可爱欢乐卡通儿童PPT模板"},
  {"id": 8815, "name": "可爱机器猫哆啦A梦PPT模板"},
  {"id": 8940, "name": "卡通可爱面包超人PPT模板"},
  {"id": 9087, "name": "卡通可爱小动物PPT模板"},
  {"id": 9092, "name": "创意可爱MBE风格PPT模板"},
  {"id": 9333, "name": "简约可爱藤蔓多肉植物PPT模板"}
]

</script>

<template>
  <main>
    <div class="banner">
      <div class="wrapper">
        <p style="color:#eee;font-size:28px;font-weight:100;margin:30px 0 0 332px;user-select: none">
          一个有情怀的免费PPT模板下载网站！</p>
        <div class="searchbg">
          <form @submit.prevent="$router.push({path:'/template',query: {search_keyword:searchKeyword}})">
            <input type="text" class="search-keyword" id="search-keyword" placeholder="请输入关键词"
                   v-model="searchKeyword"/>
            <button type="submit"></button>
          </form>
        </div>
      </div>
    </div>
    <div style="background:#fff;text-align: center;padding: 15px 0 13px 0;border-bottom: 1px #eee solid;">
      <div class="wrapper">
        <div>
          <a href="" rel="nofollow">
            <img src="../assets/1048.png" alt=""/>
          </a>
        </div>
      </div>
    </div>


    <div class="body">
      <div class="content">
        <SubNav :items="templateItems" title="PPT模板"/>
        <div style="display: flex;flex-direction: row;flex-wrap: wrap;align-content: flex-start;">
          <CardComponent
              v-for="item in firstModuleInformation"
              :key="item.id"
              :views="0"
              :page-count="item.page_count"
              :name="item.name"
              :image-src="item.cover_img_url"
              @click="$router.push({path:'/detail',query: {id:item.id}})"
          />
        </div>
        <SubNav :items="diagramItems" title="PPT图表"/>
        <div style="display: flex;flex-direction: row;flex-wrap: wrap;align-content: flex-start;">
          <CardComponent
              v-for="item in secondModuleInformation"
              :key="item.id"
              :views="0"
              :page-count="item.page_count"
              :name="item.name"
              :image-src="item.cover_img_url"
              @click="$router.push({path:'/detail',query: {id:item.id}})"
          />
        </div>
        <div style="display: flex;flex-direction: row;">
          <div style="flex: 2">
            <SubNav :items="['简洁','创意','质感']" title="艺术类"/>
            <div style="display: flex;flex-direction: row;flex-wrap: wrap;align-content: flex-start;">
              <TitleAndDate
                  v-for="item in template_id_name_list_1"
                  :title="item.name"
                  date=""
                  url="#"
                  @click="$router.push({path:'/detail',query: {id:item.id}})"
              />
            </div>
          </div>
          <div style="flex: 1">
            <SubNav :items="[]" title="技术类"/>
            <div style="display: flex;flex-direction: column">
              <TitleAndDate
                  v-for="item in template_id_name_list_2"
                  :title="item.name"
                  date=""
                  url="#"
                  @click="$router.push({path:'/detail',query: {id:item.id}})"
              />
            </div>
          </div>
          <div style="flex: 1">
            <SubNav :items="['小黄人','女生','动物']" title="可爱分类"/>
            <div style="display: flex;flex-direction: column">
              <TitleAndDate
                  v-for="item in template_id_name_list_3"
                  :title="item.name"
                  date=""
                  url="#"
                  @click="$router.push({path:'/detail',query: {id:item.id}})"
              />
            </div>
          </div>
        </div>
      </div>
      <br>
    </div>
  </main>

</template>

<style scoped>
.body {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.content {
  max-width: 1310px;
  display: flex;
  flex-direction: column;
}


a {
  cursor: pointer;
  line-height: normal;
}

.banner {
  width: 100%;
  height: 190px;
  overflow: hidden;
  background: url(../assets/index-header.jpg) repeat 0 50px;
  margin: 0;
}

.wrapper {
  width: 1176px;
  margin: 0 auto;
  overflow: hidden;
  padding-left: 4px;
}

.searchbg {
  background-color: rgba(255, 255, 255, 0.18);
  border-radius: 2px;
  width: 580px;
  height: 60px;
  margin: 20px 0 0 280px;
}

.searchbg form {
  height: 44px;
  padding: 8px;
}

.searchbg input {
  width: 480px;
  height: 44px;
  line-height: 44px;
  border: none;
  font-size: 14px;
  color: #e4e4e4;
  background-color: rgba(255, 255, 255, 0.35);
  padding-left: 20px;
  float: left;
  border-radius: 2px;
  outline: none;
}

.searchbg button {
  background: url(../assets/search-ico.png) 22px 12px #0099e5 no-repeat;
  width: 62px;
  height: 44px;
  cursor: pointer;
  float: left;
  position: relative;
  border-radius: 2px;
  margin: 0;
  padding: 0;
  border: 0;
}


li {
  float: left;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  width: 220px;
  margin: 0 15px 16px 0;
}

li img {
  display: block;
  overflow-clip-margin: content-box;
  overflow: clip;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
}
</style>
