<template>
    <span 
        class="select" 
        :class="[htmlClass,{'expanded':expanded},{'rounded':rounded}]">
        <button 
            class="select-field"
            @click="expand()">{{ title }}</button>
        <div class="select-list">
            <div 
                class="select-item" 
                v-for="(item,index) in selectList" 
                :key="'select-item-' + index"
                :data-value="item.value"
                @click="change(item.value)">{{ item.text }}</div>
        </div>
    </span>
</template>

<script>
export default {
    name: 'UiSelect',
    props: {
        list: {
            type: Array,
            default: function() {
                return [];
            }
        },
        emitName: String,
        rounded: {
            type: Boolean,
            default: function() {
                return true;
            }
        },
        htmlClass: {
            type: String,
            default: function() {
                return '';
            }
        },
        update: {
            type: String,
            default: function() {
                return '';
            }
        }
    },
    methods: {
        expand: function() {
            this.expanded = !this.expanded;
        },
        setValue: function(value) {
            this.list.forEach(item => {
                if (item.value === value) {
                    item.selected = true;
                    this.title = item.text;
                } else {
                    item.selected = false;
                }
            });
        },
        change: function(value,isEmit = true) {
            this.expanded = false;
            this.setValue(value);
            if (isEmit) this.$emit(this.emitName,value);
        }
    },
    data: function() {
        let title = (this.list.length > 0) ? this.list[0].text : '';
        let selectList = [];
        this.list.forEach(item => {
            if (typeof item.selected === 'undefined') {
                item.selected = false;
            }
            selectList.push(item);
        });
        return {
            title: title,
            expanded: false,
            selectList: selectList
        }
    },
    beforeMount: function() {
        
    },
    mounted: function() {
        if (this.update !== '') {
            this.$root.$on(this.update, value => {
                this.setValue(value);
            });
        }
    }
}
</script>

<style lang="less">
@import '../../styles/_variables.less';
.select {
    display: inline-block;
    position: relative;
    font-size: @font_size;
    .select-field {
        text-align: left;
        cursor: pointer;
        height: @ui_height;
        background-color: @ui_light_blue;
        position: relative;
        padding: 0 40px 0 14px;
        color: @text_color;
        font-size: @font_size;
        line-height: @ui_height;
        border: none;
        background-position: right 15px center;
        background-size: 10px;
        background-repeat: no-repeat;
        background-image: url('../../assets/select-arrow.svg');
    }
    .select-list {
        display: none;
        background-color: #fff;
        position: absolute;
        top: @ui_height;
        border-radius: @border_radius_middle;
        margin-top: 2px;
        box-shadow: 0 3px 10px rgba(0,0,0,.3);
        z-index: 10;
        .select-item {
            padding: 0 14px;
            height: @ui_height;
            line-height: @ui_height;
            cursor: pointer;
            &:hover {
                background-color: #eee;
            }
        }
    }
    &.expanded {
        .select-list {
            display: block;
        }
    }
    &.rounded {
        .select-field {
            border-radius: @border_radius_middle;
        }
    }
}
</style>