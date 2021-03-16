<template>
  <div class="baseplate">
      <div class="navigation">
        <button type="button" class="nes-btn">Button</button>
        <button type="button" class="nes-btn is-primary">Primary</button>
        <button type="button" class="nes-btn is-success">Success</button>
        <button type="button" class="nes-btn is-warning">Warning</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.baseplate
 display flex
 margin 100px auto
 height 670px
 width 80%
 background #fff
 border:10px solid #6d1d1d
 border-radius 25px
 .navigation
   background-color #fff
   width 20%
   display flex
   flex-direction column
   justify-content center
   align-items center
   border-right 10px solid #6d1d1d
   border-radius 25px 0px 0px 25px
 .nes-btn
   margin 50px
</style>
