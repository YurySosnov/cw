<template>
    <div class="dictation">
        <NewDictation v-if="this.$store.state.section === 'home'"></NewDictation>
        <List v-if="this.$store.state.section === 'home'"></List>
        <CreateDictation v-if="this.$store.state.section === 'create'"></CreateDictation>
    </div>
</template>

<script>
import NewDictation from '@/components/dictation/New.vue'
import CreateDictation from '@/components/dictation/Create.vue'
import List from '@/components/dictation/List.vue'

export default {
    name: 'Dictation',
    components: {
        CreateDictation,
        NewDictation,
        List
    }
}
</script>

<style lang="less">

</style>