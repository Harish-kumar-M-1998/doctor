import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRight } from 'react-icons/fa'; // Importing an icon for the Next button

const LandingPage = () => {
    const [showSlider, setShowSlider] = useState(false);
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    // Slider settings
    const settings = {
        dots: true,
        customPaging: (i) => (
            <div className={`h-2 w-8 mx-1 rounded-full ${currentSlide === i ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
        ),
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (index) => setCurrentSlide(index),
    };

    // Slider images and corresponding content
    const slides = [
        {
            img: 'https://img.freepik.com/free-vector/doctor-examining-patient-clinic-illustrated_23-2148856559.jpg?t=st=1729591761~exp=1729595361~hmac=6178dba4f36842bbb5d9bde9a2e4be41a10845896a0f98cdf06ad1c0ebe42179&w=996',
            content: 'Welcome to Health Desk! Your one-stop solution for all health needs.',
        },
        {
            img: 'https://img.freepik.com/free-vector/flat-hand-drawn-patient-taking-medical-examination_52683-57829.jpg?t=st=1729591848~exp=1729595448~hmac=f1c9c14be0cb0d2725485ab937e9a728ed2b5851dc9f17579d7435bada669400&w=996',
            content: 'Track your health metrics and stay informed about your well-being.',
        },
        {
            img: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?t=st=1729591573~exp=1729595173~hmac=c8e3b7d7c6995343a2fb993d9c5b3faf18c60d0b65c68c401d371fe1e429b8c6&w=740',
            content: 'Connect with health professionals and get the help you need.',
        },
    ];

    // Handle clicking anywhere on the page to show slider
    const handleClick = () => {
        if (!showSlider) {
            setShowSlider(true);
        }
    };

    // Handle skip button to go to login page
    const handleSkip = () => {
        navigate('/login');
    };

    // Handle next button to move to the next slide
    const handleNext = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-gray-100 relative"
            onClick={handleClick}
        >
            {/* Skip Button */}
            <button
                className="absolute top-4 right-4 text-red-500 underline"
                onClick={handleSkip}
            >
                Skip
            </button>

            {!showSlider ? (
                // Initial Landing Image with Health Desk text
                <div className="text-center">
                    <img
                        src="https://img.freepik.com/free-photo/portrait-3d-male-doctor_23-2151107212.jpg?t=st=1729592038~exp=1729595638~hmac=c1031a7a3215e20a459f6291f2c29608b790260e5bf27f9467070c6e6bebd63b&w=740" // Replace with your image
                        alt="Landing"
                        className="mx-auto mb-4 w-full max-w-xs h-auto"
                    />

                    <h1 className="text-3xl font-bold text-gray-800">Health Desk</h1>
                </div>
            ) : (
                // Image Slider Section
                <div className="relative w-full max-w-lg">
                    <Slider {...settings} initialSlide={currentSlide}>
                        {slides.map((slide, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img
                                    src={slide.img}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-auto rounded-lg mb-4"
                                />
                                <p className="text-center text-gray-700">{slide.content}</p>
                            </div>
                        ))}
                    </Slider>



                </div>
            )}
            {currentSlide < slides.length - 1 && (
                <button
                    className="absolute bottom-4 right-4 bg-blue-500 text-white px-2 py-2 rounded-full flex items-center"
                    onClick={handleNext}
                >
                    <FaArrowRight className="mr-1" />
                    Next
                </button>
            )}
        </div>
    );
};

export default LandingPage;
