<template>
  <div class="dataBox" :style="{img:'dataBox-bg.png'}|imgLoad()">
    <p class="name">云南昊邦医药技术研发基地</p>
  </div>
</template>

<script>
  export default {
    name: 'dataBox',
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .dataBox {
    width: 3.355rem;
    height: 3.76rem;
    box-sizing: border-box;
    padding: 0.4rem 0.3rem;

    .name {
      font: bold 0.15rem/0.73rem NotoSansHans-Bold;
      color: #fff;
    }
  }
</style>
