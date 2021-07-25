<template>
  <div class="item flex space-x-5" :col="col">
    <div v-if="edit" class="flex justify-end mt-4 ml-6 pr-8 w-[350px] h-[200] cursor-pointer" :style="imgWidth">
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
      <h3 class=" text-lg text-black-backdrop hover:underline cursor-pointer">{{ title }}</h3>
      <div class="time_location text-sm text-gray-dark">{{ inputTime }}・{{ city }}・{{ location }}</div>
      <base-badge v-if="singer" class=" mt-2" :image="singerImg" :singer="singer"></base-badge>
      <div >
        <button v-if="check" class="checkBtn rounded-xl  border-blue-light bg-blue-light text-white">審核ing...</button>
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
    }
  }
}
</script>
<style scoped>
  .item{
    /* border:1px solid red; */
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
