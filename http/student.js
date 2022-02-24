import request from '../request/request.js'
import { MY_CLASS } from '../api/index.js'

export default {
	fetchClassBase: (params) => {
		console.log(MY_CLASS)
		return request(MY_CLASS, 'POST', params)
	}
}