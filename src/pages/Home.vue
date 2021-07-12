<template>
  <h1>Home</h1>
  <div>This is a Home page...</div>
  <base-button>試試看</base-button>
  <the-carousel></the-carousel>
  <div class="flex w-11/12 mt-32 m-auto">
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
  <div class="aa"></div>
</template>

<script>
import TheCarousel from '../components/TheCarousel.vue'
import FundItem from '../components/FundItem.vue'

export default {
  components: {
    TheCarousel,
    FundItem
  },
  data () {
    return {
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
  }
}
</script>

<style scoped>
  .aa{
    height: 300vh;
  }
</style>
