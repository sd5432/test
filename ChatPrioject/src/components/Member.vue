<template>
    <div>
        名字:<input type="text" v-model="name" required><br>
        帳號:<input type="text" v-model="username" required><br>
        密碼:
        <input :type="showPassword ? 'text' : 'password'" v-model="password" required>
        <button @click="togglePassword">{{ showPassword ? '隱藏' : '顯示' }}</button><br>
        <button @click="add()">送出</button>
        
        <div v-if="message">{{ message }}</div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            name: '',
            username: '',
            password: '',
            message: '',
            showPassword: false // 控制密码是否显示
        };
    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword; // 切换密码显示状态
        },
        add() {
            if (!this.name || !this.username || !this.password) {
                this.message = '请填写所有字段。';
                return;
            }

            const url = "http://localhost:8080/Member/addMember2";
            const data = {
                name: this.name,
                username: this.username,
                password: this.password
            };

            axios.post(url, data)
                .then(response => {
                    this.message = response.data;
                    // 清空输入框
                    this.name = '';
                    this.username = '';
                    this.password = '';
                })
                .catch(error => {
                    console.log(error);
                    this.message = '提交失败，请重试。';
                });
        }
    }
};
</script>

<style>
/* 添加样式 */
</style>
