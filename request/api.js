import request from './request.js'

export default {
	doLogin(params){
		return request('/out_login_api/login/doLogin','POST',params);
	},
}