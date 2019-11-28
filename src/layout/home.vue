<template>
  <div class="home">
    <top></top>
    <router-view class="main"/>
    <foot></foot>
  </div>
</template>

<script>
  import top from './top/index'
  import foot from './foot/index'

  export default {
    name: 'home',
    components: { top, foot },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .home {
    width: 100vw;
    height: 100vh;
    background-color: #050527;
    position: relative;
    overflow: hidden;

    .main {
      height: 9.6rem;
      box-sizing: border-box;
      padding-top: 0.55rem;
    }
  }
</style>
