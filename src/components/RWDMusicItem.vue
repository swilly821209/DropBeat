<template>
  <base-dialog :show="toggleDialog">
    <report-message></report-message>
  </base-dialog>
  <div :class="{active: open}" class=" clip bg-black-backdrop w-full  h-full overflow-y-auto overflow-x-hidden fixed bottom-0 pt-[60px]  z-[100]">
    <div class="flex flex-col items-center px-[20px]">
      <button @click="close" class="closeIcon "></button>
      <div><img :src="mainplayImg" class="mb-4"></div>
      <div class="info flex items-start justify-between ">
        <div class="title_author">
          <h3 class="text-[18px] text-white">在這座城市遺失了你</h3>
          <h4 class="text-[14px] text-gray-light">告五人</h4>
        </div>
        <div class="likenum_share_add mt-1">
          <div @click="toggleLike" :class="{'text-orange': like}" class="likeBtn border-2 rounded-2xl border-gray-dark text-gray-light flex items-center justify-center space-x-1">
            <svg class="" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="currentColor "><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            <span>{{ likeNum }}</span>
          </div>
          <span class="share" @click="shareSocial"></span>
          <span class="add"></span>
        </div>
      </div>
      <div class="playingline w-full mt-5">
        <div class="playingNow" :style="`width: ${progress}`"></div>
      </div>
      <div class="time flex justify-between w-full text-sm text-gray-light tracking-[1px] mt-1">
        <p>{{playtime}}</p>
        <p>{{totaltime}}</p>
      </div>
      <div class="pre_play_next flex items-center mt-4">
        <button class="pre"></button>
        <button
            class="play"
            :class="{ clickplay: playing }"
            @click="playing = !playing"
        ></button>
        <button class="next"></button>
      </div>
      <div class="line border border-gray-dark w-full mt-8"></div>
      <div>
        <song-lyrics></song-lyrics>
      </div>
      <div class="line border border-gray-dark w-full mt-[-20px] mb-8"></div>
    </div>
    <div class="mb-8">
      <message-board
        class="message"
        :outerArray='displayMessageData'
        :nowDisplay='displayMore'
        :nowMessage='commentMessage'
        :nowClear='clearInput'
        :nowButton='moreButton'
        v-model="inputMessage"
      ></message-board>
    </div>
  </div>
</template>

<script>
import SongLyrics from '../components/SongLyrics.vue'
import MessageBoard from '../components/MessageBoard.vue'
import ReportMessage from '../components/ReportMessage.vue'

export default {
  data () {
    return {
      mainplayImg: require('../assets/images/singlemusic/s_002.jpg'),
      like: false,
      likeNum: 789,
      progress: '70%',
      playSecond: '207',
      totalSecond: '357',
      playing: false,
      moreButton: true,
      displayNum: 2,
      nowArray: [],
      inputMessage: ''
    }
  },
  components: {
    SongLyrics,
    MessageBoard,
    ReportMessage
  },
  computed: {
    open () {
      return this.$store.getters.rwdMusicState
    },
    playtime () {
      const minute = parseInt(this.playSecond / 60)
      const seconds = this.playSecond % 60
      return `${minute} : ${seconds}`
    },
    totaltime () {
      const minute = parseInt(this.totalSecond / 60)
      const seconds = this.totalSecond % 60
      return `${minute} : ${seconds}`
    },
    toggleDialog () {
      return this.$store.getters.reportDialogState
    },
    displayMessageData () {
      return this.nowArray.slice(0, this.displayNum)
    }
  },
  methods: {
    close () {
      this.$store.dispatch('rwdMusicitem', false)
    },
    toggleLike () {
      if (this.like === false) {
        this.likeNum++
      } else {
        this.likeNum--
      }
      this.like = !this.like
    },
    displayMore () {
      this.displayNum = this.nowArray.length
      this.moreButton = false
    },
    clearInput () {
      this.inputMessage = ''
    },
    commentMessage () {
      // 判斷是否登入
      if (this.$store.getters.loginState !== false) {
        const messageData = {
          member: 'willy',
          setup_date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
          img: 'https://akstatic.streetvoice.com/profile_images/sa/nd/sandwichfail/3fT9Y92afyjdDbtNEFb2rh.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          content: this.inputMessage
        }
        this.inputMessage = ''
        this.nowArray.unshift(messageData)
        console.log(this.nowArray)
        // 傳後端
        const form = new FormData()
        form.append('message_id', Math.floor(Math.random() * 999)) // message_id (DB是INT)
        form.append('member', this.$store.getters.loginIdState) // member_id (DB是INT)
        form.append('musician', Math.floor(Math.random() * 9999)) // musician (DB是INT)
        // form.append('setup_date', messageData.time)
        form.append('content', messageData.content)
        fetch('./DropbeatBackend/mussageActSend.php', {
          method: 'POST',
          body: form
        })
      } else {
        alert('請登入後留言！')
      }
    }
  },
  async created () {
    const response = await fetch('./DropbeatBackend/mussageActGet.php')
    const responseData = await response.json()
    // 操作
    responseData.forEach((item) => {
      this.nowArray.unshift(item)
    })
  }
}
</script>

