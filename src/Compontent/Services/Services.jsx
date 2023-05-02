import React from 'react'
import { Helmet } from 'react-helmet';
import Rectangle1 from './../../Images/Services/Rectangle 1.png';
import Rectangle2 from './../../Images/Services/Rectangle 2.png';
import Rectangle3 from './../../Images/Services/Rectangle 3.png';
import Rectangle4 from './../../Images/Services/Rectangle 4.png';
import Rectangle5 from './../../Images/Services/Rectangle 5.png';
import Rectangle6 from './../../Images/Services/Rectangle 6.png';
import Rectangle7 from './../../Images/Services/Rectangle 7.png';
import Rectangle8 from './../../Images/Services/Rectangle 8.png';
import Polygon from './../../Images/Services/Polygon 2.png';
import Vector from './../../Images/Services/Vector 13.png';
import style from './Services.module.css'
import Footer from "../../Compontent/Footer/Footer";


export default function Services() {
  return <>
    <div className='pt-5 mt-5'>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Home" />
        <title>Services</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <img src={Vector} alt="logo" className={`${style.Icon}  `} />


      <div className='container'>
        <div className="row gx-5">

          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6'>
            <img src={Rectangle1} alt="logo" className={`${style.Photo1} w-100 border-1 `} />
            <img src={Polygon} alt="logo" className={`${style.Polygon} mt-3 `} />


          </div>
          <div className='col-md-6 col-sm-12 col-xl-6 col-xxl-6'>
            <h5 className={`${style.Text}  `}>1. Big Data & Business Analytics</h5>
            <p className={`${style.Prg} `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an type and scrambled it to make a type specimen book. It has survived not only five centu</p>
            {/* <button className={`${style.Read} rounded-3  border-0  `}><a>Read more</a></button> */}
          </div>



          <div className='col-md-6 col-sm-12 col-xl-6 col-xxl-6'>
            <h5 className={`${style.Text} mt-5  `}>2. IoT/ AI/ Robotics</h5>
            <p className={`${style.Prg} `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an type and scrambled it to make a type specimen book. It has survived not only five centu</p>
            {/* <button className={`${style.Read} rounded-3  border-0 `}><a>Read more</a></button> */}

          </div>

          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 '>
            <img src={Rectangle2} alt="logo" className={`${style.Photo1} w-100 border-1 mt-5 `} />

          </div>


          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 '>
            <img src={Rectangle3} alt="logo" className={`${style.Photo1} w-100 border-1 mt-5 `} />
          </div>

          <div className='col-md-6 col-sm-12 col-xl-6 col-xxl-6'>
            <h5 className={`${style.Text} mt-5  `}>3. Game Development and AR/VR</h5>
            <p className={`${style.Prg} `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an type and scrambled it to make a type specimen book. It has survived not only five centu</p>
            {/* <button className={`${style.Read} rounded-3  border-0  `}><a>Read more</a></button> */}
          </div>

          <div className='col-md-6 col-sm-12 col-xl-6 col-xxl-6'>
            <h5 className={`${style.Text} mt-5  `}>4. Web and Software Development</h5>
            <p className={`${style.Prg} `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an type and scrambled it to make a type specimen book. It has survived not only five centu</p>
            {/* <button className={`${style.Read} rounded-3  border-0  `}><a>Read more</a></button> */}
          </div>
          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 '>
            <img src={Rectangle4} alt="logo" className={`${style.Photo1} w-100 border-1 mt-5 `} />
          </div>

          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 '>
            <img src={Rectangle5} alt="logo" className={`${style.Photo1} w-100 border-1 mt-5 `} />
          </div>
          <div className='col-md-6 col-sm-12 col-xl-6 col-xxl-6'>
            <h5 className={`${style.Text} mt-5  `}>5. Mobile Application Development</h5>
            <p className={`${style.Prg} `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an type and scrambled it to make a type specimen book. It has survived not only five centu</p>
            {/* <button className={`${style.Read} rounded-3  border-0  `}><a>Read more</a></button> */}
          </div>

          <div className='col-md-6 col-sm-12 col-xl-6 col-xxl-6'>
            <h5 className={`${style.Text} mt-5  `}>6.SEO</h5>
            <p className={`${style.Prg} `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an type and scrambled it to make a type specimen book. It has survived not only five centu</p>
            {/* <button className={`${style.Read} rounded-3  border-0  `}><a>Read more</a></button> */}
          </div>
          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 '>
            <img src={Rectangle6} alt="logo" className={`${style.Photo1} w-100 border-1 mt-5 `} />
          </div>

          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 '>
            <img src={Rectangle7} alt="logo" className={`${style.Photo1} w-100 border-1 mt-5 `} />
          </div>
          <div className='col-md-6 col-sm-12 col-xl-6 col-xxl-6'>
            <h5 className={`${style.Text} mt-5  `}>7. Digital Marketing</h5>
            <p className={`${style.Prg} `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an type and scrambled it to make a type specimen book. It has survived not only five centu</p>
            {/* <button className={`${style.Read} rounded-3  border-0  `}><a>Read more</a></button> */}
          </div>


          <div className='col-md-6 col-sm-12 col-xl-6 col-xxl-6'>
            <h5 className={`${style.Text} mt-5  `}>8. Cyber Security</h5>
            <p className={`${style.Prg} `}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an type and scrambled it to make a type specimen book. It has survived not only five centu</p>
            {/* <button className={`${style.Read} rounded-3  border-0  `}><a>Read more</a></button> */}
          </div>
          <div className=' col-md-6 col-sm-12 col-xl-6 col-xxl-6 '>
            <img src={Rectangle8} alt="logo" className={`${style.Photo1} w-100 border-1 mt-5 `} />
          </div>

        </div>

      </div>
      <div className='mt-5 pt-5'>
      <Footer/>
      </div>
    </div>
  </>
}
