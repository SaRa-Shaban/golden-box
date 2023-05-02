import React from 'react'
import style from "./Footer.module.css";
import logo from '../../assets/About/logo.png'

export default function Footer() {
    return (
        <>                
                {/* contact section */}
                <div className={`${style.contact} py-3`}>
                    <div className={`${style.container} py-3`}>
                        <div className="row gy-5 justify-content-center align-items-center gy-3">
                            <div className="col-md-8">
                                <h1 className=''>Contact us for the service you want to use</h1>
                            </div>
                            <div className="col-md-4 d-flex justify-content-center align-items-center">
                                <button className={`${style.btn} btn btn-primary px-4 py-2`}>Contact us</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* footer section */}
                <footer className={`navbar navbar-expand-sm  ${style.footer} py-5`}>
                    <div className="container">
                        <div className="row gy-2 w-100 d-flex justify-content-center align-items-center">

                            <div className='col-md-2 d-flex justify-content-center align-items-center'>
                                <a className="navbar-brand" href="#">
                                    <img src={logo} className='mx-2' alt="Bootstrap" width={30} height={24} />
                                    GoldenBox
                                </a>
                            </div>

                            <div className='col-md-6 '>
                                <div className="container-fluid">
                                    <div className={`${style.support} row gy-2 gx-1 align-items-evenly justify-content-center`}>
                                        <div className="col-md-4 d-flex justify-content-center align-items-center">
                                            <p className='m-0 p-0 '>Support</p>
                                        </div>
                                        <div className="col-md-4 d-flex justify-content-center align-items-center">
                                            <p className='m-0 p-0 '>Privacy Policy</p>
                                        </div>
                                        <div className="col-md-4 d-flex justify-content-center align-items-center">
                                            <p className='m-0 p-0 '>Terms and Conditions</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className='col-md-4  d-flex justify-content-center align-items-center'>
                                <p className='text-center m-0 p-0 '>© 2023 GoldenBox, All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </footer>
        </>
    )
}
