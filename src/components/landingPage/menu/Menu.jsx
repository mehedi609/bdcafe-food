import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import image1 from '../../../assets/addl-images/breakfast-thali.jpeg';
import image2 from '../../../assets/addl-images/italian-cobmo-meal.jpeg';
import image3 from '../../../assets/addl-images/enchilladas.jpeg';
import './Menu.css';

export default function Menu() {
  const typingAnimation = useRef(null);

  useEffect(() => {
    const typed = new Typed(typingAnimation.current, {
      strings: [
        'Our Daily Specials',
        'Burger Bonanza',
        'Sumptuous Salads',
        'Southern Delicacies',
      ], // Strings to display
      typeSpeed: 40,
      backSpeed: 60,
      loop: true,
      showCursor: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  const renderMenu = () => {
    return (
      <section>
        <span className="typed-text" ref={typingAnimation}></span>
        <div className="container">
          <a href="/browse">
            <div className="d-flex justify-content-center align-items-center flex-wrap">
              <div className="card" style={{ width: '192px' }}>
                <img className="card-img-top" src={image1} alt="Dish 1." />
                <div className="card-body text-muted">
                  <h5 className="card-title">South Indian Breakfast Thali</h5>
                  <p className="card-text">
                    Assorment of delicious soft idli, crunchy dosa served with
                    green chutnry and sambar.
                  </p>
                </div>
              </div>

              <div className="card" style={{ width: '192px' }}>
                <img className="card-img-top" src={image2} alt="Dish 2." />
                <div className="card-body text-muted">
                  <h5 className="card-title">Italian Combo Meal</h5>
                  <p className="card-text">
                    Assortment of delicious pizza with multiple topppings, and
                    spaghetti.
                  </p>
                </div>
              </div>

              <div className="card" style={{ width: '192px' }}>
                <img className="card-img-top" src={image3} alt="Dish 3." />
                <div className="card-body text-muted">
                  <h5 className="card-title">Mexican Combo Meal</h5>
                  <p className="card-text">
                    Assortment of crunchy dorito served with salsa sausce and
                    mayonnaise.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    );
  };
  return <>{renderMenu()}</>;
}
