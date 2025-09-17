import React from 'react'
import Images from '../assets/Images/Image'
import './Footer.css'

export default function Footer() {
  return (
  <>
  <div className='container-fluid p-5 bg-transparent' >
    <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-6'>
            <img src={Images.logo} alt='footerlogo' className='footerlogo'/>
        </div>
         <div className='col-sm-12 col-md-12 col-lg-6'>
            <img src={Images.logo} alt='footerlogo' className='footerlogo'/>
        </div>
    </div>
  </div>
  </>
  )
}
