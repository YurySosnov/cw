<template>
    <Win
        :title="'Create dictation'" 
        :htmlClass="'new-dictation'"
        :content="'New dictionary window'"
        :winType="'newDictation'"
        :controls="{expand: false}"
        :winId="'newDictation'"></Win>
</template>

<script>
import Win from '@/components/win/Win.vue'

export default {
    name: 'newDictation',
    components: {
        Win
    }
}
</script>

<style lang="less">
    .new-dictation {
        width: 720px;
        margin-bottom: 20px;
    }
</style>
