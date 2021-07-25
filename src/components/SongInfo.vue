<template>
  <div class="div_song_day">
    <div class="div_the_song">
      <div class="div_song_whole" >
        <img :src="img">
        <img
          class="div_cartain"
          @click="playFun"
          :src="playPause"
        >
        <div class="hover_b"></div>
        <p class="p_song">{{theSong}}</p>
      </div>
      <div class="div_fun">
        <span class="like" :id="likeRed" @click="actionFun"></span>
        <span class="add"></span>
        <span class="share"></span>
      </div>
    </div>
    <div class="div_count">
      <div class="div_playCount">
        <span>播放次數</span>
        <h3>{{playCounts}}</h3>
      </div>
      <div class="div_likeCount">
        <span>喜歡</span>
        <h3>{{likeCounts}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      turnOn: 'off',
      theSong: '我在披星載月的想你',
      img: 'https://picsum.photos/100',
      playPause: require('../assets/icon/play_fff.svg'),
      likeRed: false,
      playCounts: '1,382,754',
      likeCounts: '22,617'
    }
  },
  methods: {
    playFun () {
      if (this.turnOn === 'off') {
        this.turnOn = 'on'
        this.playPause = require('../assets/icon/pause_fff.svg')
      } else if (this.turnOn === 'on') {
        this.turnOn = 'off'
        this.playPause = require('../assets/icon/play_fff.svg')
      }
    },
    actionFun () {
      this.likeRed = !this.likeRed
    }
  }
}
</script>

<style scoped>
  .div_song_day{
    border-right:1px solid #ededed;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin: 0 15px 0 0;
  }
  .div_the_song{
    /* border:1px solid red; */
    position: relative;
    align-items: center;
    justify-content: center;
    display: flex;
    /* width: 80%; */
  }
  .div_song_whole{
    position: relative;
  }
  .div_song_whole img{
    width: 250px;
    border-radius: 50%;
  }
  .div_cartain{
    position: absolute;
    padding: 60px;
    top: 0;
    left: 0;
    border-radius: 10px;
    transition: all .5s;
    opacity: .6;
    cursor: pointer;
    transform: scale(.6);
  }
  .div_cartain:hover{
    opacity: 1;
    transform: scale(0.8);
  }
  #off{
    animation-name: stop;
  }
  /* .div_info{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  } */

  /* 控制照片下方的文字 */
  .p_song {
    margin-top: 10px;
    text-align: center;
    color: #383838;
    font-size: 16px;
  }
  /* .p_album_letters{
    position: absolute;
    left: 0;
    bottom: -30px;
    color: #383838;
    width: 380px;
    font-size: 14px;
  } */
  /* .div_the_song p span {
    margin-left: 10px;
    font-size: 14px;
    color: #7B7B7B;
  } */
  .div_fun{
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    color: #7B7B7B;
  }
  .div_fun span{
    border: 2px solid #ededed;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    background-repeat: no-repeat;
    cursor: pointer;
    margin:8px 0 0 0;
  }
  .div_fun span:hover{
    border: 2px solid #b5b5b5;
    background-color: #b5b5b5;
  }
  .share{
    background-image: url("../assets/icon/share_b5.svg");
  }
  .share:hover{
    background-image: url("../assets/icon/share_fff.svg");
  }
  .add{
    background-image: url("../assets/icon/add_b5.svg");
  }
  .add:hover{
    background-image: url("../assets/icon/add_fff.svg");
  }
  .like{
    background-image: url("../assets/icon/like_b5.svg");
  }
  #true{
    background-image: url("../assets/icon/like_d83.svg");
    border: 2px solid #ff9d83;
    background-color: transparent;
  }
  .like:hover{
    background-image: url("../assets/icon/like_fff.svg");
  }
  /* sub, sup{
    font-size: 14px;
  } */

  .div_count{
    /* border:1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 60px;
    color: #7B7B7B;
    /* width: 250px; */
  }
  .div_playCount{
    margin-bottom: 15px;
  }
  .div_count span{
    font-size: 16px;
    align-self: flex-start;
  }
  .div_count h3{
    font-size: 30px;
    font-weight: 600;
    margin: -5px 0 0 0;
    letter-spacing: 2px;
    /* align-self: flex-start; */
  }
  .div_count div{
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 1270px) {
    .div_count span{
      font-size: 16px;
      align-self: flex-start;
    }
    .div_count h3{
      font-size: 28px;
      align-self: flex-start;
    }
  }
  @media screen and (max-width: 1110px) {
    .div_count span{
      font-size: 14px;
      align-self: flex-start;
    }
    .div_count h3{
      font-size: 24px;
      align-self: flex-start;
    }
  }
</style>
