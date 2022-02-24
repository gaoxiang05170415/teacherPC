<template>
	<view class="class-base-intro">
		<view>ClassBaseIntro</view>
	</view>
</template>

<script>
	import { ref } from 'vue'
	export default {
		name:"ClassBaseIntro",
		data() {
			return {
				
			};
		},
		setup(props) {
			console.log(props)
			const classList = ref([])
			return {
				
			} // 这里返回的任何内容都可以用于组件的其余部分
		}
		// 组件的“其余部分”
	}
</script>

<style scoped lang="scss">
	.class-base-intro {
		border: 1px solid red;
		padding: 36px;
	}
</style>
