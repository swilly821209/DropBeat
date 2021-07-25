<template>
    <base-dialog :show="toggleDialog">
      <report-message></report-message>
    </base-dialog>
  <div class="range">
    <h3 class="text-2xl text-black-backdrop mb-5">最熱門作品</h3>
    <div class="flex w-full justify-between">
      <cd-player style="width:200px"
          :songimg="theCDsong.img"
          :titles="theCDsong.title"
          :author="theCDsong.author"
          :albumname="theCDalbum.name"
          :years="theCDalbum.years"
          :songnum="theCDalbum.songnum"
          :times="theCDalbum.times"
      ></cd-player>
        <swiper :slidesPerView="5" :direction="'vertical'" :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="w-[700px] h-[400px] m-0">
          <div class="navigations space-y-2 absolute top-1/2 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" class="preArrow block text-gray-light" width="20" height="17" viewBox="0 0 20 17"><path id="up" d="M9.138,1.465a1,1,0,0,1,1.724,0l8.252,14.028A1,1,0,0,1,18.252,17H1.748a1,1,0,0,1-.862-1.507Z" fill="currentColor"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="nextArrow block text-gray-light" width="20" height="17" viewBox="0 0 20 17"><path id="up" d="M9.138,1.465a1,1,0,0,1,1.724,0l8.252,14.028A1,1,0,0,1,18.252,17H1.748a1,1,0,0,1-.862-1.507Z" transform="translate(20 17) rotate(180)" fill="currentColor"/></svg>
         </div>
          <swiper-slide  v-for="item in musicItems" :key="item.num" class="left-[6%] w-11/12">
            <music-item
              :num="item.num"
              :musicName="item.name"
              :singer="item.singer"
              :totalSecond="item.musicTime"
              :playCounter="item.playCounter"
              :likeCounter="item.likeCounter">
            </music-item>
          </swiper-slide>
        </swiper>
    </div>
    <h3 class="text-2xl text-black-backdrop my-10">所有專輯</h3>
    <div class="flex justify-between">
      <album-item
        v-for="item in albumData"
        :key="item.albumName"
        :albumName="item.albumName"
        :img="item.img"
        :year="item.year"
        :num="item.num"
        :totalTime="item.totalTime">
      </album-item>
    </div>
    <h3 class="text-2xl text-black-backdrop my-10">所有音樂</h3>
    <div class="flex items-center mx-20">
      <song-info></song-info>
      <song-lyrics></song-lyrics>
    </div>
    <message-board class="my-10"></message-board>
    <div class="single-music-carousel">
      <swiper :slidesPerView="5" :slidesPerColumn="2" :spaceBetween="20" :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}"
              class="w-full h-full">
         <div class=" absolute flex items-center top-2 right-5 z-10 space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="preArrow block text-gray-light" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" fill="currentColor"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="nextArrow block text-gray-light" width="25" height="40" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" fill="currentColor"/></svg>
         </div>
         <swiper-slide v-for="item in 12" :key="item" class="">
          <single-music></single-music>
         </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation } from 'swiper/core'
import 'swiper/swiper-bundle.min.css'

import SongInfo from '../components/SongInfo.vue'
import SongLyrics from '../components/SongLyrics.vue'
import MessageBoard from '../components/MessageBoard.vue'
import ReportMessage from '../components/ReportMessage.vue'
import CdPlayer from '../components/CdPlayer.vue'
import MusicItem from '../components/MusicItem.vue'
import AlbumItem from '../components/AlbumItem.vue'
import singleMusic from '../components/singleMusic.vue'

