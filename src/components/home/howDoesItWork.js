import React, { Component } from 'react';

class HowDoesItWork extends Component {
    render() {
        return (
            <div id="HireaTechie">
                <div className="container">
                    <div className="cl"></div>
                    <section className="emp_work" id="hdiw-em">
                        <div className="container">
                            <div className="text-center">
                                <h3 className="title_heading">How Does It Work</h3>
                                <h3 className="title_subheading">Get your work done in simplified steps</h3>
                            </div>
                            <div className="row-cusrtom how-does-it-work">
                                <div className="col-md-3 col-sm-6 col-xs-12 custom_pad">
                                    <p className="how-does-it-work-block-number">1</p>
                                    <p className="how-does-it-work-block-title">Share your Requirements</p>
                                    <div className="inner_content">
                                        <div className="icon_container"> 
                                            <img src="/images/upload/emp_icon-1.jpg" width="73" height="72" alt="pc logo" /></div>
                                            <ul>
                                                <li>Tell us about the skill set and competency level that best describes your ideal team member.</li>
                                                <li>We will acknowledge and communicate with you with-in 6 - 8 hours for Rate card and Service level agreements</li>
                                                <li>On your go-ahead, we will initiate process of sharing resumes (3- 5)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-12 custom_pad">
                                        <p className="how-does-it-work-block-number">2</p>
                                        <p className="how-does-it-work-block-title">Selection Process of Techies</p>
                                        <div className="inner_content">
                                            <div className="icon_container"> 
                                                <img src="/images/upload/emp_icon-2.jpg" width="71" height="69" alt="document search" />
                                            </div>
                                            <ul>
                                                <li>Team FMT works hard to pick best resources matching your requirement</li>
                                                <li>Based on your confirmation, we schedule interviews ( audio / video)</li>
                                                <li>Once resource is selected, we will initiate onboarding process while in parallel we do paper work</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-12 custom_pad">
                                        <p className="how-does-it-work-block-number">3</p>
                                        <p className="how-does-it-work-block-title">NDA and Work Order</p> 
                                        <div className="inner_content">
                                            <div className="icon_container"> 
                                            <img src="/images/upload/emp_icon-3.jpg" width="69" height="70" alt="findmetechie" />
                                        </div>
                                        <ul>
                                            <li>We sign Non-Disclosure Agreement (NDA)</li>
                                            <li>Based on initial conversation, we share Service level based “Work Order”</li>
                                            <li>We do conduct a brief workshop / session to set project delivery expectations and mile stones prior to the start of project.</li>
                                            <li>Our Project manager oversees setting up required project delivery tools</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-12 custom_pad">
                                    <p className="how-does-it-work-block-number">4</p>
                                    <p className="how-does-it-work-block-title">Invoices and Payments</p>
                                    <div className="inner_content">
                                        <div className="icon_container"> 
                                            <img src="/images/upload/emp_icon-4.jpg" width="71" height="71" alt="handshake" />
                                        </div>
                                        <ul>
                                            <li>We raise our invoices on successful delivery</li>
                                            <li>Our invoices are either Time sheet or Project deliverables based. We intend to get sign-offs first before raising our invoice</li>
                                            <li>Our payments are all online (bank to bank transfers)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default HowDoesItWork;