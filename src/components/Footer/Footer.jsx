import React from 'react'
import './Footer.css'
import PrimaryFooter from './PrimaryFooter.jsx'

const Footer = () => {
    return (
        <>
            <footer id='footer'>
                <div className="site-footer-primary">
                    <div className="container">
                        <div className="row justify-content-between gx-4 gx-lg-5 row-cols-sm-1 row-cols-md-5 row-cols-xl-3">
                            <PrimaryFooter />
                        </div>
                    </div>
                </div>
                <div className="secondary-footer">
                    <div className="container">
                        <div className="row">
                            <div className="footer-copyright">
                                <p>Copyright © 2024 Clothing Store | Powered by Clothing Store</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer