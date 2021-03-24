<template>
<div class="search">
    <a href="javascript:void(0);"><img src="../../../../../static/Images/网抑云图标.png" alt=""></a>
    <div class="search-box">
        <i class="iconfont iconsousuo"></i>
        <input type="text"  v-model="keyCode" placeholder="搜索" onfocus="this.placeholder=''" onblur="this.placeholder='搜索'">
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      keyCode: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.search
 overflow hidden
 width 100%
 height 10%
 border-bottom 1px solid #777
 border-radius 18px 0 0 0
 background-color rgb(16, 141, 224)
 .search-box
  display inline-block
  margin-left 99px
  background-color #fff
  border-radius 50px 50px 50px 50px
  background-color rgba(100,100,100,0.2)
  i
   margin-left 8px
   color #fff
   opacity 1
  input
   margin 5px 0
   font-size 10px
   color #fff
   background-color rgba(0,0,0,0)
   box-shadow:none
   outline: none
   resize: none
   border: none
   border-radius 0px 50px 50px 0px
</style>
