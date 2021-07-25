<template>
  <div>
    <img class="w-80 h-80" :src="img">
    <div class="mt-3 text-gray-dark">
      <h3 class="text-xl">{{ albumName }}</h3>
      <p>{{ year }}.{{ num }}首歌.{{ totalTime }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['img', 'albumName', 'year', 'num', 'totalTime']
}
</script>
