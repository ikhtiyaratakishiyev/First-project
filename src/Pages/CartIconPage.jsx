import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { Helmet } from 'react-helmet'
const CartIconPage = () => {
  return (
    <div>
         <Nav/>
         <Helmet>
      <style>
        {`
      
        nav>.container>ul>li{
          color:#000;
        }
        nav>.container>ul>svg{
          fill:#000;
        }
        nav>.container>ul>li>svg{
          fill:#000;
        }
        nav>.container>ul>li>a{
          color:#000;
        }
        nav>.container>ul>.hamburger>.bar{
          background:#000;
        }
        
        `}
      </style>
  </Helmet>
        <h1>CartIconPage</h1>
        <Footer/>
    </div>
  )
}

export default CartIconPage