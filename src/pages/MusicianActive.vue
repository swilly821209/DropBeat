<template>
  <div class="range">
    <base-dialog :show="cancleDialog">
      <div class="flex flex-col items-center py-4 sm:py-10 px-3 sm:px-40">
        <p class="text-[#383838] text-xl sm:text-2xl mb-[4px]">您先前編輯的內容都將不會儲存</p>
        <p class="text-[#383838] text-xl sm:text-2xl">確定離開？</p>
        <div class="flex mt-[20px]">
          <button @click="cancleFun" class="mr-[12px] text-white text-[16px] bg-orange border-2 border-orange rounded-2xl w-[55px] h-[25px] hover:bg-blue-light hover:border-blue-light">取消</button>
          <button @click="cancleDialog = !cancleDialog" class="text-[#7B7B7B] text-[16px] bg-white border-2 border-[#B5B5B5] border-gray-default rounded-2xl w-[55px] h-[25px] hover:border-orange hover:text-orange">離開</button>
        </div>
      </div>
    </base-dialog>
    <base-dialog :show="submitDialog">
      <div class="flex flex-col items-center py-4 sm:py-10 px-3 sm:px-20">
        <p class="text-[#383838] text-2xl mb-[2px]">活動審核需要3個工作天！</p>
        <p class="text-[#383838] text-xl sm:text-2xl">活動狀態將顯示在活動管理頁面</p>
        <ul class="mt-[30px] sm:mt-[40px] text-sm sm:text-base text-gray-dark">
          <li class="mb-[5px]">・活動提案必須為可以履行的計劃目標且資訊內容清楚，不可涉及
    爭議性內容且不違反中華民國現行法律之提案。</li>
        </ul>
        <div class="flex mt-[30px] text-base">
          <button @click="submitDialog = !submitDialog" class="mr-[12px] text-[#7B7B7B] bg-white border-2 border-gray-default rounded-2xl w-[55px] h-[25px] hover:text-orange hover:border-orange">取消</button>
          <button @click="sendData" class="text-white bg-orange border-2 border-orange rounded-2xl w-[55px] h-[25px] hover:border-blue-light hover:bg-blue-light">提交</button>
        </div>
      </div>
    </base-dialog>
    <base-dialog :show="deleteDialog">
      <div class="flex flex-col items-center py-4 sm:py-10 px-3 sm:px-40">
        <p class="text-[#383838] text-xl sm:text-2xl">刪除此募資提案後不可復原，您確定刪除？</p>
        <p class="text-[#383838] text-xs">若您有問題請聯繫管理員</p>
        <p class="text-[#383838] text-sm sm:text-base">・若期限屆滿前刪除募資提案，所有的贊助款項均將交還給贊助者。</p>
        <div class="flex mt-[20px]">
          <button @click="deleteDialog = !deleteDialog" class="mr-[12px] text-white text-[16px] bg-orange border-2 border-orange rounded-2xl w-[55px] h-[25px] hover:bg-blue-light hover:border-blue-light">取消</button>
          <button @click="deleteFun" class="text-[#7B7B7B] text-[16px] bg-white border-2 border-gray-default rounded-2xl w-[55px] h-[25px] hover:border-orange hover:text-orange">刪除</button>
        </div>
      </div>
    </base-dialog>
    <div class="flex justify-between mt-5 ml">
      <base-title title="活動管理"></base-title>
    </div>
    <!-- 640以上顯示 -->
    <div class="flex items-center justify-start">
      <svg xmlns="http://www.w3.org/2000/svg" class="preArrow mr-3 block text-gray-light cursor-pointer" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" fill="currentColor"/></svg>
        <swiper :slidesPerView="2" :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="hidden sm:flex" observeParents>
          <swiper-slide v-for="(item, index) in nowActivityArr" :key="item" observer>
            <activity-item class="theItemMenegerSpe" :id = index
                :check="true"
                :edit="true"
                :col="'col'"
                :img="item.activity_photo"
                :title="item.activity_name"
                :time="item.activity_date"
                :city="item.activity_area"
                :location="item.place"
                :edidFund="edidFund"
                :deleteDialogFun="deleteDialogFun">
              </activity-item>
          </swiper-slide>
        </swiper>
        <swiper :slidesPerView="1" :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="flex sm:hidden" observeParents>
          <swiper-slide v-for="(item, index) in nowActivityArr" :key="item" observer>
            <activity-item class="theItemMenegerSpe" :id = index
                :check="true"
                :edit="true"
                :col="'col'"
                :img="item.activity_photo"
                :title="item.activity_name"
                :time="item.activity_date"
                :city="item.activity_area"
                :location="item.place"
                :edidFund="edidFund"
                :deleteDialogFun="deleteDialogFun">
              </activity-item>
          </swiper-slide>
        </swiper>
      <svg xmlns="http://www.w3.org/2000/svg" class="nextArrow block text-gray-light cursor-pointer" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" fill="currentColor"/></svg>
    </div>
    <h4 id="doActive">發起活動</h4>
    <div class="flex flex-col sm:flex-row">
      <select-img
        :radius="'rounded-3xl'"
        :camera="true"
        :text="'選取圖片'"
        :sendFun="fileChange"
        :inputImg="'border-2 border-white bg-white incircle'"
      ></select-img>
      <div class="content flex flex-col justify-center mt-2 sm:mt-0">
        <div class=" flex mt-3 sm:mt-0 w-full sm:w-full">
          <label for="topicName" class="textTitle text-right text-gray-dark text-lg mr-3">活動主題：</label>
          <input v-model="showTopic" name="topicName" id="topicName" type="text" style="color:#7b7b7b" class="textLine border-b-2 border-gray-light focus:outline-none focus:border-orange text-gray-light">
        </div>
        <div class="flex mt-4 w-full sm:w-full">
          <label for="date" class="textTitle text-right text-gray-dark text-lg mr-3">活動日期：</label>
          <input v-model="showDate" name="date" id="date" type="date" @change="changeColor" style="color:#7b7b7b" class="bg-white sm:bg-opacity-0 textLine border-b-2 border-gray-light focus:outline-none focus:border-orange text-transparent font-bold">
        </div>
        <div class="flex mt-4 w-full sm:w-full">
          <label for="time" class="textTitle text-right text-gray-dark text-lg mr-3">活動時間：</label>
          <input v-model="showTime" name="time" id="time" type="time" @change="changeColor" style="color:#7b7b7b" class="bg-white sm:bg-opacity-0 textLine border-b-2 border-gray-light focus:outline-none focus:border-orange text-transparent font-bold">
        </div>
        <div class="flex mt-4 w-full sm:w-full">
          <label for="placeArea" class="textTitle text-right text-gray-dark text-lg mr-3">活動地點：</label>
          <select v-model="showArea" name="placeArea" id="placeArea" style="color:#7b7b7b" class="bg-white sm:bg-opacity-0 textLine border-b-2 border-gray-light focus:outline-none focus:border-orange text-gray-light" >
            <option v-for="item in area" :key="item" :value="item">{{item}}</option>
          </select>
        </div>
        <div class="flex mt-4  w-full sm:w-full relative">
          <label class="textTitle mr-3"></label>
          <label for="place" class="textLine">
            <input v-model="showPlace" name="place" id="place" type="text" class="w-full border-b-2 border-gray-light text-gray-dark focus:outline-none focus:border-orange text-gray-light pl-1">
          </label>
        </div>
      </div>
    </div>
    <!-- <base-title title="活動介紹" class="mt-20  mb-5" :second="'second'"></base-title> -->
    <h5 class="text-[22px] text-black-backdrop">活動介紹：</h5>
    <textarea v-model="showInfo" name="projectInfo" class="w-full h-[200px] sm:h-64 border-2 border-gray-light text-gray-dark rounded-2xl resize-none pl-2 pt-2 focus:border-orange"></textarea>
    <div class="flex justify-end mt-4">
      <div class="flex">
        <button @click="cancleDialog = !cancleDialog" class="cancelBtn w-[55px] h-[25px] border-2 border-gray-default text-gray-dark mr-4 sm:mr-5 rounded-2xl hover:border-orange hover:text-orange">取消</button>
        <button v-if="sendStatus" @click="submitDialog = !submitDialog" class="submitBtn w-[85px] h-[25px] border border-orange bg-orange text-white rounded-2xl hover:bg-blue-light hover:border-blue-light">提交審核</button>
        <button v-else @click="sendEdit" class="submitBtn w-[85px] h-[25px] border border-orange bg-orange text-white rounded-2xl hover:bg-blue-light hover:border-blue-light">確認編輯</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation } from 'swiper/core'

