<template>
    <div class="win" :class="[{'minimized' : minimized}, htmlClass]">
        <WinTop :controls="['expand']" :title="'Create Dictation'" :minimized="minimized"></WinTop>
        <div  class="win-body">
            <NewDictationInner v-if="winType === 'newDictation'"></NewDictationInner>
        </div>
    </div>
</template>

<script>
import NewDictationInner from '@/components/dictation/NewInner.vue'
import WinTop from './winTop.vue'

export default {
    name: 'Win',
    components: {
        WinTop,
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
    },
    mounted: function() {
        this.$on('expand',() => {
            this.expand();
        });
    }
}
</script>

<style lang="less">
@import '../../styles/_variables.less';

.win, 
.popup-win {
    border-radius: @border_radius_middle;
    box-shadow: 0 3px 12px #00000033; 
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
        .win-body {
            display: none;
        }
    }
}
</style>