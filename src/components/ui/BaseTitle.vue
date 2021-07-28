<template>
<div class="title00">
  <div class="titleNline">
  <h2 :class="second">{{ title }}</h2>
  <div class="under"></div>
  </div>
  <router-link class="more" v-if="link" :to="to">more >></router-link>
  <button v-else-if="admin" class="btn">聯絡管理員</button>
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
    },
    admin: {
      type: Boolean,
      required: false,
      default: false
    },
    second: {
      type: String,
      required: false,
      default: ''
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
@media screen and (max-width: 640px) {
  .title00 {
    width: 100%
  }
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
/* 修改募資管理-修改刪除btn */
.btn{
  border: 2px solid #FE9F8A;
  color: #FE9F8A;
  border-radius: 20px;
  margin-left: 20px;
  padding: 2px 20px;
  align-self: center;
  justify-self: center;
}
.btn:hover{
  color: white;
  background-color: #FE9F8A;
}
/* 次title(此size暫定) */
.second{
  font-size: 24px;
}
</style>
