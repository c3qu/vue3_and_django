<script setup xmlns="http://www.w3.org/1999/html">
import CardComponent from "@/components/CardComponent.vue";
import cardImageUrl from "@/assets/1-1PFZP0160-L.jpg"
import SubNav from "@/components/SubNav.vue";
import TitleAndDate from "@/components/TitleAndDate.vue";

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
const justify = "center"
</script>

<template>
  <main>
    <div class="banner">
      <div class="wrapper">
        <p style="color:#eee;font-size:28px;font-weight:100;margin:30px 0 0 332px">一个有情怀的免费PPT模板下载网站！</p>
        <div class="searchbg">
          <form action="/p/search.php" name="formsearch">
            <input type="hidden" name="kwtype" value="1">
            <input name="q" type="text" class="search-keyword" id="search-keyword" value="请输入关键词"
                   onfocus="if (value =='请输入关键词'){value =''}" onblur="if (value ==''){value='请输入关键词'}">
            <button type="submit"></button>
          </form>
        </div>
      </div>
    </div>
    <div style="background:#fff;text-align: center;padding: 15px 0 13px 0;border-bottom: 1px #eee solid;">
      <div class="wrapper">
        <div>
          <a href="http://www.51miz.com/ppt/?utm_term=1241383&amp;utm_source=webad" target="_blank" rel="nofollow"><img
              src="../assets/1048.png">
          </a>
        </div>
      </div>
    </div>


    <div class="body">
      <div class="content">
        <SubNav :items="templateItems" title="PPT模板"/>
        <div style="display: flex;flex-direction: row;flex-wrap: wrap;align-content: flex-start;">
          <CardComponent
              v-for="_ in 10"
              views="1234"
              add-time="2024-01-10"
              name="小清新MBE风模板"
              :image-src="cardImageUrl"
              url="https://baidu.com"
          />
        </div>
        <SubNav :items="diagramItems" title="PPT图表"/>
        <div style="display: flex;flex-direction: row;flex-wrap: wrap;align-content: flex-start;">
          <CardComponent
              v-for="_ in 10"
              views="1234"
              add-time="2024-01-10"
              name="小清新MBE风模板"
              :image-src="cardImageUrl"
              url="https://baidu.com"
          />
        </div>
        <div style="display: flex;flex-direction: row;">
          <div style="flex: 2">
            <SubNav :items="['PPT目录模板','人物剪影素材','PPT小图标']" title="PPT素材"/>
            <div style="display: flex;flex-direction: row">
              <div style="display: flex;flex-direction: column">
                <TitleAndDate v-for="_ in 7" title="测试测试测试" date="2024-01-11" url="https://baidu.com"/>
              </div>
              <div style="display: flex;flex-direction: column">
                <TitleAndDate v-for="_ in 7" title="测试测试测试" date="2024-01-11" url="https://baidu.com"/>
              </div>
            </div>
          </div>
          <div style="flex: 1">
            <SubNav :items="[]" title="PPT素材"/>
            <div style="display: flex;flex-direction: column">
              <TitleAndDate v-for="_ in 7" title="测试测试测试" date="2024-01-11" url="https://baidu.com"/>
            </div>
          </div>
          <div style="flex: 1">
            <SubNav :items="['毛笔','手写','可爱']" title="字体下载"/>
            <div style="display: flex;flex-direction: column">
              <TitleAndDate v-for="_ in 7" title="测试测试测试" date="2024-01-11" url="https://baidu.com"/>
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
