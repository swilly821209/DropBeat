<template>
<div @mouseleave="autoCarousel" @mouseenter="cancelCarousel" class="w-full m-auto min-w-[1000px] lg:min-w-[800px]">
      <div class="relative flex justify-center h-80">
        <div class="carousel-item" :class="classItems[0]" @click="changeCarousel(3)" :style="`background-image: url(${carouselActivity[0].Image})`">
            <div class="p-2 px-10 h-1/3 bg-black-backdrop mt-48 bg-opacity-80">
              <h3 class="text-white hover:underline">{{carouselActivity[0].title}}</h3>
              <p class="text-white text-sm">{{carouselActivity[0].date}} - {{carouselActivity[0].location}}</p>
              <div class="mt-2 flex justify-between items-center">
                <div class="space-x-2">
                  <span class=" rounded-full border-2 border-gray-dark hover:border-white text-white hover:text-gray-dark px-3 py-1 hover:bg-white text-sm " v-for="singer in carouselActivity[0].singers" :key="singer">{{ singer }}</span>
                </div>
                <div class="share_join">
                  <div class="share"></div>
                  <button
                  class="join"
                  :class="{ clickjoin: active }"
                  @click="active = !active"
                  >{{active ? '參加' : '想參加'}}</button>
                </div>
              </div>
            </div>
        </div>
        <div class="carousel-item" :class="classItems[1]" @click="changeCarousel(2)" :style="`background-image: url(${carouselActivity[1].Image})`">
          <div class="p-2 px-10 h-1/3 bg-black-backdrop mt-48 bg-opacity-80">
              <h3 class="text-white hover:underline">{{carouselActivity[1].title}}</h3>
              <p class="text-white text-sm">{{carouselActivity[1].date}} - {{carouselActivity[1].location}}</p>
              <div class="mt-2 flex justify-between items-center">
                <div class="space-x-2">
                  <span class=" rounded-full border-2 border-gray-dark hover:border-white text-white hover:text-gray-dark px-3 py-1 hover:bg-white text-sm " v-for="singer in carouselActivity[1].singers" :key="singer">{{ singer }}</span>
                </div>
                <div class="share_join">
                  <div class="share"></div>
                  <button
                  class="join"
                  :class="{ clickjoin: active }"
                  @click="active = !active"
                  >{{active ? '參加' : '想參加'}}</button>
                </div>
              </div>
            </div>
        </div>
        <div class="carousel-item" :class="classItems[2]" @click="changeCarousel(1)" :style="`background-image: url(${carouselActivity[2].Image})`">
            <div class="p-2 px-10 h-1/3 bg-black-backdrop mt-48 bg-opacity-80">
              <h3 class="text-white hover:underline">{{carouselActivity[2].title}}</h3>
              <p class="text-white text-sm">{{carouselActivity[2].date}} - {{carouselActivity[2].location}}</p>
              <div class="mt-2 flex justify-between items-center">
                <div class="space-x-2">
                  <span class=" rounded-full border-2 border-gray-dark hover:border-white text-white hover:text-gray-dark px-2 py-1 hover:bg-white text-sm" v-for="singer in carouselActivity[2].singers" :key="singer">{{ singer }}</span>
                </div>
                <div class="share_join">
                  <div class="share"></div>
                  <button
                  class="join"
                  :class="{ clickjoin: active }"
                  @click="active = !active"
                  >{{active ? '參加' : '想參加'}}</button>
                </div>
              </div>
            </div>
        </div>
        <div class="carousel-item" :class="classItems[3]" @click="changeCarousel(5)" :style="`background-image: url(${carouselActivity[3].Image})`">
            <div class="p-2 px-10 h-1/3 bg-black-backdrop mt-48 bg-opacity-80">
              <h3 class="text-white hover:underline">{{carouselActivity[3].title}}</h3>
              <p class="text-white text-sm">{{carouselActivity[3].date}} - {{carouselActivity[3].location}}</p>
              <div class="mt-2 flex justify-between items-center">
                <div class="space-x-2">
                  <span class=" rounded-full border-2 border-gray-dark hover:border-white text-white hover:text-gray-dark px-2 py-1 hover:bg-white text-sm" v-for="singer in carouselActivity[3].singers" :key="singer">{{ singer }}</span>
                </div>
                <div class="share_join">
                  <div class="share"></div>
                  <button
                  class="join"
                  :class="{ clickjoin: active }"
                  @click="active = !active"
                  >{{active ? '參加' : '想參加'}}</button>
                </div>
              </div>
            </div>
        </div>
        <div class="carousel-item" :class="classItems[4]" @click="changeCarousel(4)" :style="`background-image: url(${carouselActivity[4].Image})`">
            <div class="p-2 px-10 h-1/3 bg-black-backdrop mt-48 bg-opacity-80">
              <h3 class="text-white hover:underline">{{carouselActivity[4].title}}</h3>
              <p class="text-white text-sm">{{carouselActivity[4].date}} - {{carouselActivity[4].location}}</p>
              <div class="mt-2 flex justify-between items-center">
                <div class="space-x-2">
                  <span class=" rounded-full border-2 border-gray-dark hover:border-white text-white hover:text-gray-dark px-3 py-1 hover:bg-white text-sm " v-for="singer in carouselActivity[4].singers" :key="singer">{{ singer }}</span>
                </div>
                <div class="share_join">
                  <div class="share"></div>
                  <button
                  class="join"
                  :class="{ clickjoin: active }"
                  @click="active = !active"
                  >{{active ? '參加' : '想參加'}}</button>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div class=" w-1/6 m-auto flex justify-around mt-2 pointAll">
        <div class="point" :class="{active: currentItem == 1}" @click="changeCarousel(1)"></div>
        <div class="point" :class="{active: currentItem == 2}" @click="changeCarousel(2)"></div>
        <div class="point" :class="{active: currentItem == 3}" @click="changeCarousel(3)"></div>
        <div class="point" :class="{active: currentItem == 4}" @click="changeCarousel(4)"></div>
        <div class="point" :class="{active: currentItem == 5}" @click="changeCarousel(5)"></div>
      </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      carouselActivity: [
        {
          Image: 'https://picsum.photos/id/10/800/400',
          title: 'Mary See the Future《梅雨季》2021 台北場',
          date: '2017年12月10號・星期日・20:00',
          location: '台北市',
          singers: ['Second Wave 二手菸', '犯意成', 'willy']
        },
        {
          Image: 'https://picsum.photos/id/100/800/400',
          title: 'Mary See the Future《梅雨季》2021 台北場',
          date: '2017年12月10號・星期日・20:00',
          location: '台北市',
          singers: ['Second Wave 二手菸', 'willy']
        },
        {
          Image: 'https://picsum.photos/id/1000/800/400',
          title: 'Mary See the Future《梅雨季》2021 台北場',
          date: '2017年12月10號・星期日・20:00',
          location: '台北市',
          singers: ['Second Wave 二手菸', 'willy']
        },
        {
          Image: 'https://picsum.photos/id/200/800/400',
          title: 'Mary See the Future《梅雨季》2021 台北場',
          date: '2017年12月10號・星期日・20:00',
          location: '台北市',
          singers: ['Second Wave 二手菸', 'willy']
        },
        {
          Image: 'https://picsum.photos/id/1001/800/400',
          title: 'Mary See the Future《梅雨季》2021 台北場',
          date: '2017年12月10號・星期日・20:00',
          location: '台北市',
          singers: ['Second Wave 二手菸', 'willy']
        }
      ],
      classItems: ['item1', 'item2', 'item3', 'item4', 'item5'],
      timeId: null,
      currentItem: 1
    }
  },
  methods: {
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
  .point{
    @apply w-3 h-3 bg-gray-light rounded-full transition-all cursor-pointer
  }
  .active{
    @apply bg-gray-dark
  }
  .carousel-item {
    @apply  w-3/5 max-w-2xl h-80 absolute rounded-3xl overflow-hidden transition-all duration-1000 cursor-pointer shadow-xl
  }
  .item1 {
    @apply transform -translate-x-2/4 scale-50 z-20 filter blur-sm
  }
  .item2 {
    @apply transform -translate-x-1/4 scale-75 z-30 filter blur-xs
  }
  .item3 {
    @apply z-50
  }
  .item4{
    @apply transform translate-x-1/4 scale-75 z-30 filter blur-xs
  }
  .item5{
    @apply transform translate-x-2/4 scale-50 z-20 filter blur-sm
  }
</style>
