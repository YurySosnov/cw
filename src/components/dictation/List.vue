<template>
    <div class="list">
        <div class="dict-list-search">
            <input 
                class="ui-input" 
                placeholder="Search dictation" 
                type="text" @input="search($event)">
        </div>
        <ListItem 
            v-for="(item,index) in items" 
            :key="'dict-list-item-' + index"
            :title="item.title"
            :langs="item.langs"
            :id="item.id"
            :initLang="item.initLang"></ListItem>
        <Popup 
            :popupInit="'removeItemPopup'"
            :popupTitle="'Confirm'" 
            :popupContent="'Are you shure to remove this dictation?'" 
            :popupButtons="confirmDeletePopupButtons"></Popup>
    </div>
</template>

<script>
import Popup from '@/components/Popup.vue'
import ListItem from '@/components/dictation/ListItem.vue'

export default {
    name: 'List',
    components: {
        ListItem,
        Popup
    },
    data: function() {
        let items = [
            {
                id: '0123',
                title: 'Technologies',
                langs: ['en','ru'],
                initLang: 'en'
            },
            {
                id: '0124',
                title: 'Food',
                langs: ['en','ru'],
                initLang: 'en'
            },
            {
                id: '0125',
                title: 'Travel',
                langs: ['en','ru'],
                initLang: 'en'
            },
            {
                id: '0126',
                title: 'Science',
                langs: ['en','ru'],
                initLang: 'en'
            },
            {
                id: '0127',
                title: 'Space',
                langs: ['en','ru'],
                initLang: 'en'
            }
        ];
        
        return {
            itemsSource: items,
            items: items,
            confirmDeletePopupButtons: [
                {
                    text: 'Delete',
                    action: 'removeItem',
                    htmlClass: 'ui-button-delete',
                },
                {
                    text: 'Cancel',
                    action: 'hidePopup',
                    htmlClass: 'ui-button-cancel'
                }
            ],
            selectedItemId: ''
        }
    },
    methods: {
        search: function(event) {
            let value = event.target.value;
            this.items = this.itemsSource.filter(item => item.title.indexOf(value) > -1);
        },
        removeItem: function(data) {
            this.items.forEach((element,index) => {                
                if (element.id === data.id) {
                    this.items.splice(index,1);
                    return false;
                };
            });
        },
    },
    mounted: function() {
        this.$root.$on('setRemovableItemId',id => {
            this.selectedItemId = id;
            this.$root.$emit('removeItemPopup',{id:id});
        });
        this.$root.$on('removeItem',data => {
            this.removeItem(data);
        });
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