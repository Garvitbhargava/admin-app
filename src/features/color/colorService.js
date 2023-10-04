import axios from "axios";
import { base_url } from "../../utlis/base_url";
import {config} from "../../utlis/axiosconfig";



const getColors = async () =>
{
    const response = await axios.get(`${base_url}color/`);
   
    return response.data
};

const createColor = async (color) =>
{
    const response = await axios.post(`${base_url}color/`, color,config);
    return response.data;
};

const colorService = {
    getColors,
    createColor,
};
export default colorService;