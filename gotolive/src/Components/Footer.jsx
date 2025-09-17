import React from 'react'
import Images from '../assets/Images/Image'
import './Footer.css'

export default function Footer() {
  return (
  <>
  <div className='container  bg-transparent' >
    <div className='row p-5'>
        <div className='col-sm-12 col-md-12 col-lg-6'>
            <img src={Images.logo} alt='footerlogo' className='footerlogo'/>
        </div>
         <div className='col-sm-12 col-md-12 col-lg-6'>
            <h5 className='text-white'> GET SOCIAL</h5>
           
        </div>
    </div>
  </div>
  </>
  )
}
