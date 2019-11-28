<template>
  <div class="leftBox">
    <BoxOne :delayShow="delayShow"></BoxOne>
    <BoxTwo :delayShow="delayShow"></BoxTwo>
    <BoxThree :delayShow="delayShow"></BoxThree>
    <BoxFour :delayShow="delayShow"></BoxFour>
    <box :obj="obj"></box>
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
      return {
obj:{
  title:''
}
      }
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
