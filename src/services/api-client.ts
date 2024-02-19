import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'b32d676643a74786a73de9c288d1ee41'
    }
})