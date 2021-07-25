<template>
    <div class="range">
        <base-title title="募資計畫"></base-title>
        <div class="space-x-3">
            <base-button
            class="my-8 selectBtn"
            v-for="item in fundsProgress"
            :key="item"
            :active="{active: selectFundsProgress === item}"
            @click="selectFundsProgress = item"
            mode="under-line">
            {{ item }}
            </base-button>
        </div>
        <div class="space-x-3">
            <base-button
            v-for="item in fundsType"
            :key="item"
            :active="{active: selectFundsType === item}"
            @click="selectFundsType = item"
            mode="outline">
            {{ item }}
            </base-button>
        </div>
        <div class="parent">
                <fund-item class="child"
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
</template>

<script>
import FundItem from '../components/FundItem.vue'
export default {
  components: {
    FundItem
  },
  data () {
    return {
      fundsProgress: ['進行中計畫', '成功計畫', '所有計畫'],
      selectFundsProgress: '進行中計畫',
      fundsType: ['最新', '結束日期', '募資金額', '贊助人數'],
      selectFundsType: '最新',
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
        },
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
    .selectBtn{
        margin: 20px 0 12px 0;
    }
    .parent {
        /* border:1px solid red; */
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    ::v-deep .fundBlock{
      /* border:1px solid blue; */
      width: 22%;
    }
    ::v-deep .fundBlock:nth-child(4n){
        margin: 35px 0 0 0;
    }
    .child {
        /* width: 20%; */
    }
</style>
