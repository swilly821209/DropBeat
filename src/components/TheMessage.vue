<template>
  <div class="flex items-center space-x-5">
    <img :src="memberImg" class="w-20 h-20 rounded-full">
    <div>
      <p class="text-sm text-gray-light">{{ memberName }}・{{ setUpdate }}</p>
      <div class="memberMessageText text-base text-gray-dark space-x-5 flex items-center ">
        <p>{{ memberMessage }}</p>
        <span @click="toggleReport" class="bit cursor-pointer hover:bg-gray-default w-6 h-6 flex justify-center items-center self-end rounded-full relative">
          <base-card v-if="report" :id="mesId" @click="reportMessage" class="report absolute text-sm py-1 px-1 bottom-[-70px] w-32 text-center my-0 hover:bg-gray-light hover:text-white transition-all ">檢舉此留言</base-card>
          <svg xmlns="http://www.w3.org/2000/svg" class="align-bottom" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['memberImg', 'memberName', 'commentTime', 'memberMessage', 'mesId', 'setUpdate'],
  nowMember: '',
  data () {
    return {
      inputTime: new Date(this.commentTime),
      report: false
    }
  },
  computed: {
    timeLag () {
      const subtractTime = new Date().getTime() - this.inputTime.getTime()
      return this.formatDuring(subtractTime)
    }
  },
  methods: {
    reportMessage (e) {
      this.$store.dispatch('reportDialog', true)
      this.$store.dispatch('mesId', e.target.id)
    },
    toggleReport () {
      this.report = !this.report
    },
    formatDuring (mss) {
      const days = parseInt(mss / (1000 * 60 * 60 * 24))
      const hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = ((mss % (1000 * 60)) / 1000).toFixed(0)
      // 這個判斷式有問題
      if (days < 1 && minutes < 1 && hours < 1 && seconds < 1) {
        return '1秒'
      }
      if (hours < 1 && days < 1) {
        return minutes + '分鐘' + seconds + '秒'
      }
      if (days < 1) {
        return hours + '小時'
      }
      if (days >= 7) {
        const weekNum = parseInt(days / 7)
        return weekNum + '週'
      }
    }
  }
}
</script>
<style scoped>
img{
  width: 60px;
  height: 60px;
}
</style>
