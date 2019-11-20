<template>
  <ul class="tab" :style="{img:'tab-line.png'} | imgLoad()">
    <li :class="active==item.type?'active':''"
        @click="changeType(item.type)"
        v-for="(item,index) in list" :key="index">
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'tab',
  data () {
    return {
      list: [
        {
          name: '纳税大户',
          type: 'nsdh'
        },
        {
          name: '上市公司',
          type: 'ssgs'
        },
        {
          name: '独角兽',
          type: 'djs'
        }
      ]
    }
  },
  props: ['active'],
  methods: {
    changeType (type) {
      this.$emit('change', type)
    }
  }
}
</script>

<style lang="scss" scoped>
  .tab {
    width: 3.0rem;
    height: 0.28rem;
    position: absolute;
    right: 1px;
    top: -0.09rem;
    font-size: 0.14rem;
    color: rgba(255, 255, 255, 0.37);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-left: 0.1rem;
    box-sizing: border-box;

    li {
      cursor: pointer;
      width: 30%;
    }

    .active {
      color: #fff;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -0.1rem;
        width: 0.79rem;
        height: 0.14rem;
        background: {
          image: url("../../../public/static/images/tab-active.png");
          size: 0.79rem 0.14rem;
          position: center center;
        };
      }
    }
  }
</style>
