import React from 'react'
import { Link } from 'react-router-dom';
import '../stylesheets/EventsListView.css';
import image2 from '../assets/nn.png';
import image3 from '../assets/pexels-ian-beckley-2440079@2x.png';
import image4 from '../assets/pexels-jonathan-meyer-752484@2x.png';
import image5 from '../assets/pexels-monstera-5874597@2x.png';
import image6 from '../assets/pexels-mo-eid-8657160@2x.png';
import image7 from '../assets/qq.png';
import image8 from '../assets/ss.png';
import image9 from '../assets/mm.png';



function EventsListView() {
  return (
    <>
      <div className='List-view'>
        <br />
        <br />
        <h2 className='events'>
          <b>GNL Events</b>
        </h2>
        <br/>

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

        <div className="text-center list-view-section">
          <div className="row">

            <div className="col-md-6 col-sm-12 py-1">
              <div className='eve-date'>10 <br /> Sep</div>
              <i className="fa-solid fa-clock times setting"> 08:00 PM - 10:00 PM</i>
              <br /><h5 className='headings'>ROCK</h5>
              <p className='mini-para'><b>The Pretty Reckless</b></p>
              <p className='detailed-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <button className="tickets-btn">GET TICKETS</button>
            </div>

            <div className="col-md-6 col-sm-12 py-1">
              <img className='img-handler' src={image3} alt='statue' width='100%' />
            </div>

          </div>
        </div>


        <br/>
        <br/>
        <div className="text-center list-view-section">
          <div className="row">

            <div className="col-md-6 col-sm-12 py-1">
              <div className='eve-date'>10 <br /> Sep</div>
              <i className="fa-solid fa-clock times setting"> 08:00 PM - 10:00 PM</i>
              <br /><h5 className='headings'>ROCK</h5>
              <p className='mini-para'><b>The Pretty Reckless</b></p>
              <p className='detailed-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <button className="tickets-btn">GET TICKETS</button>
            </div>

            <div className="col-md-6 col-sm-12 py-1">
              <img className='img-handler' src={image4} alt='statue' width='100%' />
            </div>

          </div>
        </div>


        <br/>
        <br/>
        <div className="text-center list-view-section">
          <div className="row">

            <div className="col-md-6 col-sm-12 py-1">
              <div className='eve-date'>10 <br /> Sep</div>
              <i className="fa-solid fa-clock times setting"> 08:00 PM - 10:00 PM</i>
              <br /><h5 className='headings'>ROCK</h5>
              <p className='mini-para'><b>The Pretty Reckless</b></p>
              <p className='detailed-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <button className="tickets-btn">GET TICKETS</button>
            </div>

            <div className="col-md-6 col-sm-12 py-1">
              <img className='img-handler' src={image5} alt='statue' width='100%' />
            </div>

          </div>
        </div>


        <br/>
        <br/>
        <div className="text-center list-view-section">
          <div className="row">

            <div className="col-md-6 col-sm-12 py-1">
              <div className='eve-date'>10 <br /> Sep</div>
              <i className="fa-solid fa-clock times setting"> 08:00 PM - 10:00 PM</i>
              <br /><h5 className='headings'>ROCK</h5>
              <p className='mini-para'><b>The Pretty Reckless</b></p>
              <p className='detailed-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <button className="tickets-btn">GET TICKETS</button>
            </div>

            <div className="col-md-6 col-sm-12 py-1">
              <img className='img-handler' src={image6} alt='statue' width='100%' />
            </div>

          </div>
        </div>

 
        <br/>
        <br/>
        <div className="text-center list-view-section">
          <div className="row">

            <div className="col-md-6 col-sm-12 py-1">
              <div className='eve-date'>10 <br /> Sep</div>
              <i className="fa-solid fa-clock times setting"> 08:00 PM - 10:00 PM</i>
              <br /><h5 className='headings'>ROCK</h5>
              <p className='mini-para'><b>The Pretty Reckless</b></p>
              <p className='detailed-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <button className="tickets-btn">GET TICKETS</button>
            </div>

            <div className="col-md-6 col-sm-12 py-1">
              <img className='img-handler' src={image7} alt='statue' width='100%' />
            </div>

          </div>
        </div>


        <br/>
        <br/>
        <div className="text-center list-view-section">
          <div className="row">

            <div className="col-md-6 col-sm-12 py-1">
              <div className='eve-date'>10 <br /> Sep</div>
              <i className="fa-solid fa-clock times setting"> 08:00 PM - 10:00 PM</i>
              <br /><h5 className='headings'>ROCK</h5>
              <p className='mini-para'><b>The Pretty Reckless</b></p>
              <p className='detailed-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <button className="tickets-btn">GET TICKETS</button>
            </div>

            <div className="col-md-6 col-sm-12 py-1">
              <img className='img-handler' src={image8} alt='statue' width='100%' />
            </div>

          </div>
        </div>


        <br/>
        <br/>
        <div className="text-center list-view-section">
          <div className="row">

            <div className="col-md-6 col-sm-12 py-1">
              <div className='eve-date'>10 <br /> Sep</div>
              <i className="fa-solid fa-clock times setting"> 08:00 PM - 10:00 PM</i>
              <br /><h5 className='headings'>ROCK</h5>
              <p className='mini-para'><b>The Pretty Reckless</b></p>
              <p className='detailed-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <button className="tickets-btn">GET TICKETS</button>
            </div>

            <div className="col-md-6 col-sm-12 py-1">
              <img className='img-handler' src={image2} alt='statue' width='100%' />
            </div>

          </div>
        </div>


        <br/>
        <br/>
        <div className="text-center list-view-section">
          <div className="row">

            <div className="col-md-6 col-sm-12 py-1">
              <div className='eve-date'>10 <br /> Sep</div>
              <i className="fa-solid fa-clock times setting"> 08:00 PM - 10:00 PM</i>
              <br /><h5 className='headings'>ROCK</h5>
              <p className='mini-para'><b>The Pretty Reckless</b></p>
              <p className='detailed-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <button className="tickets-btn">GET TICKETS</button>
            </div>

            <div className="col-md-6 col-sm-12 py-1">
              <img className='img-handler' src={image9} alt='statue' width='100%' />
            </div>

          </div>
        </div>
        <br/>
        <br/>
      </div>

    </>
  )
}

export default EventsListView
