import Header from "../Header";

//placeholder image url
const url = 'https://images.unsplash.com/photo-1593642532972-7e6d7f1d2c4a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGZyZWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';


function Home() {
  return (
    <>
      <Header />
      <div className='hero-section'>
        <h2>Overlay text will go here.</h2>
        <img src="https://via.placeholder.com/1000x500" />
        <button>Shop Now</button>
      </div>
      <h3 className='tagline'>Fast, Fresh, Thoughtful</h3>
      <img src="https://via.placeholder.com/300x200" />
      <p>Fast Paragraph - Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fuga animi, accusamus ipsam iste exercitationem dolorem atque sint, expedita modi et, error suscipit. Soluta id delectus dolorem laudantium illum veniam.</p>
      <img src="https://via.placeholder.com/300x200" />
      <p>Fresh Paragraph - Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fuga animi, accusamus ipsam iste exercitationem dolorem atque sint, expedita modi et, error suscipit. Soluta id delectus dolorem laudantium illum veniam.</p>
      <img src="https://via.placeholder.com/300x200" />
      <p>Thoughtful Paragraph - Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fuga animi, accusamus ipsam iste exercitationem dolorem atque sint, expedita modi et, error suscipit. Soluta id delectus dolorem laudantium illum veniam.</p>
    </>
  )
}

export default Home;