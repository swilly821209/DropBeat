<template>
  <base-dialog :show="toggleDialog">
    <report-message></report-message>
  </base-dialog>
  <div class="range">
    <base-dialog :show="showDialog">
      <share-social-media @close-social="closeSocialDialog" :imgSrc="shareImg" :music="shareMusic" :singer="shareSinger" :url="shareUrl"></share-social-media>
    </base-dialog>
    <div class="pre">
      <div class="preicon"></div>
      <div class="title00">
        <h2><router-link to="/Active" class="text-[18px] sm:text-[32px]">演出活動</router-link></h2>
        <div class="under hidden sm:block"></div>
      </div>
    </div>
    <div class="block01">
      <h3 class="sm:hidden block mb-5">{{activeTitle}}</h3>
      <div class="banner">
        <img :src="theImg" :alt="theImg" class="banner">
      </div>
      <div class="title01">
        <h3 class="sm:block hidden">{{activeTitle}}</h3>
        <div class="share_join flex justify-between sm:justify-end ">
          <div class="block sm:hidden border-b border-gray-default w-4/6 mb-3 mr-3 ml-1"></div>
          <div class="share" @click="shareSocial(theImg, activeTitle, theId, shareUrl)"></div>
          <button
            class="join"
            :class="{ clickjoin: active }"
            @click="activeFun()">
            {{joinDeside ? '參加' : '想參加'}}
          </button>
        </div>
        <div class="hr sm:block hidden"></div>
        <div class="day"><div class="dayicon sm:block hidden"></div><p>{{theDay}}・{{getDay}}・{{theTime}}</p></div>
        <div class="location"><div class="loctionicon sm:block hidden"></div><p>{{theArea}}・{{thePlace}}</p></div>
        <div class="artist"><img class="artistImg sm:block hidden" :src="theImg"><div class="artistname"><p>{{theId}}</p><div class="undername"></div></div>
          <button
            class="follow"
            :class="{ clickfollow: follow }"
            @click="follow = !follow"
          >{{follow ? '正在關注' : '關注'}}</button>
        </div>
      </div>
    </div>
    <div class="mt-10">
      <h1 class="text-[24px] mb-6">活動介紹</h1>
      <textarea class="w-full h-[100px] text-gray-dark resize-none" :value="theInfo"></textarea>
    </div>
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
</template>

<script>
import MessageBoard from '../components/MessageBoard.vue'
import ReportMessage from '../components/ReportMessage.vue'

