import axios from "axios";

const BASEURL = "https://randomuser.me/api/?inc=name,location,email,dob,phone,cell,picture&results=200&nat=us";

export default {
    search: function () {
        return axios.get(BASEURL);
    }
};