<template>
  <div class="flex space-x-5 sm:flex-row flex-col sm:w-auto sm:h-auto w-[345px]" :col="col">
    <div v-if="edit" class="flex sm:justify-end justify-start mt-4 ml-6 pr-8 w-[350px] h-[200] cursor-pointer" :style="imgWidth">
      <div class="flex flex-col items-center mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="20.001" height="20" viewBox="0 0 20.001 20">
          <path id="Icon_awesome-pen" data-name="Icon awesome-pen" d="M11.357,3.642l5,5L5.5,19.5l-4.459.492A.938.938,0,0,1,.005,18.959L.5,14.5,11.357,3.642ZM19.451,2.9,17.1.55a1.876,1.876,0,0,0-2.653,0L12.241,2.759l5,5,2.209-2.209a1.876,1.876,0,0,0,0-2.653Z" transform="translate(0.001 -0.001)" fill="#b5b5b5"/>
        </svg>
        <span class="text-gray-dark">編輯</span>
      </div>
      <div class="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="15.556" height="20" viewBox="0 0 15.556 20">
          <path id="Icon_material-delete" data-name="Icon material-delete" d="M8.611,22.278A2.229,2.229,0,0,0,10.833,24.5h8.889a2.229,2.229,0,0,0,2.222-2.222V8.944H8.611ZM23.056,5.611H19.167L18.056,4.5H12.5L11.389,5.611H7.5V7.833H23.056Z" transform="translate(-7.5 -4.5)" fill="#b5b5b5"/>
        </svg>
        <span class="text-gray-dark">刪除</span>
      </div>
    </div>
    <router-link to="/Active/:id">
      <img :src="img" class="w-[350px] h-[200] rounded-3xl cursor-pointer" :style="imgWidth">
    </router-link>
    <div class="activeContent flex flex-col justify-center">
      <h3 class=" text-lg text-black-backdrop hover:underline cursor-pointer truncate">{{ title }}</h3>
      <div class="time_location text-sm text-gray-dark sm:hidden block">{{year}}年{{month}}月{{date}}日 ・ 星期{{day}} ・ {{ inputTime }} ・ {{ city }}</div>
      <div class="time_location text-sm text-gray-dark sm:block hidden">{{ inputTime }}・{{ city }}・{{ location }}</div>
      <div class="flex justify-between items-center">
        <base-badge v-if="singer" class=" mt-2" :image="singerImg" :singer="singer"></base-badge>
        <div class="sm:hidden flex justify-center items-center border-2 bg-orange hover:bg-transparent border-orange  rounded-[20px] w-[65px] h-[25px] text-[14px] text-white hover:text-orange pt-[1px]">想參加</div>
      </div>
      <div >
        <button v-if="check" class="checkBtn rounded-xl  border-blue-light bg-blue-light text-white">審核ing...</button>
      </div>
    </div>
    <!-- <div class="flex mt-1 ml-6 pr-3 w-[350px] h-[200]" v-if="check">
      <button  class="self-start rounded-xl border-2 border-blue-light bg-blue-light text-white px-3">審核ing...</button>
    </div> -->
  </div>
</template>

<script>
export default {
  props: ['img', 'title', 'time', 'city', 'location', 'singerImg', 'singer', 'col', 'edit', 'check', 'imgWidth'],
  data () {
    return {
      activityTime: new Date(this.time)
    }
  },
  computed: {
    inputTime () {
      const hour = this.activityTime.getHours().toString().padStart(2, '0')
      const minutes = this.activityTime.getMinutes().toString().padStart(2, '0')
      return hour + ':' + minutes
    },
    year () {
      return this.activityTime.getFullYear()
    },
    month () {
      let inputMonth = this.activityTime.getMonth()
      inputMonth++
      return inputMonth.toString().padStart(2, '0')
    },
    date () {
      return this.activityTime.getDate().toString().padStart(2, '0')
    },
    day () {
      const week = this.activityTime.getDay()
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
<style scoped>
  .time_location{
    margin: 0 0 3px 0;
  }
  .activeContent{
        /* border:1px solid red; */
        padding: 10px 0;
  }
  .checkBtn{
    height: 25px;
    padding: 1px 12px 0 12px;
    margin: 3px 0 0 0;
  }
</style>
