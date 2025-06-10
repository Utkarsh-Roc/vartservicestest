import React from 'react';
import BlogClassicData from '../data/blog/BlogList.json';
import BlogDetailsContent from '../components/blog/BlogDetailsContent';
import SEO from "../common/SEO";
import Layout from "../common/Layout";
import FooterFour from '../common/footer/FooterFour';
import HeaderOne from '../common/header/HeaderOne';

const BlogDetails = ({ match: { params: { id } } }) => {
    const blogId = parseInt(id, 10)
    const data = BlogClassicData.filter(blog => blog.id === blogId);
    return (
        <>
            <SEO title="Blog Details | vartservices.com" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-transparent" />
                <div className="rn-blog-details-area rn-section-gap">
                    <BlogDetailsContent data={data[0]} />
                </div>
                <FooterFour />
            </main>
        </>
    )
}
export default BlogDetails;