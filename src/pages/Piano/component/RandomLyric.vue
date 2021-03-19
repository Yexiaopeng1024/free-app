<template>
  <div class="component-random-lyric" ref="LyricComponent">
    <div class="lyric nes-pointer" id="randomLyric" @click="searchLyric">{{ randomLyric }}</div>
  </div>
</template>

<script>
import Lyrics from '../config/lyrics'
import $ from 'jquery'
export default {
  name: 'RandomLyric',
  components: {},
  mixins: [],
  props: [],
  data () {
    return {
      randomLyric: '', // 随机歌词显示
      randomIndex: 0,
      lyricTimer: null
    }
  },
  computed: {},
  mounted () {
    clearInterval(this.lyricTimer)
    this.lyricTimer = null
    this.setRandomLyric()
  },
  beforeDestroy () {
    clearInterval(this.lyricTimer)
    this.lyricTimer = null
  },
  watch: {},
  methods: {
    setRandomLyric () {
      if (this.lyricTimer) return
      this.randomIndex = Math.floor(Math.random() * Lyrics.length)
      let set = () => {
        $('#randomLyric').hide()
        if (this.randomIndex < Lyrics.length - 1) {
          ++this.randomIndex
        } else {
          this.randomIndex = 0
        }
        this.randomLyric = `"${Lyrics[this.randomIndex]}"`
        $('#randomLyric').fadeIn(1000)
      }
      set()
      this.lyricTimer = setInterval(() => {
        set()
      }, 7e3)
    },
    // 歌词搜索、查询
    searchLyric () {
      let music163 = 'https://music.163.com/#/search/m/?s='
      let lyricSearchUrl = music163 + encodeURIComponent(Lyrics[this.randomIndex])
      window.open(lyricSearchUrl, '_blank')
    }
  }
}
</script>

<style lang="stylus" scoped>
.component-random-lyric
  font-size 30px
  margin-top 80px
  height 50px
</style>
