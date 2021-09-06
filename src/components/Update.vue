<template>
<Header />
<h1>Hello user! Welcome to Update Restaurant page.</h1>
<form action="" class="add">
    <input type="text" v-model="restaurant.name" name="name" placeholder="Name...">
    <input type="text" v-model="restaurant.address" name="address" placeholder="Address...">
    <input type="text" v-model="restaurant.contact" name="contact" placeholder="Contact...">
    <button type="button" @click="updateRestaurant">Update restaurant</button>
</form>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
export default {
    name: "Update",
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
        async updateRestaurant() {
            let result = await axios.put("http://localhost:3000/restaurants/" + this.$route.params.id, {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact,
            });
            if (result.status == 200) {
                this.$router.push({
                    name: "Home"
                });
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({
                name: "Register"
            });
        }
        const result = await axios.get("http://localhost:3000/restaurants/" + this.$route.params.id);
        this.restaurant = result.data;
    },
}
</script>
