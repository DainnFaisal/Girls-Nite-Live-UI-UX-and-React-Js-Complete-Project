import React from 'react'
import '../stylesheets/dainEvents.css';
import image2 from '../assets/Group_1121_2x-removebg-preview.png';
import image5 from '../assets/pexels-ian-beckley-2440079@2x.png';
import image6 from '../assets/Group 12543@2x.png';
import image7 from '../assets/pexels-jonathan-meyer-752484@2x.png';
import image8 from '../assets/pexels-monstera-5874597@2x.png';
import image9 from '../assets/pexels-mo-eid-8657160@2x.png';
import image10 from '../assets/qq.png';
import image11 from '../assets/ss.png';
import image12 from '../assets/nn.png';
import image13 from '../assets/mm.png';
import { Link } from 'react-router-dom';

function dainEvents() {
  return (
    <>
      <div className='events-section'>

        <br />
        <br />
        <h2 className='events'>
          <b>GNL Events</b>
        </h2>
        <br />
        <div className='views'>

          <Link className='setlinks' to="/dainEvents">
            <i className="fa-solid fa-table-cells"></i>
          </Link>

          <Link className='setlinks' to="/EventsListView">
            <i className="fa-solid fa-list"></i>
          </Link>

          <Link className='setlinks' to="/EventsCalenderView">
            <i className="fa-solid fa-calendar-days"></i>
          </Link>

        </div>
        <br />
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
                    <img className='timer-img' src={image2} alt='timer-img' width="22%" />
                    <p className='timer-text'>08:00 PM - 10:00 PM</p>
                  </div>
                  <br />
                  <br />
                  <Link to='/AboutThisEvent'>
                    <button className="about-this-event-btn"><b>ABOUT THIS EVENT</b></button></Link>
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
                    <img className='timer-img' src={image2} alt='timer-img' width="22%" />
                    <p className='timer-text'>08:00 PM - 10:00 PM</p>
                  </div>
                  <br />
                  <br />
                  <Link to='/AboutThisEvent'>
                    <button className="about-this-event-btn"><b>ABOUT THIS EVENT</b></button></Link>
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
                    <img className='timer-img' src={image2} alt='timer-img' width="22%" />
                    <p className='timer-text'>08:00 PM - 10:00 PM</p>
                  </div>
                  <br />
                  <br />
                  <Link to='/AboutThisEvent'>
                    <button className="about-this-event-btn"><b>ABOUT THIS EVENT</b></button></Link>
                  <br />
                  <br />
                  <button className="Read-more-btn"><b>GET TICKETS</b></button>
                </div>

              </div>
            </div>

            <div className="col padding">
              <div className="card mx-auto" style={{ width: '18rem' }}>

                <img src={image9} className="card-img-top" alt="event4" />

                <div className="Scheduled-date"><p>10
                  <br />Sep</p></div>

                <div className='heart-icon'>
                  <img src={image6} alt='favourites-icon' width='100%' />
                </div>

                <div className="card-body">
                  <h5 className="card-title">ROCK</h5>
                  <p className="card-text"><b>The Pretty Reckless</b></p>


                  <div className="timer">
                    <img className='timer-img' src={image2} alt='timer-img' width="22%" />
                    <p className='timer-text'>08:00 PM - 10:00 PM</p>
                  </div>
                  <br />
                  <br />
                  <Link to='/AboutThisEvent'>
                    <button className="about-this-event-btn"><b>ABOUT THIS EVENT</b></button></Link>
                  <br />
                  <br />
                  <button className="Read-more-btn"><b>GET TICKETS</b></button>
                </div>

              </div>
            </div>

            <div className="col padding">
              <div className="card mx-auto" style={{ width: '18rem' }}>

                <img src={image10} className="card-img-top" alt="event5" />

                <div className="Scheduled-date"><p>10
                  <br />Sep</p></div>

                <div className='heart-icon'>
                  <img src={image6} alt='favourites-icon' width='100%' />
                </div>

                <div className="card-body">
                  <h5 className="card-title">ROCK</h5>
                  <p className="card-text"><b>The Pretty Reckless</b></p>


                  <div className="timer">
                    <img className='timer-img' src={image2} alt='timer-img' width="22%" />
                    <p className='timer-text'>08:00 PM - 10:00 PM</p>
                  </div>
                  <br />
                  <br />
                  <Link to='/AboutThisEvent'>
                    <button className="about-this-event-btn"><b>ABOUT THIS EVENT</b></button></Link>
                  <br />
                  <br />
                  <button className="Read-more-btn"><b>GET TICKETS</b></button>
                </div>

              </div>
            </div>

            <div className="col padding">
              <div className="card mx-auto" style={{ width: '18rem' }}>

                <img src={image11} className="card-img-top" alt="event6" />

                <div className="Scheduled-date"><p>10
                  <br />Sep</p></div>

                <div className='heart-icon'>
                  <img src={image6} alt='favourites-icon' width='100%' />
                </div>

                <div className="card-body">
                  <h5 className="card-title">ROCK</h5>
                  <p className="card-text"><b>The Pretty Reckless</b></p>


                  <div className="timer">
                    <img className='timer-img' src={image2} alt='timer-img' width="22%" />
                    <p className='timer-text'>08:00 PM - 10:00 PM</p>
                  </div>
                  <br />
                  <br />
                  <Link to='/AboutThisEvent'>
                    <button className="about-this-event-btn"><b>ABOUT THIS EVENT</b></button></Link>
                  <br />
                  <br />
                  <button className="Read-more-btn"><b>GET TICKETS</b></button>
                </div>

              </div>
            </div>


            <div className="col padding">
              <div className="card mx-auto" style={{ width: '18rem' }}>

                <img src={image12} className="card-img-top" alt="event7" />

                <div className="Scheduled-date"><p>10
                  <br />Sep</p></div>

                <div className='heart-icon'>
                  <img src={image6} alt='favourites-icon' width='100%' />
                </div>

                <div className="card-body">
                  <h5 className="card-title">ROCK</h5>
                  <p className="card-text"><b>The Pretty Reckless</b></p>


                  <div className="timer">
                    <img className='timer-img' src={image2} alt='timer-img' width="22%" />
                    <p className='timer-text'>08:00 PM - 10:00 PM</p>
                  </div>
                  <br />
                  <br />
                  <Link to='/AboutThisEvent'>
                    <button className="about-this-event-btn"><b>ABOUT THIS EVENT</b></button></Link>
                  <br />
                  <br />
                  <button className="Read-more-btn"><b>GET TICKETS</b></button>
                </div>

              </div>
            </div>


            <div className="col padding">
              <div className="card mx-auto" style={{ width: '18rem' }}>

                <img src={image13} className="card-img-top" alt="event8" />

                <div className="Scheduled-date"><p>10
                  <br />Sep</p></div>

                <div className='heart-icon'>
                  <img src={image6} alt='favourites-icon' width='100%' />
                </div>

                <div className="card-body">
                  <h5 className="card-title">ROCK</h5>
                  <p className="card-text"><b>The Pretty Reckless</b></p>


                  <div className="timer">
                    <img className='timer-img' src={image2} alt='timer-img' width="22%" />
                    <p className='timer-text'>08:00 PM - 10:00 PM</p>
                  </div>
                  <br />
                  <br />
                  <Link to='/AboutThisEvent'>
                    <button className="about-this-event-btn"><b>ABOUT THIS EVENT</b></button></Link>
                  <br />
                  <br />
                  <button className="Read-more-btn"><b>GET TICKETS</b></button>
                </div>

              </div>
            </div>


            <div className="col padding">
              <div className="card mx-auto" style={{ width: '18rem' }}>

                <img src={image7} className="card-img-top" alt="event9" />

                <div className="Scheduled-date"><p>10
                  <br />Sep</p></div>

                <div className='heart-icon'>
                  <img src={image6} alt='favourites-icon' width='100%' />
                </div>

                <div className="card-body">
                  <h5 className="card-title">ROCK</h5>
                  <p className="card-text"><b>The Pretty Reckless</b></p>


                  <div className="timer">
                    <img className='timer-img' src={image2} alt='timer-img' width="22%" />
                    <p className='timer-text'>08:00 PM - 10:00 PM</p>
                  </div>
                  <br />
                  <br />
                  <Link to='/AboutThisEvent'>
                    <button className="about-this-event-btn"><b>ABOUT THIS EVENT</b></button></Link>
                  <br />
                  <br />
                  <button className="Read-more-btn"><b>GET TICKETS</b></button>
                </div>

              </div>
            </div>

          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  )
}

export default dainEvents
