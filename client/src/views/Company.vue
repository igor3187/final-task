<template>
    <div class="container">
        <h1>My companies</h1>
        <router-link to="/companies"><br><h6>general list ></h6></router-link>
        <router-link to="/add-company"><h6>add company ></h6></router-link>
        <hr>
        <p class="error" v-if="error">{{error}}</p>
        <div class="post-container">
            <div class="post"
                 v-for="(post, index) in posts"
                 v-bind:itemid="post"
                 v-bind:aria-colindex="index"
                 v-bind:key="post._id"
                 v-on:dblclick="deleteCompany(post._id)">
                <h6>name: {{post.name}}</h6>
                <h6>address: {{post.address}}</h6>
                <h6>service of activity: {{post.service_of_activity}}</h6>
                <h6>number of employees: {{post.number_of_employees}}</h6>
                <h6>description: {{post.description}}</h6>
                <h6>type: {{post.type}}</h6>
                <p></p>
                <hr>
                <router-link :to="{path: 'edit/' + post._id}">edit company</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import CompanyService from "../Warehouse/CompanyService";

    export default {
        name: 'CompanyComponent',
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
            async deleteCompany(id) {
                await CompanyService.deleteCompany(id);
                this.posts = await CompanyService.getCompanies();
            }
        }
    };
</script>

<style>
    div.container {
        max-width: 800px;
        margin: 0 auto;
    }

    p.error {
        border: 1px solid #ff5b5f;
        background-color: #ffc5c1;
        padding: 10px;
        margin-bottom: 15px;
    }

    div.post {
        position: relative;
        border: 1px solid grey;
        background-color: lightgrey;
        padding: 10px 10px 30px 10px;
        margin-bottom: 15px;
    }

    div.created-at {
        position: absolute;
        top: 0;
        left: 0;
        padding: 5px 15px 5px 15px;
        background-color: darkgreen;
        color: white;
        font-size: 13px;
    }

    p.text {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 0;
    }
</style>
