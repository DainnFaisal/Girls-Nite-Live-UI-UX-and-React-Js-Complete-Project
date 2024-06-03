import React, { useState } from 'react'
import '../stylesheets/FAQ.css'
import image1 from '../assets/Group 12551@2x.png'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {Link} from 'react-router-dom'

const FAQ = () => {
    const [isSecondRowVisible, setSecondRowVisible] = useState(false);

    const handleAddIconClick = () => {
        setSecondRowVisible(!isSecondRowVisible);
    };

    // Function to handle click on RemoveIcon
    const handleRemoveIconClick = () => {
        setSecondRowVisible(false);
    };

    return (
        <>
            <div className='FAQS-section'>
                <div className='FAQS-img'>
                    <img className="background-img" src={image1} alt='background-img' width="100%" />
                    <h1 className='background-title'>How to join our virtual workshops</h1>
                </div>
                <br />
                <br />
                <div className='container text-center'>
                    <h1 className='FAQS-main-heading'><b>Girls Nite Live Mission</b></h1>
                    <br />
                    <p className='FAQS-para'><b>Girls Nite Live</b> was founded in 2020 with the initial mission to support women whose income was compromised due to the pandemic. Today, Girls Nite Live continues to empower the voices and talents of women worldwide, hosting over <b>600 fun and interactive workshops.</b>GNL is the perfect place to unwind and have fun! Learn new skills, try original recipes, interact with professionals, while meeting amazing women from around the world.We are happy to announce that we are now doing in-person <b>pop up events</b> and continuing our <b>virtual live interactive workshops.</b></p>
                </div>
                <br />
                <br />


                <div className="container">
                    {/* First FAQ */}
                    <div className="row first-row">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="p-2">
                                <p className='FAQS-key-point'>How do I join a class from my iPhone?</p>
                            </div>
                            <div className="p-3 pink-clr" onClick={handleAddIconClick}>
                                <AddIcon />
                            </div>
                        </div>
                    </div>

                    {/* Second FAQ with conditional rendering based on state */}
                    {isSecondRowVisible && (
                        <div className="row second-row">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="p-2">
                                    <p className='FAQS-key-text'>If you are using an iPhone to connect, download the Zoom App (click to download) from the Apple App Store – the app is free.
                                        Then you can join by entering the meeting ID you received during registration, or by clicking the join link in the email confirmation.</p>
                                </div>
                                <div className="p-3 pink-clr" onClick={handleRemoveIconClick}>
                                    <RemoveIcon />
                                </div>
                            </div>
                        </div>
                    )}


                    {/* First FAQ */}
                    <div className="row first-row">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="p-2">
                                <p className='FAQS-key-point'>How do I join a class from my Android?</p>
                            </div>
                            <div className="p-3 pink-clr" onClick={handleAddIconClick}>
                                <AddIcon />
                            </div>
                        </div>
                    </div>

                    {/* Second FAQ with conditional rendering based on state */}
                    {isSecondRowVisible && (
                        <div className="row second-row">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="p-2">
                                    <p className='FAQS-key-text'>If you are using an Android to connect, download the Zoom App (click to download) from the Google Play Store – the app is free.
                                        Then you can join by entering the meeting ID you received during registration, or by clicking the join link in the email confirmation. </p>
                                </div>
                                <div className="p-3 pink-clr" onClick={handleRemoveIconClick}>
                                    <RemoveIcon />
                                </div>
                            </div>
                        </div>
                    )}



                    {/* First FAQ */}
                    <div className="row first-row">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="p-2">
                                <p className='FAQS-key-point'>How do I join a class from my computer?</p>
                            </div>
                            <div className="p-3 pink-clr" onClick={handleAddIconClick}>
                                <AddIcon />
                            </div>
                        </div>
                    </div>

                    {/* Second FAQ with conditional rendering based on state */}
                    {isSecondRowVisible && (
                        <div className="row second-row">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="p-2">
                                    <p className='FAQS-key-text'>If you are using a computer (Mac or PC) to connect, download the Zoom Desktop Client (click to download), the desktop client is free.
                                        Then you can join by entering the meeting ID you received during registration, or by clicking the join link in the email confirmation.</p>
                                </div>
                                <div className="p-3 pink-clr" onClick={handleRemoveIconClick}>
                                    <RemoveIcon />
                                </div>
                            </div>
                        </div>
                    )}

                </div>
                <br />
                <br />
                <br />
                <div className='contact-container text-center bg-pink'>
                    <br />
                    <br />
                    <p>We love to hear your questions or comments. Please feel free to reach out to us!</p>
                    <Link className='setlinks' to="/Contact"><button className='FAQS-btn'>Contact Us</button></Link>
                    <br />
                    <br />
                </div>
                <br />
                <br />
                <br />
            </div>
        </>
    )
}

export default FAQ
