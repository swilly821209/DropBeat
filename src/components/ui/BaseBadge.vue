<template>
    <div class=" w-56 h-9 relative">
      <img :src="image" class="rounded-full  border-gray-default  absolute z-10">
      <p class="absolute w-56   pl-5 flex justify-center items-center rounded-3xl border-2 border-gray-default text-sm text-gray-dark hover:text-white hover:border-gray-light hover:bg-gray-light  transition-all cursor-pointer">{{ singer }}</p>
    </div>
</template>

<script>
export default {
  props: ['image', 'singer']
}
</script>
<style scoped>
  p{
    height: 30px;
  }
  img{
    height: 30px;
    width: 30px;
  }
</style>
