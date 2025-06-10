import React from 'react';
import Slider from "react-slick";
import { slickDot } from "../../utils/script";

const TestimonialData = [
    {
        form: "Canada",
        description: "I had a positive experience working with them. There were responsive to suggestions and accommodated my needs. I would highly recommend anybody looking to make a website.",
        name: "Sushma Wadhwania",
        subtitle: "",
        image: "testimonial-dark-01"
    },
    {
        form: "",
        description: "Very well designed website. Keep up the good work.",
        name: "Meher",
        subtitle: "",
        image: "testimonial-dark-02"
    },
    {
        form: "",
        description: "It was a pleasure working with V-Art Services they have a significant team which highly experienced, creative, reliable, and professional in their approach from the creation of the concept to designing and development. I knew I could rely on their technical skills and initiative to deliver superb results on time.",
        name: "Vishal Pawar",
        subtitle: "",
        image: "testimonial-dark-03"
    },
    {
        form: "",
        description: "Cooperative members Fast work Good team work Nice coordination with client Awesome team Superb programming and designing according to the clients taste",
        name: "Karan Jain",
        subtitle: "",
        image: "testimonial-dark-03"
    },
    {
        form: "",
        description: "Wonderful experience working with the company and the team.It has never been a difficult task to communicate like other companies. Always worked for hand in hand throughout the development of the website and even after that. Thank You Team for taking care of all our requirements for the website.",
        name: "Tanya",
        subtitle: "",
        image: "testimonial-dark-03"
    }
]
const TestimonialThree = ({teamStyle}) => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <Slider className="slick-space-gutter--15 rn-slick-dot rn-slick-arrow mb--60" {...slickDot}>
                    {TestimonialData.map((data, index) => (
                        <div key={index} className={`testimonial-style-two ${teamStyle}`}>
                            <div className="row align-items-center row--20">
                                <div className="col-lg-12">
                                    <div className="content mt_sm--40">
                                        <span className="form">{data.form}</span>
                                        <p className="description">{data.description}</p>
                                        <div className="client-info">
                                            <h4 className="title">{data.name}</h4>
                                            <h6 className="subtitle">{data.subtitle}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}
export default TestimonialThree;




















