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