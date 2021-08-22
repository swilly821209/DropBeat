<template>
  <div class="range">
    <base-title title="會員專區" class=" sm:mb-16 mb-5"></base-title>
    <div class="artistRange mb-5">
      <div class="title02 flex">
        <div class="titleline"></div>
        <h3 class="sm:text-2xl text-[22px] text-black-backdrop">正在關注</h3>
      </div>
        <find-carousel class="artistCarousel"></find-carousel>
    </div>
    <div class=" mb-12">
      <div class="title02 flex">
        <div class="titleline"></div>
        <h3 class="sm:text-2xl text-[22px] text-black-backdrop">想參加活動</h3>
      </div>
      <swiper :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="sm:my-10 sm:pb-0  my-0 -mt-8 pb-16">
        <svg xmlns="http://www.w3.org/2000/svg"  class="preIcon  preArrow" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" fill="currentColor"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="nextIcon nextArrow"  width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" fill="currentColor"/></svg>
        <swiper-slide v-for="item in activeDatas" :key="item" class="flex justify-center items-center sm:top-auto top-14">
          <div class="activeRange sm:flex block items-center sm:justify-between">
            <activity-item
                :img="item.activity_photo"
                :title="item.activity_name"
                :time="item.activity_date"
                :city="item.activity_area"
                :location="item.place"
                :singerImg="item.activity_photo"
                :singer="item.account"
                :toActive="item.toTheActive"
                >
            </activity-item>
            <base-date :time="item.activity_date" week="true" class="date"></base-date>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="mb-12">
      <div class="title02 flex">
        <div class="titleline"></div>
        <h3 class="sm:text-2xl text-[22px] text-black-backdrop">已參加活動</h3>
      </div>
      <swiper :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="sm:my-10 sm:pb-0  my-0 -mt-8 pb-16">
        <svg xmlns="http://www.w3.org/2000/svg"  class="preIcon  preArrow" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" fill="currentColor"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="nextIcon nextArrow"  width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" fill="currentColor"/></svg>
        <swiper-slide v-for="item in activeDatasPast" :key="item" class="flex justify-center items-center sm:top-auto top-14">
          <div class="activeRange sm:flex block items-center justify-between ">
            <activity-item
                :img="item.activity_photo"
                :title="item.activity_name"
                :time="item.activity_date"
                :city="item.activity_area"
                :location="item.place"
                :singerImg="item.activity_photo"
                :singer="item.account"
                :toActive="item.toTheActive"
                >
            </activity-item>
            <base-date :time="item.activity_date" week="true" class="date"></base-date>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="mb-12">
      <div class="title02 flex">
        <div class="titleline"></div>
        <h3 class="sm:text-2xl text-[22px] text-black-backdrop">已贊助計畫</h3>
      </div>
      <swiper :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="sm:my-10 sm:pb-0  my-0 -mt-8 pb-16">
        <svg xmlns="http://www.w3.org/2000/svg"  class="preIcon preArrow" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" fill="currentColor"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="nextIcon nextArrow"  width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" fill="currentColor"/></svg>
        <swiper-slide v-for="item in donateArr" :key="item" class="flex justify-center items-center z-20 sm:flex-row flex-col sm:top-auto top-14">
          <div class="activeRange flex items-center sm:justify-between ">
            <div class="flex sm:items-center sm:flex-row flex-col items-start flex-shrink-0">
              <img class="sm:w-[345px] sm:h-[200px] w-32 h-32  rounded-2xl cursor-pointer object-cover object-center" :src="item.donate_photo">
              <div class="fundContent sm:flex hidden flex-col ">
                <div class="successIcon bg-orange text-white  rounded-3xl  self-end sm:block hidden">success</div>
                <h4 class="text-lg text-black-backdrop ">{{item.donate_name}}</h4>
                <base-badge  class=" mt-2 inline-block" :image="item.donate_photo" :singer="item.initiator"></base-badge>
              </div>
            </div>
            <div class="fundDetail flex flex-col justify-center h-full sm:border-l sm:border-b-0 border-b border-gray-default sm:pl-5 ml-5">
                <div class="successIcon text-base bg-orange text-white  rounded-3xl sm:hidden block">success</div>
                <div class="flex sm:flex-col flex-row sm:justify-start justify-between">
                  <p class="sm:text-3xl text-2xl text-orange sm:mb-5 mb-0 sm:order-1 order-2">${{item.total_price}}</p>
                  <h5 class="my-1 text-black-backdrop text-base sm:mr-0 mr-8 sm:order-2 order-1">{{item.donate_name}}</h5>
                </div>
                <ul class="list-disc text-gray-dark sm:text-sm text-xs sm:mb-0 mb-2">
                  <textarea class="w-[200px] h-[100px]" :value="item.info"></textarea>
                </ul>
            </div>
          </div>
          <div class="mt-2 sm:hidden block self-start ml-0">
            <h4 class="text-base text-black-backdrop ">{{item.donate_name}}</h4>
            <base-badge  class="text-xs mt-[-5px] inline-block" :image="item.donate_photo" :singer="item.initiator"></base-badge>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div>
      <div class="title02 flex">
        <div class="titleline"></div>
        <h3 class="sm:text-2xl text-[22px] text-black-backdrop">我的音樂庫</h3>
      </div>
      <div class="selectBtn  flex justify-start space-x-3">
        <button class="selectBtn01 border-2 border-orange bg-orange rounded-2xl  text-white ">喜歡歌曲</button>
        <button class="selectBtn01 border-2 border-gray-default rounded-2xl  text-gray-dark  hover:text-orange  hover:border-orange">播放清單</button>
        <button class="selectBtn01 border-2 border-gray-default rounded-2xl  text-gray-dark  hover:text-orange  hover:border-orange">最近播放</button>
      </div>
        <music-item
            v-for="item in musicItems"
            @share-social="shareSocial(item.img, item.name, item.singer)"
            :status="item.status"
            :color="item.color"
            :key="item.num"
            :num="item.num"
            :imgSrc="item.img"
            :musicName="item.name"
            :singer="item.singer"
            :totalSecond="item.musicTime"
            :playCounter="item.playCounter"
            :likeCounter="item.likeCounter">
        </music-item>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation } from 'swiper/core'
