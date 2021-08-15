import React from 'react'
import '../Styles/Footer.css'
const Footer = () => {
  const getYr = () => {
    const options = {
      year: 'numeric',
    }
    return new Date().toLocaleString('en-US', options)
  }
  return (
    <footer >
      <div>
        <h4>Contact us</h4>
        <p>Telephone: +11945632</p>
        <p>Email: HcFFbank@email.com</p>
      </div>
      <div>
        <h4>Address</h4>
        <p>P/40, Bhuvi Complex,</p>
        <p>Near New Garia,</p>
        <p>Kolkata, India</p>
      </div>
      <p className='copyright'>HcFF Bank Copyright &copy; {getYr()}</p>
    </footer>
  )
}

export default Footer
