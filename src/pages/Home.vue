<template>
<base-dialog>
  <share-social-media></share-social-media>
</base-dialog>
<div class="range">
  <div class="sm:flex flex-col justify-center m-auto hidden">
    <base-title title="HOT 即時熱門" link to="/Charts" ></base-title>
    <hot-music></hot-music>
  </div>
  <div class="day_N_artist">
    <div class="day">
      <div class="sm:block hidden">
        <base-title title="Song of the Day 每日一曲"></base-title>
      </div>
      <div class="sm:hidden block mt-[-20px]">
        <base-title title="Song of the Day 每日一曲"></base-title>
      </div>
      <cd-player style="width:200px" class="cd_Player"
        likes date asong
        :songimg="theCDsong.img"
        :titles="theCDsong.title"
        :author="theCDsong.author"
        :albumname="theCDalbum.name"
        :years="theCDalbum.years"
        :songnum="theCDalbum.songnum"
        :times="theCDalbum.times"
      ></cd-player>
    </div>
    <div class="artist sm:block hidden">
      <base-title title="Artist 大家都在聽" link to="/Find"></base-title>
      <div class="flex flex-wrap justify-between artcontain">
        <artist-item class=" aartist"
          :width="'w-24'"
          v-for="(item, index) in artistList"
          @click="playFun(index)"
          :play="item.play"
          :img="item.img"
          :author="item.author"
          :more="item.more"
          :key="item.author">
        </artist-item>
      </div>
    </div>
  </div>
  <div class="sm:hidden block mt-8">
    <base-title title="HOT 即時熱門" link to="/Charts"></base-title>
      <music-item
        class="mt-[10px] "
        v-for="item in musicItems"
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
  <div class="sm:hidden block mt-14">
    <base-title title="Artist 大家都在聽" link to="/Find"></base-title>
    <div class="flex justify-between mt-[20px]">
      <artist-item
        :width="'w-20'"
        v-for="(item, index) in phArtistList"
        @click="playFun(index)"
        :play="item.play"
        :img="item.img"
        :author="item.author"
        :more="item.more"
        :key="item.author">
      </artist-item>
    </div>
  </div>
  <div class="sm:hidden block mt-14">
    <base-title title="Showcase 演出活動" link to="/Find"></base-title>
     <swiper :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="mt-[20px]">
       <svg xmlns="http://www.w3.org/2000/svg" class="preIcon1 preArrow " width="15" height="23" viewBox="0 0 15 23.077"><path id="next" d="M9.953,2.061a2,2,0,0,1,3.17,0l7.477,9.72A2,2,0,0,1,19.015,15H4.062a2,2,0,0,1-1.585-3.219Z" transform="translate(0 23.077) rotate(-90)" fill="currentColor"/></svg>
       <svg xmlns="http://www.w3.org/2000/svg" class="nextIcon1 nextArrow" width="13.72" height="23" viewBox="0 0 13.72 18.961"><path id="next" d="M9.953,2.061a2,2,0,0,1,3.17,0l7.477,9.72A2,2,0,0,1,19.015,15H4.062a2,2,0,0,1-1.585-3.219Z" transform="translate(15 -2.058) rotate(90)" fill="currentColor"/></svg>
       <swiper-slide v-for="item in activeDatas" :key="item">
         <activity-item
            class="singleSwipe m-auto"
            :img="item.imgSrc"
            :title="item.title"
            :time="item.time"
            :city="item.city"
            :location="item.location"
            :singerImg="item.singerImg"
            :singer="item.singer">
          </activity-item>
       </swiper-slide>
     </swiper>
  </div>
  <div class="sm:hidden block mt-10">
    <base-title title="Crowdfunding 募資" link to="/Funds"></base-title>
      <swiper :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="mt-[-10px]">
       <svg xmlns="http://www.w3.org/2000/svg" class="preIcon2 preArrow" width="15" height="23" viewBox="0 0 15 23.077"><path id="next" d="M9.953,2.061a2,2,0,0,1,3.17,0l7.477,9.72A2,2,0,0,1,19.015,15H4.062a2,2,0,0,1-1.585-3.219Z" transform="translate(0 23.077) rotate(-90)" fill="currentColor"/></svg>
       <svg xmlns="http://www.w3.org/2000/svg" class="nextIcon2 nextArrow" width="13.72" height="23" viewBox="0 0 13.72 18.961"><path id="next" d="M9.953,2.061a2,2,0,0,1,3.17,0l7.477,9.72A2,2,0,0,1,19.015,15H4.062a2,2,0,0,1-1.585-3.219Z" transform="translate(15 -2.058) rotate(90)" fill="currentColor"/></svg>
       <swiper-slide v-for="item in fundItems"  :key="item.title">
         <fund-item
          class="singleSwipe m-auto "
          :title="item.title"
          :img="item.img"
          :singer="item.singer"
          :progress="item.progress"
          :date="item.date"
          :money="item.money">
        </fund-item>
       </swiper-slide>
     </swiper>
  </div>
  <div class="w-full my-20 m-auto sm:block hidden">
    <div class="my-12">
      <base-title title="Showcase 演出活動" link to="/Find"></base-title>
    </div>
    <the-carousel></the-carousel>
  </div>
  <!-- <div class="w-full m-auto flex flex-col h-[500px] justify-around"> -->
  <div class="sm:block hidden">
    <base-title title="Crowdfunding 募資計畫" link to="/Funds"></base-title>
    <!-- <div class="flex justify-evenly"> -->
    <div class="flex justify-between">
      <fund-item
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
</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation } from 'swiper/core'

