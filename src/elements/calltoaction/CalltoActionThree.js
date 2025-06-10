import React from 'react';
import { Link } from 'react-router-dom';

const callToActionData = {
    title: "Lets Start A Project?",
    // subtitle: "Finest choice for your home & office",
    btnText: "Contact Now",
}

const CalltoActionThree = () => {
    return (
        <div className="rn-callto-action clltoaction-style-default style-3 bg_image"  style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg1.jpg)`}}>
            <div className="container">
                <div className="row row--0 align-items-center content-wrapper">
                    <div className="col-lg-8">
                        <div className="inner">
                            <div className="content text-left">
                                <h2 className="title">{callToActionData.title}</h2>
                                <h6 className="subtitle">{callToActionData.subtitle}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="call-to-btn text-left text-lg-right">
                            <Link className="btn-default" to="/contact">{callToActionData.btnText}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CalltoActionThree;