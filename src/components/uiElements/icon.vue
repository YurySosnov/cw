<template>
    <button 
        class="ui-icon" 
        :class="htmlClass" 
        @click="iconClickAction"
        :title="iconTitle">
        <span class="icon"></span>
    </button>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'Icon',
    props: {
        iconClass: String,
        action: {
            type: String,
            default: ''
        },
        actionData: [String, Object, Number, Boolean, Array],
        customTitle: {
            type: String,
            default: ''
        }
    },
    data: function(){
        let htmlClass = 'ui-icon-' + this.iconClass;
        const titles = {
            'expand'         : 'Expand/Minimize',
            'remove'         : 'Remove',
            'accept'         : 'Accept',
            'close'          : 'Close',
            'edit'           : 'Edit',
            'download'       : 'Download',
            'upload'         : 'Upload',
            'confirm-remove' : 'Confirm remove',
            'check'          : 'Check'
        };
        let iconTitle = titles[this.iconClass];
        if (this.customTitle !== '') {
            iconTitle = this.customTitle;
        }
        return {
            isAction: this.action !== '',
            htmlClass: htmlClass,
            iconTitle: iconTitle
        }
    },
    methods: {
        /* 
        
        This mutations from VUEX store. 
        If method name wlii change, 
        require change it in this place too
        
        removeDictation
        checkDictation
        uncheckDictation
        toggleCheckMode
        removeSelectedDictations
        editDictation
        downloadDictation
        downloadSelectedDictations

        from list module in 
        @/store/modules/list

        */
        ...mapMutations([
            'removeDictation',
            'checkDictation',
            'uncheckDictation',
            'toggleCheckMode',
            'removeSelectedDictations',
            'editDictation',
            'downloadDictation',
            'downloadSelectedDictations'
        ]),
        expandWindow: function (id) {
            this.$root.$emit('expandWindow-' + id);
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

.ui_icon_default_style {
    border-radius: 50%;
    // border: @icon_size * .2 solid #00000060;
    border: @icon_size * .2 solid @ui_color_icon_border;
    // box-shadow: inset 0 0 @win_top_height * .1 @ui_color_icon_border;
}

.ui_icon_default_icon_ba_style {
    display: block;
    position: absolute;
    content: ' ';
    background-color: @ui_icon_color_source;
    top: 50%;
    left: 50%;
    box-sizing: border-box;
}

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
}

.ui-icon-check {
    .ui_icon_default_style;
    background-color: #ffffff33;
    .icon {
        opacity: 0;
        &:before,
        &:after {
            .ui_icon_default_icon_ba_style;
            width: @icon_size * .5;
            height: 2px;
            margin: 0 0 0 @icon_size * -0.47;
            transform: rotate(45deg);
        }
        &:after {
            width: @icon_size;
            transform: rotate(135deg);
            margin: @icon_size * -.125 0 0 @icon_size * -0.3;
        }
    }
    &:hover {
        .icon {
            opacity: .5;
        }
    }
}
.ui-icon-expand {
    .ui_icon_default_style;
    background-color: #ffbc3e;
    .icon {
        &:before,
        &:after {
            .ui_icon_default_icon_ba_style;
            width: @icon_size;
            height: @icon_size * .25;
            margin: @icon_size * -.125 0 0 @icon_size * -0.5;
        }
        &:after {
            display: none;
            transform: rotate(90deg);
        }
    }
}
.ui-icon-remove {
    .ui_icon_default_style;
    background-color: #f05c5c;
    .icon {
        &:before,
        &:after {
            .ui_icon_default_icon_ba_style;
            width: @icon_size;
            height: @icon_size * .25;
            margin: @icon_size * -.125 0 0 @icon_size * -0.5;
            transform: rotate(45deg);
        }
        &:after {
            transform: rotate(135deg);
        }
    }
}
.ui-icon-accept {
    .ui_icon_default_style;
    background-color: #7fbe45;
    .icon {
        &:before,
        &:after {
            .ui_icon_default_icon_ba_style;
            width: @icon_size * .5;
            height: 2px;
            margin: 0 0 0 @icon_size * -0.47;
            transform: rotate(45deg);
        }
        &:after {
            width: @icon_size;
            transform: rotate(135deg);
            margin: @icon_size * -.125 0 0 @icon_size * -0.3;
        }
    }
}
.ui-icon-confirm-remove {
    .ui_icon_default_style;
    background-color: #f05c5c;
    .icon { // as icon ui-icon-acept
        &:before,
        &:after {
            .ui_icon_default_icon_ba_style;
            width: @icon_size * .5;
            height: 2px;
            margin: 0 0 0 @icon_size * -0.47;
            transform: rotate(45deg);
        }
        &:after {
            width: @icon_size;
            transform: rotate(135deg);
            margin: @icon_size * -.125 0 0 @icon_size * -0.3;
        }
    }
}
.ui-icon-edit {
    .ui_icon_default_style;
    background-color: #7396f5;
    .icon {
        width: @icon_size * .8;
        background-color: @ui_icon_color_source;
        height: @icon_size * .25;
        top: 50%;
        left: 50%;
        margin: @icon_size * -.125 0 0 @icon_size * -.4;
        &:before,
        &:after {
            .ui_icon_default_icon_ba_style;
            width: @icon_size * .8;
            height: @icon_size * .25;
            margin: @icon_size * -.55 0 0 @icon_size * -.4;
        }
        &:after {
            margin: @icon_size * .3 0 0 @icon_size * -.4;
        }
    }
}
.ui-icon-close {
    .ui_icon_default_style;
    background-color: #9e9e9e;
    .icon {
        &:before,
        &:after {
            display: block;
            position: absolute;
            content: ' ';
            width: @icon_size;
            height: @icon_size * .25;
            background-color: @ui_icon_color_source;
            top: 50%;
            left: 50%;
            margin: @icon_size * -.125 0 0 @icon_size * -0.5;
            transform: rotate(45deg);
        }
        &:after {
            transform: rotate(135deg);
        }
    }
}
.ui-icon-upload {
    .ui_icon_default_style;
    background-color: #bd69ee;
    .icon {
        margin-top: @icon_size * .05;
        &:before,
        &:after {
            .ui_icon_default_icon_ba_style;
            width: @icon_size * .4;
            height: @icon_size * 1;
            background-color: @ui_icon_color_source;
            margin: @icon_size * -.4 0 0 @icon_size * -.2;
        }
        &:after {
            background-color: transparent;
            width: @icon_size;
            height: @icon_size;
            border: @icon_size * .5 solid transparent;
            border-top-color: @ui_icon_color_source;
            border-left-color: @ui_icon_color_source;
            transform: rotate(45deg);
            margin: @icon_size * -.5 0 0 @icon_size * -.5;
        }
    }
}
.ui-icon-download {
    .ui_icon_default_style;
    background-color: #969e21;
    .icon {
        margin-top: @icon_size * -.05;
        &:before,
        &:after {
            .ui_icon_default_icon_ba_style;
            width: @icon_size * .4;
            height: @icon_size * 1;
            background-color: @ui_icon_color_source;
            margin: @icon_size * -.6 0 0 @icon_size * -.2;
        }
        &:after {
            background-color: transparent;
            width: @icon_size;
            height: @icon_size;
            border: @icon_size * .5 solid transparent;
            border-bottom-color: @ui_icon_color_source;
            border-right-color: @ui_icon_color_source;
            transform: rotate(45deg);
            margin: @icon_size * -.5 0 0 @icon_size * -.5;
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