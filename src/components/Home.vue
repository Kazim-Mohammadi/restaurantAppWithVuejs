<template>
<Header />
<h1>Hello {{ name }} Welcome to home page.</h1>
<table border="1px">
    <thead>
        <td>Id</td>
        <td>Name</td>
        <td>Contact</td>
        <td>Address</td>
    </thead>
    <tr v-for="item in restaurants" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.contact}}</td>
        <td>{{item.address}}</td>
    </tr>
</table>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue'
export default {
    name: "Home",
    data() {
        return {
            name: '',
            restaurants: []
        }
    },
    components: {
        Header
    },
    async mounted() {
        let user = localStorage.getItem("user-info");
        // this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push({
                name: "Register"
            });
        }
        let result = await axios.get("http://localhost:3000/restaurants");
        this.restaurants = result.data;
    },
}
</script>

<style scoped>
table {
    border-collapse: collapse;
}

td {
    width: 160px;
    height: 40px;
}
</style>
