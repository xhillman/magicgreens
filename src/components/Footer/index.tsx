import './footer.css'

function Footer() {

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // clear the input
    const input = document.querySelector('.email') as HTMLInputElement;
    input.value = '';
    const confirmation = document.querySelector('.confirmation') as HTMLParagraphElement;
    confirmation.classList.add('show-confirmation');
    setTimeout(() => {
      confirmation.classList.remove('show-confirmation');
    }, 3000);
  }

  return (
    <footer className="footer">
      <div className="newsletter">
        <h2>Sign up for our newsletter!</h2>
        <form className='newsletter-form' onSubmit={submit}>
          <input type="text" placeholder="Email Address" className='email'/>
          <button className='newsletter-btn'>Sign Up</button>
        </form>
        <p className='confirmation'>You're in!</p>
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