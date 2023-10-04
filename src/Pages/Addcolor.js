import React, { useEffect} from 'react'
import CustomInput from '../Components/CustomInput';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
 import { useFormik } from 'formik';
import * as yup from 'yup';
import { createColor, resetState } from '../features/color/colorSlice';


let schema = yup.object().shape({
    title: yup.string().required("Color Name is required"),
  
});


const Addcolor = () =>
{
  
   const dispatch = useDispatch();
  const navigate = useNavigate();
  const newColor = useSelector((state) => state.color);
const { isSuccess, isError, isLoading, createdColor } = newColor;
  useEffect(() =>
  {
    if (isSuccess && createdColor) {
      toast.success("Color Added Successfullly!");
    }
    if (isError)
    {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading, createdColor]);
  const formik = useFormik({
     initialValues: {
       title: '',
    },
    
    validationSchema: schema ,
    onSubmit: values =>
    {
      dispatch(createColor(values));
      formik.resetForm();
      setTimeout(() =>
      {
        dispatch(resetState());
      }, 3000);
     },
  }); 
  return (
    <div>
        <h3 className='mb-4 title'>Add Color</h3>
        <div>
            <form action='' onSubmit={formik.handleSubmit}>
          <CustomInput type="color" label="Enter Product Color"
          name="title"
            onCh={formik.handleChange("title")}
            onBlr={formik.handleBlur("title")}
            val={formik.values.title}
          id="color"/>
          <div className='error'>
            {formik.touched.title && formik.errors.title}
          </div>
                <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>
                    Add Color
                 </button>
            </form>
        </div>
    </div>
  )
}

export default Addcolor