export default {
  data () {
    return {
      joinDeside: false,
      shareUrl: '',
      shareImg: '',
      shareMusic: '',
      shareSinger: '',
      showDialog: false,
      theActiveId: '',
      theInfo: '',
      theId: '',
      theArea: '',
      thePlace: '',
      theWeek: '',
      theDay: '',
      theTime: '',
      theImg: '',
      activeTitle: '',
      active: false,
      follow: false,
      activeContent: `黑夜籠罩之後，熟悉的日常逐漸褪色。
清楚地感覺到自己正穿越扭曲的時間與畫面，在那裡，我遇見另一個你，比記憶中更加鮮明，也遇見另一個我，比想象中更加勇敢，
一起往規則改變的未知前進。睜眼的那一刻便越過了黑夜。

———

大象體操2021年度單曲《穿過夜晚》，創作始於與日本樂團toe在疫情期間舉辦的線上合作演出。
與toe的團員討論後，取樣其經典曲目 “Two Moons” 的木吉他音軌重新創作，為探討夢境作為主題的下一張專輯揭開序幕。

`,
      moreButton: true,
      displayNum: 2,
      nowArray: [],
      inputMessage: '',
      sendMessageId: '' // 傳到ReportMessage的Compnent
    }
  },
  components: {
    MessageBoard,
    ReportMessage
  },
  methods: {
    activeFun () {
      this.joinDeside = !this.joinDeside
      const form = new FormData()
      form.append('member_id', this.$store.getters.memberIdState) // memeberID
      form.append('activity_id', this.$route.params.id) // activityID
      fetch('./DropbeatBackend/activePageJoinDesideSend.php', {
        method: 'POST',
        body: form
      })
      console.log(this.$route.params.id)
    },
    shareSocial (img, music, singer, url) {
      this.showDialog = true
      this.shareImg = img
      this.shareMusic = music
      this.shareSinger = singer
      this.shareUrl = url
    },
    closeSocialDialog () {
      this.showDialog = false
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
          member: this.$store.getters.memberIdState,
          setup_date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
          img: 'https://akstatic.streetvoice.com/profile_images/sa/nd/sandwichfail/3fT9Y92afyjdDbtNEFb2rh.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          content: this.inputMessage
        }
        this.inputMessage = ''
        this.nowArray.unshift(messageData)
        // 傳後端
        const form = new FormData()
        form.append('member', this.$store.getters.memberIdState)
        form.append('activity', this.$route.params.id)
        form.append('content', messageData.content)
        fetch('./DropbeatBackend/mussageActSend.php', {
          method: 'POST',
          body: form
        })
        this.$store.dispatch('mesId', this.sendMessageId = this.$store.getters.memberIdState)
      } else {
        alert('請登入後留言！')
      }
    }
  },
  computed: {
    toggleDialog () {
      return this.$store.getters.reportDialogState
    },
    displayMessageData () {
      return this.nowArray.slice(0, this.displayNum)
    },
    getDay () {
      const week = this.theWeek
      let day = ''
      switch (week) {
        case 1 :
          day = '星期一'
          break
        case 2 :
          day = '星期二'
          break
        case 3 :
          day = '星期三'
          break
        case 4 :
          day = '星期四'
          break
        case 5 :
          day = '星期五'
          break
        case 6 :
          day = '星期六'
          break
        case 0 :
          day = '星期日'
          break
      }
      return day
    }
  },
  async created () {
    // 獲取活動資訊
    const form = new FormData()
    form.append('activity_id', this.$route.params.id)
    const response = await fetch('./DropbeatBackend/activePageDetailMainGet.php', {
      method: 'POST',
      body: form
    })
    const responseData = await response.json()
    this.theInfo = responseData[0].info
    this.theId = responseData[0].account
    this.theArea = responseData[0].activity_area
    this.thePlace = responseData[0].place
    this.theWeek = new Date(responseData[0].activity_date).getDay()
    this.theImg = responseData[0].activity_photo
    this.activeTitle = responseData[0].activity_name
    this.theDay = responseData[0].activity_date
    this.theTime = responseData[0].activity_time
    this.shareUrl = window.location.href
    // 獲取留言
    const forms = new FormData()
    forms.append('activity', this.$route.params.id)
    const responses = await fetch('./DropbeatBackend/mussageActGet.php', {
      method: 'POST',
      body: forms
    })
    const responseDatas = await responses.json()
    // 操作
    responseDatas.forEach((item) => {
      this.nowArray.unshift(item)
    })
    const formes = new FormData()
    formes.append('memberId', this.$store.getters.memberIdState)
    formes.append('activityId', this.$route.params.id)
    const responseses = await fetch('./DropbeatBackend/activePageDetailMainJoinGet.php', {
      method: 'POST',
      body: formes
    })
    const responseDatases = await responseses.json()
    console.log(responseDatases)
    if (responseDatases.length === 0) {
      this.joinDeside = false
    } else {
      this.joinDeside = !this.joinDeside
    }
  }
}
</script>

<style scoped>
  .range{
    padding: 60px 40px 0 40px;
  }
