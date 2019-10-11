<template>
    <div class="try">
        TRY IT ONE OR TWO
        <Win></Win>
    </div>
</template>

<script>
import Win from '@/components/win.vue'

export default {
    name: 'oneTry',
    props: {
        name: String
    },
    components: {
        Win
    },
    data: function() {
        return {
            count: 0
        }
    }
}
</script>

<style lang="less">

</style>