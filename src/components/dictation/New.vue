<template>
    <Win
        :title="winTitle" 
        :content="winContent"
        :controls="winControls"></Win>
</template>

<script>
import Win from '@/components/win/Win.vue'

export default {
    name: 'NewDictation',
    components: {
        Win
    },
    data: function() {
        return {
            winTitle: 'Create dictation',
            winContent: 'New dictionary window',
            winControls: {
                expand: true
            }
        }
    }
}
</script>

<style lang="less">
    .new-dictation {
        width: 720px;
    }
</style>
