<template>
    <div class="win-top">
        <div class="ui-icons-controls" v-if="hasControls">
            <template v-for="item in winControls">
                <Icon
                    v-if="item === 'expand'"
                    :iconClass="'expand'"
                    :key="item"
                    :action="'expandWindow'"
                    :actionData="winId"></Icon>
            </template>
        </div>
        <div class="win-title">{{ title }}</div>
    </div>
</template>

<script>
import Icon from '@/components/uiElements/icon.vue'

export default {
    name: 'WinTop',
    components: {
        Icon
    },
    props: {
        id: String,
        controls: Array,
        title: String,
        winId: String,
        minimized: Boolean
    },
    methods: {
        validateControls: function() {

            this.winControls = [];

            const avalibleControls = ['expand','close'];

            this.winControls = this.controls.filter(key=>{
                return avalibleControls.indexOf(key) > -1
            });
            
            return this.winControls.length > 0;
        },
        minimizedIconTitle: function() {
            let titleText = this.minimized ? 'Expand' : 'Minimize';
            return titleText;
        }
    },
    data: function() {
        return {
            hasControls: this.validateControls(),
        }
    }
}
</script>

<style lang="less">
@import '../../styles/_variables.less';

.win-top {
    background-color: @win_top_background_color;
    height: @win_top_height;
    border-top-left-radius: @border_radius_middle;
    border-top-right-radius: @border_radius_middle;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    .win-title {
        color: @win_title_color;
        line-height: @win_top_height;
        font-size: @win_title_font_size;
    }
}

.win.minimized {
    .win-top {
        .ui_element_background;
        border-radius: @border_radius_middle;
        .win-title {
            color: #fff;
        }
    }
}
</style>