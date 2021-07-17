<template>
<music-item
  v-for="item in musicItems"
  :key="item.num"
  :num="item.num"
  :imgSrc="item.img"
  :musicName="item.name"
  :singer="item.singer"
  :totalSecond="item.musicTime"
  :playAccount="item.playAccount"
  :likeAccount="item.likeAccount">
</music-item>
<h1>Find</h1>
<div>This is a Find page...</div>
<audio-icon></audio-icon>
</template>

<script>
import AudioIcon from '../components/AudioIcon.vue'
import MusicItem from '../components/MusicItem.vue'
export default {
  components: {
    MusicItem,
    AudioIcon
  },
  data () {
    return {
      musicItems: [
        {
          num: '01',
          img: 'https://akstatic.streetvoice.com/song_covers/ju/ne/junepan/EKEn4VgY8S9H38jumNiVLA.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          name: '在這座城市遺失了你',
          singer: '告五人',
          musicTime: 287,
          playAccount: 8888888,
          likeAccount: 744
        }
      ]
    }
  }
}
</script>
    <div class="container pt-20">
        <span class="cursor-pointer transition translate hover:-translate-x-0.5" @click="leftFun">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="40" viewBox="0 0 25 40">
                <path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" :fill="arrLeftColor"/>
            </svg>
        </span>
            <div class="carousel_outer">
                <div class="carousel_inner">
                    <artist class="w-40 my-12 mx-4 ml-6"
                        listen
                        :width="'vw-10'"
                        v-for="(item, index) in artistList"
                        @click="playFun(index)"
                        :play="item.play"
                        :img="item.img"
                        :author="item.author"
                        :more="item.more"
                        :key="item.author">
                    </artist>
                </div>
            </div>
        <span class="cursor-pointer transition translate hover:translate-x-0.5" @click="rightFun">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="40" viewBox="0 0 25 40">
                <path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" :fill="arrRightColor"/>
            </svg>
        </span>
    </div>
    <!--淺ededed 深b5b5b5 transform -translate-x-36 w-2/12-->
</template>

<script>
import Artist from '../components/Artist.vue'
export default {
  components: {
    Artist
  },
  data () {
    return {
      artistList: [
        { play: false, img: 'https://picsum.photos/100', author: '告零人', more: '#' },
        { play: false, img: 'https://picsum.photos/200', author: '告一人', more: '#' },
        { play: false, img: 'https://picsum.photos/300', author: '告二人', more: '#' },
        { play: false, img: 'https://picsum.photos/400', author: '告三人', more: '#' },
        { play: false, img: 'https://picsum.photos/500', author: '告四人', more: '#' },
        { play: false, img: 'https://picsum.photos/600', author: '告五人', more: '#' },
        { play: false, img: 'https://picsum.photos/700', author: '告六人', more: '#' },
        { play: false, img: 'https://picsum.photos/800', author: '告七人', more: '#' },
        { play: false, img: 'https://picsum.photos/900', author: '告八人', more: '#' },
        { play: false, img: 'https://picsum.photos/100', author: '告零人', more: '#' },
        { play: false, img: 'https://picsum.photos/200', author: '告一人', more: '#' },
        { play: false, img: 'https://picsum.photos/300', author: '告二人', more: '#' },
        { play: false, img: 'https://picsum.photos/400', author: '告三人', more: '#' },
        { play: false, img: 'https://picsum.photos/500', author: '告四人', more: '#' },
        { play: false, img: 'https://picsum.photos/600', author: '告五人', more: '#' },
        { play: false, img: 'https://picsum.photos/700', author: '告六人', more: '#' },
        { play: false, img: 'https://picsum.photos/800', author: '告七人', more: '#' },
        { play: false, img: 'https://picsum.photos/900', author: '告八人', more: '#' },
        { play: false, img: 'https://picsum.photos/100', author: '告零人', more: '#' },
        { play: false, img: 'https://picsum.photos/200', author: '告一人', more: '#' },
        { play: false, img: 'https://picsum.photos/300', author: '告二人', more: '#' },
        { play: false, img: 'https://picsum.photos/400', author: '告三人', more: '#' },
        { play: false, img: 'https://picsum.photos/500', author: '告四人', more: '#' },
        { play: false, img: 'https://picsum.photos/600', author: '告五人', more: '#' },
        { play: false, img: 'https://picsum.photos/700', author: '告六人', more: '#' },
        { play: false, img: 'https://picsum.photos/800', author: '告七人', more: '#' },
        { play: false, img: 'https://picsum.photos/900', author: '告八人', more: '#' },
        { play: false, img: 'https://picsum.photos/100', author: '告零人', more: '#' },
        { play: false, img: 'https://picsum.photos/200', author: '告一人', more: '#' },
        { play: false, img: 'https://picsum.photos/300', author: '告二人', more: '#' },
        { play: false, img: 'https://picsum.photos/400', author: '告三人', more: '#' },
        { play: false, img: 'https://picsum.photos/500', author: '告四人', more: '#' },
        { play: false, img: 'https://picsum.photos/600', author: '告五人', more: '#' },
        { play: false, img: 'https://picsum.photos/700', author: '告六人', more: '#' },
        { play: false, img: 'https://picsum.photos/800', author: '告七人', more: '#' },
        { play: false, img: 'https://picsum.photos/900', author: '告八人', more: '#' }
      ],
      position: 0,
      arrLeftColor: '#ededed',
      arrRightColor: '#b5b5b5'
    }
  },
  methods: {
    playFun (index) {
      if (this.artistList[index].play === false) {
        this.artistList.forEach(item => { item.play = false })
      }
      this.artistList[index].play = !this.artistList[index].play
    },
    leftFun () {
      if (this.position < 0) {
        this.position += 200
        document.querySelector('.carousel_inner').style.transform = `translateX(${this.position}px)`
        const turnRight = -((this.artistList.length - 6) * 200)
        if (this.position !== 0) {
          this.arrLeftColor = '#b5b5b5'
          if (this.position === turnRight) {
            this.arrRightColor = '#ededed'
          } else {
            this.arrRightColor = '#b5b5b5'
          }
        } else if (this.position === 0) {
          this.arrLeftColor = '#ededed'
        }
      }
    },
    rightFun () {
      const turnRight = -((this.artistList.length - 6) * 200)
      if (this.position > turnRight) {
        this.position -= 200
        document.querySelector('.carousel_inner').style.transform = `translateX(${this.position}px)`
        if (this.position !== 0) {
          this.arrLeftColor = '#b5b5b5'
          if (this.position === turnRight) {
            this.arrRightColor = '#ededed'
          } else {
            this.arrRightColor = '#b5b5b5'
          }
        } else if (this.position === 0) {
          this.arrLeftColor = '#ededed'
        }
      }
    }
  },
  mounted () {
    const indexLength = this.artistList.length
    const carouselWidth = 200 * indexLength
    document.querySelector('.carousel_inner').style.width = `calc(100% + ${carouselWidth}px)`
  }
}
</script>

<style scoped>
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .carousel_outer{
        position: relative;
        margin: 0 10px;
        width: 1200px;
        height: 250px;
        overflow: hidden;
    }
    .carousel_inner{
        display: inline-flex;
        position: absolute;
        transition: all .5s;
        height: 250px;
    }
</style>
