import axios from 'axios';

export default axios.create({
    baseURL: "https://inshorts-api-alpha.vercel.app"
});