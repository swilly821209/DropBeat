<template>
    <div class="div_hotMusic">
      <div class="div_music_container">
        <div class="div_one_four">
          <div class="div_music_info" v-for="(item,index) in hotMusicListLeft" :key="item">
            <span class="span_num">
              <span v-if="item.play === false">{{index+1}}</span>
              <!-- <svg v-else xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="28.571" viewBox="0 0 25 28.571">
                <defs>
                  <linearGradient id="linear-gradient" x1="0.118" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
                    <stop offset="0" stop-color="#31bdc5"/>
                    <stop offset="1" stop-color="#a6ff00"/>
                  </linearGradient>
                </defs>
                <path id="Icon_open-audio-spectrum" data-name="Icon open-audio-spectrum" d="M14.286,0V28.571h3.571V0ZM7.143,3.571V25h3.571V3.571ZM21.429,7.143V21.429H25V7.143ZM0,10.714v7.143H3.571V10.714Z" fill="url(#linear-gradient)"/>
              </svg> -->
              <audio-icon v-else class="audio"></audio-icon>
            </span>
            <span :class="item.statusColor">{{item.status}}</span>
            <div class="div_cover" @click="statusFun(index)">
              <img class="img_album" :src="item.img">
              <div class="div_certain_container">
                <div class="div_black"></div>
                <div v-if="item.play === true" class="div_black02"></div>
                <div v-if="item.play === false" class="div_curtain"></div>
                <div v-else class="div_curtains"></div>
              </div>
            </div>
            <div class="div_info_fun">
              <div class="div_name_info">
                <span class="hover:text-blue-light cursor-pointer" :class="item.play ? 'span_title_play':'span_title'" >{{item.title}}</span>
                <span class="span_author hover:underline cursor-pointer">{{item.author}}</span>
              </div>
              <div class="div_fun">
                <span class="share"></span>
                <span class="add"></span>
                <span class="like" @click="toggleHeart(index)" :style="item.numColor">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14.627" height="12.799" viewBox="0 0 14.627 12.799">
                    <path id="Icon_awesome-heart" data-name="Icon awesome-heart" d="M13.206,3.123a3.907,3.907,0,0,0-5.331.389l-.563.58-.563-.58a3.906,3.906,0,0,0-5.331-.389,4.1,4.1,0,0,0-.283,5.939L6.664,14.77a.9.9,0,0,0,1.294,0l5.528-5.708a4.1,4.1,0,0,0-.28-5.939Z" transform="translate(0.001 -2.248)" :fill="item.heart"/>
                  </svg>
                  {{item.likes}}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="div_five_nine">
          <div class="div_music_info" v-for="(item,index) in hotMusicListRight" :key="item">
            <span class="span_num" style="fontSize:30px;color:#7b7b7b">
              <span v-if="item.play === false">{{index+5}}</span>
              <!-- <svg v-else xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="28.571" viewBox="0 0 25 28.571">
                <defs>
                  <linearGradient id="linear-gradient" x1="0.118" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
                    <stop offset="0" stop-color="#31bdc5"/>
                    <stop offset="1" stop-color="#a6ff00"/>
                  </linearGradient>
                </defs>
                <path id="Icon_open-audio-spectrum" data-name="Icon open-audio-spectrum" d="M14.286,0V28.571h3.571V0ZM7.143,3.571V25h3.571V3.571ZM21.429,7.143V21.429H25V7.143ZM0,10.714v7.143H3.571V10.714Z" fill="url(#linear-gradient)"/>
              </svg> -->
              <audio-icon v-else class="audio"></audio-icon>
            </span>
            <span :class="item.statusColor">{{item.status}}</span>
            <div class="div_cover" @click="statusFuns(index)">
              <img class="img_album" :src="item.img">
              <div class="div_certain_container">
                <div class="div_black"></div>
                <div v-if="item.play === true" class="div_black02"></div>
                <div v-if="item.play === false" class="div_curtain"></div>
                <div v-else class="div_curtains"></div>
              </div>
            </div>
            <div class="div_info_fun">
              <div class="div_name_info">
                <span class="hover:text-blue-light cursor-pointer" :class="item.play ? 'span_title_play':'span_title'" >{{item.title}}</span>
                <span class="span_author hover:underline cursor-pointer">{{item.author}}</span>
              </div>
              <div class="div_fun">
                <span class="share"></span>
                <span class="add"></span>
                <span class="like" @click="toggleHearts(index)" :style="item.numColor" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14.627" height="12.799" viewBox="0 0 14.627 12.799">
                    <path id="Icon_awesome-heart" data-name="Icon awesome-heart" d="M13.206,3.123a3.907,3.907,0,0,0-5.331.389l-.563.58-.563-.58a3.906,3.906,0,0,0-5.331-.389,4.1,4.1,0,0,0-.283,5.939L6.664,14.77a.9.9,0,0,0,1.294,0l5.528-5.708a4.1,4.1,0,0,0-.28-5.939Z" transform="translate(0.001 -2.248)" :fill="item.heart" />
                  </svg>
                  <p>{{item.likes}}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import AudioIcon from './AudioIcon.vue'
