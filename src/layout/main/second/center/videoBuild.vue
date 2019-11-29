<template>
  <div class="videoBuild">
    <div class="bg" :style="{backgroundImage:'url(/static/image/secondBuild/'+bgArr[0]+')'}"></div>
    <div class="line" :style="{backgroundImage:'url(/static/image/secondBuild/'+lineArr[0]+')'}"></div>
  </div>
</template>

<script>
  export default {
    name: 'videoBuild',
    data () {
      return {
        bgArr: ['和成国际-背景.png', '高新招商大厦-背景.png'],
        lineArr: ['和成国际飞线.gif', '高新招商大厦飞线.gif']
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .videoBuild {
    width: 9.6rem;
    height: 5.4rem;
    position: relative;

    .bg {
      position: absolute;
      width: 9.6rem;
      height: 5.4rem;
      top: 0;
      left: 0;
      background: {
        size: 100% 100%;
      };
      z-index: -1;
    }

    .line {
      position: absolute;
      width: 9.6rem;
      height: 5.4rem;
      top: 0;
      left: 0;
      background: {
        size: 100% 100%;
      };
      z-index: 0;
    }
  }
</style>
