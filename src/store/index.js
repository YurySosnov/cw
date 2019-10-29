import Vue from 'vue'
import Vuex from 'vuex'
import list from './modules/list'
import create from './modules/create'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		list,
		create
	},
	state: {
		section: 'home', // home, create, dictation
	},
	mutations: {
		setWordsCount: function(state,count) {
			state.newDictWordsCount = count;
		},
		setSection: function(state,sectionName) {
			state.section = sectionName;
		}
	},
	actions: {

	},
	getters: {
		getNewDictationData: function(state) {
			return {
				newDictName: state.newDictName,
				newDictWordsCount: state.newDictWordsCount,
				newDictLangFrom: state.newDictLangFrom,
				newDictLangTo: state.newDictLangTo
			}
		},
		getSection: function(state) {
			return state.section;
		}
	}
})
