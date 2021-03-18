<template>
<div class="piano-plate">
  <div class="piano-key-list">
    <div class="piano-flap">don`t worry be happy</div>
    <div class="piano-key wkey" v-for="note in WNotes" :key="note.keyCode" :data-keyCode = "note.keyCode"  :class="{active:note.keyCode==isActive}" @mousedown="playNote(note.keyCode,$event)" @mouseenter="playNote(note.keyCode,$event)" >
      <div class="keytip">
        <div class="keyname" v-html="note.key"></div>
      </div>
    </div>
    <div class="bkey-father">
      <div class="piano-key bkey" v-for="note in BNotes" :key="note.keyCode" :data-keyCode = "note.keyCode">
        <div class="keytip">
        <div class="keyname" v-html="note.key"></div>
      </div>
      </div>
    </div>
    <div class="audios-wrap"></div>
    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949" active-text="按键提示">
    </el-switch>
</div>
</div>
</template>

<script>
import $ from 'jquery'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      isActive: 0,
      value: true
    }
  },
  computed: {
    ...mapState('piano', ['WNotes', 'BNotes'])
  },
  methods: {
    initAudioDom: (compent) => { // 初始化音频标签
      for (let i = 0; i < compent.WNotes.length; i++) {
        var Wnote = compent.WNotes[i]
        $('.audios-wrap').append(`<audio src='${Wnote.url}' key-code='${Wnote.keyCode}' data-id='audio${i}' class='audioEle'>`)
      }
      for (let i = 0; i < compent.BNotes.length; i++) {
        var Bnote = compent.BNotes[i]
        $('.audios-wrap').append(`<audio src='${Bnote.url}' key-code='${Bnote.keyCode}' data-id='audio${36 + i}' class='audioEle'>`)
      }
    },
    playNote: (keyCode, $event) => {
      console.log(keyCode)
      if (!keyCode || typeof keyCode !== 'string' || $event.buttons === 0) return // 响应鼠标拖动事件判断event中是否按下按键
      var audios = $('.audioEle')
      console.log(audios)
      for (let i = 0; i < audios.length; i++) {
        let audio = audios[i]
        if (audio.getAttribute('key-code') === keyCode) {
          var cloneAudioNode = audio.cloneNode()
          cloneAudioNode.play()
          cloneAudioNode.remove()
          break
        }
      }
    },
    keykey: (e) => {
      console.log(e)
    }
  },
  mounted () {
    this.initAudioDom(this) // 利用钩子函数初始化音频标签
    document.onkeydown = (e) => {
      this.playNote(e.keyCode, e)
    }
  }
}
</script>

<style lang="stylus" scoped>
// 黑键的排列方式
@import './stylus/bkey'
.piano-plate
 flex 1
 font-family zpix
 .piano-key-list
  display flex
  flex-flow row wrap
  align-content flex-start
  width 95%
  margin 0 auto
  height 500px
  border-radius 20px
  user-select none
  background-color pink
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
   .keytip
     .keyname
      margin-bottom 10px
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
    .keytip
     .keyname
      margin-bottom 5px
      font-size 10px
      color #fff
      text-align center
</style>
