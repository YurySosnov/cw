<template>
    <div class="dictation">
        <List v-if="this.$store.state.section === 'home'"></List>
        <CreateDictation v-if="this.$store.state.section === 'create'"></CreateDictation>
    </div>
</template>

<script>
import CreateDictation from '@/components/dictation/Create.vue'
import List from '@/components/dictation/List.vue'

export default {
    name: 'Dictation',
    components: {
        CreateDictation,
        List
    }
}
</script>

<style lang="less">

</style>