<style scoped>
  .clip {
    clip-path: inset(100vh 0 0 0);
    transition: all .3s;
  }
  .active{
    clip-path: inset(0 0 0 0);
  }
  .closeIcon{
      width: 25px;
      height: 25px;
      background-image: url("../assets/icon/closeIcon_b5.svg");
      margin: 20px 0 15px 0;
  }
  .info{
    width: 100%;
    /* width: calc(100% - 40px); */
  }
  .likenum_share_add{
    /* border:1px solid red; */
    display: flex;
  }
  .likeBtn{
    height: 25px;
    font-size: 14px;
    padding: 0 8px;
    cursor: pointer;
  }
  .likeBtn > svg{
      padding: 1px 0 1px 0 ;
  }
  .share, .add{
    border: 2px solid #7b7b7b;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin-left: 8px;
    background-repeat: no-repeat;
    cursor: pointer;
  }
  .share{
    background-image: url("../assets/icon/share_b5.svg");
  }
  .add{
    background-image: url("../assets/icon/add_b5.svg");
  }
  .playingline{
    height: 5px;
    background-color: #ededed;
    border-radius: 5px;
  }
  .playingNow{
    height: 5px;
    background-image: linear-gradient(to right, #31BDC5 30%, #A6ff00);
    border-radius: 5px;
  }
  .play{
    width: 60px;
    height: 60px;
    background-image: url("../assets/icon/mainPlay.svg");
    background-repeat: no-repeat;
    margin: 0 40px;
    transition: all 0.3s;
  }
  .clickplay{
    background-image: url("../assets/icon/mainPause.svg");
  }
  .pre{
    width: 40px;
    height: 40px;
    background-image: url("../assets/icon/preMusic_b5.svg");
    background-repeat: no-repeat;
    margin-left: 80px;
  }
  .next{
    width: 40px;
    height: 40px;
    background-image: url("../assets/icon/nextMusic_b5.svg");
    background-repeat: no-repeat;
    margin-right: 80px;
  }
  /* -------  lyrics ------- */
  :deep .wholeContainer{
    /* border:1px solid yellow; */
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: 30px 0 30px 0;
  }
  :deep .title{
    color:#ededed;
    font-size: 18px;
    margin-left: 0;
    flex-shrink: 0;
  }
  :deep .lyricsContainer{
    width:100% ;
    height: 100%;
    flex-shrink: 0;
  }
  :deep .lyricsH{
    width:100%;
    height: 230px;
    font-size: 14px;
    line-height: 24px;
    overflow-y: hidden;
  }
  :deep textarea{
    background-color: #383838;
    color: #ededed;
  }
  :deep .up{
    margin-bottom: 5px;
  }
  :deep .down{
    margin-top: 5px;
  }
  @media screen and (max-width: 640px){
    :deep .lyricsContainer{
      margin-left: 110px;
    }
    :deep .memberMessageText p{
      color:#ededed;
    }
    :deep .cardBg{
      background-color: #ededed;
    }
    :deep .report{
      color: #383838;
    }
    :deep .bit:hover{
      background-color: transparent;
    }
  }
  @media screen and (max-width: 580px){
    :deep .lyricsContainer{
      margin-left: 90px;
    }
  }
  @media screen and (max-width: 530px){
    :deep .lyricsContainer{
      margin-left: 70px;
    }
  }
  @media screen and (max-width: 500px){
    :deep .lyricsContainer{
      margin-left: 50px;
    }
  }
  @media screen and (max-width: 420px){
    :deep .lyricsContainer{
      margin-left: 34px;
    }
  }
  @media screen and (max-width: 400px){
    :deep .lyricsContainer{
      margin-left: 17px;
    }
  }
    /* -------  message ------- */
  :deep  .messageAll{
    border-top:none;
    padding: 0 20px;
    margin-top: -30px;
  }
  :deep h3{
    color:#ededed;
    font-size: 18px;
  }
  :deep svg{
    fill: #b5b5b5;
  }
  :deep .write{
    border:1px solid #ededed;
  }
  :deep .moreMessage{
    color:#ededed;
  }
  :deep .cancel{
    border:2px solid #7b7b7b;
    color:#b5b5b5;
  }
</style>
