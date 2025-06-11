import { useState, useRef, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "../../elements/logo/Logo";
import Nav from './Nav';
import MobileMenu from './MobileMenu';
import Darkmode from "./Darkmode";
import useStickyHeader from "./useStickyHeader";
import { Link } from "react-router-dom";

const HeaderOne = ({ btnStyle, HeaderSTyle }) => {
    const [ofcanvasShow, setOffcanvasShow] = useState(false);
    const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const onCanvasHandler = () => {
        setOffcanvasShow(prev => !prev);
    }

    const ref = useRef();
    let [check, setCheck] = useState(true);
    const sticky = useStickyHeader(50);
    const headerClasses = `header-default ${(sticky && check) ? 'sticky' : ''}`
    const { clientHeight } = ref;

    const checkChange = (value) => {
        setCheck(value);
    };

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
                url = "https://rzp.io/rzp/jobspaymentsusd";
                break;
            case "EUR":
                url = "https://rzp.io/rzp/jobspaymenteur";
                break;
            default:
                return;
        }

        window.open(url, "_blank");
        setShowCurrencyDropdown(false);
    };

    const handleDropdownToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setShowCurrencyDropdown((prev) => !prev);
    };

    return (
        <>
            <header ref={ref} className={`rn-header header-default ${HeaderSTyle} ${headerClasses}`}>
                <div className="container position-relative">
                    <div className="row align-items-center row--0">
                        <div className="col-lg-3 col-md-6 col-4">
                            <Logo
                                image={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                                image2={`${process.env.PUBLIC_URL}/images/logo/logo-dark.png`}
                            />
                        </div>
                        <div className="col-lg-9 col-md-6 col-8 position-static">
                            <div className="header-right">
                                <nav className="mainmenu-nav d-none d-lg-block">
                                    <Nav />
                                </nav>
                                <div className="header-btn">
                                    <div className="header-payment-dropdown" style={{ position: "relative", display: "inline-block" }} ref={dropdownRef}>
                                        <button
                                            onClick={handleDropdownToggle}
                                            className="PaymentButton-Button PaymentButton-Button--rzpTheme currency-dropdown-button header-payment-button">
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
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </button>


                                        {showCurrencyDropdown && (
                                            <ul className="header-currency-dropdown">
                                                {[
                                                    { code: "INR", symbol: "₹", name: "Indian Rupee" },
                                                    { code: "USD", symbol: "$", name: "US Dollar" },
                                                    { code: "EUR", symbol: "€", name: "Euro" }
                                                ].map((currency, index) => (
                                                    <li
                                                        key={currency.code}
                                                        className={`header-currency-option ${index < 2 ? 'header-currency-option-border' : ''}`}
                                                        onClick={() => handleCurrencySelect(currency.code)}
                                                    >
                                                        <div className="header-currency-content">
                                                            <span className="header-currency-symbol">
                                                                {currency.symbol}
                                                            </span>
                                                            <div className="header-currency-details">
                                                                <div className="header-currency-code">
                                                                    Pay in {currency.code}
                                                                </div>
                                                                <div className="header-currency-name">
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
                                <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                                    <div className="hamberger">
                                        <span className="hamberger-button" onClick={onCanvasHandler}><FiMenu /></span>
                                    </div>
                                </div>
                                <Darkmode />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler} />
        </>
    )
}
export default HeaderOne;