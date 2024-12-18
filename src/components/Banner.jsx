import React, { useState, useEffect } from 'react';

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const banners = [
    "/src/style/banner_promo1.webp",
    "/src/style/banner_promo2.jpg",
    "/src/style/banner_promo3.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="banner">
      <img src={banners[currentIndex]} alt="Banner" />
    </div>
  );
}

export default Banner;
