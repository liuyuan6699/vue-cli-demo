<template>
    <div class="homePage">
        

        <router-view></router-view>

        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/Menu">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/Message">
				<span class="mui-icon mui-icon-extra mui-icon-extra-custom"></span>
				<span class="mui-tab-label">音乐</span>
			</router-link>
			<router-link class="mui-tab-item" to="/Chart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
				<span class="mui-tab-label">分类</span>
			</router-link>
			<router-link class="mui-tab-item" to="/Settings">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
export default {
    data() {
		return {
			title: ''
		}
	},
	methods: {

	},
	mounted() {
		// this.title = this.$store.state.title
		// console.log(this.$store.state.title)
	}
}
</script>

<style scoped>
.homePage {
    padding-top: 40px;
    padding-bottom: 50px;
}
</style>

