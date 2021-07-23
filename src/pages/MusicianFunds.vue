<template>
  <div class="range">
    <div class="flex justify-between mt-5">
      <base-title title="募資管理" admin></base-title>
      <base-arrow></base-arrow>
    </div>
    <div class="flex justify-between">
      <fund-item
        edit
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
    <base-title title="發起募資" class="mt-20 mb-5"></base-title>
    <div class="flex w-full h-72">
      <select-img class="w-4/6"></select-img>
      <div class="w-2/6">cc</div>
    </div>
    <base-title title="計畫介紹" class="mt-20" :second="'second'"></base-title>
    <div class="flex justify-between mt-5">
      <base-title title="募資方案" :second="'second'" class="mb-5"></base-title>
      <base-arrow></base-arrow>
    </div>
    <div class="flex">
      <div class="w-1/6"><select-img class="w-full p-10"></select-img></div>
      <div class="w-2/6">ss</div>
      <div class="w-1/6"><select-img class="w-full p-10"></select-img></div>
      <div class="w-2/6">ww</div>
    </div>
  </div>
</template>

<script>
import FundItem from '../components/FundItem.vue'
import SelectImg from '../components/SelectImg.vue'
export default {
  components: {
    FundItem,
    SelectImg
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
      ]
    }
  }
}
</script>

<style scoped>
</style>
