<template>
	<div id="app">
		<div class="nav">
			<router-link to="/" class="nav-item">Home</router-link>
			<router-link to="/dictation" class="nav-item">Dictation</router-link>
			<span class="nav-item">Upload dictaion</span>
		</div>
		<div class="content">
			<router-view />
		</div>
		<Icon :iconClass="'edit'"></Icon>
		<Icon :iconClass="'expand'"></Icon>
		<Icon :iconClass="'remove'"></Icon>
		<Icon :iconClass="'accept'"></Icon>
		<Icon :iconClass="'confirm-remove'"></Icon>
		<Icon :iconClass="'close'"></Icon>
		<Icon :iconClass="'upload'"></Icon>
		<Icon :iconClass="'download'"></Icon>
	</div>
</template>

<script>
import Icon from "@/components/uiElements/icon.vue";

export default {
	components: {
		Icon
	}
};
</script>

<style lang="less">
@import "./styles/main.less";
</style>