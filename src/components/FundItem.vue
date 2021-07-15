<template>
  <div class=" w-80 flex items-center flex-col space-y-5 text-black-backdrop">
    <img :src="img" alt="" class="w-10/12 h-60 rounded-3xl shadow-sm">
    <div class="w-11/12 space-y-2">
      <h4 class=" text-lg">{{ title }}</h4>
      <p class=" mx-3">{{singer}}</p>
      <div class="w-full h-1 bg-gray-lightest rounded-3xl">
        <div class="bg-orange h-1 rounded-3xl" :style="`width: ${progress}`"></div>
      </div>
      <div class="flex justify-between mx-3">
        <p>${{ money }} | {{ progress }}</p>
        <p>還剩{{ date }}天</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'img', 'singer', 'progress', 'money', 'date']
}
</script>
