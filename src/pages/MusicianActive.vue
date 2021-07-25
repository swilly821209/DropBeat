<template>
  <div class="range">
    <div class="flex justify-between mt-5">
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
    <base-title title="發起活動" class="mt-20 mb-5"></base-title>
    <div class="flex w-full h-96">
      <select-img class="w-8/12"></select-img>
      <div class="w-4/12 flex flex-col pt-10 ">
        <div class="flex mt-4">
          <label for="topicName" class="w-2/6 text-right text-gray-dark text-xl mr-3">活動主題：</label>
          <input name="topicName" id="topicName" type="text" class="w-4/6 border-b-2 border-gray-light focus:outline-none focus:border-orange text-gray-light">
        </div>
        <div class="flex mt-4">
          <label for="topic" class="w-2/6 text-right text-gray-dark text-xl mr-3"></label>
          <input name="topic" id="topic" type="text" class="w-4/6 border-b-2 border-gray-light focus:outline-none focus:border-orange text-gray-light">
        </div>
        <div class="flex mt-4">
          <label for="date" class="w-2/6 text-right text-gray-dark text-xl mr-3">活動日期：</label>
          <input name="date" id="date" type="date" value="2021-08-08" @change="changeColor" class="w-4/6 border-b-2 border-gray-light focus:outline-none focus:border-orange text-transparent font-bold">
        </div>
        <div class="flex mt-4">
          <label for="time" class="w-2/6 text-right text-gray-dark text-xl mr-3">活動時間：</label>
          <input name="time" id="time" type="time" @change="changeColor" class="w-4/6 border-b-2 border-gray-light focus:outline-none focus:border-orange text-transparent font-bold">
        </div>
        <div class="flex mt-4">
          <label for="placeArea" class="w-2/6 text-right text-gray-dark text-xl mr-3">活動地點：</label>
          <select name="placeArea" id="placeArea" class="w-4/6 border-b-2 border-gray-light focus:outline-none focus:border-orange text-gray-light" >
            <option v-for="item in area" :key="item" :value="item">{{item}}</option>
          </select>
        </div>
        <div class="flex mt-4 relative">
          <label class="w-2/6 mr-3"></label>
          <label for="place" class="w-4/6">
            <input name="place" id="place" type="text" class="w-full border-b-2 border-gray-light text-gray-dark focus:outline-none focus:border-orange text-gray-light pl-1">
          </label>
        </div>
      </div>
    </div>
    <base-title title="活動介紹" class="mt-20  mb-5" :second="'second'"></base-title>
    <textarea name="projectInfo" class="w-full h-72 border-2 border-gray-light text-gray-dark rounded-2xl resize-none pl-2 pt-2 focus:border-orange"></textarea>
    <div class="flex justify-end mt-5">
      <div class="flex">
        <button class="border-2 border-gray-light text-gray-light px-4 mr-5 rounded-xl hover:border-orange">取消</button>
        <button class="border-2 border-orange bg-orange text-white px-4 rounded-xl">提交審核</button>
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
  div[col=col]{
    flex-direction: column;
    width: 100%;
  }
  label[for=place]::after{
    content: '.';
    position: absolute;
    right: -1px;
    top:-1px;
    background-image: url('../assets/icon/map.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 22px;
    height: 22px;
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
