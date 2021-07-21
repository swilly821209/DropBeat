<template>
  <div class="flex items-center justify-evenly w-6 h-9 mx-1.5">
    <!-- <span class="w-1 inline-block transition-all bg-blue-light" :class="items[0]"></span> -->
    <span class="audioline01" :class="items[0]"></span>
    <!-- <span class="w-1 inline-block transition-all bg-blue-defult" :class="items[1]"></span> -->
    <span class="audioline02" :class="items[1]"></span>
    <!-- <span class="w-1 inline-block  transition-all bg-green-default" :class="items[2]"></span> -->
    <span class="audioline03" :class="items[2]"></span>
    <!-- <span class="w-1 inline-block transition-all bg-green-light" :class="items[3]"></span> -->
    <span class="audioline04" :class="items[3]"></span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: ['h-1/4', 'h-3/5', 'h-4/5', 'h-2/5']
    }
  },
  created () {
    const that = this
    setInterval(function () {
      const lastItem = that.items.pop()
      that.items.unshift(lastItem)
    }, 100)
  }
}
</script>

<style scoped>
  .audioline01{
    width: 3px;
    display: inline-block;
    background-color: #31BDC5;
    transition:all;
  }
  .audioline02{
    width: 3px;
    display: inline-block;
    background-color: #49CB9D;
    transition:all;
  }
  .audioline03{
    width: 3px;
    display: inline-block;
    background-color: #73E356;
    transition:all;
  }
  .audioline04{
    width: 3px;
    display: inline-block;
    background-color: #A6ff00;
    transition:all;
  }
</style>
