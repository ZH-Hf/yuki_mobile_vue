<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data(){
			
			return {}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	ul,
	li,
	ol {
		list-style: none;
	}
	
	html,
	body {
		/*height: 100%;*/
		margin-bottom: 30px;
	}
	
	body {
		font: 0.12rem/1 Lucida Grande, 'Microsoft YaHei', "Lucida Grande", "Lucida Sans Unicode", Helvetica, Arial, Verdana, sans-serif;
	}
	
	.lunbo img {
		float: left;
		width: 7.5rem;
		height: 4.2rem;
	}
	
	#app {
		/*height: 100%;*/
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 40px;
	}
</style>