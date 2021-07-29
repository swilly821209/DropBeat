<template>
    <div class="range">
        <base-title title="排行榜"></base-title>
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
        <div class="sm:space-x-3 space-x-1  space-y-1">
          <base-button
            v-for="item in singerType"
            :key="item"
            :active="{active: selectSingerType === item}"
            @click="selectSingerType = item"
            mode="outline">
            {{ item }}
          </base-button>
        </div>
        <div class="musicItemALL">
          <music-item class="musicItem"
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
import MusicItem from '../components/MusicItem.vue'
export default {
  components: {
    MusicItem
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
        },
        {
          num: '06',
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
          num: '06',
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
          num: '08',
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
          num: '09',
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
          num: '10',
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
    }
  }
}
</script>

<style scoped>
.selectBtn{
    margin: 20px 0 12px 0;
}
.musicItemALL{
      margin: 20px 0 0 0;
}
.musicItem:nth-child(1) ::v-deep .musicImage, .musicItem:nth-child(2) ::v-deep .musicImage, .musicItem:nth-child(3) ::v-deep .musicImage{
    /* border:1px solid red; */
    width: 140px;
    height: 140px;
}
.musicItem:nth-child(1) ::v-deep .musicImage > img, .musicItem:nth-child(2) ::v-deep .musicImage > img, .musicItem:nth-child(3) ::v-deep .musicImage > img{
    width: 140px;
    height: 140px;
}
.musicItem:nth-child(1) ::v-deep .playPauseIcon01, .musicItem:nth-child(2) ::v-deep .playPauseIcon01, .musicItem:nth-child(3) ::v-deep .playPauseIcon01{
  width: 140px;
  height: 140px;
  background-size: 60%;
}
.musicItem:nth-child(1) ::v-deep .playPauseIcon02, .musicItem:nth-child(2) ::v-deep .playPauseIcon02, .musicItem:nth-child(3) ::v-deep .playPauseIcon02{
  width: 140px;
  height: 140px;
}
.musicItem:nth-child(1) ::v-deep .hover_bg, .musicItem:nth-child(2) ::v-deep .hover_bg, .musicItem:nth-child(3) ::v-deep .hover_bg{
  width: 140px;
  height: 140px;
}
@media(max-width: 640px) {
  .musicItem:nth-child(1) ::v-deep .musicImage, .musicItem:nth-child(2) ::v-deep .musicImage, .musicItem:nth-child(3) ::v-deep .musicImage{
    /* border:1px solid red; */
    width: 70px;
    height: 70px;
}
.musicItem:nth-child(1) ::v-deep .musicImage > img, .musicItem:nth-child(2) ::v-deep .musicImage > img, .musicItem:nth-child(3) ::v-deep .musicImage > img{
    width: 70px;
    height: 70px;
}
.musicItem:nth-child(1) ::v-deep .playPauseIcon01, .musicItem:nth-child(2) ::v-deep .playPauseIcon01, .musicItem:nth-child(3) ::v-deep .playPauseIcon01{
  width: 70px;
  height: 70px;
  background-size: 60%;
}
.musicItem:nth-child(1) ::v-deep .playPauseIcon02, .musicItem:nth-child(2) ::v-deep .playPauseIcon02, .musicItem:nth-child(3) ::v-deep .playPauseIcon02{
  width: 70px;
  height: 70px;
}
.musicItem:nth-child(1) ::v-deep .hover_bg, .musicItem:nth-child(2) ::v-deep .hover_bg, .musicItem:nth-child(3) ::v-deep .hover_bg{
  width: 70px;
  height: 70px;
}
}

</style>
