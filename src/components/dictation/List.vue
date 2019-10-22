<template>
    <div class="list">
        <div class="dict-list-search">
            <input 
                class="ui-input" 
                placeholder="Search dictation" 
                type="text" @input="searchDict($event.target.value)">
        </div>
        <div class="dict-list-top-bar">
            <Icon
                :class="{'dn':getMode() === 'listCheck'}"
                :iconClass="'check'" 
                :action="'toggleCheckMode'"
                :customTitle="'Enable check'"></Icon>
            <Icon
                :class="{'dn':getMode() !== 'listCheck'}"
                :iconClass="'accept'" 
                :action="'toggleCheckMode'"
                :customTitle="'Disable check'"></Icon>

            <Icon
                :class="{'dn':getMode() !== 'listCheck'}"
                :iconClass="'remove'" 
                :action="'removeSelectedDictItems'"
                :customTitle="'Remove selected dictations'"></Icon>
            <Icon
                :class="{'dn':getMode() !== 'listCheck'}"
                :iconClass="'download'" 
                :action="'downloadSelectedDictations'"
                :customTitle="'Download selected dictations'"></Icon>
        </div>
        <ListItem 
            v-for="(item,index) in allDictations" 
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
    computed: mapGetters(['allDictations']),
    methods: {
        ...mapGetters(['getMode']),
        ...mapActions(['fetchDictList']),
        ...mapMutations(['searchDict'])
    },
    mounted: function() {
        this.fetchDictList();
    },
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
}
</style>