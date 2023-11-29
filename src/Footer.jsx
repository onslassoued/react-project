import React from 'react'
import img from './destinaion/github.png'
import img1 from './destinaion/insta.png'
import img2 from './destinaion/facebook.png'
import img3 from './destinaion/linkedin.png'
import './css.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="contact">
                <a href="https://www.linkedin.com/in/ons-lassoued-93673a247/"><img src={img3}
                    alt="linkedin"/></a>
                <a href="https://github.com/onslassoued"><img src={img} alt="github" width="23px"/></a>
                <a href="https://www.instagram.com/onslassoued17/?hl=fr"><img src={img1}
                    alt="instagram"/></a>
                <a href="https://www.facebook.com/anis.lassoued.5070"><img src={img2} alt="facebook"/>
                </a>
            </div>
            <p>Created By Ons lassoued</p>
        </div>
    )
}

export default Footer
