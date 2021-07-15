<template>
  <base-date></base-date>
  <base-button
    mode="outline"
    :active="{active: num === index}"
    @click="num = index"
    v-for="(type, index) in types"
    :key="type">
    {{ type }}
  </base-button>
  <div class="space-x-4">
  <base-button
    mode="under-line"
    :active="{active: num === index}"
    @click="num = index"
    v-for="(type, index) in types"
    :key="type">
    {{ type }}
  </base-button>
  </div>
  <hot-music></hot-music>
  <div class="div_day_artist">
    <div class="div_day">
      <song-day></song-day>
    </div>
    <div class="div_artist">
      <artist
        v-for="item in artistList"
        :img="item.img"
        :author="item.author"
        :more="item.more"
        :key="item.author">
      </artist>
    </div>
  </div>
  <the-carousel></the-carousel>
  <base-title title="Showcase 演出活動" link to="/Find"></base-title>
  <div class="flex w-11/12 justify-evenly m-auto">
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
  <base-card>ddddd</base-card>
  <div class="aa"></div>
</template>

<script>
import HotMusic from '../components/HotMusic.vue'
import SongDay from '../components/SongDay.vue'
import Artist from '../components/Artist.vue'
import TheCarousel from '../components/TheCarousel.vue'
import FundItem from '../components/FundItem.vue'

export default {
  components: {
    HotMusic,
    SongDay,
    Artist,
    TheCarousel,
    FundItem
  },
  data () {
    return {
      types: ['全部類型', 'jezzddd', 'bossdddd', 'youddd'],
      num: 0,
      fundItems: [
        {
          title: '【 運氣來的若有似無 】專輯募資',
          img: 'https://akstatic.streetvoice.com/audition/2021/06/16/6c24a3f3d1794ce896a1e0a56ba9597d.jpg?x-oss-process=image/resize,m_fill,h_396,w_396,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          singer: '告五人',
          progress: '50%',
          money: 888888,
          date: 29
        },
        {
          title: '【 運氣來的若有似無 】專輯募資',
          img: 'https://akstatic.streetvoice.com/audition/2021/06/16/6c24a3f3d1794ce896a1e0a56ba9597d.jpg?x-oss-process=image/resize,m_fill,h_396,w_396,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          singer: '告五人',
          progress: '50%',
          money: 882288,
          date: 29
        },
        {
          title: '【 運氣來的若有似無 】專輯募資',
          img: 'https://akstatic.streetvoice.com/audition/2021/06/16/6c24a3f3d1794ce896a1e0a56ba9597d.jpg?x-oss-process=image/resize,m_fill,h_396,w_396,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          singer: '告五人',
          progress: '80%',
          money: 888888,
          date: 25
        },
        {
          title: '【 運氣來的若有似無 】專輯募資',
          img: 'https://akstatic.streetvoice.com/audition/2021/06/16/6c24a3f3d1794ce896a1e0a56ba9597d.jpg?x-oss-process=image/resize,m_fill,h_396,w_396,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          singer: '告五人',
          progress: '30%',
          money: 8888338,
          date: 22
        }
      ],
      artistList: [
        { img: 'https://picsum.photos/100', author: '告五人', more: '#' },
        { img: 'https://picsum.photos/200', author: '告五人', more: '#' },
        { img: 'https://picsum.photos/300', author: '告五人', more: '#' },
        { img: 'https://picsum.photos/400', author: '告五人', more: '#' },
        { img: 'https://picsum.photos/500', author: '告五人', more: '#' },
        { img: 'https://picsum.photos/600', author: '告五人', more: '#' },
        { img: 'https://picsum.photos/700', author: '告五人', more: '#' },
        { img: 'https://picsum.photos/800', author: '告五人', more: '#' }
      ]
    }
  },
  methods: {
    change (num) {
      this.num = num
    }
  }
}
</script>

<style scoped>
  .div_day_artist{
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 80px 30px;
  }
  .div_day{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .div_artist{
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
  .aa{
    height: 300vh;
  }
</style>
