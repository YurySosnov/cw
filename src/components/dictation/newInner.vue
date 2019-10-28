<template>
    <div class="new-dictation-inner">
        <div class="ui-line">
            <div class="ui-block">
                <div class="ui-block-name">Name</div>
                <input 
                    type="text" 
                    class="ui-input input-dict-name" 
                    v-model="name" 
                    @input="validateForm">
            </div>
            <div class="ui-block">
                <div class="ui-block-name">Words</div>
                <input 
                    type="text" 
                    class="ui-input input-words-count" 
                    v-model="wordsCount" 
                    @input="validateForm">
            </div>
        </div>
        <div class="ui-line">
            <div class="ui-block">
                <div class="ui-block-name">Language</div>
                <select name="" id="" class="ui-select select-lang">
                    <option value="en">English</option>
                    <option value="ru">Russian</option>
                </select>
            </div>
            <div class="ui-block">
                <div class="ui-block-name">to</div>
                <select name="" id="" class="ui-select select-lang">
                    <option value="en">English</option>
                    <option value="ru">Russian</option>
                </select>
            </div>
        </div>
        <div class="ui-line ui-line-last ui-line-align-right">
            <button 
                class="ui-button " 
                :class="{'disabled':!createEnabled}"
                @click="createNewDictation">Create</button>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'NewInner',
    methods: {
        ...mapMutations(['setWordsCount','setSection']),
        validateForm: function() {
            this.setWordsCount(this.wordsCount);
            this.createEnabled = (this.name.length > 0 && parseInt(this.wordsCount) > 0);
        },
        createNewDictation: function() {
            if (this.createEnabled) {
                this.setSection('create');
            }
        }
    },
    data: function() {
        const langList = [
            {
                text: 'English',
                value: 'en'
            },
            {
                text: 'Rusian',
                value: 'ru'
            }
        ];
        let langLists = [
            langList,
            langList
        ];

        let langs = [
            langList[0].value,
            langList[1].value
        ];
        return {
            langs: [],
            firstLang: langs[0],
            secondLang: langs[1],
            langLists: langLists,
            createEnabled: false,

            name: '',
            wordsCount: 0
        };
    },
    mounted: function() {

    }
}
</script>

<style lang="less">
.ui-input {
    &.input-dict-name {
        width: 360px;
    }
    &.input-words-count {
        width: 100px;
        text-align: center;
    }
}
.ui-select.select-lang {
    width: 250px;
}
</style>