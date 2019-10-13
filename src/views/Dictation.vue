<template>
    <div class="dictation">
        <NewDictation></NewDictation>
        <List></List>
    </div>
</template>

<script>
import NewDictation from '@/components/dictation/New.vue'
import List from '@/components/dictation/List.vue'

export default {
    name: 'Dictation',
    components: {
        NewDictation,
        List
    }
}
</script>

<style lang="less">

</style>