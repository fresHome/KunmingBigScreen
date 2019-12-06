<template>
  <div class="index">
    <div class="top">
      <pieLevel2 name="区域内排名" :value="info.areaSort" class="left"></pieLevel2>
      <pieLevel1 :name="info.name" :value="info.total"></pieLevel1>
      <pieLevel2 name="所属产业内排名" :value="info.industrySort" class="right"></pieLevel2>
    </div>
    <div class="bottom">
      <p class="line" :style="{img:'bottom-line2.png'}|imgLoad()"></p>
      <pieLevel3 v-for="item in items" :key="item.name" :name="item.name" :value="item.value"></pieLevel3>
    </div>
  </div>
</template>

<script>
  import pieLevel1 from './pieLevel1'
  import pieLevel2 from './pieLevel2'
  import pieLevel3 from './pieLevel3'

  export default {
    name: 'index',
    components: {
      pieLevel1,
      pieLevel2,
      pieLevel3
    },
    data () {
      return {
        info: {
          name: '爱德华科技信息公司',
          total: 90,
          areaSort: 5,
          industrySort: 13
        },
        items: [
          {
            name: '发展潜力',
            value: 0,
          },
          {
            name: '管理能力',
            value: 0,
          },
          {
            name: '贡献能力',
            value: 0,
          },
          {
            name: '效能水平',
            value: 0,
          },
        ],
      }
    },
    methods: {
      loadData () {

      }
    },
    mounted () {
    }
  }
</script>

<style lang="scss" scoped>
  .index {
    .top {
      display: flex;
      justify-content: center;
      height: 5rem;
      position: relative;
      padding-top: 0.3rem;
      box-sizing: border-box;

      .pieLevel1 {
        position: absolute;
        top: 0.74rem;
        left: 50%;
        transform: translate(-50%, 0);
      }

      .pieLevel2 {
        position: absolute;
        top: 2.135rem;

        &.left {
          left: 0.7rem;
        }

        &.right {
          right: 0.7rem;
        }
      }
    }

    .bottom {
      display: flex;
      justify-content: center;
      position: relative;
      padding-top: 0.55rem;

      .line {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%);
        width: 8.075rem;
        height: 0.235rem;
      }
    }
  }
</style>
<style>
  .transText {
    background-image: -webkit-linear-gradient(to bottom, #fff, #0BFEFB);
    background-image: linear-gradient(to bottom, #fff, #0BFEFB);
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