import ActivityItem from '../components/ActivityItem.vue'
import SelectImg from '../components/SelectImg.vue'

SwiperCore.use([Navigation])

export default {
  components: {
    Swiper,
    SwiperSlide,
    ActivityItem,
    SelectImg
  },
  data () {
    return {
      activeDatas: [
        {
          imgSrc: require('../assets/images/active/ac001.jpg'),
          title: '2021 新歌巡迴《 穿過夜晚 Go Through the Night 》',
          time: '2021-7-19 20:00',
          city: '台北市',
          location: '海邊的卡夫卡 Kafka by the Sea',
          singerImg: 'https://akstatic.streetvoice.com/profile_images/ju/ne/junepan/U54Pf3WxjfvgWArGdTnKav.jpg?x-oss-process=image/resize,m_fill,h_600,w_600,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          singer: '大象體操 Elephant Gym'
        },
        {
          imgSrc: require('../assets/images/active/ac001.jpg'),
          title: '2021 新歌巡迴《 穿過夜晚 Go Through the Night 》',
          time: '2021-7-19 20:00',
          city: '台北市',
          location: '海邊的卡夫卡 Kafka by the Sea',
          singerImg: 'https://akstatic.streetvoice.com/profile_images/ju/ne/junepan/U54Pf3WxjfvgWArGdTnKav.jpg?x-oss-process=image/resize,m_fill,h_600,w_600,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          singer: '大象體操 Elephant Gym'
        },
        {
          imgSrc: require('../assets/images/active/ac001.jpg'),
          title: '2021 新歌巡迴《 穿過夜晚 Go Through the Night 》',
          time: '2021-7-19 20:00',
          city: '台北市',
          location: '海邊的卡夫卡 Kafka by the Sea',
          singerImg: 'https://akstatic.streetvoice.com/profile_images/ju/ne/junepan/U54Pf3WxjfvgWArGdTnKav.jpg?x-oss-process=image/resize,m_fill,h_600,w_600,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          singer: '大象體操 Elephant Gym'
        },
        {
          imgSrc: require('../assets/images/active/ac001.jpg'),
          title: '2021 新歌巡迴《 穿過夜晚 Go Through the Night 》',
          time: '2021-7-19 20:00',
          city: '台北市',
          location: '海邊的卡夫卡 Kafka by the Sea',
          singerImg: 'https://akstatic.streetvoice.com/profile_images/ju/ne/junepan/U54Pf3WxjfvgWArGdTnKav.jpg?x-oss-process=image/resize,m_fill,h_600,w_600,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          singer: '大象體操 Elephant Gym'
        }
      ],
      area: ['', '臺北市', '新北市', '桃園市', '臺中市', '臺南市', '高雄市', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '屏東縣', '宜蘭縣', '花蓮縣', '臺東縣', '澎湖縣', '金門縣', '連江縣', '基隆市', '新竹市', '嘉義市'],
      position: 0,
      arrLeftColor: '#ededed',
      arrRightColor: '#b5b5b5',
      sendStatus: true,
      deleteDialog: false,
      cancleDialog: false,
      submitDialog: false,
      // 點擊
      showImg: [], // 當下存入的img,
      showTopic: '', // 當下存入的活動主題
      showDate: '', // 當下存入的日期
      showTime: '', // 當下存入的時間
      showArea: '', // 當下存入的區域
      showPlace: '', // 當下存入的地點
      showInfo: '', // 當下存入的活動資訊
      // 回傳
      nowActivityArr: [], // 讀取member活動資料
      // 編輯
      editTargetId: '', // 獲取正在編輯的活動id (activity_id)
      // 刪除
      arrayIndex: '', // delete用獲取該陣列
      topTag: '' // delete用獲取該元素
    }
  },
  methods: {
    changeColor (e) {
      e.target.classList.remove('text-transparent')
      e.target.classList.add('text-gray-light')
    },
    leftFun () {
      this.fundsPosition = 0
      document.querySelector('.inners').style.transform = `translateX(${this.fundsPosition}%)`
      this.arrLeftColor = '#ededed'
      this.arrRightColor = '#b5b5b5'
    },
    rightFun () {
      this.fundsPosition = -50
      document.querySelector('.inners').style.transform = `translateX(${this.fundsPosition}%)`
      this.arrLeftColor = '#b5b5b5'
      this.arrRightColor = '#ededed'
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
      this.showImg = file
      // console.log(this.showImg)
    },
    sendData () {
      if (this.$store.getters.loginState !== false) {
        const form = new FormData()
        // const activityId = Math.floor(Math.random() * 9999)
        // 傳後端(發起募資)======================================================
        form.append('file', this.showImg) // 存照片 活動代表圖 file進去 轉activity_photo
        // form.append('activity_id', activityId) // donate_id
        form.append('initiator', this.$store.getters.memberIdState) // initiator (活動發起人))
        form.append('activity_name', this.showTopic) // 活動名稱
        form.append('activity_date', this.showDate) // 活動日期
        form.append('activity_time', this.showTime) // 活動時間
        form.append('activity_area', this.showArea) // 活動區域(縣市)
        form.append('place', this.showPlace) // 活動地點
        form.append('info', this.showInfo) // 活動簡介
        fetch('http://localhost/DropBeatBackend/FileUpload/activity_files_send.php', {
          method: 'POST',
          body: form
        })
        // 其他前台動作
        this.submitDialog = !this.submitDialog
        alert('成功新增活動！')
        this.$router.replace('/Active')
        window.scrollTo(0, 0)
      } else {
        alert('請先登入帳號！')
        this.$router.replace('/LoginIn')
      }
    },
    cancleFun () {
      this.cancleDialog = !this.cancleDialog
      document.querySelector('.outer').style.backgroundImage = 'none'
      document.querySelector('input[type=file]').value = '' // 將檔案內的資料清空
      this.showImg = [] // 當下存入的img(清空)
      this.showTopic = '' // 當下存入的活動主題(清空)
      this.showDate = '' // 當下存入的日期(清空)
      this.showTime = '' // 當下存入的時間(清空)
      this.showArea = '' // 當下存入的區域(清空)
      this.showPlace = '' // 當下存入的地點(清空)
      this.showInfo = '' // 當下存入的活動資訊(清空)
      // 顯示提交審核button
      this.sendStatus = true
      this.$router.replace('/MusicianActive')
      window.scrollTo(0, 0)
    },
    async edidFund (e) {
      window.location.href = '#doActive'
      this.sendStatus = !this.sendStatus
      // 先將圖片與文字清空
      document.querySelector('.outer').style.backgroundImage = 'none'
      document.querySelector('input[type=file]').value = '' // 將檔案內的資料清空
      // 獲取該陣列數
      const arrayIndex = e.target.closest('div.item').id
      console.log(arrayIndex)
      // 獲取該募資的id->再用id去DB找募資方案內容
      const form = new FormData()
      form.append('activity_id', this.nowActivityArr[arrayIndex].activity_id)
      const response = await fetch('http://localhost/DropBeatBackend/FileUpload/activity_files_edit_get.php', {
        method: 'POST',
        body: form
      })
      const responseData = await response.json()
      console.log(responseData)
      // 取得該會員 該募資項目的資料，from ACTIVITY
      this.editTargetId = responseData[0].activity_id
      this.showImg = responseData[0].activity_photo
      this.showTopic = responseData[0].activity_name
      this.showDate = responseData[0].activity_date
      this.showTime = responseData[0].activity_time
      this.showArea = responseData[0].activity_area
      this.showPlace = responseData[0].place
      this.showInfo = responseData[0].info
      // this.changeColor() // 日期顯示
      const image = document.querySelectorAll('.outer')[0] // 圖片顯示
      image.style.backgroundImage = `url('${this.showImg}')`
      // 顯示確認編輯button
      this.sendStatus = false
    },
    sendEdit () {
      alert('編輯已送出')
      const form = new FormData()
      form.append('activity_id', this.editTargetId) // 傳該活動id
      form.append('activity_name', this.showTopic)
      form.append('activity_date', this.showDate)
      form.append('activity_time', this.showTime)
      form.append('activity_area', this.showArea)
      form.append('place', this.showPlace)
      form.append('info', this.showInfo)
      form.append('file', this.showImg) // 存照片
      fetch('http://localhost/DropBeatBackend/FileUpload/activity_files_edit_send.php', {
        method: 'POST',
        body: form
      })
      this.$router.replace('/Active')
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
      form.append('activity_id', this.nowActivityArr[this.arrayIndex].activity_id)
      fetch('http://localhost/DropBeatBackend/FileUpload/activity_delete.php', {
        method: 'POST',
        body: form
      })
      this.deleteDialog = !this.deleteDialog
      alert('刪除成功！')
      this.$router.replace('/Active')
      window.scrollTo(0, 0)
    }
  },
  async created () {
    // 操作
    // 判斷是否有登入
    if (this.$store.getters.memberIdState) {
      const form = new FormData()
      form.append('initiator', this.$store.getters.memberIdState)
      const response = await fetch('http://localhost/DropBeatBackend/FileUpload/activity_files_get.php', {
        method: 'POST',
        body: form
      })
      // 回傳
      const responseData = await response.json()
      // this.defaultEdit = false
      responseData.forEach((item) => {
        this.nowActivityArr.unshift(item)
      })
      console.log(this.nowActivityArr)
    }
  }
}
</script>

