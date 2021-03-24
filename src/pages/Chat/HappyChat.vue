<template>
  <transition name = "fade">
  <div class="chat-plate">
    <div class="chat-main">
        <ul class="content" id="content">
            <li v-for="(chatRec,index) in chatRecs" :key="index" :class="chatRec.li">
            <i class="nes-bcrikko"></i>
            <div class="nes-balloon" :class="chatRec.div">
            <p v-html="_no_space(chatRec.msg)"></p>
            </div>
            </li>
        </ul>
     </div>
    <div class="chat-input">
        <div class="nes-field is-inline">
        <input type="text" autocomplete="off" id="inline_field" class="nes-input is-dark" placeholder="说点什么吧.." v-model="msg" @keyup.enter="sendMsg">
        </div>
        <button type="button" class="nes-btn is-error" @click="sendMsg">发送</button>
    </div>
  </div>
  </transition>
</template>

<script>
// import Vue from 'vue'
import BScroll from '@better-scroll/core'
import MouseWheel from '@better-scroll/mouse-wheel'
import {sayHi} from './config/sayHi'
import {keywords} from './config/hexie'
import {Message} from 'element-ui'
import {mapState} from 'vuex'
BScroll.use(MouseWheel)
export default {
  data () {
    return {
      msg: '',
      chatRecs: []
    }
  },
  components: {
  },
  computed: {
    ...mapState('chat', ['backmsg'])
  },
  watch: {
    backmsg (value) { // 监视返回的数据
      this.recMsg(value)
    }
  },
  methods: {
    sendMsg () {
      const letgomsg = {key: 'free', appid: 0} // 发送MSG
      letgomsg.msg = this.msg
      this.$store.dispatch('chat/getMsg', letgomsg)
      // 下面是用Vue构造器制造组件对象并挂载的方法，仅供学习，这里我使用v-for动态渲染组件
      // let Tags = Vue.extend({
      //   template: '<p>你好啊</p>'
      // })
      // let tags = new Tags().$mount()
      // document.getElementById('content').appendChild(tags.$el)
      const filtMsg = this.testMsg(this.msg)
      if (filtMsg !== this.msg) {
        this.hexie()
      }
      let newli = {}
      newli.msg = filtMsg
      newli.li = 'msg-right'
      newli.div = 'from-right'
      this.chatRecs.push(newli)
      this.msg = ''
      this.$nextTick(() => {
        this.scroll.refresh()
        this.scroll.scrollTo(0, this.scroll.maxScrollY, 500)
      })
    },
    recMsg (value) {
      switch (value.result) { // 对返回的数据进行处理后推送到聊天界面
        case 0: // 对解析成功的回复消息进行处理
          let newliSuc = {}
          newliSuc.msg = value.content
          newliSuc.li = 'msg-left'
          newliSuc.div = 'from-left'
          this.chatRecs.push(newliSuc)
          this.$nextTick(() => {
            this.scroll.refresh()
            this.scroll.scrollTo(0, this.scroll.maxScrollY, 500)
          })
          break
        default: // 对解析失败的回复消息进行处理
          let newli = {}
          newli.msg = '对不起，我听不懂'
          newli.li = 'msg-left'
          newli.div = 'from-left'
          this.chatRecs.push(newli)
          this.$nextTick(() => {
            this.scroll.refresh()
            this.scroll.scrollTo(0, this.scroll.maxScrollY, 500)
          })
          break
      }
    },
    testMsg (msg) {
      let filtMsg = msg
      for (let i = 0; i < keywords.length; i++) { // 和谐词测试
        filtMsg = filtMsg.replace(keywords[i], (text) => {
          const textlen = text.length
          let newtext = ''
          for (let i = 0; i < textlen; i++) {
            newtext += '*'
          }
          return newtext
        })
      }
      return filtMsg
    },
    hexie () { // 和谐社会拒绝脏话
      Message({message: '<strong>富强、民主、文明、和谐<br>自由、平等、公正、法治<br>爱国、敬业、诚信、友善</strong>', type: 'warning', dangerouslyUseHTMLString: true, center: true, offset: 400})
    }
  },
  mounted () {
    let scroll = new BScroll('.chat-main', { // 初始化scroll并挂载到VM实例上
      scrollY: true,
      click: true,
      mouseWheel: {
        speed: 20,
        invert: false,
        easeTime: 300
      }
    })
    this.scroll = scroll
    const initMsg = sayHi[Math.floor(Math.random() * sayHi.length)] // 初始化 随机第一条问候消息
    setTimeout(() => {
      this.chatRecs.push({msg: initMsg, li: 'msg-left', div: 'from-left'})
    }, 1000)
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
  overflow hidden
  .content
   display flex
   margin-top 20px
   flex-direction column
   list-style none
   padding-inline-start 0px
   .msg-left
    margin-bottom 20px
    position relative
    clearFix()
    .nes-bcrikko
     position absolute
     left 50px
     bottom 0px
    //  margin-top 20px
    .nes-balloon
     font-weight bold
     max-width 600px
     margin-left 180px
     &.fade-enter-active,&.fade-leave-active
      transition opacity 2s
     &.fade-enter,&.fade-leave-to
      opacity 0
   .msg-right
    margin-bottom 20px
    position relative
    clearFix()
    .nes-bcrikko
     position absolute
     bottom 0px
     right 50px
     //  margin-top 20px
    .nes-balloon
     font-weight bold
     width 200px
     margin-left 792px
     &.fade-enter-active,&.fade-leave-active
      transition opacity 2s
     &.fade-enter,&.fade-leave-to
      opacity 0
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
