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
        <div class="sm:space-x-3 space-x-1 space-y-1 sm:space-y-2">
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
                v-for="item in randerFuns"
                :title="item.donate_name"
                :img="item.donate_photo"
                :singer="item.initiator"
                :progress="'50%'"
                :date="item.countdownDate"
                :money="item.goal"
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
  async created () {
    const response = await fetch('http://localhost/DropbeatBackend/funds_page_get.php')
    const responseData = await response.json()
    responseData.forEach((item) => {
      this.randerFuns.unshift(item)
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
