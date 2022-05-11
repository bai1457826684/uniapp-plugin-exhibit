<template>
	<web-view :src="url"></web-view>
</template>

<script>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
export default {
	setup(props) {
		const url = ref('');

		onLoad(options => {
			console.log(options);
			if (options.url) {
				url.value = options.url;
			}
		});

		return {
			url
		};
	}
};
</script>

<style></style>
