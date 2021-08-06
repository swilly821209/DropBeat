<template>
  <base-dialog :show="toggleDialog">
    <report-message></report-message>
  </base-dialog>
  <div class="range">
    <h3 class="title01 text-2xl text-black-backdrop">最新專輯</h3>
    <div class="block01">
      <div class="block01_1 flex flex-col">
        <cd-player style="width:200px"
            :songimg="theCDsong.img"
            :titles="theCDsong.title"
            :author="theCDsong.author"
            :albumname="theCDalbum.name"
            :years="theCDalbum.years"
            :songnum="theCDalbum.songnum"
            :times="theCDalbum.times"
        ></cd-player>
      </div>
      <div class="block01_2">
        <!-- <music-item
          v-for="item in musicItems"
          @share-social="shareSocial(item.img, item.name, item.singer)"
          :key="item.num"
          :num="item.num"
          :musicName="item.name"
          :singer="item.singer"
          :totalSecond="item.musicTime"
          :playCounter="item.playCounter"
          :likeCounter="item.likeCounter">
        </music-item> -->
        <!-- <swiper :slidesPerView="4" :direction="'vertical'" :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="w-[700px] h-[400px] m-0"> -->
        <swiper :slidesPerView="4" :direction="'vertical'" :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="misicSwipe h-[400px] m-0">
          <div class="up_down navigations space-y-2 absolute z-10 hidden sm:block">
            <svg xmlns="http://www.w3.org/2000/svg" class="preArrow block text-gray-light cursor-pointer" width="20" height="17" viewBox="0 0 20 17"><path id="up" d="M9.138,1.465a1,1,0,0,1,1.724,0l8.252,14.028A1,1,0,0,1,18.252,17H1.748a1,1,0,0,1-.862-1.507Z" fill="currentColor"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="nextArrow block text-gray-light cursor-pointer" width="20" height="17" viewBox="0 0 20 17"><path id="up" d="M9.138,1.465a1,1,0,0,1,1.724,0l8.252,14.028A1,1,0,0,1,18.252,17H1.748a1,1,0,0,1-.862-1.507Z" transform="translate(20 17) rotate(180)" fill="currentColor"/></svg>
          </div>
          <swiper-slide  v-for="item in musicItems" :key="item.num" class="sm:left-[10%] w-full sm:w-10/12">
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
        <div class="flex justify-center items-center bg-[#EDEDED] rounded-xl sm:hidden">
          <span class="text-[#7B7B7B]">more</span>
        </div>
      </div>
    </div>
    <h3 class="title02 text-2xl text-black-backdrop">所有專輯</h3>
    <!-- <div class="flex justify-between">
      <album-item
        v-for="item in albumData"
        :key="item.albumName"
        :albumName="item.albumName"
        :img="item.img"
        :year="item.year"
        :num="item.num"
        :totalTime="item.totalTime">
      </album-item>
    </div> -->
    <!-- 640以上 -->
    <swiper :slidesPerView="4" :spaceBetween="20" :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="w-full h-full hidden sm:block">
      <swiper-slide v-for="item in albumData" :key="item">
        <album-item
          :albumName="item.albumName"
          :img="item.img"
          :year="item.year"
          :num="item.num"
          :totalTime="item.totalTime">
        </album-item>
      </swiper-slide>
    </swiper>
    <!-- 640以下 -->
    <swiper :slidesPerView="2" :spaceBetween="20" :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="w-full h-full block sm:hidden">
      <swiper-slide v-for="item in albumData" :key="item">
        <album-item
          :albumName="item.albumName"
          :img="item.img"
          :year="item.year"
          :num="item.num"
          :totalTime="item.totalTime">
        </album-item>
      </swiper-slide>
    </swiper>
    <h3 class="title03 text-2xl text-black-backdrop ">所有音樂</h3>
    <div class="hidden sm:flex items-center ">
      <song-info></song-info>
      <song-lyrics></song-lyrics>
    </div>
    <!-- <message-board class="message"></message-board> -->
    <!-- <div class="flex flex-wrap justify-around">
      <single-music v-for="item in 12" :key="item"></single-music> -->
    <message-board
      class="message hidden sm:block"
      :outerArray='displayMessageData'
      :nowDisplay='displayMore'
      :nowMessage='commentMessage'
      :nowClear='clearInput'
      :nowButton='moreButton'
      v-model="inputMessage"
    ></message-board>
    <div class="single-music-carousel hidden sm:block">
      <swiper :slidesPerView="5" :slidesPerColumn="2" :spaceBetween="20" :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}"
              class="w-full h-full">
        <div class=" absolute flex items-center top-0 right-5 z-10 space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="preArrow block text-gray-light cursor-pointer" width="25" height="35" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" fill="currentColor"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="nextArrow block text-gray-light cursor-pointer" width="25" height="35" viewBox="0 0 25 40"><path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" fill="currentColor"/></svg>
        </div>
        <swiper-slide v-for="item in 12" :key="item" class="">
          <single-music></single-music>
        </swiper-slide>
      </swiper>
    </div>
    <swiper :slidesPerView="4" :direction="'vertical'" :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" class="flex items-center h-[400px] m-0 sm:hidden">
      <div class="up_down navigations space-y-2 absolute z-10 hidden sm:block">
        <svg xmlns="http://www.w3.org/2000/svg" class="preArrow block text-gray-light cursor-pointer" width="20" height="17" viewBox="0 0 20 17"><path id="up" d="M9.138,1.465a1,1,0,0,1,1.724,0l8.252,14.028A1,1,0,0,1,18.252,17H1.748a1,1,0,0,1-.862-1.507Z" fill="currentColor"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="nextArrow block text-gray-light cursor-pointer" width="20" height="17" viewBox="0 0 20 17"><path id="up" d="M9.138,1.465a1,1,0,0,1,1.724,0l8.252,14.028A1,1,0,0,1,18.252,17H1.748a1,1,0,0,1-.862-1.507Z" transform="translate(20 17) rotate(180)" fill="currentColor"/></svg>
      </div>
      <swiper-slide  v-for="item in musicItems" :key="item.num" class="sm:left-[10%] w-full sm:w-10/12">
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
          albumName: '運氣來的若有似無',
          year: 2021,
          num: 12,
          totalTime: '00:41:20'
        },
        {
          img: 'https://scontent.ftpe7-2.fna.fbcdn.net/v/t31.18172-8/21415009_1654071567936794_7079793410660076323_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=174925&_nc_ohc=_O3O9YvR4BkAX-oZRTN&tn=G4i6ABBsODQmugD-&_nc_ht=scontent.ftpe7-2.fna&oh=c6e4ab7db0e42cdfaf3cf37d830900b4&oe=611F42AF',
          albumName: '運氣來的若有似無',
          year: 2021,
          num: 12,
          totalTime: '00:41:20'
        },
        {
          img: 'https://scontent.ftpe7-2.fna.fbcdn.net/v/t31.18172-8/21415009_1654071567936794_7079793410660076323_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=174925&_nc_ohc=_O3O9YvR4BkAX-oZRTN&tn=G4i6ABBsODQmugD-&_nc_ht=scontent.ftpe7-2.fna&oh=c6e4ab7db0e42cdfaf3cf37d830900b4&oe=611F42AF',
          albumName: '運氣來的若有似無',
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
          num: '06',
          img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          name: '在這座城市遺失了我',
          singer: '告很多人',
          musicTime: 2837,
          playCounter: 888888,
          likeCounter: 724
        },
        {
          num: '07',
          img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          name: '在這座城市遺失了我',
          singer: '告很多人',
          musicTime: 2837,
          playCounter: 888888,
          likeCounter: 724
        },
        {
          num: '08',
          img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          name: '在這座城市遺失了我',
          singer: '告很多人',
          musicTime: 2837,
          playCounter: 888888,
          likeCounter: 724
        },
        {
          num: '09',
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
      },
      moreButton: true,
      displayNum: 2,
      nowArray: [],
      inputMessage: ''
    }
  },
  methods: {
    displayMore () {
      this.displayNum = this.nowArray.length
      this.moreButton = false
    },
    clearInput () {
      this.inputMessage = ''
    },
    commentMessage () {
      const messageData = {
        member: 'willy',
        setup_date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
        img: 'https://akstatic.streetvoice.com/profile_images/sa/nd/sandwichfail/3fT9Y92afyjdDbtNEFb2rh.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
        content: this.inputMessage
      }
      this.inputMessage = ''
      this.nowArray.unshift(messageData)
      console.log(this.nowArray)
      // 傳後端
      const form = new FormData()
      form.append('message_id', Math.floor(Math.random() * 9999)) // message_id (DB是INT)
      form.append('member', Math.floor(Math.random() * 9999)) // member_id (DB是INT)
      form.append('musician', Math.floor(Math.random() * 9999)) // musician (DB是INT)
      // form.append('setup_date', messageData.time)
      form.append('content', messageData.content)
      fetch('http://localhost/DropbeatBackend/mussage_mus_send.php', {
        method: 'POST',
        body: form
      })
    }
  },
  computed: {
    toggleDialog () {
      return this.$store.getters.reportDialogState
    },
    displayMessageData () {
      return this.nowArray.slice(0, this.displayNum)
    }
  },
  async created () {
    const response = await fetch('http://localhost/DropbeatBackend/mussage_mus_get.php')
    const responseData = await response.json()
    // 操作
    responseData.forEach((item) => {
      this.nowArray.unshift(item)
    })
    console.log(this.nowArray)
  }
}
</script>

