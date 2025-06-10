import React from 'react'
import FooterFour from '../../common/footer/FooterFour'
import HeaderOne from '../../common/header/HeaderOne'
import SEO from '../../common/SEO'

function RefundAndCancellation() {
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
                                <h1 className="title display-one">Refund & Cancellations</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                {/* Start Slider Area  */}

                <div className="container rn-section-gapTop">
                    <p>V-Art Services provides an extensive portfolio for you to view before hiring us for your project so you can see the quality level of our work and are completely comfortable working with us. If you have any questions or reservations, please contact us prior to making a payment for our services. All changes to orders or projects, refund requests or cancellations must be received in writing by mail, email or fax. Thank you!</p>
                    <h3>Eligibility for Refund</h3>
                    <p>Refunds may be granted in the following scenarios:
                        <ul>
                            <li>Service was not delivered as described or was not initiated due to a technical or operational issue on our end.</li>
                            <li>Duplicate payment due to a system error.</li>
                            <li>Cancellations made within the eligible period as stated in the service terms.</li>
                        </ul>
                    </p>
                    <h3>Refund Request Process</h3>
                    <p>To initiate a refund request, please email us at rohit@vartservices.com with:
                        <ul>
                            <li>Full name</li>
                            <li>Service purchased</li>
                            <li>Transaction ID or invoice</li>
                            <li>Reason for requesting a refund</li>
                        </ul>
                        Refund requests must be submitted within 3 days of the original payment date.
                    </p>
                    <h3>Refund Approval & Timeline</h3>
                    <p>Once your request is received, we will:
                        <ul>
                            <li>Review your request and respond within 2 working days</li>
                            <li>If approved, initiate the refund process within 2–3 working days</li>
                        </ul>
                        <b>Bank Credit Timeline:</b>
                        Once processed, the refunded amount may take 5–7 working days to reflect in your bank account or original method of payment, depending on your bank or payment provider.<br />
                        We will notify you via email once your refund has been processed, including transaction details and reference number.
                    </p>
                    <h3>Non-Refundable Services</h3>
                    <p>The following are generally non-refundable:
                        <ul>
                            <li>Services already rendered or completed</li>
                            <li>Subscription plans after the billing cycle has started</li>
                            <li>Late cancellation or change-of-mind cases not covered under the eligibility criteria</li>
                        </ul>
                    </p>
                    <h3>Contact Information</h3>
                    <p>For any questions related to refunds or this policy, please contact us: <br />
                    📞 +91 88790 28513 <br />
                    📧 rohit@vartservices.com <br />
                    </p>
                </div>
                <FooterFour />
            </main>
        </>
    )
}

export default RefundAndCancellation