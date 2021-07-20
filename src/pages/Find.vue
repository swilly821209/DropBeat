<template>
<base-dialog :show="showDialog">
  <share-social-media @close-social="closeSocialDialog" :imgSrc="shareImg" :music="shareMusic" :singer="shareSinger"></share-social-media>
</base-dialog>
<div class="space-y-2 w-11/12 m-auto">
  <base-title title="發現音樂"></base-title>
  <div class="space-x-3">
    <base-button
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
</div>
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
<find-carousel></find-carousel>
<router-link to="ArtistHome">音樂人主頁(點more進入暫放)</router-link>
</template>

<script>
import MusicItem from '../components/MusicItem.vue'
import FindCarousel from '../components/FindCarousel.vue'
export default {
  components: {
    MusicItem,
    FindCarousel
  },
  data () {
    return {
      shareImg: '',
      shareMusic: '',
      shareSinger: '',
      showDialog: false,
      musicRange: ['最新歌曲', '最多播放', '最多喜歡'],
      selectMusicRange: '最新歌曲',
      musicType: ['全部類型', 'Rock', 'Hip hop / Rap', 'Electronic', 'Classical', 'Jazz', 'Rock'],
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
          musicTime: 2837,
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
  a{
    background: blue;
    color: rgb(255, 255, 255);
    font-size: 20px;
    margin: 200px;
  }
</style>
