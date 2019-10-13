<template>
    <Win
        :title="winTitle" 
        :htmlClass="htmlClass"
        :content="winContent"
        :winType="winType"
        :controls="winControls"></Win>
</template>

<script>
import Win from '@/components/Win.vue'

export default {
    name: 'newDictation',
    components: {
        Win
    },
    data: function() {
        return {
            winTitle: 'Create dictation',
            winContent: 'New dictionary window',
            winControls: {
                expand: true
            },
            htmlClass: 'new-dictation',
            winType: 'newDictation'
        }
    }
}
</script>

<style lang="less">
    .new-dictation {
        width: 720px;
        margin-bottom: 20px;
    }
</style>
