import { defineStore } from 'pinia'

export default defineStore('counter', {
	state() {
		return {
			
		}
	},
	actions: {
		skip() {
			alert("登录成功");
		},
	},
	persist: true,
})
