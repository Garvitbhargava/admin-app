
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Pages/Login';
import Resertpassword from './Pages/Resertpassword';
import Forgotpassword from './Pages/Forgotpassword';
import MainLayout from './Components/MainLayout';
import Dashboard from './Pages/Dashboard';
import Enquiries from './Pages/Enquiries';
import Bloglist from './Pages/Bloglist';
import Blogcatlist from './Pages/Blogcatlist';
import Orders from './Pages/Orders';
import Customers from './Pages/Customers';
import Colorlist from './Pages/Colorlist';
import Categorylist from './Pages/Categorylist';
import Brandlist from './Pages/Brandlist';
import Productlist from './Pages/Productlist';
import Addblog from './Pages/Addblog';
import Addblogcat from './Pages/Addblogcat';
import Addcolor from './Pages/Addcolor';
import Addcat from './Pages/Addcat';
import Addbrand from './Pages/Addbrand';
import Addprod from './Pages/Addprod';
import Couponlist from './Pages/Couponlist';
import AddCoupon from './Pages/AddCoupon';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/resert-password' element={<Resertpassword />}/>
      <Route path='/forgot-password' element={<Forgotpassword />}/>
      <Route path='/admin' element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='enquiries' element={<Enquiries />}/>
        <Route path='blog-list' element={<Bloglist />}/>
          <Route path='blog' element={<Addblog />} />
          <Route path='coupon-list' element={<Couponlist />} />
          <Route path='coupon' element={<AddCoupon />} />
           <Route path='coupon/:id' element={<AddCoupon />}/>
        <Route path='blog-category-list' element={<Blogcatlist />}/>
        <Route path='blog-category' element={<Addblogcat />}/>
        <Route path='orders' element={<Orders />}/>
        <Route path='customers' element={<Customers />}/>
        <Route path='list-color' element={<Colorlist />}/>
          <Route path='color' element={<Addcolor />} />
          <Route path='color/:id' element={<Addcolor />}/>
        <Route path='list-category' element={<Categorylist />}/>
          <Route path='category' element={<Addcat />} />
            <Route path='category/:id' element={<Addcat />}/>
        <Route path='list-brand' element={<Brandlist />}/>
          <Route path='brand' element={<Addbrand />} />
        <Route path='brand/:id' element={<Addbrand />}/>
        <Route path='product-list' element={<Productlist />}/>
        <Route path='product' element={<Addprod />}/>
        
        
      </Route>
    </Routes>
   </Router>
  );
}

export default App;