import FindCarousel from '../components/FindCarousel.vue'
import ActivityItem from '../components/ActivityItem.vue'
import MusicItem from '../components/MusicItem.vue'

SwiperCore.use([Navigation])
export default {
  components: {
    Swiper,
    SwiperSlide,
    FindCarousel,
    ActivityItem,
    MusicItem
  },
  data () {
    return {
      donateArr: [],
      activeDatas: [],
      activeDatasPast: [],
      musicItems: [
        {
          num: '01',
          img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          name: '在這座城市遺失了你',
          singer: '告五人',
          musicTime: 287,
          playCounter: 88888,
          likeCounter: 744,
          status: '▲',
          color: 'blue'
        },
        {
          num: '02',
          img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          name: '在這座城市遺失了你',
          singer: '告五人',
          musicTime: 2837,
          playCounter: 883888,
          likeCounter: 7344,
          status: '－',
          color: 'gray'
        },
        {
          num: '03',
          img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          name: '在這座城市遺失了你',
          singer: '告五人',
          musicTime: 2227,
          playCounter: 883388,
          likeCounter: 7434,
          status: '▲',
          color: 'blue'
        },
        {
          num: '04',
          img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          name: '在這座城市找尋你',
          singer: '告五人',
          musicTime: 2827,
          playCounter: 8833888,
          likeCounter: 7434,
          status: '－',
          color: 'gray'
        },
        {
          num: '05',
          img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          name: '在這座城市遺失了我',
          singer: '告很多人',
          musicTime: 2837,
          playCounter: 888888,
          likeCounter: 724,
          status: '▼',
          color: 'gray'
        }
      ]
      // activeDatas: [
      //   {
      //     imgSrc: require('../assets/images/active/ac001.jpg'),
      //     title: '2021 新歌巡迴《 穿過夜晚 Go Through the Night 》',
      //     time: '2021-7-19 20:00',
      //     city: '台北市',
      //     location: '海邊的卡夫卡 Kafka by the Sea',
      //     singerImg: 'https://akstatic.streetvoice.com/profile_images/ju/ne/junepan/U54Pf3WxjfvgWArGdTnKav.jpg?x-oss-process=image/resize,m_fill,h_600,w_600,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
      //     singer: '大象體操 Elephant Gym'
      //   },
      //   {
      //     imgSrc: require('../assets/images/active/ac001.jpg'),
      //     title: '2021 新歌巡迴《 穿過夜晚 Go Through the Night 》',
      //     time: '2021-7-19 20:00',
      //     city: '台北市',
      //     location: '海邊的卡夫卡 Kafka by the Sea',
      //     singerImg: 'https://akstatic.streetvoice.com/profile_images/ju/ne/junepan/U54Pf3WxjfvgWArGdTnKav.jpg?x-oss-process=image/resize,m_fill,h_600,w_600,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
      //     singer: '大象體操 Elephant Gym'
      //   }
      // ]
    }
  },
  async created () {
    const form = new FormData()
    form.append('member_id', this.$store.getters.memberIdState)
    const response = await fetch('./DropbeatBackend/memberPageActivityGet.php', {
      method: 'POST',
      body: form
    })
    const nowTime = Math.floor(new Date().getTime() / (1000 * 60 * 60 * 24))
    const responseData = await response.json()
    responseData.forEach((item) => {
      item.timeCompare = new Date(item.activity_date).getTime() / (1000 * 60 * 60 * 24) // 活動時間(秒)
      if (item.timeCompare - nowTime < 0) {
        this.activeDatasPast.unshift(item)
        item.toTheActive = item.activity_id // router設定
      } else {
        this.activeDatas.unshift(item)
        item.toTheActive = item.activity_id // router設定
      }
    })
    // donate
    const forms = new FormData()
    forms.append('member_id', this.$store.getters.memberIdState)
    const responses = await fetch('./DropbeatBackend/memberPageDonateGet.php', {
      method: 'POST',
      body: forms
    })
    const responseDatas = await responses.json()
    this.donateArr = responseDatas
  }
}
</script>

