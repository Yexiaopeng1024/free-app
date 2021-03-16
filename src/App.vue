<template>
<div class="background">
  <Navigation></Navigation>
</div>
</template>

<script>
import Navigation from './components/Navigation/Navigation'
export default {
  components: {
    Navigation
  }
}
</script>

<style lang="stylus" scoped>
// @import '../static/CSS/font.css'
.background
 position absolute
 top 0
 right 0
 bottom 0
 left 0
</style>
