<template>
<Header />
    <h1>Hello user! Welcome to Add Restaurant page.</h1>
<form action="" class="add">
    <input type="text" v-model="restaurant.name" name="name" placeholder="Name...">
    <input type="text" v-model="restaurant.address" name="address" placeholder="Address...">
    <input type="text" v-model="restaurant.contact" name="contact" placeholder="Contact...">
    <button type="button" @click="addRestaurant">Add new restaurant</button>
</form>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
export default {
    name: "Add",
    components: {
        Header
    },
    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                contact: ''
            }
        }
    },
    methods: {
        async addRestaurant() {
          let result = await axios.post("http://localhost:3000/restaurants", {
            name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact,
            });
            if (result.status == 201) {
                this.$router.push({
                    name: "Home"
                });
            }
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({
                name: "Register"
            });
        }
    },
}
</script>
