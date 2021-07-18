<template>
  <div class="div_artist_list">
    <div class="div_head">
      <img :src="img" :class="width">
      <div v-if="listen" class="div_certain_container">
        <div class="div_black"></div>
        <div v-if="play === false" class="div_curtain"></div>
        <div v-else class="div_curtains"></div>
      </div>
    </div>
    <span class="span_author">{{ author }}</span>
    <a class="a_more" :href="more">More</a>
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
    },
    width: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>
<style scoped>
  .div_artist_list{
    /* border:1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }
  /* .div_head{
    position: relative;
  } */
  .div_head img{
    border-radius: 50%;
    box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
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
    border-radius: 50%;
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
    font-size: 16px;
    color:#383838;
    margin: 8px 0 2px 0;
  }
  .a_more{
    border: 2px solid #ededed;
    border-radius: 20px;
    color: #7b7b7b;
    font-size: 14px;
    font-weight: 500;
    width: 60px;
    text-align: center;
  }
  .a_more:hover{
    background: linear-gradient(0.25turn, #31BDC5, #A6FF00);
    color: white;
    border: 2px solid #ffffff;
  }
  /* 圖片大小控制 */
  .vw-5{width: 5vw;}
  .vw-6{width: 6vw;}
  .vw-7{width: 7vw;}
  .vw-8{width: 8vw;}
  .vw-9{width: 9vw;}
  .vw-10{width: 10vw;}
</style>
