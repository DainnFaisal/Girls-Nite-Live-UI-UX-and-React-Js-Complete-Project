import React from 'react'
import '../stylesheets/MarketPlaceDetail.css'
import image1 from '../assets/back.png'
import image2 from '../assets/Path 1471@2x.png'
import image3 from '../assets/Group_1121_2x-removebg-preview.png';
import image5 from '../assets/pexels-ian-beckley-2440079@2x.png';
import image6 from '../assets/Group 12543@2x.png';
import image7 from '../assets/pexels-jonathan-meyer-752484@2x.png';
import image8 from '../assets/pexels-monstera-5874597@2x.png';


function MarketPlaceDetail() {
  return (
    <>
      <div className='market-detailed-page'>
        <br />
        <br />
        <br />
        <div className='container'>
          <img className="background-img" src={image1} alt='background-img' width="100%" />
          <h1 className='lifestyle'>MEET MK DESPE CONSULTING</h1>
        </div>


        <br />
        <div class="d-flex flex-row mb-3 intro-detailed-page">
          <div class="rightside"><img className="bellowarrow-img" src={image2} alt='background-img' width="100%" /></div>
          <div class="leftside"><p className='detailed-page-para'>MK Despe Consulting specializes in recruitment consulting and career coaching for professionals of all levels. We offer virtual one-on- one coaching, workshops, and classes that include online course materials. Whether you need help with your resume, the interview process, building your personal brand, or how to process your job search, we can help you stand out in your industry!</p></div>
        </div>
        <button className='shop-btn'>Shop MK Despe Consulting</button>
        <br />
        <br />
        <br />
      </div>

      <div className='other-events'>
        <br />
        <br />
        <h2 className='other-events-title'><b>Other events you may like</b></h2>
        <br />
        <br />

        <div className="container text-center">
          <div className="row">

            <div className="col padding">
              <div className="card mx-auto" style={{ width: '18rem' }}>

                <img src={image5} className="card-img-top" alt="event1" />

                <div className="Scheduled-date"><p>10
                  <br />Sep</p></div>

                <div className='heart-icon'>
                  <img src={image6} alt='favourites-icon' width='100%' />
                </div>

                <div className="card-body">
                  <h5 className="card-title">ROCK</h5>
                  <p className="card-text"><b>The Pretty Reckless</b></p>


                  <div className="timer">
                    <img className='timer-img' src={image3} alt='timer-img' width="22%" />
                    <p className='timer-text'>08:00 PM - 10:00 PM</p>
                  </div>
                  <br />
                  <br />
                  <button className="Read-more-btn"><b>GET TICKETS</b></button>
                </div>

              </div>
            </div>

            <div className="col padding">
              <div className="card mx-auto" style={{ width: '18rem' }}>

                <img src={image7} className="card-img-top" alt="event2" />

                <div className="Scheduled-date"><p>10
                  <br />Sep</p></div>

                <div className='heart-icon'>
                  <img src={image6} alt='favourites-icon' width='100%' />
                </div>

                <div className="card-body">
                  <h5 className="card-title">ROCK</h5>
                  <p className="card-text"><b>The Pretty Reckless</b></p>


                  <div className="timer">
                    <img className='timer-img' src={image3} alt='timer-img' width="22%" />
                    <p className='timer-text'>08:00 PM - 10:00 PM</p>
                  </div>
                  <br />
                  <br />
                  <button className="Read-more-btn"><b>GET TICKETS</b></button>
                </div>

              </div>
            </div>

            <div className="col padding">
              <div className="card mx-auto" style={{ width: '18rem' }}>

                <img src={image8} className="card-img-top" alt="event3" />

                <div className="Scheduled-date"><p>10
                  <br />Sep</p></div>

                <div className='heart-icon'>
                  <img src={image6} alt='favourites-icon' width='100%' />
                </div>

                <div className="card-body">
                  <h5 className="card-title">ROCK</h5>
                  <p className="card-text"><b>The Pretty Reckless</b></p>


                  <div className="timer">
                    <img className='timer-img' src={image3} alt='timer-img' width="22%" />
                    <p className='timer-text'>08:00 PM - 10:00 PM</p>
                  </div>
                  <br />
                  <br />
                  <button className="Read-more-btn"><b>GET TICKETS</b></button>
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

export default MarketPlaceDetail
