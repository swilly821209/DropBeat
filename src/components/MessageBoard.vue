<template>
  <div class="messageAll space-y-5">
    <div class="messageWrite space-y-5">
        <div class=" text-black-backdrop flex items-center">
            <h3 class="text-lg">留言</h3>
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="24px" fill="gray"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>
        </div>
        <div class="flex items-center sm:space-x-5 space-x-1">
            <img class=" rounded-full mr-2 sm:mr-0" :src="thisPhoto">
            <textarea
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            class="write text-gray-dark rounded-lg sm:rounded-xl border-2 px-2 sm:px-4 py-2 placeholder-gray-light focus:placeholder-opacity-0  border-gray-default focus:border-orange"
            placeholder="新增留言…
留言內容含有污辱謾罵、人身攻擊、色情...等不當字眼字眼，管理員有權利刪除留言！"></textarea>
            <div class="space-x-2 sm:flex hidden">
              <button @click="nowClear" class="rounded-3xl border-2 border-gray-default  text-sm text-gray-dark hover:text-orange hover:border-orange">取消</button>
              <button @click="nowMessage" class=" rounded-3xl border border-orange  text-sm text-white bg-orange hover:bg-blue-light hover:border-opacity-0">留言</button>
            </div>
        </div>
        <div class="space-x-2 justify-end  flex sm:hidden ">
            <button @click="nowClear" class="cancel rounded-3xl border-2 border-gray-default  text-sm text-gray-dark hover:text-orange hover:border-orange">取消</button>
            <button @click="nowMessage" class="check rounded-3xl border border-orange  text-sm text-white bg-orange hover:bg-blue-light hover:border-opacity-0">留言</button>
        </div>
    </div>
    <div class="space-y-5">
      <the-message
        v-for="item in outerArray"
        :key="item.content"
        :memberImg="item.member_photo"
        :commentTime="item.setup_data"
        :memberName="item.account"
        :setUpdate="item.setup_date"
        :mesId='item[0]'
        :memberMessage="item.content">
      </the-message>
    </div>
    <div class="flex justify-end">
      <div @click="nowDisplay" v-if="nowButton" class="moreMessage text-base sm:text-lg text-gray-dark mt-3 text-right hover:text-blue-light cursor-pointer">... 查看全部留言</div>
    </div>
    <!-- <hr> -->
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
      thisInput: '',
      thisPhoto: ''
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
  },
  async created () {
    const form = new FormData()
    form.append('id', this.$store.getters.memberIdState)
    const response = await fetch('http://localhost/DropbeatBackend/mussage_act_getImg.php', {
      method: 'POST',
      body: form
    })
    const responseData = await response.json()
    this.thisPhoto = responseData[0].member_photo
  }
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
  @media screen and (max-width:640px) {
      textarea::-webkit-input-placeholder{
      font-size: 12px;
    }
  }
</style>
