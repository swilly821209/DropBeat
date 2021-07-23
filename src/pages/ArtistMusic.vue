<template>
    <base-dialog :show="toggleDialog">
      <report-message></report-message>
    </base-dialog> -->
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
      <div class="w-1/2">
        <music-item
          v-for="item in musicItems"
          @share-social="shareSocial(item.img, item.name, item.singer)"
          :key="item.num"
          :num="item.num"
          :musicName="item.name"
          :singer="item.singer"
          :totalSecond="item.musicTime"
          :playCounter="item.playCounter"
          :likeCounter="item.likeCounter">
        </music-item>
      </div>
    </div>
    <h3 class="text-2xl text-black-backdrop my-10">所有專輯</h3>
    <div class="flex justify-evenly">
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
    <message-board class="my-10 mx-10"></message-board>
    <div class="flex flex-wrap justify-around">
      <single-music v-for="item in 12" :key="item"></single-music>
    </div>
  </div>
</template>

<script>
import SongInfo from '../components/SongInfo.vue'
import SongLyrics from '../components/SongLyrics.vue'
import MessageBoard from '../components/MessageBoard.vue'
import ReportMessage from '../components/ReportMessage.vue'
import CdPlayer from '../components/CdPlayer.vue'
import MusicItem from '../components/MusicItem.vue'
import AlbumItem from '../components/AlbumItem.vue'
import singleMusic from '../components/singleMusic.vue'
export default {
  components: {
    SongInfo,
    SongLyrics,
    MessageBoard,
    ReportMessage,
    MusicItem,
    CdPlayer,
    AlbumItem,
    singleMusic
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
</style>
