<template>
<base-dialog :show="showDialog">
  <share-social-media @close-social="closeSocialDialog" :imgSrc="shareImg" :music="shareMusic" :singer="shareSinger"></share-social-media>
</base-dialog>
    <div class="range">
        <base-title title="排行榜"></base-title>
        <div class="space-x-3">
          <base-button
            class="my-8 selectBtn"
            v-for="item in singerRange"
            :key="item"
            :active="{active: selectSingerRange === item}"
            @click="music(item)"
            mode="under-line">
            {{ item }}
          </base-button>
        </div>
        <div class="sm:space-x-2 sm:space-y-2 space-y-2">
          <base-button class="buttons"
            v-for="item in singerType"
            :key="item"
            :active="{active: selectSingerType === item}"
            @click="selectType(item)"
            mode="outline">
            {{ item }}
          </base-button>
        </div>
        <div class="musicItemALL">
          <music-item class="musicItem"
            v-for="item in musicItems.slice(0, 10)"
            @share-social="shareSocial(item.img, item.name, item.singer)"
            :musicFile="item.musicFileSrc"
            :status="item.status"
            :color="item.color"
            :key="item.musicFileSrc"
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
      singerType: ['全部類型', 'Classical', 'Electronic', 'Hip Hop', 'Jazz', 'POP', 'Soul RnB'],
      selectSingerType: '全部類型',
      AllMusicItems: [],
      musicItems: [
        // {
        //   num: '01',
        //   img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
        //   name: '在這座城市遺失了你',
        //   singer: '告五人',
        //   musicTime: 287,
        //   playCounter: 88888,
        //   likeCounter: 744,
        //   status: '▲',
        //   color: 'blue'
        // },
        // {
        //   num: '02',
        //   img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
        //   name: '在這座城市遺失了你',
        //   singer: '告五人',
        //   musicTime: 2837,
        //   playCounter: 883888,
        //   likeCounter: 7344,
        //   status: '－',
        //   color: 'gray'
        // },
        // {
        //   num: '03',
        //   img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
        //   name: '在這座城市遺失了你',
        //   singer: '告五人',
        //   musicTime: 2227,
        //   playCounter: 883388,
        //   likeCounter: 7434,
        //   status: '▲',
        //   color: 'blue'
        // },
        // {
        //   num: '04',
        //   img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
        //   name: '在這座城市找尋你',
        //   singer: '告五人',
        //   musicTime: 2827,
        //   playCounter: 8833888,
        //   likeCounter: 7434,
        //   status: '－',
        //   color: 'gray'
        // },
        // {
        //   num: '05',
        //   img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
        //   name: '在這座城市遺失了我',
        //   singer: '告很多人',
        //   musicTime: 2837,
        //   playCounter: 888888,
        //   likeCounter: 724,
        //   status: '▼',
        //   color: 'gray'
        // },
        // {
        //   num: '06',
        //   img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
        //   name: '在這座城市遺失了你',
        //   singer: '告五人',
        //   musicTime: 287,
        //   playCounter: 88888,
        //   likeCounter: 744,
        //   status: '▲',
        //   color: 'blue'
        // },
        // {
        //   num: '06',
        //   img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
        //   name: '在這座城市遺失了你',
        //   singer: '告五人',
        //   musicTime: 2837,
        //   playCounter: 883888,
        //   likeCounter: 7344,
        //   status: '－',
        //   color: 'gray'
        // },
        // {
        //   num: '08',
        //   img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
        //   name: '在這座城市遺失了你',
        //   singer: '告五人',
        //   musicTime: 2227,
        //   playCounter: 883388,
        //   likeCounter: 7434,
        //   status: '▲',
        //   color: 'blue'
        // },
        // {
        //   num: '09',
        //   img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
        //   name: '在這座城市找尋你',
        //   singer: '告五人',
        //   musicTime: 2827,
        //   playCounter: 8833888,
        //   likeCounter: 7434,
        //   status: '－',
        //   color: 'gray'
        // },
        // {
        //   num: '10',
        //   img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
        //   name: '在這座城市遺失了我',
        //   singer: '告很多人',
        //   musicTime: 2837,
        //   playCounter: 888888,
        //   likeCounter: 724,
        //   status: '▼',
        //   color: 'gray'
        // }
      ]
    }
  },
  created () {
    this.music('最新歌曲')
  },
  methods: {
    selectType (type) {
      this.selectSingerType = type
      let selectTypeArr = this.AllMusicItems.filter((item) => item.musicType === type)
      if (type === '全部類型') {
        selectTypeArr = this.AllMusicItems
      }
      selectTypeArr.map((item, index) => {
        item.num = (++index).toString().padStart(2, '0')
      })
      this.musicItems = selectTypeArr
    },
    shareSocial (img, music, singer) {
      this.showDialog = true
      this.shareImg = img
      this.shareMusic = music
      this.shareSinger = singer
    },
    closeSocialDialog () {
      this.showDialog = false
    },
    async music (range) {
      this.musicItems = []
      this.AllMusicItems = []
      this.selectSingerRange = range
      const form = new FormData()
      form.append('range', range)
      const fetchMusic = await fetch('http://localhost/DropbeatBackend/NewMusic.php', {
        method: 'POST',
        body: form
      })
      const fetchResponse = await fetchMusic.json()
      fetchResponse.forEach((item, index) => {
        this.musicItems.push({
          musicType: item.type_name,
          num: (++index).toString().padStart(2, '0'),
          musicFileSrc: item.music_data,
          img: item.music_photo,
          name: item.music_name,
          singer: item.musician_name,
          musicTime: item.music_long,
          playCounter: +item.play_num,
          likeCounter: item.likeNum,
          status: '－',
          color: 'gray'
        })
      })
      this.AllMusicItems = this.musicItems
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
@media screen and (max-width: 640px) {
  .buttons{
      margin: 0 6px 0 0;
      padding: 2px 8px;
  }
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
