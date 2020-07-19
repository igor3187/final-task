<template>
    <div class="container">
        <h1>Add Company</h1>
        <br>
        <div class="create-company">
            <label for="name">Name</label>
            <input id="name" type="text" placeholder="Name" name="name" v-model="name"
                   class="form-control">
            <label for="address">Address</label>
            <input id="address" type="text" placeholder="Address" name="address" v-model="address"
                   class="form-control">
            <label for="serviceOfActivity">Service of activity</label>
            <input id="serviceOfActivity" type="text" placeholder="Service of activity" name="serviceOfActivity"
                   v-model="service_of_activity"
                   class="form-control">
            <label for="numberOfEmployees">Number of employees</label>
            <input id="numberOfEmployees" type="text" placeholder="Number of employees" name="numberOfEmployees"
                   v-model="number_of_employees"
                   class="form-control">
            <label for="description">Description</label>
            <input id="description" type="text" placeholder="Description" name="description"
                   v-model="description"
                   class="form-control">
            <label for="type">Type</label>
            <input id="type" type="text" placeholder="Type" name="type" v-model="type"
                   class="form-control">
            <button class="btn btn-primary" v-on:click="createCompany">Post</button>
            <router-link class="link" to="/company">back></router-link>
        </div>
    </div>
</template>

<script>
    import CompanyService from "../Warehouse/CompanyService";

    export default {
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
                text: ''
            }
        },
        methods: {
            async createCompany() {
                await CompanyService.insertCompany(
                    this.name,
                    this.address,
                    this.service_of_activity,
                    this.number_of_employees,
                    this.description,
                    this.type);
                this.posts = await CompanyService.getCompanies();
                await this.$router.push('company');
            }
        }
    }
</script>

<style scoped>
    .btn {
        margin-top: 10px;
        padding: 1px 20px 1px 20px;
        border-radius: 0;
        font-size: large;
    }

    .link {
        padding-top: 15px;
        margin-left: 10px;
    }
</style>