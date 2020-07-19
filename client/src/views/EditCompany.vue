<template>
    <div class="container">
        <h1>Edit Company</h1>
        <br>
        <div class="edit-company">
            <label for="name">Name</label>
            <input id="name" type="text" placeholder="Name" name="name" v-model="post.name"
                   class="form-control">
            <label for="address">Address</label>
            <input id="address" type="text" placeholder="Address" name="address" v-model="post.address"
                   class="form-control">
            <label for="serviceOfActivity">Service of activity</label>
            <input id="serviceOfActivity" type="text" placeholder="Service of activity" name="serviceOfActivity"
                   v-model="post.service_of_activity"
                   class="form-control">
            <label for="numberOfEmployees">Number of employees</label>
            <input id="numberOfEmployees" type="text" placeholder="Number of employees" name="numberOfEmployees"
                   v-model="post.number_of_employees"
                   class="form-control">
            <label for="description">Description</label>
            <input id="description" type="text" placeholder="Description" name="description"
                   v-model="post.description"
                   class="form-control">
            <label for="type">Type</label>
            <input id="type" type="text" placeholder="Type" name="type" v-model="post.type"
                   class="form-control">
            <button class="btn btn-primary" v-on:click="editCompany(post)">Edit</button>
            <router-link class="link" to="/company">back ></router-link>
        </div>
    </div>
</template>

<script>
    import CompanyService from '../Warehouse/CompanyService'

    export default {
        data() {
            return {
                post: {}
            }
        },
        mounted() {
            CompanyService.getCompaniesId(this.$route.params.id)
                .then(company => {
                    this.post = company;
                });
        },
        methods: {
            async editCompany(post) {
                await CompanyService.updateCompany(
                    post._id,
                    post);
                await this.$router.push('/company');
            }
        }
    }
</script>

<style scoped>
    .btn {
        margin-top: 5px;
        padding: 1px 20px 1px 20px;
        border-radius: 0;
        font-size: large;
    }

    .link {
        margin-left: 10px;
    }
</style>