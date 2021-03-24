<template>
  <div class="music-main">
    <Search></Search>
    <Select></Select>
    <Content></Content>
    <Control></Control>
  </div>
</template>

<script>
import Search from './components/Search'
import Select from './components/Select'
import Content from './components/Content'
import Control from './components/Control'
export default {
  components: {
    Search,
    Select,
    Content,
    Control
  }
}
</script>

<style lang="stylus" scoped>
.music-main
 display flex
 flex-wrap wrap
 align-content space-between
 width 61.8%
 height 541px
</style>
