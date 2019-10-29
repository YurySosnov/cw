<template>
    <div class="dictation-container">
        <div class="dictation-top">
            <div class="dictation-top-left"><div class="dictation-title">
                <div class="legend">dictation</div>
                <div class="name">Techonologies</div>
            </div></div>
            <div class="dictation-top-right">
                <div class="ui-block">
                    <div class="ui-block-name">Words</div>
                    <input class="ui-input ui-input-words-count">
                </div>
                <button class="ui-button margin-left">Apply</button>
                <button class="ui-button margin-left">Save</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'CreateDictation',
    computed: mapGetters([
        'newDictationName',
        'newDictationWordsCount',
        'newDictationLangFrom',
        'newDictationLangTo',
        'createDictationEnabled'
    ]),
    methods: {
        ...mapMutations(['validateForm','setNewDictationName']),
    }
}
</script>

<style lang="less">

</style>