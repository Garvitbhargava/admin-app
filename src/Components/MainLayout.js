import React, { useState } from 'react';
import { Layout, Menu, Button, theme } from 'antd';
import {AiOutlineDashboard ,
    AiOutlineShoppingCart,
    AiOutlineUser,
    AiOutlineBgColors,
    AiOutlinePicLeft,
    AiOutlinePicRight
} from 'react-icons/ai'
 import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {SiBrandfolder} from "react-icons/si"
import {BiCategory,BiLogoBlogger} from "react-icons/bi"
import {AiOutlineLogin} from "react-icons/ai"
import {FaClipboardList,FaBlog,} from "react-icons/fa"
import { IoIosNotificationsOutline } from "react-icons/io"
import {RiCouponLine} from "react-icons/ri"
import { Link, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate =useNavigate();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
            <h2 className='text-white fs-5 text-center py-3 mb-0'>
                <span className='sm-logo'>DG</span>
                <span className='lg-logo'>
           Digitic
                </span>
                </h2>
            </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({key}) => {
           if(key === "signout"){
             localStorage.clear()
             window.location.reload()
           }else{
            navigate(key);
           }
          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard  className='fs-4'/>,
              label: 'Dashboard',
            },
            {
                key: 'customers',
                icon: <AiOutlineUser  className='fs-4'/>,
                label: 'Customers',
              },
              {
                key: 'catalog',
                icon: <AiOutlineShoppingCart  className='fs-4'/>,
                label: 'Catalog',
                children:[
                    {
                        key: 'product',
                        icon: <AiOutlineShoppingCart className='fs-4' />,
                        label: 'Add Product',
                      },
                      {
                        key: 'product-list',
                        icon: <AiOutlineShoppingCart className='fs-4' />,
                        label: 'Product List',
                      },
                      {
                        key:'brand',
                        icon:<SiBrandfolder className='fs-4'/>,
                        label:"Brand"

                      },
                      {
                        key:'list-brand',
                        icon:<SiBrandfolder className='fs-4'/>,
                        label:"Brand List"

                      },
                      {
                        key:'category',
                        icon:<BiCategory className='fs-4'/>,
                        label:"Category"

                      },
                      {
                        key:'list-category',
                        icon:<BiCategory className='fs-4'/>,
                        label:"Category List"

                      },
                      {
                        key:'color',
                        icon:<AiOutlineBgColors className='fs-4'/>,
                        label:"Color"

                      },
                      {
                        key:'list-color',
                        icon:<AiOutlineBgColors className='fs-4'/>,
                        label:"Color List"

                      },
                    ],

              },
              {
                key: 'orders',
                icon: <FaClipboardList  className='fs-4'/>,
                label: 'Orders',
            
            },
               {
                key: 'marketing',
                icon: <RiCouponLine  className='fs-4'/>,
                label: 'Marketing',
                children:[
                   {
                    key: 'coupon',
                    icon: <FaBlog className='fs-4'/>,
                    label: 'Add-coupon',
                   } ,
                   {
                    key: 'coupon-list',
                    icon: <RiCouponLine  className='fs-4'/>,
                    label: 'Coupon List',
                   } ,
                   
                ],
            
              },
              {
                key: 'blogs',
                icon: <BiLogoBlogger  className='fs-4'/>,
                label: 'Blogs',
                children:[
                   {
                    key: 'blog',
                    icon: <FaBlog  className='fs-4'/>,
                    label: 'Add-Blog',
                   } ,
                   {
                    key: 'blog-list',
                    icon: <BiLogoBlogger  className='fs-4'/>,
                    label: 'Blog List',
                   } ,
                   {
                    key: 'blog-category',
                    icon: <FaBlog className='fs-4'/>,
                    label: 'Add Blog Category',
                   } ,
                   {
                    key: 'blog-category-list',
                    icon: <BiLogoBlogger className='fs-4'/>,
                    label: 'Add Blog Category List',
                   } ,
                ],
            
              },

              {
                key: 'enquiries',
                icon: <FaClipboardList  className='fs-4'/>,
                label: 'Enquiries',
              },

              {
                key: 'signout',
                icon: <AiOutlineLogin className='fs-4'/>,
                label: 'Sign Out',
              },

          ]}
        />
      </Sider>
      <Layout>
        <Header className='d-flex justify-content-between ps-3 pe-5' 
        style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? < AiOutlinePicRight /> : < AiOutlinePicLeft />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
<div className='d-flex gap-4 align-items-center'>
   <div className='position-relative'>
    <IoIosNotificationsOutline className='fs-4 gap-4'/>
   <span className='badge bg-warning rounded-circle p-1 position-absolute'>3</span></div>
   <div className='d-flex gap-3 align-items-center dropdown'>
    <div>
        <img 
        width={32}
        height={32}
        src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&w=60&q=80' alt='img'/>
    </div>
    <div 
    role="button" 
    id="dropdownMenuLink" 
    data-bs-toggle="dropdown" 
    aria-expanded="false">

        <h5 className='mb-0'>Garvit Bhargava</h5>
        <p className='mb-0'>garvitbhargava05@gmail.com</p>
    </div>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li>
      <Link
      className="dropdown-item py-1 mb-1"
      style={{
      height:"auto",lineHeight:"20px"}}
       to="/">
        View Profile
        </Link>
        </li>
    <li>
      <Link
      className="dropdown-item py-1 mb-1" 
      style={{
      height:"auto",lineHeight:"20px"}}
       to="/">
        Signout
        </Link>
        </li>

    </div>
   </div>
</div>

        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <ToastContainer
          position="top-right"
autoClose={250}
hideProgressBar={false}
newestOnTop={true}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
  theme="light"
          />
         <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;