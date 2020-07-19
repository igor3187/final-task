<template>
    <div>
        <h1>Companies List</h1>
        <br>
        <router-link class="link" to="/company"><h6>To my companies ></h6></router-link>
        <hr>
        <div class="sort-bar">sort by:
            <button class="btn-name" v-on:click="sortByName"><h6>name</h6></button>
            <button class="btn-employee" v-on:click="sortByEmployees"><h6>employees</h6></button>
            <button class="btn-service" v-on:click="sortByService"><h6>service of activity</h6></button>
        </div>
        <hr>
        <div class="post-container">
            <div class="post"
                 v-for="(post, index) in posts"
                 v-bind:itemid="post"
                 v-bind:aria-colindex="index"
                 v-bind:key="post._id">
                <h6>name: {{post.name}}</h6>
                <h6>address: {{post.address}}</h6>
                <h6>service of activity: {{post.service_of_activity}}</h6>
                <h6>number of employees: {{post.number_of_employees}}</h6>
                <h6>description: {{post.description}}</h6>
                <h6>type: {{post.type}}</h6>
                <hr>
                <router-link to="read-more">read more</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import CompanyService from '../Warehouse/CompanyService';

    export default {
        name: 'Companies',
        data() {
            return {
                name: '',
                address: '',
                service_of_activity: '',
                number_of_employees: '',
                description: '',
                type: '',
                posts: [],
                error: '',
            }
        },
        async created() {
            try {
                this.posts = await CompanyService.getCompanies();
            } catch (err) {
                this.error = err.message;
            }
        },
        methods: {
            sortByName() {
                this.posts.sort((a, b) => a.name.localeCompare(b.name))
            },
            sortByEmployees() {
                this.posts.sort((a, b) => a.number_of_employees - b.number_of_employees)
            },
            sortByService() {
                this.posts.sort((a, b) => a.service_of_activity.localeCompare(b.service_of_activity))
            }
        }
    }
</script>

<style scoped>
    .btn-name {
        border: none;
        background-color: white;
        color: black;
    }

    .btn-employee {
        border: none;
        background-color: white;
        color: black;
        margin-left: 9px;
    }

    .btn-service {
        border: none;
        background-color: white;
        color: black;
        margin-left: 9px;
    }

    .sort-bar {
        justify-content: space-around;
        position: relative;
    }
</style>