<template>
<div class="background">
  <div class="baseplate">
    <Navigation></Navigation>
    <div class="viewport">
        <router-view ></router-view>
    </div>
    <i class="nes-mario"></i>
  </div>
  <a href="https://github.com/Yexiaopeng1024/free-app" target="_blank"><i class="nes-octocat animate"></i></a>
</div>
</template>

<script>
import Navigation from './components/Navigation/Navigation'
export default {
  components: {
    Navigation
  }
}
</script>

<style lang="stylus" scoped>
.background
 position absolute
 top 0
 right 0
 bottom 0
 left 0
 background-color #ddd
 .baseplate
  display flex
  align-items center
  overflow hidden
  margin-top 100px
  margin-left 200px
  width 1500px
  height 670px
  border 8px solid #000
  border-top 5px solid #000
  border-left 5px solid #000
  border-radius 25px
  background-color #6d1d1d
  box-shadow: 20px 20px 10px #888888
  .viewport
   display flex
   justify-content center
   align-items center
   position relative
   z-index 200
   width 80%
   height 550px
   border 5px solid #000
   border-radius 25px
   box-shadow 0px 0px 10px 2px #000 inset
   background-color #333
  .nes-mario
   position relative
   top -266px
   left -52px
.nes-octocat.animate
 position fixed
 bottom 10px
 right 30px
</style>
