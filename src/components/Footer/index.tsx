import './footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h2>Sign up for our newsletter!</h2>
        <form className='newsletter-form'>
          <input type="text" placeholder="Email Address" className='email'/>
          <button className='newsletter-btn'>Sign Up</button>
        </form>
      </div>
      <p className='contact-info'>
        123 Main St. <br />
        Anytown, USA 12345 <br />
        123-867-5309
      </p>
      <div className="social-media">
      </div>
      <p><span className='copyright'>&copy;</span> MagicGreens 2023</p>
    </footer>
  )
}

export default Footer;