import HotMusic from '../components/HotMusic.vue'
import CdPlayer from '../components/CdPlayer.vue'
import ArtistItem from '../components/ArtistItem.vue'
import TheCarousel from '../components/TheCarousel.vue'
import FundItem from '../components/FundItem.vue'
import MusicItem from '../components/MusicItem.vue'
import ActivityItem from '../components/ActivityItem.vue'

SwiperCore.use([Navigation])

export default {
  components: {
    Swiper,
    SwiperSlide,
    HotMusic,
    CdPlayer,
    ArtistItem,
    TheCarousel,
    FundItem,
    MusicItem,
    ActivityItem
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
        }
      ],
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
        }
      ],
      artistList: [
        { play: false, img: 'https://picsum.photos/100', author: '告五人', more: '#' },
        { play: false, img: 'https://picsum.photos/200', author: '告五人', more: '#' },
        { play: false, img: 'https://picsum.photos/300', author: '告五人', more: '#' },
        { play: false, img: 'https://picsum.photos/400', author: '告五人', more: '#' },
        { play: false, img: 'https://picsum.photos/500', author: '告五人', more: '#' },
        { play: false, img: 'https://picsum.photos/600', author: '告五人', more: '#' },
        { play: false, img: 'https://picsum.photos/700', author: '告五人', more: '#' },
        { play: false, img: 'https://picsum.photos/800', author: '告五人', more: '#' }
      ],
      theCDsong: {
        img: 'https://picsum.photos/900',
        title: '在這座城市遺失了你',
        author: '告五人'
      },
      theCDalbum: {
        name: '你要不要吃哈密瓜',
        years: 2021,
        songnum: 12,
        times: '00:51:03'
      }
    }
  },
  computed: {
    phArtistList () {
      const ph = this.artistList.slice(0, 3)
      return ph
    }
  },
  methods: {
    change (num) {
      this.num = num
    },
    playFun (index) {
      if (this.artistList[index].play === false) {
        this.artistList.forEach(item => { item.play = false })
      }
      this.artistList[index].play = !this.artistList[index].play
    }
  }
}
</script>

<style scoped>
  .day_N_artist{
    /* border: 1px solid red; */
    display: flex;
    margin-top: 60px;
  }
  .day{
    /* border: 1px solid blue; */
    margin-right: 60px;
    width: calc((100% - 60px)/2);
  }
  .artist{
    /* border: 1px solid green; */
    width: calc((100% - 60px)/2);
  }
  .artcontain{
    margin-top: 10px;
  }
  .aartist{
    margin-top: 20px;
  }
  /* RWD */
  @media screen and (max-width: 1920px) {
    .aartist{
      width: 170px;
    }
  }
  @media screen and (max-width: 1750px) {
    .aartist{
      width: 150px;
    }
  }
  @media screen and (max-width: 1590px) {
    .aartist{
      width: 130px;
    }
  }
  @media screen and (max-width: 1430px) {
    .aartist{
      width: 110px;
    }
  }
  @media screen and (max-width: 1270px) {
    .aartist{
      width: 90px;
    }
  }
  @media screen and (max-width: 1110px) {
    .aartist{
      width: 80px;
    }
  }
  @media screen and (max-width: 640px) {
    .day {
      width: 100%;
      margin: auto;
    }
    .day_N_artist{
      margin-top: 30px;
    }
    .cd_Player{
      margin: 15px 0 30px 0;
    }
    :deep .fundBlock{
      width: 100%;
      margin: 35px auto 0 auto;
    }
    :deep .fundBlock:last-child {
      margin: 35px auto 0 auto;
    }
    :deep .content {
      width: 320px;
    }
    .singleSwipe{
      /* border:1px solid red; */
      max-width: 320px;
    }
    :deep .homeActivity{
      height: 155px;
    }
  }
  @media screen and (max-width: 400px) {
    .singleSwipe{
      /* border:1px solid red; */
      max-width: 290px;
    }
    :deep .content {
      width: 290px;
    }
  }
.preIcon1 {
  @apply text-gray-light absolute top-1/4 z-10 left-0 cursor-pointer
}
.nextIcon1{
  @apply text-gray-light absolute top-1/4 z-10 right-0 cursor-pointer
}
.preIcon2 {
  @apply text-gray-light absolute top-[100px] z-10 left-0 cursor-pointer
}
.nextIcon2{
  @apply text-gray-light absolute top-[100px] z-10 right-0 cursor-pointer
}
.swiper-button-disabled {
  @apply text-gray-default
}
</style>
