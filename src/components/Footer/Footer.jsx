import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <section className='f-wrapper'>
            <div className='paddings innerWidth flexCenter f-container'>
                <div className='flexColStart f-left'>
                    <img src='./nexus4.png' alt='' width={120}/>
                    <span className='secondaryText'>Our vision is to make the world<br/>
                    a better place.</span>
                </div>

                <div className='flexColCenter f-right'>
                    <span className='primaryText'>Copyright © 2025 NEXUS</span>
                    <span className='secondaryText'>All rights reserved</span>
                </div>
            </div>
        </section>

    )
}

export default Footer
