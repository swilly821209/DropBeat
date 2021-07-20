<template>
  <div class="fundBlock">
    <img :src="img">
    <div class="content">
      <h4 class=" text-base text-black">{{ title }}</h4>
      <p class="text-sm text-gray-dark">{{singer}}</p>
      <div class="donateline">
        <div class="donateNow" :style="`width: ${progress}`"></div>
      </div>
      <div class="donate_content">
        <p>$ {{ money }} | {{ progress }}</p>
        <p>還剩 {{ date }} 天</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'img', 'singer', 'progress', 'money', 'date']
}
</script>

<style scoped>
  .fundBlock{
    margin: 35px 35px 0 0;
    cursor: pointer;
  }
  .fundBlock:last-child{
    margin: 35px 0 0 0;
  }
  img{
    border-radius: 15px;
    /* box-shadow:  0px 4px 5px rgba(0, 0, 0, 0.25); */
  }
  h4{
    margin: 15px 5px 0 5px;
  }
  .content > p{
    margin: 0 5px 0 5px;
  }
  .donateline{
    height: 5px;
    background-color: #d6d6d6;
    border-radius: 5px;
    margin: 15px 5px 5px 5px;
  }
  .donateNow{
    height: 5px;
    background-color: #FF9D83 ;
    border-radius: 5px;
  }
  .donate_content{
    display: flex;
    justify-content: space-between;
    margin: 6px 5px 0 5px;
    font-size: 16px;
    color:#383838;
  }
</style>
