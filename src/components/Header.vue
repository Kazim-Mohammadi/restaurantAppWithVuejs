<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/add-restaurant">Add Resaurant</router-link>
        <router-link to="/update-restaurant">Update Restaurant</router-link>
        <a @click="logout" href="#">Logout</a>
    </nav>
</template>
<script>
export default {
    name:'Header',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'Login'});
        }
    }
}
</script>
<style>
nav{
background-color: black;
display: flex;
justify-content: center;
}nav a{
padding: 14px 16px;
margin: 5px;
text-decoration: none;
color: #f2f2f2;
text-transform: uppercase;
}nav a:hover{
    background-color: #ddd;
    color:#333;
    border-radius:12px;
}
</style>