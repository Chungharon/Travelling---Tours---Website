import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

// Assets
import bgvedio from "../../assets/travel1.mp4";
import user1 from "../../assets/user-1.jpeg";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.jpeg";
import hand from "../../assets/hand.png";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Data
import toursData from "../../Data/Tours.json";

// Explore icons/images
import Explore1 from "../../assets/explore-1.svg";
import Explore2 from "../../assets/explore-2.svg";
import Explore3 from "../../assets/explore-3.svg";
import Explore4 from "../../assets/explore-4.svg";
import Explore5 from "../../assets/explore-5.svg";
import ExploreImg1 from "../../assets/explore-img1.png";
import ExploreImg2 from "../../assets/explore-img2.png";
import ExploreImg3 from "../../assets/explore-img3.png";
import ExploreImg4 from "../../assets/explore-img4.png";
import ExploreImg5 from "../../assets/explore-img5.png";

function Index() {
  const [tours, setTours] = useState([]);
  const { addToCart, cartItems } = useContext(CartContext);

  //const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setTours(toursData);
  }, []);

  const handleBookNow = (tour) => {
    const alreadyInCart = cartItems.find((item) => item.id === tour.id);
    if (alreadyInCart) {
      alert("Tour already in cart");
    } else {
      addToCart({ ...tour, quantity: 1 });
      alert("Added to cart!");
    }
  };

  // const tabs = [
  //   { title: "Fishing & Swimming", img: Explore1, ExploreImg: ExploreImg1 },
  //   { title: "Boating & Kayaking", img: Explore2, ExploreImg: ExploreImg2 },
  //   { title: "Trailers & Sports", img: Explore3, ExploreImg: ExploreImg3 },
  //   { title: "Mountain & Hill Hiking", img: Explore4, ExploreImg: ExploreImg4 },
  //   { title: "Paragliding Tours", img: Explore5, ExploreImg: ExploreImg5 },
  // ];

  return (
    <>
      {/* Hero Section */}
      <div className="hero-header section">
        <video autoPlay muted loop playsInline className="hero-vedio">
          <source src={bgvedio} type="video/mp4" />
        </video>

        <div className="hero-overlay text-white">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <h1 className="hero-title">
                  Plan tours to dream <br />
                  Location in just a click!
                </h1>
                <p className="hero-description">culture, and landscape.</p>
                <div className="d-flex align-items-center">
                  <div className="users">
                    <img src={user1} className="user-img" alt="user-1" />
                    <img src={user2} className="user-img" alt="user-2" />
                    <img src={user3} className="user-img" alt="user-3" />
                    <img src={user4} className="user-img" alt="user-4" />
                    <span>5K +</span>
                  </div>
                  <p className="m-0 px-3 fs-6 fw-semibold">Happy Customers</p>
                  <img
                    src={hand}
                    className="img-fluid"
                    alt="hand"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Search Box */}
          <div className="container w-100 travel-box p-4 bg-dark text-white rounded z-0">
            <div className="row align-items-center justify-content-between w-100 gap-4 gap-xl-0">
              <div
                className="col-xl-2 travel-info"
                style={{
                  borderRight: "1px solid rgba(248, 250, 252, 0.08)",
                }}
              >
                <label className="form-label semibold fs-5 text-white">
                  <i className="bi bi-geo-alt-fill me-2 fs-6"></i>
                  Destination
                </label>
                <select className="form-select bg-dark text-white border-0">
                  <option>Chittagong, Turkish</option>
                  <option>Dhaka, Bangladesh</option>
                  <option>Istanbul, Turkey</option>
                </select>
              </div>

              <div
                className="col-xl-2 travel-info"
                style={{
                  borderRight: "1px solid rgba(248, 250, 252, 0.08)",
                }}
              >
                <label className="form-label semibold fs-5 text-white">
                  <i className="bi bi-airplane me-2 fs-6"></i>
                  Tour Type
                </label>
                <select className="form-select bg-dark text-white border-0">
                  <option>Pre-book Type</option>
                  <option>Instant Booking</option>
                  <option>Custom Package</option>
                </select>
              </div>

              <div
                className="col-xl-2 travel-info"
                style={{
                  borderRight: "1px solid rgba(248, 250, 252, 0.08)",
                }}
              >
                <label className="form-label semibold fs-5 text-white">
                  <i className="bi bi-clock me-2 fs-6"></i>
                  Date From
                </label>
                <input
                  type="date"
                  id="datepicker"
                  className="form-control bg-dark text-white border-0"
                />
              </div>

              <div
                className="col-xl-2 travel-info"
                style={{
                  borderRight: "1px solid rgba(248, 250, 252, 0.08)",
                }}
              >
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

              <div
                className="col-xl-2 travel-info"
                style={{
                  borderRight: "1px solid rgba(248, 250, 252, 0.08)",
                }}
              >
                <button
                  className="travel-btn py-3 px-5 fs-6 btn btn-primary fw-semibold"
                  style={{ backgroundColor: "#f26f55", border: "none" }}
                >
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
            {/* Banner 1 */}
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

            {/* Banner 2 */}
            <div className="col-lg-6 mb-4">
              <div className="banner-content z-1 py-5 px-4 rounded-3 banner-bg-2 text-white">
                <h4 className="fs-1 fw-semibold">Nearby Hotel</h4>
                <p className="pera">
                  Up to <span className="hightlights-text">50%</span> off
                </p>
                <div className="location d-flex align-items-center gap-2">
                  <i className="bi bi-geo-alt"></i>
                  <p className="name mb-0">Bangkok, Thailand</p>
                </div>
                <button className="btn banner-btn px-4">Booking now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tours */}
      <div className="tours-container section">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="section-title d-flex align-items-center flex-column">
              <p>Features Tours</p>
              <h2>
                Most Favourite Tour Place
                <br />
                in The World
              </h2>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              breakpoints={{
                1399: { slidesPerView: 4 },
                1199: { slidesPerView: 3 },
                991: { slidesPerView: 2 },
                767: { slidesPerView: 1.5 },
                0: { slidesPerView: 1 },
              }}
              className="mt-4 swiper position-relative"
            >
              {tours
                .filter(tour => tour.id >= 19 && tour.id <= 25)
                .map(tour => (
                  <SwiperSlide key={tour.id}>
                    <div className="card h-100 tour-card shadow-sm position-relative">
                      <div className="position-relative">
                        <Link to={`/TourDetails/${tour.id}`}>
                          <img
                            src={tour.image}
                            className="card-img-top rounded-3"
                            alt={tour.title}
                         />
                        </Link>
                        <i
                          className="ri-shopping-cart-2-line fs-5 text-white position-absolute top-0 end-0 m-2"
                          role="button"
                          onClick={() => handleBookNow(tour)}
                        ></i>
                      </div>
                      <div className="card-body py-3">
                        <h5 className="card-title fw-semibold mb-1">
                          {tour.title}
                        </h5>
                        <p className="mb-3">
                          <i className="ri-map-pin-line"></i>
                          {tour.location}
                        </p>
                        <div
                          className="d-flex flex-wrap justify-content-between small mb-3 p-2 rounded-2"
                          style={{
                            backgroundColor: "rgba(248, 250, 252, .08)",
                          }}
                        >
                          <div className="me-3">
                            <i className="ri-time-line"></i>
                            {tour.duration}
                          </div>
                          <div>
                            <i className="ri-user-line me-1"></i>
                            {tour.person}
                          </div>
                        </div>
                        <div className="d-flex mt-2 align-items-center justify-content-between small">
                          <div className="ms-5" style={{ color: "#8f94a3" }}>
                            From
                            <span className="text-white fw-bold">
                              ${tour.price}
                            </span>
                          </div>
                          <div>
                            <i className="text-star-fill tet-warning me-1"></i>
                            <span>
                              {tour.rating} ({tour.reviews})
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
