<template>
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
import TheCarousel from '../components/TheCarousel.vue'
import FundItem from '../components/FundItem.vue'

export default {
  components: {
    HotMusic,
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
  .aa{
    height: 300vh;
  }
</style>
