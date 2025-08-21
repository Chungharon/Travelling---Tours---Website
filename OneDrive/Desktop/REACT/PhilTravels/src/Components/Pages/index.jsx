import React, { useEffect } from 'react'
// import { CartContext } from '../../Context/CartContext'
import bgvedio from '../../assets/travel1.mp4'
import user1 from '../../assets/user-1.jpeg'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.jpeg'

import hand from '../../assets/hand.png'

// import destination1 from '../../assets/destination-1.png'
// import destination2 from '../../assets/destination-2.png'
// import destination3 from '../../assets/destination-3.jpeg'
// import destination4 from '../../assets/destination-4.png'
// import destination5 from '../../assets/destination-5.png'
// import destination6 from '../../assets/destination-6.png'

import Explore1 from '../../assets/explore-1.svg'
import Explore2 from '../../assets/explore-2.svg'
import Explore3 from '../../assets/explore-3.svg'
import Explore4 from '../../assets/explore-4.svg'
import Explore5 from '../../assets/explore-5.svg'

import ExploreImg1 from '../../assets/explore-img1.png'
import ExploreImg2 from '../../assets/explore-img2.png'
import ExploreImg3 from '../../assets/explore-img3.png'
import ExploreImg4 from '../../assets/explore-img4.png'
import ExploreImg5 from '../../assets/explore-img5.png'

// import aboutbanner from '../../assets/about-banner-three.png';

// import tst from '../../assets/testimonial-1.jpeg'
// import tstbanner from '../../assets/testimonial-three-banner.png'

// import brand1 from '../../assets/brand-1.jpeg'
// import brand2 from '../../assets/brand-2.jpeg'
// import brand3 from '../../assets/brand-3.jpeg'
// import brand4 from '../../assets/brand-4.png'
// import brand5 from '../../assets/brand-5.png'



// import news4 from '../../assets/news-4.png'
// import news5 from '../../assets/news-5.png'
// import news6 from '../../assets/news-6.png'



function Index() {

    // const [tours, setTours] = useState([]);
    // const [ visibleCount, setVisibleCount ] = useState(6);
    // const { cartItems, addToCart } = useContext(CartContext);


    useEffect(() => {
        // setTours(toursData);

    }, []);

    // Booking handler to be wired when cart context is available

    // const [activeIndex, setActiveIndex] = useState(0);

    // const tabs = [
    //     { title: 'Fishing & Swimming', img: Explore1, ExploreImg: ExploreImg1 },
    //     { title: 'Boating & Kayaking', img: Explore2, ExploreImg: ExploreImg2 },
    //     { title: 'Trailers & Sports', img: Explore3, ExploreImg: ExploreImg3 },
    //     { title: 'Mountain & Hill Hiking', img: Explore4, ExploreImg: ExploreImg4 },
    //     { title: 'Paragliding Tours', img: Explore5, ExploreImg: ExploreImg5 },
    // ]

  return (
    <>
       <div className="hero-header section">
        <video 
            autoPlay
            muted
            loop
            playsInline
            className='hero-vedio'
        >
            <source src={bgvedio} type='video/mp4' />
        </video>

        <div className="hero-overlay text-white">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <h1 className="hero-title">
                  Plan tours to dream <br />Location in just a click!
                </h1>
                <p className="hero-description">
                  culture, and landscape.
                </p>
                <div className="d-flex align-items-center">
                  <div className="users">
                    <img src={user1} className="user-img" alt="user-image"/>
                    <img src={user2} className="user-img" alt="user-image"/>
                    <img src={user3} className="user-img" alt="user-image"/>
                    <img src={user4} className="user-img" alt="user-image"/>
                    <span>5K +</span>
                  </div>
                  <p className="m-0 px-3 fs-6 fw-semibold">Happy Customer</p>
                  <img src={hand} className='img-fluid' alt="hand-image" width={40} height={40} />
                </div>
              </div>
            </div>
          </div>
          <div className="container w-100 travel-box p-4 bg-dark text-white rounded z-0">
            <div className="row align-items-center justify-content-between w-100 gap-4 gap-xl-0">
              <div className="col-xl-2 travel-info" style={{ borderRight: '1px solid rgba(248, 250, 252, 0.08)'}}>
                <label className="form-label semibold fs-5 text-white">
                  <i className="bi bi-geo-alt-fill me-2 fs-6"></i>
                  Destination
                </label>
                <select className="form-select bg-dark text-white border-secondary border-0">
                  <option>Chittagong, Turkish</option>
                  <option>Dhaka, Banggladesh</option>
                  <option>Istanbul, Turkey</option>
                </select>
              </div>
              <div className="col-xl-2 travel-info" style={{ borderRight: '1px solid rgba(248, 250, 252, 0.08)'}}>
                <label className="form-label semibold fs-5 text-white">
                  <i className="bi bi-airplane me-2 fs-6"></i>
                  Tour Type
                </label>
                <select className="form-select bg-dark text-white border-secondary border-0">
                  <option>Pre-book Type</option>
                  <option>Instant Booking</option>
                  <option>Custom Package</option>
                </select>
              </div>
              <div className="col-xl-2 travel-info" style={{ borderRight: '1px solid rgba(248, 250, 252, 0.08)'}}>
                <label className="form-label semibold fs-5 text-white">
                  <i className="bi bi-clock me-2 fs-6"></i>
                  Date From
                </label>
                <input 
                  type="date" 
                  id='datepicker'
                  className='form-control bg-dark text-white border-0'
                />
              </div>
              <div className="col-xl-2 travel-info" style={{ borderRight: '1px solid rgba(248, 250, 252, 0.08)'}}>
                <label className="form-label semibold fs-5 text-white">
                  <i className="bi bi-person me-2 fs-6"></i>
                  Guests
                </label>
                <select className="form-select bg-dark text-white border-0">
                  <option>02</option>
                  <option>01</option>
                  <option>03</option>
                  <option>04+</option>
                </select>
              </div>
              <div className="col-xl-2 travel-info" style={{ borderRight: '1px solid rgba(248, 250, 252, 0.08)'}}>
                <button className="travel-btn py-3 px-5 fs-6 btn btn-primary fw-semibold" style={{backgroundColor: '#f26f55', border: 'none', cursor: 'pointer'}}>
                  Search Plan
                </button>
              </div>
            </div>
          </div>
        </div>
       </div>

       {/* Banner */}
       <div className="banner-container section">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="section-title">
              <p>Special offers</p>
              <h2>Winter Our Big Offers to Inspire You</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="banner-content z-1 px-4 rounded-3 banner-bg-1 text-white">
                <p className="hightlight-text">Save up to</p>
                <h4 className="fs-1 fw-semibold">50%</h4>
                <p className="pera fs-4 fw-bold">Let's Explore the World</p>
                <div className="location d-flex align-items-center gap-2">
                  <i className="bi bi-geo-alt"></i>
                    <p className="name mb-0">Bangkok, Thailand</p>
                </div>
                <button className="btn banner-btn px-4">Booking now</button>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="banner-content z-1 py-5 px-4 rounded-3 banner-bg-2 text-white">
                <h4 className="fs-1 fw-semibold">Nearby Hotel</h4>
                <p class="pera">
                  Up to <span class='hightlights-text'>50%</span> off
                </p>
                <div className="location d-flex align-items-center gap-2">
                  <i class="bi bi-geo-alt"></i>
                  <p className="name mb-0">Bangkok, Thailand</p>
                </div>
                <button className="btn banner-btn px-4">Booking now</button>
              </div>
            </div>
          </div>
        </div>
       </div>
    </>
  )
}

export default Index
