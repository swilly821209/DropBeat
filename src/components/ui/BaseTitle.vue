<template>
<div class="space-x-2 hover:text-orange group">
  <h2 class=" py-1 text-4xl text-black-backdrop inline-block border-b border-white group-hover:border-black-backdrop ">{{ title }}</h2>
  <router-link class="text-sm" v-if="link" :to="to">more>></router-link>
</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
}
</script>
