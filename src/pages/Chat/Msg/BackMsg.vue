<template>
  <li class="msg-left">
    <i class="nes-bcrikko"></i>
    <div class="nes-balloon from-left">
      <p>
        Hello
      </p>
    </div>
  </li>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.msg-left
  position relative
  clearFix()
  .nes-bcrikko
   position absolute
   left 50px
   bottom 0px
  //  margin-top 20px
  .nes-balloon
   max-width 500px
   min-width 300px
   margin-left 180px
</style>
