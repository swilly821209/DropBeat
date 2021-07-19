<template>
  <div>
    <div class="relative w-16 h-16 ">
        <span class="absolute top-1 left-1 font-medium tracking-wider text-2xl">{{ month }}</span>
        <span class="absolute w-[1px] h-12 top-2 right-8  transform rotate-45 bg-black-backdrop inline-block"></span>
        <span class="absolute right-1 bottom-1 font-medium tracking-wider text-2xl">{{ date }}</span>
    </div>
    <div class="w-16 text-center text-sm" v-if="week">星期{{ day }}</div>
  </div>
</template>

<script>
export default {
  props: ['time', 'week'],
  data () {
    return {
      inputTime: new Date(this.time)
    }
  },
  computed: {
    month () {
      let inputMonth = this.inputTime.getMonth()
      if (inputMonth < 10) {
        return `0${++inputMonth}`
      } else {
        return inputMonth
      }
    },
    date () {
      const inputDate = this.inputTime.getDate()
      if (inputDate < 10) {
        return `0${inputDate}`
      } else {
        return inputDate
      }
    },
    day () {
      const week = this.inputTime.getDay()
      let day = ''
      switch (week) {
        case 1 :
          day = '一'
          break
        case 2 :
          day = '二'
          break
        case 3 :
          day = '三'
          break
        case 4 :
          day = '四'
          break
        case 5 :
          day = '五'
          break
        case 6 :
          day = '六'
          break
        case 0 :
          day = '日'
          break
      }
      return day
    }
  }
}
</script>
