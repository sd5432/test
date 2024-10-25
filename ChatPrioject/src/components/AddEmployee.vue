<template>
    
    名字:<input type="text" v-model="name"><br>
    主題:<input type="text" v-model="subject"><br>
    內容:<input type="text" v-model="content"><br>
    <button @click="add()">送出</button>
    {{message}}



</template>
<script>
import axios from 'axios'
export default{
data:function(){
    return{
        name:'',
        content:'',
        subject:'',
        message: '',

    }
},
methods:{

    add()
    {
        var url="http://localhost:8080/Chat/addChat2";
        var data={
            name:this.name,
            content:this.content,
            subject:this.subject
            
        };
        
        
        axios
        .post(url,data)
        .then(response=>this.message=response.data)
        .catch(function(error){console.log(error)});



    }



}

};

</script>
<style></style>