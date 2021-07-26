<template>
  <div class="range">
    <base-title title="會員專區" class=" mb-16"></base-title>
    <div>
      <div class="title02 flex">
        <div class="titleline"></div>
        <h3 class="text-2xl text-black-backdrop">正在關注</h3>
      </div>
        <find-carousel class="artistCarousel"></find-carousel>
    </div>
    <div class="block">
      <div class="title02 flex">
        <div class="titleline"></div>
        <h3 class="text-2xl text-black-backdrop">想參加活動</h3>
      </div>
      <swiper :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="my-10">
        <svg xmlns="http://www.w3.org/2000/svg"  class="preIcon  preArrow" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" fill="currentColor"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="nextIcon nextArrow"  width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" fill="currentColor"/></svg>
        <swiper-slide v-for="item in activeDatas" :key="item" class="flex justify-center">
          <div class="activeRange flex items-center justify-between">
            <activity-item
                :img="item.imgSrc"
                :title="item.title"
                :time="item.time"
                :city="item.city"
                :location="item.location"
                :singerImg="item.singerImg"
                :singer="item.singer"
                >
            </activity-item>
            <base-date :time="item.time" week="true" class="date"></base-date>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="block">
      <div class="title02 flex">
        <div class="titleline"></div>
        <h3 class="text-2xl text-black-backdrop">已參加活動</h3>
      </div>
      <swiper :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="my-10">
        <svg xmlns="http://www.w3.org/2000/svg"  class="preIcon  preArrow" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" fill="currentColor"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="nextIcon nextArrow"  width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" fill="currentColor"/></svg>
        <swiper-slide v-for="item in activeDatas" :key="item" class="flex justify-center">
          <div class="activeRange flex items-center justify-between">
            <activity-item
                :img="item.imgSrc"
                :title="item.title"
                :time="item.time"
                :city="item.city"
                :location="item.location"
                :singerImg="item.singerImg"
                :singer="item.singer"
                >
            </activity-item>
            <base-date :time="item.time" week="true" class="date"></base-date>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="block">
      <div class="title02 flex">
        <div class="titleline"></div>
        <h3 class="text-2xl text-black-backdrop">已贊助計畫</h3>
      </div>
      <swiper :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="my-10">
        <svg xmlns="http://www.w3.org/2000/svg"  class="preIcon preArrow" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" fill="currentColor"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="nextIcon nextArrow"  width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" fill="currentColor"/></svg>
        <swiper-slide v-for="item in 10" :key="item" class="flex justify-center z-20">
          <div class="activeRange flex items-center justify-between">
            <div class="fundImgContent">
              <img class="w-[350px] h-[200px] rounded-3xl cursor-pointer" src="https://akstatic.streetvoice.com/features/2021/07/23/e053e36ad38d43f0818b33e7a9d4b108.png?x-oss-process=image/resize,m_fill,h_480,w_1250,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg">
              <div class="fundContent flex flex-col ">
                <div class="successIcon bg-orange text-white  rounded-3xl  self-end ">success</div>
                <h4 class="text-lg text-black-backdrop ">運氣來的若有似無 專輯募資</h4>
                <base-badge  class=" mt-2 inline-block" image="https://akstatic.streetvoice.com/profile_images/er/ic/eric198853/Y3w4tbHRLXMLzFxUmW9bb7.jpg?x-oss-process=image/resize,m_fill,h_200,w_200,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg" singer="KUNG 龔敬文"></base-badge>
              </div>
            </div>
            <div class="flex flex-col justify-center h-full border-l border-gray-default pl-5">
                <p class="text-3xl text-orange ">$600</p>
                <h5 class="my-1 text-black-backdrop text-base">專輯海報組</h5>
                <ul class="list-disc text-gray-dark text-sm">
                  <li>專輯 x1</li>
                  <li>內含：CD、寫真歌詞本、小卡</li>
                  <li>A2 親簽海報</li>
                </ul>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div>
      <div class="title02 flex">
        <div class="titleline"></div>
        <h3 class="text-2xl text-black-backdrop">我的音樂庫</h3>
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
      ],
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
        }
      ]
    }
  }
}
</script>

<style scoped>
.range{
  padding: 60px 40px 110px 40px;
}
.titleline{
  background-color: #b5b5b5;
  width: 5px;
  height: 30px;
  margin-right: 10px;
}
.artistCarousel{
  margin: 10px 0 70px 0;
}
.block{
    margin: 0 0 90px 0;
}
.activeRange{
  width: 80%;
}
.fundImgContent{
    /* border:1px solid red; */
    display: flex;
    align-items: center;
}
.fundContent{
    display: flex;
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
</style>
