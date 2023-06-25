import axios from "axios";

const BASE_URL = "/api/class/";

const addClass = async (course) => {
    const response = await axios.post(`${BASE_URL}/addClass`, course); 
    return response.data;
};

const getClass = async () => {
    const response = await axios.get(`${BASE_URL}/getClass`); 
    return response.data;
};

const classService = {
    addClass,
    getClass
};

export default classService;