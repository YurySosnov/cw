<template>
<div class="dict-list-line">
    <div class="dict-list-item" :class="{'checked':checked}">
        <div class="dict-list-item-left">
            <div class="ui-icons-controls">
                <template v-if="getListMode() === 'listCheck'">
                    <Icon 
                        :class="{'dn':!checked}"
                        :iconClass="'accept'" 
                        :action="'uncheckDictation'" 
                        :customTitle="'Uncheck'"
                        :actionData="id"></Icon>
                    <Icon 
                        :class="{'dn':checked}"
                        :iconClass="'check'" 
                        :action="'checkDictation'" 
                        :customTitle="'Check'"
                        :actionData="id"></Icon>
                </template>
                <Icon 
                    :iconClass="'remove'" 
                    :action="'removeDictation'" 
                    :actionData="id"></Icon>
                <Icon v-if="enableListItemAdvancedOptions"
                    :iconClass="'download'"
                    :action="'downloadDictation'"
                    :actionData="id"></Icon>
                <Icon v-if="enableListItemAdvancedOptions"
                    :iconClass="'edit'"
                    :action="'editDictation'"
                    :actionData="id"></Icon>
            </div>
        <div class="title">{{ title }}</div>
        </div>
        <div class="dict-list-item-right">
            <select name="" id="" class="ui-select">
                <option value="en">English</option>
                <option value="ru">Russian</option>
            </select>
        </div>
    </div>
    
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Icon from '@/components/uiElements/icon.vue'

export default {
    name: 'DictListItem',
    components: {
        Icon
    },
    props: {
        title: String,
        initLang: String,
        langs: Array,
        id: String,
        checked: Boolean
    },
    methods: {
        ...mapGetters(['getListMode']),
        isChecked: function() {
            return this.checked;
        }
    },
    async mounted() {
        // this.removeDictItem(this.id);
    },
    data: function() {
        return {
            enableListItemAdvancedOptions: this.$store.state.enableListItemAdvancedOptions
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
    border-radius: @border_radius_middle;
    display: flex;
    position: relative;
    justify-content: space-between;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all .2s;
    box-sizing: content-box;
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
        font-size: 100%;
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
    .ui-select {
        margin-top: @ui_height * .1;
        height: @ui_height * 0.8;
        line-height: @ui_height * 0.8;
        background-position: right @ui_height * .2 center;
    }

    &:hover {
        background-color: #ffffff33;
    }
}

.dict-item-lang-select {
    .select-field {
        width: 200px;
    }
}

</style>