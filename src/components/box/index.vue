<template>
  <div class="index">
    <div class="beforeBox" :style="{img:'zu57.png'} | imgLoad()"></div>
    <div class="box_top">
      <div :style="{img:'zu56.png'} | imgLoad()" class="icon"></div>
      <div class="text">{{ title }}</div>
      <div class="line" :style="{img:'zu57.png'}|imgLoad()" v-if="lineWith!='short'"></div>
      <div class="line shortLine" :style="{img:'zu57.png'}|imgLoad()" v-else></div>
      <div class="tab" v-if="tabContent">
        <div class="tab1" :key="index" v-for="(item,index) in tabContent"
             :style="activeTab==index?tabActive:tabNormal| imgLoad()"
             @click="tabChange(item,index)">{{item.name}}
        </div>
      </div>
    </div>
    <div class="content fadeInUp">
      <slot></slot>
    </div>
    <div class="afterBox" :style="{img:'zu37.png'} | imgLoad()"></div>
    <div :style="{img:'zu58.png'} | imgLoad()" class="flowDiv"></div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        show: false,
        activeTab: 0,
        tabActive: {
          img: 'tab1.png',
          color: '#0B163F'
        },
        tabNormal: {
          img: 'tab2.png',
          color: '#B5BDDB'
        }
      }
    },
    props: ['title', 'lineWith', 'activeContent', 'tabContent'],
    methods: {
      tabChange (item,index) {
        this.activeTab = index
        window.eventHub.$emit('changeTab', item)
      }
    },
    mounted () {
      setTimeout(() => {
        this.show = true
      }, 4000)
    }
  }
</script>

<style lang="scss" scoped>
  .index {
    width: 3.75rem;
    position: relative;
    height: 2rem;
    margin-bottom: 0.215rem;

    .beforeBox {
      width: 100%;
      height: 0.005rem;
      position: absolute;
      top: -0.08rem;
      left: 0;
      animation: scaleLine 1s forwards; //1秒30
    }

    @keyframes scaleLine {
      from {
        transform: scaleX(0);
      }
      to {
        transform: scaleX(1);
      }
    }

    .afterBox {
      width: 100%;
      height: 0.06rem;
      position: absolute;
      bottom: 0.15rem;
      left: 0;
      z-index: 1;
      transform: scaleX(0);
      animation: scaleLine 0.5s 1.1677s forwards; //1秒30
    }

    .flowDiv {
      width: 100%;
      background-color: #0B163F;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      opacity: 0;
      height: 0;
      /*height: 2rem;*/
      animation: heightFlow 1s 0.5s forwards; //1秒30
    }

    @keyframes heightFlow {
      0% {
        height: 0.6rem; //30%
        top: 0.7rem;
        opacity: 0;
      }
      50% {
        opacity: 1;
        top: 0.35rem;
        height: 1.3rem;
      }
      100% {
        height: 2rem; //100%
        top: 0;
        opacity: 1;
      }
    }

    .box_top {
      height: 0.15rem;
      opacity: 0;
      line-height: 0.15rem;
      color: #53FFF8;
      font-size: 0.16rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 0.19rem;
      padding-top: 0.18rem;
      z-index: 2;
      overflow: hidden;
      margin-top: 0.15rem;
      /*animation: opacityChange 1.5s 3.5s forwards;*/
      animation: heightFlow1 0.5s 1.167s forwards; //1秒30

      @keyframes heightFlow1 {
        from {
          /*height: 0;*/
          margin-top: 0.15rem;
          opacity: 0;
        }
        to {
          /*height: 0.15rem;*/
          margin-top: 0;
          opacity: 1;
        }
      }

      .icon {
        width: 0.15rem;
        height: 0.155rem;
        margin-right: 0.045rem;

        &:first-child {
          margin-right: 0.01rem;
        }
      }

      .text {
        font: 0.125rem/0.12rem #13BAFF NotoSansHans-Regular;
      }

      .line {
        width: 2.63rem;
        height: 0.065rem;
        margin-left: 0.04rem;
      }

      .shortLine {
        width: 2.35rem;
      }

      .tab {
        display: flex;
        position: absolute;
        right: 0.12rem;
        top: 0.11rem;

        .tab1 {
          width: 0.425rem;
          height: 0.125rem;
          font: 0.075rem/0.125rem NotoSansHans-Regular;
          /*color: #0B163F;*/
          margin-right: 0.02rem;
          text-align: center;
        }

        .tab2 {
          width: 0.425rem;
          height: 0.125rem;
          font: 0.075rem/0.125rem NotoSansHans-Regular;
          /*color: #B5BDDB;*/
          text-align: center;
        }
      }
    }

    .content {
      position: relative;
      height: 1.45rem;
      padding: 0.1rem 0.2rem;
      display: flex;
      box-sizing: border-box;
    }
  }
</style>
