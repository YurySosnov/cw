export default {
    state: {
        dictationsAll: [],
        dictationsSelected: [],
        dictationsShowed: [],
        listMode: 'default',

        /* ENV */
		enableAdvancedListOptons: true
    },
    actions: {
		async fetchDictationsList(ctx) {
			// const res = await fetch('http://cws/getDictList.php');
			// const list = await res.json();

			const list = [
				{ "id": "0123", "langs": ["en", "ru"], "checked": false, "initLang": "en", "title": "Technologies" },
				{ "id": "0124", "langs": ["en", "ru"], "checked": false, "initLang": "en", "title": "Food" },
				{ "id": "0125", "langs": ["en", "ru"], "checked": false, "initLang": "en", "title": "Travel" },
				{ "id": "0126", "langs": ["en", "ru"], "checked": false, "initLang": "en", "title": "Science" },
				{ "id": "0127", "langs": ["en", "ru"], "checked": false, "initLang": "en", "title": "Space" }
			];

			ctx.commit('updateDictationsList', list);
		},
	},
    mutations: {
        removeDictation: function (state, id) {
			state.dictationsAll = state.dictationsAll.filter(item => {
				return item.id !== id;
			});
			state.dictationsShowed = state.dictationsShowed.filter(item => {
				return item.id !== id;
			});
		},
		removeSelectedDictations: function (state) {
			state.dictationsAll = state.dictationsAll.filter(item => {
				return !item.checked;
			});
			state.dictationsShowed = state.dictationsShowed.filter(item => {
				return !item.checked;
			});
		},
		updateDictationsList: function (state, list) {
			state.dictationsAll = list.filter(()=>{
				return true;
			});
			state.dictationsShowed = list.filter(()=>{
				return true;
			});
		},
		searchDictations: function(state, searchable) {
			if (searchable !== '') {
				state.dictationsShowed = state.dictationsAll.filter(item=>{
					return (item.title.toLowerCase().indexOf(searchable.toLowerCase()) > -1);
				});
			} else {
				state.dictationsShowed = state.dictationsAll.filter(()=>{
					return true;
				});
            }
		},
		toggleCheckMode: function(state) {
			if (state.listMode === 'listCheck') {
				state.listMode = 'default';
			} else {
				state.listMode = 'listCheck';
			}
        },
		checkDictation: function(state, id) {
			state.dictationsAll.forEach(item => {
				if (item.id === id) {
					state.dictationsSelected.push(item);
					item.checked = true;
					return true;
				}
			});
			state.dictationsShowed.forEach(item => {
				if (item.id === id) {
					state.dictationsSelected.push(item);
					item.checked = true;
					return true;
				}
			});
		},
		uncheckDictation: function(state, id) {
			state.dictationsSelected.forEach((item, index) => {
				if (item.id === id) {
					state.dictationsSelected.splice(index,1);
					item.checked = false;
					return true;
				}
			});
        },
        isItemChecked: function(state, id) {
			let checked = false;
			state.dictListations.selected.forEach(item => {
				if (item.id === id) {
					checked = true;
					return true;
				}
			});
			return checked;
		},
    },
    getters: {
        getDictations(state) {
            return state.dictationsShowed;
        },
        getListMode(state) {
			return state.listMode;
        },
        isAdvancedDictationsListOptions(state) {
            return state.enableAdvancedListOptons;
        },
        isAdvancedDictationsItemOptions(state) {
            return state.enableAdvancedItemOptions;
        }
    }
}