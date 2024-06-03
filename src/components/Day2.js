import React from 'react'
import { Link } from 'react-router-dom';

function Day2() {
  return (
    <>
      <div className='Calender-view'>
        <br />
        <br />
        <h2 className='events'>
          <b>GNL Events</b>
        </h2>

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

            <div className="col">
              <Link className='setlinks' to="/EventsCalenderView">
                <p className='calender-day'><b>Day1</b></p>
                <p className='calender-time'><b>DEC 20,2022</b></p>
              </Link>
            </div>

            <div className="col pink-div">
              <Link className='setlinks' to="/Day2">
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
        <p className='Multi-days'>DAY 2 of Event</p>
        <br />
      </div>
    </>
  )
}

export default Day2
