<template>
    <div class="relative flex justify-center">
       <div class="carousel-item" :class="classItems[0]"><img src="https://picsum.photos/id/10/800/400"></div>
       <div class="carousel-item" :class="classItems[1]"><img src="https://picsum.photos/id/100/800/400"></div>
       <div class="carousel-item" :class="classItems[2]"><img src="https://picsum.photos/id/1000/800/400"></div>
       <div class="carousel-item" :class="classItems[3]"><img src="https://picsum.photos/id/200/800/400"></div>
       <div class="carousel-item" :class="classItems[4]"><img src="https://picsum.photos/id/1001/800/400"></div>
    </div>
    <div>
        <span class="rounded-full w-5 h-5 bg-black"></span>
        <span class="rounded-full w-5 h-5 bg-black"></span>
        <span class="rounded-full w-5 h-5 bg-black"></span>
        <span class="rounded-full w-5 h-5 bg-black"></span>
        <span class="rounded-full w-5 h-5 bg-black"></span>
    </div>
</template>

<script>
export default {
  data () {
    return {
      classItems: ['item1', 'item2', 'item3', 'item4', 'item5']
    }
  },
  methods: {

  }
}
</script>

<style lang="postcss" scoped>
 .carousel-item {
    @apply  w-3/5 h-96  absolute rounded-3xl overflow-hidden
  }
  .item1 {
    @apply transform -translate-x-2/4 scale-50
  }
  .item2 {
    @apply transform -translate-x-1/4 scale-75
  }
  .item3 {
    @apply z-50
  }
  .item4{
    @apply transform translate-x-1/4 scale-75 z-30
  }
  .item5{
    @apply transform translate-x-2/4 scale-50 z-20
  }
</style>
