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
		removeDictItem: function (state, id) {
			state.dictList = state.dictList.filter(item => {
				return item.id !== id;
			});
		},
		updateDictList: function (state, list) {
			state.dictList = list;
		},
	},
	actions: {
		async fetchDictList(ctx) {
			// const res = await fetch('http://cws/getDictList.php');
			// const list = await res.json();

			const list = [
				{ "id": "0123", "langs": ["en", "ru"], "initLang": "en", "title": "Technologies" },
				{ "id": "0124", "langs": ["en", "ru"], "initLang": "en", "title": "Food" },
				{ "id": "0125", "langs": ["en", "ru"], "initLang": "en", "title": "Travel" },
				{ "id": "0126", "langs": ["en", "ru"], "initLang": "en", "title": "Science" },
				{ "id": "0127", "langs": ["en", "ru"], "initLang": "en", "title": "Space" }
			];

			ctx.commit('updateDictList', list);
		},
	},
	getters: {
		allDictations: function (state) {
			return state.dictList;
		}
	}
})
