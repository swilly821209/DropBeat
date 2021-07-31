<template>
  <div class="item flex space-x-5 sm:flex-row flex-col sm:w-auto sm:h-auto w-[345px]" :col="col">
    <div v-if="edit" class="flex sm:justify-end justify-start mt-4 ml-6 pr-8 sm:pr-16 w-[350px] sm:w-full h-[200] cursor-pointer editclass" :style="imgWidth">
      <div class="h5_icon flex flex-col items-center mr-3 pb-2">
          <span class="editIcon"></span>
          <h5>編輯</h5>
      </div>
      <div class="h5_icon flex flex-col items-center">
          <span class="deleteIcon"></span>
          <h5>刪除</h5>
      </div>
    </div>
    <router-link to="/Active/:id">
      <img :src="img" class="w-[350px] h-[200] rounded-3xl cursor-pointer imgWidth" :style="imgWidth">
    </router-link>
    <div class="activeContent flex flex-col justify-center">
      <h3 class="text-lg text-black-backdrop hover:underline cursor-pointer truncate">{{ title }}</h3>
      <div class="time_location text-xs text-gray-dark sm:hidden block">{{year}}年{{month}}月{{date}}日 ・ 星期{{day}} ・ {{ inputTime }} ・ {{ city }}</div>
      <div class="time_location text-sm text-gray-dark sm:block hidden">{{ inputTime }}・{{ city }}・{{ location }}</div>
      <div class="flex justify-between items-center">
        <base-badge v-if="singer" class="mt-0 sm:mt-2" :image="singerImg" :singer="singer"></base-badge>
        <div class="sm:hidden flex justify-center items-center border-2 bg-orange hover:bg-transparent border-orange  rounded-[20px] w-[65px] h-[25px] text-[14px] text-white hover:text-orange pt-[1px] join">想參加</div>
      </div>
      <div >
        <button v-if="check" class="checkBtn rounded-xl text-sm border-blue-light bg-blue-light text-white">審核ing...</button>
      </div>
    </div>
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
.editIcon{
    width: 18px;
    height: 18px;
    background-image: url("../assets/icon/edit_b5.svg");
    cursor: pointer;
}
.h5_icon:hover .editIcon{
    background-image: url("../assets/icon/edit_d83.svg");
}
.deleteIcon{
    width: 18px;
    height: 18px;
    background-image: url("../assets/icon/delete_b5.svg");
    cursor: pointer;
}
.h5_icon:hover .deleteIcon{
    width: 18px;
    height: 18px;
    background-image: url("../assets/icon/delete_d83.svg");
    cursor: pointer;
}
h5{
  color:#7b7b7b;
  font-size: 14px;
}
.h5_icon:hover h5{
  color:#FF9D83 ;
}

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
