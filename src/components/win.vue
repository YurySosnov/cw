<template>
    <div class="win" :class="[{'minimized' : minimized}, htmlClass]">
        <div class="win-top">
            <div class="win-title">{{ title }}</div>
            <div class="win-controls" v-if="hasControls">
                <template v-for="item in winControls">
                    <div 
                        v-if="item === 'expand'"
                        class="win-control win-control-expand" 
                        :key="item"
                        @click="expand"></div>
                </template>
            </div>
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
@import "../styles/_variables.less";

.win {
    .win-top {
        background-color: @win_top_background_color;
        height: @win_top_height;
        border-top-left-radius: @border_radius_big;
        border-top-right-radius: @border_radius_big;
        position: relative;
        overflow:hidden;
        .win-title {
            padding-left: @win_padding;
            color: @win_title_color;
            line-height: @win_top_height;
            font-size: @win_title_font_size;
        }
    }
    .win-body {
        background-color: @win_background_color;
        border-bottom-left-radius: @border_radius_big;
        border-bottom-right-radius: @border_radius_big;
        padding: @win_padding;
    }
    .win-controls {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: flex-end;
    }
    .win-control {
        width: @win_top_height;
        height: @win_top_height;
        cursor: pointer;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 16px;
        &:hover {
            background-color: rgba(0,0,0,.1);
        }
        &-expand {
            background-image: url('../assets/minus.svg');
        }
    }
    &.minimized {
        .win-top {
            background-color: @ui_blue;
            border-radius: @border_radius_big;
            .win-title {
                color: #fff;
            }
        }
        .win-body {
            display: none;
        }
        .win-control {
            &-expand {
                background-image: url('../assets/plus.svg');
            }
        }
    }
}

</style>