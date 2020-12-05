<template>
	<div class="status-bar" v-if="isAuthenticated">
		<p>Done</p>
		<ul>
			<li v-for="todo in doneTodos" :key="todo.id">
				{{ todo.title }}
			</li>
		</ul>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'StatusBar',
	computed: mapGetters(['doneTodos', 'isAuthenticated'])
}
</script>

<style>
.status-bar {
	padding: 5px;
	text-align: center;
	background: rgb(240, 240, 240);
	color: black;
}
</style>
