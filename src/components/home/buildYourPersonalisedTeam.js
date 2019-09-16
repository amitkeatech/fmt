import React, { Component } from 'react';

class BYPersonalisedTeam extends Component {
    render() {
        return (
            <div className="container" id="buildyourteamid">
                <div className="build_team_per">
                    <h3>Build your personalised team</h3>
                    <div className="row">
                        <div className="col-lg-6 build_text_team">
                            <div className="build-team-left-section">
                                <div className="build_fmt_team">
                                    <p>I would like to build team of Developers, Architects, QA’s, UI, UX Designers so they all work under one roof as an extension of my existing team.</p>
                                </div>
                                <span className="key_features">Key features</span>
                                <p className="hire_only">We select only experienced Techies and their credentials are thoroughly vetted by FMT</p>
                                <div className="bord_test"></div>
                                <p className="guaranteed">Work is guaranteed and delivered by FMT</p>
                                <div className="bord_test"></div>
                                <p className="level_agreements">Our Project management and QA team individually define service level agreements and work to make every delivery successful. We use AGILE project management tools like JIRA, Pivotal tracker, Trello.</p>
                                <div className="bord_test"></div>
                                <p className="project_in_uk">We are providing extended teams to start ups and established businesses  in USA, UK, Ireland, France, Finland, Singapore, Hong Kong, Australia, and New Zealand</p>
                                <div className="bord_test"></div>
                                <p className="project_in_uk">Share your requirements and  build an extended team</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div id="build-team-carousel" className="carousel slide" data-ride="carousel" data-interval="4000">
                                <div className="carousel-inner">
                                    <div className="item active left">
                                        <img src="/images/techie_banner_last.png" alt="techie_banner" style={{"width":"100%"}} />
                                    </div>
                                    <div className="item next left">
                                        <img src="/images/first_techies_banner.png" alt="first_techies_banner" style={{"width":"100%"}} />
                                    </div>
                                    <div className="item">
                                        <img src="/images/our-technical-skills.png" alt="our-technical-skills" style={{"width":"100%"}} />
                                    </div>
                                    <div className="item">
                                        <img src="/images/second_tachies_banner.png" alt="second_tachies_banner" style={{"width":"100%"}} />
                                    </div>
                                </div>
                                <a className="left carousel-control" href="#build-team-carousel" data-slide="prev">
                                    <span className="glyphicon glyphicon-chevron-left"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="right carousel-control" href="#build-team-carousel" data-slide="next">
                                    <span className="glyphicon glyphicon-chevron-right"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <div className="proposal_build">
                                <a href="https://www.findmetechie.com/build-development-team/" className="btn btn-primary share_proposal">Share proposal to build team</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BYPersonalisedTeam;