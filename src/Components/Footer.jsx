import React from "react";
import '../Styles/Footer.css'
import facebook from '../Assests/facebook-logo.png'
import instagram from '../Assests/instagram-logo.png'
import youtube from '../Assests/youtube-logo.png'
import openlogo from '../Assests/open-icon.png'

export default function Footer() {
    return (
        <>
            <div id="footer">
                <div className="footer-upper">
                    <div className="general-sec">
                        <h2> General</h2>
                        <div className="general-links">
                            <a href="https://cutm.ac.in/" target="_blank" rel="noopener noreferrer">Visit Official Website  </a>
                            <img className="open-logo" src={openlogo} alt='openlogo' />
                        </div>


                    </div>

                    <div className="social-media">
                        <h2> Social media </h2>
                        <div className="social-links">
                            <a href="https://www.facebook.com/centurionuniversity/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook-logo" /></a>
                            <a href="https://www.instagram.com/officialcenturionbhubaneswar/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="facebook-logo" /></a>
                            <a href="https://www.youtube.com/channel/UCy2a2NdleGSGlEd5FxyOcOA" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="facebook-logo" /></a>
                        </div>

                    </div>
                </div>
                <div className="horizontal-line"> </div>
                <div className="footer-lower">
                    <p> © CUTM 2023 | Visit us at <a href="https://cutm.ac.in/" target="_blank" rel="noopener noreferrer">cutm.ac.in</a> for more datails </p>
                </div>


            </div>



        </>
    )
}