<style scoped>
  .range{
    /* border:1px solid red; */
    padding: 60px 20px 10px 20px;
  }
  /* a{
    background: black;
    color: white;
    margin: 30px;
  } */
  .title01{
    margin: 0 0 5px 0;
  }
  .block01{
        /* border:1px solid red; */
        display: flex;
        justify-content: space-between;
  }
  .block01_1{
      /* border:1px solid red; */
      width: 40%;
  }
  .block01_2{
      /* border:1px solid red; */
      width: 52%;
      padding: 10px 0 0 0;
  }
  ::v-deep.music_item{
      padding: 13px 0;
  }
  ::v-deep .time_btns{
      width:230px;
      padding: 0 10px 0 0;
  }
  ::v-deep .playBtn{
    display: none;
  }
  .misicSwipe{
    /* border:1px solid red; */
    display: flex;
    align-items: center;
  }
  .up_down{
    margin: 0 0 20px 0;
  }
  .title02, .title03{
    margin: 90px 0 30px 0;
  }
  .message{
        margin: 50px 0 0 0;
  }
  .single-music-carousel{
    margin: 40px 0 0 0;
    width: 100%;
    height: 610px;
  }
  .single-music-carousel .swiper-slide{
    height: calc((100% - 60px) / 2);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 0 0;
  }
  @media screen and (max-width: 1300px) {
    .single-music-carousel{
      height: 580px;
    }
    .single-music-carousel .swiper-slide{
      height: calc((100% - 90px) / 2);
      margin: 10px 0 0 0;
    }
  }
  @media screen and (max-width: 640px) {
    .block01{
      flex-direction: column;
      justify-content: space-between;
    }
    .block01_1{
      width: 100%;
    }
    .block01_2{
      width: 100%;
      margin-top: 20px;
    }
    .title03{
      margin: 30px 0 30px 0;
    }
    ::v-deep .div_album_info{
      margin: -35px 0 0 65px;
    }
  }
  .swiper-button-disabled {
    @apply text-gray-default
  }
</style>
