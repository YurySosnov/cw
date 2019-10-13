<template>
    <div class="list">
        <div class="dict-list-search">
            <input class="ui-input" placeholder="Search dictation" type="text">
        </div>
        <ListItem 
            v-for="(item,index) in items" 
            :key="'dict-list-item-' + index"
            :title="item.title"
            :langs="item.langs"
            :initLang="item.initLang"></ListItem>
    </div>
</template>

<script>
import ListItem from '@/components/dictation/ListItem.vue'

export default {
    name: 'List',
    components: {
        ListItem
    },
    data: function() {
        let items = [
            {
                title: 'Technologies',
                langs: ['en','ru'],
                initLang: 'en',
            }
        ];
        return {
            items: items
        }
    }
}
</script>
<style lang="less">
.dictation {
    .list {
        width: 720px;
    }
}
.dict-list-search {
    width: 100%;
    margin-bottom: 20px;
    input {
        display: block;
        width: 100%;
        position: relative;
    }
}
</style>