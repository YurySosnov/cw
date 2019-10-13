<template>
    <div class="list">
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
</style>