<template>
  <div class="videoBuild">
    <div class="bg animated" :class="show" :style="{backgroundImage:'url(static/image/secondBuild/'+type+'.png)'}"></div>
    <div class="line animated" :class="show" :style="{backgroundImage:'url(static/image/secondBuild/'+type+'.gif)'}"></div>
  </div>
</template>

<script>
  export default {
    name: 'videoBuild',
    data () {
      return {
        show: 'fadeIn',
        type: ''
      }
    },
    props: ['current'],
    watch: {
      current () {
        this.animate()
      }
    },
    methods: {
      animate () {
        this.show = 'fadeOut'
        setTimeout(() => {
          this.type = this.current.name
          this.show = 'fadeIn'
        }, 500)
      }
    },
    mounted () {
      this.animate()
    }
  }
</script>

<style lang="scss" scoped>
  .videoBuild {
    width: 9.6rem;
    height: 5.4rem;
    position: relative;

    &:before {
      content: '';
      width: 100%;
      height: 2rem;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 6;
      background-image: linear-gradient(to bottom, #050527, rgba(0, 0, 0, 0));
    }

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
