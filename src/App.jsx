import React, { useState, useEffect, useRef } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import ReactPlayer from 'react-player';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  // Email subscription state
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [isMobile, setIsMobile] = useState(false)
  const [mobileEmailMode, setMobileEmailMode] = useState(false)
  const emailInputRef = useRef(null)

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Handle email subscription
  const handleEmailSubmit = async (e) => {
    e.preventDefault()
    
    if (!email.trim()) {
      setErrorMessage('Please enter your email address.')
      setShowError(true)
      setShowSuccess(false)
      return
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.')
      setShowError(true)
      setShowSuccess(false)
      return
    }

    setIsSubmitting(true)
    setShowError(false)
    setShowSuccess(false)

    try {
      const formData = new FormData()
      formData.append('EMAIL', email)
      formData.append('email_address_check', '')
      formData.append('locale', 'en')

      await fetch('https://e381e08d.sibforms.com/serve/MUIFADfvPCz-ZAHZQ4ulklPiVS2KlIQZC0qPvRn_vAV0AKyBQBmF5wAzDXpMsucY62Lj7pZ1CWxoXgToukAE6Gni0R5h2IML4m7BY44yUZ0qnJqBiOjdGIXm2MQftqlJzSqgjEJLUGR-TMxP7MEsF5LCZryYEwuzaDi7IPzDnGZP6WD-0-OZvtQ3_HPPuCWAaXXF08KHTg3jScCW', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      })

      // Assume success since we can't read the response with no-cors
      setTimeout(() => {
        setShowSuccess(true)
        setShowError(false)
        setEmail('')
        setIsSubmitting(false)
      }, 1000)

    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.')
      setShowError(true)
      setShowSuccess(false)
      setIsSubmitting(false)
    }
  }

  // Detect mobile viewport and handle resize
  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth <= 768)
    updateIsMobile()
    window.addEventListener('resize', updateIsMobile)
    return () => window.removeEventListener('resize', updateIsMobile)
  }, [])

  // Focus input when mobile mode is activated
  useEffect(() => {
    if (mobileEmailMode && emailInputRef.current) {
      emailInputRef.current.focus()
    }
  }, [mobileEmailMode])

  //Carrousel
  const RotatingCarousel = () => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startRotation, setStartRotation] = useState(0);
  const carouselRef = useRef(null);
  
  const cards = [
    {
      id: 1,
      title: "Climate Positive Nutrition",
      color: "#1E963C"
    },
    {
      id: 2,
      title: "Fashion",
      color: "#FF8200"
    },
    {
      id: 3,
      title: "Consumption",
      color: "#46E6FF"
    }
  ];

  useEffect(() => {
    let interval = null;
    
    // Only auto-rotate when not dragging
    if (!isDragging) {
      interval = setInterval(() => {
        setRotation(prev => prev + 120);
      }, 2500); // Increased to 4 seconds to allow for snap animations
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setStartRotation(rotation);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - startX;
    const rotationDelta = deltaX * 0.2; // Sensitivity factor
    setRotation(startRotation - rotationDelta); // Negative for natural feel
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Snap to nearest multiple of 120 degrees
    setRotation(prev => Math.round(prev / 120) * 120);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setStartRotation(rotation);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const deltaX = e.touches[0].clientX - startX;
    const rotationDelta = deltaX * 0.5; // Sensitivity factor
    setRotation(startRotation - rotationDelta);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    // Snap to nearest multiple of 125 degrees
    setRotation(prev => Math.round(prev / 125) * 125);
  };

  // Add global mouse/touch event listeners
  useEffect(() => {
    const handleGlobalMouseMove = (e) => handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();
    const handleGlobalTouchMove = (e) => handleTouchMove(e);
    const handleGlobalTouchEnd = () => handleTouchEnd();

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('touchmove', handleGlobalTouchMove);
      document.addEventListener('touchend', handleGlobalTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchmove', handleGlobalTouchMove);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
    };
  }, [isDragging, startX, startRotation]);
  
  return (
    <div className="carousel-outer">
      <div className="carousel-wrapper">
        {/* Carousel Container with 3D Perspective */}
        <div 
          ref={carouselRef}
          className={`carousel ${isDragging ? 'is-grabbing' : 'is-grab'}`}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Rotating Container */}
          <div 
            className="carousel-rotator"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateY(${-rotation}deg)`,
              transitionDuration: isDragging ? '0ms' : '1200ms'
            }}
          >
            {cards.map((card, index) => {
              const cardRotation = index * 120;
              
              return (
                <div
                  key={card.id}
                  className="carousel-card-wrapper"
                  style={{
                    transform: `rotateY(${cardRotation}deg) translateZ(200px)`,
                    transformOrigin: 'center center'
                  }}
                >
                  <div className="carousel-card" style={{ backgroundColor: card.color }}>
                    {/* Coming Soon Pill - Top Left */}
                    <div className="carousel-pill-container">
                      <div className="carousel-pill">
                        Coming Soon
                      </div>
                    </div>
                    
                    {/* Title - Bottom Left */}
                    <div className="carousel-title">
                      <h3>{card.title}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

       
      </div>
    </div>
  );
};

  return (
    <>
    
      <div className='StickyContainer'>
        <div className='mainContainer'>
          <img src={"images/logo/logo_monogram.svg"} className="logo" alt="something monogram logo" />
        <div className='intro'>
        <div className="header-container">
          <span className="weare">We are</span>
          <img src={"images/logo/logo.svg"} className="something"  alt="Something logo" />
        </div>
        
          <h1 className='header'>Your climate companion.</h1>        
        </div>
      <p className='medium'>
        We're here to make climate action easier and more uplifting — starting with one of highest impact actions you can take: green banking.
        </p>

        <video className='teaserVideo'
          src="videos/somethingTeaser.mp4"
          autoPlay
          controls
        ></video>

        <h2 className='mission'>With <span className='highlightText'>$41Tn already divested from fossil fuels</span>, why not join the movement and switch to a green bank?</h2>

      
  <div className='comingsoonContainer'>
    <div className='iconsContainer'>
      <img src={"images/buttons/playstore_grey.svg"} className="storeIcon" alt="play store logo" />
      <img src={"images/buttons/apple_grey.svg"} className="storeIcon" alt="play store logo" />
    </div>
    <p>Coming soon on Google Play and App Store</p>
  </div>

        <div className='goalsContainer'>
          <div className='goal'>
            <p> For our Beta launch we're releasing a free step-by-step course to allow you to have a massive impact, fast: <span className='bold'>green banking</span>.</p>
          </div>
          <div className='goal'>
            <p>Our goal is to - as a community -  <span className='bold'>move $2m away from banks invested in fossil fuels</span> in 100 days.</p>
          </div>
        </div>

        <h3 className='header'>Stay tuned for future climate companion courses, including</h3>
        </div>



         {/* CARROUSEL 1 */}

        {/* <div className='courseContainer'>
          <div className='course'>
            <span className='pill'> Coming soon</span>
            <h4> Climate Positive Nutrition</h4>
          </div>
          <div className='course'>
            <span className='pill'> Coming soon</span>
            <h4> Fashion</h4>
          </div>
          <div className='course'>
            <span className='pill'> Coming soon</span>
            <h4> Consumption</h4>
          </div>
        </div> */}


        {/* CARROUSEL 2 */}
        <RotatingCarousel />
        {/* END OF CARROUSEL */}





        <p className='medium'>
        We're here to make climate action easier and more uplifting — starting with one of the highest impact actions you can take: green banking.
        </p>

        <img src={"images/logo/logo.svg"} className="somethingAnimation"  alt="Something logo" />

        <div className='downloadContainer'>
          {/* Success/Error Messages */}
          {showSuccess && (
            <div className='messageContainer'>
            <p className='success-message'>Thanks for subscribing! We'll keep you updated.</p>
            </div>
          )}
          
          {showError && (
            <div className='messageContainer'>
            <p className='error-message'>{errorMessage}</p>
            </div>
          )}
          
          {/* Email form: desktop shows input+button; mobile reveals input after first tap */}
          <div className={`email-form-inline ${isMobile && mobileEmailMode ? 'mobile-inline' : ''}`}>
            {(!isMobile || (isMobile && mobileEmailMode)) && (
              <input
                ref={emailInputRef}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className='email-input-inline'
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleEmailSubmit(e)
                  }
                }}
              />
            )}
            <button 
              onClick={(e) => {
                if (isMobile && !mobileEmailMode) {
                  e.preventDefault()
                  setMobileEmailMode(true)
                  return
                }
                handleEmailSubmit(e)
              }}
              disabled={isSubmitting}
              className='storeButton'
              aria-label={isMobile && mobileEmailMode ? 'Send email' : 'Join the Waiting list'}
              title={isMobile && mobileEmailMode ? 'Send' : 'Join the Waiting list'}
            >
              {isSubmitting ? (
                'Subscribing...'
              ) : isMobile && mobileEmailMode ? (
                // Simple send icon (paper plane)
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z" fill="currentColor"/>
                </svg>
              ) : (
                'Join the Waiting list'
              )}
            </button>
          </div>
          
          {/* Hidden honeypot field */}
          <input 
            type="text" 
            name="email_address_check" 
            defaultValue=""
            style={{ display: 'none' }}
            tabIndex="-1"
            autoComplete="off"
          />
        </div>

      </div>
      
      <div className="thanks-container">
        <span className="thanksfor">Thanks for doing</span>
        <img src={"images/logo/logo.svg"} className="something"  alt="Something logo" />
      </div>

      <p className='small'>
      (Please note: For now participants must live inside the US).
      </p>

      <div className='footer'>
        <p>
        Something and its app (the "App") are a project of We Are Something LLC.The Site provides ideas and information on climate-related financial institutions and products and their relation to environmental issues.All information on the App is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the App. 
        <br/>
        The App does not provide financial advice and our ratings do not constitute endorsements or financial recommendations. The ratings provided are for informational purposes and not financial advice. Users rely on them at their own risk.
        <br/>
        While we encourage individuals to consider moving their money away from certain institutions financing fossil fuels, this guidance is based on ethical and environmental values rather than financial advice. We do not provide recommendations regarding financial performance or risk, and any decisions should be made with consideration of your personal financial situation.We Are Something LLC is not responsible for any financial losses related to any actions (such as opting for a financial product) taken as a result of content from this App. We Are Something LLC is also unable to account for any other issues that visitors encounter with external third parties, such as customer service or data privacy issues encountered with financial institutions linked on this website.
        </p>
        <div className='copyrightContainer'>
          <span >Copyright something™ {new Date().getFullYear()}</span>
        
          <div className='termsAndConditionsContainer'>
            <a className='termsAndConditions' href='https://docs.google.com/document/d/17qYI6ZTA8dPJuOFr-4f-AGIab6I8EqXWjo_i2tPibWc/edit?usp=sharing'>Privacy Policy</a>
            <a className='termsAndConditions' href='https://docs.google.com/document/d/17qYI6ZTA8dPJuOFr-4f-AGIab6I8EqXWjo_i2tPibWc/edit?usp=sharing'>Terms of Use</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App