<template>
  <div class="div_artist_container">
    <div class="div_artist_list">
      <div class="div_head"><img :src="img"></div>
      <span class="span_author">{{ author }}</span>
      <a class="a_more" :href="more">More</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['img', 'author', 'more']
}
</script>
<style scoped>
  .div_artist_container{
    display: flex;
  }
  .div_artist_list{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .div_head{
    width: 80px;
  }
  .div_head img{
    width: 80px;
    border-radius: 50px;
  }
  .span_author{
    font-size: 12px;
    margin: 5px 0;
  }
  .a_more{
    color: #7B7B7B;
    font-size: 10px;
    font-weight: bold;
    border: 1px solid #B5B5B5;
    border-radius: 10px;
    width: 50px;
    text-align: center;
  }
  .a_more:hover{
    background: linear-gradient(0.25turn, #31BDC5, #A6FF00);
    color: white;
    border: 1px solid #00000000;
  }
</style>
