<template>
    <button 
        class="ui-icon" 
        :class="htmlClass" 
        @click="iconClickAction">
        <span class="icon"></span>
    </button>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'Icon',
    props: {
        iconClass: Array,
        action: {
            type: String,
            default: ''
        },
        actionData: [String, Object, Number, Boolean, Array]
    },
    data: function(){
        let htmlClass = [];
        this.iconClass.forEach(item => {
            htmlClass.push('ui-icon-' + item);
        });
        return {
            isAction: this.action !== '',
            actionName: this.action,
            htmlClass: htmlClass,
        }
    },
    methods: {
        ...mapMutations(['removeDictItem']),
        expandWindow: function (id) {
            this.$root.$emit('expandWindow-' + this.actionData);
        },
        iconClickAction: function() {
            if (this.isAction) {
                if (typeof this[this.action] === 'function') {
                    this[this.action](this.actionData);
                }
            }
        }
    }
}
</script>

<style lang="less">
@import '../../styles/_variables.less';

.ui-icons-controls {
    position: relative;
    min-width: @win_top_height * .4;
    display: flex;
    align-items: center;
}

.ui-icon {
    width: @win_top_height * .5;
    height: @win_top_height * .5;
    margin: @win_top_height * .25 0 @win_top_height * .25 @win_top_height * .25;
    position: relative;
    overflow: hidden;
    &:last-child {
        margin-right: @win_top_height * .25;
    }
    cursor: pointer;
    .icon {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: @ui_icon_color_alpha;
    }
    &:hover {
        .icon {
            opacity: @ui_icon_color_alpha_hover;
        }
        border-color: @ui_color_icon_border_hover;
    }

    &-expand {
        border-radius: 50%;
        background-color: #ffbc3e;
        border: 2px solid @ui_color_icon_border;
        .icon {
            &:before,
            &:after {
                display: block;
                position: absolute;
                content: ' ';
                width: @icon_size;
                height: 2px;
                background-color: @ui_icon_color_source;
                top: 50%;
                left: 50%;
                margin: -1px 0 0 @icon_size * -0.5;
            }
            &:after {
                display: none;
                transform: rotate(90deg);
            }
        }
    }
    &-remove {
        border-radius: 50%;
        background-color: #f05c5c;
        border: 2px solid @ui_color_icon_border;
        .icon {
            &:before,
            &:after {
                display: block;
                position: absolute;
                content: ' ';
                width: @icon_size;
                height: 2px;
                background-color: @ui_icon_color_source;
                top: 50%;
                left: 50%;
                margin: -1px 0 0 @icon_size * -0.5;
                transform: rotate(45deg);
            }
            &:after {
                transform: rotate(135deg);
            }
        }
    }
    &-accept {
        border-radius: 50%;
        background-color: #7fbe45;
        border: 2px solid @ui_color_icon_border;
        .icon {
            &:before,
            &:after {
                display: block;
                position: absolute;
                content: ' ';
                width: @icon_size * .5;
                height: 2px;
                background-color: @ui_icon_color_source;
                top: 50%;
                left: 50%;
                margin: 0 0 0 @icon_size * -0.47;
                transform: rotate(45deg);
            }
            &:after {
                width: @icon_size;
                transform: rotate(135deg);
                margin: -1px 0 0 @icon_size * -0.3;
            }
        }
    }
    &-remove-accept {
        background-color: #f05c5c;
    }

    &-close {
        border-radius: 50%;
        background-color: #9e9e9e;
        border: 2px solid @ui_color_icon_border;
        .icon {
            &:before,
            &:after {
                display: block;
                position: absolute;
                content: ' ';
                width: @icon_size;
                height: 2px;
                background-color: @ui_icon_color_source;
                top: 50%;
                left: 50%;
                margin: -1px 0 0 @icon_size * -0.5;
                transform: rotate(45deg);
            }
            &:after {
                transform: rotate(135deg);
            }
        }
    }
}
.win.minimized {
    .ui-icon-expand {
        .icon {
            &:after {   
                display: block;
            }
        }
    }
}
</style>