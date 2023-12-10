import React from 'react'
import './contact.css'
import Link from 'next/link'
import SocialIcons from '../components/Socialions'


export default function Contact() {
  return (
    <div className='contact_container'>
      <div className='contact_container2'>
        <div className='map'>
          ERROR
        </div>
        <div className="continfo_form">
          <div className='FORM'>
            <strong>
            <h1 className='header'>
              Leave A Message!!!
            </h1>
            </strong>
            
            <div className='form_body'>
              <label>Full Name</label>
              <input type="text"  placeholder='Enter your first name' required/>
              
              <label >Last name</label>
              <input type="text"  placeholder='last name' required/>
              <label>Email address</label>

              <input type="email"  placeholder='valid email' required/>
              <label > Address</label>

              <input type="text"  placeholder='address' required/>
              <label >Message text</label>

              <textarea name="message" id="" cols="60" rows="5" placeholder='input your text' required></textarea>
              <input type='submit' value='Submit' className='button'/>
            </div>
          </div>
          <div className="contact-info">
            <h1>
              <strong>
                CONTACT INFO!!!
                <p>
                  NO 42 montgomery road sabo yaba,<br />
                  lagos Nigeria
                  <br />
                  <>danielmuibi71@gmail.com</>


                </p>
              </strong>
              <div className='socialicon'>

              <SocialIcons />
              </div>
            </h1>  
          </div>
        </div>
      </div>
    </div>
  )
}
