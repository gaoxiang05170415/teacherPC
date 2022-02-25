import request from './request.js'

export default {
	//登录
	doLogin(params){
		return request('/out_login_api/login/doLogin','POST',params);
	},
	//获取通知列表
	getNoticeList(params){
		return request('/teacher_api/teacherNotice/searchPressNotice','POST',params);
	},
	//获取通知详情
	getNoticeDetail(params){
		return request('/teacher_api/teacherNotice/noticeInfo','POST',params);
	},
	//更新通知已读
	updateIsRead(params){
		return request('/teacher_api/teacherNotice/updateIsRead','POST',params);
	}
}