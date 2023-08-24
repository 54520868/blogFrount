<script lang="ts" setup>
defineOptions({
	name: 'Counter',
})
const counter = createCounter()

// 添加 user 对象
const user = ref({
  userName: '',
  passWord: '',
})
</script>

<template>

	邮箱：<input type="text" v-model="user.userName">
	密码：<input type="password" v-model="user.passWord">
	<button
		class="inline-block cursor-pointer rounded from-pink-500 via-red-500 to-yellow-500 bg-gradient-to-r px-8 py-2 text-sm font-medium text-white transition !border-0 !outline-none"
		hover="scale-110 shadow-xl"
		@click="counter.skip"
	>
		{{ '登录' }}
	</button>
</template>
