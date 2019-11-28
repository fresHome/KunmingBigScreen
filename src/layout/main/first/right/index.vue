<template>
    <div class="index">
        <BoxFive></BoxFive>
        <BoxSix></BoxSix>
        <BoxSeven></BoxSeven>
        <BoxEight></BoxEight>
    </div>
</template>

<script>
	import BoxFive from './BoxFive'
	import BoxSix from './BoxSix'
	import BoxSeven from './BoxSeven'
	import BoxEight from './BoxEight'

	export default {
		name: 'index',
		data () {
			return {}
		},
		components: {
			BoxSeven,
			BoxEight,
			BoxSix,
			BoxFive
		}
	}
</script>
