<template>
  <div class="index">
    <div class="top">
      <pieLevel2></pieLevel2>
      <pieLevel1></pieLevel1>
      <pieLevel2></pieLevel2>
    </div>
    <div class="bottom">
      <pieLevel3></pieLevel3>
      <pieLevel3></pieLevel3>
      <pieLevel3></pieLevel3>
      <pieLevel3></pieLevel3>
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
      return {}
    },
    methods: {},
    mounted () {
    }
  }
</script>

<style lang="scss" scoped>
  .index {
  }
</style>