export default {
  components: {
    AudioIcon
  },
  async created () {
    const form = new FormData()
    form.append('range', '最多播放')
    const fetchPlayrange = await fetch('http://localhost/DropbeatBackend/NewMusic.php', {
      method: 'POST',
      body: form
    })
    const fetchData = await fetchPlayrange.json()
    for (let i = 0; i < 4; i++) {
      console.log(fetchData.music_photo)
      this.hotMusicListLeft.push({
        play: false,
        status: '－',
        statusColor: 'gray',
        img: fetchData[i].music_photo,
        title: fetchData[i].music_name,
        author: fetchData[i].musician_name,
        likes: fetchData[i].likeNum,
        heart: '#b5b5b5',
        numColor: 'color:#FF9D83'
      })
    }
    for (let i = 4; i < 9; i++) {
      console.log(fetchData.music_photo)
      this.hotMusicListRight.push({
        play: false,
        status: '－',
        statusColor: 'gray',
        img: fetchData[i].music_photo,
        title: fetchData[i].music_name,
        author: fetchData[i].musician_name,
        likes: fetchData[i].likeNum,
        heart: '#b5b5b5',
        numColor: 'color:#FF9D83'
      })
    }
  },
  data () {
    return {
      hotMusicListLeft: [
        // { play: false, status: '－', statusColor: 'gray', img: 'https://picsum.photos/100', title: '在這座城市遺失了你', author: '告五人', likes: '237', heart: '#FF9D83', numColor: 'color:#FF9D83;' },
        // { play: false, status: '▲', statusColor: 'blue', img: 'https://picsum.photos/200', title: '在這座城市遺失了你', author: '告五人', likes: '552', heart: '#b5b5b5', numColor: 'color:#b5b5b5;' },
        // { play: false, status: '▲', statusColor: 'blue', img: 'https://picsum.photos/300', title: '在這座城市遺失了你', author: '告五人', likes: '337', heart: '#b5b5b5', numColor: 'color:#b5b5b5;' },
        // { play: false, status: '▲', statusColor: 'blue', img: 'https://picsum.photos/400', title: '在這座城市遺失了你', author: '告五人', likes: '855', heart: '#FF9D83', numColor: 'color:#FF9D83;' }
      ],
      hotMusicListRight: [
        // { play: false, status: '▼', statusColor: 'gray', img: 'https://picsum.photos/500', title: '在這座城市遺失了你', author: '告五人', likes: '234', heart: '#b5b5b5', numColor: 'color:#b5b5b5;' },
        // { play: false, status: '▼', statusColor: 'gray', img: 'https://picsum.photos/600', title: '在這座城市遺失了你', author: '告五人', likes: '817', heart: '#b5b5b5', numColor: 'color:#b5b5b5;' },
        // { play: false, status: '▲', statusColor: 'blue', img: 'https://picsum.photos/700', title: '在這座城市遺失了你', author: '告五人', likes: '427', heart: '#b5b5b5', numColor: 'color:#b5b5b5;' },
        // { play: false, status: '▼', statusColor: 'gray', img: 'https://picsum.photos/800', title: '在這座城市遺失了你', author: '告五人', likes: '873', heart: '#b5b5b5', numColor: 'color:#b5b5b5;' },
        // { play: false, status: '▼', statusColor: 'gray', img: 'https://picsum.photos/900', title: '在這座城市遺失了你', author: '告五人', likes: '822', heart: '#b5b5b5', numColor: 'color:#b5b5b5;' }
      ]
    }
  },
  methods: {
    // 愛心、文字顏色控制
    toggleHeart (index) {
      if (this.hotMusicListLeft[index].heart === '#b5b5b5') {
        this.hotMusicListLeft[index].heart = '#FF9D83'
        this.hotMusicListLeft[index].numColor = 'color:#FF9D83;'
      } else {
        this.hotMusicListLeft[index].heart = '#b5b5b5'
        this.hotMusicListLeft[index].numColor = 'color:#b5b5b5;'
      }
    },
    toggleHearts (index) {
      if (this.hotMusicListRight[index].heart === '#b5b5b5') {
        this.hotMusicListRight[index].heart = '#FF9D83'
        this.hotMusicListRight[index].numColor = 'color:#FF9D83;'
      } else {
        this.hotMusicListRight[index].heart = '#b5b5b5'
        this.hotMusicListRight[index].numColor = 'color:#b5b5b5;'
      }
    },
    // 播放符號開關
    statusFun (index) {
      if (this.hotMusicListLeft[index].play === false) {
        this.hotMusicListLeft.forEach(item => { item.play = false })
        this.hotMusicListRight.forEach(item => { item.play = false })
      }
      this.hotMusicListLeft[index].play = !this.hotMusicListLeft[index].play
    },
    statusFuns (index) {
      if (this.hotMusicListRight[index].play === false) {
        this.hotMusicListLeft.forEach(item => { item.play = false })
        this.hotMusicListRight.forEach(item => { item.play = false })
      }
      this.hotMusicListRight[index].play = !this.hotMusicListRight[index].play
    }
  }
}
</script>

