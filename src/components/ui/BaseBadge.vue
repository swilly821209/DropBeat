<template>
    <div class=" w-56 h-9 relative">
      <img :src="image" class="rounded-full border-gray-default  absolute z-10 sm:block hidden">
      <p class="absolute w-56 sm:pl-5 pl-0 flex sm:justify-center justify-start items-center rounded-3xl border-2 sm:border-gray-default border-transparent text-sm text-gray-dark sm:hover:text-white sm:hover:border-gray-light sm:hover:bg-gray-light  transition-all sm:cursor-pointer">{{ singer }}</p>
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
