<template>
    <div class="list">
        <div class="dict-list-search">
            <input 
                class="ui-input" 
                placeholder="Search dictation" 
                type="text" @input="search($event)">
        </div>
        <ListItem 
            v-for="(item,index) in allDictations" 
            :key="'dict-list-item-' + index"
            :title="item.title"
            :langs="item.langs"
            :id="item.id"
            :initLang="item.initLang"></ListItem>
        <Popup 
            :popupInit="'removeItemPopup'"
            :popupTitle="'Confirm'" 
            :popupContent="'Are you shure to remove this dictation?'"></Popup>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Popup from '@/components/Popup.vue'
import ListItem from '@/components/dictation/ListItem.vue'

export default {
    name: 'List',
    components: {
        ListItem,
        Popup
    },
    computed: mapGetters(['allDictations']),
    methods: mapActions(['fetchDictList']),
    mounted: function() {
        this.fetchDictList();
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