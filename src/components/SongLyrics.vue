<template>
  <div class="flex color wholeContainer">
    <div class="title">歌詞</div>
    <div class="lyricsContainer">
      <textarea class="lyricsH" :value="lyrics" readonly>
      </textarea>
    </div>
    <div class="cursor-pointer self">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" @click="up">
        <path id="up" d="M9.138,1.465a1,1,0,0,1,1.724,0l8.252,14.028A1,1,0,0,1,18.252,17H1.748a1,1,0,0,1-.862-1.507Z" :fill="upColor"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" @mousedown="down">
        <path id="up" d="M9.138,1.465a1,1,0,0,1,1.724,0l8.252,14.028A1,1,0,0,1,18.252,17H1.748a1,1,0,0,1-.862-1.507Z" transform="translate(20 17) rotate(180)" :fill="downColor"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lyrics: `  三番故里 窗外雨滴打破細碎的玻璃
  與你相遇 是在一個單純美好的世界
  而在變質那天 你淚流誇張情節
  足以向全世界討回 你付出的一切

  你的故事 存在一個需要密碼的盒子
  紀念時刻 打開卻會冒出一陣陣白煙
  像是警告自己 不能屈服嚮往從前
  天變地變 我們的愛也變

  而我 在這座城市遺失了你
  順便遺失了自己

  你的故事 存在一個需要密碼的盒子
  紀念時刻 打開卻會冒出一陣陣白煙
  像是警告自己 不能屈服嚮往從前
  天變地變 我們的愛也變

  而我 在這座城市遺失了你
  順便遺失了自己

  你的故事 存在一個需要密碼的盒子
  紀念時刻 打開卻會冒出一陣陣白煙
  像是警告自己 不能屈服嚮往從前
  天變地變 我們的愛也變

  而我 在這座城市遺失了你
  順便遺失了自己

  你的故事 存在一個需要密碼的盒子
  紀念時刻 打開卻會冒出一陣陣白煙
  像是警告自己 不能屈服嚮往從前
  天變地變 我們的愛也變

  而我 在這座城市遺失了你
  順便遺失了自己
  你的故事 存在一個需要密碼的盒子
  紀念時刻 打開卻會冒出一陣陣白煙
  像是警告自己 不能屈服嚮往從前
  天變地變 我們的愛也變

  而我 在這座城市遺失了你
  順便遺失了自己

  你的故事 存在一個需要密碼的盒子
  紀念時刻 打開卻會冒出一陣陣白煙
  像是警告自己 不能屈服嚮往從前
  天變地變 我們的愛也變

  而我 在這座城市遺失了你
  順便遺失了自己
        `,
      height: 0,
      upColor: '#ededed',
      downColor: '#b5b5b5'
    }
  },
  methods: {
    up () {
      const heightEnd = document.querySelector('.lyricsH').scrollHeight / 1.3
      if (this.height > 0) {
        this.height -= 50
        document.querySelector('.lyricsH').scrollTop = this.height
        this.upColor = '#b5b5b5'
        if (this.height < heightEnd) {
          this.downColor = '#b5b5b5'
        }
      } else if (this.height < 50) {
        this.upColor = '#ededed'
      }
    },
    down () {
      const heightEnd = document.querySelector('.lyricsH').scrollHeight / 1.3
      if (this.height < heightEnd) {
        this.height += 50
        document.querySelector('.lyricsH').scrollTop = this.height
        if (this.height > 0) {
          this.upColor = '#b5b5b5'
          if (this.height > heightEnd) {
            this.downColor = '#ededed'
            document.querySelector('.lyricsH').scrollTop = heightEnd
          } else {
            this.downColor = '#b5b5b5'
          }
        } else if (this.height < 50) {
          this.upColor = '#ededed'
        }
      }
    }
  }
}
</script>

<style scoped>
  .color{
    color: #7B7B7B;
  }
  .wholeContainer{
    height: 250px;
  }
  .title{
    text-align: center;
    width: 50px;
    margin-left: 10px;
    color:#383838;
    font-size: 18px;
  }
  .lyricsContainer{
    width: 280px;
    height: 250px;
  }
  textarea{
    resize: none;
  }
  .lyricsH{
    width: 270px;
    height: 250px;
    font-size: 16px;
    overflow-y: hidden;
    line-height: 28px;
    outline: none;
    scroll-behavior: smooth;
  }
  .self{
    align-self: center;
    margin-left: 10px;
    width: 20px;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  svg:hover{
    transition: all .5s;
    transform: scale(1.2);
  }
</style>
