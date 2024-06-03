import React from 'react'
import '../stylesheets/dainBlog.css'

import image1 from '../assets/blog1.png'
import image2 from '../assets/blog4.png'
import image3 from '../assets/Blog3.png'
import image4 from '../assets/blog2.png'
import image11 from '../assets/blog1.png';
import image12 from '../assets/blog2.png';
import image13 from '../assets/Blog3.png';
import image14 from '../assets/blog4.png';


function dainblog() {
  return (
    <>
      {/*slider */}
      <div className='blogs-page'>
        <br/>
        <br/>
      <div id="carouselExampleAutoplaying" className=" container carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000" data-bs-wrap="true" data-bs-pause="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>

        </div>
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src={image1} className="d-block w-100 carousel-images" alt="blog1" />
            <div className="carousel-caption text-center custom-caption" >
              <h1 className='carousel-heading'>Get informed about women's history</h1>
              <br />
              <br />
              <h3 className='carousel-title'>Title of Article</h3>
            </div>
          </div>

          <div className="carousel-item">
            <img src={image2} class="d-block w-100 carousel-images" alt="blog2" />
            <div className="carousel-caption text-center custom-caption">
              <h1 className='carousel-heading'>Get informed about women's history</h1>
              <br />
              <br />
              <h3 className='carousel-title'>Title of Article</h3>
            </div>
          </div>

          <div className="carousel-item">
            <img src={image3} class="d-block w-100 carousel-images" alt="blog3" />
            <div className="carousel-caption text-center custom-caption">
              <h1 className='carousel-heading'>Get informed about women's history</h1>
              <br />
              <br />
              <h3 className='carousel-title'>Title of Article</h3>
            </div>
          </div>

          <div className="carousel-item">
            <img src={image4} class="d-block w-100 carousel-images" alt="blog4" />
            <div className="carousel-caption text-center custom-caption">
              <h1 className='carousel-heading'>Get informed about women's history</h1>
              <br />
              <br />
              <h3 className='carousel-title'>Title of Article</h3>
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
      <br />
      <h2 className='blogs-title'><b>GNL BLOGs</b></h2>
      <br />
      <div className="container text-center">
        <div className="row">
          <div className="col padding">
            <div className="card card-boundary-one mx-auto" style={{ width: '15rem' }}>
              <img src={image11} className="card-imgs" alt="BLOG 1" />
              <div className="card-body">
                <h5 className="Article-title"><b>Title of Article</b></h5>
                <p className="Article-text">30th September 2020.
                  <br />Author name
                  <br />Lorem ipsum dolor est lorem ipsum dolor est</p>
                <button className='Read-btn'>Read</button>
              </div>
            </div>
          </div>

          <div className="col padding">
            <div className="card card-boundary-two mx-auto" style={{ width: '15rem' }}>
              <img src={image12} className="card-imgs" alt="BLOG 2" />
              <div className="card-body">
                <h5 className="Article-title"><b>Title of Article</b></h5>
                <p className="Article-text">30th September 2020.
                  <br />Author name
                  <br />Lorem ipsum dolor est lorem ipsum dolor est</p>
                <button className='Read-btn'>Read</button>
              </div>
            </div>
          </div>

          <div className="col padding">
            <div className="card card-boundary-three mx-auto" style={{ width: '15rem' }}>
              <img src={image13} className="card-imgs" alt="BLOG 3" />
              <div className="card-body">
                <h5 className="Article-title"><b>Title of Article</b></h5>
                <p className="Article-text">30th September 2020.
                  <br />Author name
                  <br />Lorem ipsum dolor est lorem ipsum dolor est</p>
                <button className='Read-btn'>Read</button>
              </div>
            </div>
          </div>

          <div className="col padding">
            <div className="card card-boundary-four mx-auto" style={{ width: '15rem' }}>
              <img src={image14} className="card-imgs" alt="BLOG 4" />
              <div className="card-body">
                <h5 className="Article-title"><b>Title of Article</b></h5>
                <p className="Article-text">30th September 2020.
                  <br />Author name
                  <br />Lorem ipsum dolor est lorem ipsum dolor est</p>
                <button className='Read-btn'>Read</button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col padding">
            <div className="card card-boundary-one mx-auto" style={{ width: '15rem' }}>
              <img src={image11} className="card-imgs" alt="BLOG 1" />
              <div className="card-body">
                <h5 className="Article-title"><b>Title of Article</b></h5>
                <p className="Article-text">30th September 2020.
                  <br />Author name
                  <br />Lorem ipsum dolor est lorem ipsum dolor est</p>
                <button className='Read-btn'>Read</button>
              </div>
            </div>
          </div>

          <div className="col padding">
            <div className="card card-boundary-two mx-auto" style={{ width: '15rem' }}>
              <img src={image12} className="card-imgs" alt="BLOG 2" />
              <div className="card-body">
                <h5 className="Article-title"><b>Title of Article</b></h5>
                <p className="Article-text">30th September 2020.
                  <br />Author name
                  <br />Lorem ipsum dolor est lorem ipsum dolor est</p>
                <button className='Read-btn'>Read</button>
              </div>
            </div>
          </div>

          <div className="col padding">
            <div className="card card-boundary-three mx-auto" style={{ width: '15rem' }}>
              <img src={image13} className="card-imgs" alt="BLOG 3" />
              <div className="card-body">
                <h5 className="Article-title"><b>Title of Article</b></h5>
                <p className="Article-text">30th September 2020.
                  <br />Author name
                  <br />Lorem ipsum dolor est lorem ipsum dolor est</p>
                <button className='Read-btn'>Read</button>
              </div>
            </div>
          </div>

          <div className="col padding">
            <div className="card card-boundary-four mx-auto" style={{ width: '15rem' }}>
              <img src={image14} className="card-imgs" alt="BLOG 4" />
              <div className="card-body">
                <h5 className="Article-title"><b>Title of Article</b></h5>
                <p className="Article-text">30th September 2020.
                  <br />Author name
                  <br />Lorem ipsum dolor est lorem ipsum dolor est</p>
                <button className='Read-btn'>Read</button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col padding">
            <div className="card card-boundary-one mx-auto" style={{ width: '15rem' }}>
              <img src={image11} className="card-imgs" alt="BLOG 1" />
              <div className="card-body">
                <h5 className="Article-title"><b>Title of Article</b></h5>
                <p className="Article-text">30th September 2020.
                  <br />Author name
                  <br />Lorem ipsum dolor est lorem ipsum dolor est</p>
                <button className='Read-btn'>Read</button>
              </div>
            </div>
          </div>

          <div className="col padding">
            <div className="card card-boundary-two mx-auto" style={{ width: '15rem' }}>
              <img src={image12} className="card-imgs" alt="BLOG 2" />
              <div className="card-body">
                <h5 className="Article-title"><b>Title of Article</b></h5>
                <p className="Article-text">30th September 2020.
                  <br />Author name
                  <br />Lorem ipsum dolor est lorem ipsum dolor est</p>
                <button className='Read-btn'>Read</button>
              </div>
            </div>
          </div>

          <div className="col padding">
            <div className="card card-boundary-three mx-auto" style={{ width: '15rem' }}>
              <img src={image13} className="card-imgs" alt="BLOG 3" />
              <div className="card-body">
                <h5 className="Article-title"><b>Title of Article</b></h5>
                <p className="Article-text">30th September 2020.
                  <br />Author name
                  <br />Lorem ipsum dolor est lorem ipsum dolor est</p>
                <button className='Read-btn'>Read</button>
              </div>
            </div>
          </div>

          <div className="col padding">
            <div className="card card-boundary-four mx-auto" style={{ width: '15rem' }}>
              <img src={image14} className="card-imgs" alt="BLOG 4" />
              <div className="card-body">
                <h5 className="Article-title"><b>Title of Article</b></h5>
                <p className="Article-text">30th September 2020.
                  <br />Author name
                  <br />Lorem ipsum dolor est lorem ipsum dolor est</p>
                <button className='Read-btn'>Read</button>
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

export default dainblog
