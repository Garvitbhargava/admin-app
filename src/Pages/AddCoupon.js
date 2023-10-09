import React, { useEffect, useState} from 'react'
import CustomInput from '../Components/CustomInput';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
 import { useFormik } from 'formik';
import * as yup from 'yup';
import { createCoupon, getACoupon, resetState } from '../features/coupon/couponSlice';

let schema = yup.object().shape({
    name: yup.string().required("Coupon Name is Required"),
    expiry: yup.date().required("Expiry date is Required"),
    discount: yup.number().required("Discount is Required"),
  
});

const AddCoupon = () =>
{
  
  const dispatch = useDispatch();
  const location = useLocation();
  const getCouponId = location.pathname.split("/")[3];
  const newCoupon = useSelector((state) => state.coupon);
  const { isSuccess, isError, isLoading, createdCoupon,
    couponName,
    couponDiscount,
    couponExpiry } = newCoupon;
  
  const changeDateFormet = (date) =>
  {
    const newDate = new Date(date).toLocaleDateString();
    const [month, day, year] = newDate.split("/");
    return [year, month, day].join("-");
  };
  
  useEffect(() => {
    if (getCouponId !== undefined)
    {
      dispatch(getACoupon(getCouponId));
     
    } else
    {
      dispatch(resetState());
    }
  },[getCouponId])
  useEffect(() =>
  {
    if (isSuccess && createdCoupon)
    {
      toast.success("Coupon Added Successfully!");
    }
     if (isSuccess && couponName && couponDiscount && couponExpiry )
    {
      toast.success("Coupon updated Successfully!");
    }
    if (isError && couponName && couponDiscount && couponExpiry)
    {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);
  const formik = useFormik({
    enableReinitialize:true,
     initialValues: {
          name: couponName|| "",
          expiry: changeDateFormet(couponExpiry) ||"",
         discount:couponDiscount||"",
    },
    
    validationSchema: schema ,
    onSubmit: values =>
    {
        
      dispatch(createCoupon(values));
      formik.resetForm();
      setTimeout(() =>
      {
        dispatch(resetState());
      }, 300);
     },
  }); 
  return (
    <div>
      <h3 className='mb-4 title'>
        {getCouponId !== undefined ? "Edit" : "Add"} Coupon</h3>
        <div>
            <form action='' onSubmit={formik.handleSubmit}>
          <CustomInput type="text" label="Enter Coupon Name"
          name="name"
            onCh={formik.handleChange("name")}
            onBlr={formik.handleBlur("name")}
            val={formik.values.name}
          id="name"/>
          <div className='error'>
            {formik.touched.name && formik.errors.name}
                  </div>
                   <CustomInput type="date" label="Enter Expiry Date"
          name="expiry"
            onCh={formik.handleChange("expiry")}
            onBlr={formik.handleBlur("expiry")}
            val={formik.values.expiry}
          id="date"/>
          <div className='error'>
            {formik.touched.expiry && formik.errors.expiry}
                  </div>
                   <CustomInput type="number" label="Enter Discount"
          name="discount"
            onCh={formik.handleChange("discount")}
            onBlr={formik.handleBlur("discount")}
            val={formik.values.discount}
          id="discount"/>
          <div className='error'>
            {formik.touched.discount && formik.errors.discount}
          </div>
          
          
          
                <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>
                    {getCouponId !== undefined ? "Edit" : "Add"} Coupon
                 </button>
            </form>
        </div>
    </div>
  )
}

export default AddCoupon