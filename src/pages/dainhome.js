import React from 'react'
import image1 from '../assets/Group 11961@2x.png';
import image2 from '../assets/Mask Group 19@2x.png';
import image3 from '../assets/Rectangle 417@2x.png';
import image4 from '../assets/Mask Group 20@2x1.png';

import image6 from '../assets/beninza.png';
import image7 from '../assets/mauitime.png';
import image8 from '../assets/A.png';
import image9 from '../assets/Healthcare.png';
import image10 from '../assets/lucire.png';
import image11 from '../assets/blog1.png';
import image12 from '../assets/blog2.png';
import image13 from '../assets/Blog3.png';
import image14 from '../assets/blog4.png';
import image15 from '../assets/TM1.jpg'
import image16 from '../assets/TM2.jpg'
import image17 from '../assets/TM3.jpg'
import image18 from '../assets/TM4.jpg'
import image19 from '../assets/TM5.jpg'
import image20 from '../assets/TM6.jpg'
import image21 from '../assets/TM7.jpg'
import image22 from '../assets/TM8.jpg'
import image23 from '../assets/TM9.jpg'


import { Link } from 'react-router-dom';
import '../stylesheets/home.css';

function dainhome() {
    return (
        <>
            <div className='max-width bg-grey'>
                <div className="row">
                    <div className='col-md-6 col-sm-12 py-3'>
                        <h1 className='setheading'><b>Online Workshop & <br />
                            In-Person Pop-ups!</b></h1>
                        <br />

                        <p className='setpara'>Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard
                            dummy text ever since the 1500s</p>

                        <br />
                        <Link className='setlinks' to="/dainEvents">
                            <button className='setbutton'>Upcoming Events</button></Link>
                    </div>

                    <div className='col-md-6 col-sm-12 py-3'>
                        <img className='setimg' src={image1} alt='online shop' />
                    </div>
                </div>
            </div>

            <div className='bg-pink-gradient'>
                <div className="row">
                    <div className='col-md-6 col-sm-12 py-1'>
                        <div className='setdiv1'>
                            <img src={image2} alt='arrow' width="90%" />
                        </div>

                        <h4 className='heading-pink'><b>On-Demand Videos</b></h4>
                        <h1 className='heading-black'><b>Beauty brand, e-commerce</b></h1>
                        <h4 className='heading-pink'><b>Branding,Website,Design,Development</b></h4>
                        <br />
                        <Link className='setlinks' to="/dainVideos">
                            <button className='view-more-btn'>View More</button></Link>
                    </div>

                    <div className='col-md-6 col-sm-12 py-1'>
                        <div className='setdiv2 mx-auto'>
                            <br />
                            <br />
                            <br />
                            <img src={image3} alt='happyhumans' width="100%" />
                            <br />
                            <br />
                            <br />
                        </div>

                        <div className='setdiv3'>
                            <img src={image4} alt='downarrow' width="100%" />
                        </div>
                    </div>
                </div>
            </div>



            <div className='subscribe-section text-center' style={{ backgroundImage: `url(${require('../assets/cloud.jpg')})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <br />
                <h1 className='subscription-heading'>LET'S KEEP IN TOUCH</h1>
                <p className='subscription-para'>SUBSCRIBE TO OUR EMAIL NEWSLETTER <br />TO KEEP YOURSELF UPDATED</p>
                <input className='subscription-email text-center' type='email' placeholder='Enter your email'></input>
                <br />
                <br />
                <button className='subscription-button'>Subscribe</button>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>


            <br />
            <br />
            <h2 className='blogs-title'><b>GNL BLOGs</b></h2>
            <br />
            <br />
            <div className="container text-center">
                <div className="row">
                    <div className="col padding">
                        <div className="card mx-auto" style={{
                            width: '15rem', border: '1px solid',
                            borderColor: '#DD0B80'
                        }}>
                            <img src={image11} className="card-imgs" alt="BLOG 1" />
                            <div className="card-body">
                                <h5 className="Article-title"><b>Title of Article</b></h5>
                                <p className="Article-text">30th September 2020.
                                    <br />Author name
                                    <br />Lorem ipsum dolor est lorem ipsum dolor est</p>
                                <Link className='setlinks' to="/dainBlog"><button className='Read-btn'>Read</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col padding">
                        <div className="card mx-auto" style={{
                            width: '15rem', border: '1px solid',
                            borderColor: 'rgb(199, 113, 199)'
                        }}>
                            <img src={image12} className="card-imgs" alt="BLOG 2" />
                            <div className="card-body">
                                <h5 className="Article-title"><b>Title of Article</b></h5>
                                <p className="Article-text">30th September 2020.
                                    <br />Author name
                                    <br />Lorem ipsum dolor est lorem ipsum dolor est</p>
                                <Link className='setlinks' to="/dainBlog"><button className='Read-btn'>Read</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col padding">
                        <div className="card mx-auto" style={{
                            width: '15rem', border: '1px solid',
                            borderColor: 'rgb(236, 121, 13)'
                        }}>
                            <img src={image13} className="card-imgs" alt="BLOG 3" />
                            <div className="card-body">
                                <h5 className="Article-title"><b>Title of Article</b></h5>
                                <p className="Article-text">30th September 2020.
                                    <br />Author name
                                    <br />Lorem ipsum dolor est lorem ipsum dolor est</p>
                                <Link className='setlinks' to="/dainBlog"> <button className='Read-btn'>Read</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col padding">
                        <div className="card mx-auto" style={{
                            width: '15rem', border: '1px solid',
                            borderColor: 'yellow'
                        }}>
                            <img src={image14} className="card-imgs" alt="BLOG 4" />
                            <div className="card-body">
                                <h5 className="Article-title"><b>Title of Article</b></h5>
                                <p className="Article-text">30th September 2020.
                                    <br />Author name
                                    <br />Lorem ipsum dolor est lorem ipsum dolor est</p>
                                <Link className='setlinks' to="/dainBlog"><button className='Read-btn'>Read</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>


            <div className='Brands'>

                <div className='row brands-section'>
                    <h2 className='as-seen-in'><b>As Seen In</b></h2>

                    <div className='brand-logos col-md-3 col-sm-12 py-3'>
                        <img src={image6} alt='beninza' width="100%" />
                    </div>
                    <div className='brand-logos col-md-3 col-sm-12 py-3'>
                        <img src={image7} alt='mauitime' width="100%" />
                    </div>
                    <div className='brand-logos col-md-2 col-sm-12 py-3'>
                        <img src={image8} alt='A' width="100%" />
                    </div>
                    <div className='brand-logos col-md-2 col-sm-12 py-3'>
                        <img src={image9} alt='healthcare' width="100%" />
                    </div>
                    <div className='brand-logos col-md-2 col-sm-12 py-3'>
                        <img src={image10} alt='lucirerouge' width="100%" />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>

                </div>
            </div>

            <br />
            <br />
            <br />

            <h2 className='testimonials-headiing'><b>What our women's are saying about GNL</b></h2>

            <br />
            <br />
            <br />
            <div id="carouselMultiItemExample" className="carousel slide carousel-dark text-center" data-mdb-ride="carousel" data-bs-interval="3000" data-bs-wrap="true" data-bs-pause="false">

                <div className="d-flex justify-content-center mb-4">
                    <button className="carousel-control-prev position-relative" type="button"
                        data-mdb-target="#carouselMultiItemExample" data-mdb-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next position-relative" type="button"
                        data-mdb-target="#carouselMultiItemExample" data-mdb-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


                <div className="carousel-inner py-4">

                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <img className="rounded-circle shadow-1-strong mb-4"
                                        src={image15} alt="avatar"
                                        style={{ width: '150px' }} />
                                    <h5 className="mb-3">Sarah Mushtaq</h5>
                                    <p className="text-muted">
                                        <i className="fas fa-quote-left pe-2"></i>
                                        Exceptional service and top-notch quality! A five-star experience all the way.
                                    </p>
                                    <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star"></i></li>
                                        <li><i className="fas fa-star "></i></li>
                                        <li><i className="fas fa-star "></i></li>
                                        <li><i className="fas fa-star "></i></li>
                                    </ul>
                                </div>

                                <div className="col-lg-4 d-none d-lg-block">
                                    <img className="rounded-circle shadow-1-strong mb-4"
                                        src={image16} alt="avatar"
                                        style={{ width: '150px' }} />
                                    <h5 className="mb-3">Nasir Ahmed</h5>
                                    <p className="text-muted">
                                        <i className="fas fa-quote-left pe-2"></i>
                                        I'm really satisfied with their tourism and vehicle packages. I will book my tour plans again in near future
                                    </p>
                                    <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li>
                                            <i className="fas fa-star-half-alt fa-sm"></i>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-4 d-none d-lg-block">
                                    <img className="rounded-circle shadow-1-strong mb-4"
                                        src={image17} alt="avatar"
                                        style={{ width: '150px' }} />
                                    <h5 className="mb-3">Raza Ali</h5>
                                    <p className="text-muted">
                                        <i className="fas fa-quote-left pe-2"></i>
                                        Impressed with the professionalism and reliability. Highly recommend
                                    </p>
                                    <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="far fa-star fa-sm"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <img className="rounded-circle shadow-1-strong mb-4"
                                        src={image18} alt="avatar"
                                        style={{ width: '150px' }} />
                                    <h5 className="mb-3">Kamran Raza</h5>
                                    <p className="text-muted">
                                        <i className="fas fa-quote-left pe-2"></i>
                                        Outstanding attention to detail and superb customer satisfaction.
                                    </p>
                                    <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                    </ul>
                                </div>

                                <div className="col-lg-4 d-none d-lg-block">
                                    <img className="rounded-circle shadow-1-strong mb-4"
                                        src={image19} alt="avatar"
                                        style={{ width: '150px' }} />
                                    <h5 className="mb-3">Aqsa Ilyaas</h5>
                                    <p className="text-muted">
                                        <i className="fas fa-quote-left pe-2"></i>
                                        Efficient, friendly staff. Made my experience hassle-free and enjoyable
                                    </p>
                                    <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li>
                                            <i className="fas fa-star-half-alt fa-sm"></i>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-4 d-none d-lg-block">
                                    <img className="rounded-circle shadow-1-strong mb-4"
                                        src={image20} alt="avatar"
                                        style={{ width: '150px' }} />
                                    <h5 className="mb-3">Maria Hussain</h5>
                                    <p className="text-muted">
                                        <i className="fas fa-quote-left pe-2"></i>
                                        Reliable and prompt service. Exceeded my expectations
                                    </p>
                                    <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="far fa-star fa-sm"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <img className="rounded-circle shadow-1-strong mb-4"
                                        src={image21} alt="avatar"
                                        style={{ width: '150px' }} />
                                    <h5 className="mb-3">Sana Rasheed</h5>
                                    <p className="text-muted">
                                        <i className="fas fa-quote-left pe-2"></i>
                                        Exceptionally skilled team, delivering excellence every time.
                                    </p>
                                    <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                    </ul>
                                </div>

                                <div className="col-lg-4 d-none d-lg-block">
                                    <img className="rounded-circle shadow-1-strong mb-4"
                                        src={image22} alt="avatar"
                                        style={{ width: '150px' }} />
                                    <h5 className="mb-3">Uzair Altaf</h5>
                                    <p className="text-muted">
                                        <i className="fas fa-quote-left pe-2"></i>
                                        emarkable service that goes above and beyond. Truly satisfied customer!
                                    </p>
                                    <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li>
                                            <i className="fas fa-star-half-alt fa-sm"></i>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-4 d-none d-lg-block">
                                    <img className="rounded-circle shadow-1-strong mb-4"
                                        src={image23} alt="avatar"
                                        style={{ width: '150px' }} />
                                    <h5 className="mb-3">Qasimm Anwar</h5>
                                    <p className="text-muted">
                                        <i className="fas fa-quote-left pe-2"></i>
                                        Fantastic experience! Seamless process, and the results speak for themselves. Highly satisfied!
                                    </p>
                                    <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="fas fa-star fa-sm"></i></li>
                                        <li><i className="far fa-star fa-sm"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>

        </>
    )
}

export default dainhome
