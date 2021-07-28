<template>
  <div class="range">
    <div class="pre">
      <div class="preicon"></div>
      <div class="title00">
        <h2>演出活動</h2>
        <div class="under"></div>
      </div>
    </div>
    <div class="block01">
      <div class="banner"></div>
      <div class="title01">
        <h3>{{activeTitle}}</h3>
        <div class="share_join">
          <div class="share"></div>
          <button
          class="join"
          :class="{ clickjoin: active }"
          @click="active = !active"
        >{{active ? '參加' : '想參加'}}</button>
        </div>
        <div class="hr"></div>
        <div class="day"><div class="dayicon"></div><p>2021 年 10 月 10 日・星期日・20:00</p></div>
        <div class="location"><div class="loctionicon"></div><p>台北市・海邊的卡夫卡 Kafka by the Sea</p></div>
        <div class="artist"><img class="artistImg" src="../assets/images/artist/artist001.jpg"><div class="artistname"><p>大象體操 Elephant Gym</p><div class="undername"></div></div>
          <button
            class="follow"
            :class="{ clickfollow: follow }"
            @click="follow = !follow"
          >{{follow ? '正在關注' : '關注'}}</button>
        </div>
      </div>
    </div>
    <div class="block02">
      <h4>活動介紹</h4>
      <div class="content"><p>{{activeContent}}</p></div>
    </div>
    <message-board class="message"></message-board>
  </div>
</template>

<script>
import MessageBoard from '../components/MessageBoard.vue'

export default {
  data () {
    return {
      activeTitle: '2021 新歌巡迴《 穿過夜晚 Go Through the Night 》',
      active: false,
      follow: false,
      activeContent: `黑夜籠罩之後，熟悉的日常逐漸褪色。
清楚地感覺到自己正穿越扭曲的時間與畫面，在那裡，我遇見另一個你，比記憶中更加鮮明，也遇見另一個我，比想象中更加勇敢，
一起往規則改變的未知前進。睜眼的那一刻便越過了黑夜。

———

大象體操2021年度單曲《穿過夜晚》，創作始於與日本樂團toe在疫情期間舉辦的線上合作演出。
與toe的團員討論後，取樣其經典曲目 “Two Moons” 的木吉他音軌重新創作，為探討夢境作為主題的下一張專輯揭開序幕。

● 演出日期：2021 年 10 月 10 日（日）
● 演出時間：19:30進場 20:00演出
● 演出地點：台北 海邊的卡夫卡（台北市中正區羅斯福路三段244巷2號2樓）
● 演出者：大象體操
● 票價：預售票700元 / 現場票800元`
    }
  },
  components: {
    MessageBoard
  }
}
</script>

<style scoped>
.range {
  /* border: 1px solid red; */
  padding: 60px 40px 10px 40px;
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
  background-image: url("../assets/images/active/ac001.jpg");
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
  margin: 0 0 0 5px;
}
.share_join{
  display: flex;
  justify-content: flex-end;
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
  margin: 40px 15px 0 15px;
}
h4{
  font-size: 22px;
  font-weight: 500;
  color: #383838;
  margin: 0 0 10px 0;
}
.content{
  /* border:1px solid red; */
  margin: 5px 0 0 0;
  white-space: pre;
}
  .message{
        margin: 50px 0 0 0;
  }
</style>
