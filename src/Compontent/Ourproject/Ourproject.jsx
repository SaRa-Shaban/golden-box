import React from 'react'
import { Helmet } from 'react-helmet';
import style from './Ourproject.module.css'
import PHOTO1 from './../../Images/Ourproject/Photo1.png';
import PHOTO2 from './../../Images/Ourproject/Photo2.png';
import PHOTO3 from './../../Images/Ourproject/Photo3.png';
import PHOTO4 from './../../Images/Ourproject/Photo4.png';
import PHOTO5 from './../../Images/Ourproject/Photo5.png';
import PHOTO6 from './../../Images/Ourproject/Photo6.png';
import Vector from './../../Images/Ourproject/Vector.png';
import icon from './../../Images/Ourproject/icon.png';
import Polygon2 from './../../Images/Ourproject/Polygon 2 (1).png';
import Polygon3 from './../../Images/Ourproject/Polygon 3.png';
import Ellipse from './../../Images/Ourproject/Ellipse-57.png';
import Ellipse1 from './../../Images/Ourproject/Ellipse-58.png';
import Footer from "../../Compontent/Footer/Footer";


export default function Ourproject() {
  return <>

    <div className='pt-5 mt-5 '>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Home" />
        <title>Projects</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <img src={Vector} alt="logo" className={`${style.Vector}  `} />


      <div className='container'>
        <div className=' row gx-5'>

          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 col-lg-6'>
            <img src={PHOTO1} alt="logo" className='w-100 ' />
            <h3 className={`${style.Title}`}>Food Delivery App</h3>
            <p className={`${style.Prg}`}>Lorem Ipsum is simply dummy text of the printing and typesettin dustry. Lorem Ipsum has been the industry's standard simply</p>
            <a className={`${style.acon}`}>View <img src={icon} alt="logo" /> </a>
          </div>
          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 col-lg-6'>
            <img src={PHOTO2} alt="logo" className='w-100 ' />
            <h3 className={`${style.Title}`}>Service Provider App </h3>
            <p className={`${style.Prg}`}>Lorem Ipsum is simply dummy text of the printing and typesettin dustry. Lorem Ipsum has been the industry's standard simply</p>
            <a className={`${style.acon}`}>View <img src={icon} alt="logo" /> </a>
          </div>


          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 col-lg-6'>
            <img src={PHOTO3} alt="logo" className='w-100 mt-5 ' />
            <h3 className={`${style.Title}`}>Podcast App</h3>
            <p className={`${style.Prg}`}>Lorem Ipsum is simply dummy text of the printing and typesettin dustry. Lorem Ipsum has been the industry's standard simply</p>
            <a className={`${style.acon}`}>View <img src={icon} alt="logo" /> </a>
          </div>
          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 col-lg-6'>
            <img src={PHOTO4} alt="logo" className='w-100 mt-5 ' />
            <h3 className={`${style.Title}`}>E-Pay App</h3>
            <p className={`${style.Prg}`}>Lorem Ipsum is simply dummy text of the printing and typesettin dustry. Lorem Ipsum has been the industry's standard simply</p>
            <a className={`${style.acon}`}>View <img src={icon} alt="logo" /> </a>
          </div>

          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 col-lg-6'>
            <img src={PHOTO5} alt="logo" className='w-100 mt-5 ' />
            <h3 className={`${style.Title}`}>Travel Website Design</h3>
            <p className={`${style.Prg}`}>Lorem Ipsum is simply dummy text of the printing and typesettin dustry. Lorem Ipsum has been the industry's standard simply</p>
            <a className={`${style.acon}`}>View <img src={icon} alt="logo" /> </a>
          </div>
          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 col-lg-6'>
            <img src={PHOTO6} alt="logo" className='w-100 mt-5 ' />
            <h3 className={`${style.Title}`}>Travel Website Design</h3>
            <p className={`${style.Prg}`}>Lorem Ipsum is simply dummy text of the printing and typesettin dustry. Lorem Ipsum has been the industry's standard simply</p>
            <a className={`${style.acon}`}>View <img src={icon} alt="logo" /> </a>
          </div>


          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 col-lg-6'>
            <img src={PHOTO5} alt="logo" className='w-100 mt-5 ' />
            <h3 className={`${style.Title}`}>Travel Website Design</h3>
            <p className={`${style.Prg}`}>Lorem Ipsum is simply dummy text of the printing and typesettin dustry. Lorem Ipsum has been the industry's standard simply</p>
            <a className={`${style.acon}`}>View <img src={icon} alt="logo" /> </a>
          </div>
          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 col-lg-6'>
            <img src={PHOTO6} alt="logo" className='w-100 mt-5 ' />
            <h3 className={`${style.Title}`}>Travel Website Design</h3>
            <p className={`${style.Prg}`}>Lorem Ipsum is simply dummy text of the printing and typesettin dustry. Lorem Ipsum has been the industry's standard simply</p>
            <a className={`${style.acon}`}>View <img src={icon} alt="logo" /> </a>
          </div>

          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 col-lg-6'>
            <img src={PHOTO5} alt="logo" className='w-100 mt-5 ' />
            <h3 className={`${style.Title}`}>Travel Website Design</h3>
            <p className={`${style.Prg}`}>Lorem Ipsum is simply dummy text of the printing and typesettin dustry. Lorem Ipsum has been the industry's standard simply</p>
            <a className={`${style.acon}`}>View <img src={icon} alt="logo" /> </a>
          </div>
          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 col-lg-6'>
            <img src={PHOTO6} alt="logo" className='w-100 mt-5 ' />
            <h3 className={`${style.Title}`}>Travel Website Design</h3>
            <p className={`${style.Prg}`}>Lorem Ipsum is simply dummy text of the printing and typesettin dustry. Lorem Ipsum has been the industry's standard simply</p>
            <a className={`${style.acon}`}>View <img src={icon} alt="logo" /> </a>
          </div>


        </div>

      </div>

      <div className='mt-5 pt-5'>
        <Footer />
      </div>
    </div>

  </>
}