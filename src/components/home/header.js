import React, { Component } from 'react';

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
                                                    <li><a className="dropdown-item" href="https://www.findmetechie.com/#HireaTechie">Employers</a></li>
                                                    <li><a className="dropdown-item" href="https://www.findmetechie.com/techies/">Techies</a></li>
                                                    <li><a className="dropdown-item" href="https://www.findmetechie.com/#technologies">Technologies</a></li>
                                                    <li><a className="dropdown-item" href="https://www.findmetechie.com/#buildyourteamid">Build Team</a></li>
                                                    <li>
                                                        <input value="" type="text" id="mobilemybrowseSearchInput" name="browse" className="mobilesearchInput" placeholder="Find Techies"></input>
                                                        <ul id="mobile-browse-menu-technology" style={{"display":"none"}}>
                                                            <li><a href="/search-resumes/?expertise=3933">Adobe AEM</a></li>
                                                            <li><a href="/search-resumes/?expertise=969">Android </a></li>
                                                            <li><a href="/search-resumes/?expertise=960">AngularJS </a></li>
                                                            <li><a href="/search-resumes/?expertise=963">Backbone.JS </a></li>
                                                            <li><a href="/search-resumes/?expertise=3703">Blockchain</a></li>
                                                            <li><a href="/search-resumes/?expertise=1053">Cake PHP</a></li>
                                                            <li><a href="/search-resumes/?expertise=995">Cocos2D</a></li>
                                                            <li><a href="/search-resumes/?expertise=1055">CodeIgniter</a></li>
                                                            <li><a href="/search-resumes/?expertise=121">Cold Fusion</a></li>
                                                            <li><a href="/search-resumes/?expertise=1119">DevOps</a></li>
                                                            <li><a href="/search-resumes/?expertise=203">DotNet(.net)</a></li>
                                                            <li><a href="/search-resumes/?expertise=3154">DotNetNuke</a></li>
                                                            <li><a href="/search-resumes/?expertise=531">Drupal</a></li>
                                                            <li><a href="/search-resumes/?expertise=964">Ember.JS </a></li>
                                                            <li><a href="/search-resumes/?expertise=506">Gaming</a></li>
                                                            <li><a href="/search-resumes/?expertise=878">Graphics Design</a></li>
                                                            <li><a href="/search-resumes/?expertise=194">HTML</a></li>
                                                            <li><a href="/search-resumes/?expertise=971">iOS</a></li>
                                                            <li><a href="/search-resumes/?expertise=120">Java</a></li>
                                                            <li><a href="/search-resumes/?expertise=200">JMeter</a></li>
                                                            <li><a href="/search-resumes/?expertise=535">Joomla</a></li>
                                                            <li><a href="/search-resumes/?expertise=3152">Kentico</a></li>
                                                            <li><a href="/search-resumes/?expertise=537">Magento</a></li>
                                                            <li><a href="/search-resumes/?expertise=4699">MeteorJS</a></li>
                                                            <li><a href="/search-resumes/?expertise=943">Microsoft Azure</a></li>
                                                            <li><a href="/search-resumes/?expertise=980">Microsoft SiteCore</a></li>
                                                            <li><a href="/search-resumes/?expertise=222">Mobile Apps</a></li>
                                                            <li><a href="/search-resumes/?expertise=961">Node.JS </a></li>
                                                            <li><a href="/search-resumes/?expertise=4400">Opentext WEM</a></li>
                                                            <li><a href="/search-resumes/?expertise=974">PhoneGap </a></li>
                                                            <li><a href="/search-resumes/?expertise=118">php</a></li>
                                                            <li><a href="/search-resumes/?expertise=3257">Python</a></li>
                                                            <li><a href="/search-resumes/?expertise=109">Quality Assurance</a></li>
                                                            <li><a href="/search-resumes/?expertise=962">ReactJS </a></li>
                                                            <li><a href="/search-resumes/?expertise=164">Ruby on Rails (ROR)</a></li>
                                                            <li><a href="/search-resumes/?expertise=421">Sales Force</a></li>
                                                            <li><a href="/search-resumes/?expertise=1002">scala</a></li>
                                                            <li><a href="/search-resumes/?expertise=202">Selenium</a></li>
                                                            <li><a href="/search-resumes/?expertise=1147">Sharepoint </a></li>
                                                            <li><a href="/search-resumes/?expertise=992">Shopify</a></li>
                                                            <li><a href="/search-resumes/?expertise=985">Unity 3D</a></li>
                                                            <li><a href="/search-resumes/?expertise=163">User Exp.(UX/UI)</a></li>
                                                            <li><a href="/search-resumes/?expertise=525">Virtual Reality</a></li>
                                                            <li><a href="/search-resumes/?expertise=1245">Vtiger CRM</a></li>
                                                            <li><a href="/search-resumes/?expertise=950">WooCommerce</a></li>
                                                            <li><a href="/search-resumes/?expertise=187">Wordpress</a></li>
                                                            <li><a href="/search-resumes/?expertise=968">Xamarin </a></li>
                                                            <li><a href="/search-resumes/?expertise=1243">ZOHO CRM</a></li>
                                                        </ul>
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
                                            <a href="https://www.findmetechie.com" className="navbar-brand col-lg-12 col-xs-6 col-sm-12" rel="home" itemProp="url"><img src="/images/upload/logo.png" alt="home" /></a>
                                        </div>
                                        <div className="col-xs-6 visible-xs-block text-uppercase">
                                            <div className="nav-search1">
                                                <form action="https://www.findmetechie.com/search-resumes/" method="get">
                                                    <div className="dropdown">
                                                    <select name="expertise" className="style-select searchInput select2-hidden-accessible" tabIndex="-1" aria-hidden="true">
                                                        <option value="">Find resources</option>
                                                    </select>
                                                    <span className="select2 select2-container select2-container--default" dir="ltr" style={{"width":"auto"}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-labelledby="select2-expertise-sq-container"><span className="select2-selection__rendered" id="select2-expertise-sq-container" title="Find resources">Find resources</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                                    </div>
                                                    <input value="send" className="submit-button" type="submit" />
                                                </form>
                                            </div>
                                            {/*<a href="javascript:void(0);" id="login-hover">Log In</a>*/}Log In
                                        </div>
                                        <div className=" col-xs-6 hidden-sm hidden-md hidden-lg"> <a href="tel: +1-408-850-0236" className="push-5-r pull-right" id="phoneNo"> +1-408-850-0236</a></div>
                                        <div id="main-menu-id" className="collapse navbar-collapse">
                                            <ul id="menu-main-navigation" className="nav navbar-nav">
                                                <li><a href="https://www.findmetechie.com/" title="Employers"><span>Employers</span></a></li>
                                                <li><a href="https://www.findmetechie.com/techies/" title="Techies"><span>Techies</span></a></li>
                                                <li><a href="https://www.findmetechie.com/technology-stack/" title="Technologies" className="itemActive"><span>Technologies</span></a></li>
                                                <li><a href="https://www.findmetechie.com/#buildyourteamid" title="Build Team"><span>Build Team</span></a></li>
                                            </ul>
                                            <div className="nav-search">
                                                <input value="" type="text" id="mybrowseSearchInput" name="browse" className="searchInput" placeholder="Find Techies" />
                                                <ul id="browse-menu-technology" style={{"display":"none"}}>
                                                    <li><a href="/search-resumes/?expertise=3933">Adobe AEM</a></li>
                                                    <li><a href="/search-resumes/?expertise=969">Android </a></li>
                                                    <li><a href="/search-resumes/?expertise=960">AngularJS </a></li>
                                                    <li><a href="/search-resumes/?expertise=963">Backbone.JS </a></li>
                                                    <li><a href="/search-resumes/?expertise=3703">Blockchain</a></li>
                                                    <li><a href="/search-resumes/?expertise=1053">Cake PHP</a></li>
                                                    <li><a href="/search-resumes/?expertise=995">Cocos2D</a></li>
                                                    <li><a href="/search-resumes/?expertise=1055">CodeIgniter</a></li>
                                                    <li><a href="/search-resumes/?expertise=121">Cold Fusion</a></li>
                                                    <li><a href="/search-resumes/?expertise=1119">DevOps</a></li>
                                                    <li><a href="/search-resumes/?expertise=5568"></a></li>
                                                    <li><a href="/search-resumes/?expertise=203">DotNet(.net)</a></li>
                                                    <li><a href="/search-resumes/?expertise=3154">DotNetNuke</a></li>
                                                    <li><a href="/search-resumes/?expertise=531">Drupal</a></li>
                                                    <li><a href="/search-resumes/?expertise=964">Ember.JS </a></li>
                                                    <li><a href="/search-resumes/?expertise=506">Gaming</a></li>
                                                    <li><a href="/search-resumes/?expertise=878">Graphics Design</a></li>
                                                    <li><a href="/search-resumes/?expertise=194">HTML</a></li>
                                                    <li><a href="/search-resumes/?expertise=971">iOS</a></li>
                                                    <li><a href="/search-resumes/?expertise=120">Java</a></li>
                                                    <li><a href="/search-resumes/?expertise=200">JMeter</a></li>
                                                    <li><a href="/search-resumes/?expertise=535">Joomla</a></li>
                                                    <li><a href="/search-resumes/?expertise=3152">Kentico</a></li>
                                                    <li><a href="/search-resumes/?expertise=537">Magento</a></li>
                                                    <li><a href="/search-resumes/?expertise=4699">MeteorJS</a></li>
                                                    <li><a href="/search-resumes/?expertise=943">Microsoft Azure</a></li>
                                                    <li><a href="/search-resumes/?expertise=980">Microsoft SiteCore</a></li>
                                                    <li><a href="/search-resumes/?expertise=222">Mobile Apps</a></li>
                                                    <li><a href="/search-resumes/?expertise=961">Node.JS </a></li>
                                                    <li><a href="/search-resumes/?expertise=4400">Opentext WEM</a></li>
                                                    <li><a href="/search-resumes/?expertise=974">PhoneGap </a></li>
                                                    <li><a href="/search-resumes/?expertise=118">php</a></li>
                                                    <li><a href="/search-resumes/?expertise=3257">Python</a></li>
                                                    <li><a href="/search-resumes/?expertise=109">Quality Assurance</a></li>
                                                    <li><a href="/search-resumes/?expertise=962">ReactJS </a></li>
                                                    <li><a href="/search-resumes/?expertise=164">Ruby on Rails (ROR)</a></li>
                                                    <li><a href="/search-resumes/?expertise=421">Sales Force</a></li>
                                                    <li><a href="/search-resumes/?expertise=1002">scala</a></li>
                                                    <li><a href="/search-resumes/?expertise=202">Selenium</a></li>
                                                    <li><a href="/search-resumes/?expertise=1147">Sharepoint </a></li>
                                                    <li><a href="/search-resumes/?expertise=992">Shopify</a></li>
                                                    <li><a href="/search-resumes/?expertise=985">Unity 3D</a></li>
                                                    <li><a href="/search-resumes/?expertise=163">User Exp.(UX/UI)</a></li>
                                                    <li><a href="/search-resumes/?expertise=525">Virtual Reality</a></li>
                                                    <li><a href="/search-resumes/?expertise=1245">Vtiger CRM</a></li>
                                                    <li><a href="/search-resumes/?expertise=950">WooCommerce</a></li>
                                                    <li><a href="/search-resumes/?expertise=187">Wordpress</a></li>
                                                    <li><a href="/search-resumes/?expertise=968">Xamarin </a></li>
                                                    <li><a href="/search-resumes/?expertise=1243">ZOHO CRM</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className=" hidden-xs pull-right">
                                            {/*<div className="buttonDiv"><a href="javascript:void(0);" data-toggle="modal" data-target="#myModal0" className="first">Hire Techies</a><a href="https://www.findmetechie.com/sign-up-techie/">Join as a Techie</a></div>*/}
                                            <ul className="profile">
                                                <li className=""></li>
                                                <li><a href="#" id="login-hover-d">Log In</a></li>
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
                                    <input type="text" size="20" value="" className="form-control" id="user_login" name="log" placeholder="EMAIL*" required="" />
                                    <input type="password" size="20" value="" className="form-control" id="user_pass" name="pwd" placeholder="PASSWORD*" required="" />
                                    <label><a href="https://www.findmetechie.com/securelogin/?action=lostpassword">Forgot your password?</a></label>
                                    <br />
                                    <input type="submit" value="Sign In" className="btn loginBtn btn-defoult" id="wp-submit" name="wp-submit" />
                                    <input type="hidden" value="https://www.findmetechie.com/technology-stack/" name="redirect_to" />
                                    </form>
                                    <div className="wp-social-login-widget">
                                    <div className="wp-social-login-connect-with">Connect with:</div>
                                    <div className="the_champ_login_container">
                                        <div className="wp-social-login-provider-list"><a rel="nofollow" title="Connect with LinkedIn" className="wp-social-login-provider wp-social-login-provider-linkedin" alt="Login with Linkedin">
                                            LinkedIn</a>
                                        </div>
                                    </div>
                                    <div className="wp-social-login-widget-clearing"></div>
                                    </div>
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
                                            <span><img src="~/images/customer-user.png" alt="login-box" /></span>
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