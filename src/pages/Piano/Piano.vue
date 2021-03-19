<template>
<div class="piano-plate">
  <div class="piano-main">
    <div class="piano-flap">don`t worry be happy</div>
    <div class="piano-key wkey nes-pointer" type="button" v-for="note in WNotes" :key="note.keyCode" :data-keyCode = "note.keyCode"  :class="{active:WisActive.hasOwnProperty(note.Code)}" @mousedown="playNote(note.Code,$event,false)" @mouseenter="playNote(note.Code,$event,false)" @mouseup="clearCSS(note.Code,false)" @mouseleave="clearCSS(note.Code,false)" >
      <div class="keytip">
        <transition name = "fade">
        <div class="keyname" v-show="showKey" v-html="note.key"></div>
        </transition>
      </div>
    </div>
    <div class="bkey-father">
      <div class="piano-key bkey nes-pointer" type="button" v-for="note in BNotes" :key="note.keyCode" :data-keyCode = "note.keyCode" :class="{active:BisActive.hasOwnProperty(note.Code)}" @mousedown="playNote(note.Code,$event,true)" @mouseenter="playNote(note.Code,$event,true)"  @mouseup="clearCSS(note.Code,true)" @mouseleave="clearCSS(note.Code,true)">
       <div class="keytip">
         <transition name = "fade">
        <div class="keyname" v-show="showKey" v-html="note.key"></div>
        </transition>
       </div>
      </div>
    </div>
    <div class="audios-wrap"></div>
    <el-switch v-model="showKey" active-color="#000" inactive-color="#000" class="switch nes-pointer" >
    </el-switch>
    <Lyric/>
</div>
</div>
</template>

<script>
import Lyric from './component/RandomLyric'
import Vue from 'vue'
import $ from 'jquery'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      WisActive: {}, // 黑白键CSS类名响应数据
      BisActive: {},
      showKey: true
    }
  },
  components: {
    Lyric
  },
  computed: {
    ...mapState('piano', ['WNotes', 'BNotes'])
  },
  methods: {
    initAudioDom: (compent) => { // 初始化音频标签
      for (let i = 0; i < compent.WNotes.length; i++) {
        var Wnote = compent.WNotes[i]
        $('.audios-wrap').append(`<audio src='${Wnote.url}' code='${Wnote.Code}' data-id='audio${i}' class='WaudioEle'>`)
      }
      for (let i = 0; i < compent.BNotes.length; i++) {
        var Bnote = compent.BNotes[i]
        $('.audios-wrap').append(`<audio src='${Bnote.url}' code='${Bnote.Code}' data-id='audio${36 + i}' class='BaudioEle'>`)
      }
    },
    playNote: function (Code, $event, isb) { // 音频响应方法
      if (!Code || typeof Code !== 'string' || $event.buttons === 0) return // 响应鼠标拖动事件判断event中是否按下按键
      switch (isb) {
        case false: // 白键
          const Waudios = $('.WaudioEle')
          for (let i = 0; i < Waudios.length; i++) {
            const Waudio = Waudios[i]
            if (Waudio.getAttribute('code') === Code) {
              const WcloneAudioNode = Waudio.cloneNode()
              const WisActive = this.WisActive // 响应式添加类名
              Vue.set(WisActive, Code, true)
              WcloneAudioNode.play()
              WcloneAudioNode.remove()
            }
          }
          break
        case true: // 黑键
          var Baudios = $('.BaudioEle')
          for (let i = 0; i < Baudios.length; i++) {
            let Baudio = Baudios[i]
            if (Baudio.getAttribute('code') === Code) {
              var BcloneAudioNode = Baudio.cloneNode()
              let BisActive = this.BisActive // 响应式添加类名
              Vue.set(BisActive, Code, true)
              BcloneAudioNode.play()
              BcloneAudioNode.remove()
              break
            }
          }
      }
    },
    clearCSS (Code, isB) {
      switch (isB) {
        case false:
          let WisActive = this.WisActive // 响应式移除类名
          Vue.delete(WisActive, Code)
          break
        case true:
          let BisActive = this.BisActive // 响应式移除类名
          Vue.delete(BisActive, Code)
          break
      }
    }
  },
  mounted () {
    this.initAudioDom(this) // 利用钩子函数初始化音频标签
    document.onkeydown = (e) => { // 利用钩子函数注册键盘点击事件并发布消息给组件
      switch (e.shiftKey) {
        case false:
          if (this.WisActive.hasOwnProperty(e.code)) return // 利用响应数据进行keydown的节流
          this.playNote(e.code, e, e.shiftKey)
          break
        case true:
          if (this.BisActive.hasOwnProperty(e.code)) return
          this.playNote(e.code, e, e.shiftKey)
          break
      }
      this.playNote(e.code, e, e.shiftKey)
    }
    document.onkeyup = (e) => { // 利用钩子函数注册键盘点击事件并发布消息给组件
      this.clearCSS(e.code, e.shiftKey)
    }
  },
  beforeDestroy () {
    document.onkeydown = null
    document.onkeyup = null
  }
}
</script>

<style lang="stylus" scoped>
// 黑键的排列方式
@import './stylus/bkey'
.piano-plate
 flex 1
 font-family zpix
 .piano-main
  display flex
  flex-flow row wrap
  justify-content center
  align-content flex-start
  width 95%
  margin 0 auto
  height 500px
  border-radius 20px
  user-select none
  // background-color pink
  .piano-flap
   width 100%
   height 40px
   margin-top 50px
   line-height: 40px
   text-align center
   color #fff
   font-size 30px
   background #000
   box-shadow inset 0 -1px 2px hsl(0deg 0% 100% / 40%), 0 2px 3px rgb(0 0 0 / 40%)
   border-color #555 #222 #111 #777
   border-style solid
   border-width 3px 2px 2px
   border-radius 5px 5px 0 0
  .piano-key.wkey
   display flex
   justify-content center
   align-items flex-end
   width 2.7777%
   height ($WH)px
   background linear-gradient(white 10%, rgb(251, 251, 251) 92%, rgb(220, 220, 220) 93%, white 97%)
   border-radius 0 0 5px 5px
   border solid 1px black
   transition: all 0.2s
   &.active
    background linear-gradient(white 10%, rgb(251, 251, 251) 95%, rgb(220, 220, 220) 98%, white 99%)
    box-shadow 0 2px 2px rgb(0 0 0 / 40%),inset 2px 0px 2px -1px rgb(0 0 0 / 40%),inset -2px 0px 2px -1px rgb(0 0 0 / 40%)
   .keytip
     .keyname
      margin-bottom 10px
      &.fade-enter-active,&.fade-leave-active
       transition opacity 2s
      &.fade-enter,&.fade-leave-to
       opacity 0
  .bkey-father
    position relative
    display flex
    width 100%
    background-color #000
   .piano-key.bkey
    display flex
    justify-content center
    align-items flex-end
    width 2.7777%
    height 60px
    border-style solid
    border-color #666 #222 #111 #555
    border-width 0px 2px 7px
    background linear-gradient(-20deg,#333,#000,#333)
    border-radius 0 0 3px 3px
    transition: all 0.2s
    &.active
     border-width 0px 2px 2px
     box-shadow inset 2px 0px 2px -1px rgb(250 250 250),inset -2px 0px 2px -1px rgb(250 250 250),inset 0px -2px 2px -1px rgb(250 250 250)
    .keytip
     .keyname
      margin-bottom 5px
      font-size 10px
      color #fff
      text-align center
      &.fade-enter-active,&.fade-leave-active
       transition opacity 2s
      &.fade-enter,&.fade-leave-to
       opacity 0
  .switch
    margin 30px 0 0 800px
</style>
