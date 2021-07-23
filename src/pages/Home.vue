<template>
<base-dialog>
  <share-social-media></share-social-media>
</base-dialog>
<div class="range">
  <div class="flex flex-col justify-center m-auto">
    <base-title title="HOT 即時熱門" link to="/Charts"></base-title>
    <hot-music></hot-music>
  </div>
  <div class="day_N_artist">
    <div class="day">
      <base-title title="Song of the Day 每日一曲"></base-title>
      <cd-player style="width:200px"
        likes date asong
        :songimg="theCDsong.img"
        :titles="theCDsong.title"
        :author="theCDsong.author"
        :albumname="theCDalbum.name"
        :years="theCDalbum.years"
        :songnum="theCDalbum.songnum"
        :times="theCDalbum.times"
      ></cd-player>
    </div>
    <div class="artist">
      <base-title title="Artist 大家都在聽" link to="/Find" style="width:390px"></base-title>
      <div class="flex flex-wrap justify-between artcontain">
        <artist-item class=" aartist"
          :width="'w-24'"
          v-for="(item, index) in artistList"
          @click="playFun(index)"
          :play="item.play"
          :img="item.img"
          :author="item.author"
          :more="item.more"
          :key="item.author">
        </artist-item>
      </div>
    </div>
  </div>
  <div class="w-full my-20 m-auto">
    <div class="my-12">
      <base-title title="Showcase 演出活動" link to="/Find"></base-title>
    </div>
    <the-carousel></the-carousel>
  </div>
  <!-- <div class="w-full m-auto flex flex-col h-[500px] justify-around"> -->
  <div>
    <base-title title="Crowdfunding 募資計畫" link to="/Funds"></base-title>
    <!-- <div class="flex justify-evenly"> -->
    <div class="flex justify-between">
      <fund-item
        v-for="item in fundItems"
        :title="item.title"
        :img="item.img"
        :singer="item.singer"
        :progress="item.progress"
        :date="item.date"
        :money="item.money"
        :key="item.title">
      </fund-item>
    </div>
  </div>
</div>
</template>

<script>
import HotMusic from '../components/HotMusic.vue'
import CdPlayer from '../components/CdPlayer.vue'
import ArtistItem from '../components/ArtistItem.vue'
import TheCarousel from '../components/TheCarousel.vue'
import FundItem from '../components/FundItem.vue'

export default {
  components: {
    HotMusic,
    CdPlayer,
    ArtistItem,
    TheCarousel,
    FundItem
  },
  data () {
    return {
      fundItems: [
        {
          title: '運氣來的若有似無 專輯募資',
          img: 'https://akstatic.streetvoice.com/audition/2021/06/16/6c24a3f3d1794ce896a1e0a56ba9597d.jpg?x-oss-process=image/resize,m_fill,h_396,w_396,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          singer: '告五人',
          progress: '50%',
          money: 888888,
          date: 29
        },
        {
          title: '運氣來的若有似無 專輯募資',
          img: 'https://akstatic.streetvoice.com/audition/2021/06/16/6c24a3f3d1794ce896a1e0a56ba9597d.jpg?x-oss-process=image/resize,m_fill,h_396,w_396,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          singer: '告五人',
          progress: '50%',
          money: 882288,
          date: 29
        },
        {
          title: '運氣來的若有似無 專輯募資',
          img: 'https://akstatic.streetvoice.com/audition/2021/06/16/6c24a3f3d1794ce896a1e0a56ba9597d.jpg?x-oss-process=image/resize,m_fill,h_396,w_396,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          singer: '告五人',
          progress: '80%',
          money: 888888,
          date: 25
        },
        {
          title: '運氣來的若有似無 專輯募資',
          img: 'https://akstatic.streetvoice.com/audition/2021/06/16/6c24a3f3d1794ce896a1e0a56ba9597d.jpg?x-oss-process=image/resize,m_fill,h_396,w_396,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          singer: '告五人',
          progress: '30%',
          money: 8888338,
          date: 22
        }
      ],
      artistList: [
        { play: false, img: 'https://picsum.photos/100', author: '告五人', more: '#' },
        { play: false, img: 'https://picsum.photos/200', author: '告五人', more: '#' },
        { play: false, img: 'https://picsum.photos/300', author: '告五人', more: '#' },
        { play: false, img: 'https://picsum.photos/400', author: '告五人', more: '#' },
        { play: false, img: 'https://picsum.photos/500', author: '告五人', more: '#' },
        { play: false, img: 'https://picsum.photos/600', author: '告五人', more: '#' },
        { play: false, img: 'https://picsum.photos/700', author: '告五人', more: '#' },
        { play: false, img: 'https://picsum.photos/800', author: '告五人', more: '#' }
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
  methods: {
    change (num) {
      this.num = num
    },
    playFun (index) {
      if (this.artistList[index].play === false) {
        this.artistList.forEach(item => { item.play = false })
      }
      this.artistList[index].play = !this.artistList[index].play
    }
  }
}
</script>

<style scoped>
  .day_N_artist{
    /* border: 1px solid red; */
    display: flex;
    margin-top: 60px;
  }
  .day{
    /* border: 1px solid blue; */
    margin-right: 60px;
    width: calc((100% - 60px)/2);
  }
  .artist{
    /* border: 1px solid green; */
    width: calc((100% - 60px)/2);
  }
  .artcontain{
    margin-top: 10px;
  }
  .aartist{
    margin-top: 20px;
  }
  /* RWD */
  @media screen and (max-width: 1920px) {
    .aartist{
      width: 170px;
    }
  }
  @media screen and (max-width: 1750px) {
    .aartist{
      width: 150px;
    }
  }
  @media screen and (max-width: 1590px) {
    .aartist{
      width: 130px;
    }
  }
  @media screen and (max-width: 1430px) {
    .aartist{
      width: 110px;
    }
  }
  @media screen and (max-width: 1270px) {
    .aartist{
      width: 90px;
    }
  }
  @media screen and (max-width: 1110px) {
    .aartist{
      width: 80px;
    }
  }
</style>
