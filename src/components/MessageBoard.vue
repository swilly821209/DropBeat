<template>
  <div class="messageAll space-y-5">
    <div class="messageWrite space-y-5">
        <div class=" text-black-backdrop flex items-center">
            <h3 class="text-lg">留言</h3>
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="24px" fill="gray"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>
        </div>
        <div class="flex items-center space-x-5">
            <img class=" rounded-full" src="https://akstatic.streetvoice.com/profile_images/sa/nd/sandwichfail/3fT9Y92afyjdDbtNEFb2rh.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg">
            <textarea
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            class="write text-gray-dark rounded-xl border-2 px-4 py-2 placeholder-gray-light focus:placeholder-opacity-0  border-gray-default focus:border-orange"
            placeholder="新增留言…
留言內容含有污辱謾罵、人身攻擊、色情...等不當字眼字眼，管理員有權利刪除留言！"></textarea>
            <div class="space-x-2 flex">
              <button @click="nowClear" class="rounded-3xl border-2 border-gray-default  text-sm text-gray-dark hover:text-orange hover:border-orange">取消</button>
              <button @click="nowMessage" class="rounded-3xl border border-orange  text-sm text-white bg-orange hover:bg-blue-light hover:border-opacity-0">留言</button>
            </div>
        </div>
    </div>
    <div class="space-y-5">
      <the-message
        v-for="item in outerArray"
        :key="item.content"
        :memberImg="'https://akstatic.streetvoice.com/profile_images/sa/nd/sandwichfail/3fT9Y92afyjdDbtNEFb2rh.png?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0/interlace,1/quality,q_95/sharpen,80/format,jpg'"
        :commentTime="item.setup_data"
        :memberName="item.member"
        :memberMessage="item.content">
      </the-message>
    </div>
    <div class="flex justify-end">
      <div @click="nowDisplay" v-if="nowButton" class=" text-lg text-gray-light text-right hover:text-blue-light cursor-pointer">...查看全部留言</div>
    </div>
    <hr>
  </div>
</template>

<script>
import TheMessage from './TheMessage.vue'
export default {
  props: ['outerArray', 'nowDisplay', 'nowMessage', 'nowClear', 'nowButton', 'modelValue'],
  emits: ['update:modelValue'],
  components: {
    TheMessage
  },
  data () {
    return {
      // moreButton: true,
      thisInput: ''
      // displayNum: 2,
      // nowArray: []
    }
  },
  computed: {
    // displayMessageData () {
    //   return this.nowArray.slice(0, this.displayNum)
    // }
  },
  methods: {
    // displayMore () {
    //   this.displayNum = this.outerArray.length
    //   this.moreButton = false
    // },
    // clearInput () {
    //   this.inputMessage = ''
    // }
  }
  // async created () {
  //   const response = await fetch('http://localhost/DropbeatBackend/mussage_mus_get.php')
  //   const responseData = await response.json()
  //   // 操作
  //   responseData.forEach((item) => {
  //     this.nowArray.unshift(item)
  //   })
  // }
}
</script>
<style scoped>
  .messageAll{
    border-top:1px solid #ededed;
  }
.messageWrite{
  margin: 30px 0 0 0;
}
h3{
  margin: 0 5px 0 0;
}
  img{
    width: 60px;
    height: 60px;
  }
  textarea{
    resize: none;
  }
  .write{
    width: 100%;
  }
  button{
    height: 25px;
    width: 55px;
  }
</style>
