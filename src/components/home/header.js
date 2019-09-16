import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from './searchComponent';

class Header extends Component {
    render() {
        return (
            <div id="page" className="site">
                <header className="main-header">
                    <div className="position-fixed">
                        <div className="row header-top navbar-fixed-top">
                            <div className="container">
                                <div className="">
                                    <nav className="navbar navbar-default">
                                        <div className="navbar-header">
                                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#mobileMenu" aria-expanded="false"> 
                                                <span className="sr-only">Toggle navigation</span> 
                                                <span className="icon-bar"></span> 
                                                <span className="icon-bar"></span> 
                                                <span className="icon-bar"></span> 
                                            </button>
                                            <div id="mobileMenu" className="collapse navbar-collapse">
                                                <ul>
                                                    <li><Link className="dropdown-item" to="/">Employers</Link></li>
                                                    <li><Link className="dropdown-item" to="/techies">Techies</Link></li>
                                                    <li><Link className="dropdown-item" to="/technologies">Technologies</Link></li>
                                                    <li><Link className="dropdown-item" to={{ pathname: '/', state: { buildyourteam: true} }}>Build Team</Link></li>
                                                    <li>
                                                        <Search namespace='searchReducer1' />
                                                    </li>
                                                </ul>
                                                <div className="otherInfo">
                                                    {/*<a href="javascript:void(0);" id="login-hover">Log In</a>*/}
                                                    <div className="phoneText"> <a href="tel:+1-408-850-0236" className="phone">+1-408-850-0236</a></div>
                                                    <div className="cl"></div>
                                                    <div className="buttonDiv">{/*<a href="" data-toggle="modal" data-target="#myModal0" className="first">Hire Techies</a><a href="https://www.findmetechie.com/sign-up-techie/">Join as a Techie</a>*/}</div>
                                                    <div className="cl"></div>
                                                </div>
                                            </div>
                                            <Link to="/" className="navbar-brand col-lg-12 col-xs-6 col-sm-12" rel="home" itemProp="url"><img src="/images/upload/logo.png" alt="home" /></Link>
                                        </div>
                                        <div className="col-xs-6 visible-xs-block text-uppercase">
                                            <div className="nav-search1">
                                                <form action="https://www.findmetechie.com/search-resumes/" method="get">
                                                    <div className="dropdown">
                                                        <select name="expertise" className="style-select searchInput select2-hidden-accessible" tabIndex="-1" aria-hidden="true">
                                                            <option value="">Find resources</option>
                                                        </select>
                                                        <span className="select2 select2-container select2-container--default" dir="ltr" style={{"width":"auto"}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-controls="" aria-expanded="false" tabIndex="0" aria-labelledby="select2-expertise-sq-container"><span className="select2-selection__rendered" id="select2-expertise-sq-container" title="Find resources">Find resources</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                                    </div>
                                                    <input value="send" className="submit-button" type="submit" />
                                                </form>
                                            </div>
                                            {/*<a href="javascript:void(0);" id="login-hover">Log In</a>*/}Log In
                                        </div>
                                        <div className=" col-xs-6 hidden-sm hidden-md hidden-lg"> <a href="tel: +1-408-850-0236" className="push-5-r pull-right" id="phoneNo"> +1-408-850-0236</a></div>
                                        <div id="main-menu-id" className="collapse navbar-collapse">
                                            <ul id="menu-main-navigation" className="nav navbar-nav">
                                                <li><Link to="/" title="Employers"><span>Employers</span></Link></li>
                                                <li><Link to="/techies" title="Techies"><span>Techies</span></Link></li>
                                                <li><Link to="/technologies" title="Technologies"><span>Technologies</span></Link></li>
                                                <li><Link to={{ pathname: '/', state: { buildyourteam: true} }} title="Build Team"><span>Build Team</span></Link></li>
                                            </ul>

                                            <div className="nav-search">
                                                <Search namespace='searchReducer1' />
                                            </div>

                                            </div>
                                        <div className="hidden-xs pull-right">
                                            <div className="buttonDiv" id="H-J-Techie">
                                                <Link to="/"  onClick={ (event) => event.preventDefault() } data-toggle="modal" data-target="#myModal0" className="first">Hire Techies</Link>
                                                <Link to="/">Join as a Techie</Link>
                                            </div>
                                            <ul className="profile">
                                                <li className=""></li>
                                                <li><a href="/" id="login-hover-d">Log In</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="login-box">
                            <div className="login-contaner">
                                <span className="fa fa-close1 fa-close "><img src="/images/close.png" alt="login-box" /></span>
                                <div className="col-lg-4 col-md-4 col-sm-4 loginBox">
                                    <form method="post" action="" id="loginform" name="loginform" className="form-group">
                                        <h3>Log In</h3>
                                        <input type="text" size="20" value="" className="form-control" id="user_login" name="log" placeholder="EMAIL*" required="" autoComplete="off" />
                                        <input type="password" size="20" value="" className="form-control" id="user_pass" name="pwd" placeholder="PASSWORD*" required="" autoComplete="off" />
                                        <label><a href="https://www.findmetechie.com/securelogin/?action=lostpassword">Forgot your password?</a></label>
                                        <br />
                                        <input type="submit" value="Sign In" className="btn loginBtn btn-defoult" id="wp-submit" name="wp-submit" />
                                        <input type="hidden" value="https://www.findmetechie.com/technology-stack/" name="redirect_to" />
                                    </form>
                                    {/*
                                    <div className="wp-social-login-widget">
                                        <div className="wp-social-login-connect-with">Connect with:</div>
                                        <div className="the_champ_login_container">
                                            <div className="wp-social-login-provider-list"><a  rel="nofollow" title="Connect with LinkedIn" className="wp-social-login-provider wp-social-login-provider-linkedin" alt="Login with Linkedin">
                                                LinkedIn</a>
                                            </div>
                                        </div>
                                        <div className="wp-social-login-widget-clearing"></div>
                                    </div>*/}
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8 quick-box">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <h3>New to FindMeTechie?</h3>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 no-padding">
                                        <div className="techie-login">
                                            <form className="form-group" method="post" action="https://www.findmetechie.com/sign-up-techie/">
                                                <span><img src="/images/techie-user.png" alt="login-box" /></span>
                                                <h4>Techie</h4>
                                                <p>Create an account to join our Techie Pool to avail international opportunities.</p>
                                                <input type="submit" name="login-button" value="Register" className="btn register-btn btn-defoult" />
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 no-padding">
                                        <div className="customer-login">
                                            <form className="form-group" method="post" action="https://www.findmetechie.com/sign-up-employer/">
                                                <span><img src="/images/customer-user.png" alt="login-box" /></span>
                                                <h4>Employer</h4>
                                                <p>Create an account to access our Techie Pool and avail other services we provide.</p>
                                                <button type="button" className="btn register-btn btn-defoult restrict_employer_button" data-toggle="modal" data-target="#useremployer_restrict">Register</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div id="useremployer_restrict" className="modal fade" tabIndex="-1" role="dialog">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <div className="clearfix"></div>
                                        <button type="button" className="close" data-dismiss="modal">×</button>
                                        <div className="clearfix"></div>
                                        <h4 className="modal-title">Sorry!</h4>
                                    </div>
                                    <div className="modal-body">
                                        <p>We are not serving in your country.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    };
}

export default Header;