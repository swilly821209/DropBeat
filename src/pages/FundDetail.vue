<template>
    <div class="range">
      <div class="pre">
        <div class="preicon"></div>
        <div class="title00">
          <h2><router-link to="/Funds" class="text-[18px] sm:text-[32px]">募資計畫</router-link></h2>
          <div class="under hidden sm:block"></div>
        </div>
      </div>
      <div class="flex sm:flex-row flex-col">
        <div class="mb-5 sm:hidden block">
          <div>
            <h1 class="text-black-backdrop text-[22px] ml-[5px]"> 運氣來的若有似無 </h1>
          </div>
          <div class="ml-[5px] flex items-center">
            <p class="text-gray-dark text-sm">大象體操 Elephant Gym</p>
            <button
              class="follow"
              :class="{ clickfollow: follow }"
              @click="follow = !follow"
              >{{follow ? '正在關注' : '關注'}}
            </button>
          </div>
        </div>
        <div class="sm:mr-[30px] m-auto">
          <img class="sm:min-w-[580px] sm:max-w-[580px] w-full sm:h-[330px] h-full sm:rounded-[20px] rounded-[10px]" :src="donate_photo">
          <div class=" sm:mt-[28px] mt-[20px]">
              <div class="flex w-2/3 justify-between text-base text-orange">
                  <p>$0</p>
                  <p>${{goal_now}}</p>
              </div>
              <div class="bg-gray-default w-full h-[6px] rounded-3xl relative my-2">
                <div class=" w-7/12 h-full bg-orange rounded-3xl"></div>
                <div class="absolute w-4 h-4 bg-white border-4 border-orange left-1/2 rounded-full top-[-5px]"></div>
              </div>
              <div class="flex w-2/3 justify-between sm:text-base text-sm text-gray-dark">
                <p>募資開始</p>
                <p v-if="goal_now >= goal">募資成功</p>
                <p v-else>募資進行中...</p>
              </div>
          </div>
        </div>
        <div class="w-full">
          <div class="pb-[10px] border-b border-gray-light w-full sm:block hidden">
            <h1 class="text-black-backdrop text-[22px] ml-[10px]"> {{donate_name}}</h1>
            <div class="artist">
              <img class="artistImg" src="../assets/images/artist/artist001.jpg">
              <div class="artistname">
                <p>{{initiator}}</p>
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
          <div class=" sm:ml-[10px] ml-0 sm:mt-[20px] mt-[25px]  flex sm:flex-col flex-row justify-between">
            <div class="text-gray-dark">
              <p class="sm:text-base text-sm">目標 ${{goal}}</p>
              <p class="sm:text-[32px] text-[30px] font-semibold tracking-[2px] sm:mt-[-5px] mt-[-3px]">${{goal_now}}</p>
            </div>
            <div class="text-gray-dark">
              <p class="sm:text-base text-sm">贊助人數</p>
              <p class=" sm:text-[32px] text-[30px] font-semibold tracking-[2px] sm:mt-[-5px] mt-[-3px]">{{donate_num}}人</p>
            </div>
            <div class="text-gray-dark">
              <p class="sm:text-base text-sm">募資倒數</p>
              <p class="sm:text-[32px] text-[30px] font-semibold tracking-[2px] sm:mt-[-5px] mt-[-3px]">{{countdownDate}}天</p>
            </div>
            <div class="sm:block hidden">
              <p class="text-sm text-gray-dark mt-[15px] mb-[15px]">結束時間 {{end_date}} </p>
            </div>
          </div>
          <div class="text-xs text-gray-dark sm:hidden block my-5">{{end_date}} 結束 </div>
          <div class="sm:mt-5 mt-[-10px] flex sm:ml-2 ml-0">
            <!-- <router-link to="/Funds/:id/Form"> -->
              <a href="#program" class=" bg-orange text-white rounded-3xl sm:w-[230px] w-full  py-[2px] hover:bg-blue-light sm:items-start items-center text-center">贊助此計畫</a>
            <!-- </router-link> -->
          </div>
        </div>
      </div>
      <div class="sm:mt-16 mt-14 mb-20">
        <h3 class="text-black-backdrop text-[22px] font-medium mb-3">計畫介紹</h3>
        <!-- <p class="text-sm text-gray-dark">{{info}}</p> -->
        <textarea class="w-full h-16 text-sm text-gray-dark resize-none" readonly :value="info"></textarea>
      </div>
      <div>
        <div id="program" class="flex justify-between mt-[-20px]" >
          <h3 class="text-black-backdrop text-[22px] font-medium mb-3">募資方案</h3>
          <div class=" relative flex items-center top-[-8px] z-10 justify-between w-16">
              <svg xmlns="http://www.w3.org/2000/svg" class="preArrow block text-gray-light cursor-pointer" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" fill="currentColor"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="nextArrow block text-gray-light cursor-pointer" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" fill="currentColor"/></svg>
          </div>
        </div>
        <swiper :slidesPerView="2" :spaceBetween="20"  :breakpoints='{
  "640": {
    "slidesPerView": 2,
    "spaceBetween": 20
  },
  "768": {
    "slidesPerView": 3,
    "spaceBetween": 5
  },
  "1024": {
    "slidesPerView": 4,
    "spaceBetween": 10
  }
}' :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="allFund mt-[-35px]">
          <swiper-slide v-for="item in fundDatas" :key="item" class="singleFund top-12">
            <fund-detail-item
              :toFundOption="`/Funds/${item.donate_option_id}/Form`"
              :money="item.option_price"
              :fundDesc="item.option_name"
              :people="donate_num"
              :gifts="item.option_reward"
              :productNum="item.option_num"
              :time="'2週內'"
              :img="item.option_img">
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
      initiator: '',
      end_date: '',
      countdownDate: '',
      donate_name: '',
      donate_num: '',
      donate_photo: '',
      goal: '',
      goal_now: '',
      info: '',
      follow: false,
      nowFundArray: [],
      fundDatas: []
    }
  },
  async created () {
    const form = new FormData()
    form.append('donate_id', this.$route.params.id)
    const response = await fetch('http://localhost/DropBeatBackend/funds_page_detailMain_get.php', {
      method: 'POST',
      body: form
    })
    // 回傳
    const responseData = await response.json()
    this.goal = parseInt(responseData[0].goal)
    // this.goal_now = parseInt(responseData[0].goal_now)
    this.end_date = responseData[0].end_date
    this.countdownDate = responseData[0].countdownDate
    this.donate_name = responseData[0].donate_name
    // this.donate_num = responseData[0].donate_num
    this.info = responseData[0].info
    this.donate_photo = responseData[0].donate_photo
    this.initiator = responseData[0].initiator
    // 回傳目前總募款與募款人數
    const formNow = new FormData()
    formNow.append('donate_id', this.$route.params.id)
    const responseNow = await fetch('http://localhost/DropBeatBackend/funds_page_total_price_single.php', {
      method: 'POST',
      body: formNow
    })
    const responseNowDatas = await responseNow.json()
    console.log(responseNowDatas)
    // 判斷是否為空值 1為空給0
    if (responseNowDatas === 1) {
      console.log('cc')
      this.donate_num = 0
      this.goal_now = 0
    } else {
      console.log('tt')
      this.donate_num = responseNowDatas[0].donate_num
      this.goal_now = responseNowDatas[0].total_price
    }
    // 下半部
    const forms = new FormData()
    forms.append('donate_id', this.$route.params.id)
    const responses = await fetch('http://localhost/DropBeatBackend/funds_page_detailOption_get.php', {
      method: 'POST',
      body: forms
    })
    const responseDatas = await responses.json()
    this.fundDatas = responseDatas
  }
}
</script>

<style scoped>
  .range{
    padding: 60px 40px 0 40px;
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
  height: 650px;
  transform: scale(1.02);
}
.singleFund{
  padding: 0 12px 0 12px;
}

.swiper-button-disabled {
  @apply text-gray-default
}
:deep .singleItem{
  height: 300px;
}
@media screen and (max-width: 640px) {
    .range{
      padding: 60px 20px 0 20px;
    }
    .preicon {
      width: 20px;
      height: 20px;
      background-image: url("../assets/icon/pre_7b.svg");
      background-repeat: no-repeat;
      margin: 10px 10px 0 0;
    }
    .singleFund{
      padding: 0 ;
    }
    .allFund{
      height: 600px;
    }
}
@media screen and (max-width: 420px) {
      .allFund{
      height: 560px;
    }
}
</style>
