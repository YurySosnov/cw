<template>
<div class="popup" v-if="show">
    <div class="popup-tint" v-if="isTint"></div>
    <div class="popup-win">
        <div class="win-top" v-if="isTitle">
            <div class="win-title">{{ title }}</div>
        </div>
        <div class="win-body">
            <div class="win-content popup-content" :class="contentHtmlClass">{{ content }}</div>
            <div class="popup-win-buttons">
                <button 
                    class="ui-button" 
                    :class="button.htmlClass"
                    v-for="(button,index) in buttons" 
                    :key="'popup-buttons' + index"
                    @click="buttonClick(button.action)">{{ button.text }}</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Popup',
    props: {
        popupTitle: {
            type: String,
            default: () => ''
        },
        popupContent: {
            type: String,
            default: () => ''
        },
        popupButtons: {
            type: Array,
            default: () => []
        },
        popupTint: {
            type: Boolean,
            default: () => true
        },
        contentHtmlClass: {
            type: String,
            default: ''
        },
        popupInit: String
    },
    data: function() {
        
        return {
            isTint: this.popupTint,
            isTitle: false,
            title: this.popupTitle,
            buttons : this.popupButtons,
            content: this.popupContent,
            show: false,
            popupData: {}
        }
    },
    methods: {
        buttonClick: function(emitName) {
            if (typeof this[emitName] !== 'function') {
                this.$root.$emit(emitName,this.popupData);
                this.hidePopup();
            } else this[emitName]();
        },
        hidePopup: function() {
            this.show = false;
        },
        showPopup: function() {
            this.show = true;
        }
    },
    mounted: function() {
        this.isTitle = this.popupTitle.trim() !== '';
        this.$root.$on(this.popupInit, (data) => {
            this.popupData = data;
            this.showPopup();
        });
    }
}
</script>

<style lang="less">
@import '../styles/_variables.less';
.popup {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 1000;
    .popup-tint {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.4);
    }
    .popup-win {
        position: fixed;
        width: 650px;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        overflow: hidden;
        border-radius: @border_radius_big;
        box-shadow: 0 6px 20px rgba(0,0,0,.4);
    }
    .popup-win-buttons {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        .ui-button {
            margin: 0 10px;
            width: 150px;
        }
    }
    .popup-content {
        font-size: @font_size;
        text-align: center;
    }
}
</style>