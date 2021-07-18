<template>
    <div class=" w-56 h-9 relative">
      <img :src="image" class="rounded-full  border-gray-dark w-9 h-9 absolute z-10">
      <p class=" flex justify-center items-center rounded-3xl border-gray-light text-sm w-56 h-9 border absolute pl-5 text-gray-light hover:text-white hover:border-white hover:bg-gray-light transition-all">{{ singer }}</p>
    </div>
</template>

<script>
export default {
  props: ['image', 'singer']
}
</script>
