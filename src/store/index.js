import Vue from 'vue'
import Vuex from 'vuex'

// Import modules
import auth from './modules/auth'
import todos from './modules/todos'

Vue.use(Vuex)

const storeData = {
	modules: {
		auth,
		todos
	}
}

const store = new Vuex.Store(storeData)

export default store
