import React from 'react'
import './header.css'
import { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'


const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpened ? '-100%' : '0' }
        }
    };

    return (
        <div>
            <section className='h-wrapper'>
                <div className='flexCenter paddings innerWidth h-container'>

                    <img src='./nexus4.png' alt='' width={100} className='img' />

                    <OutsideClickHandler onOutsideClick={() => {
                        setMenuOpened(false);
                    }}>
                        
                        <div className='h-menu'
                            style={getMenuStyles(menuOpened)}
                        >
                            <a href=''>
                                Residencies
                            </a>
                            <a href=''>Our Value</a>
                            <a href=''>Contact Us</a>
                            <a href=''>Get Started</a>
                            <button className='btn'>

                                <a href=''>Contact</a>

                            </button>
                        </div>
                    </OutsideClickHandler>
                    <div className='menu-icon' onClick={() => setMenuOpened((prev) => (!prev))}>
                        <BiMenuAltRight size={30} />

                    </div>
                </div>

            </section>
        </div>
    )
}

export default Header
