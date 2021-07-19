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
      playPause: require('../assets/icon/play.svg'),
      likeRed: false,
      playCounts: '1,382,754',
      likeCounts: '22,617'
    }
  },
  methods: {
    playFun () {
      if (this.turnOn === 'off') {
        this.turnOn = 'on'
        this.playPause = require('../assets/icon/pause.svg')
      } else if (this.turnOn === 'on') {
        this.turnOn = 'off'
        this.playPause = require('../assets/icon/play.svg')
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
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  .div_the_song{
    position: relative;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 65%;
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
    opacity: .5;
    cursor: pointer;
  }
  .div_cartain:hover{
    opacity: 1;
  }
  #off{
    animation-name: stop;
  }
  .div_info{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  /* 控制照片下方的文字 */
  .p_song {
    margin-top: 10px;
    text-align: center;
    color: #383838;
    font-size: 14px;
  }
  .p_album_letters{
    position: absolute;
    left: 0;
    bottom: -30px;
    color: #383838;
    width: 380px;
    font-size: 14px;
  }
  .div_the_song p span {
    margin-left: 10px;
    font-size: 14px;
    color: #7B7B7B;
  }
  .div_fun{
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    color: #7B7B7B;
  }
  .div_fun span{
    margin: 3px;
    color: #7B7B7B;
    border: 1px solid #7B7B7B;
    border-radius: 20px;
    background-repeat: no-repeat;
    background-size: 12px;
    background-position-y: center;
    background-position-x: 3px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  .div_fun span:hover{
    background-color: #7B7B7B;
  }
  .share{
    background-image: url("../assets/icon/share.svg");
  }
  .share:hover{
    background-image: url("../assets/icon/share_white.svg");
  }
  .add{
    background-image: url("../assets/icon/add.svg");
  }
  .add:hover{
    background-image: url("../assets/icon/add_white.svg");
  }
  .like{
    background-image: url("../assets/icon/like.svg");
  }
  #true{
    background-image: url("../assets/icon/like_red.svg");
    background-position-x: 2px;
    border: 2px solid #ff9d83;
    background-color: #fff;
  }
  .like:hover{
    background-image: url("../assets/icon/like_white.svg");
  }
  sub, sup{
    font-size: 14px;
  }
  /* div_count */
  .div_count{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 10px;
    color: #7B7B7B;
    width: 35%;
  }
  .div_count span{
    font-size: 1.2vw;
    align-self: flex-start;
  }
  .div_count h3{
    font-size: 2.5vw;
    align-self: flex-start;
  }
  .div_count div{
    display: flex;
    flex-direction: column;
  }
</style>
