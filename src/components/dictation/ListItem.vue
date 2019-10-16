<template>
<div class="dict-list-line">
    <div class="dict-list-item">
        <div class="title">{{ title }}</div>
        <UiSelect 
            :list="langList" 
            :htmlClass="'dict-item-lang-select'" 
            :rounded="false"></UiSelect>
        <button class="ui-button arrow start"></button>
    </div>
    <div class="dict-list-item-remove" @click="removeItem"></div>
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
    .ui-button.start {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        padding: 0;
        width: @ui_height;
        background-position: center;
    }
}

.dict-list-item-remove {
    width: calc(@ui_height * .8);
    flex-shrink: 0;
    height: @ui_height;
    margin-left: calc(@ui_height * .2);
    background-repeat: no-repeat;
    background-position: right 0 center;
    background-size: 100%;
    background-image: url('../../assets/remove.svg');
    cursor: pointer;
    &:hover {
        opacity: .5;
    }
}

.dict-item-lang-select {
    .select-field {
        width: 200px;
    }
}

</style>