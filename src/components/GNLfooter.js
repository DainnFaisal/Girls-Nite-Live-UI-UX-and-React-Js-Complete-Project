import React, { useState } from 'react'
import '../stylesheets/footer.css';
import image1 from '../assets/Footerlogo.png';
import {Link} from 'react-router-dom'


const GNLfooter = ( ) => {
    const [email, setEmail] = useState('');

    const onClickSubscribeButton = () => {
      console.log("Clicked", email);
  
      fetch('http://localhost:3001/api/subscribers', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          email,
        })
      })
      // .then(response => response.json())
      .then(response => {
        return response.json()
      })
      .then((response) => {
        console.log(response)
        alert(response.message);
      })
      .catch((error) => {
        console.log(error);
      })
    };
  
    const handleInputChange = (event) => {
      const newValue = event.target.value;
      setEmail(newValue);
    }

    
    return (
        <>

            <div class="footer">

                <div class="row">

                    <div class="col-md-3 col-sm-12 py-1">

                        <br /> <img className='footer-logo' src={image1} alt='Footer Logo' width="75%" />
                        <br /><br /><h3 className='newsletter'>NEWSLETTER SIGNUP</h3>
                        <input className='input-field' placeholder='Email' type='text'
                        value={email}
                        onChange={handleInputChange} >
                            
                        </input>
                        <br/>
                        <br/>
                        <button className='Submit-btn' type='submit'
                        onClick={onClickSubscribeButton}>Subscribe</button>

                    </div>

                    <div class="col-md-3 col-sm-12 py-1 px-5">

                        <br /> <h4 className='footer-heading'>Menu</h4>
                        <Link className='setlinks' to="/About">About Us</Link>
                        <br /><br /><Link className='setlinks' to="/dainEvents">Events</Link>
                        <br /><br /><Link className='setlinks' to="/dainMarketPlace">Market Place</Link>
                        <br /><br /><Link className='setlinks' to="/dainWorkwithGNL">Work with GNL</Link>

                    </div>

                    <div class="col-md-3 col-sm-12 py-1 px-5">

                        <br />  <h4 className='footer-heading'>Quick Links</h4>
                        <Link className='setlinks' to="/Contact">Contact</Link>
                        <br /><br /><Link className='setlinks' to="/FAQ">FAQs</Link>
                        <br /><br /><Link className='setlinks' to="/TermsOfUse">Terms of Use</Link>

                    </div>

                    <div class="col-md-3 col-sm-12 py-1 px-5">
                        <br />  <h4 className='footer-heading'>Contact Us</h4>
                        <b>Text or Call us!</b>
                        <br /><a href='tel:610-822-2127'>610-822-2127</a>
                        <br /><b>Email</b>
                        <br /><a href="mailto:hello@girlsnitelive.com">hello@girlsnitelive.com</a>
                        <br /><b>Address</b>
                        <br />Rosemont Square 1149 West Lancaster Avenue, Suite U-3 Bryn Mawr, PA 19010-2722
                    </div>
                </div>

            </div>
        </>
    )
}

export default GNLfooter