<style scoped>
.titleline{
  background-color: #b5b5b5;
  width: 5px;
  height: 30px;
  margin-right: 10px;
}
.artistCarousel{
  margin: 10px 0 70px 0;
}
.activeRange{
  width: 80%;
}
.fundContent{
    margin: 0 0 0 20px;
}
.successIcon{
  height: 25px;
  width: 80px;
  text-align: center;
  margin: 0 0 8px 0;
}
.selectBtn{
    margin: 25px 0 30px 0;
}
.selectBtn01{
  width: 85px;
  height: 30px;
  padding: 1px 0 0 0;
}
@media screen and (max-width: 1380px) {
  .activeRange{
    width: 90%;
  }
}
@media (max-width: 767px){
   .activeRange {
     width: 100%;
   }
 }
.preIcon {
  @apply text-gray-light absolute top-1/2 z-10 left-0 cursor-pointer
}
.nextIcon{
    @apply text-gray-light absolute top-1/2 z-10 right-0 cursor-pointer
}
.title-sm{
    @apply border-l-[5px] border-gray-light text-[26px] pl-2.5
}
.swiper-button-disabled {
  @apply text-gray-default
}
@media screen and (max-width: 640px) {
  .preIcon{
    @apply top-0 left-auto right-10
  }
  .nextIcon{
    @apply top-0 right-0
  }
  :deep .carouselAll{
    padding-top: 60px;
    height: 230px;
    position: relative;
    top:-55px;
  }
  :deep .preIconArtist{
    position: absolute;
    @apply top-[-160px] left-auto right-10 w-[25px] h-[40px]
  }
  :deep .nextIconArtist{
    position: absolute;
    @apply top-[-160px] right-0 w-[25px] h-[40px]
  }
  .artistRange{
    margin-bottom: -15px;
  }
  :deep .item{
    /* border:1px solid red; */
    width: 100%;
  }
  :deep .activeImg{
    width: 100%;
    height: 100%;
  }
  .fundDetail{
    width: 100%;
  }
}
@media (max-width: 400px) {
    :deep .carouselAll{
    padding-top: 60px;
    height: 220px;
    position: relative;
    top:-55px;
  }
}
</style>
