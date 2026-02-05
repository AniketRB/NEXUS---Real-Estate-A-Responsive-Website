import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import "./hero.css"
import CountUp from 'react-countup'
const Hero = () => {
  return (
    <div>
      <section className='hero-wrapper'>
        <div className='hero-container paddings innerWidth flexCenter '>
          <div className='hero-left flexColStart'>
            <div className='hero-title'>
              <div className='orange-circle' />
              <h1>Dicover <br /> Most Suitable <br /> property </h1>
            </div>

            <div className='flexColStart hero-desc'>
              <span className='secondaryText'>
                Find a variety of properties that suit your very reality
              </span>
              <span className='secondaryText'>
                Forget all difficulties in finding a residence for you
              </span>
            </div>

            <div className='flexCenter search-bar'>
              <HiLocationMarker color='var(--blue)' size={25} />
              <input type='text'/>
              <button className='btn'>Search</button>
            </div>

            <div className='flexCenter stats'>
              <div className='flexColCenter stat'>
                <span>
                  <CountUp start={8800} end={9000} duration={4} />
                  <span>+</span>
                </span>

                <span className='secondaryText'>
                  Premium Products
                </span>
              </div>

              <div className='flexColCenter stat'>
                <span>
                  <CountUp start={1950} end={2000} duration={4} />
                  <span>+</span>

                </span>
                <span className='secondaryText'>
                  Happy Customers
                </span>
              </div>
              <div className='flexColCenter stat'>
                <span>
                  <CountUp end={28} />
                  <span>+</span>

                </span>
                <span className='secondaryText'>
                  Awards Won
                </span>
              </div>    

            </div>
          </div>

          <div className='flexCenter hero-right'>
            <div className='image-container'>
              <img src='./hero-image.png' alt='' />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
