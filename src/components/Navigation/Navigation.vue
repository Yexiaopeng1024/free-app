<template>
 <div class="navigation">
        <button type="button" class="nes-btn" @click="goTo('/Piano')">Piano</button>
        <button type="button" class="nes-btn is-orange" @click="goTo('/HappyChat')">沙雕</button>
        <button type="button" class="nes-btn is-success" @click="goTo('/Game')">Game</button>
        <button type="button" class="nes-btn is-primary"  @click="goTo('/SadMusic')">网抑云</button>
        <button type="button" class="nes-btn is-warning">待定</button>
        <button type="button" class="nes-btn is-pink">待定</button>
</div>
</template>

<script>
export default {
  methods: {
    goTo (path) {
      if (!(path === this.$route.path)) { // 防止重复跳转路由报错
        this.$router.replace(path)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.navigation
   position relative
   display flex
   flex-direction column
   justify-content center
   align-items center
   width 15%
   height 650px
   border-radius 15px 0 0 15px
  .nes-btn
   position relative
   z-index 200
   font-weight bold
   width 90px
   margin 20px
  .is-pink
   background-color pink
  .is-orange
   background-color orange
</style>
