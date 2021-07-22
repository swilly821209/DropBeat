<template>
  <div class="item flex space-x-5">
    <img :src="img" class="w-[350px] h-[200] rounded-3xl cursor-pointer">
    <div class="h-[200] flex flex-col justify-center ">
      <h3 class=" text-lg text-black-backdrop hover:underline cursor-pointer">{{ title }}</h3>
      <div class="time_location text-sm text-gray-dark">{{ inputTime }}・{{ city }}・{{ location }}</div>
      <base-badge class=" mt-2" :image="singerImg" :singer="singer"></base-badge>
    </div>
  </div>
</template>

<script>
export default {
  props: ['img', 'title', 'time', 'city', 'location', 'singerImg', 'singer'],
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
</style>
