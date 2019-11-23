<template>
  <div class="leftBox">
    <BoxOne></BoxOne>
    <BoxTwo></BoxTwo>
    <BoxThree></BoxThree>
    <BoxFour></BoxFour>
  </div>
</template>

<script>
  import BoxFour from './BoxFour'
  import BoxThree from './BoxThree'
  import BoxTwo from './BoxTwo'
  import BoxOne from './BoxOne'

  export default {
    name: 'leftBox',
    data () {
      return {}
    },
    components: {
      BoxThree, BoxTwo, BoxOne, BoxFour
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .leftBox {
    /*margin-left: 0.285rem;*/
    margin-top: 0.165rem;
  }
</style>
