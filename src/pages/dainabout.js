import React from 'react'
import '../stylesheets/dainAbout.css';
import image1 from '../assets/Path 1471@2x.png';
import image2 from '../assets/Group 12538@2x.png';
import image3 from '../assets/Rectangle 730@2x.png';
import image4 from '../assets/Rectangle 731@2x.png';
import image5 from '../assets/Rectangle 732@2x.png';
import image6 from '../assets/Rectangle 733@2x.png';
import image7 from '../assets/Rectangle 734@2x.png';
import image8 from '../assets/pexels-chait-goli-1918290@2x.png';
import image9 from '../assets/facebook.png';
import image10 from '../assets/Linkdein.png';
import image11 from '../assets/Youtube.png';
import image12 from '../assets/Pinterest.png';
import image13 from '../assets/pexels.png';
import image14 from '../assets/girl3.png';
import image15 from '../assets/girl4.png';
import image16 from '../assets/girl5.png';
import image17 from '../assets/girl6.png';
import image18 from '../assets/girl7.png';
import image19 from '../assets/girl8.png';
import image20 from '../assets/girl9.png';
import image22 from '../assets/Rectangle 738@2x.png';
import image23 from '../assets/Rectangle 739@2x.png';
import image24 from '../assets/Rectangle 740@2x.png';
import image25 from '../assets/Rectangle 741@2x.png';
import image26 from '../assets/Rectangle 742@2x.png';
import image27 from '../assets/Rectangle 743@2x.png';
import image28 from '../assets/Rectangle 744@2x.png';
import image29 from '../assets/Rectangle 745@2x.png';

