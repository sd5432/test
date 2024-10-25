<template>
    <div>
      <button @click="add" :disabled="loading">下载</button>
      <p v-if="message">{{ message }}</p>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        name: '',
        content: '',
        subject: '',
        message: '',
        error: '',
        loading: false,
      };
    },
    methods: {
      add() {
        const url = "http://localhost:8080/reports/jasperReport";
        const data = {
          name: this.name,
          content: this.content,
          subject: this.subject,
        };
  
        this.loading = true; // 开始加载
        this.error = ''; // 清除之前的错误
  
        axios
          .post(url, data)
          .then(response => {
            this.message = response.data;
            this.loading = false; // 请求结束
          })
          .catch(error => {
            this.loading = false; // 请求结束
            this.error = "下载报告时出错，请稍后再试。"; // 用户友好的错误提示
            console.error(error);
          });
      }
    }
  };
  </script>
  
  <style>
  /* 可以根据需要添加样式 */
  </style>
  