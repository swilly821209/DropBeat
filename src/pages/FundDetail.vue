<template>
    <router-link to="/Funds/:id/Form" class="text-orange">贊助此計畫(page)</router-link>
    <div class="range">
      <div class="pre">
        <div class="preicon"></div>
        <div class="title00">
          <h2>募資計畫</h2>
          <div class="under"></div>
        </div>
      </div>
      <div class="flex">
        <div class="mr-[30px]">
          <img class="min-w-[580px] h-[330px] rounded-[20px]" src="https://akstatic.streetvoice.com/features/2021/07/23/e053e36ad38d43f0818b33e7a9d4b108.png?x-oss-process=image/resize,m_fill,h_480,w_1250,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg">
          <div class=" mt-[28px]">
              <div class="flex w-2/3 justify-between text-base text-orange">
                  <p>$0</p>
                  <p>$300,000</p>
              </div>
              <div class="bg-gray-default w-full h-[6px] rounded-3xl relative my-2">
                <div class=" w-7/12 h-full bg-orange rounded-3xl"></div>
                <div class="absolute w-4 h-4 bg-white border-4 border-orange left-1/2 rounded-full top-[-5px]"></div>
              </div>
              <div class="flex w-2/3 justify-between text-base text-gray-dark">
                <p>募資開始</p>
                <p>募資成功</p>
              </div>
          </div>
        </div>
        <div class="w-full">
          <div class="pb-[10px] border-b border-gray-light w-full">
            <h1 class="text-black-backdrop text-[22px] ml-[10px]"> 運氣來的若有似無 專輯募資</h1>
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
          <div class=" ml-[10px] mt-[20px]  flex flex-col ">
              <div class="text-gray-dark">
                <p class="text-base">目標 $300,000</p>
                <p class="text-[32px] font-semibold tracking-[2px] mt-[-5px]">$88,888</p>
              </div>
              <div class="text-gray-dark my-[10px]">
                <p class="text-base">贊助人數</p>
                <p class=" text-[32px] font-semibold tracking-[2px] mt-[-5px]">57人</p>
              </div>
              <div class="text-gray-dark">
                <p class="text-base">募資倒數</p>
                <p class="text-[32px] font-semibold tracking-[2px] mt-[-5px]">12天</p>
              </div>
              <div>
                <p class="text-sm text-gray-dark mt-[15px] mb-[15px]">結束時間 2021 年 10 月 10 日     23:59 </p>
              </div>
            <div >
              <button class="bg-orange text-white rounded-3xl h-[25px] px-20 hover:bg-blue-light">贊助此計畫</button>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 mb-20">
        <h3 class="text-black-backdrop text-[22px] font-medium mb-3">計畫介紹</h3>
        <p class="text-gray-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nulla corporis vitae excepturi sunt, animi explicabo quos amet adipisci ad odio sit perspiciatis, qui laudantium dolorem? Beatae quod explicabo esse.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nulla corporis vitae excepturi sunt, animi explicabo quos amet adipisci ad odio sit perspiciatis, qui laudantium dolorem? Beatae quod explicabo esse.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nulla corporis vitae excepturi sunt, animi explicabo quos amet adipisci ad odio sit perspiciatis, qui laudantium dolorem? Beatae quod explicabo esse.</p>
      </div>
      <div>
        <div class="flex justify-between">
          <h3 class="text-black-backdrop text-[22px] font-medium mb-3">募資方案</h3>
          <div class=" relative flex items-center top-[-8px] z-10 justify-between w-16">
              <svg xmlns="http://www.w3.org/2000/svg" class="preArrow block text-gray-light cursor-pointer" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" fill="currentColor"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="nextArrow block text-gray-light cursor-pointer" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" fill="currentColor"/></svg>
          </div>
        </div>
        <swiper :slidesPerView="4" :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="allFund h-[650px] mt-[-35px]">
          <swiper-slide v-for="item in fundDatas" :key="item" class="singleFund top-12">
            <fund-detail-item
              :money="item.money"
              :fundDesc="item.fundDesc"
              :people="item.people"
              :gifts="item.gifts"
              :productNum="item.productNum"
              :time="item.time">
            </fund-detail-item>
          </swiper-slide>
        </swiper>
      </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation } from 'swiper/core'
import 'swiper/swiper-bundle.min.css'

import FundDetailItem from '../components/FundDetailItem.vue'

SwiperCore.use([Navigation])
export default {
  components: {
    Swiper,
    SwiperSlide,
    FundDetailItem
  },
  data () {
    return {
      follow: false,
      fundDatas: [
        {
          money: 100,
          fundDesc: '為愛贊助，不需回饋',
          people: 15,
          time: '2021/12'
        },
        {
          money: 450,
          fundDesc: '只想要專輯',
          gifts: ['專輯x1', '內含：CD、寫真歌詞本、小卡'],
          people: 25,
          productNum: 800,
          time: '2021/11'
        },
        {
          money: 450,
          fundDesc: '只想要專輯',
          gifts: ['專輯x1', '內含：CD、寫真歌詞本、小卡'],
          people: 25,
          productNum: 800,
          time: '2021/11'
        },
        {
          money: 600,
          fundDesc: '專輯海報組',
          gifts: ['專輯x1', '內含：CD、寫真歌詞本、小卡', 'A2 親簽海報'],
          people: 25,
          productNum: 800,
          time: '2021/11'
        },
        {
          money: 100,
          fundDesc: '為愛贊助, 不需回饋',
          gifts: ['專輯x1', '內含：CD、寫真歌詞本、小卡'],
          people: 25,
          productNum: 800,
          time: '2021/11'
        },
        {
          money: 100,
          fundDesc: '為愛贊助, 不需回饋',
          gifts: ['專輯x1', '內含：CD、寫真歌詞本、小卡'],
          people: 25,
          productNum: 800,
          time: '2021/11'
        }
      ]
    }
  }
}
</script>

<style scoped>
.range {
  padding: 60px 40px 10px 40px;
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
  margin: 8px 0 8px 10px;
}
.artist p{
  cursor: pointer;
  font-size: 14px;
  color:#7b7b7b;
}
.artistname:hover .undername{
  background-color: #7b7b7b;
  width: 145px;
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
.allFund{
  /* border:1px solid red; */
  transform: scale(1.02);
}
.singleFund{
  padding: 0 12px 0 12px;
}

.swiper-button-disabled {
  @apply text-gray-default
}

</style>
