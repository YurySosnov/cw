<template>
    <span 
        class="select" 
        :class="[selectData.htmlClass,{'expanded':expanded},{'rounded':rounded}]">
        <button 
            class="select-field"
            @click="expand()"
            >{{ title }}</button>
        <div class="select-list">
            <div 
                class="select-item" 
                v-for="(item,index) in selectData.list" 
                :key="'select-item-' + index"
                :data-value="item.value">{{ item.text }}</div>
        </div>
    </span>
</template>

<script>
export default {
    name: 'UiSelect',
    props: {
        selectData: Object
    },
    methods: {
        getTitle: function() {
            let title = this.selectData.list[0].text;
            this.selectData.list.forEach(function(item){
                if (typeof item.selected !== 'undefined' && 
                    item.selected === true) {
                    title = item.text;
                }
            });
            return title;
        },
        getList: function() {
            this.selectData.list;
        },
        expand: function() {
            this.expanded = !this.expanded;
        }
    },
    data: function() {
        let rounded = true;
        rounded = (typeof this.selectData.rounded === 'boolean') 
            ? this.selectData.rounded 
            : true;
        return {
            title: this.getTitle(),
            expanded: false,
            rounded: rounded
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
        box-shadow: 0 6px 10px rgba(0,0,0,.3);
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