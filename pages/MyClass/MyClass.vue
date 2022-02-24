<template>
	<view class="my-class">
		{{title}}
		<ClassBaseIntro />
	</view>
</template>

<script>
	import { ref, onMounted } from 'vue'
	import ClassBaseIntro from '../../components/ClassBaseIntro.vue'
	import http from '../../http/index.js'
	const { fetchClassBase } = http
	export default {
		components: { ClassBaseIntro },
		data(){
			return {
				title: 11
			}
		},
		setup(props) {
			const title = ref('我的班级')
			const myClassList = ref([])
			const getMyClassList = async () => {
				myClassList.value = await fetchClassBase()
			}
			
			return {
				title,
				myClassList,
				getMyClassList
			}
		},
	}
</script>

<style scoped lang="scss">
	.my-class {
		padding: 0 30px;
	}
</style>
