<template>
<music-item
  v-for="item in musicItems"
  :key="item.num"
  :num="item.num"
  :imgSrc="item.img"
  :musicName="item.name"
  :singer="item.singer"
  :totalSecond="item.musicTime"
  :playAccount="item.playAccount"
  :likeAccount="item.likeAccount">
</music-item>
<h1>Find</h1>
<div>This is a Find page...</div>
<audio-icon></audio-icon>
</template>

<script>
import AudioIcon from '../components/AudioIcon.vue'
import MusicItem from '../components/MusicItem.vue'
export default {
  components: {
    MusicItem,
    AudioIcon
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
          playAccount: 8888888,
          likeAccount: 744
        }
      ]
    }
  }
}
</script>