SwiperCore.use([Navigation])
export default {
  components: {
    SongInfo,
    SongLyrics,
    MessageBoard,
    ReportMessage,
    MusicItem,
    CdPlayer,
    AlbumItem,
    singleMusic,
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      albumData: [
        {
          img: 'https://scontent.ftpe7-2.fna.fbcdn.net/v/t31.18172-8/21415009_1654071567936794_7079793410660076323_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=174925&_nc_ohc=_O3O9YvR4BkAX-oZRTN&tn=G4i6ABBsODQmugD-&_nc_ht=scontent.ftpe7-2.fna&oh=c6e4ab7db0e42cdfaf3cf37d830900b4&oe=611F42AF',
          albumName: '運氣來的絡有似無',
          year: 2021,
          num: 12,
          totalTime: '00:41:20'
        },
        {
          img: 'https://scontent.ftpe7-2.fna.fbcdn.net/v/t31.18172-8/21415009_1654071567936794_7079793410660076323_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=174925&_nc_ohc=_O3O9YvR4BkAX-oZRTN&tn=G4i6ABBsODQmugD-&_nc_ht=scontent.ftpe7-2.fna&oh=c6e4ab7db0e42cdfaf3cf37d830900b4&oe=611F42AF',
          albumName: '運氣來的絡有似無',
          year: 2021,
          num: 12,
          totalTime: '00:41:20'
        },
        {
          img: 'https://scontent.ftpe7-2.fna.fbcdn.net/v/t31.18172-8/21415009_1654071567936794_7079793410660076323_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=174925&_nc_ohc=_O3O9YvR4BkAX-oZRTN&tn=G4i6ABBsODQmugD-&_nc_ht=scontent.ftpe7-2.fna&oh=c6e4ab7db0e42cdfaf3cf37d830900b4&oe=611F42AF',
          albumName: '運氣來的絡有似無',
          year: 2021,
          num: 12,
          totalTime: '00:41:20'
        },
        {
          img: 'https://scontent.ftpe7-2.fna.fbcdn.net/v/t31.18172-8/21415009_1654071567936794_7079793410660076323_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=174925&_nc_ohc=_O3O9YvR4BkAX-oZRTN&tn=G4i6ABBsODQmugD-&_nc_ht=scontent.ftpe7-2.fna&oh=c6e4ab7db0e42cdfaf3cf37d830900b4&oe=611F42AF',
          albumName: '運氣來的絡有似無',
          year: 2021,
          num: 12,
          totalTime: '00:41:20'
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
          likeCounter: 744
        },
        {
          num: '02',
          img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          name: '在這座城市遺失了你',
          singer: '告五人',
          musicTime: 287,
          playCounter: 883888,
          likeCounter: 7344
        },
        {
          num: '03',
          img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          name: '在這座城市遺失了你',
          singer: '告五人',
          musicTime: 2227,
          playCounter: 883388,
          likeCounter: 7434
        },
        {
          num: '04',
          img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          name: '在這座城市找尋你',
          singer: '告五人',
          musicTime: 2827,
          playCounter: 8833888,
          likeCounter: 7434
        },
        {
          num: '05',
          img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          name: '在這座城市遺失了我',
          singer: '告很多人',
          musicTime: 2837,
          playCounter: 888888,
          likeCounter: 724
        },
        {
          num: '05',
          img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          name: '在這座城市遺失了我',
          singer: '告很多人',
          musicTime: 2837,
          playCounter: 888888,
          likeCounter: 724
        },
        {
          num: '05',
          img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          name: '在這座城市遺失了我',
          singer: '告很多人',
          musicTime: 2837,
          playCounter: 888888,
          likeCounter: 724
        },
        {
          num: '05',
          img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          name: '在這座城市遺失了我',
          singer: '告很多人',
          musicTime: 2837,
          playCounter: 888888,
          likeCounter: 724
        },
        {
          num: '05',
          img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          name: '在這座城市遺失了我',
          singer: '告很多人',
          musicTime: 2837,
          playCounter: 888888,
          likeCounter: 724
        }
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
    toggleDialog () {
      return this.$store.getters.reportDialogState
    }
  }
}
</script>

<style scoped>
  .range{
    padding: 60px 40px 150px 40px;
  }
  a{
    background: black;
    color: white;
    margin: 30px;
  }
  .single-music-carousel{
    @apply w-full h-[680px]
  }
  .single-music-carousel .swiper-slide{
    height: calc((100% - 20px) / 2);
    display: flex;
    justify-content: center;
    align-items: center;
  }
.swiper-button-disabled {
  @apply text-gray-default
}
</style>
