<template>
  <div :class="{active: open}" class="clip bg-black-backdrop w-full h-full fixed bottom-0  z-[1000]">
    <button @click="close">123</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    open () {
      return this.$store.getters.rwdMusicState
    }
  },
  methods: {
    close () {
      this.$store.dispatch('rwdMusicitem', false)
    }
  }
}
</script>

<style scoped>
  .clip {
    clip-path: inset(100vh 0 0 0);
    transition: all 1s;
  }
  .active{
    clip-path: inset(0 0 0 0);
  }
</style>
