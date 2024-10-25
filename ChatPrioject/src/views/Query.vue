<template>
    <AllEmployee></AllEmployee>
    <Download></Download>
</template>
    <script>
        import AllEmployee from '../components/AllEmployee.vue';
        import Download from '../components/Download.vue';
    export default{
        name:'Query',
        components:{
            "Download":Download,
            "AllEmployee":AllEmployee,
        }
       
    }
    </script>
    <style></style>