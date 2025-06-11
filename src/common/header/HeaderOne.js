import {useState, useRef, useEffect} from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "../../elements/logo/Logo";
import Nav from './Nav';
import MobileMenu from './MobileMenu';
import Darkmode from "./Darkmode";
import useStickyHeader from "./useStickyHeader";
import { Link } from "react-router-dom";

const HeaderOne = ({btnStyle, HeaderSTyle}) => {
    const [ofcanvasShow, setOffcanvasShow] = useState(false);
    const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
    const dropdownRef = useRef(null);
    
    const onCanvasHandler = () => {
        setOffcanvasShow(prev => !prev);
    }
    
    const ref = useRef();
    let [check, setCheck] = useState(true);
    const sticky = useStickyHeader( 50 );
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
                                            className={`btn-default header-pay-btn ${btnStyle}`}
                                            style={{padding: "0px 30px 0px 15px", position: "relative"}}
                                        >
                                            Pay Now
                                            <svg 
                                                className="header-dropdown-chevron"
                                                width="12" 
                                                height="12" 
                                                viewBox="0 0 24 24" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                strokeWidth="2"
                                                style={{ 
                                                    position: "absolute",
                                                    right: "8px",
                                                    top: "50%",
                                                    transform: showCurrencyDropdown ? "translateY(-50%) rotate(180deg)" : "translateY(-50%) rotate(0deg)",
                                                    transition: "transform 0.2s ease"
                                                }}
                                            >
                                                <path d="M6 9l6 6 6-6"/>
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
            <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler}  />
        </>
    )
}
export default HeaderOne;