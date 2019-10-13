<template>
    <div class="dict-list-item">
        <div class="title">{{ title }}</div>
        <UiSelect :selectData="selectData"></UiSelect>
        <button class="button arrow start"></button>
    </div>
</template>

<script>
import UiSelect from '@/components/uiElements/Select.vue'

export default {
    name: 'DictListItem',
    components: {
        UiSelect
    },
    props: {
        title: String,
        initLang: String,
        langs: Array
    },
    data: function() {
        let possibleLangs = {
            'en' : 'English',
            'ru' : 'Russian'
        };
        let selectData = {
            htmlClass: 'dict-item-select',
            list: [],
            rounded: false
        };
        this.langs.forEach(langItem => {
            if (typeof possibleLangs[langItem] !== 'undefined') {
                selectData.list.push({
                    value: langItem,
                    text: possibleLangs[langItem]
                });
            }
        });
        return {
            selectData: selectData,
        }
    }
}
</script>

<style lang="less">
@import "../../styles/_variables.less";

.dict-list-item {
    width: 100%;
    background-color: @win_background_color;
    border-radius: @border_radius_middle;
    display: flex;
    position: relative;
    justify-content: flex-end;
    margin-bottom: 20px;
    .title {
        position: absolute;
        left: 0;
        top: 0;
        height: @ui_height;
        line-height: @ui_height;
        font-size: @font_size;
        color: @text_color;
        padding: 0 16px;
    }
    .button.start {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        padding: 0;
        width: @ui_height;
        background-position: center;
    }
}

</style>