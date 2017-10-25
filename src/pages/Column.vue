<template>
	<div>
		<search></search>
		Column
		<my-footer/>
	</div>

</template>

<script>
	import myFooter from '../components/myFooter'
	import search from '../components/long_search'
	export default {
		components:{
			myFooter,
			search
		},
		data() {
			return {}
		}
	}
</script>

<style>

</style>