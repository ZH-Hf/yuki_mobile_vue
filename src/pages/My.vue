<template>
	<div>
		<person-head/>
		<my-footer/>
	</div>
</template>

<script>
	import myFooter from '../components/myFooter'
	import personHead from '../components/personal-head'
	export default {
		components:{
			myFooter,personHead
		},
		data() {
			return {}
		}
	}
</script>

<style>

</style>