import {
	ref,
	reactive,
	onMounted,
	toRefs
} from "vue"

export default {
	setup() {
		const state = reactive({
			list: [],
		});

		onMounted(() => {
			state.list = list;
		});
		
		const toView = (url) => {
			uni.navigateTo({
				url: '/pages/webview/index?url=' + url,
			});
		}

		return {
			...toRefs(state),
			toView,
		};
	}
}

const baseUrl = 'https://static-d2762997-6a40-4fe0-8c3c-71bcf604bc9d.bspapp.com';
const list = [
	{
		title: 'Sku select',
		desc: '商城sku选择',
		url: `${baseUrl}/sku-select/`,
		id: 1,
	},
	{
		title: 'Cocos-js Game',
		desc: 'cocosjs小游戏',
		url: baseUrl,
		id: 2,
	},
];
