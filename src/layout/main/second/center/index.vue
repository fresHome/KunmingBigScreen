<template>
  <div class="index">
    <video-build v-if="current" :current="current"></video-build>
    <bottom-map @changeCurrent="changeCurrent"></bottom-map>
    <data-box v-if="current" :current="current"></data-box>
    <position v-if="current" :style="current.center"></position>
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
        current: ''
      }
    },
    components: { videoBuild, dataBox, bottomMap, position },
    methods: {
      changeCurrent (item) {
        this.current = item
      }
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
      z-index: 999;
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
      z-index: 1888;
    }
  }
</style>
