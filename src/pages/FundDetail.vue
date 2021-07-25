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
      <div class="flex">
        <div class="mr-[30px]">
          <img class="min-w-[600px] h-[315px] rounded-[20px]" src="https://akstatic.streetvoice.com/features/2021/07/23/e053e36ad38d43f0818b33e7a9d4b108.png?x-oss-process=image/resize,m_fill,h_480,w_1250,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg">
          <div class=" mt-[28px]">
              <div class="flex w-2/3 justify-between text-orange">
                  <p>$0</p>
                  <p>$300,000</p>
              </div>
              <div class="bg-gray-default w-full h-[6px] rounded-3xl relative my-2">
                <div class=" w-7/12 h-full bg-orange rounded-3xl"></div>
                <div class="absolute w-4 h-4 bg-white border-4 border-gray-default left-1/2 rounded-full top-[-5px]"></div>
              </div>
              <div class="flex w-2/3 justify-between text-gray-dark">
                <p>募資開始</p>
                <p>募資成功</p>
              </div>
          </div>
        </div>
        <div class="w-full">
          <div class="pb-[10px] mb-[10px] border-b border-gray-light w-full">
            <h1 class="text-black-backdrop text-[22px]">【 運氣來的若有似無 】專輯募資</h1>
            <div class="artist">
              <img class="artistImg" src="../assets/images/artist/artist001.jpg">
              <div class="artistname">
                <p>大象體操 Elephant Gym</p>
                <div class="undername"></div>
              </div>
              <button
                class="follow"
                :class="{ clickfollow: follow }"
                @click="follow = !follow"
                >{{follow ? '正在關注' : '關注'}}
              </button>
            </div>
          </div>
          <div class="ml-[25px] h-72 flex flex-col justify-between">
            <div class="text-gray-dark">
              <p >目標 $300,000</p>
              <p class=" text-4xl font-medium">$88,888</p>
            </div>
            <div class="text-gray-dark">
              <p>贊助人數</p>
              <p class=" text-4xl font-medium">57人</p>
            </div>
            <div class="text-gray-dark">
              <p>募資倒數</p>
              <p class=" text-4xl font-medium">12天</p>
            </div>
            <div>
              <p class="text-gray-dark">結束時間 2021 年 10 月 10 日     23:59 </p>
            </div>
            <div>
              <button class="bg-orange text-white rounded-3xl px-20 hover:bg-blue-light">贊助此計畫</button>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 mb-20">
        <h3 class="text-black-backdrop text-[22px] font-medium mb-3">計畫介紹</h3>
        <p class="text-gray-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nulla corporis vitae excepturi sunt, animi explicabo quos amet adipisci ad odio sit perspiciatis, qui laudantium dolorem? Beatae quod explicabo esse.</p>
      </div>
      <div>
        <h3 class="text-black-backdrop text-[22px] font-medium mb-3">募資方案</h3>
        <fund-detail-item></fund-detail-item>
      </div>
    </div>
</template>

<script>
import FundDetailItem from '../components/FundDetailItem.vue'
export default {
  components: {
    FundDetailItem
  },
  data () {
    return {
      follow: false
    }
  }
}
</script>

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
.artist{
  display: flex;
  align-items: center;
  /* margin-bottom: 5px; */
  margin: 10px 0 5px 25px;
}
.artist p{
  cursor: pointer;
  font-size: 14px;
  color:#7b7b7b;
}
.artistname:hover .undername{
  background-color: #7b7b7b;
  width: 150px;
  height: 1px;
}
.artistImg{
    border: 1px solid #ededed;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-right: 10px;
}
.follow{
  background-color: #ff9d83;
  border-radius: 20px;
  width: 50px;
  height: 25px;
  font-size:14px;
  color:#ffffff;
  margin-left: 10px;
}
.follow:hover{
  border:2px solid #ff9d83;
  background-color: transparent;
  color:#ff9d83;
}
.clickfollow{
  border:2px solid #ff9d83;
  background-color: transparent;
  color:#ff9d83;
  width: 80px;
}
.clickfollow{
  background-color: #ff9d83;
  color:#ffffff;
}
</style>
