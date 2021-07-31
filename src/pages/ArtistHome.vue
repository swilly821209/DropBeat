<template>
    <div class="range">
      <h3 class="text-2xl text-black-backdrop mb-5">最熱門作品</h3>
        <music-item class="singleMusic"
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
      <h3 class="text-2xl text-black-backdrop mb-5 mt-[60px]">動態消息</h3>
        <dynimic-news
          v-for="item in newsDatas"
          :key="item.img"
          :mode="item.mode"
          :img="item.img"
          :name="item.name"
          :singer="item.singer"
          :musicTime="item.musicTime"
          :playCounter="item.playCounter"
          :likeCounter="item.likeCounter"
          :date="item.time"
          :title="item.title"
          :city="item.city"
          :location="item.location">
        </dynimic-news>
    </div>
</template>

<script>
import MusicItem from '../components/MusicItem.vue'
import DynimicNews from '../components/DynimicNews.vue'
export default {
  components: {
    MusicItem,
    DynimicNews
  },
  data () {
    return {
      newsDatas: [
        {
          mode: 'newsong',
          img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          name: '走建國路回家但後座少ㄌ你',
          singer: '多多',
          musicTime: '230',
          playCounter: '12312',
          likeCounter: '273'
        },
        {
          mode: 'newactivity',
          img: require('../assets/images/active/ac001.jpg'),
          title: '2021 新歌巡迴《 穿過夜晚 Go Through the Night 》',
          time: '2021-7-19 20:00',
          city: '台北市',
          location: '海邊的卡夫卡 Kafka by the Sea'
        },
        {
          mode: 'newsong',
          img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          name: '走建國路回家但後座少ㄌ你',
          singer: '多多',
          musicTime: '230',
          playCounter: '12312',
          likeCounter: '273'
        },
        {
          mode: 'newactivity',
          img: require('../assets/images/active/ac001.jpg'),
          title: '2021 新歌巡迴《 穿過夜晚 Go Through the Night 》',
          time: '2021-7-19 20:00',
          city: '台北市',
          location: '海邊的卡夫卡 Kafka by the Sea'
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
      ]
    }
  }
}
</script>

<style scoped>
  .range{
    padding: 60px 40px 10px 40px;
  }
  @media screen and (max-width: 640px){
    .range{
      padding: 60px 20px 0 20px;
    }
  }
  /* a{
      background: whitesmoke;
      color: black;
      margin: 30px;
  } */
  .singleMusic:nth-child(6) ::v-deep{
    /* border:1px solid red; */
    border-bottom: none;
  }

</style>
