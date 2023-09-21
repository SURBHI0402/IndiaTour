import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import vedio1 from "./vedio1.mp4"
import vedio2 from "./vedio2.mp4"
import vedio3 from "./vedio3.mp4"
import vedio4 from "./vedio4.mp4"

function Home(){

  return(

    <>
    <div/>

    <header>
        <Link to="#" className="brand">Travel</Link>
        <NavBar/>
        <div className="menu-btn">

        </div>

    </header>
    <section>
      <div className="container">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <video width="900" height="800" autoPlay  muted Loop><source  onLoadStart="this.playbackRate = 1.5;" src={vedio1} alt="vedio"/></video>
            </div>
            <div className="carousel-item">
              <video width="900" height="650" autoPlay  muted><source  onLoadStart="this.playbackRate = 1.5;" src={vedio2} alt="vedio2"/></video>
            </div>
            <div className="carousel-item">
              <video width="900" height="650" autoPlay muted><source  onLoadStart="this.playbackRate = 1.5;" src={vedio3} alt="vedio3"/></video>
            </div>
            <div className="carousel-item">
              <video width="900" height="650" autoPlay muted><source  onLoadStart="this.playbackRate = 1.5;"  src={vedio4} alt="vedio"/></video>
            </div>
          </div>
        </div>
        </div>
        </section>
            
        <div className="home">
        <div className="content">
            <h1>Incredible<br/><span>India</span></h1>
            <p>India is a vast and diverse country that encompasses a rich tapestry of cultures, traditions, languages, and landscapes. From the snow-capped peaks of the Himalayas to the palm-fringed beaches of the coastal regions, India offers a breathtaking array of natural beauty. It is also home to architectural marvels such as the iconic Taj Mahal and ancient temples, reflecting its rich historical heritage. With its vibrant festivals, mouth-watering cuisine, and warm hospitality, India is a country that captivates the senses and leaves a lasting impression on all who visit.The Himalayan ranges border it in the north and the Arabian Sea, Bay of Bengal, and the Indian Ocean on three sides. India is beautiful because of its picturesque backwaters, hill towns, and landscapes. Thus it has a lot to offer to the tourist. Both skilled and unskilled workers are employed in the tourism sector. It encourages global fraternity and national integration.</p>
          </div>
       <center>   <h3>Select the State you want to go to</h3></center>
          <div className="card-container">
            <div className="card-row">
              <div className="card-image">
                <img src="./goa.jpg" alt=""/>
                <div className="card-details">
                  <h2>Tropical & Vibrant<span> Goa</span></h2>
                  <p>Goa is a paradisiacal coastal destination known for its pristine beaches, vibrant nightlife, and rich Portuguese heritage.</p>
                  <div className="card-more">
                  <Link to="/page2" className="new-page">Read <span>More</span></Link>

                  </div>

                </div>

              </div>
              <div className="card-image">
                <img src="./Satara-1.jpg" alt=""/>
                <div className="card-details">
                  <h2>Land of Ganesha<span> Maharasthra</span></h2>
                  <p>Maharashtra is a diverse state in western India known for its bustling cosmopolitan cities, such as Mumbai</p>
                  <div className="card-more">
                    <Link to="/page1" className="new-page">Read <span>More</span></Link>

                  </div>

                </div>

              </div>
            </div>
            </div>
      
          <div className="card-container">

            <div className="card-row">
              <div className="card-image">
                <img src="./kerala.jpg" alt=""/>
                <div className="card-details">
                  <h2>Paradise on Earth<span> Kerala</span></h2>
                  <p>Kerala is known for its tranquil atmosphere.From its lush green landscapes to its serene backwaters </p>
                  <div className="card-more">
                  <Link to="/page3" className="new-page">Read <span>More</span></Link>
        
                  </div>
        
                </div>
        
              </div>
              
              <div className="card-image">
                <img src="./rajsthan.jpg" alt=""/>
                <div className="card-details">
                  <h2>Desert Land<span> Rajasthan</span></h2>
                  <p>Rajasthan is renowned for its majestic palaces, forts, and havelis that showcase the rich cultural heritage</p>
                  <div className="card-more">
                  <Link to="/page4" className="new-page">Read <span>More</span></Link>
        
                  </div>
        
                </div>
        
              </div>
              
            
              
              
            </div>
            <div className="card-row">
                <div className="card-image">
                  <img src="./tamiln.jpg" alt=""/>
                  <div className="card-details">
                    <h2>Dravidian Palace<span> Tamilnadu</span></h2>
                    <p>a land steeped in Dravidian heritage, captivates with its ancient temples and rich cultural traditions</p>
                    <div className="card-more">
                    <Link to="/page5" className="new-page">Read <span>More</span></Link>
          
                    </div>
          
                  </div>
          
                </div>
                
                <div className="card-image">
                  <img src="./sikkim.jpg" alt=""/>
                  <div className="card-details">
                    <h2> Himalayan Paradise<span> Sikkim</span></h2>
                    <p>Nestled in the lap of the majestic Himalayas, Sikkim is a picturesque state blessed with breathtaking natural beauty</p>
                    <div className="card-more">
                    <Link to="/page6" className="new-page">Read <span>More</span></Link>
          
                    </div>
          
                  </div>
          
                </div>
                
              
                
                
              </div>
              <div className="card-row">
                <div className="card-image">
                  <img src="./meghalaya.jpg" alt=""/>
                  <div className="card-details">
                    <h2>Cloudy Enchantress<span> Meghalaya</span></h2>
                    <p>Meghalaya, known as the "abode of clouds," is a mesmerizing state in northeastern India </p>
                    <div className="card-more">
                    <Link to="/page7" className="new-page">Read <span>More</span></Link>
          
                    </div>
          
                  </div>
          
                </div>
                
                <div className="card-image">
                  <img src="./hp.jpg" alt=""/>
                  <div className="card-details">
                    <h2>Alpine Wonderland<span> Himachal Pradesh</span></h2>
                    <p>Himachal Pradesh, nestled in the majestic Himalayas, enchants with its snow-capped peaks, picturesque valleys</p>
                    <div className="card-more">
                    <Link to="/page8" className="new-page">Read <span>More</span></Link>
          
                    </div>
          
                  </div>
          
                </div>
                
            </div>
            <div className="card-row">
              <div className="card-image">
                <img src="./up.jpg" alt=""/>
                <div className="card-details">
                  <h2>Cultural Tapestry<span> Uttar Pradesh</span></h2>
                  <p>the largest state in India, is a treasure trove , with iconic sites like the Taj Mahal in Agra</p>
                  <div className="card-more">
                  <Link to="/page9" className="new-page">Read <span>More</span></Link>
        
                  </div>
        
                </div>
        
              </div>
              
              <div className="card-image">
                <img src="./mp.jpg" alt=""/>
                <div className="card-details">
                  <h2>Heartland Heritage<span> Madhya Pradesh</span></h2>
                  <p>Aptly called the "heart of India," is a state brimming with historical treasures and architectural wonders</p>
                  <div className="card-more">
                  <Link to="/page10" className="new-page">Read <span>More</span></Link>
                  </div>
        
                </div>
        
              </div>
        <div className="media-icons">
            <Link to="https://www.facebook.com/IndianTourisum"><i className="fab fa-facebook-f"></i></Link>
            <Link to="https://www.instagram.com/mymotac/"><i className="fab fa-instagram"></i></Link>
            <Link to="https://twitter.com/tourismgoi?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i className="fab fa-twitter"></i></Link>
        </div>

    </div>
    
    </div>
    </div>


    </>


);
}
export default Home;

   
