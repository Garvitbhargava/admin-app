import axios from "axios";
import { base_url } from "../../utlis/base_url";
import {config} from "../../utlis/axiosconfig";



const getCoupons = async () =>
{
    const response = await axios.get(`${base_url}coupon/`,config);
   
    return response.data
};

const createCoupon = async (coupon) =>
{
    const response = await axios.post(`${base_url}coupon/`, coupon,config);
    return response.data;
};


const couponService = {
    getCoupons,
    createCoupon,
};
export default couponService;