import React from 'react'
import '../stylesheets/dainWorkwithGNL.css';
import image1 from '../assets/Group 12547@2x.png'
import image2 from '../assets/Group 12548@2x.png'
import image3 from '../assets/Group 12550@2x.png'
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';


function dainWorkwithGNL() {
  return (

    <>
    <div className='work-with-gnl'>
      <div className="gnl-section text-center">
        <div className="row">
          <div className="col-md-4 col-sm-12 py-0">
            <img className="lady1-img" src={image2} alt='lady1' width="100%" />
          </div>

          <div className="col-md-4 col-sm-12 py-0">
            <h1 className='work-heading'>Work with <br />GNL </h1>
            <h4 className='expetise-heading'>WANT TO SHOWCASE YOUR EXPERTISE?</h4>
            <p className='work-para'>Apply to lead a workshop with Girls Nite Live.Workshops can be educational, creative or industrial</p>
            <button className='lead-btn'>Lead a workhop</button>
          </div>

          <div className="col-md-4 col-sm-12 py-1">
            <img className="lady2-img" src={image1} alt='lady2' width="100%" />
          </div>
        </div>
      </div>

      <br />
      <br />
      <div className="container text-center">
        <div className="row">
          <h4 className='voice-heading'>YOUR VOICE ACROSS MANY CHANNELS</h4>
        </div>

        <div className="row">
          <div>
            <br />
            <a className="social-links" href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
              <PinterestIcon className='link-icon' /></a>

            <a className="social-links" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIcon className='link-icon' /></a>

            <a className="social-links" href="https://pk.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className='link-icon' /></a>

            <a className="social-links" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <YouTubeIcon className='link-icon' /></a>
          </div>
        </div>

      </div>

      <br />
      <br />
      <br/>

      <div className="container text-center">
      <h1 className='become-sponser'>BECOME A SPONSER</h1>
      <p className='work-para'>For the fastest growing community of women, align your company with us.</p>
      <p>We know what women want.We have the audience to get the world out about your products or services. For more informtion about being a GNL sponser, product placement. please contact: < p className="aqua">hello@girlsnitelive.com</p> </p>
      <button className='lead-btn'>Contact GNL</button>
      <img src={image3} alt='sponser-img' width="100%"/>
      </div>
      </div>
    </>
  )
}

export default dainWorkwithGNL
