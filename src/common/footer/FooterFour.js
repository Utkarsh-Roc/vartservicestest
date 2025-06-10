import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import CalltoActionSeven from "../../elements/calltoaction/CalltoActionSeven";
import footerOne from "../../data/footer/footerOne.json";
import NewsletterOne from "./NewsletterOne";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiNavigation } from "react-icons/fi";
import FloatingWhatsApp from 'react-floating-whatsapp';
import img1 from '../logo.png';

const footerIntem = footerOne[0];
const footerIntemOne = footerOne[1];
const footerIntemTwo = footerOne[2];
const footerIntemThree = footerOne[3];
const footerIntemFour = footerOne[4];
const footerIntemFive = footerOne[5];

const indexOneLink = (footerIntemOne.quicklink);
const indexTwoLink = (footerIntemTwo.quicklink);
const indexThreeLink = (footerIntemThree.quicklink);

const FooterFour = () => {
    const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowCurrencyDropdown(false);
            }
        };

        if (showCurrencyDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [showCurrencyDropdown]);

    const handleCurrencySelect = (currency) => {
        let url = "";

        switch (currency) {
            case "INR":
                url = "https://rzp.io/rzp/jobspayment";
                break;
            case "USD":
                url = "https://rzp.io/rzp/jobspaymentsusd"; // Replace with actual USD link
                break;
            case "EUR":
                url = "https://rzp.io/rzp/jobspaymenteur"; // Replace with actual EUR link
                break;
            default:
                return;
        }

        window.open(url, "_blank");
        setShowCurrencyDropdown(false);
    };

    const handleDropdownToggle = (e) => {
        e.stopPropagation();
        setShowCurrencyDropdown((prev) => !prev);
    };

    return (
        <>
            <footer className="rn-footer footer-style-default no-border">
                <h2 className="title" style={{textAlign: "center", paddingTop: "60px"}}>Payment Options</h2>
                <div className="row" style={{textAlign: "center", alignItems: "center", paddingTop: "60px"}}>
                    <div className="col-md-6">
                        <div className="ButtonContainer" style={{ position: "relative", display: "inline-block" }} ref={dropdownRef}>
                            <button
                                onClick={handleDropdownToggle}
                                className="PaymentButton-Button PaymentButton-Button--rzpTheme currency-dropdown-button"
                            >
                                <svg className="mysvg" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.077 6.476l-.988 3.569 5.65-3.589-3.695 13.54 3.752.004 5.457-20L7.077 6.476z" fill="#fff"></path>
                                    <path d="M1.455 14.308L0 20h7.202L10.149 8.42l-8.694 5.887z" fill="#fff"></path>
                                </svg>
                                <div className="PaymentButton-contents">
                                    <span className="PaymentButton-text">Pay Now</span>
                                    <div className="PoweredBy">Secured by Razorpay</div>
                                </div>
                                <svg 
                                    className="dropdown-chevron"
                                    width="12" 
                                    height="12" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2"
                                    style={{ 
                                        transform: showCurrencyDropdown ? "rotate(180deg)" : "rotate(0deg)"
                                    }}
                                >
                                    <path d="M6 9l6 6 6-6"/>
                                </svg>
                            </button>

                            {showCurrencyDropdown && (
                                <ul className="currency-dropdown">
                                    {[
                                        { code: "INR", symbol: "₹", name: "Indian Rupee" },
                                        { code: "USD", symbol: "$", name: "US Dollar" },
                                        { code: "EUR", symbol: "€", name: "Euro" }
                                    ].map((currency, index) => (
                                        <li
                                            key={currency.code}
                                            className={`currency-option ${index < 2 ? 'currency-option-border' : ''}`}
                                            onClick={() => handleCurrencySelect(currency.code)}
                                        >
                                            <div className="currency-content">
                                                <span className="currency-symbol">
                                                    {currency.symbol}
                                                </span>
                                                <div className="currency-details">
                                                    <div className="currency-code">
                                                        Pay in {currency.code}
                                                    </div>
                                                    <div className="currency-name">
                                                        {currency.name}
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    <div className="col-md-6 text-center">
                        <h4>Pay By Capital One Bank</h4>
                        <img src='images/logo/capitalone.jpg' style={{width: "300px", height: "auto", borderRadius: "10px"}}></img>
                        <p>Email us for bank details: <a href='mailto:rohit@vartservices.com'>rohit@vartservices.com</a></p>
                    </div>
                </div>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            {/* Start Single Widget  */}
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <h4 className="title">{footerIntemOne.title}</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            {indexOneLink.map((data, index) => (
                                                <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <h4 className="title">{footerIntemThree.title}</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            {indexTwoLink.map((data, index) => (
                                                <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <div className="widget-menu-top">
                                        <h4 className="title">{footerIntemTwo.title}</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                {indexThreeLink.map((data, index) => (
                                                    <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <h4 className="title">{footerIntemFive.title}</h4>
                                    <div className="inner">
                                        <p>Call: <a href="tel:8879028513">+91 88790 28513</a><br />
                                            Email: <a href="email:rohit@vartservices.com">rohit@vartservices.com</a><br />
                                            Address: 6, Business Point, Paliram Rd, Lohana Colony, Andheri West, Mumbai, Maharashtra 400058</p>

                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.725299773941!2d72.8440328!3d19.1197033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9ec60b25171%3A0x9cfe4b0f91948268!2sV-ART%20SERVICES%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1748459608133!5m2!1sen!2sin" width="auto" height="auto" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                                        <ul className="social-icon social-default justify-content-start">
                                            <li><a href="https://www.facebook.com/people/V-ART-Services/100063819053620/" target="_blank"><FiFacebook /></a></li>
                                            <li><a href="https://twitter.com/vart_services" target="_blank"><FiTwitter /></a></li>
                                            <li><a href="https://www.instagram.com/vartservices.pvt.ltd/" target="_blank"><FiInstagram /></a></li>
                                            <li><a href="https://www.linkedin.com/company/v-art-services-pvt-ltd/" target="_blank"><FiLinkedin /></a></li>
                                        </ul>
                                        <h5 style={{marginTop: "40px"}}>Pay By</h5>
                                        <img src='/images/logo/razorpay.png' style={{width: "130px", borderRadius: "10px", marginRight: "10px"}}></img>
                                        <img src='/images/logo/capitalone.jpg' style={{width: "130px", borderRadius: "10px"}}></img>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}
                        </div>
                    </div>
                </div>
                <NewsletterOne newsletetrStyle="rn-newsletter-default" extraClass="border-top-bottom" />
                <div className="copyright-area copyright-style-one no-border">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="copyright-left">
                                    <ul className="ft-menu link-hover">
                                        <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                                        <li><Link to="/termsandconditions">Terms And Condition</Link></li>
                                        <li><Link to="/refundpolicy">Refund & Cancellation</Link></li>
                                        <li><Link to="/shippingpolicy">Shipping Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="copyright-right text-center text-md-right">
                                    <p className="copyright-text">© V-Art Services Pvt Ltd {new Date().getFullYear()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <FloatingWhatsApp
                phoneNumber="8879028513"
                accountName="V-Art Services Pvt Ltd"
                allowEsc
                allowClickAway
                notification
                notificationSound
                avatar={img1}
                darkMode
                styles={{ zIndex: 1, bottom: "95px" }}
            />
        </>
    )
}

export default FooterFour;