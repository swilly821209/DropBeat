<template>
  <div class="range">
    <div class="flex justify-between mt-5">
      <base-title title="募資管理" admin></base-title>
      <div class="arrow cursor-pointer hidden sm:block" >
        <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" width="25" height="40" viewBox="0 0 25 40" @click="leftFunds">
          <path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" :fill="fundsL"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="40" viewBox="0 0 25 40" @click="rightFunds">
          <path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" :fill="fundsR"/>
        </svg>
      </div>
    </div>
    <!--  -->
    <div class="outersMeneger">
      <div class="innersMeneger">
        <!-- 640px以上顯示 -->
        <fund-item class="theItemMenegerSpe"
          edit
          v-for="item in fundItems"
          :title="item.title"
          :img="item.img"
          :singer="item.singer"
          :progress="item.progress"
          :date="item.date"
          :money="item.money"
          :key="item.title">
        </fund-item>
      </div>
    </div>
    <!-- 640px以下顯示 -->
    <div class="sm:hidden block mt-0">
      <swiper :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="mr-0 sm:mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="preIcon preArrow" width="20" height="23.077" viewBox="0 0 15 23.077"><path id="next" d="M9.953,2.061a2,2,0,0,1,3.17,0l7.477,9.72A2,2,0,0,1,19.015,15H4.062a2,2,0,0,1-1.585-3.219Z" transform="translate(0 23.077) rotate(-90)" fill="currentColor"/></svg>
        <swiper-slide v-for="item in fundItems" :key="item.title" class="flex justify-center">
          <fund-item
            edit
            class="max-w-[300px] m-auto"
            :title="item.title"
            :img="item.img"
            :singer="item.singer"
            :progress="item.progress"
            :date="item.date"
            :money="item.money">
          </fund-item>
        </swiper-slide>
        <svg xmlns="http://www.w3.org/2000/svg" class="nextIcon nextArrow" width="20" height="18.961" viewBox="0 0 13.72 18.961"><path id="next" d="M9.953,2.061a2,2,0,0,1,3.17,0l7.477,9.72A2,2,0,0,1,19.015,15H4.062a2,2,0,0,1-1.585-3.219Z" transform="translate(15 -2.058) rotate(90)" fill="currentColor"/></svg>
      </swiper>
    </div>
    <base-title title="發起募資" class="mt-4 sm:mt-20 mb-5"></base-title>
    <div class="flex flex-col w-full items-center sm:flex-row">
      <select-img
        class="w-[300px] mx-6 h-48 sm:w-8/12 sm:h-[400px]"
        :radius="'rounded-3xl'"
        :camera="true"
        :text="'選取圖片'"
        :inputImg="'border-2 border-white bg-white incircle'"
      ></select-img>
      <div class="w-[340px] flex flex-col sm:w-4/12">
        <div class="flex justify-start sm:justify-around mb-4 mt-12 sm:mt-0">
          <p class="w-[100px] ml-[20px] sm:ml-0 sm:w-2/6 text-right text-gray-dark text-xl mr-3">封面縮圖：</p>
          <select-img
            class="w-[80px] h-[80px] sm:h-60 sm:w-8/12 flex"
            :radius="'rounded-3xl'"
            :camera="true"
            :inputImg="'border-2 border-white mt-2 bg-white incircle'"
          ></select-img>
        </div>
        <div class="flex mt-4">
          <label for="topic" class="w-[120px] sm:w-2/6 text-right text-gray-dark text-xl mr-3">募資主題：</label>
          <input id="topic" type="text" class="w-[190px] sm:w-4/6 border-b-2 border-gray-light focus:outline-none focus:border-orange font-bold text-gray-light">
        </div>
        <div class="flex mt-4">
          <label for="date" class="w-[120px] sm:w-2/6 text-right text-gray-dark text-xl mr-3">結束日期：</label>
          <input id="date" type="date" value="2021-08-08" @change="changeColor" class="w-[190px] sm:w-4/6 border-b-2 border-gray-light focus:outline-none bg-white focus:border-orange text-transparent font-bold">
        </div>
        <div class="flex mt-4">
          <label for="money" class="w-[120px] sm:w-2/6 text-right text-gray-dark text-xl mr-3 sm:ml-5 money">目標金額：</label>
          <input id="money" type="text" class="w-[190px] sm:w-9/12 sm:4/6 border-b-2 border-gray-light focus:outline-none focus:border-orange font-bold text-gray-dark sm:ml-[10px] text-2xl">
        </div>
      </div>
    </div>
    <base-title title="計畫介紹" class="mt-10 sm:mt-20 mb-5" :second="'second'"></base-title>
    <div class="flex justify-center mb-5">
      <textarea name="projectInfo" class="w-[295px] sm:w-full ml-[5px] sm:ml-[0px] h-[400px] sm:h-72 border-2 border-gray-light rounded-2xl resize-none pl-2 pt-2 focus:border-orange"></textarea>
    </div>
    <div class="flex justify-between">
      <base-title title="募資方案" :second="'second'" class="mb-5"></base-title>
      <div class="hidden arrow cursor-pointer sm:block">
        <svg @click="leftPlan" class="mr-3" xmlns="http://www.w3.org/2000/svg" width="25" height="40" viewBox="0 0 25 40">
          <path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" :fill="planL"/>
        </svg>
        <svg @click="rightPlan" xmlns="http://www.w3.org/2000/svg" width="25" height="40" viewBox="0 0 25 40">
          <path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" :fill="planR"/>
        </svg>
      </div>
    </div>
    <div class="flex outers">
      <div class="flex inners">
        <div v-for="item in fundsList" :key="item" class="hidden flex theItem sm:flex">
          <select-img
            class="w-5/12 p-10"
            :radius="'rounded-3xl'"
            :camera="true"
            :text="'選取圖片'"
            :inputImg="'border-2 border-white bg-white incircle'"
          ></select-img>
          <div class="w-7/12">
            <div class="flex mt-4">
              <label class="sm:w-3/12 text-right text-xl text-gray-dark">金額：</label>
              <input :value="item.money" class="w-9/12 border-2 border-gray-lighten text-gray-light focus:outline-none rounded-lg pl-2 focus:border-orange">
            </div>
            <div class="flex mt-4">
              <label class="w-3/12 text-right text-xl text-gray-dark">標題：</label>
              <input :value="item.title" class="w-9/12 border-2 border-gray-lighten text-gray-light focus:outline-none rounded-lg pl-2 focus:border-orange">
            </div>
            <div class="flex mt-4">
              <label class="w-3/12 text-right text-xl text-gray-dark h-16">內容：</label>
              <textarea :value="item.content" class="w-9/12 border-2 border-gray-lighten text-gray-light focus:outline-none resize-none rounded-lg pl-2 focus:border-orange"></textarea>
            </div>
            <div class="flex mt-4">
              <label class="w-3/12 text-right text-xl text-gray-dark">限量：</label>
              <input :value="item.quantity" class="w-9/12 border-2 border-gray-lighten text-gray-light focus:outline-none rounded-lg pl-2 focus:border-orange">
            </div>
          </div>
        </div>
        <!-- 640px以下顯示 -->
        <div class="block flex theItem sm:hidden">
          <div class="w-[600px]">
            <div class="flex justify-center mr-[15px]">
              <div class="w-[200px]">
                <!-- 金額 -->
                <div class="flex mt-4 w-[200px]">
                  <label class="w-[90px] text-left text-xl text-gray-dark">金額：</label>
                  <input :value="fundsList[0].money" class="w-full border-2 border-gray-lighten text-gray-light focus:outline-none rounded-lg pl-2 focus:border-orange">
                </div>
                <!-- 標題 -->
                <div class="flex mt-4 w-[200px]">
                  <label class="w-[90px] text-left text-xl text-gray-dark">標題：</label>
                  <input :value="fundsList[0].title" class="w-full border-2 border-gray-lighten text-gray-light focus:outline-none rounded-lg pl-2 focus:border-orange">
                </div>
              </div>
              <!-- img -->
              <div class="w-[80px] px-2 pt-3">
                <select-img
                  class="w-[80px] h-[80px]"
                  :radius="'rounded-2xl'"
                  :camera="true"
                  :inputImg="'border-2 border-white bg-white incircle'"
                ></select-img>
              </div>
            </div>
            <!-- 內容 -->
            <div class="flex mt-4 mx-auto w-[290px]">
              <label class="w-[90px] text-left text-xl text-gray-dark h-16">內容：</label>
              <textarea :value="fundsList[0].content" class="w-full ml-[-8px] mr-[4px] h-32 border-2 border-gray-lighten text-gray-light focus:outline-none resize-none rounded-lg pl-2 focus:border-orange"></textarea>
            </div>
            <!-- 限量 -->
            <div class="flex mt-4 mx-auto w-[290px]">
              <label class="w-[90px] text-left text-xl text-gray-dark">限量：</label>
              <input :value="fundsList[0].quantity" class="w-full ml-[-8px] mr-[4px] border-2 border-gray-lighten text-gray-light focus:outline-none rounded-lg pl-2 focus:border-orange">
            </div>
            <!-- 新增方案 -->
            <div class="flex items-center mt-5 ml-[30px]">
              <svg id="new" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                <g id="play" fill="none" stroke="#ff9d83" stroke-width="2">
                  <circle cx="15" cy="15" r="15" stroke="none"/>
                  <circle cx="15" cy="15" r="14" fill="none"/>
                </g>
                <path id="Path_24" data-name="Path 24" d="M18,7.5V17.933" transform="translate(-3.143 2.283)" fill="none" stroke="#ff9d83" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                <path id="Path_25" data-name="Path 25" d="M7.5,18H17.933" transform="translate(2.141 -3)" fill="none" stroke="#ff9d83" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
              </svg>
              <span class="text-orange align-baseline ml-2">新增方案</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end mt-5 mr-[40px]">
      <div class="flex">
        <button class="w-[70px] border-2 border-gray-light text-gray-light px-4 mr-5 rounded-xl hover:border-orange">取消</button>
        <button class="w-[100px] border border-orange bg-orange text-white px-4 rounded-xl">提交審核</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation } from 'swiper/core'

