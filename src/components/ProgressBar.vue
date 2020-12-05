<template>
	<p class="progress-bar" v-if="isAuthenticated">Progress: {{ progress }}%</p>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'Progressbar',
	computed: mapGetters(['progress', 'isAuthenticated'])
}
</script>

<style>
.progress-bar {
	padding: 5px;
	text-align: center;
	background: rgb(106, 248, 118);
	color: black;
}
</style>
