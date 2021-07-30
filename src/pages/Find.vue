<template>
<base-dialog :show="showDialog">
  <share-social-media @close-social="closeSocialDialog" :imgSrc="shareImg" :music="shareMusic" :singer="shareSinger"></share-social-media>
</base-dialog>
<div class="range">
  <base-title title="發現音樂人"></base-title>
  <div class="space-x-3">
    <base-button
      class="my-8 selectBtn"
      v-for="item in singerRange"
      :key="item"
      :active="{active: selectSingerRange === item}"
      @click="selectSingerRange = item"
      mode="under-line">
      {{ item }}
    </base-button>
  </div>
  <div class="space-x-3">
    <base-button
      v-for="item in singerType"
      :key="item"
      :active="{active: selectSingerType === item}"
      @click="selectSingerType = item"
      mode="outline">
      {{ item }}
    </base-button>
  </div>
  <find-carousel class="artistCarousel my-8"></find-carousel>
  <base-title title="發現音樂"></base-title>
  <div class="space-x-3">
    <base-button
      class="my-8 selectBtn"
      v-for="item in musicRange"
      :key="item"
      :active="{active: selectMusicRange === item}"
      @click="selectMusicRange = item"
      mode="under-line">
      {{ item }}
    </base-button>
  </div>
  <div class="space-x-3">
    <base-button
        v-for="item in musicType"
        :key="item"
        :active="{active: selectMusicType === item}"
        @click="selectMusicType = item"
        mode="outline">
        {{ item }}
    </base-button>
  </div>
  <div class="musicItemALL">
    <music-item
      v-for="item in musicItems"
      @share-social="shareSocial(item.img, item.name, item.singer)"
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
  <!-- <find-carousel></find-carousel> -->
  <!-- </div> -->
  <!-- <div class="musicItemALL">
    <music-item
      class="my-8"
      v-for="item in musicItems"
      @share-social="shareSocial(item.img, item.name, item.singer)"
      :key="item.num"
      :num="item.num"
      :imgSrc="item.img"
      :musicName="item.name"
      :singer="item.singer"
      :totalSecond="item.musicTime"
      :playCounter="item.playCounter"
      :likeCounter="item.likeCounter">
    </music-item>
  </div> -->
  </div>
</template>

<script>
import MusicItem from '../components/MusicItem.vue'
import FindCarousel from '../components/FindCarousel.vue'
import BaseButton from '../components/ui/BaseButton.vue'
export default {
  components: {
    MusicItem,
    FindCarousel,
    BaseButton
  },
  data () {
    return {
      shareImg: '',
      shareMusic: '',
      shareSinger: '',
      showDialog: false,
      singerRange: ['最新歌曲', '最多播放', '最多喜歡'],
      selectSingerRange: '最新歌曲',
      singerType: ['全部類型', 'Rock', 'Hip hop / Rap', 'Electronic', 'Classical', 'Jazz'],
      selectSingerType: '全部類型',
      musicRange: ['全部地區', '最多播放', '最多喜歡'],
      selectMusicRange: '全部地區',
      musicType: ['全部類型', 'Rock', 'Hip hop / Rap', 'Electronic', 'Classical', 'Jazz'],
      selectMusicType: '全部類型',
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
        }
      ]
    }
  },
  methods: {
    shareSocial (img, music, singer) {
      this.showDialog = true
      this.shareImg = img
      this.shareMusic = music
      this.shareSinger = singer
    },
    closeSocialDialog () {
      this.showDialog = false
    }
  }
}
</script>

<style scoped>
.selectBtn{
    margin: 20px 0 12px 0;
}
.artistCarousel{
  /* border:1px solid red; */
    margin: 15px 0 35px 0;
}
.musicItemALL{
      margin: 20px 0 0 0;
}
  /*
  a{
    background: rgb(113, 227, 241);
    color: rgb(255, 255, 255);
    font-size: 20px;
    margin: 200px;
  } */
</style>