.pre {
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  width: 170px;
  height: 52px;
  margin: 0 0 20px 5px;
  cursor: pointer;
}
.preicon {
  width: 25px;
  height: 25px;
  background-image: url("../assets/icon/pre_7b.svg");
  background-repeat: no-repeat;
  margin: 0 10px 0 0;
}
.title00 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  font-size: 32px;
  font-weight: 500;
  color: #383838;
}
.under{
  background-color: transparent;
  width: 130px;
  height: 1.5px;
}
.pre:hover .preicon {
  background-image: url("../assets/icon/pre_38.svg");
}
.pre:hover .under {
  background-color: #383838;
  width: 130px;
  height: 1.5px;
}
/*-------------------- block01 -----------------------*/
.block01{
  display: flex;
  flex-shrink: 0;
}
.banner {
  width: 580px;
  height: 330px;
  border-radius: 20px;
  /* background-image: url("../assets/images/active/ac001.jpg"); */
  margin: 0 30px 0 0;
}
.title01{
  width: calc(100% - 600px - 30px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h3{
  font-size: 22px;
  margin-left: 5px;
}
.share_join{
  margin: 10px 5px 0 0;
}
.share{
    border: 2px solid #ededed;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin-right: 8px;
    background-image: url("../assets/icon/share_b5.svg");
    background-repeat: no-repeat;
    cursor: pointer;
}
.share:hover{
  border: 2px solid #b5b5b5;
  background-color: #b5b5b5;
  background-image: url("../assets/icon/share_fff.svg");
}
.join{
  background-color: #ff9d83;
  border-radius: 20px;
  width: 65px;
  height: 25px;
  font-size:14px;
  color:#ffffff;
}
.join:hover{
  border:2px solid #ff9d83;
  background-color: transparent;
  color:#ff9d83;
}
.clickjoin{
  border:2px solid #ff9d83;
  background-color: transparent;
  color:#ff9d83;
  width: 50px;
}
.clickjoin:hover{
  background-color: #ff9d83;
  color:#ffffff;
}
.hr{
  border-bottom: 1px solid #b5b5b5;
  margin: 20px 0;
}
.day, .location, .artist{
  display: flex;
  align-items: center;
  /* margin-bottom: 5px; */
  margin: 0 0 5px 5px;
}
.dayicon, .loctionicon{
    width: 25px;
    height: 25px;
}
.dayicon{
    background-image: url("../assets/icon/day_b5.svg");
    margin-right: 2px;
}
.loctionicon{
    background-image: url("../assets/icon/location_b5.svg");
}
p{
  font-size: 14px;
  color:#7b7b7b;
}
.artist p{
  cursor: pointer;
}
.artistname:hover .undername{
  background-color: #7b7b7b;
  width: 145px;
  height: 1px;
}
.artistImg{
    border: 1px solid #ededed;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-right: 10px;
}
.follow{
  background-color: #ff9d83;
  border-radius: 20px;
  width: 50px;
  height: 25px;
  font-size:14px;
  color:#ffffff;
  margin-left: 10px;
}
.follow:hover{
  border:2px solid #ff9d83;
  background-color: transparent;
  color:#ff9d83;
}
.clickfollow{
  border:2px solid #ff9d83;
  background-color: transparent;
  color:#ff9d83;
  width: 80px;
}
.clickfollow{
  background-color: #ff9d83;
  color:#ffffff;
}
/*-------------------- block02 -----------------------*/
.block02{
  margin: 40px 0 0 0;
}
h4{
  font-size: 22px;
  font-weight: 500;
  color: #383838;
  margin: 0 0 12px 0;
}
.content{
  /* border:1px solid red; */
  margin: 5px 0 0 0;
  white-space: pre;
}
  .message{
        margin: 50px 0 0 0;
  }
  @media (max-width: 640px) {
    .range{
      padding: 60px 20px 0 20px;
    }
    .preicon {
      width: 20px;
      height: 20px;
      background-image: url("../assets/icon/pre_7b.svg");
      background-repeat: no-repeat;
      margin: 10px 10px 0 0;
    }
  .block01 {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .banner {
    width: 100%;
    height: 100%;
    background-size: cover ;
    padding-top: 57%;
    margin: 0 auto;
    border-radius: 10px;
  }
  .title01{
    width: 100%
  }
    .content {
      white-space:normal;
    }
    .share_join{
      margin: 15px 5px 10px 0;
    }
  }
</style>
