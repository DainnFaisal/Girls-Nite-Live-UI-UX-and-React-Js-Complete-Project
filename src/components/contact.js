import React from 'react'
import '../stylesheets/contact.css'

function contact() {
    return (
        <>
            <div className='contact-section'>
                <br />
                <br />
                <br />
                <h1 className='contact-heding text-center'>Get in Touch</h1>
                <br />
                <br />
                <br />
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h4 className='labels'>First Name</h4>
                            <input type='text' className='input-fields'></input>

                        </div>
                        <div class="col">
                            <h4 className='labels'> Last Name</h4>
                            <input type='text' className='input-fields'></input>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <h4 className='labels'> Email</h4>
                            <input type='text' className='input-fields'></input>
                        </div>
                        <div class="col">
                            <h4 className='labels'> Phone Number</h4>
                            <input type='text' className='input-fields'></input>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <h4 className='labels'> Company</h4>
                            <input type='text' className='input-fields'></input>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <h4 className='labels'>Brief Description of Events</h4>
                            <input type='text' className='input-fields-2'></input>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <button className='contact-button'>Submit</button>
                    <br/>
                </div>
            </div>
        </>
    )
}

export default contact
