<template>
	<div id="app">
		<Navbar />
		<Todos />
		<StatusBar />
		<ProgressBar />
	</div>
</template>

<script>
import Todos from './components/Todos'
import Navbar from './components/Navbar'
import StatusBar from './components/StatusBar'
import ProgressBar from './components/ProgressBar'

export default {
	name: 'App',
	components: { Todos, Navbar, StatusBar, ProgressBar }
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background: rgb(219, 219, 219);
	margin: 20px auto;
	width: 90%;
	max-width: 800px;
}
</style>
