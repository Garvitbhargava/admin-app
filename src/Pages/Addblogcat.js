import React, { useEffect} from 'react'
import CustomInput from '../Components/CustomInput';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
 import { useFormik } from 'formik';
import * as yup from 'yup';
import { createBlogCatyegory, resetState } from '../features/bcategory/bcategorySlice';

let schema = yup.object().shape({
    title: yup.string().required("Category Name is required"),
  
});

const Addblogcat = () =>
{
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newBlogCategory = useSelector((state) => state.bCategory);
const { isSuccess, isError, isLoading, createdBlogCategory } = newBlogCategory;
  useEffect(() =>
  {
    if (isSuccess && createdBlogCategory)
    {
      toast.success("Blog Category Added Successfully!");
    }
    if (isError)
    {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);
  const formik = useFormik({
     initialValues: {
       title: '',
    },
    
    validationSchema: schema ,
    onSubmit: values =>
    {
      dispatch(createBlogCatyegory(values));
      formik.resetForm();
      setTimeout(() =>
      {
        dispatch(resetState());
       
      }, 3000);
     },
  }); 
  return (
    <div>
        <h3 className='mb-4 title'>Add Blog Category</h3>
        <div>
            <form action='' onSubmit={formik.handleSubmit}>
          <CustomInput type="text" label="Enter Blog Category"
           name="title"
            onCh={formik.handleChange("title")}
            onBlr={formik.handleBlur("title")}
            val={formik.values.title}
          id="blogcat"/>
          <div className='error'>
            {formik.touched.title && formik.errors.title}
          </div>
                <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>
                    Add Blog Category
                 </button>
            </form>
        </div>
    </div>
  )
}

export default Addblogcat