<style scoped>
  .activeImg{
    width: 600px;
  }
  :deep h2{
    cursor: default;
  }
  h4{
    font-size: 32px;
    font-weight: 500;
    color:#383838;
    cursor:default;
    margin: 70px 0 30px 0;
  }
  h5{
    margin: 40px 0 10px 5px;
  }
  :deep .outer{
    width: 665px;
    height: 380px;
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
  div[col=col]{
    flex-direction: column;
    width: 100%;
  }
  label[for=place]::after{
    content: '.';
    position: absolute;
    right: 9px;
    top:-1px;
    background-image: url('../assets/icon/map.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 20px;
    height: 20px;
  }
  /* 輪播 */
  .outers{
    display: flex;
    position: relative;
    width: 100%;
    height: 440px;
    overflow: hidden;
    /* border: 1px solid red; */
  }
  .inners{
    display: flex;
    width: 200%;
    height: 440px;
    transition: all 1s;
    position: absolute;
    /* transform: translateX(-50%); */
  }
  :deep .imgWidth{
    width: 95%;
  }
  @media screen and (max-width:640px) {
    :deep .item{
      /* border:1px solid red; */
      width: 100%;
    }
    :deep .editclass{
      width: 270px;
      margin-left: 5px;
    }
    :deep .activeImg{
      /* border: 1px solid red; */
      width: 100%;
      height: 100%;
      background-size: cover ;
    }
    :deep .activeContent{
      width: 100%;
      padding:12px 5px 0;
    }
    /* .preIcon {
      @apply text-gray-light absolute top-[42%] sm:top-1/2 z-10 left-0 cursor-pointer
    } */
    /* .nextIcon{
      @apply text-gray-light absolute top-[42%] sm:top-1/2 z-10 right-0 cursor-pointer
    } */
    .swiper-button-disabled {
      @apply text-gray-default
    }
    :deep .join{
      display: none;
    }
    :deep .title00{
      justify-content: space-between;
      margin-bottom: 20px;
    }
    :deep .titleNline h2{
      font-size:28px;
    }
    h4{
      font-size: 28px;
      font-weight: 500;
      color:#383838;
      cursor:default;
      margin: 40px 0 15px 0;
    }
    :deep .outer{
      width: 100%;
      height: 200px;
    }
    :deep .circle{
      width: 65px;
      height: 65px;
    }
    :deep .cameraIcom{
      width: 40px;
      height: 40px;
    }
    :deep .content{
      width: 300px;
    }
    .content{
      width: 100%;
      padding: 0 0 0 0;
    }
  }
</style>
