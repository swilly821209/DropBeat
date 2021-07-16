<template>
  <div class="div_artist_container">
    <div class="div_artist_list">
      <div class="div_head">
        <img :src="img">
        <div v-if="listen" class="div_certain_container">
          <div class="div_black"></div>
          <div v-if="play === false" class="div_curtain"></div>
          <div v-else class="div_curtains"></div>
        </div>
      </div>
      <span class="span_author">{{ author }}</span>
      <a class="a_more" :href="more">More</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listen: {
      type: Boolean,
      required: false,
      default: false
    },
    img: {
      type: String,
      required: true,
      default: ''
    },
    author: {
      type: String,
      required: true,
      default: ''
    },
    more: {
      type: String,
      required: true,
      default: ''
    },
    play: {
      type: Boolean,
      required: true,
      default: false
    }
  }
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
    margin: 0 6px;
    margin-bottom: 10px;
  }
  .div_head{
    width: 80px;
    position: relative;
  }
  .div_head img{
    width: 80px;
    border-radius: 50px;
  }
  /* curtain */
  .div_certain_container{
    display: flex;
    justify-content: center;
    align-items: center;
    position:absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    left: 0;
    top: 0;
  }
  .div_black{
    background: #383838;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    opacity: 0;
  }
  .div_certain_container:hover .div_black{
    opacity: .4;
  }
  .div_curtain{
    width: 40px;
    height: 40px;
    background-image: url("../assets/icon/play.svg");
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    transition: all .5s;
    opacity: 0;
  }
  .div_certain_container:hover .div_curtain{
    width: 50px;
    height: 50px;
    opacity: .9;
  }
  .div_curtains{
    width: 40px;
    height: 40px;
    background-image: url("../assets/icon/pause.svg");
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    transition: all .5s;
  }
  .div_certain_container:hover .div_curtains{
    width: 50px;
    height: 50px;
    opacity: .9;
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