import FundItem from '../components/FundItem.vue'
import SelectImg from '../components/SelectImg.vue'

SwiperCore.use([Navigation])

export default {
  components: {
    Swiper,
    SwiperSlide,
    FundItem,
    SelectImg
  },
  data () {
    return {
      fundItems: [
        {
          title: '運氣來的若有似無 專輯募資',
          img: 'https://akstatic.streetvoice.com/audition/2021/06/16/6c24a3f3d1794ce896a1e0a56ba9597d.jpg?x-oss-process=image/resize,m_fill,h_396,w_396,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          singer: '告五人',
          progress: '50%',
          money: 666666,
          date: 29
        },
        {
          title: '運氣來的若有似無 專輯募資',
          img: 'https://akstatic.streetvoice.com/audition/2021/06/16/6c24a3f3d1794ce896a1e0a56ba9597d.jpg?x-oss-process=image/resize,m_fill,h_396,w_396,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          singer: '告五人',
          progress: '50%',
          money: 882288,
          date: 29
        },
        {
          title: '運氣來的若有似無 專輯募資',
          img: 'https://akstatic.streetvoice.com/audition/2021/06/16/6c24a3f3d1794ce896a1e0a56ba9597d.jpg?x-oss-process=image/resize,m_fill,h_396,w_396,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          singer: '告五人',
          progress: '80%',
          money: 888888,
          date: 25
        },
        {
          title: '運氣來的若有似無 專輯募資',
          img: 'https://akstatic.streetvoice.com/audition/2021/06/16/6c24a3f3d1794ce896a1e0a56ba9597d.jpg?x-oss-process=image/resize,m_fill,h_396,w_396,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          singer: '告五人',
          progress: '30%',
          money: 8888338,
          date: 22
        },
        {
          title: '運氣來的若有似無 專輯募資',
          img: 'https://akstatic.streetvoice.com/audition/2021/06/16/6c24a3f3d1794ce896a1e0a56ba9597d.jpg?x-oss-process=image/resize,m_fill,h_396,w_396,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          singer: '告五人',
          progress: '50%',
          money: 888888,
          date: 29
        },
        {
          title: '運氣來的若有似無 專輯募資',
          img: 'https://akstatic.streetvoice.com/audition/2021/06/16/6c24a3f3d1794ce896a1e0a56ba9597d.jpg?x-oss-process=image/resize,m_fill,h_396,w_396,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          singer: '告五人',
          progress: '50%',
          money: 882288,
          date: 29
        },
        {
          title: '運氣來的若有似無 專輯募資',
          img: 'https://akstatic.streetvoice.com/audition/2021/06/16/6c24a3f3d1794ce896a1e0a56ba9597d.jpg?x-oss-process=image/resize,m_fill,h_396,w_396,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          singer: '告五人',
          progress: '80%',
          money: 888888,
          date: 25
        },
        {
          title: '運氣來的若有似無 專輯募資',
          img: 'https://akstatic.streetvoice.com/audition/2021/06/16/6c24a3f3d1794ce896a1e0a56ba9597d.jpg?x-oss-process=image/resize,m_fill,h_396,w_396,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          singer: '告五人',
          progress: '30%',
          money: 8888338,
          date: 22
        }
      ],
      fundsList: [
        {
          money: 450,
          title: '只想要專輯',
          content: `- 專輯 x1 
- 內含：CD、寫真歌詞本、小卡 `,
          quantity: 800
        },
        {
          money: 450,
          title: '只想要專輯',
          content: `- 專輯 x1 
- 內含：CD、寫真歌詞本、小卡 `,
          quantity: 800
        },
        {
          money: 450,
          title: '只想要專輯',
          content: `- 專輯 x1 
- 內含：CD、寫真歌詞本、小卡 `,
          quantity: 800
        },
        {
          money: 450,
          title: '只想要專輯',
          content: `- 專輯 x1 
- 內含：CD、寫真歌詞本、小卡 `,
          quantity: 800
        }
      ],
      fundsPosition: 0,
      fundsL: '#ededed',
      fundsR: '#b5b5b5',
      planPosition: 0,
      planL: '#ededed',
      planR: '#b5b5b5'
    }
  },
  methods: {
    changeColor (e) {
      e.target.classList.remove('text-transparent')
      e.target.classList.add('text-gray-light')
    },
    leftFunds () {
      this.fundsPosition = 0
      document.querySelector('.innersMeneger').style.transform = `translateX(${this.fundsPosition}px)`
      this.fundsL = '#ededed'
      this.fundsR = '#b5b5b5'
    },
    rightFunds () {
      this.fundsPosition = -1200
      document.querySelector('.innersMeneger').style.transform = `translateX(${this.fundsPosition}px)`
      this.fundsL = '#b5b5b5'
      this.fundsR = '#ededed'
    },
    leftPlan () {
      this.planPosition = 0
      document.querySelector('.inners').style.transform = `translateX(${this.planPosition}%)`
      this.planL = '#ededed'
      this.planR = '#b5b5b5'
    },
    rightPlan () {
      this.planPosition = -50
      document.querySelector('.inners').style.transform = `translateX(${this.planPosition}%)`
      this.planL = '#b5b5b5'
      this.planR = '#ededed'
    }
  }
}
</script>

