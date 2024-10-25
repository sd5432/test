<template>
    
    <h2>登入</h2>
    帳號:<input type="text" v-model="username"><br>
    密碼:<input type="text" v-model="password"><br>
    <!--<button @click="add()">送出</button>-->
    <el-button type="primary" round @click="add()">送出</el-button>
    {{message}}
    
</template>
<script>
import axios from 'axios'
export default{
data:function(){
    return{
        username:'',
        password:'',
        message: '',
    }
},
methods:{

    add()
    {
        var url="http://localhost:8080/Member/login";
        var data={
            username:this.username,
            password:this.password
            
        };
        axios
        .post(url,data)
        .then(response => {
                    if (response.data.success) {
                        localStorage.setItem('token', response.data.token); // 假设后端返回 token
                        this.message = response.data.message; // 使用 this.message
                        // 登录成功后重定向到目标页面
                        this.$router.push('/add');
                    } else {
                        this.message = response.data.message; // 使用 this.message
                    }
                })
                .catch(error => {
                    this.message = '登录失败，请重试。'; // 通用错误消息
                    console.error(error);
                });
    }
}

};
</script>
<style>

</style>