function dainabout() {
  return (
    <>
      <div className='about-page'>
        <div class="max-width first-section">
          <div className="row">
            <div class="col-md-6 col-sm-12 py-3">
              <h1 className='heading'><b>WHO IS <br />GIRLS NITE <br />LIVE?</b></h1>

              <div className='image-set'>
                <img className='arrow-img1' src={image1} alt='arrow' width="100%" />
              </div>
              <p className='para'>Girls Nite Live (GNL) is the perfect place to come together to have fun! <br />We host online events, in-person events as well as hybrid events. At GNL we have something for everyone. From game nights, psychic predictions, large community holiday events as well as hybrid wine tasting.<br /><br /> Our GNL audience joins us locally, nationally as well as internationally. <br /><br />As we always say at the beginning of every event, Welcome to the GNL Family, we are so happy you are here!</p>
              <br />
              <button className='btn-set'>Sign up for an upcoming events!</button>
            </div>

            <div class="col-md-6 col-sm-12 py-3">
              <img className='about-section-img' src={image2} alt='females' width='100%' />
            </div>
          </div>
        </div >

        <br />
        <h2 className='hosts'><b>Meet Our Hosts</b></h2>
        <br />
        <div class="hosts-section">
          <div class="row d-flex mx-auto">
            <div class="col-md-2 col-sm-12 py-3"><img className='img-1' src={image3} alt='Girl1' width="100%" /></div>
            <div class="col-md-2 col-sm-12 py-3"><img className='img-2' src={image4} alt='Girl2' width="100%" /></div>
            <div class="col-md-2 col-sm-12 py-3"><img className='img-3' src={image5} alt='Girl3' width="100%" /></div>
            <div class="col-md-2 col-sm-12 py-3"><img className='img-4' src={image6} alt='Girl4' width="100%" /></div>
            <div class="col-md-2 col-sm-12 py-3"><img className='img-5' src={image7} alt='Girl5' width="100%" /></div>
            <div class="col-md-2 col-sm-12 py-3"><img className='img-2' src={image4} alt='Girl2' width="100%" /></div>
          </div>
        </div>



        <br />
        <h2 className='hosts'><b>Meet Our AMBASSADORS</b></h2>
        <br />
        <div class="container text-center">
          <div class="row">

            <div class="col padding">
              <div className="card mx-auto" style={{ width: '18rem' }}>
                <img src={image8} className="card-img-top" alt="girl1" />

                <div className="card-body">
                  <h5 className="card-title">Bake Like a Pro</h5>
                  <p className="card-text"><b>Abiola Abrams</b></p>
                  <div className='social-medias'>
                    <a className="social-links" href="https://pk.linkedin.com/" target="_blank" rel="noopener noreferrer"><img className='icons-set' src={image10} alt='Linkdein' width='15%' /></a>
                    <a className="social-links" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> <img className='icons-set' src={image9} alt='Facebook' width='15%' /></a>
                    <a className="social-links" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img className='icons-set' src={image11} alt='Youtube' width='15%' /></a>
                    <a className="social-links" href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer"><img className='icons-set' src={image12} alt='Pinterest' width='15%' /></a>
                  </div>
                  <br />
                  <button className="Read-more-btn"><b>Read More</b></button>
                </div>
              </div>
            </div>


            <div class="col padding">
              <div className="card mx-auto" style={{ width: '18rem' }}>
                <img src={image13} className="card-img-top" alt="girl2" />

                <div className="card-body">
                  <h5 className="card-title">Chef and Food Blogger</h5>
                  <p className="card-text"><b>Ava Adames</b></p>
                  <div className='social-medias'>
                    <a className="social-links" href="https://pk.linkedin.com/" target="_blank" rel="noopener noreferrer"><img className='icons-set' src={image10} alt='Linkdein' width='15%' /></a>
                    <a className="social-links" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> <img className='icons-set' src={image9} alt='Facebook' width='15%' /></a>
                    <a className="social-links" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img className='icons-set' src={image11} alt='Youtube' width='15%' /></a>
                    <a className="social-links" href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer"><img className='icons-set' src={image12} alt='Pinterest' width='15%' /></a>
                  </div>
                  <br />
                  <button className="Read-more-btn"><b>Read More</b></button>
                </div>
              </div>
            </div>


            <div class="col padding">
              <div className="card mx-auto" style={{ width: '18rem' }}>
                <img src={image14} className="card-img-top" alt="girl3" />

                <div className="card-body">
                  <h5 className="card-title">Writer, Author, Editor, and Interviewer</h5>
                  <p className="card-text"><b>Christina Manning</b></p>
                  <div className='social-medias'>
                    <a className="social-links" href="https://pk.linkedin.com/" target="_blank" rel="noopener noreferrer"><img className='icons-set' src={image10} alt='Linkdein' width='15%' /></a>
                    <a className="social-links" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> <img className='icons-set' src={image9} alt='Facebook' width='15%' /></a>
                    <a className="social-links" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img className='icons-set' src={image11} alt='Youtube' width='15%' /></a>
                    <a className="social-links" href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer"><img className='icons-set' src={image12} alt='Pinterest' width='15%' /></a>
                  </div>
                  <br />
                  <button className="Read-more-btn"><b>Read More</b></button>
                </div>
              </div>
            </div>


            <div class="col padding">
              <div className="card mx-auto" style={{ width: '18rem' }}>
                <img src={image15} className="card-img-top" alt="girl4" />

                <div className="card-body">
                  <h5 className="card-title">Bake Southern Delights</h5>
                  <p className="card-text"><b>Diana Ayala, Dayala Treats</b></p>
                  <div className='social-medias'>
                    <a className="social-links" href="https://pk.linkedin.com/" target="_blank" rel="noopener noreferrer"><img className='icons-set' src={image10} alt='Linkdein' width='15%' /></a>
                    <a className="social-links" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> <img className='icons-set' src={image9} alt='Facebook' width='15%' /></a>
                    <a className="social-links" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img className='icons-set' src={image11} alt='Youtube' width='15%' /></a>
                    <a className="social-links" href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer"><img className='icons-set' src={image12} alt='Pinterest' width='15%' /></a>
                  </div>
                  <br />
                  <button className="Read-more-btn"><b>Read More</b></button>
                </div>
              </div>
            </div>


            <div class="col padding">
              <div className="card mx-auto" style={{ width: '18rem' }}>
                <img src={image16} className="card-img-top" alt="girl5" />

                <div className="card-body">
                  <h5 className="card-title">The Art of Rituals</h5>
                  <p className="card-text"><b>Emily Friend, British Girl Bakes</b></p>
                  <div className='social-medias'>
                    <a className="social-links" href="https://pk.linkedin.com/" target="_blank" rel="noopener noreferrer"><img className='icons-set' src={image10} alt='Linkdein' width='15%' /></a>
                    <a className="social-links" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> <img className='icons-set' src={image9} alt='Facebook' width='15%' /></a>
                    <a className="social-links" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img className='icons-set' src={image11} alt='Youtube' width='15%' /></a>
                    <a className="social-links" href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer"><img className='icons-set' src={image12} alt='Pinterest' width='15%' /></a>
                  </div>
                  <br />
                  <button className="Read-more-btn"><b>Read More</b></button>
                </div>


              </div>
            </div>


            <div class="col padding">
              <div className="card mx-auto" style={{ width: '18rem' }}>
                <img src={image17} className="card-img-top" alt="girl6" />

                <div className="card-body">
                  <h5 className="card-title">ROCK</h5>
                  <p className="card-text"><b>The Pretty Reckless</b></p>
                  <div className='social-medias'>
                    <a className="social-links" href="https://pk.linkedin.com/" target="_blank" rel="noopener noreferrer"><img className='icons-set' src={image10} alt='Linkdein' width='15%' /></a>
                    <a className="social-links" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> <img className='icons-set' src={image9} alt='Facebook' width='15%' /></a>
                    <a className="social-links" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img className='icons-set' src={image11} alt='Youtube' width='15%' /></a>
                    <a className="social-links" href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer"><img className='icons-set' src={image12} alt='Pinterest' width='15%' /></a>
                  </div>
                  <br />
                  <button className="Read-more-btn"><b>Read More</b></button>
                </div>


              </div>
            </div>


            <div class="col padding">
              <div className="card mx-auto" style={{ width: '18rem' }}>
                <img src={image18} className="card-img-top" alt="girl7" />

                <div className="card-body">
                  <h5 className="card-title">ROCK</h5>
                  <p className="card-text"><b>The Pretty Reckless</b></p>
                  <div className='social-medias'>
                    <a className="social-links" href="https://pk.linkedin.com/" target="_blank" rel="noopener noreferrer"><img className='icons-set' src={image10} alt='Linkdein' width='15%' /></a>
                    <a className="social-links" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> <img className='icons-set' src={image9} alt='Facebook' width='15%' /></a>
                    <a className="social-links" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img className='icons-set' src={image11} alt='Youtube' width='15%' /></a>
                    <a className="social-links" href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer"><img className='icons-set' src={image12} alt='Pinterest' width='15%' /></a>
                  </div>
                  <br />
                  <button className="Read-more-btn"><b>Read More</b></button>
                </div>


              </div>
            </div>


            <div class="col padding">
              <div className="card mx-auto" style={{ width: '18rem' }}>
                <img src={image19} className="card-img-top" alt="girl8" />

                <div className="card-body">
                  <h5 className="card-title">ROCK</h5>
                  <p className="card-text"><b>The Pretty Reckless</b></p>
                  <div className='social-medias'>
                    <a className="social-links" href="https://pk.linkedin.com/" target="_blank" rel="noopener noreferrer"><img className='icons-set' src={image10} alt='Linkdein' width='15%' /></a>
                    <a className="social-links" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> <img className='icons-set' src={image9} alt='Facebook' width='15%' /></a>
                    <a className="social-links" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img className='icons-set' src={image11} alt='Youtube' width='15%' /></a>
                    <a className="social-links" href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer"><img className='icons-set' src={image12} alt='Pinterest' width='15%' /></a>
                  </div>
                  <br />
                  <button className="Read-more-btn"><b>Read More</b></button>
                </div>


              </div>
            </div>


            <div class="col padding">
              <div className="card mx-auto" style={{ width: '18rem' }}>
                <img src={image20} className="card-img-top" alt="girl9" />

                <div className="card-body">
                  <h5 className="card-title">ROCK</h5>
                  <p className="card-text"><b>The Pretty Reckless</b></p>
                  <div className='social-medias'>
                    <img className='icons-set' src={image10} alt='Linkdein' width='15%' />
                    <img className='icons-set' src={image9} alt='Facebook' width='15%' />
                    <img className='icons-set' src={image11} alt='Youtube' width='15%' />
                    <img className='icons-set' src={image12} alt='Pinterest' width='15%' />
                  </div>
                  <br />
                  <button className="Read-more-btn"><b>Read More</b></button>
                </div>

              </div>
            </div>

          </div>
        </div>

        <br />
        <br />
        <br />
        <h2 className='hosts'><b>Meet Our Staff</b></h2>
        <br />
        <br />
        <br />
        <div class="container text-center">
          <div class="row">

            <div class="col padding">
              <div className="card mx-auto" style={{ width: '18rem' }}>
                <img src={image22} className="card-img-top" alt="girlA" />

                <div className="card-body bg-blue">
                  <h5 className="tittles"><b>Shelly Fisher</b></h5>
                  <p className="texts">Founder of Girls Nite Live</p>
                </div>
              </div>
            </div>

            <div class="col padding">
              <div className="card mx-auto" style={{ width: '18rem' }}>
                <img src={image23} className="card-img-top" alt="girlB" />

                <div className="card-body bg-blue">
                  <h5 className="tittles"><b>Peg Casullo</b></h5>
                  <p className="texts">President of Girls Nite Live</p>
                </div>
              </div>
            </div>

            <div class="col padding">
              <div className="card mx-auto" style={{ width: '18rem' }}>
                <img src={image24} className="card-img-top" alt="girlC" />

                <div className="card-body bg-blue">
                  <h5 className="tittles"><b>Francine S.</b></h5>
                  <p className="texts">Administrative Specialist & Graphic Designer at GNL</p>
                </div>
              </div>
            </div>

            <div class="col padding">
              <div className="card mx-auto" style={{ width: '18rem' }}>
                <img src={image25} className="card-img-top" alt="girlD" />

                <div className="card-body bg-blue">
                  <h5 className="tittles"><b>Edward T. Lack</b></h5>
                  <p className="texts">President of The PIF Group, LLC. (Parent Company of GNL)</p>
                </div>
              </div>
            </div>

            <div class="col padding">
              <div className="card mx-auto" style={{ width: '18rem' }}>
                <img src={image26} className="card-img-top" alt="girlE" />

                <div className="card-body bg-blue">
                  <h5 className="tittles"><b>Edward T. Lack</b></h5>
                  <p className="texts">Office Co-Ordinator & Receptionist at The PIF Group, LLC</p>
                </div>
              </div>
            </div>

            <div class="col padding">
              <div className="card mx-auto" style={{ width: '18rem' }}>
                <img src={image27} className="card-img-top" alt="girlF" />

                <div className="card-body bg-blue">
                  <h5 className="tittles"><b>Irene R.</b></h5>
                  <p className="texts">Social Media Director and Events Co-Ordinator at GNL</p>
                </div>
              </div>
            </div>

            <div class="col padding">
              <div className="card mx-auto" style={{ width: '18rem' }}>
                <img src={image28} className="card-img-top" alt="girlG" />

                <div className="card-body bg-blue">
                  <h5 className="tittles"><b>The Pretty Reckless</b></h5>
                  <p className="texts">Founder of Girls Nite Live</p>
                </div>
              </div>
            </div>


            <div class="col padding">
              <div className="card mx-auto" style={{ width: '18rem' }}>
                <img src={image29} className="card-img-top" alt="girlG" />

                <div className="card-body bg-blue">
                  <h5 className="tittles"><b>The Pretty Reckless</b></h5>
                  <p className="texts">Founder of Girls Nite Live</p>
                </div>
              </div>
            </div>

            <div class="col padding">
              <div className="card mx-auto" style={{ width: '18rem' }}>
                <img src={image23} className="card-img-top" alt="girlG" />

                <div className="card-body bg-blue">
                  <h5 className="tittles"><b>The Pretty Reckless</b></h5>
                  <p className="texts">Founder of Girls Nite Live</p>
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

export default dainabout
