import React from 'react'
import { Helmet } from 'react-helmet';
import style from './AboutUs.module.css'
import intro from '../../assets/About/intro.png'
import slider1 from '../../assets/About/slider1.png'
import slider2 from '../../assets/About/slider2.png'
import slider3 from '../../assets/About/slider3.png'
import partner from '../../assets/About/parteners.png'
import partner2 from '../../assets/About/partner2.png'
import partner3 from '../../assets/About/partner3.png'
import doublecircle from '../../assets/About/doublecircle.png'

import Slider from "react-slick";
import Footer from '../Footer/Footer'


export default function AboutUs() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        listClass: "slick-list",  // specify your custom class here
        // listClass: "slick-slide",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: false

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false

                }
            }
        ]
    };


    return (
        <>

            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Home" />
                <title>About</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className={`${style.about} pt-3`}>

                {/* whoWeAre */}
                <div className={`${style.WhoeWeArw} pt-3`}>
                    <div className={` container-fluid`}>
                        <div className="row">
                            <div className="col-md-12 col-lg-6 px-0">
                                <div className={`${style.contentText}  d-flex align-items-center h-100`}>
                                    <div className='w-75 mx-auto '>
                                        <h1>Who <span>we are....</span></h1>
                                        <p>GoldenBox ,we believe in a systematic approach for any project be it complex or simple. We are a group of individuals with various sets of skill sets varies from Digital Marketing. We have our dedicated team for your project which uses various methods such as Agile Scrum & Agile Kanban. We ensure top-notch quality, on-time delivery, and agility for your project.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <div className={`${style.contentImg}   d-flex justify-content-center align-items-center`}>
                                    <img src={intro} className='w-75 ' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* slider /// meet */}
                <div className={`${style.meet}  my-5`}>
                    <div className={`${style.content}  py-5`}>
                        <h1 className='w-100 pb-4'>Meet our team</h1>

                        <div>

                            <Slider {...settings}>

                                <div className="card bg-transparent border-0" >
                                    <img src={slider2} className="card-img-top w-100" alt="..." />
                                    <div className="w-75">
                                        <p className='text-light px-2 py-2 my-2'>Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                                        <h6 className='text-muted px-2 my-0'>(UI UX Designer) <span className=''>Abdallah Adel</span></h6>
                                    </div>
                                </div>

                                <div className="card bg-transparent border-0" >
                                    <img src={slider1} className="card-img-top w-100" alt="..." />
                                    <div className="w-75">
                                        <p className='text-light px-2 py-2 my-2'>Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                                        <h6 className='text-muted px-2 my-0'>(UI UX Designer) <span className=''>Abdallah Adel</span></h6>
                                    </div>
                                </div>

                                <div className="card bg-transparent border-0" >
                                    <img src={slider3} className="card-img-top w-100" alt="..." />
                                    <div className="w-75">
                                        <p className='text-light px-2 py-2 my-2'>Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                                        <h6 className='text-muted px-2 my-0'>(UI UX Designer) <span className=''>Abdallah Adel</span></h6>
                                    </div>
                                </div>

                                <div className="card bg-transparent border-0" >
                                    <img src={slider2} className="card-img-top w-100" alt="..." />
                                    <div className="w-75">
                                        <p className='text-light px-2 py-2 my-2'>Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                                        <h6 className='text-muted px-2 my-0'>(UI UX Designer) <span className=''>Abdallah Adel</span></h6>
                                    </div>
                                </div>

                            </Slider>

                        </div>
                    </div>
                </div>

                {/* engaged section */}
                <div className={`${style.engaged} py-5 position-relative`}>
                    <i className="fa-solid fa-xmark  position-absolute"></i>
                    <img src={doublecircle} className={style.doublecircle} alt="" />
                    <div className={`${style.content} container text-center`}>
                        <h1 className='py-2'>Who we are engaged with...</h1>
                        <p className='py-2'>We partner with humble, trusting leaders that think strategically. Businessmen and women who believe in the change they’re making, embrace their mission and want to bring in a partner to accelerate their growth.</p>
                    </div>

                    <div className="container w-75 my-5" >
                        <div className="partner">
                            <div class="row gy-5 gx-2 justify-content-center align-items-center">

                                <div class="col-lg-3 col-md-6">
                                    <img src={partner} className='w-100' alt="" />
                                </div>

                                <div class="col-lg-3 col-md-6">
                                    <img src={partner2} className='w-100' alt="" />
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <img src={partner3} className='w-100' alt="" />
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <img src={partner2} className='w-100' alt="" />
                                </div>

                                <div class="col-lg-3 col-md-6">
                                    <img src={partner} className='w-100' alt="" />
                                </div>


                            </div>

                        </div>
                    </div>

                </div>

                {/* footer */}
                <Footer />


            </div>

        </>
    )
}
