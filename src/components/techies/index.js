import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Techies extends Component {
    render() {
        console.log("techies");
        return (
            <div className="container breadfullWidth">
                <div className="breadcrumbs" typeof="BreadcrumbList" vocab="https://schema.org/">
                    <span property="itemListElement" typeof="ListItem">
                        <Link property="item" typeof="WebPage" title="Go to FindMeTechie." to="/" className="home">
                            <span property="name">FindMeTechie</span>
                        </Link>
                        <meta property="position" content="1" />
                    </span> 
                    » 
                    <span className="post post-page current-item">Techies</span>
                </div>
            </div>
        );
    }
}

export default Techies;