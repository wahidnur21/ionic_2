import  Axios  from "axios";
import  { token }  from "./user";
import  { watch }  from "vue";

export const axios = Axios.create({
    baseURL: 'http:/127.0.0.1:8000/api/',
    timeout: 10000,
}); 

// set default headers for all requests
axios.defaults.headers.common['x-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common["Authorization"] = "Bearer" + token.value;

// Watch for changes in Token Storage and update the Autorization header accordingly
watch(token, (newVal) => {
    axios.defaults.headers.common["Authorization"] ="Bearer" + token.value;
    console.log({ "New token" : "Bearer" + token.value })
});