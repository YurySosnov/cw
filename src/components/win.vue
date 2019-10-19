<template>
    <div class="win" :class="[{'minimized' : minimized}, htmlClass]">
        <div class="win-top">
            <div class="win-controls" v-if="hasControls">
                <template v-for="item in winControls">
                    <button 
                        v-if="item === 'expand'"
                        class="win-control win-control-expand ui-icon ui-icon-expand"
                        :class="{'minimized' : minimized}" 
                        :key="item"
                        @click="expand"><span class="icon"></span></button>
                </template>
            </div>
            <div class="win-title">{{ title }}</div>
        </div>
        <div  class="win-body">
            <NewDictationInner v-if="winType === 'newDictation'"></NewDictationInner>
        </div>
    </div>
</template>

<script>
import NewDictationInner from '@/components/dictation/NewInner.vue'

export default {
    name: 'Win',
    components: {
        NewDictationInner
    },
    props: {
        title: {
            type: String,
            default: 'Title'
        },
        content: {
            type: String,
            default: ''
        },
        controls: {
            type: Object,
            default: function() {
                return {};
            }
        },
        htmlClass: {
            type: String,
            default: ''
        },
        winType: {
            type: String,
            default: ''
        }
    },
    methods: {
        validateControls: function() {

            this.winControls = [];

            let avalibleControls = ['expand','close'];
            let hasControls = false;
            
            for (let key in this.controls) {
                if (avalibleControls.indexOf(key) > -1) {
                    hasControls = true;
                    this.winControls.push(key);
                }
            }
            return hasControls;
        },
        expand: function() {
            this.minimized = !this.minimized;
        },
        isMinimized: function() {
            if (typeof this.controls.expand !== 'undefined') {
                return !this.controls.expand;
            }
            return false;
        }
    },
    data: function() {
        return {
            hasControls: this.validateControls(),
            minimized: this.isMinimized()
        }
    }
}
</script>

<style lang="less">
@import '../styles/_variables.less';

.win, 
.popup-win {
    border-radius: @border_radius_middle;
    box-shadow: 0 3px 12px #00000033; 
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
    .win-body {
        .ui_element_background;
        border-bottom-left-radius: @border_radius_middle;
        border-bottom-right-radius: @border_radius_middle;
        padding: @win_padding;
    }
    .win-control {
        cursor: pointer;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
    }
    &.minimized {
        .win-top {
            .ui_element_background;
            border-radius: @border_radius_middle;
            .win-title {
                color: #fff;
            }
        }
        .win-body {
            display: none;
        }
    }
}
</style>