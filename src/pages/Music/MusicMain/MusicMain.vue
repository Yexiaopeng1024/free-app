<template>
  <div class="music-main">
      <div class="search"></div>
      <div class="control"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.music-main
 display flex
 flex-wrap wrap
 align-content space-between
 width 61.8%
 height 540px
 .search
  width 100%
  height 16%
  border-bottom 1px solid #777
  border-radius 18px 0 0 0
  background-color rgb(16, 141, 224)
 .control
  width 100%
  height 15%
  border-top 1px solid #777
  border-radius 0 0 0 18px
  background-color #aaa
</style>
