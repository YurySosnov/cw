export default {
    state: {
        newDictName: '',
        newDictWordsCount: 0,
        newDictLangFrom: 'en',
        newDictLangTo: 'en',
        createEnabled: false
    },
    mutations: {
        validateForm: function() {
            return true;
        },
        setNewDictationName: function(state,value) {
            state.newDictName = value;
        }
    },
    actions: {},
    getters: {
        newDictationName: function(state) {
            return state.newDictName;
        },
        newDictationWordsCount: function(state) {
            return state.newDictWordsCount;
        },
        newDictationLangFrom: function(state) {
            return state.newDictLangFrom;
        },
        newDictationLangTo: function(state) {
            return state.newDictLangTo;
        },
        createDictationEnabled: function(state) {
            return state.createEnabled;
        }
    }
}