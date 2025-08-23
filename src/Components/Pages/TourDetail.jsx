import React from 'react'
import tourData from '../../Data/Tours.json'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from '../../../public/Images/image14.png'
import img2 from '../../../public/Images/image10.jpeg'
import img3 from '../../../public/Images/image8.jpeg'
import img4 from '../../../public/Images/image3.png'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TourDetailPage() {
    const navigate = useNavigate();

    const { id } = useParams();

    const tour = tourData.find((t) => String(t.id) === id);

    const fallbackTour = {
        id: 'fallback',
        title: 'Dusitd2 Samyan Bangkok',
        location: 'Bangkok, Thailand',
        duration: '3 days 2 Night',
        person: '2 Person',
        price: 113,
        rating: 4.7,
        reviews: 20,
        image: '/Image/image1.jpeg',
        persons: '2 Person'
    };

    const selectedTour = tour || fallbackTour;
    
    const addToCart = (tour) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const isAlreadyAdded = cart.some((item) => item.id === tour.id);

        if (isAlreadyAdded) {
            toast.info('Tour already in Cart!', {
                position: "top-right",
                autoClose: 1500,
            });
        } else {
            cart.push(tour);
            localStorage.setItem('cart', JSON.stringify(cart));
            
            window.dispatchEvent(new CustomEvent('cartUpdated', {detail: cart.length}));

            toast.success('Tour added to Cart!', {
                position: "top-right",
                autoClose: 1500,
                onClose: () => navigate('/cart') // Optional: navigate to cart on close
            });
        }
    }


  return (
    <>
        <div className="tour-details">
            <div className="tour-slider">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1.8}
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="tourSwiper"
                >
                    <SwiperSlide>
                        <img src={img1} className='tour-slide-img' alt="slide 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} className='tour-slide-img active-slide' alt="slide 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} className='tour-slide-img' alt="slide 3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} className='tour-slide-img active-slide' alt="slide 4" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        {/* Tour Details Section */}
        <div className="about-detail-section pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h4 className="tour-title">{selectedTour.title}</h4>
                        <div className="d-flex gap-3 align-items-center mb-3">
                            <span><i className='ri-map-pin-line'></i>{selectedTour.location}</span>
                            <span><i className='ri-calendar-2-line'></i>{selectedTour.duration}</span>
                            <span><i className='ri-user-3-line'></i>{selectedTour.persons}</span>
                        </div>

                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div>
                                <strong>From <span className='fs-2'>${selectedTour.price}</span></strong>
                            </div>
                            <div className="text-warning">
                                <i className='ri-star-fill'></i>
                                {selectedTour.rating} ({selectedTour.reviews} reviews)
                            </div>
                        </div>
                        <section className="mb-4">
                            <h5 className="mb-2">About</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </section>
                        <div className="row border rounded p-2">
                            <div className="col-md-6">
                                <h5 className="mb-2">Include</h5>
                                <ul className="list-unstyle-detail">
                                    <li>Welcome Breakfast</li>
                                    <li>All Entry Tickets</li>
                                    <li>Lunch & Dinner</li>
                                    <li>Evening Snacks</li>
                                    <li>First Aid</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <h5 className="mb-2">Exclude</h5>
                                <ul className="list-unstyle-detail">
                                    <li>Personal Expenses</li>
                                    <li>Unmentioned activities</li>
                                    <li>Additional Service</li>
                                </ul>
                            </div>
                        </div>

                        {/* Tour Plain */}
                        <section className="mt-4">
                            <h5 className="mb-3">Tour Plain</h5>
                            <div className="accordion" id='tourPlanAccordion'>
                                {["Day 1", "Day 2", "Day 3"].map((day, index) => (
                                    <div className="accordion-item" key={index}>
                                        <h2 className="accordion-header" id={`heading${index}`}>
                                            <button
                                                className={`accordion-button ${index > 0 ? "collapsed" : ""}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse${index}`}
                                                aria-expanded={index === 0}
                                                aria-controls={`collapse${index}`}
                                            >
                                                {day}: {selectedTour.location}
                                            </button>
                                        </h2>
                                        <div
                                            id={`collapse${index}`}
                                            className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                            aria-labelledby={`heading${index}`}
                                            data-bs-parent="#tourPlanAccordion"
                                        >
                                            <div className="accordion-body bg-dark text-white">
                                                After this, GitHub will show your fresh project, and your local repo will display the branch when you run.
                                                <ul className='list-unstyle-detail'>
                                                    <li>Personal Expenses</li>
                                                    <li>Unmentioned activities</li>
                                                    <li>Additional Service</li>
                                                </ul>
                                                {day}.
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="mt-4">
                            <h5 className="mb-2">Policy</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <ol className="list-numbered">
                                <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                                <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                                <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                            </ol>
                        </section>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 rounded-4 shadow-lg booking-widget bg-dark text-white">
                            <h6 className="text-muted mb-2">From</h6>
                            <h3 className="fw-bold text-light mb-4">
                                <span className="text-secondary">${selectedTour.price}</span>
                            </h3>
                            <form>
                                <div className="mb-3">
                                    <label className="text-light p-2">Guest</label>
                                    <select className="form-select bg-dark border-secondary text-white">
                                        <option>1 guest</option>
                                        <option>2 guest</option>
                                        <option>3 guest</option>
                                    </select>
                                </div>
                                <button
                                    type='button'
                                    className='btn btn-secondary w-100 mt-3 d-flex align-items-center justify-content-center gap-2'
                                    onClick={() => addToCart(selectedTour)}
                                >
                                    <i className="ri-shopping-cart-line fs-5"></i>
                                    <span>Book Now</span>
                                </button>
                            </form>
                            <div className="small mt-4 text-muted border-top pt-3">
                                <i className="ri-check-double-line text-success me-2"></i>
                                Free Cancellation - Up To 24 Hours In Advance
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TourDetailPage
