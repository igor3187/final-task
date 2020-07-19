import axios from 'axios';

const apiUrl = 'http://localhost:5000';

class CompanyService {
    //get company
    static getCompanies() {
        return new Promise((resolve, reject) => {
            axios.get(apiUrl + '/api/companies')
                .then(res => {
                    const data = res.data;
                    resolve(
                        data.map(post => ({
                            ...post,
                            createdAt: new Date(post.createdAt)
                        }))
                    );
                })
                .catch(reject)
        });
    }

    static getCompaniesId(id) {
        return new Promise((resolve, reject) => {
            axios.get(apiUrl + '/api/companies/' + id)
                .then(res => {
                    const data = res.data;
                    resolve(data);
                })
                .catch(reject)
        });
    }

    //create company
    static insertCompany(name, address, service_of_activity, number_of_employees, description, type) {
        return axios.post(apiUrl + '/api/companies', {
            name, address, service_of_activity, number_of_employees, description, type
        });
    }

    //update company
    static updateCompany(id, company) {
        return axios.put(apiUrl + '/api/companies/' + id, company);
    }

    //delete company
    static deleteCompany(id) {
        return axios.delete(`${apiUrl}/api/companies/${id}`)
    }
}

export default CompanyService;