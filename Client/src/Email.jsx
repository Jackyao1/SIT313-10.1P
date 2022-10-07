import React, { useEffect, useState } from "react";
import './CSS/Email.css';
import Input from './Input'
import EmailButton from './EmailButton'

const Email = (props) => {
  const [contact, setContact] = useState({
      email: '',
  })



  const handleChange = (event) => {
      const { name, value } = event.target
      setContact((preValue) => {
          return {
              ...preValue,
              [name]: value
          }
      })
  }


  const handleClick = async () => {
      await fetch('http://localhost:8080', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              email: contact.email
          })
      })
          .then(response => response.json())
          .then(data => JSON.parse(data))
          .catch(err => {
              console.log("Error" + err)
          })
  }

  return <section id="email">
      <div className="email">
          <div className="emailtext"> SIGN UP FOR OUR DAILY INSIDER</div>
<div className="emailinput">
          <Input
              name='email'
              type='email'
              placeholder='Enter Your email'
              onChange={handleChange}
              value={contact.email}
          />
</div>
          <EmailButton
              type='submit'
              text='Subscribe'
              onClick={handleClick}
          />

      </div>

  </section>

}
export default Email
