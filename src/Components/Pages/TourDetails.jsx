import React from 'react'
import tourData from '../../Data/Tours.json'
import { Swiper, SwiperSlide } from 'swiper/types';
import { Autoplay } from 'swiper';
import 'swiper/css';
import img1 from '../../../public/Images/image14.png'
import img2 from '../../../public/Images/image10.jpeg'
import img3 from '../../../public/Images/image8.jpeg'
import img4 from '../../../public/Images/image3.png'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';



function TourDetail() {

    const [ showToast, setShowToast ] = useState(false);
    const navigate = useNavigate();

    const { id } = useParams();

    const tour = tourData.find((t) => String(t.id) === id);

    const fallbackTour = {
        title: 'Dusitd2 Samyan Bangkok',
        location: 'Bangkok, Thailand',
        duration: '3 days 2 Night',
        person: '2 Person',
        price: 113,
        rating: 4.7,
        reviews: 20,
        image: '/Image/image1.jpeg'
    };

    const selectedTour = tour || fallbackTour;


  return (
    <>
        <div className="tour-details">
            <div className="tour-slider">
                <Swiper
                    modules={{Autoplay}}
                    spaceBetween={1.8}
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
                        <div className="tour-title">
                            {tourtitle}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TourDetail
