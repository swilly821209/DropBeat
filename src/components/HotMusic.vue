<template>
    <div class="div_hotMusic">
      <div class="div_music_container">
        <div class="div_one_four">
          <div class="div_music_info" v-for="(item,index) in 4" :key="item">
            <span class="span_num">{{index+1}}</span>
            <span class="span_status">{{statusUp}}</span>
            <div class="div_cover">
              <img class="img_album" src="https://picsum.photos/900">
              <div class="div_curtain"></div>
            </div>
            <div class="div_info_fun">
              <div class="div_name_info">
                <span class="span_title">在這座城市遺失了你</span>
                <span class="span_author">告五人</span>
              </div>
              <div class="div_fun">
                <span class="share"></span>
                <span class="add"></span>
                <span class="like">789</span>
              </div>
            </div>
          </div>
        </div>
        <div class="div_five_nine">
          <div class="div_music_info" v-for="(item,index) in 5" :key="item">
            <span class="span_num">{{index+5}}</span>
            <span class="span_status">{{statusDown}}</span>
            <div class="div_cover">
              <img class="img_album" src="https://picsum.photos/200">
              <div class="div_curtain"></div>
            </div>
            <div class="div_info_fun">
              <div class="div_name_info">
                <span class="span_title">在這座城市遺失了你</span>
                <span class="span_author">告五人</span>
              </div>
              <div class="div_fun">
                <span class="share"></span>
                <span class="add"></span>
                <span class="like">789</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      hot: 'hot',
      statusUp: '▲',
      statusDown: '▼'
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .div_hotMusic {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 80px 20px;
    color: #222222;
  }
  /* 音樂清單 */
  .div_music_container{
    width: 100%;
    display: flex;
  }
  .div_one_four{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 20px;
    width: 50%;
  }
  .div_music_info{
    display: flex;
    align-items: center;
    justify-content:flex-start;
    margin: 10px 0;
    cursor: pointer;
  }
  /* hover */
  /* .img_album 變化 */
  .div_music_info:hover .span_title{
    color: #31BDC5;
  }
  .div_music_info:hover .div_fun span{
    background-color: #999999;
    color: white;
  }
  .div_music_info:hover .div_curtain{
    opacity: 1;
  }
  /* 三個icon */
  .div_music_info:hover .share{
    background-image: url("../assets/icon/share_white.svg");
  }
  .div_music_info:hover .add{
    background-image: url("../assets/icon/add_white.svg");
  }
  .div_music_info:hover .like{
    background-image: url("../assets/icon/like_white.svg");
  }
  .span_num{
    font-size: 20px;
    font-weight: bolder;
    color: #222222;
  }
  .span_status{
    margin: 0 5px;
    color: #31BDC5;
  }
  /* ablum圖大小 */
  .div_cover{
    position: relative;
    display: flex;
    width: 150px;
  }
  .img_album{
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 10px;
  }
  .div_curtain{
    position:absolute;
    top: 20%;
    left: 15%;
    width: 50px;
    height: 50px;
    background-image: url("../assets/icon/play.svg");
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    transition: all .5s;
    opacity: 0;
  }
  .div_info_fun{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .div_name_info{
    display: flex;
    flex-direction: column;
  }
  .div_fun{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .div_fun span{
    margin: 3px;
    color: #999999;
    padding-right: 4px;
    border: 1px solid #999999;
    border-radius: 20px;
    font-size: 12px;
  }
  /* icon設定 */
  .share{
    background-image: url("../assets/icon/share.svg");
    background-position-y: center;
    background-position-x: 3px;
    background-repeat: no-repeat;
    background-size: 12px;
    width: 20px;
    height: 20px;
  }
  .add{
    background-image: url("../assets/icon/add.svg");
    background-position-y: center;
    background-position-x: 3px;
    background-repeat: no-repeat;
    background-size: 12px;
    width: 20px;
    height: 20px;
  }
  .like{
    background-image: url("../assets/icon/like.svg");
    background-position-y: center;
    background-position-x: 4px;
    background-repeat: no-repeat;
    background-size: 14px;
    width: 50px;
    height: 20px;
    text-align: end;
  }
  /* 小icon */
  .div_fun span img{
    width: 12px;
    height: 12px;
  }
  /* 右半邊 */
  .div_five_nine{
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  .div_five_nine .span_status{
    color: #999999;
  }
  /* 控制第一個album */
  .div_one_four .div_music_info:nth-child(1) .div_cover{
    width: 350px;
  }
  .div_one_four .div_music_info:nth-child(1) .img_album{
    width: 150px;
    height: 150px;
  }
  .div_one_four .div_music_info:nth-child(1) .div_curtain{
    left: 18%;
    width: 90px;
    height: 90px;
  }
  .div_one_four .div_music_info:nth-child(1) .div_info_fun{
    flex-direction: column;
  }
  .div_one_four .div_music_info:nth-child(1) .div_info_fun .div_fun{
    align-self: flex-end;
  }
  .div_one_four .div_music_info:nth-child(1) .like{
    background-image: url("../assets/icon/like_red.svg");
    color: #FF9D83;
  }
</style>
