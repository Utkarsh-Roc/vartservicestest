import React from 'react'
import FooterFour from '../../common/footer/FooterFour'
import HeaderOne from '../../common/header/HeaderOne'
import SEO from '../../common/SEO'

function ShippingPolicy() {
    return (
        <>
            <SEO title="Blog List || Doob - React Business  Template" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-transparent" />

                {/* Start Slider Area  */}

                <div className="container rn-section-gapTop">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner pt--80 text-center">
                                <h1 className="title display-one">Shipping Policy</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                {/* Start Slider Area  */}

                <div className="container rn-section-gapTop">
                    <p>
                        <h4>Scope of Delivery</h4>
                        <p>All deliverables—including designs, websites, applications, marketing materials, and strategy documents—are digitally delivered via:</p>
                        <ul>
                            <li>Secure cloud storage links (e.g., Google Drive, Dropbox)</li>
                            <li>Email or project management tools</li>
                            <li>Direct uploads to your server or platforms (as applicable)</li>
                        </ul>
                        <h4>Delivery Timelines</h4>
                        <ul>
                            <li>Timelines vary depending on the scope of the project and are outlined in the project proposal or contract.</li>
                            <li>We provide estimated delivery dates and strive to meet them. Delays due to additional requirements, revisions, or external dependencies will be communicated in advance.</li>
                        </ul>
                        <h4>Order Confirmation</h4>
                        <ul>
                            <li>Upon receiving a signed agreement or payment, you will receive a project kickoff email with next steps, delivery schedule, and communication channels.</li>
                        </ul>
                        <h4>Revisions & Final Delivery</h4>
                        <ul>
                            <li>Most services include a specific number of revision rounds, mentioned in the proposal.</li>
                            <li>Final deliverables are provided in agreed-upon formats (e.g., .PSD, .AI, .ZIP, .PDF, website URLs, etc.)</li>
                            <li>Upon project completion and final approval, files are transferred, and access credentials (if applicable) are handed over securely.</li>
                        </ul>
                        <h4>Security & Confidentiality</h4>
                        <ul>
                            <li>All files and credentials are shared securely and kept confidential.</li>
                            <li>NDAs can be signed upon request.</li>
                        </ul>
                        <h4>Communication & Support</h4>
                        <ul>
                            <li>Our project managers are available Monday to Friday, 10:00 AM – 6:00 PM IST</li>
                            <li>Contact Details For Managing Director: <b>Rohit Jaiswal</b>
                            <li>Call: <a href="tel:8879028513">+91 88790 28513</a></li>
                            <li>Email: <a href="email:rohit@vartservices.com">rohit@vartservices.com</a></li>
                            </li>
                        </ul>
                    </p>
                    </div>
                <FooterFour />
            </main>
        </>
    )
}

export default ShippingPolicy