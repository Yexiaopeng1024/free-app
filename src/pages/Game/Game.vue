<template>
  <div class="game-plate">
      <div class="game-main">
      </div>
      <div class="game-list"></div>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="stylus" scoped>
.game-plate
 display flex
 position relative
 flex 1
 height 540px
 border-radius 20px
 box-shadow 0px 0px 10px 2px #000 inset
 background-color #fff
 .game-main
  display flex
  justify-content center
  align-items center
  width 61.8%
  height 540px
  border-radius 20px 0 0 20px
  background-color rgb(146, 204, 64)
 .game-list
  box-sizing border-box
  width 38.2%
  height 540px
  border-left 5px solid #000
  border-radius 0 20px 20px 0
  background-color #fff
</style>
