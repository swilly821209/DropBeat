<template>
  <div class="space-y-5">
    <div class="space-y-5">
        <div class=" text-black-backdrop flex items-center">
            <h3 class="text-2xl">留言</h3>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>
        </div>
        <div class="flex items-center space-x-5">
            <img class="w-20 h-20 rounded-full" src="https://akstatic.streetvoice.com/profile_images/sa/nd/sandwichfail/3fT9Y92afyjdDbtNEFb2rh.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg">
            <textarea v-model="inputMessage" class="rounded-xl border-2 px-4 py-2 h-20 w-9/12 placeholder-gray-light focus:placeholder-opacity-0  border-gray-light focus:border-orange"
                    placeholder="新增留言…
留言內容含有污辱謾罵、人身攻擊、色情...等不當字眼字眼，管理員有權利刪除留言！"></textarea>
            <div class="space-x-2 w-40">
            <button @click="clearInput" class="rounded-2xl border border-gray-light px-3 py-1 text-gray-light hover:text-orange">取消</button>
            <button @click="commentMessage" class="rounded-2xl border border-gray-light px-3 py-1 text-white bg-orange hover:bg-blue-light hover:border-opacity-0">留言</button>
            </div>
        </div>
    </div>
    <div class="space-y-5">
      <the-message
        v-for="item in displayMessageData"
        :key="item.message"
        :memberImg="item.img"
        :commentTime="item.time"
        :memberName="item.memberName"
        :memberMessage="item.message">
      </the-message>
    </div>
    <div @click="displayMore" v-if="moreButton" class="cursor-pointer hover:text-blue-light text-2xl text-gray-light text-right">...查看全部留言</div>
  </div>
</template>

<script>
import TheMessage from './TheMessage.vue'
export default {
  components: {
    TheMessage
  },
  data () {
    return {
      moreButton: true,
      inputMessage: '',
      displayNum: 2,
      memberMessageData: [
        {
          memberName: 'willy',
          time: '2021-7-20 02:00:00',
          img: 'https://akstatic.streetvoice.com/profile_images/sa/nd/sandwichfail/3fT9Y92afyjdDbtNEFb2rh.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          message: '我是打倒三明治!!!!!!'
        },
        {
          memberName: 'willy',
          time: '2021-2-22 02:00:00',
          img: 'https://akstatic.streetvoice.com/profile_images/sa/nd/sandwichfail/3fT9Y92afyjdDbtNEFb2rh.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          message: '我是打倒三明治!!!!!!'
        },
        {
          memberName: 'willy',
          time: '2021-7-2 02:00:00',
          img: 'https://akstatic.streetvoice.com/profile_images/sa/nd/sandwichfail/3fT9Y92afyjdDbtNEFb2rh.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
          message: '我是打倒三明治!!!!!!'
        }
      ]
    }
  },
  computed: {
    displayMessageData () {
      return this.memberMessageData.slice(0, this.displayNum)
    }
  },
  methods: {
    displayMore () {
      this.displayNum = this.memberMessageData.length
      this.moreButton = false
    },
    clearInput () {
      this.inputMessage = ''
    },
    commentMessage () {
      const messageData = {
        memberName: 'willy',
        time: new Date(),
        img: 'https://akstatic.streetvoice.com/profile_images/sa/nd/sandwichfail/3fT9Y92afyjdDbtNEFb2rh.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg',
        message: this.inputMessage
      }
      this.inputMessage = ''
      this.memberMessageData.unshift(messageData)
    }
  }
}
</script>
