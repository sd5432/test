<template>
    <div >
            
            <table width=100% border=1>
            <tr>
                <td></td>
                <td>名字</td>
                <td>主題</td>
                <td>內容</td>
            </tr>
            <tr v-for="item in paginatedData" :key="item.id">
                <td>{{item.id}}</td> 
                <td>{{item.name}}</td>
                <td>{{item.subject}}</td> 
                <td>{{item.content}}</td>
    
            </tr> 
            </table>
            <div>
                <button @click="gotoPage(currentPage-1)" :disableed="currentPage==1">上一頁</button>
                <button 
                v-for="page in totalPages" 
                :key="page"
                 @click="gotoPage(page)" 
                 :class="{active:currentPage==page}">{{page}}</button>
    
                 <button @click="gotoPage(currentPage+1)" :disableed="currentPage==totalPages">下一頁</button>
            </div>  
        </div>
    
    
    </template>
    <script>
    import axios from 'axios'
    
    export default{
        data:function(){
            return {
                info:[],
                currentPage: 1,
                pageSize:3 ,   
            }
    
    
        },
    
        mounted(){
           var url="http://localhost:8080/Chat/findAllChat";
            axios
            .get(url)
            .then(response=>this.info=response.data);
    
    
        },
        computed:{
            totalPages(){
              return Math.ceil(this.info.length/this.pageSize);
            },
            paginatedData(){
                const start=(this.currentPage-1)*this.pageSize;
                const end=start+this.pageSize;
                return this.info.slice(start,end);
            },
    
          },
          methods:{
            gotoPage(page){
              if(page>=1&& page<=this.totalPages){
                this.currentPage=page;
              }
    
            }
          
          },
    
    }
    
    </script>
    <style></style>