<style scoped>
  .div_hotMusic {
    display: flex;
    justify-content: center;
    width: 100%;
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
    justify-content: flex-end;
    margin-right: 60px;
    width: 50%;
  }
  .div_music_info{
    display: flex;
    align-items: center;
    justify-content:flex-start;
    margin: 10px 0;
    padding-bottom: 20px;
    border-bottom: 1px solid #EDEDED;
  }
  .span_num{
    width:35px;
    font-size: 30px;
    font-weight: 600;
    color: #7b7b7b;
  }
  .audio{
    margin: 0;
  }
  .span_title{
    font-size: 16px;
    color:#383838;
  }
  .span_title_play{
    font-size: 16px;
    color:#31BDC5;
  }
  .span_author{
    font-size: 14px;
    color:#7b7b7b;
  }
  /* hover */
  /* .img_album 變化 */
  /* .div_music_info .span_title:hover{
    color: #31BDC5;
  } */

  /* 控制播放符號動畫 */
  .span_num svg{
    animation: songmove 2s linear infinite backwards;
  }
  @keyframes songmove{
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-2px);
    }
    50% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(2px);
    }
    100% {
      transform: translateY(0);
    }
  }

  /* 上昇下降情況 */
  .gray{
    margin: 5px 12px 0 5px;
    color: #B5B5B5;
  }
  .blue{
    margin: 5px 12px 0 5px;
    color: #31BDC5;
  }
  /* ablum圖大小 */
  .div_cover{
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-shrink: 0;
    cursor: pointer;
  }
  .img_album{
    position: relative;
    width: 80px;
    height: 80px;
    /* width: 110px; */
    border-radius: 10px;
  }
  .div_certain_container{
    display: flex;
    justify-content: center;
    align-items: center;
    position:absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  .div_black{
    background: #383838;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  .div_music_info:hover .div_black{
    opacity: .65;
  }
  .div_black02{
    background: #383838;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.65;
  }
  .div_curtain{
    width: 40px;
    height: 40px;
    background-image: url("../assets/icon/play_fff.svg");
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    transition: all .5s;
    opacity: 0;
  }
  .div_curtains{
    width: 50px;
    height: 50px;
    background-image: url("../assets/icon/pause_fff.svg");
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    transition: all .5s;
    position: relative;
    z-index: 10;
  }
  /* hover */
  /* .img_album 變化 */
  .div_music_info:hover .div_curtain{
    width: 60px;
    height: 60px;
    opacity: .9;
  }
  .div_music_info:hover .div_curtains{
    width: 60px;
    height: 60px;
    opacity: .9;
  }

  .div_info_fun{
    margin-left: 10px;
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
  /* icon設定 */
  .share, .add{
    border: 2px solid #ededed;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin-right: 8px;
    background-repeat: no-repeat;
    cursor: pointer;
  }
  .share{
    background-image: url("../assets/icon/share_b5.svg");
  }
  .add{
    background-image: url("../assets/icon/add_b5.svg");
  }
  .share:hover{
    border: 2px solid #b5b5b5;
    background-color: #b5b5b5;
    background-image: url("../assets/icon/share_fff.svg");
  }
  .add:hover{
    border: 2px solid #b5b5b5;
    background-color: #b5b5b5;
    background-image: url("../assets/icon/add_fff.svg");
  }
  .like{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    font-size: 12px;
    border: 2px solid #ededed;
    border-radius: 20px;
    height: 25px;
    cursor: pointer;
  }
  /* 調整like位置 */
  svg{
    margin: 1px 3px 0 0;
  }
  /* #numColor{
    color: #FF9D83;
  } */

  /* 右半邊 */
  .div_five_nine{
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  /* 控制第一個album */
  .div_one_four .div_music_info:nth-child(1) .span_num{
    width: 48px;
  }
  .div_one_four .div_music_info:nth-child(1) .img_album{
    width: 180px;
    height: 180px;
    /* width: 320px; */
  }
  .div_one_four .div_music_info:nth-child(1) .div_curtain {
    width: 50px;
    height: 50px;
  }
  .div_one_four .div_music_info:nth-child(1) .div_curtains {
    width: 80px;
    height: 80px;
  }
  .div_one_four .div_music_info:nth-child(1):hover .div_curtain {
    width: 100px;
    height: 100px;
  }
  .div_one_four .div_music_info:nth-child(1):hover .div_curtains {
    width: 100px;
    height: 100px;
  }
  .div_one_four .div_music_info:nth-child(1) .div_info_fun{
    flex-direction: column;
  }
  .div_one_four .div_music_info:nth-child(1) .div_info_fun .div_fun{
    margin-top: 5px;
    align-self: flex-end;
  }
  /* 底線 */
  .div_music_info:last-child{
    border-bottom: none;
  }
  /* RWD */
  /* 小原圖 + cover */
  /* .img_album{
    position: relative;
    width: 110px;
    border-radius: 10px;
  } */
  /* 大原圖 + cover */
  /* .div_one_four .div_music_info:nth-child(1) .img_album{
    width: 320px;
  } */
  /* @media screen and (max-width: 1420px) {
    .div_one_four .div_music_info:nth-child(1) .img_album{
      width: 380px;
    }
  } */
</style>
