<template>
  <div class="container w-full sm:flex hidden">
      <span class="cursor-pointer transition translate hover:-translate-x-0.5" @click="leftFun">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="40" viewBox="0 0 25 40">
              <path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(0 40) rotate(-90)" :fill="arrLeftColor"/>
          </svg>
      </span>
          <div class="carousel_outer" ref="outer">
              <div class="carousel_inner" ref="inner">
                  <artist-item
                      class="art"
                      :style="itemWidth"
                      listen
                      :relative='"relative"'
                      v-for="(item, index) in artistList"
                      @click="playFun(index)"
                      :width="'w160'"
                      :play="item.play"
                      :img="item.img"
                      :author="item.author"
                      :more="item.more"
                      :key="item.author">
                  </artist-item>
              </div>
          </div>
      <span class="cursor-pointer transition translate hover:translate-x-0.5" @click="rightFun">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="40" viewBox="0 0 25 40">
              <path id="next" d="M17.657,2.928a3,3,0,0,1,4.685,0L36.1,20.126A3,3,0,0,1,33.758,25H6.242A3,3,0,0,1,3.9,20.126Z" transform="translate(25) rotate(90)" :fill="arrRightColor"/>
          </svg>
      </span>
  </div>
  <swiper :navigation="{nextEl: '.nextArrow', prevEl: '.preArrow'}" :slidesPerView="3" class="carouselAll h-48 my-5 sm:hidden block">
    <div class="pre_next absolute top-40 flex justify-center items-center w-full space-x-5">
     <svg xmlns="http://www.w3.org/2000/svg" class="preIconArtist preArrow text-gray-light cursor-pointer" width="15" height="23.077" viewBox="0 0 15 23.077"><path id="next" d="M9.953,2.061a2,2,0,0,1,3.17,0l7.477,9.72A2,2,0,0,1,19.015,15H4.062a2,2,0,0,1-1.585-3.219Z" transform="translate(0 23.077) rotate(-90)" fill="currentColor"/></svg>
     <svg xmlns="http://www.w3.org/2000/svg" class="nextIconArtist nextArrow text-gray-light cursor-pointer" width="13.72" height="18.961" viewBox="0 0 13.72 18.961"><path id="next" d="M9.953,2.061a2,2,0,0,1,3.17,0l7.477,9.72A2,2,0,0,1,19.015,15H4.062a2,2,0,0,1-1.585-3.219Z" transform="translate(15 -2.058) rotate(90)" fill="currentColor"/></svg>
    </div>
    <swiper-slide  v-for="(item, index) in artistList"  :key="item.author " class="aa">
      <artist-item
          class="art"
          listen
          :relative='"relative"'
          @click="playFun(index)"
          :width="'w20'"
          :play="item.play"
          :img="item.img"
          :author="item.author"
          :more="item.more">
      </artist-item>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation } from 'swiper/core'

import ArtistItem from '../components/ArtistItem.vue'

SwiperCore.use([Navigation])
export default {
  props: ['allArtist'],
  components: {
    Swiper,
    SwiperSlide,
    ArtistItem
  },
  data () {
    return {
      artistList: [
        { play: false, img: 'https://images.unsplash.com/photo-1579649554660-463ed1d72831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=635&q=80', author: '告零人', more: '#' },
        { play: false, img: 'https://picsum.photos/200', author: '告一人', more: '#' },
        { play: false, img: 'https://picsum.photos/300', author: '告二人', more: '#' },
        { play: false, img: 'https://picsum.photos/400', author: '告三人', more: '#' },
        { play: false, img: 'https://picsum.photos/500', author: '告四人', more: '#' },
        { play: false, img: 'https://picsum.photos/600', author: '告五人', more: '#' },
        { play: false, img: 'https://picsum.photos/400', author: '告六人', more: '#' },
        { play: false, img: 'https://picsum.photos/500', author: '告七人', more: '#' },
        { play: false, img: 'https://picsum.photos/600', author: '告八人', more: '#' },
        { play: false, img: 'https://picsum.photos/100', author: '告零人', more: '#' },
        { play: false, img: 'https://picsum.photos/200', author: '告一人', more: '#' },
        { play: false, img: 'https://picsum.photos/300', author: '告二人', more: '#' },
        { play: false, img: 'https://picsum.photos/400', author: '告三人', more: '#' },
        { play: false, img: 'https://picsum.photos/500', author: '告四人', more: '#' },
        { play: false, img: 'https://picsum.photos/600', author: '告五人', more: '#' },
        { play: false, img: 'https://picsum.photos/400', author: '告六人', more: '#' },
        { play: false, img: 'https://picsum.photos/500', author: '告七人', more: '#' },
        { play: false, img: 'https://picsum.photos/600', author: '告八人', more: '#' }
      ],
      position: 0,
      arrLeftColor: '#ededed',
      arrRightColor: '#b5b5b5',
      itemWidth: 'width:150px;',
      marginWidth: 170,
      item: 6,
      window: {
        width: 0,
        height: 0
      }
    }
  },
  // computed: {
  //   artistList () {
  //     return this.allArtist
  //   }
  // },
  methods: {
    playFun (index) {
      if (this.artistList[index].play === false) {
        this.artistList.forEach(item => { item.play = false })
      }
      this.artistList[index].play = !this.artistList[index].play
    },
    leftFun () {
      if (this.position < 0) {
        this.position += this.marginWidth
        this.$refs.inner.style.transform = `translateX(${this.position}px)`
        const turnRight = -((this.artistList.length - this.item) * this.marginWidth)
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
      const turnRight = -((this.artistList.length - this.item) * this.marginWidth)
      if (this.position > turnRight) {
        this.position -= this.marginWidth
        this.$refs.inner.style.transform = `translateX(${this.position}px)`
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
    handleResize () {
      this.window.width = window.innerWidth
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  unmounted () {
    window.removeEventListener('resize', this.handleResize)
  },
  updated () {
    const screenWidth = this.window.width
    if (screenWidth > 1421) {
      this.item = 6
    } else if (screenWidth < 1420 && screenWidth > 1249) {
      this.item = 5
    } else if (screenWidth < 1249 && screenWidth > 1070) {
      this.item = 4
    } else if (screenWidth < 1070 && screenWidth > 900) {
      this.item = 3
    }
  }
}
</script>

<style scoped>
    .container{
      /* border:1px solid red; */
      align-items: center;
        justify-content: center;
        margin: 10px 0 40px 0;
    }
    .carousel_outer{
        position: relative;
        width: 1020px;
        height: 250px;
        margin: 0 10px;
        overflow: hidden;
    }
    .carousel_inner{
        display: inline-flex;
        top:10px;
        position: absolute;
        transition: all .5s;
        height: 240px;
    }
    .art{
      margin: 0 10px;
    }
    .swiper-button-disabled {
     @apply text-gray-default
   }
    @media screen and (max-width: 1420px) {
      .carousel_outer{
        width: 850px;
      }
    }
    @media screen and (max-width: 1290px) {
      .carousel_outer{
        width: 680px;
      }
    }
    @media screen and (max-width: 1080px) {
      .carousel_outer{
        width: 510px;
      }
    }
</style>
