<template>
<div class="dict-list-line">
    <div class="dict-list-item">
        <div class="dict-list-item-left">
            <div class="win-controls">
            <button class="ui-icon ui-icon-remove dict-list-item-remove" @click="removeItem">
                <span class="icon"></span>
            </button>
        </div>
        <div class="title">{{ title }}</div>
        </div>
        <div class="dict-list-item-right">
            <UiSelect 
                :list="langList" 
                :htmlClass="'dict-item-lang-select'"></UiSelect>
        </div>
    </div>
    
</div>
</template>

<script>
import UiSelect from '@/components/uiElements/Select.vue'

export default {
    name: 'DictListItem',
    components: {
        UiSelect,
        
    },
    props: {
        title: String,
        initLang: String,
        langs: Array,
        id: String
    },
    data: function() {
        let possibleLangs = {
            'en' : 'English',
            'ru' : 'Russian'
        };
        let langList = []
        this.langs.forEach(langItem => {
            if (typeof possibleLangs[langItem] !== 'undefined') {
                langList.push({
                    value: langItem,
                    text: possibleLangs[langItem]
                });
            }
        });
        return {
            langList: langList,
        }
    },
    methods: {
        removeItem: function() {
            this.$root.$emit('setRemovableItemId',this.id);
        }
    }
}
</script>

<style lang="less">
@import "../../styles/_variables.less";

.dict-list-line {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
}

.dict-list-item {
    width: 100%;
    .ui_element_background;
    border-radius: @border_radius_middle;
    display: flex;
    position: relative;
    justify-content: space-between;
    margin-bottom: 20px;
    &-left {
        display: flex;
        justify-content: flex-start;
    }
    &-right {
        display: flex;
        justify-content: flex-end;
        padding-right: @ui_height * .1;
    }
    .title {
        height: @ui_height;
        line-height: @ui_height;
        font-size: @font_size;
        color: @ui_color_text;
    }
    .ui-button.start {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        padding: 0;
        width: @ui_height;
        background-position: center;
        margin-left: @ui_height * .1;
    }
    .select {
        margin-top: @ui_height * .1;
        .select-field {
            height: @ui_height * 0.8;
            line-height: @ui_height * 0.8;
            background-position: right @ui_height * .2 center;
        }
    }
}

.dict-list-item-remove {
    // margin: calc(@ui_height * .1) 0 0 calc(@ui_height * .2);
    // width: @ui_icon_size;
    // min-width: @ui_icon_size;
}

.dict-item-lang-select {
    .select-field {
        width: 200px;
    }
}

</style>