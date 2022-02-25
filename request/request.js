// 全局请求封装
// const url = "http://outuser.choor.cn";
// function request(url, method, params){
// 	uni.request({
// 		url: "http://outuser.choor.cn" + url,
// 		method: method,
// 		header: {
// 			// token: token
// 			"content-type": "application/json"
// 		},
// 		data: {
// 			// serviceId: api[0].serviceId,
// 			...params
// 		},
// 		success(res) {
// 			resolve(res.data);
// 		},
// 		fail(err) {
// 			reject(err);
// 		},
// 		complete() {
// 			uni.hideLoading();
// 		}
// 	});
// }
// export {
// 	request
// }
export default (url, method, params) => {
const token = uni.getStorageSync('token');
	uni.showLoading({
		title: "加载中"
	});
	// if(!token ){
	// 	// 执行没有登录的逻辑

	// 	return;
	// }
	return new Promise((resolve, reject) => {
		const token = uni.getStorageSync('token');
		uni.request({
			url: "http://outuser.choor.cn" + url,
			method: method,
			header: {
				// token: token
				"Authorization":token,
				"content-type": "application/json"
			},
			data: {
				// serviceId: api[0].serviceId,
				...params
			},
			success(res) {
				resolve(res.data);
			},
			fail(err) {
				reject(err);
			},
			complete() {
				uni.hideLoading();
			}
		});
	});
};