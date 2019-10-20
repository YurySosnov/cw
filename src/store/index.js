import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		dictList: [],
		newDictName: '',
		newDictWords: 0,
		newDictLangFrom: 'en',
		newDictLangTo: 'en'
	},
	mutations: {
		removeDictItem: function(state,id) {
			state.dictList = state.dictList.filter(item => {
				return item.id !== id;
			});
		},
		updateDictList: function(state,list) {
			state.dictList = list;
		}
	},
	actions: {
		async fetchDictList(ctx) {
			const res = await fetch('http://cws/getDictList.php');
			const list = await res.json();
			ctx.commit('updateDictList',list);
		}
	},
	getters: {
		allDictations: function(state) {
			
			return state.dictList;
		}
	}
})
