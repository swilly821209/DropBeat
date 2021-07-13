<template>
<div class="space-x-2 hover:text-orange group w-11/12 m-auto my-8">
  <h2 class=" text-4xl text-black-backdrop inline-block group-hover:underline">{{ title }}</h2>
  <router-link class="text-sm align-bottom" v-if="link" :to="to">more>></router-link>
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
