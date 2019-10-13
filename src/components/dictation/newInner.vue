<template>
    <div class="new-dictation-inner">
        <div class="ui-line">
            <div class="ui-block">
                <div class="ui-block-name">Name</div>
                <input type="text" class="ui-input input-dict-name">
            </div>
            <div class="ui-block">
                <div class="ui-block-name">Words</div>
                <input type="text" class="ui-input input-words-count">
            </div>
        </div>
        <div class="ui-line">
            <div class="ui-block">
                <div class="ui-block-name">Language</div>
                <UiSelect 
                    :list="langLists[0]" 
                    :htmlClass="'select-lang'"
                    :emitName="'setFirstLang'"
                    :update="'applyFirstLang'"
                    @setFirstLang="setFirstLang"></UiSelect>
            </div>
            <div class="ui-block">
                <div class="ui-block-name">to</div>
                <UiSelect 
                    :list="langLists[1]" 
                    :htmlClass="'select-lang'"
                    :emitName="'setSecondLang'"
                    :update="'applySecondLang'"
                    @setSecondLang="setSecondLang"></UiSelect>
            </div>
        </div>
        <div class="ui-line ui-line-last ui-line-align-right">
            <button class="ui-button arrow" :class="{'disabled':!createEnabled}">Create</button>
        </div>
    </div>
</template>

<script>
import UiSelect from '@/components/uiElements/Select.vue'

export default {
    name: 'NewInner',
    components: {
        UiSelect
    },
    props: {
        
    },
    methods: {
        setLang: function(value,num) {
            let num2 = (num === 0) ? 1 : 0;
            this.langLists[num].forEach(lang => {
                if (lang.value === value) {
                    lang.selected = true;
                    this.langs[num] = value;
                } else {
                    lang.selected = false;
                }
            });
            this.langLists[num2].forEach(lang => {
                if (lang.value !== value) {
                    lang.selected = true;
                    this.langs[num2] = lang.value;
                    return true;
                }
            });
            this.firstLang = this.langs[0];
            this.secondLang = this.langs[1];
        },
        setFirstLang: function(value) {
            this.setLang(value,0);
            this.$root.$emit('applySecondLang',this.secondLang);
        },
        setSecondLang: function(value) {
            this.setLang(value,1);
            this.$root.$emit('applyFirstLang',this.firstLang);
        },
    },
    data: function() {
        let langList = [
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
        };
    },
    mounted: function() {
        this.$root.$emit('applyFirstLang',this.firstLang);
        this.$root.$emit('applySecondLang',this.secondLang);
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
.select-lang {
    .select-field,
    .select-item {
        width: 250px;
    }
}
</style>