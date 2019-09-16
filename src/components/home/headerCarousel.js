import React, { Component } from 'react';

class HeaderCarousel extends Component {
    render() {
        return (
            <div className="header-carousel main_banner">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    {/*}<ol className="carousel-indicators hidden-xs">
                        <li data-target="#myCarousel" data-slide-to="0" className=""></li>
                        <li data-target="#myCarousel" data-slide-to="1" className="active"></li>
                    </ol>
                            <div className="item">
                                <img src="/images/upload/pink_banner.png" alt="login-box" />
                                <div className="carousel-caption text-center carousel-banner-techie">
                                    <h2 className="">Hire the best techies</h2>
                                    <p className="banner-subtitle">to get your job done!</p>
                                </div>
                            </div>*/}
                    <div id="carouselFade" className="carousel slide carousel-fade" data-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <img src="/images/bannerNew.jpg" alt="login-box" />
                                <div className="carousel-caption text-center carousel-banner-techie">
                                    <h2 className="">FindMeTechie</h2>
                                    <p className="banner-subtitle">re-defines engaging with remote Software Developers</p>
                                </div>
                            </div>
                            {/*<a className="left carousel-control" href="#carouselFade" role="button" data-slide="prev"> 
                                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> 
                                <span className="sr-only">Previous</span> 
                            </a> 
                            <a className="right carousel-control" href="#carouselFade" role="button" data-slide="next"> 
                                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> 
                                <span className="sr-only">Next</span> 
                            </a>*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderCarousel;