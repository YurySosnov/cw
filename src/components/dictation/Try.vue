<template>
    <div class="try">
        TRY IT ONE OR TWO
        <Win></Win>
    </div>
</template>

<script>
import Win from '@/components/Win.vue'

export default {
    name: 'OneTry',
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