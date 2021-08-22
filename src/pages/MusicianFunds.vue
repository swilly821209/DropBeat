<template>
  <div class="range">
    <base-dialog :show="cancleDialog" class="relative ">
      <div class="flex flex-col items-center py-4 sm:py-10 px-3 sm:px-40 ">
        <p class="text-[#383838] text-xl sm:text-2xl mb-[4px]">您先前編輯的內容都將不會儲存</p>
        <p class="text-[#383838] text-xl sm:text-2xl">確定離開？</p>
        <div class="flex mt-[20px]">
          <button @click="cancleFun" class="mr-[12px] text-white text-[16px] bg-orange border-2 border-orange rounded-2xl w-[55px] h-[25px] hover:bg-blue-light hover:border-blue-light">取消</button>
          <button @click="cancleDialog = !cancleDialog" class="text-[#7B7B7B] text-[16px] bg-white border-2 border-gray-default rounded-2xl w-[55px] h-[25px] hover:border-orange hover:text-orange">離開</button>
        </div>
      </div>
    </base-dialog>
    <base-dialog :show="submitDialog" class="relative ">
      <div class="flex flex-col items-center py-4 sm:py-10 px-3 sm:px-20">
        <p class="text-[#383838] text-2xl mb-[2px]">募資審核需要7個工作天！</p>
        <p class="text-[#383838] text-xl sm:text-2xl">審核狀態將顯示在募資管理頁面</p>
        <ul class="mt-[30px] sm:mt-[40px] text-sm sm:text-base text-gray-dark">
          <li class="mb-[5px]">・募資日期一經設定後就無法再更改，請確認後再提案。</li>
          <li class="mb-[5px]">・募資提案必須為可以履行的計劃目標且資訊內容清楚，不可涉及爭議性內容且不違反中華民國現行法律之提案。</li>
          <li>・若期限屆滿仍未達成募資目標，所有的贊助款項均將交還給贊助者。您可以修改提案再次重新提交審核。</li>
        </ul>
        <div class="flex mt-[30px] text-base">
          <button @click="submitDialog = !submitDialog" class="mr-[12px] text-[#7B7B7B] bg-white border-2 border-gray-default rounded-2xl w-[55px] h-[25px] hover:text-orange hover:border-orange">取消</button>
          <button @click="sendData" class="text-white bg-orange border-2 border-orange rounded-2xl w-[55px] h-[25px] hover:border-blue-light hover:bg-blue-light ">提交</button>
        </div>
      </div>
    </base-dialog>
    <base-dialog :show="deleteDialog">
      <div class="flex flex-col items-center py-4 sm:py-10 px-3 sm:px-40">
        <p class="text-[#383838] text-xl sm:text-2xl mb-2">刪除此提案後不可復原，確定刪除？</p>
        <p class="text-[#383838] text-xs mb-4">若您有問題請聯繫管理員</p>
        <p class="text-[#7b7b7b] text-sm sm:text-base">・若期限屆滿前刪除募資提案，所有的贊助款項均將交還給贊助者。</p>
        <div class="flex mt-[20px]">
          <button @click="deleteDialog = !deleteDialog" class="mr-[12px] text-white text-[16px] bg-orange border-2 border-orange rounded-2xl w-[55px] h-[25px] hover:bg-blue-light hover:border-blue-light">取消</button>
          <button @click="deleteFun" class="text-[#7B7B7B] text-[16px] bg-white border-2 border-gray-default rounded-2xl w-[55px] h-[25px] hover:border-orange hover:text-orange">刪除</button>
        </div>
      </div>
    </base-dialog>
    <div class="flex justify-between items-center mt-5">
      <base-title title="募資管理"></base-title>
      <div class="flex sm:mr-3 z-10 absolute sm:right-[40px] right-[20px] sm:top-[80px] top-[150px]" >
        <svg xmlns="http://www.w3.org/2000/svg" class="preArrow mr-3 block text-gray-light cursor-pointer" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" fill="currentColor"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="nextArrow block text-gray-light cursor-pointer" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" fill="currentColor"/></svg>
      </div>
    </div>
    <!-- 640以上 -->
    <swiper :slidesPerView="4" :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="hidden sm:flex">
      <swiper-slide v-for="(item, index) in nowFundArray" :key="item.donate_name">
        <fund-item class="theItemMenegerSpe" :id = index
          edit
          :title="item.donate_name"
          :img="item.donate_photo"
          :singer="item.account"
          :progress="item.goal_percent"
          :date="item.countdownDate"
          :money="item.goal"
          :edidFund="edidFund"
          :deleteDialogFun="deleteDialogFun">
        </fund-item>
      </swiper-slide>
    </swiper>
    <!-- 640以下 -->
    <swiper :slidesPerView="1" :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="flex sm:hidden mt-[-40px]">
      <swiper-slide v-for="(item, index) in nowFundArray" :key="item.donate_name">
        <fund-item class="theItemMenegerSpe" :id = index
          edit
          :title="item.donate_name"
          :img="item.donate_photo"
          :singer="item.account"
          :progress="item.goal_percent"
          :date="item.countdownDate"
          :money="item.goal"
          :edidFund="edidFund"
          :deleteDialogFun="deleteDialogFun">
        </fund-item>
      </swiper-slide>
    </swiper>
    <!-- 下半部 -->
    <base-title id="activeFund" title="發起募資" class="text-[22px] mt-12 sm:mt-20 mb-5"></base-title>
    <div class="flex flex-col w-full items-center sm:flex-row ">
      <select-img
        class="w-full h-48 sm:w-8/12 sm:h-[400px] sm:mr-6"
        :radius="'rounded-2xl sm:rounded-3xl'"
        :camera="true"
        :text="'選取圖片'"
        :sendFun="fileChange"
        :inputImg="'border-2 border-white bg-white incircle'"
      ></select-img>
      <div class="w-full sm:w-[340px] flex flex-col sm:w-4/12 mt-2 sm:mt-0">
        <div class="flex mt-4">
          <label for="topic" class="flex-shrink-0  sm:w-2/6 text-right text-gray-dark text-lg sm:text-xl mr-3">募資主題：</label>
          <input v-model="fundTitle" id="topic" type="text" class="w-4/6 border-b-2 border-gray-light focus:outline-none focus:border-orange  text-gray-dark">
        </div>
        <div class="flex mt-4">
          <label for="date" class="flex-shrink-0  sm:w-2/6 text-right text-gray-dark text-lg sm:text-xl mr-3">結束日期：</label>
          <input v-model="fundEndDate" id="date" type="date" @change="changeColor" style="color:#7b7b7b" class="w-4/6 border-b-2 border-gray-light focus:outline-none bg-white focus:border-orange text-transparent ">
        </div>
        <div class="flex mt-4">
          <label for="money" class="flex-shrink-0  sm:w-2/6 text-right text-gray-dark text-lg sm:text-xl mr-3  money">目標金額：</label>
          <input v-model="fundMoney" id="money" type="text" class="w-8/12  border-b-2 border-gray-light focus:outline-none focus:border-orange  text-gray-dark sm:ml-[10px] text-2xl pl-1">
        </div>
      </div>
    </div>
    <h3  class="text-[22px] sm:text-[24px] text-black-backdrop font-medium mt-10 sm:mt-16 sm:mb-5 mb-3" :second="'second'">計畫介紹：</h3>
    <div class="flex justify-center mb-12">
      <textarea v-model="fundInfo" name="projectInfo" style="color:#7b7b7b" class="w-full ml-[5px] sm:ml-[0px] h-[200px] sm:h-72 border-2 border-gray-light rounded-2xl resize-none pl-2 pt-2 focus:border-orange"></textarea>
    </div>
    <div class="flex justify-between">
      <h3 :second="'second'" class="text-[22px] sm:text-[24px] text-black-backdrop font-medium sm:mb-5 mb-0">募資方案：</h3>
      <div class="hidden arrow cursor-pointer sm:block">
        <svg @click="leftPlan" class="mr-3" xmlns="http://www.w3.org/2000/svg" width="25" height="40" viewBox="0 0 25 40">
          <path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" :fill="planL"/>
        </svg>
        <svg @click="rightPlan" xmlns="http://www.w3.org/2000/svg" width="25" height="40" viewBox="0 0 25 40">
          <path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" :fill="planR"/>
        </svg>
      </div>
    </div>
    <div class="flex outers ">
      <div class="flex inners items-center ">
        <div v-for="(item, index) in fundsList" :key="item" class="flex theItem hidden sm:flex theOption">
          <select-img
            :id="index"
            class="w-6/12 p-10 mr-5"
            :radius="'rounded-3xl'"
            :camera="true"
            :text="'選取圖片'"
            :sendFun="fileChange"
            :inputImg="'border-2 border-white bg-white incircle'"
          ></select-img>
          <div class="w-7/12">
            <div class="flex mt-4 ">
              <label class=" text-right text-lg text-gray-dark">金額：</label>
              <input v-model="item.money" class="w-9/12 border-2 border-gray-lighten text-gray-light focus:outline-none rounded-lg pl-2 focus:border-orange">
            </div>
            <div class="flex mt-4">
              <label class=" text-right text-lg text-gray-dark">標題：</label>
              <input v-model="item.title" class="w-9/12 border-2 border-gray-lighten text-gray-light focus:outline-none rounded-lg pl-2 focus:border-orange">
            </div>
            <div class="flex mt-4">
              <label class=" text-right text-lg text-gray-dark h-16">內容：</label>
              <textarea v-model="item.content" class="w-9/12 border-2 border-gray-lighten text-gray-light focus:outline-none resize-none rounded-lg pl-2 focus:border-orange"></textarea>
            </div>
            <div class="flex mt-4">
              <label class=" text-right text-lg text-gray-dark">限量：</label>
              <input v-model="item.quantity" class="w-9/12 border-2 border-gray-lighten text-gray-light focus:outline-none rounded-lg pl-2 focus:border-orange">
            </div>
          </div>
        </div>
        <!-- 640px以下顯示 -->
        <div class="block flex theItem sm:hidden">
          <div class="w-full">
            <div class="flex justify-between items-center">
              <div class=" mr-4">
                <div class="flex mt-4 ">
                  <label class="w-[90px] text-left text-lg text-gray-dark">金額：</label>
                  <input :value="fundsList[0].money" class="w-full border-2 border-gray-lighten text-gray-light focus:outline-none rounded-lg pl-2 focus:border-orange">
                </div>
                <div class="flex mt-4 ">
                  <label class="w-[90px] text-left text-lg text-gray-dark">標題：</label>
                  <input :value="fundsList[0].title" class="w-full border-2 border-gray-lighten text-gray-light focus:outline-none rounded-lg pl-2 focus:border-orange">
                </div>
              </div>
              <div class="w-[80px]  pt-3">
                <select-img
                  class="w-[80px] h-[80px] pt-3"
                  :radius="'rounded-2xl'"
                  :camera="true"
                  :sendFun="fileChange"
                  :inputImg="'border-2 border-white bg-white incircle'"
                ></select-img>
              </div>
            </div>
            <div class="flex mt-4 mx-auto w-full">
              <label class="w-[90px] text-left text-lg text-gray-dark h-16">內容：</label>
              <textarea :value="fundsList[0].content" class="w-full ml-[-8px] mr-[4px] h-32 border-2 border-gray-lighten text-gray-light focus:outline-none resize-none rounded-lg pl-2 focus:border-orange"></textarea>
            </div>
            <div class="flex mt-4 mx-auto w-full">
              <label class="w-[90px] text-left text-lg text-gray-dark">限量：</label>
              <input :value="fundsList[0].quantity" class="w-full ml-[-8px] mr-[4px] border-2 border-gray-lighten text-gray-light focus:outline-none rounded-lg pl-2 focus:border-orange">
            </div>
            <div class="flex items-center mt-5 ">
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
    <div class="flex justify-end mt-12 ">
      <div class="flex">
        <button @click="cancleDialog = !cancleDialog" class="w-[55px] h-[25px] border-2 border-gray-default text-gray-dark  mr-4 sm:mr-5 rounded-xl hover:border-orange hover:text-orange">取消</button>
        <button v-if="sendStatus" @click="submitDialog = !submitDialog" class="w-[85px] h-[25px] border border-orange bg-orange text-white  rounded-xl hover:border-blue-light hover:bg-blue-light">提交審核</button>
        <button v-else @click="sendEdit" class="w-[85px] h-[25px] border border-orange bg-orange text-white  rounded-xl hover:border-blue-light hover:bg-blue-light">確認編輯</button>
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
      oldLength: 0,
      cancleDialog: false,
      submitDialog: false,
      deleteDialog: false,
      fundId: '',
      fundTitle: '',
      fundEndDate: '',
      fundMoney: '',
      fundInfo: '',
      fundImg: {}, // 發起募資的照片(一張)
      donateImg: [], // user上傳募資方案的照片(多張)
      editDonateArray: [], // 點擊編輯後產生的陣列
      nowFundArray: [], // 一開始渲染user的募資資料
      arrayIndex: '', // delete用獲取該陣列
      topTag: '', // delete用獲取該元素
      nowChange: [0, 0, 0, 0],
      defaultEdit: true,
      sendStatus: true,
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
      donateId: Math.floor(Math.random() * 9999),
      fundsPosition: 0,
      fundsL: '#ededed',
      fundsR: '#b5b5b5',
      planPosition: 0,
      planL: '#ededed',
      planR: '#b5b5b5'
    }
  },
  methods: {
    changeColor () {
      document.querySelector('#date').classList.remove('text-transparent')
      document.querySelector('#date').classList.add('text-gray-light')
      this.fundEndDate = document.querySelector('#date').value
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
    },
    fileChange (e) {
      // 圖片渲染在畫面中
      const file = e.target.files[0]
      const readFile = new FileReader()
      readFile.readAsDataURL(file)
      readFile.addEventListener('load', function () {
        const image = e.target.closest('.outer')
        image.style.backgroundImage = `url('${readFile.result}')`
      })
      // 將路徑存到data中
      if (this.editDonateArray.length === 0) {
        if (e.target.closest('div.theOption')) {
          this.donateImg.push(file) // 存下半部(多筆)
        } else {
          this.fundImg = file // 存上半部(單筆)
        }
      } else {
        // 編輯狀態圖片修改
        // 修改下半部(多筆)
        if (e.target.closest('div.theOption')) {
          const getId = e.target.closest('.outer').id // 獲取該筆id
          if (getId > this.editDonateArray.length - 1) {
            this.editDonateArray.push({ option_img: file }) // push當下換的圖片file格式資料
            this.nowChange[getId] = 1
          } else {
            this.editDonateArray[getId].option_img = file // 修改裡面圖片變file格式資料
            this.nowChange[getId] = 1
          }
        // 修改上半部(單筆)
        } else {
          this.fundImg = file
        }
      }
    },
    sendData () {
      if (this.$store.getters.loginState !== false) {
        const form = new FormData()
        if (this.donateImg.length !== 0) {
          // 傳後端(發起募資)======================================================
          form.append('file', this.fundImg) // 存照片
          form.append('donate_id', this.donateId) // donate_id
          form.append('initiator', this.$store.getters.memberIdState) // initiator (募款發起人)
          form.append('donate_name', this.fundTitle) // donate_name
          form.append('info', this.fundInfo) // info
          form.append('goal', this.fundMoney) // goal
          form.append('end_date', this.fundEndDate) // end_date
          fetch('./DropbeatBackend/FileUpload/funds_single_files_send.php', {
            method: 'POST',
            body: form
          })
          // 傳後端(募資方案)======================================================
          const forms = new FormData()
          const donateOptionId = Math.floor(Math.random() * 9999)
          forms.append('length', this.donateImg.length)
          for (let i = 0; i < this.donateImg.length; i++) {
            forms.append(`file${i}`, this.donateImg[i]) // 存照片
            forms.append(`donate_option_id${i}`, `${donateOptionId}${i}`) // 募款方案編號
            forms.append('donate', this.donateId) // 募款編號
            forms.append(`option_name${i}`, this.fundsList[i].title) // 方案名稱
            forms.append(`option_reward${i}`, this.fundsList[i].content) // 方案回饋內容
            forms.append(`option_price${i}`, this.fundsList[i].money) // 金額
            forms.append(`num${i}`, this.fundsList[i].quantity) // 是否限量(填金額)
          }
          fetch('./DropbeatBackend/FileUpload/funds_multiple_files_send.php', {
            method: 'POST',
            body: forms
          })
          // 其他前台動作
          this.submitDialog = !this.submitDialog
          alert('成功新增募資！')
          this.$router.replace('/Funds')
          window.scrollTo(0, 0)
        } else {
          alert('請至少輸入一項目資方案！')
          this.submitDialog = !this.submitDialog
        }
      } else {
        alert('請先登入帳號！')
        this.$router.replace('/LoginIn')
      }
    },
    async edidFund (e) {
      window.location.href = '#activeFund'
      this.sendStatus = false
      // 先將圖片與文字清空
      document.querySelectorAll('.outer').forEach(item => {
        item.style.backgroundImage = 'none'
      })
      this.fundsList.forEach(item => {
        item.money = 450
        item.title = '只想要專輯'
        item.content = `- 專輯 x1 
- 內含：CD、寫真歌詞本、小卡 `
        item.quantity = 800
      })
      // 獲取該陣列數
      const arrayIndex = e.target.closest('div.theItemMenegerSpe').id
      // 獲取該募資的id->再用id去DB找募資方案內容
      const form = new FormData()
      form.append('donate', this.nowFundArray[arrayIndex].donate_id)
      const response = await fetch('./DropbeatBackend/FileUpload/funds_multiple_files_get.php', {
        method: 'POST',
        body: form
      })
      const responseData = await response.json()
      // 取得該會員 該募資項目的資料，from DONATE, DONATEOPTION
      // DONATE
      this.fundImg = this.nowFundArray[arrayIndex].donate_photo
      this.fundId = this.nowFundArray[arrayIndex].donate_id
      this.fundTitle = this.nowFundArray[arrayIndex].donate_name
      this.fundInfo = this.nowFundArray[arrayIndex].info
      this.fundEndDate = this.nowFundArray[arrayIndex].end_date
      this.fundMoney = this.nowFundArray[arrayIndex].goal
      document.querySelector('#date').value = this.fundEndDate
      this.changeColor() // 日期顯示
      const image = document.querySelectorAll('.outer')[0] // 圖片顯示
      image.style.backgroundImage = `url('${this.fundImg}')`
      // DONATEOPTION
      this.editDonateArray = responseData
      console.log(this.editDonateArray)
      const donateIndex = this.editDonateArray.length
      this.oldLength = this.editDonateArray.length // 紀錄原本的陣列數，傳到php做判斷
      const donateImage = document.querySelectorAll('.outer')
      for (let i = 0; i < donateIndex; i++) {
        this.fundsList[i].money = this.editDonateArray[i].option_price
        this.fundsList[i].title = this.editDonateArray[i].option_name
        this.fundsList[i].content = this.editDonateArray[i].option_reward
        this.fundsList[i].quantity = this.editDonateArray[i].num
        donateImage[i + 1].style.backgroundImage = `url('${this.editDonateArray[i].option_img}')`
      }
    },
    deleteDialogFun (e) {
      this.deleteDialog = !this.deleteDialog
      this.arrayIndex = e.target.closest('div.theItemMenegerSpe').id
      this.topTag = e.target.closest('div.swiper-slide')
    },
    deleteFun () {
      // 刪除該元素
      this.topTag.remove()
      // 獲取該募資的id->再用id去DB找募資方案內容
      const form = new FormData()
      form.append('donate', this.nowFundArray[this.arrayIndex].donate_id)
      fetch('./DropbeatBackend/FileUpload/funds_delete.php', {
        method: 'POST',
        body: form
      })
      this.deleteDialog = !this.deleteDialog
      // this.$router.replace('/Funds')
      // window.scrollTo(0, 0)
    },
    cancleFun () {
      this.cancleDialog = !this.cancleDialog
      this.sendStatus = true
      this.$router.replace('/MusicianFunds')
      window.scrollTo(0, 0)
      // 清空圖片
      document.querySelectorAll('.outer').forEach(item => {
        item.style.backgroundImage = 'none'
      })
      // 清空input file裡面的檔案
      document.querySelectorAll('input[type=file]').forEach(item => {
        item.value = ''
      })
      // 清空文字&變回原樣
      this.fundTitle = ''
      this.fundEndDate = ''
      this.fundMoney = ''
      this.fundInfo = ''
      this.fundsList.forEach(item => {
        item.money = 450
        item.title = '只想要專輯'
        item.content = `- 專輯 x1 
- 內含：CD、寫真歌詞本、小卡 `
        item.quantity = 800
      })
      this.editDonateArray = []
    },
    sendEdit () {
      alert('編輯已送出')
      // 取上半部資料
      const form = new FormData()
      form.append('donate_id', this.fundId)
      // form.append('initiator', this.$store.getters.loginIdState)
      form.append('donate_name', this.fundTitle)
      form.append('info', this.fundInfo)
      form.append('goal', this.fundMoney)
      form.append('end_date', this.fundEndDate)
      form.append('file', this.fundImg) // 存照片
      fetch('./DropbeatBackend/FileUpload/funds_single_files_edit.php', {
        method: 'POST',
        body: form
      })
      // 取下半部資料
      const optionId = this.editDonateArray[0].donate_option_id.slice(0, -1) // 獲取donate_option_id
      const index = this.editDonateArray.length
      const forms = new FormData()
      forms.append('nowChange', this.nowChange) // 傳改變的圖片數量
      forms.append('length', index) // 新的陣列長度
      forms.append('oldLength', this.oldLength) // 紀錄原本的陣列數，傳到php做判斷
      forms.append('donate', this.editDonateArray[0].donate) // 該donate編號(取一個即可)
      for (let i = 0; i < index; i++) {
        forms.append(`donate_option_id${i}`, `${optionId}${i}`)
        forms.append(`option_name${i}`, this.fundsList[i].title)
        forms.append(`file${i}`, this.editDonateArray[i].option_img)
        forms.append(`option_reward${i}`, this.fundsList[i].content)
        forms.append(`option_price${i}`, this.fundsList[i].money)
        forms.append(`num${i}`, parseInt(this.fundsList[i].quantity))
      }
      fetch('./DropbeatBackend/FileUpload/funds_multiple_files_edit.php', {
        method: 'POST',
        body: forms
      })
      this.$router.replace('/Funds')
      window.scrollTo(0, 0)
    }
  },
  async created () {
    // 操作
    // 判斷是否有登入
    if (this.$store.getters.memberIdState) {
      const formGet = new FormData()
      formGet.append('initiator', this.$store.getters.memberIdState)
      const response = await fetch('./DropbeatBackend/FileUpload/funds_single_files_get.php', {
        method: 'POST',
        body: formGet
      })
      // 回傳
      const responseData = await response.json()
      this.defaultEdit = false
      responseData.forEach((item) => {
        this.nowFundArray.unshift(item)
      })
      console.log(this.nowFundArray)
      // 獲取total_price
      const responses = await fetch('./DropbeatBackend/funds_page_total_price.php')
      const responseDatas = await responses.json()
      this.nowFundArray.forEach((item) => {
        responseDatas.forEach((items) => {
          if (items.donate_id === item.donate_id) {
            item.total_price = items.total_price
            item.donate_num = items.donate_num
          }
          item.goal_percent = `${Math.round((item.total_price / item.goal) * 100)}%`
        })
      })
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
    /* transform: translateX(-50%); */
  }
  .theItem{
    padding-left: 20px;
    width: 100%;
    height: 100%;
  }
  .theItem:nth-child(2n-1){
    padding-left: 0;
  }
  :deep .edit{
    justify-content:flex-end;
    margin-right: 20px;
  }
      :deep .fundBlock{
        /* border: 1px solid red; */
        width: 100%;
    }
    :deep .content{
        /* border: 1px solid red; */
        width: 96%;
        margin-left: 5px;
    }
  @media screen and (max-width:640px) {
    :deep .fundBlock{
        /* border: 1px solid red; */
        width: 100%;
    }
    :deep .homeActivity{
      /* border: 1px solid red; */
      width: 100%;
      height: 180px;
      background-position: center;
    }
    .theItem{
      padding-left: 0;
    }
    :deep .edit{
      justify-content:flex-start;
    }
    :deep .content{
      width: 100%;
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
    :deep .title00{
      justify-content: space-between;
      margin-bottom: 20px;
    }
    :deep .titleNline h2{
      font-size:28px;
      /* font-weight: bold; */
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
    :deep .theImg{
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
    :deep .circle{
      width: 65px;
      height: 65px;
    }
    :deep .cameraIcom{
      width: 40px;
      height: 40px;
    }
    /* .preIcon {
      @apply text-gray-light absolute top-[42%] sm:top-1/2 z-10 left-0 cursor-pointer
    }
    .nextIcon{
      @apply text-gray-light absolute top-[42%] sm:top-1/2 z-10 right-0 cursor-pointer
    } */
    .swiper-button-disabled {
      @apply text-gray-default
    }
  }
</style>
