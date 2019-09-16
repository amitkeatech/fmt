import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-12 mgb-20">
                                <h2>
                                    <Link to="/" className="logo_footer" rel="home" itemProp="url">
                                        <img src="/images/footer-logo.png" alt="logo_fmt" />
                                    </Link>
                                </h2>
                                <div className="qiuck_links">
                                    <ul id="menu-footer-navigation" className="">
                                        <li id="menu-item-49" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-49"><a href="https://www.findmetechie.com/aboutus/">About</a></li>
                                        <li id="menu-item-61" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-61"><a href="https://www.findmetechie.com/faq/">FAQs</a></li>
                                        <li id="menu-item-63" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-63"><a href="https://www.findmetechie.com/contact-us/">Contact Us</a></li>
                                        <li id="menu-item-912" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-912"><a href="https://www.findmetechie.com/blog/">Blog</a></li>
                                        <li id="menu-item-64" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64"><a href="https://www.findmetechie.com/terms-conditions/">Terms &amp; Conditions</a></li>
                                        <li id="menu-item-65" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-65"><a href="https://www.findmetechie.com/privacy-policy/">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12 mgb-20 mobileBlock">
                                <h2>&nbsp;</h2>
                                <div className="qiuck_links">
                                    <ul className="width_footer_links">
                                        <li><a href="https://www.findmetechie.com/technology/java-j2ee/">Java / J2EE</a></li>
                                        <li><a href="https://www.findmetechie.com/technology/asp-net/">Dotnet(.net)</a></li>
                                        <li><a href="https://www.findmetechie.com/technology/user-experience/">User Experience</a></li>
                                        <li><a href="https://www.findmetechie.com/technology/graphics-design/">Graphics Design</a></li>
                                        <li><a href="https://www.findmetechie.com/technology/ror/">Ruby on Rails</a></li>
                                        <li><a href="https://www.findmetechie.com/technology/ios/">iOS</a></li>
                                        <li><a href="https://www.findmetechie.com/technology/phonegap/">PhoneGap</a></li>
                                        <li><a href="https://www.findmetechie.com/technology/android/">Android</a></li>
                                        <li><a href="https://www.findmetechie.com/technology/microsoft-sitecore/">Microsoft SiteCore</a></li>
                                    </ul>
                                    <ul className="width_footer_links">
                                        <li><a href="https://www.findmetechie.com/technology/php/">PHP</a></li>
                                        <li><a href="https://www.findmetechie.com/technology/cms-portal-solutions/">WordPress</a></li>
                                        <li><a href="https://www.findmetechie.com/technology/drupal/">Drupal</a></li>
                                        <li><a href="https://www.findmetechie.com/technology/magento/">Magento</a></li>
                                        <li><a href="https://www.findmetechie.com/technology/joomla/">Joomla</a></li>
                                        <li><a href="https://www.findmetechie.com/technology/shopify/">Shopify</a></li>
                                        <li><a href="https://www.findmetechie.com/technology/sales-force/">Sales Force</a></li>
                                        <li><a href="https://www.findmetechie.com/technology/mobility/">Mobility</a></li>
                                        <li><a href="https://www.findmetechie.com/technology/aem/">AEM</a></li>
                                    </ul>
                                    <ul className="width_footer_links">
                                        <li><a href="https://www.findmetechie.com/technology/blockchain/">BlockChain</a></li>
                                        <li><a href="https://www.findmetechie.com/technology/python/">Python</a></li>
                                        <li><a href="https://www.findmetechie.com/technology/kentico/">Kentico</a></li>
                                        <li><a href="https://www.findmetechie.com/technology/sharepoint/">Sharepoint</a></li>
                                        <li><a href="https://www.findmetechie.com/technology/devops/">DevOps</a></li>
                                        <li><a href="https://www.findmetechie.com/technology/codeigniter/">CodeIgniter</a></li>
                                        <li><a href="https://www.findmetechie.com/technology/cake-php/">Cake PHP</a></li>
                                        <li><a href="https://www.findmetechie.com/technology/scala/">Scala</a></li>
                                        <li><a href="https://www.findmetechie.com/technology/woocommerce/">WooCommerce</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12 mgb-20">
                                <div className="social_links">
                                    <ul>
                                        <li><Link to="https://www.linkedin.com/company/www-findmetechie-com/" target="_blank" rel="social"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="cl"></div>
                                <h2 className="widget-title">Newsletter</h2>
                                <div>
                                    <form className="es_widget_form" data-es_form_id="es_widget_form">
                                        <div className="es_caption">Subscribe to our newsletter and we will keep you updated about our activities, promotions and industry news.</div>
                                        <div className="es_lablebox">
                                            <label className="es_widget_form_email">Email *</label>
                                        </div>
                                        {
                                            /*
                                                onkeypress="if(event.keyCode==13) es_submit_page(event,'https://www.findmetechie.com')"
                                                onclick="return es_submit_page(event,'https://www.findmetechie.com')" 
                                            */
                                        }
                                        <div className="es_textbox">
                                            <input placeholder="Email Address" type="text" id="es_txt_email" className="es_textbox_class" name="es_txt_email" maxLength="225" />
                                        </div>
                                        <div className="es_button">
                                            <input type="button" id="es_txt_button" className="es_textbox_button es_submit_button" name="es_txt_button" value="Subscribe" />
                                        </div>
                                        <div className="es_msg" id="es_widget_msg">
                                            <span id="es_msg"></span>
                                        </div>
                                        <input type="hidden" id="es_txt_name" name="es_txt_name" value="" />
                                        <input type="hidden" id="es_txt_group" name="es_txt_group" value="" />
                                    </form>
                                </div>
                                <div className="cl"></div>
                                <div className="copyright_2017">
                                    <p>2019 findmetechie.com ©. All rights reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    };
}

export default Footer;