<template>
<div class="range">
  <base-title title="發現音樂人"></base-title>
  <div class="space-x-3">
    <base-button
      class="my-8"
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
  <find-carousel class="my-8"></find-carousel>
  <base-title title="發現音樂"></base-title>
  <div class="space-x-3">
    <base-button
      class="my-8"
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
  <music-item
  class="my-8"
  v-for="item in musicItems"
  :key="item.num"
  :num="item.num"
  :imgSrc="item.img"
  :musicName="item.name"
  :singer="item.singer"
  :totalSecond="item.musicTime"
  :playCounter="item.playCounter"
  :likeCounter="item.likeCounter">
  </music-item>
  <router-link to="ArtistHome">音樂人主頁(點more進入暫放)</router-link>
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
          name: '在這座城市遺失了你',
          singer: '告五人',
          musicTime: 2827,
          playCounter: 8833888,
          likeCounter: 7434
        },
        {
          num: '05',
          img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          name: '在這座城市遺失了你',
          singer: '告五人',
          musicTime: 2837,
          playCounter: 888888,
          likeCounter: 724
        }
      ]
    }
  }
}
</script>

<style scoped>
  .range{
    padding: 60px 40px 150px 40px;
  }
  a{
    background: blue;
    color: rgb(255, 255, 255);
    font-size: 20px;
    margin: 200px;
  }
</style>
