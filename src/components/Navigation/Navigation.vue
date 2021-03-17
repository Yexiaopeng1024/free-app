<template>
 <div class="navigation">
        <button type="button" class="nes-btn" @click="goTo('/Piano')">Piano</button>
        <button type="button" class="nes-btn is-orange">Button</button>
        <button type="button" class="nes-btn is-pink">Button</button>
        <button type="button" class="nes-btn is-primary">Primary</button>
        <button type="button" class="nes-btn is-success">Success</button>
        <button type="button" class="nes-btn is-warning">Warning</button>
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
   display flex
   flex-direction column
   justify-content center
   align-items center
   width 15%
   height 650px
   border-radius 15px 0 0 15px
  .nes-btn
   margin 20px
  .is-pink
   background-color pink
  .is-orange
   background-color orange
</style>
