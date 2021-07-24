<template>
  <div class="range">
    <div class="flex justify-between mt-5">
      <base-title title="募資管理" admin></base-title>
      <div class="arrow cursor-pointer" >
        <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" width="25" height="40" viewBox="0 0 25 40">
          <path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" fill="#ededed"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="40" viewBox="0 0 25 40">
          <path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" fill="#b5b5b5"/>
        </svg>
      </div>
    </div>
    <div class="flex outersMeneger">
      <div class="flex innersMeneger">
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
    <base-title title="發起募資" class="mt-20 mb-5"></base-title>
    <div class="flex w-full h-96">
      <select-img class="w-9/12"></select-img>
      <div class="w-3/12 flex flex-col ml-5">
        <div class="flex justify-around mb-4">
          <p class="w-2/6 text-right text-gray-dark text-xl mr-3">封面縮圖：</p>
          <select-img class="w-4/6 h-56"></select-img>
        </div>
        <div class="flex mt-4">
          <label for="topic" class="w-2/6 text-right text-gray-dark text-xl mr-3">募資主題：</label>
          <input id="topic" type="text" class="w-4/6 border-b-2 border-gray-light focus:outline-none focus:border-orange font-bold text-gray-light">
        </div>
        <div class="flex mt-4">
          <label for="date" class="w-2/6 text-right text-gray-dark text-xl mr-3">結束日期：</label>
          <input id="date" type="date" value="2021-08-08" @change="changeColor" class="w-4/6 border-b-2 border-gray-light focus:outline-none focus:border-orange text-transparent font-bold">
        </div>
        <div class="flex mt-4">
          <label for="money" class="w-2/6 text-right text-gray-dark text-xl mr-3 money">目標金額：</label>
          <input id="money" type="text" class="w-4/6 border-b-2 border-gray-light focus:outline-none focus:border-orange font-bold text-gray-dark pl-5 text-2xl">
        </div>
      </div>
    </div>
    <base-title title="計畫介紹" class="mt-20  mb-5" :second="'second'"></base-title>
    <textarea name="projectInfo" class="w-full h-72 border-2 border-gray-light rounded-2xl resize-none pl-2 pt-2 focus:border-orange"></textarea>
    <div class="flex justify-between mt-5">
      <base-title title="募資方案" :second="'second'" class="mb-5"></base-title>
      <div class="arrow cursor-pointer" >
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
        <div v-for="item in fundsList" :key="item" class="flex theItem">
          <select-img class="w-2/6 p-10"></select-img>
          <div class="w-4/6">
            <div class="flex mt-4">
              <label class="w-1/6 text-right text-xl text-gray-dark">金額：</label>
              <input :value="item.money" class="w-5/6 border-2 border-gray-lighten text-gray-light focus:outline-none rounded-lg pl-2 focus:border-orange">
            </div>
            <div class="flex mt-4">
              <label class="w-1/6 text-right text-xl text-gray-dark">標題：</label>
              <input :value="item.title" class="w-5/6 border-2 border-gray-lighten text-gray-light focus:outline-none rounded-lg pl-2 focus:border-orange">
            </div>
            <div class="flex mt-4">
              <label class="w-1/6 text-right text-xl text-gray-dark h-16">內容：</label>
              <textarea :value="item.content" class="w-5/6 border-2 border-gray-lighten text-gray-light focus:outline-none resize-none rounded-lg pl-2 focus:border-orange"></textarea>
            </div>
            <div class="flex mt-4">
              <label class="w-1/6 text-right text-xl text-gray-dark">限量：</label>
              <input :value="item.quantity" class="w-5/6 border-2 border-gray-lighten text-gray-light focus:outline-none rounded-lg pl-2 focus:border-orange">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end mt-5">
      <div class="flex">
        <button class="border border-gray-light text-gray-light px-4 mr-5 rounded-xl">取消</button>
        <button class="border border-orange bg-orange text-white px-4 rounded-xl">提交審核</button>
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
    transform: translate(12px, 1px);
    font-size: 28px;
    color: #B5B5B5;
  }
  /* 募資管理 */
  .outersMeneger{
    position: relative;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 1500px;
    height: 530px;
    overflow: hidden;
  }
  .innersMeneger{
    width: 4500px;
    height: 500px;
    transition: all 1s;
    position: absolute;
    display: flex;
    justify-content: space-around;
    transform: translateX(-375px);
  }
  .theItemMeneger{
    margin-top: 0;
    width: 375px;
    height: 500px;
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
</style>
