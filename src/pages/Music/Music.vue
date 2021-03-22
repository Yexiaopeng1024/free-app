<template>
  <div class="music-plate">
    <MusicMain/>
    <MusicList/>
  </div>
</template>

<script>
import MusicMain from './MusicMain/MusicMain'
import MusicList from './MusicList/MusicList'
export default {
  components: {
    MusicMain,
    MusicList
  }
}
</script>

<style lang="stylus" scoped>
.music-plate
 display flex
 position relative
 flex 1
 height 540px
 border-radius 20px
 background-color #fff
</style>
