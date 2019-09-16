import React, { Component } from 'react';

class OurTestimonials extends Component {
    render() {
        return (
            <div className="homeRow3">
                <div className="container">
                    <div className="text-center">
                        <h3 className="testimonial title_heading">Our Testimonials</h3>
                    </div>
                    <div className="col-md-12 col-lg-12 col-sm-12">
                        <div className="subtitles-text text-center">
                            <div className="clearfix"></div>
                        </div>
                        <div id="myCarousel2" className="carousel slide" data-ride="carousel">
                            <div style={{minHeight:"200px"}}>
                                <div className="carousel-inner text-center" role="listbox">
                                    <div className="item active">
                                        <p>The <i>FindMeTechie</i> team has provided excellent support to our business in the area of website engineering, analysis and site submission, a major factor in our success. They have proved to be a reliable and expert supplier of IT services.</p>
                                        <br/><br/>
                                        <span className="homeRow3-span">
                                            <bdo>Manager, A media group </bdo><br/> 
                                            Singapore 
                                        </span>
                                    </div>
                                    <div className="item">
                                        <p>The main reason for choosing <i>FindMeTechie</i> to manage our online database tool was the level of response from their Technical Support. They were always prompt to respond to our queries and change requests.</p>
                                        <br /><br />
                                        <span className="homeRow3-span">
                                            <bdo>Country, Head (Operations) </bdo><br />
                                            A travel product company 
                                        </span>
                                    </div>
                                    <div className="item">
                                        <p>We've worked with <i>FindMeTechie</i> for a number of years. They are super active and have helped us out of many tight spots with their on-demand response. They have a wide range of resources and really put the client first.</p>
                                        <br /><br />
                                        <span className="homeRow3-span">
                                            <bdo>CEO, A travel company </bdo><br />
                                            United States of America 
                                        </span>
                                    </div>
                                    <div className="item">
                                        <p><i>FindMeTechie</i> has enhanced our development capacity by providing Dot Net resources in Travel and Hospitality domains. Your ability to work remotely and on-demand with minimum intervention is key to our relationship.</p>
                                        <br /><br />
                                        <span className="homeRow3-span">
                                            <bdo>Director (IT), A travel company, Buenos Aires </bdo><br />
                                            Argentina 
                                        </span>
                                    </div>
                                    <div className="item">
                                        <p>I must thank <i>FindMeTechie</i>. With the agile support of your team, we were able to finish our product on time and within budget. I would whole-heartedly recommend you to any one looking for IT services support.</p>
                                        <br /><br />
                                        <span className="homeRow3-span">
                                            <bdo>COO, ISV, Florida </bdo><br />
                                            United States of America 
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center homeRow3-glyphicon"> 
                                <a className="testimonial_prev_btn" data-slide="prev" role="button" href="#myCarousel2">
                                    <span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
                                </a> 
                                <a className="testimonial_next_btn" data-slide="next" role="button" href="#myCarousel2">
                                    <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        );
    }
}

export default OurTestimonials;