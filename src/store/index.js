import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		dictList: [],
		dictListChecked: [],
		showedDictList: [],
		newDictName: '',
		newDictWords: 0,
		newDictLangFrom: 'en',
		newDictLangTo: 'en',
		mode: 'default'
	},
	mutations: {
		removeDictItem: function (state, id) {
			state.dictList = state.dictList.filter(item => {
				return item.id !== id;
			});
			state.showedDictList = state.showedDictList.filter(item => {
				return item.id !== id;
			});
		},
		removeSelectedDictItems: function (state) {
			state.dictList = state.dictList.filter(item => {
				return !item.checked;
			});
			state.showedDictList = state.showedDictList.filter(item => {
				return !item.checked;
			});
		},
		updateDictList: function (state, list) {
			state.dictList = list;
			state.showedDictList = list.filter(()=>{
				return true;
			});
		},
		searchDict: function(state, searchable) {
			if (searchable !== '') {
				state.showedDictList = state.dictList.filter(item=>{
					return (item.title.indexOf(searchable) > -1);
				});
			} else {
				state.showedDictList = state.dictList.filter(()=>{
					return true;
				});
			}
		},
		toggleCheckMode: function(state) {
			if (state.mode === 'listCheck') {
				state.mode = 'default';
			} else {
				state.mode = 'listCheck';
			}
		},
		checkItem: function(state, id) {
			state.dictList.forEach(item => {
				if (item.id === id) {
					state.dictListChecked.push(item);
					item.checked = true;
					return true;
				}
			});
			state.showedDictList.forEach(item => {
				if (item.id === id) {
					state.dictListChecked.push(item);
					item.checked = true;
					return true;
				}
			});
		},
		uncheckItem: function(state, id) {
			state.dictListChecked.forEach((item, index) => {
				if (item.id === id) {
					state.dictListChecked.splice(index,1);
					item.checked = false;
					return true;
				}
			});
		},
		editDictation: function(state, id) {
			
		},
		downloadDictation: function(state, id) {

		},
		downloadSelectedDictations: function(state) {

		}
	},
	actions: {
		async fetchDictList(ctx) {
			// const res = await fetch('http://cws/getDictList.php');
			// const list = await res.json();

			const list = [
				{ "id": "0123", "langs": ["en", "ru"], "checked": false, "initLang": "en", "title": "Technologies" },
				{ "id": "0124", "langs": ["en", "ru"], "checked": false, "initLang": "en", "title": "Food" },
				{ "id": "0125", "langs": ["en", "ru"], "checked": false, "initLang": "en", "title": "Travel" },
				{ "id": "0126", "langs": ["en", "ru"], "checked": false, "initLang": "en", "title": "Science" },
				{ "id": "0127", "langs": ["en", "ru"], "checked": false, "initLang": "en", "title": "Space" }
			];

			ctx.commit('updateDictList', list);
		},
	},
	getters: {
		allDictations: function (state) {
			return state.showedDictList;
		},
		getMode: function(state) {
			return state.mode;
		},
		isItemChecked: function(state, id) {
			let checked = false;
			state.dictListChecked.forEach(item => {
				if (item.id === id) {
					checked = true;
					return true;
				}
			});
			return checked;
		}
	}
})
