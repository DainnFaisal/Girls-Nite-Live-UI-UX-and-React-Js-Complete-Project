import React  from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/EventsCalenderView.css';
import image1 from '../assets/pexels-andre-moura-4021521@2x.png';


function EventsCalenderView () {

  return (
    <>
      <div className='Calender-view'>
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

        <div className="container text-center white">
          <div className="row">

            <div className="col pink-div">
              <Link className='setlinks' to="/EventsCalenderView">
                <p className='calender-day'><b>Day1</b></p>
                <p className='calender-time'><b>DEC 20,2022</b></p>
              </Link>
            </div>

            <div className="col" >
              <Link className="setlinks" to="/Day2">
                <p className='calender-day'><b>Day2</b></p>
                <p className='calender-time'><b>DEC 20,2022</b></p>
              </Link>
            </div>

            <div className="col">
              <Link className='setlinks' to="/Day3">
                <p className='calender-day'><b>Day3</b></p>
                <p className='calender-time'><b>DEC 20,2022</b></p>
              </Link>
            </div>

            <div className="col">
              <Link className='setlinks' to="/Day4">
                <p className='calender-day'><b>Day4</b></p>
                <p className='calender-time'><b>DEC 20,2022</b></p>
              </Link>
            </div>

          </div>
        </div>

        <br />
        <br />
        <div className="text-center calender-view-section">
          <div className="row">

            <div className="col-md-6 col-sm-12 py-1">
              <img className='Calender-view-imgs' src={image1} alt='event' width='100%' />
            </div>

            <div className="col-md-6 col-sm-12 py-1">
              <br/>
              <h2 className='calender-view-heading'><b>3D aesthestics with shapes</b></h2>
              <p className='calender-view-date'><b>Oct 29, 2021</b></p>
              <p className='calender-view-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <br />

              <div className="d-flex flex-row mb-3">
                <div className="p-2"><p className='pricing-para'><b>Price: <br/>
                 2.80$</b></p></div>

                <div className="p-2">
                  <i className="fa-regular fa-calendar-days calender"><b> Oct 29, 2021</b></i><br />
                  <br /><i className="fa-solid fa-clock times"> 08:00 PM - 10:00 PM</i></div>
              </div>
              <br/>
              <button className='register'>Register Now</button>
              <br/>
            </div>

          </div>
          <br/>
        </div>
<br/>
<br/>
      </div>

      
    </>
  )
}

export default EventsCalenderView
