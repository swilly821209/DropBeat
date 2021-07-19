<template>
  <div class="flex space-x-5">
    <img :src="img" class="w-[350px] h-[200] rounded-3xl">
    <div class="h-[200] flex flex-col justify-center text-black-backdrop">
      <h3 class=" text-xl">{{ title }}</h3>
      <div class="px-6">{{ inputTime }}.{{ city }}.{{ location }}</div>
      <base-badge class="px-6 mt-2" :image="singerImg" :singer="singer"></base-badge>
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
