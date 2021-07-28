<template>
  <div class="range">
    <div class="flex justify-between ">
      <base-title title="活動管理" admin></base-title>
    </div>
    <div class="flex">
      <span class="cursor-pointer transition translate hover:-translate-x-0.5 self-center" @click="leftFun">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="40" viewBox="0 0 25 40">
              <path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" :fill="arrLeftColor"/>
          </svg>
      </span>
      <div class="outers">
        <div class="inners">
          <activity-item
            class="w-full"
            v-for="item in activeDatas"
            :imgWidth="'width:95%;'"
            :check="true"
            :edit="true"
            :col="'col'"
            :key="item"
            :img="item.imgSrc"
            :title="item.title"
            :time="item.time"
            :city="item.city"
            :location="item.location"
            >
          </activity-item>
        </div>
      </div>
      <span class="cursor-pointer transition translate hover:translate-x-0.5 self-center" @click="rightFun">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="40" viewBox="0 0 25 40">
              <path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" :fill="arrRightColor"/>
          </svg>
      </span>
    </div>
    <h4>發起活動</h4>
    <div class="flex ">
      <select-img
        :radius="'rounded-3xl'"
        :camera="true"
        :text="'選取圖片'"
        :inputImg="'border-2 border-white bg-white incircle'"
      ></select-img>
      <div class="content flex flex-col justify-center ">
        <div class=" flex ">
          <label for="topicName" class="textTitle text-right text-gray-dark text-lg mr-3">活動主題：</label>
          <input name="topicName" id="topicName" type="text" style="color:#7b7b7b" class="textLine border-b-2 border-gray-default focus:outline-none focus:border-orange text-gray-light">
        </div>
        <!-- <div class="flex mt-4">
          <label for="topic" class="textTitle text-right text-gray-dark text-xl mr-3"></label>
          <input name="topic" id="topic" type="text" class="textLine border-b-2 border-gray-default focus:outline-none focus:border-orange text-gray-light">
        </div> -->
        <div class="flex mt-4">
          <label for="date" class="textTitle text-right text-gray-dark text-lg mr-3">活動日期：</label>
          <input name="date" id="date" type="date" value="2021-08-08" @change="changeColor" style="color:#7b7b7b" class="textLine border-b-2 border-gray-default focus:outline-none focus:border-orange text-transparent font-bold">
        </div>
        <div class="flex mt-4">
          <label for="time" class="textTitle text-right text-gray-dark text-lg mr-3">活動時間：</label>
          <input name="time" id="time" type="time" @change="changeColor" style="color:#7b7b7b" class="textLine border-b-2 border-gray-default focus:outline-none focus:border-orange text-transparent font-bold">
        </div>
        <div class="flex mt-4">
          <label for="placeArea" class="textTitle text-right text-gray-dark text-lg mr-3">活動地點：</label>
          <select name="placeArea" id="placeArea" style="color:#7b7b7b" class="textLine border-b-2 border-gray-default focus:outline-none focus:border-orange text-gray-light" >
            <option v-for="item in area" :key="item" :value="item">{{item}}</option>
          </select>
        </div>
        <div class="flex mt-4 relative">
          <label class="textTitle mr-3"></label>
          <label for="place" class="textLine">
            <input name="place" id="place" type="text" class="w-full border-b-2 border-gray-default text-gray-dark focus:outline-none focus:border-orange text-gray-light pl-1">
          </label>
        </div>
      </div>
    </div>
    <!-- <base-title title="活動介紹" class="mt-20  mb-5" :second="'second'"></base-title> -->
    <h5 class="text-xl text-black-backdrop">活動介紹：</h5>
    <textarea name="projectInfo" class="w-full h-56 border-2 border-gray-light text-gray-dark rounded-2xl resize-none pl-2 pt-2 focus:border-orange"></textarea>
    <div class="flex justify-end mt-4">
      <div class="flex">
        <button class="cancelBtn border-2 border-gray-default text-gray-dark  rounded-2xl hover:border-orange hover:text-orange">取消</button>
        <button class="submitBtn border-2 border-orange bg-orange text-white rounded-2xl hover:bg-blue-light hover:border-opacity-0">提交審核</button>
      </div>
    </div>
  </div>
</template>

<script>
import ActivityItem from '../components/ActivityItem.vue'
import SelectImg from '../components/SelectImg.vue'
export default {
  components: {
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
      arrRightColor: '#b5b5b5'
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
    }
  }
}
</script>

<style scoped>
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
.cancelBtn{
  height: 30px;
  width: 55px;
}
.submitBtn{
  height: 30px;
  width: 90px;
  margin: 0 0 0 10px;
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
    height: 430px;
    overflow: hidden;
    /* border: 1px solid red; */
  }
  .inners{
    display: flex;
    width: 200%;
    height: 430px;
    transition: all 1s;
    position: absolute;
    /* transform: translateX(-50%); */
  }
</style>
