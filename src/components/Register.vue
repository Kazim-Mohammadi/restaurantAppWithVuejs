<template>
<img class="logo" src="../assets/logo.png" alt="Logo" />
<h1>Sign Up</h1>
<p>Input your data to register to our website.</p>
<div class="register">
    <input type="text" placeholder="Username" id="name" name="name" v-model="name" autocomplete="name" autofocus/>
    <input type="email" placeholder="Email" id="email" name="email" v-model="email" required autocomplete="email" />
    <input type="password" placeholder="Password" id="password" name="password" v-model="password" />
    <button v-on:click="signup">
        Sign Up
    </button>
</div>
<p>
    Already have an account?
    <router-link to="/login">You can login</router-link>
</p>
</template>

<script>
import axios from "axios";
export default {
    name: "Register",
    data() {
        return {
            name: "",
            email: "",
            password: "",
        };
    },
    methods: {
        async signup() {
            let result = await axios.post("http://localhost:3000/users", {
                email: this.email,
                password: this.password,
                name: this.name,
            });
            if (result.status == 201) {
                localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push({
                    name: "Home"
                });
            }
        },
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

.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 10px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}

.register button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;
}
</style>
