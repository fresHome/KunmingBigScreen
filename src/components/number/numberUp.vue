<template>
  <div class="number">
    <ICountUp
      :delay="delay"
      :endVal="endVal"
      :options="options"
    />
  </div>
</template>

<script>
import ICountUp from 'vue-countup-v2'

export default {
  name: 'numberUp',
  data () {
    return {
      delay: 500,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      }
    }
  },
  components: {
    ICountUp
  },
  props: ['endVal'],
  methods: {}
}
</script>

<style lang="scss" scoped>
  .number {

  }
</style>
