<template>
  <div class="leftBox">
    <BoxOne :delayShow="delayShow"></BoxOne>
    <BoxTwo :delayShow="delayShow"></BoxTwo>
    <BoxThree :delayShow="delayShow"></BoxThree>
    <BoxFour :delayShow="delayShow"></BoxFour>
  </div>
</template>

<script>
  import BoxFour from '../box/BoxFour'
  import BoxThree from '../box/BoxThree'
  import BoxTwo from '../box/BoxTwo'
  import BoxOne from '../box/BoxOne'

  export default {
    name: 'leftBox',
    data () {
      return {}
    },
    props: ['delayShow'],
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
