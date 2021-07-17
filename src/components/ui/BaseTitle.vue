<template>
<div class="title00">
  <div class="titleNline">
  <h2>{{ title }}</h2>
  <div class="under"></div>
  </div>
  <router-link class="more" v-if="link" :to="to">more >></router-link>
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

<style scoped>
.title00{
  display: flex;
  align-items: baseline;
  cursor: pointer;
  width: 410px;
}
.titleNline{
  display: flex;
  flex-direction: column;
}
h2{
    font-size: 32px;
    font-weight: 500;
    color: #383838;
}
.under{
  background-color: transparent;
  height: 2px;
  margin-top: -5px ;
}
.more{
  font-size: 14px;
  color: #7b7b7b;
  margin-left: 10px;
}
.title00:hover .more{
    color: #FF9D83;
}
.title00:hover .under{
    background-color: #7b7b7b;
}
</style>
