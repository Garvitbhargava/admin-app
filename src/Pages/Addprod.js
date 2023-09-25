import React, { useEffect, useState,} from 'react'
import CustomInput from '../Components/CustomInput'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useField, useFormik } from 'formik';
import * as yup from 'yup';
import { getBrands } from '../features/brand/brandSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../features/pcategory/pcategorySlice';
import "react-widgets/styles.css";
import Multiselect from "react-widgets/Multiselect";
import { getColors } from '../features/color/colorSlice.js';
import Dropzone from 'react-dropzone'
import { uploadImg } from '../features/upload/uploadSlice';



 let schema = yup.object().shape({
    title: yup.string().required("Title is required"),
   description: yup.string().required("Discription is Required"),
   price: yup.number().required("Price is Required"),
   brand: yup.string().required("Brand is Required"),
   category: yup.string().required("Category is Required"),
    color: yup.string().required("Color is Required"),
   quantity:yup.number().required("Quantity is Required"),

    
 
});


const Addprod = () =>
{
  const dispatch = useDispatch();
const [color,setcolor] =useState([])

  useEffect(() =>
  {
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getColors());
    formik.values.color = color;
  }, []);
  const brandState = useSelector((state) => state.brand.brands);
  const catState = useSelector((state) => state.pCategory.pCategories);
  const colorState = useSelector((state) => state.color.colors);
   const imgState = useSelector((state) => state.upload.images);
  const colors = [];
  colorState.forEach(i =>
  {
    colors.push({
      _id: i._id,
      color: i.title,
    })
  })
   const formik = useFormik({
     initialValues: {
       title: '',
       description: '',
       price: '',
       brand: '',
       category: '',
       color: '',
       quantity:'',
    },
    
    validationSchema: schema ,
    onSubmit: values =>
    {

       alert(JSON.stringify(values, null, 2));
     },
  }); 
    const [desc, setDesc] = useState();
    const handleDesc =(e) => {
setDesc(e);
    }
  return (
    <div>
        <h3 className='mb-4 title'>Add Product</h3>
        <div>
            <form onSubmit={formik.handleSubmit} className='d-flex gap-3 flex-column'>
          <CustomInput type="text" label="Enter Product title" name="title"
            onCh={formik.handleChange("title")}
            onBlr={formik.handleBlur("title")}
            val={formik.values.title}
          />
          <div className='error'>
            {formik.touched.title && formik.errors.title}
          </div>
             <div>
             <ReactQuill 
                 theme="snow" 
              name="description"
           onChange={formik.handleChange("description")}
              onBlur={formik.handleBlur("description")}
            value={formik.values.description}/>
          </div>
           <div className='error'>
            {formik.touched.description && formik.errors.description}
          </div>
          <CustomInput type="text" label="Enter Product Price"
           name="price"
           onCh={formik.handleChange("price")}
              onBlr={formik.handleBlur("price")}
            val={formik.values.price}/>
           <div className='error'>
            {formik.touched.price && formik.errors.price}
          </div>
          <select
            name="brand"
           onChange={formik.handleChange("brand")}
              onBlur={formik.handleBlur("brand")}
            value={formik.values.brand}
            className='form-control py-3 mb-3'
            id=''
          >
            <option value="">Select Brand</option>
            {brandState.map((i, j) =>
            {
              return (
                <option key={j} value={i.title}>{i.title}</option>
              );
            })}
          </select>
           <div className='error'>
            {formik.touched.brand && formik.errors.brand}
          </div>
                  <select name="category"
           onChange={formik.handleChange("category")}
              onBlur={formik.handleBlur("category")}
            value={formik.values.category}
            className='form-control py-3 mb-3' id=''>
            <option value="">Select  Category</option>
             {catState.map((i, j) =>
            {
              return (
                <option key={j} value={i.title}>{i.title}</option>
              );
            })}
          </select>
           <div className='error'>
            {formik.touched.category && formik.errors.category}
          </div>
          <Multiselect
            name='color'
  dataKey="id"
  textField="color"
            data={colors}
            onChange={(e) => setcolor(e)}
    
          />
         <div className='error'>
            {formik.touched.color && formik.errors.color}
          </div>
               
          <CustomInput
             name="quantity"
           onCh={formik.handleChange("quantity")}
              onBlr={formik.handleBlur("quantity")}
            val={formik.values.quantity}
            type="text" label="Enter Product Quantity" />
            <div className='error'>
            {formik.touched.quantity && formik.errors.quantity}
          </div>
          <div className='bg-white border-1 p-5 text-center'>
            <Dropzone onDrop={acceptedFiles => dispatch(uploadImg(acceptedFiles))}>
  {({getRootProps, getInputProps}) => (
    <section>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </section>
  )}
</Dropzone>
          </div>
          <div className='showimages d-flex flex-wrap gap-3'>
            {imgState.map((i, j) =>{
              return (
                <div className='position-relative' key={j}>
                  <button className='btn-close position-absolute'
                    style={{ top: "10px", right: "10px" }}></button>
              <img src={i.url} alt='' width={200} height={200}/>
            </div>
              )
            })}
           
          </div>

            
              
                <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>
                    Add Product
                 </button>
            </form>
        </div>
    </div>
  )
}

export default Addprod