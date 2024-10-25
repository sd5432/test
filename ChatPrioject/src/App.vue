<template>
    <div id="app">
        <div class="header"><h1>龍貓論壇</h1></div>
        <div class="navigation">
            <table width=80% align=center>
                <tr align=center valign=middle>
                    <td><router-link to="/"> <el-button round>首頁</el-button></router-link></td>
                    <td><router-link to="register"> <el-button type="info" plain>註冊</el-button></router-link></td>
                    <td><router-link to="/add"><el-button type="primary" plain>新增</el-button></router-link></td>
                    <td><router-link to="/query"><el-button type="primary" plain>查詢</el-button></router-link></td>
                    <td><router-link to="/update"><el-button type="primary" plain>修改</el-button></router-link></td>
                    <td><router-link to="/delete"><el-button type="primary" plain>刪除</el-button></router-link></td>
                </tr>
            </table>
        </div>
        <div class="content">
            <div class="con"><router-view></router-view></div>
        </div>
        <div class="footer">
            <!--<button @click="logout">登出</button>-->
            <el-button type="danger" round @click="logout">登出</el-button>


        </div>
    </div>
</template>2

<script>
export default {
    name: "App",
    methods: {
        logout() {
            // 清除存储的 token
            localStorage.removeItem('token');
            // 重定向到登录页
            this.$router.push('/');
        }
    }
};
</script>

<style>
.header
{
    margin-left: 25%;
    width: 50%;
    height: 100px;
    background-color: #A5D0A8;
    display: flex; /* 使用 Flexbox */
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
}
.navigation{

    width:50%;
    height:50px;
    background-color:#8CADA7;
    margin-left:25%;
    color:rgb(241, 7, 54);
    

}
.content {
    width: 50%;
    height: 450px;
    background-color: rgba(242, 244, 203, 0.8); /* 使背景色稍微透明 */
    margin-left: 25%;
    display: flex; /* 使用 Flexbox */
    justify-content:baseline; /* 水平居中 */
    background-image: url('images/cat.jpg'); /* 背景图片 */
    background-size: cover; /* 背景覆盖整个内容区 */
    background-position: center; /* 图片居中 */
    background-repeat: no-repeat; /* 不重复背景图片 */
    background-blend-mode: overlay; /* 混合模式，调整透明度效果 */
}



.con
{
    padding-left:5%;
    padding-top:1%;
}
.footer{
     width:50%;
    height:50px;
    background-color:#B7990D;
    margin-left:25%;
    display: flex; /* 使用 Flexbox */
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
}
</style>