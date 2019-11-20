<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {}
}
</script>
<style>
  @font-face {
    font-family: digifaw;
    src: url('../public/static/font/digifaw.ttf')
  }

  @font-face {
    font-family: din-Bold;
    src: url('../public/static/font/Bold.otf')
  }

  @font-face {
    font-family: din-Regular;
    src: url('../public/static/font/Regular.otf')
  }

  @font-face {
    font-family: din-Medium;
    src: url('../public/static/font/Medium.ttf')
  }
</style>
