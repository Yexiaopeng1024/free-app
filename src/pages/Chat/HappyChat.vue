<template>
  <div class="chat-plate">
    <div class="chat-main">
        <ul class="content">
            <li class="msg-left">
                <i class="nes-bcrikko"></i>
                <div class="nes-balloon from-left">
                <p>Hello啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
                </div>
            </li>
            <li class="msg-right">
                 <div class="nes-balloon from-right">
                 <p>Good</p>
                 </div>
                 <i class="nes-bcrikko"></i>
            </li>
        </ul>
     </div>
    <div class="chat-input">
        <div class="nes-field is-inline">
        <input type="text" id="inline_field" class="nes-input is-dark" placeholder="说点什么吧.." v-model="msg">
        </div>
        <button type="button" class="nes-btn is-error" @click="sendMsg">发送</button>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    ...mapState('chat', ['backmsg'])
  },
  methods: {
    sendMsg () {
      let letgomsg = {key: 'free', appid: 0}
      letgomsg.msg = this.msg
      this.$store.dispatch('chat/getMsg', letgomsg)
      this.msg = ''
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixins'
.chat-plate
 position relative
 flex 1
 height 540px
 border-radius 20px
 box-shadow 0px 0px 10px 2px #000 inset
 background-color orange
 .chat-main
  position absolute
  top 0px
  width 100%
  height 400px
  border-radius 21px 21px 0 0
  background-color orange
  .content
   display flex
   margin-top 50px
   flex-direction column
   list-style none
   padding-inline-start 0px
   .msg-left
    position relative
    clearFix()
    .nes-bcrikko
     position absolute
     left 50px
     bottom 0px
    //  margin-top 20px
    .nes-balloon
     max-width 500px
     min-width 300px
     margin-left 180px
   .msg-right
    position relative
    clearFix()
    .nes-bcrikko
     position absolute
     bottom 0px
     right 50px
    //  margin-top 20px
    .nes-balloon
     width 300px
     margin-left 692px
 .chat-input
  position absolute
  bottom 0px
  width 100%
  height 140px
  border-top 5px solid #000
  border-radius 0 0 21px 21px
  background-color white
 .nes-field
   width 400px
   margin-top 40px
   margin-left 288px
   border 2px solid black
   border-radius 5px 5px 5px 5px
 .nes-btn
  position absolute
  right 396px
  bottom 39px
</style>
