<template>
    <AddEmployee></AddEmployee>
    <br>
    <AllEmployee></AllEmployee>
    </template>
    <script>
    import AddEmployee from '../components/AddEmployee.vue';
    import AllEmployee from '../components/AllEmployee.vue';
        export default{
            name:'Addd',
            components:{
                "AddEmployee":AddEmployee,
                "AllEmployee":AllEmployee,
            }
    
        }
    </script>
    <style></style>