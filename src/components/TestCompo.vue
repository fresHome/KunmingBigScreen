<template>
  <div class="TestCompo">
    <!--    <div class="box animated zoomInDown">111</div>-->

    <div id="animateDiv">111</div>

  </div>
</template>

<script>

export default {
  name: 'TestCompo',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  .TestCompo {
    #animateDiv {
      width: 200px;
      background-color: yellow;
      height: 3rem;
      animation: heightFlow 0.33s;  //1秒30
    }
  }

  @keyframes heightFlow {
    from {
      height: 0;
      margin-top: 1.5rem;
    }
    to {
      height: 3rem;
      margin-top: 0;
    }
  }
</style>
