<template>
  <div class="index">
    <video-build></video-build>
    <bottom-map></bottom-map>
    <data-box></data-box>
    <position :style="positionArr[0]"></position>
    <div class="smallMap" :style="{img:'small-map.png'}|imgLoad()"></div>
  </div>
</template>

<script>
  import bottomMap from './bottomMap'
  import videoBuild from './videoBuild'
  import dataBox from './dataBox'
  import position from './position'

  export default {
    name: 'index',
    data () {
      return {
        positionArr: [
          {
            left: '40%',
            top: '50%'
          }
        ]
      }
    },
    components: { videoBuild, dataBox, bottomMap, position },
    methods: {},
    mounted () {
    }
  }
</script>

<style lang="scss" scoped>
  .index {
    position: relative;

    .videoBuild {
      position: absolute;
      top: 0.5rem;
      left: 50%;
      transform: translate(-50%, 0);
      z-index: 1;
    }

    .dataBox {
      position: absolute;
      z-index: 88;
      right: 0.55rem;
      top: 1.41rem;
    }

    .bottomMap {
      position: absolute;
      bottom: 0.7rem;
      left: 50%;
      z-index: 1;
      transform: translate(-50%, 0);
    }

    .position {
      position: absolute;
      z-index: 6;
      transform: translate(-50%, -50%);
    }

    .smallMap {
      position: absolute;
      width: 0.775rem;
      height: 1.17rem;
      left: 0.38rem;
      bottom: 0.37rem;
      z-index: 2;
    }
  }
</style>
