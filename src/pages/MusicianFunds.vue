<template>
  <div class="range">
    <div class="flex justify-between">
      <base-title title="募資管理" admin></base-title>
      <div class="arrow cursor-pointer relative top-10 z-20" >
        <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" width="25" height="40" viewBox="0 0 25 40" @click="leftFunds">
          <path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" :fill="fundsL"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="40" viewBox="0 0 25 40" @click="rightFunds">
          <path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" :fill="fundsR"/>
        </svg>
      </div>
    </div>
    <div class="outersMeneger mt-7">
      <div class="innersMeneger">
        <fund-item class="theItemMeneger"
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
    <h4>發起募資</h4>
    <div class="flex">
      <div class="selectBanner01">
        <select-img
          :radius="'rounded-3xl'"
          :camera="true"
          :text="'選取圖片'"
          :inputImg="'border-2 border-white bg-white incircle'"
        ></select-img>
      </div>
      <div class=" content  flex flex-col justify-start ">
        <div class="flex  mt-4 selectBanner02">
          <p class="textTitle text-right text-gray-dark text-lg mr-3">封面縮圖：</p>
          <select-img
            :radius="'rounded-3xl'"
            :camera="true"
            :text="'選取圖片'"
            :inputImg="'border-2 border-white bg-white incircle'"
          ></select-img>
        </div>
        <div class="flex mt-4">
          <label for="topic" class="textTitle text-right text-gray-dark text-lg mr-3">募資主題：</label>
          <input id="topic" type="text" class="textLine border-b-2 border-gray-default focus:outline-none focus:border-orange  text-gray-dark">
        </div>
        <div class="flex mt-4">
          <label for="date" class="textTitle text-right text-gray-dark text-lg mr-3">結束日期：</label>
          <input id="date" type="date" value="2021-08-08" @change="changeColor" style="color:#7b7b7b" class="textLine border-b-2 border-gray-default focus:outline-none focus:border-orange text-transparent font-bold">
        </div>
        <div class="flex mt-4">
          <label for="money" class="textTitle money text-right text-gray-dark text-lg mr-3">目標金額：</label>
          <input id="money" type="text" class="textLine border-b-2 border-gray-default focus:outline-none focus:border-orange  text-gray-dark pl-6 text-xl">
        </div>
      </div>
    </div>
    <h5 class="text-xl text-black-backdrop">計畫介紹：</h5>
    <textarea name="projectInfo" class="w-full h-56 border-2 border-gray-light text-gray-dark rounded-2xl resize-none pl-2 pt-2 focus:border-orange"></textarea>
    <div class="flex justify-between items-center ">
      <h5 class="text-xl text-black-backdrop">募資方案：</h5>
      <div class="arrow cursor-pointer mt-6" >
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
        <div v-for="item in fundsList" :key="item" class="theItem flex items-center">
          <div class="selectBanner03">
            <select-img
              :radius="'rounded-3xl'"
              :camera="true"
              :text="'選取圖片'"
              :inputImg="'border-2 border-white bg-white incircle'"
            ></select-img>
          </div>
          <div class="w-7/12">
            <div class="flex mt-4">
              <label class="textTitle text-right text-lg text-gray-dark">金額：</label>
              <input :value="item.money"  class="textLine2 border-2 border-gray-default text-base text-gray-light focus:outline-none rounded-lg pl-2 focus:border-orange">
            </div>
            <div class="flex mt-4">
              <label class="textTitle text-right text-lg text-gray-dark">標題：</label>
              <input :value="item.title" class="textLine2 border-2 border-gray-default text-base text-gray-light focus:outline-none rounded-lg pl-2 focus:border-orange">
            </div>
            <div class="flex mt-4">
              <label class="textTitle text-right text-lg text-gray-dark h-16">內容：</label>
              <textarea :value="item.content" class="textLine2 border-2 border-gray-default  text-sm text-gray-light focus:outline-none resize-none rounded-lg pl-2 focus:border-orange"></textarea>
            </div>
            <div class="flex mt-4">
              <label class="textTitle text-right text-lg text-gray-dark">限量：</label>
              <input :value="item.quantity" class="textLine2 border-2 border-gray-default text-base text-gray-light focus:outline-none rounded-lg pl-2 focus:border-orange">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end mt-5">
      <div class="flex">
        <button class="cancelBtn border-2 border-gray-default text-gray-dark  rounded-2xl hover:border-orange hover:text-orange">取消</button>
        <button class="submitBtn border-2 border-orange bg-orange text-white rounded-2xl hover:bg-blue-light hover:border-opacity-0">提交審核</button>
      </div>
    </div>
  </div>
</template>

<script>
import FundItem from '../components/FundItem.vue'
import SelectImg from '../components/SelectImg.vue'
export default {
  components: {
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
      this.fundsPosition = -50
      document.querySelector('.innersMeneger').style.transform = `translateX(${this.fundsPosition}%)`
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
  /* 募資管理 */
  .outersMeneger{
    /* border:1px solid red; */
    display: flex;
    position: relative;
    width: 100%;
    height: 450px;
    overflow: hidden;
    top:-35px;
  }
  .innersMeneger{
    display: flex;
    width: 200%;
    height: 450px;
    transition: all 1s;
    position: absolute;
    display: flex;
    justify-content: space-around;
  }
  .theItemMeneger:nth-child(4n) {
    /* border:1px solid blue; */
    margin: 35px 0 0 0;
  }

  :deep h2{
    cursor: default;
  }
  h4{
    font-size: 32px;
    font-weight: 500;
    color:#383838;
    cursor:default;
    margin: 45px 0 30px 0;
  }
  h5{
    margin: 40px 0 10px 5px;
  }
  .selectBanner01 :deep .outer{
    /* border:1px solid red; */
    width: 665px;
    height: 380px;
  }
  .selectBanner02 :deep .outer{
    width: 170px;
    height: 170px;
    flex-shrink: 0;
  }
  .content{
    /* border:1px solid red; */
    width: calc(100% - 665px);
    padding: 0 0 0 20px;
  }
  .textTitle{
    width: 100px;
  }
  .textLine{
      width: calc(100% - 120px);
  }
  /* 錢字號偽元素 */
  .money::after{
    content: '$';
    position: absolute;
    transform: translate(12px, 1px);
    font-size: 26px;
    color: #B5B5B5;
  }

  /* 募資方案 */
  .outers {
    /* border:1px solid red; */
    position: relative;
    width: 100%;
    height: 250px;
    overflow: hidden;
  }
  .inners{
    /* border:1px solid red; */
    width: 200%;
    height: 250px;
    transition: all 1s;
    position: absolute;
    top:-20px;
    /* transform: translateX(-50%); */
  }
  .theItem{
    /* border:1px solid red; */
    padding-right: 20px;
    width: 100%;
  }
  .theItem:nth-child(2n){
    /* border:1px solid red; */
    padding-right: 0;
  }
  .selectBanner03 :deep .outer{
    width: 200px;
    height: 200px;
    flex-shrink: 0;
  }
  .textLine2{
      width: 100%;
  }
  .cancelBtn{
  height: 30px;
  width: 55px;
  }
  .submitBtn{
    height: 30px;
    width: 90px;
    margin: 0 0 0 10px;
  }

</style>
