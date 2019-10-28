import Vue from 'vue'
import Vuex from 'vuex'
import list from './modules/list'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		list
	},
	state: {
		newDictName: '',
		newDictWordsCount: 0,
		newDictLangFrom: 'en',
		newDictLangTo: 'en',

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
