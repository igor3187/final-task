import axios from "axios";

const apiUrl = 'http://localhost:5000';

class Profile {
    static getProfileId(id) {
        return new Promise((resolve, reject) => {
            axios.get(apiUrl + '/api/users/' + id)
                .then(res => {
                    const data = res.data;
                    resolve(data);
                })
                .catch(reject)
        });
    }

    static updateProfile(id, profile) {
        return axios.put(apiUrl + '/api/users/' + id, profile);
    }
}

export default Profile;