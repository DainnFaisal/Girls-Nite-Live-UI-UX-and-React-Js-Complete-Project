import React from 'react'
import '../stylesheets/dainVideos.css'

import image1 from '../assets/back.png'
import image2 from '../assets/business services.png'
import image3 from '../assets/xxx@2x.png'
import image4 from '../assets/xxxx@2x.png'
import image5 from '../assets/zx@2x.png'
import image6 from '../assets/zxz@2x.png'
import image7 from '../assets/zxzx@2x.png'
import image8 from '../assets/zxzxzx@2x.png'
import image9 from '../assets/onee.png'
import image10 from '../assets/two.png'
import image11 from '../assets/three.png'

import TuneIcon from '@mui/icons-material/Tune';


function dainvideos() {
  return (
    <>
    <div className='videos-page'>
      <br/>
      <br/>
      {/*slider */}
      <div id="carouselExampleAutoplaying" className=" container carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000" data-bs-wrap="true" data-bs-pause="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>


        </div>
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src={image1} className="d-block w-100 carousel-images" alt="blog1" />
            <div className="carousel-caption text-center custom-caption" >
              <h1 className='carousel-heading'>On Demand Videos</h1>
            </div>
          </div>

          <div className="carousel-item">
            <img src={image2} class="d-block w-100 carousel-images" alt="blog2" />
            <div className="carousel-caption text-center custom-caption">
              <h1 className='carousel-heading'>On Demand Videos</h1>
            </div>
          </div>
        </div>


        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <br />
      <div className='filter-box'>
        <button className='filter-btn'>Filter<TuneIcon /></button>
      </div>
      <br/>
      <br/>

      <div class="container">
        <div class="row">

          <div class="col padding">
            <div className="card mx-auto" style={{ width: '18rem' }}>
              <img src={image3} className="card-img-top" alt="card1" />

              <div className="card-body">
                <p className='video-price'>$9.99</p>
                <h5 className="video-title"><b>Vegan Cookies & Cream Cupcakes</b></h5>
                <p className='video-description'>Catarah Coleman and Shoneji Robison, owners of Southern Girl Desserts, will share their </p>
                <button className='video-btn'>Register Now</button>
              </div>
            </div>
          </div>


          <div class="col padding">
            <div className="card mx-auto" style={{ width: '18rem' }}>
              <img src={image4} className="card-img-top" alt="card2" />

              <div className="card-body">
                <p className='video-price'>$9.99</p>
                <h5 className="video-title"><b>How To Write and Publish A Book</b></h5>
                <p className='video-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <button className='video-btn'>Register Now</button>
              </div>
            </div>
          </div>



          <div class="col padding">
            <div className="card mx-auto" style={{ width: '18rem' }}>
              <img src={image5} className="card-img-top" alt="card3" />

              <div className="card-body">
                <p className='video-price'>$9.99</p>
                <h5 className="video-title"><b>How To Write and Publish A Book</b></h5>
                <p className='video-description'>Catarah Coleman and Shoneji Robison, owners of Southern Girl Desserts, will share their </p>
                <button className='video-btn'>Register Now</button>
              </div>
            </div>
          </div>


          <div class="col padding">
            <div className="card mx-auto" style={{ width: '18rem' }}>
              <img src={image6} className="card-img-top" alt="card4" />

              <div className="card-body">
                <p className='video-price'>$9.99</p>
                <h5 className="video-title"><b>How To Write and Publish A Book</b></h5>
                <p className='video-description'>Catarah Coleman and Shoneji Robison, owners of Southern Girl Desserts, will share their </p>
                <button className='video-btn'>Register Now</button>
              </div>
            </div>
          </div>

          <div class="col padding">
            <div className="card mx-auto" style={{ width: '18rem' }}>
              <img src={image7} className="card-img-top" alt="card5" />

              <div className="card-body">
                <p className='video-price'>$9.99</p>
                <h5 className="video-title"><b>How To Write and Publish A Book</b></h5>
                <p className='video-description'>Catarah Coleman and Shoneji Robison, owners of Southern Girl Desserts, will share their </p>
                <button className='video-btn'>Register Now</button>
              </div>
            </div>
          </div>

          <div class="col padding">
            <div className="card mx-auto" style={{ width: '18rem' }}>
              <img src={image8} className="card-img-top" alt="card6" />

              <div className="card-body">
                <p className='video-price'>$9.99</p>
                <h5 className="video-title"><b>How To Write and Publish A Book</b></h5>
                <p className='video-description'>Catarah Coleman and Shoneji Robison, owners of Southern Girl Desserts, will share their </p>
                <button className='video-btn'>Register Now</button>
              </div>
            </div>
          </div>

          <div class="col padding">
            <div className="card mx-auto" style={{ width: '18rem' }}>
              <img src={image9} className="card-img-top" alt="card6" />

              <div className="card-body">
                <p className='video-price'>$9.99</p>
                <h5 className="video-title"><b>How To Write and Publish A Book</b></h5>
                <p className='video-description'>Catarah Coleman and Shoneji Robison, owners of Southern Girl Desserts, will share their </p>
                <button className='video-btn'>Register Now</button>
              </div>
            </div>
          </div>

          <div class="col padding">
            <div className="card mx-auto" style={{ width: '18rem' }}>
              <img src={image10} className="card-img-top" alt="card6" />

              <div className="card-body">
                <p className='video-price'>$9.99</p>
                <h5 className="video-title"><b>How To Write and Publish A Book</b></h5>
                <p className='video-description'>Catarah Coleman and Shoneji Robison, owners of Southern Girl Desserts, will share their </p>
                <button className='video-btn'>Register Now</button>
              </div>
            </div>
          </div>

          <div class="col padding">
            <div className="card mx-auto" style={{ width: '18rem' }}>
              <img src={image11} className="card-img-top" alt="card6" />

              <div className="card-body">
                <p className='video-price'>$9.99</p>
                <h5 className="video-title"><b>How To Write and Publish A Book</b></h5>
                <p className='video-description'>Catarah Coleman and Shoneji Robison, owners of Southern Girl Desserts, will share their </p>
                <button className='video-btn'>Register Now</button>
              </div>
            </div>
          </div>


        </div>
        <br />
        <br />
      </div>
      </div>
    </>
  )
}

export default dainvideos
