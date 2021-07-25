<template>
    <div class=" mx-44 my-10">
      <div class="mb-6">
        <h2 class=" text-[32px] text-black-backdrop">向管理員檢舉此留言</h2>
        <p class="text-sm text-gray-dark">請選擇檢舉內容。其他人不會看到您的姓名</p>
      </div>
      <div v-for="report in reportTitle" :key="report" class="select flex items-center space-x-3 ml-1 ">
        <button class="w-2 h-2 ring-offset-2 ring-1 ring-current text-gray-light rounded-full"
                @click="selectMessage(report)"
                :class="{'active': report === selectReport}"></button>
        <span class="text-base text-gray-dark">{{ report }}</span>
      </div>
      <div class="cancel_report flex justify-end mt-6 space-x-3">
        <button @click="cancel" class=" rounded-3xl border-2 border-gray-default text-gray-dark hover:border-orange hover:text-orange">取消</button>
        <button @click="sendReport" class="rounded-3xl border-2 border-orange bg-orange text-white hover:bg-blue-light hover:border-opacity-0">檢舉</button>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      selectReport: '',
      reportTitle: [
        '不實內容',
        '仇恨言論',
        '騷擾',
        '色情言論',
        '自殺相關',
        '不相關言論'
      ]
    }
  },
  methods: {
    selectMessage (report) {
      this.selectReport = report
    },
    cancel () {
      this.$store.dispatch('reportDialog', false)
    },
    sendReport () {
      this.$store.dispatch('reportDialog', false)
    }
  }
}
</script>

<style scoped>
  /* .active{
    @apply text-orange bg-orange
  } */
  .select{
    margin: 5px 0 0 0;
  }
  .cancel_report button{
    height: 25px;
    width: 55px;
  }
</style>
