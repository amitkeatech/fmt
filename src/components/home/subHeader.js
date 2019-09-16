import React, { Component } from 'react';

class SubHeader extends Component {
    render() {
        return (
            <div className="second-navbar" id="secondary_nav">
                <div className="container">
                    <nav className="navbar navbar-default">
                        <div className="sub-menu-top">
                            <ul className="nav navbar-nav dropdown-menu-subnav"> 
                                <li className="item-0"> <a href="https://www.findmetechie.com/technology/reactjs/" data-tag="0">ReactJS</a></li>
                                <li className="item-1"> <a href="https://www.findmetechie.com/technology/angularjs/" data-tag="1">AngularJS</a></li>
                                <li className="item-2"> <a href="https://www.findmetechie.com/technology/node-js/" data-tag="2">Node.JS</a></li>
                                <li className="item-3"> <a href="https://www.findmetechie.com/technology/asp-net/" data-tag="3">.NET</a></li>
                                <li className="item-4"> <a href="https://www.findmetechie.com/technology/microsoft-sitecore/" data-tag="4">SiteCore</a></li>
                                <li className="item-5"> <a href="https://www.findmetechie.com/technology/php/" data-tag="5">PHP</a></li>
                                <li className="item-6"> <a href="https://www.findmetechie.com/technology/java-j2ee/" data-tag="6">Java</a></li>
                                <li className="item-7"> <a href="https://www.findmetechie.com/technology/drupal/" data-tag="7">Drupal</a></li>
                                <li className="item-8"> <a href="https://www.findmetechie.com/technology-stack/" data-tag="8">See all Technologies</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default SubHeader;