<template>
    <div class="win-top">
        <div class="ui-icons-controls" v-if="hasControls">
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
</template>

<script>
export default {
    name: 'WinTop',
    props: {
        id: String,
        controls: Array,
        title: String,
        minimized: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        expand: function() {
            this.$parent.$emit('expand');
        },
        validateControls: function() {

            this.winControls = [];

            const avalibleControls = ['expand','close'];

            this.winControls = this.controls.filter(key=>{
                return avalibleControls.indexOf(key) > -1
            });
            
            return this.winControls.length > 0;
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