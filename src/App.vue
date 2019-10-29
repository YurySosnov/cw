<template>
	<div id="app">
		<div class="nav">
			<router-link to="/" class="nav-item">My dictations</router-link>
			<router-link to="/create" class="nav-item">Create dictation</router-link>
			<span class="nav-item">Upload dictaion</span>
		</div>
		<div class="content">
			<router-view />
		</div>
	</div>
</template>

<script>


export default {
	name: 'App',
	components: {}
};
</script>

<style lang="less">
@import "./styles/main.less";
</style>