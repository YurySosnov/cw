<template>
	<div id="app">
		<div class="nav">
			<router-link to="/" class="nav-item">Home</router-link>
			<router-link to="/dictation" class="nav-item">Dictation</router-link>
		</div>
		<div class="content">
			<router-view />
		</div>
	</div>
</template>

<script>
// import Icon from "@/components/uiElements/icon.vue";

export default {
	components: {
		// Icon
	}
};
</script>

<style lang="less">
@import "./styles/main.less";
</style>