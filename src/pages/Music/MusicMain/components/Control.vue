<template>
<div class="control">
    <div class="icon-box">
        <img src="../../../../../static/Images/大白.jpg" alt="" class="song-pic">
        <div class="song-name">大白爱唱歌</div>
        <div class="singer">大白</div>
        <span class="love"></span>
    </div>
    <div class="control-box">
        <div class="control-icon">
            <div class="order"><i class="iconfont iconshunxubofang"></i></div>
            <div class="last"><i class="iconfont iconshangyishou1"></i></div>
            <div class="play-over"><i class="iconfont iconbofangqi-bofang"></i></div>
            <div class="next"><i class="iconfont iconxiayishou1"></i></div>
            <div class="lyric"><i class="iconfont icongeciweidianji"></i></div>
        </div>
        <div class="progress">
            <span class="start-time">00:00</span>
            <div class="progress-bar">
                <div class="total-progress"></div>
                <div class="now-progress">
                </div>
            </div>
            <span class="total-time">06:00</span>
        </div>
    </div>
    <div class="voice-box">
        <i class="iconfont iconshengyin"></i>
        <div class="voice-bar">
            <div class="total-voice"></div>
            <div class="now-voice"></div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.control
 display flex
 width 100%
 height 12%
 border-top 1px solid #777
 border-radius 0 0 0 18px
 background-color #f1f1f1
 .icon-box
  display flex
  flex-wrap wrap
  flex-direction column
  justify-content center
  align-items center
  width 30%
  height 100%
  border-radius 0 0 0 18px
  .song-pic
   width 50px
   height 50px
   border-radius 5px
  .song-name
   align-self flex-start
   font-size 15px
   font-weight bold
  .singer
   font-size 12px
   font-weight bold
   align-self flex-start
 .control-box
  width 50%
  height 100%
  .control-icon
   display flex
   justify-content center
   align-items flex-end
   width 100%
   height 70%
   .order
    margin 0 8px 7px
    text-align center
    &:hover
     color rgb(16, 141, 224)
   .last
    margin 0 8px 7px
    text-align center
    &:hover
     color rgb(16, 141, 224)
   .play-over
    width 35px
    height 35px
    margin 0 4px 2px
    border-radius 17.5px
    background-color rgba(200,200,200,0.3)
    text-align center
    &:hover
     color rgb(16, 141, 224)
     background-color rgba(200,200,200,0.7)
    i
     margin-left 2px
     font-size 25px
   .next
    margin 0 8px 7px
    text-align center
    &:hover
     color rgb(16, 141, 224)
   .lyric
    margin 0 8px 7px
    text-align center
    &:hover
     color rgb(16, 141, 224)
  .progress
   display flex
   justify-content center
   align-items center
   width 100%
   height 30%
   .start-time
    width 10%
    font-size 1px
    color #999
    user-select none
    transform scale(0.8)
   .progress-bar
    position relative
    overflow hidden
    width 80%
    height 20%
    border-radius 3px
    &:hover
     transform scaleY(1.5)
    .total-progress
     position absolute
     width 100%
     height 100%
     background-color #999
    .now-progress
     display flex
     position absolute
     width 70%
     height 100%
     background-color rgb(16, 141, 224)
   .total-time
    width 10%
    font-size 1px
    color #999
    user-select none
    transform scale(0.8)
 .voice-box
  display flex
  justify-content center
  align-items center
  width 20%
  height 100%
  .voice-bar
   position relative
   overflow hidden
   margin-left 10px
   width 60%
   height 6%
   border-radius 3px
   background-color red
   &:hover
     transform scaleY(1.5)
   .total-voice
     position absolute
     width 100%
     height 100%
     background-color #999
   .now-voice
     position absolute
     width 70%
     height 100%
     background-color rgb(16, 141, 224)
</style>
