import React from 'react'

const NewsletterOne = ({extraClass, newsletetrStyle}) => {
    return (
        <div className={`newsletter-area ${newsletetrStyle}`}>
            <div className="container">
                <div className={`row row--0 newsletter-wrapper align-items-center ${extraClass}`}>
                    <div className="col-lg-4">
                        <div className="newsletter-section-title">
                            <h3 className="title">Stay up to Date</h3>
                            <p className="description">Sign up for our latest news & articles. We won’t give you spam mails.</p>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <form className="rn-newsletter mt_md--20 mt_sm--20" action="https://formspree.io/f/mwkjezon" method="POST">
                            <div className="form-group">
                                <input type="email" placeholder="Email Address" />
                            </div>
                            <div className="form-group">
                                <button className="btn-default">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewsletterOne;
