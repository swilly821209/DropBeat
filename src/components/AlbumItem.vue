<template>
  <div class="singleAlbum">
    <img :src="img">
    <div class="mt-2 ">
      <h3 class="text-base text-black-backdrop">{{ albumName }}</h3>
      <p class="text-gray-dark">{{ year }}・{{ num }}首歌・{{ totalTime }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['img', 'albumName', 'year', 'num', 'totalTime']
}
</script>
<style scoped>
.singleAlbum{
    margin: 0 20px 0 0;
}
.singleAlbum:last-child{
      margin: 0 0 0 0;
}
</style>
