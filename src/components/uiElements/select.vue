<template>
    <span class="select" :class="htmlClass">
        <div class="select-field">{{ title }}</div>
        <div class="select-list">
            <div class="select-item" v-for="(item,index) in list" :key="'select-item-' + index"></div>
        </div>
    </span>
</template>

<script>
export default {
    name: 'select',
    props: {
        select: Object
    },
    methods: {
        getTitle: function() {
            this.select.list.forEach(function(item){
                if (item.selected) {
                    return item.text;
                }
            });
            return 
        },
        getList: function() {
            this.select.list;
        }
    },
    data: function() {
        return {
            title: this.getTitle(),
            list: this.getList(),
            htmlClass: select.htmlClass
        }
    }
}
</script>