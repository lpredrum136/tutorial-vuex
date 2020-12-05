<template>
	<div class="todo-list">
		<TodoForm />
		<ul v-if="isAuthenticated">
			<li
				v-for="todo in todos"
				:key="todo.id"
				:class="todo.completed ? 'completed' : ''"
			>
				{{ todo.title }}

				<input
					type="checkbox"
					:checked="todo.completed"
					@change="MARK_COMPLETE(todo.id)"
				/>
				<button @click="deleteTodo(todo.id)">Delete</button>
			</li>
		</ul>
		<p v-else style="text-align: center;">Not authorised</p>
	</div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
import TodoForm from './TodoForm'

export default {
	name: 'Todos',
	components: { TodoForm },
	computed: mapGetters(['todos', 'isAuthenticated']),
	created() {
		this.getTodos()
	},
	methods: {
		...mapMutations(['MARK_COMPLETE']),
		/* deleteTodo(todoId) {
			this.$store.dispatch('deleteTodo', todoId)
		} */
		...mapActions(['deleteTodo', 'getTodos'])
	}
}
</script>

<style>
.todo-list ul {
	padding: 0 10px 10px 10px;
	list-style-type: none;
}

.todo-list li {
	padding: 10px;
	cursor: pointer;
	margin: 10px 0;
	border-radius: 4px;
	background: rgb(240, 240, 240);
	color: black;
}

.todo-list li input[type='checkbox'] {
	-ms-transform: scale(2); /* IE */
	-moz-transform: scale(2); /* FF */
	-webkit-transform: scale(2); /* Safari and Chrome */
	-o-transform: scale(2); /* Opera */
	transform: scale(2);
	padding: 10px;
	float: right;
}

.todo-list li.completed {
	background: rgb(119, 218, 243);
}

.todo-list li button {
	float: right;
	margin-right: 20px;
}

.todo-list li button:hover {
	cursor: pointer;
	background: red;
	color: white;
}
</style>
