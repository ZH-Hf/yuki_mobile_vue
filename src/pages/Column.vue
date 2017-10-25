<template>
	<div>
		<search></search>
		<goodsOneList/>
		<my-footer/>
	</div>

</template>

<script>
	import myFooter from '../components/myFooter'
	import search from '../components/long_search'
	import goodsOneList from '../components/column_list'
	export default {
		components:{
			myFooter,
			search,goodsOneList
		},
		data() {
			return {}
		}
	}
</script>

<style>

</style>