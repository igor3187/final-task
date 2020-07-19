<template>
    <div>
        <h2>Edit Profile</h2>
        <hr>
        <div class="edit-profile">
            <label for="name">Name</label>
            <input id="name" type="text" placeholder="Name" name="name" v-model="user.firstName"
                   class="form-control">
            <label for="lastName">Last name</label>
            <input id="lastName" type="text" placeholder="Last name" name="lastName" v-model="user.lastName"
                   class="form-control">
            <label for="nickName">Nick name</label>
            <input id="nickName" type="text" placeholder="Nick name" name="nickName"
                   v-model="user.nickName"
                   class="form-control">
            <label for="description">Description</label>
            <input id="description" type="text" placeholder="Description" name="description"
                   v-model="user.description"
                   class="form-control">
            <label for="position">Position</label>
            <input id="position" type="text" placeholder="Position" name="position" v-model="user.position"
                   class="form-control">
            <label for="phoneNumber">Phone number</label>
            <input id="phoneNumber" type="text" placeholder="Phone number" name="phoneNumber" v-model="user.phoneNumber"
                   class="form-control">
            <label for="email">Email</label>
            <input id="email" type="email" placeholder="Email" name="email" v-model="user.email"
                   class="form-control">
            <button class="btn btn-primary" v-on:click="editProfile(user)">Edit</button>
            <router-link class="link" to="/profile">back ></router-link>
        </div>
    </div>
</template>

<script>
    import Profile from "../Warehouse/Profile";

    export default {
        data() {
            return {
                user: {}
            }
        },
        mounted() {
            Profile.getProfileId(this.$route.params.id)
                .then(profile => {
                    this.user = profile;
                });
        },

        methods: {
            async editProfile(user) {
                await Profile.updateProfile(
                    user._id,
                    user);
                await this.$router.push('/profile');
            }
        }
    }
</script>

<style scoped>
    .btn {
        margin-top: 8px;
        padding: 1px 20px 1px 20px;
        border-radius: 0;
        font-size: large;
    }

    .link {
        margin-left: 10px;
    }
</style>