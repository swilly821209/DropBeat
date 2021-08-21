<template>
<base-dialog :show="showDialog">
  <share-social-media @close-social="closeSocialDialog" :imgSrc="shareImg" :music="shareMusic" :singer="shareSinger" :url="shareUrl"></share-social-media>
</base-dialog>
<div @mouseleave="autoCarousel" @mouseenter="cancelCarousel" class="w-full m-auto min-w-[1000px] lg:min-w-[800px]">
      <div class="relative flex justify-center h-80">
        <div class="carousel-item" :class="classItems[0]" @click="changeCarousel(3)" :style="`background-image: url(${carouselActivity[0].Image})`">
            <div class="p-2 px-10 h-1/3 bg-black-backdrop  mt-48 bg-opacity-80">
              <h3 @click="linkTo(0)" class="text-white hover:underline">{{carouselActivity[0].title}}</h3>
              <p class="text-white text-sm">{{carouselActivity[0].date}} - {{carouselActivity[0].day}} - {{carouselActivity[0].location}}</p>
              <div class="mt-2 flex justify-between items-center">
                <div class="space-x-2">
                  <span class=" rounded-full border-2 border-gray-dark hover:border-white text-white hover:text-gray-dark px-3 py-1 hover:bg-white text-sm " >{{ carouselActivity[0].singers }}</span>
                </div>
                <div class="share_join">
                  <div class="share" @click="shareSocial(carouselActivity[0].Image, carouselActivity[0].title, carouselActivity[0].singers, carouselActivity[0].shareUrl)"></div>
                  <button
                  class="join"
                  :class="{ clickjoin: active }"
                  @click="activeFun"
                  >{{active ? '參加' : '想參加'}}</button>
                </div>
              </div>
            </div>
        </div>
        <div class="carousel-item" :class="classItems[1]" @click="changeCarousel(2)" :style="`background-image: url(${carouselActivity[1].Image})`">
          <div class="p-2 px-10 h-1/3 bg-black-backdrop mt-48 bg-opacity-80">
              <h3 @click="linkTo(1)" class="text-white hover:underline">{{carouselActivity[1].title}}</h3>
              <p class="text-white text-sm">{{carouselActivity[1].date}} - {{carouselActivity[1].day}} - {{carouselActivity[1].location}}</p>
              <div class="mt-2 flex justify-between items-center">
                <div class="space-x-2">
                  <span class=" rounded-full border-2 border-gray-dark hover:border-white text-white hover:text-gray-dark px-3 py-1 hover:bg-white text-sm " >{{ carouselActivity[1].singers }}</span>
                </div>
                <div class="share_join">
                  <div class="share" @click="shareSocial(carouselActivity[1].Image, carouselActivity[1].title, carouselActivity[1].singers, carouselActivity[1].shareUrl)"></div>
                  <button
                  class="join"
                  :class="{ clickjoin: active }"
                  @click="activeFun"
                  >{{active ? '參加' : '想參加'}}</button>
                </div>
              </div>
            </div>
        </div>
        <div class="carousel-item" :class="classItems[2]" @click="changeCarousel(1)" :style="`background-image: url(${carouselActivity[2].Image})`">
            <div class="p-2 px-10 h-1/3 bg-black-backdrop mt-48 bg-opacity-80">
              <h3 @click="linkTo(2)" class="text-white hover:underline">{{carouselActivity[2].title}}</h3>
              <p class="text-white text-sm">{{carouselActivity[2].date}} - {{carouselActivity[2].day}} - {{carouselActivity[2].location}}</p>
              <div class="mt-2 flex justify-between items-center">
                <div class="space-x-2">
                  <span class=" rounded-full border-2 border-gray-dark hover:border-white text-white hover:text-gray-dark px-3 py-1 hover:bg-white text-sm " >{{ carouselActivity[2].singers }}</span>
                </div>
                <div class="share_join">
                  <div class="share" @click="shareSocial(carouselActivity[2].Image, carouselActivity[2].title, carouselActivity[2].singers, carouselActivity[2].shareUrl)"></div>
                  <button
                  class="join"
                  :class="{ clickjoin: active }"
                  @click="activeFun"
                  >{{active ? '參加' : '想參加'}}</button>
                </div>
              </div>
            </div>
        </div>
        <div class="carousel-item" :class="classItems[3]" @click="changeCarousel(5)" :style="`background-image: url(${carouselActivity[3].Image})`">
            <div class="p-2 px-10 h-1/3 bg-black-backdrop mt-48 bg-opacity-80">
              <h3 @click="linkTo(3)" class="text-white hover:underline">{{carouselActivity[3].title}}</h3>
              <p class="text-white text-sm">{{carouselActivity[3].date}} - {{carouselActivity[3].day}} - {{carouselActivity[3].location}}</p>
              <div class="mt-2 flex justify-between items-center">
                <div class="space-x-2">
                  <span class=" rounded-full border-2 border-gray-dark hover:border-white text-white hover:text-gray-dark px-3 py-1 hover:bg-white text-sm " >{{ carouselActivity[3].singers }}</span>
                </div>
                <div class="share_join">
                  <div class="share" @click="shareSocial(carouselActivity[3].Image, carouselActivity[3].title, carouselActivity[3].singers, carouselActivity[3].shareUrl)"></div>
                  <button
                  class="join"
                  :class="{ clickjoin: active }"
                  @click="activeFun"
                  >{{active ? '參加' : '想參加'}}</button>
                </div>
              </div>
            </div>
        </div>
        <div class="carousel-item" :class="classItems[4]" @click="changeCarousel(4)" :style="`background-image: url(${carouselActivity[4].Image})`">
            <div class="p-2 px-10 h-1/3 bg-black-backdrop mt-48 bg-opacity-80">
              <h3 @click="linkTo(4)" class="text-white hover:underline">{{carouselActivity[4].title}}</h3>
              <p class="text-white text-sm">{{carouselActivity[4].date}} - {{carouselActivity[4].day}} - {{carouselActivity[4].location}}</p>
              <div class="mt-2 flex justify-between items-center">
                <div class="space-x-2">
                  <span class=" rounded-full border-2 border-gray-dark hover:border-white text-white hover:text-gray-dark px-3 py-1 hover:bg-white text-sm " >{{ carouselActivity[4].singers }}</span>
                </div>
                <div class="share_join">
                  <div class="share" @click="shareSocial(carouselActivity[4].Image, carouselActivity[4].title, carouselActivity[4].singers, carouselActivity[4].shareUrl)"></div>
                  <button
                  class="join"
                  :class="{ clickjoin: active }"
                  @click="activeFun"
                  >{{active ? '參加' : '想參加'}}</button>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div class=" w-1/6 m-auto flex justify-around mt-2 pointAll">
        <div class="point" v-for="(n, index) of 5" :key="n" :class="{activeing: currentItem == index + 1}" @click="changeCarousel(index + 1)"></div>
      </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      active: false,
      shareUrl: '',
      shareImg: '',
      shareMusic: '',
      shareSinger: '',
      showDialog: false,
      carouselActivity: [
        {
          Image: 'https://picsum.photos/id/10/800/400',
          title: '',
          date: '',
          location: '',
          singers: ''
        },
        {
          Image: 'https://picsum.photos/id/10/800/400',
          title: '',
          date: '',
          location: '',
          singers: ''
        },
        {
          Image: 'https://picsum.photos/id/10/800/400',
          title: '',
          date: '',
          location: '',
          singers: ''
        },
        {
          Image: 'https://picsum.photos/id/10/800/400',
          title: '',
          date: '',
          location: '',
          singers: ''
        },
        {
          Image: 'https://picsum.photos/id/10/800/400',
          title: '',
          date: '',
          location: '',
          singers: ''
        }
      ],
      classItems: ['item1', 'item2', 'item3', 'item4', 'item5'],
      timeId: null,
      currentItem: 1
    }
  },
  methods: {
    activeFun () {
      this.active = !this.active
    },
    linkTo (index) {
      this.$router.replace(this.carouselActivity[index].shareUrls)
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
    changeCarousel (num) {
      switch (num) {
        case 1 :
          this.classItems = ['item1', 'item2', 'item3', 'item4', 'item5']
          this.currentItem = 1
          break
        case 2 :
          this.classItems = ['item2', 'item3', 'item4', 'item5', 'item1']
          this.currentItem = 2
          break
        case 3 :
          this.classItems = ['item3', 'item4', 'item5', 'item1', 'item2']
          this.currentItem = 3
          break
        case 4 :
          this.classItems = ['item4', 'item5', 'item1', 'item2', 'item3']
          this.currentItem = 4
          break
        case 5 :
          this.classItems = ['item5', 'item1', 'item2', 'item3', 'item4']
          this.currentItem = 5
          break
      }
    },
    autoCarousel () {
      const that = this
      that.timeId = setInterval(function () {
        that.currentItem++
        if (that.currentItem === 6) {
          that.currentItem = 1
        }
        that.changeCarousel(that.currentItem)
      }, 5000)
    },
    cancelCarousel () {
      clearInterval(this.timeId)
    }
  },
  async created () {
    const response = await fetch('http://localhost/DropBeatBackend/carousel_component_get.php')
    const responseData = await response.json()
    responseData.forEach((item, index) => {
      this.carouselActivity[index].Image = item.activity_photo
      this.carouselActivity[index].title = item.activity_name
      this.carouselActivity[index].date = item.activity_date
      const week = new Date(item.activity_date).getDay()
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
      this.carouselActivity[index].day = day
      this.carouselActivity[index].location = item.activity_area
      this.carouselActivity[index].singers = item.account
      if (this.$route.path === '/') {
        this.carouselActivity[index].shareUrl = `${window.location.href}Active/${item.activity_id}`
      } else {
        this.carouselActivity[index].shareUrl = `${window.location.href}/${item.activity_id}`
      }
      this.carouselActivity[index].shareUrls = `/Active/${item.activity_id}`
    })
  }
}
</script>

<style lang="postcss" scoped>
h3{
  font-size: 20px;
  margin:0 0 2px 0;
}
.share_join{
  display: flex;
  justify-content: flex-end;
  margin: 0;
}
.share{
    border: 2px solid #7b7b7b;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin-right: 8px;
    background-image: url("../assets/icon/share_fff.svg");
    background-repeat: no-repeat;
    cursor: pointer;
}
.share:hover{
  border: 2px solid #A6FF00;
  background-color: transparent;
  background-image: url("../assets/icon/share_f00.svg");
}
.join{
  border: 2px solid #7b7b7b;
  border-radius: 20px;
  width: 65px;
  height: 25px;
  font-size:14px;
  color:#ffffff;
  padding: 1px 0 0 0;
}
.join:hover{
  border:2px solid #A6FF00;
  background-color: transparent;
  color:#A6FF00;
}
.clickjoin{
  border:2px solid #7b7b7b;
  color:#ffffff;
  width: 50px;
}
.clickjoin:hover{
  border:2px solid #A6FF00;
  background-color: transparent;
  color:#A6FF00;
}
.pointAll{
  margin-top: 20px;
}
</style>
