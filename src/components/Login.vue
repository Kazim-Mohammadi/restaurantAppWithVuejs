<template>
<img class="logo" src="../assets/logo.png" alt="Logo" />
<h1>Login</h1>
<p>Input your data to login to our website.</p>
<div class="login">
    <input type="email" placeholder="Email" id="email" v-model="email" required autofocus autocomplete="email" />
    <input type="password" placeholder="Password" id="password" v-model="password" />
    <button v-on:click="login">
        Login
    </button>
</div>
<p>
    You don't have an account?
    <router-link to="/register">Please sign up</router-link>
</p>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        async login() {
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
            console.log(result);
            if (result.status == 200 & result.data.length > 0) {
                localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                this.$router.push({
                    name: "Home"
                });
            }
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (user) {
            this.$router.push({
                name: "Home"
            });
        }
    },
};
</script>

<style>
.logo {
    width: 100px;
}

.login input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 10px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}

.login button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;
}
</style>