<style scoped>
  /* 錢字號偽元素 */
  .money::after{
    content: '$';
    position: absolute;
    transform: translate(4px, 1px);
    font-size: 28px;
    color: #B5B5B5;
  }
  /* 募資管理 */
  .outersMeneger{
    display: flex;
    position: relative;
    width: 1200px;
    height: 470px;
    overflow: hidden;
  }
  .innersMeneger{
    display: flex;
    width: 2400px;
    height: 470px;
    transition: all 1s;
    position: absolute;
    display: flex;
    justify-content: space-around;
  }
  .theItemMenegerSpe{
    width: 300px;
  }
  .theItemMeneger{
    width: 200px;
  }
  /* 募資方案 */
  .outers{
    position: relative;
    width: 100%;
    height: 250px;
    overflow: hidden;
  }
  .inners{
    width: 200%;
    height: 250px;
    transition: all 1s;
    position: absolute;
    /* transform: translateX(-50%); */
  }
  .theItem{
    padding-left: 20px;
    width: 100%;
  }
  @media screen and (max-width:640px) {
    .theItem{
      padding-left: 0;
    }
    .outers{
      width: 100%;
      height: 340px;
      overflow:unset;
    }
    .inners{
      width:100%;
      height: 340px;
    }
    ::v-deep .title00{
      justify-content: space-between;
      margin-bottom: 20px;
    }
    ::v-deep .titleNline h2{
      font-size:30px;
      font-weight: bold;
    }
    .outersMeneger{
      display: flex;
      position: relative;
      width: 100%;
      height: 470px;
      margin-right: 0;
      overflow: unset;
    }
    .innersMeneger{
      width: 100%;
      height: 470px;
      align-items: center;
    }
    .theItemMeneger{
      width: 100%;
      height: 470px;
    }
    .outersMeneger{
      display: none;
    }
    .money::after{
      transform: translate(-5px, 1px);
    }
    ::v-deep .theImg{
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
    ::v-deep .fundBlock{
      margin: 0;
    }
    ::v-deep .circle{
      width: 60px;
      height: 60px;
    }
    ::v-deep .cameraIcom{
      width: 40px;
      height: 40px;
    }
    ::v-deep .content{
      width: 300px;
    }
    ::v-deep .fundBlock{
      margin-top: 0;
    }
    .preIcon {
      @apply text-gray-light absolute top-1/2 z-10 left-0 cursor-pointer
    }
    .nextIcon{
      @apply text-gray-light absolute top-1/2 z-10 right-0 cursor-pointer
    }
    .swiper-button-disabled {
      @apply text-gray-default
    }
  }
</style>
