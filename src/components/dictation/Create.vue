<template>
    <div class="create-dictation-container">
        {{newDictWordsCount}}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'CreateDictation',
    data: function() {
        return {
            newDictName: '',
            newDictWordsCount: 0,
            newDictLangFrom: 'en',
            newDictLangTo: 'en'
        }
    },
    computed: mapGetters(['getNewDictationData']),
    methods: {
        getNewDictationDataUpd: function() {
            const newDictData = this.getNewDictationData();
            this.newDictName = newDictData.newDictName;
            this.newDictWordsCount = newDictData.newDictWordsCount;
            this.newDictLangFrom = newDictData.newDictLangFrom;
            this.newDictLangTo = newDictData.newDictLangTo;
        }
    },
    mounted: function() {
        
    }
}
</script>

<style lang="less">

</style>