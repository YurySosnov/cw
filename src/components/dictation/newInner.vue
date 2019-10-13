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
                    :selectData="firstLangSelectData" 
                    :htmlClass="firstLangSelectData.HtmlClass"></UiSelect>
            </div>
            <div class="ui-block">
                <div class="ui-block-name">to</div>
                <UiSelect 
                    :selectData="secondLangSelectData" 
                    :htmlClass="secondLangSelectData.HtmlClass"></UiSelect>
            </div>
        </div>
        <div class="ui-line ui-line-last ui-line-align-right">
            <button class="button arrow">Create</button>
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
    data: function() {
        return {
            firstLangSelectData: {
                htmlClass: 'select-lang',
                list: [
                    {
                        text: 'English',
                        selected: true,
                        value: 'en'
                    },
                    {
                        text: 'Rusian',
                        selected: false,
                        value: 'ru'
                    }
                ]
            },
            secondLangSelectData: {
                htmlClass: 'select-lang',
                list: [
                    {
                        text: 'English',
                        selected: true,
                        value: 'en'
                    },
                    {
                        text: 'Rusian',
                        selected: false,
                        value: 'ru'
                    }
                ]
            }
        };
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