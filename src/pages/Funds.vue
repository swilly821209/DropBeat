<template>
    <div class="range">
        <base-title title="募資計畫"></base-title>
        <div class="space-x-3">
            <base-button
            class="my-8 selectBtn"
            v-for="(item, index) in fundsProgress"
            :key="item"
            :active="{active: selectFundsProgress === item}"
            @click="switchProgress(index)"
            mode="under-line">
            {{ item }}
            </base-button>
        </div>
        <div class="sm:space-x-3 space-x-1 space-y-1 sm:space-y-2">
            <base-button
            v-for="(item, index) in fundsType"
            :key="item"
            :active="{active: selectFundsType === item}"
            @click="switchTyep(index)"
            mode="outline">
            {{ item }}
            </base-button>
        </div>
        <div class="parent">
            <fund-item class="child"
                v-for="item in randerFuns"
                :title="item.donate_name"
                :img="item.donate_photo"
                :singer="item.initiator"
                :progress="item.goal_percent"
                :date="item.countdownDate"
                :money="item.goal"
                :toFunds="item.toTheDonate"
                :key="item.donate_id">
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
      randerFuns: [] // 一開始渲染user的全部募資資料
    }
  },
  methods: {
    async switchProgress (index) {
      this.selectFundsProgress = this.fundsProgress[index]
      this.randerFuns = []
      const form = new FormData()
      const progress = `progress${index}`
      form.append('progressed', progress)
      const response = await fetch('http://localhost/DropbeatBackend/funds_page_selectProgress.php', {
        method: 'POST',
        body: form
      })
      const responseData = await response.json()
      responseData.forEach((item) => {
        item.toTheDonate = `/Funds/${item.toTheDonate}` // router設定
        item.total_price = ''
        item.donate_num = ''
        this.randerFuns.unshift(item)
      })
      // 獲取total_price
      const responses = await fetch('http://localhost/DropbeatBackend/funds_page_total_price.php')
      const responseDatas = await responses.json()
      this.randerFuns.forEach((item) => {
        responseDatas.forEach((items) => {
          if (items.donate_id === item.donate_id) {
            item.total_price = items.total_price
            item.donate_num = items.donate_num
          }
          item.goal_percent = `${Math.round((item.total_price / item.goal) * 100)}%`
        })
      })
    },
    async switchTyep (index) {
      this.selectFundsType = this.fundsType[index]
      if (index === 0) {
        this.randerFuns.sort((a, b) => {
          return a.setup_date < b.setup_date ? 1 : -1
        })
      } else if (index === 1) {
        this.randerFuns.sort((a, b) => {
          return parseInt(a.countdownDate) > parseInt(b.countdownDate) ? 1 : -1
        })
      } else if (index === 2) {
        this.randerFuns.sort((a, b) => {
          return parseInt(a.goal) < parseInt(b.goal) ? 1 : -1
        })
      } else if (index === 3) {
        this.randerFuns.sort((a, b) => {
          return parseInt(a.donate_num) < parseInt(b.donate_num) ? 1 : -1
        })
      }
    }
  },
  async created () {
    const response = await fetch('http://localhost/DropbeatBackend/funds_page_get.php')
    const responseData = await response.json()
    responseData.forEach((item) => {
      item.toTheDonate = `/Funds/${item.toTheDonate}` // router設定
      item.total_price = 0
      item.donate_num = 0
      this.randerFuns.unshift(item)
    })
    // 獲取總金額跟贊助人數
    const responses = await fetch('http://localhost/DropbeatBackend/funds_page_total_price.php')
    const responseDatas = await responses.json()
    this.randerFuns.forEach((item) => {
      responseDatas.forEach((items) => {
        if (items.donate_id === item.donate_id) {
          item.total_price = items.total_price
          item.donate_num = items.donate_num
        }
        item.goal_percent = `${Math.round((item.total_price / item.goal) * 100)}%`
      })
    })
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
        justify-content: flex-start;
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
    @media (max-width: 767px){
      .range{
        padding: 60px 15px 10px 15px;
      }
      .parent {
        flex-direction: column;
      }
      :deep .fundBlock{
        width: 100%;
        margin: 35px 0 0 0;
      }
    }
</style>
