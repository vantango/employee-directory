import axios from "axios";

const API = "https://randomuser.me/api/?inc=name,location,email,dob,phone,picture&results=25&nat=us";

export default {
    search: function () {
        return axios.get(API);
    }
};