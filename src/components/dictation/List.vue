<template>
    <div class="list">
        <div class="dict-list-search">
            <input 
                class="ui-input" 
                placeholder="Search dictation" 
                type="text" @input="searchDictations($event.target.value)">
        </div>
        <div v-if="isAdvancedDictationsListOptions" class="dict-list-top-bar">
            <Icon
                :class="{'dn':getListMode === 'listCheck'}"
                :iconClass="'check'" 
                :action="'toggleCheckMode'"
                :customTitle="'Enable check'"></Icon>
            <Icon
                :class="{'dn':getListMode !== 'listCheck'}"
                :iconClass="'accept'" 
                :action="'toggleCheckMode'"
                :customTitle="'Disable check'"></Icon>
            <Icon
                :class="{'dn':getListMode !== 'listCheck'}"
                :iconClass="'remove'" 
                :action="'removeSelectedDictations'"
                :customTitle="'Remove selected dictations'"></Icon>
            <Icon
                :class="{'dn':getListMode !== 'listCheck'}"
                :iconClass="'download'" 
                :action="'downloadSelectedDictations'"
                :customTitle="'Download selected dictations'"></Icon>
        </div>
        <ListItem 
            v-for="(item,index) in getDictations" 
            :key="'dict-list-item-' + index"
            :title="item.title"
            :langs="item.langs"
            :id="item.id"
            :initLang="item.initLang"
            :checked="item.checked"></ListItem>
        <Popup 
            :popupInit="'removeItemPopup'"
            :popupTitle="'Confirm'" 
            :popupContent="'Are you shure to remove this dictation?'"></Popup>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import Popup from '@/components/Popup.vue'
import ListItem from '@/components/dictation/ListItem.vue'
import Icon from '@/components/uiElements/icon.vue'

export default {
    name: 'List',
    components: {
        ListItem,
        Popup,
        Icon
    },
    computed: mapGetters([
        'getDictations',
        'getListMode',
        'isAdvancedDictationsListOptions',
        'isAdvancedDictationsItemOptions'
    ]),
    methods: {
        ...mapActions(['fetchDictationsList']),
        ...mapMutations(['searchDictations']),
    },
    mounted: function() {
        this.fetchDictationsList();
    },
    data: function() {
        return {
            
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
.dict-list-top-bar {
    border-bottom: 1px solid #ffffff33;
    margin-bottom: 10px;
}
</style>