<template>
    <router-link to="/Funds/:id/Form" class="text-orange">贊助此計畫(page)</router-link>
    <div class="range">
      <div class="pre">
        <div class="preicon"></div>
        <div class="title00">
          <h2>演出活動</h2>
          <div class="under"></div>
        </div>
      </div>
       <div>
        <img class="w-[600px] h-[315px] rounded-[20px]" src="https://akstatic.streetvoice.com/features/2021/07/23/e053e36ad38d43f0818b33e7a9d4b108.png?x-oss-process=image/resize,m_fill,h_480,w_1250,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg">
        <div>
          <h1>【 運氣來的若有似無 】專輯募資</h1>
        </div>
      </div>
    </div>
</template>

<style scoped>
.range {
  padding: 60px 40px 150px 40px;
}
.pre {
  display: flex;
  align-items: center;
  width: 170px;
  height: 52px;
  margin: 0 0 20px 5px;
  cursor: pointer;
}
.preicon {
  width: 25px;
  height: 25px;
  background-image: url("../assets/icon/pre_7b.svg");
  background-repeat: no-repeat;
  margin: 0 10px 0 0;
}
.title00 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  font-size: 32px;
  font-weight: 500;
  color: #383838;
}
.under{
  background-color: transparent;
  width: 130px;
  height: 1.5px;
}
.pre:hover .preicon {
  background-image: url("../assets/icon/pre_38.svg");
}
.pre:hover .under {
  background-color: #383838;
  width: 130px;
  height: 1.5px;
}
</style>
