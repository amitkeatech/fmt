import React, { Component } from 'react';

import SubHeader from './subHeader';
import HeaderCarousel from './headerCarousel.js';
import TechieRequirement from './techieRequirement';
import BYPersonalisedTeam from './buildYourPersonalisedTeam';
import HowDoesItWork from './howDoesItWork';
import OurTestimonials from './ourTestimonials';
import FMTGuarantee from './fmtGuarantee';

class Home extends Component {

    // constructor(props) {
    //     super(props);
    // }
      
    componentDidMount() {
        this.scrollToElem();
        window.addEventListener('scroll', this.listenScrollEvent);
    }

    componentDidUpdate() {
        this.scrollToElem();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenScrollEvent);
        let element = document.getElementById("H-J-Techie");
        element.style.display = "block";
    }

    listenScrollEvent = e => {
        let element = document.getElementById("H-J-Techie");
        let scrollToElem = document.getElementById("content-1");
        
        if (scrollToElem && window.scrollY > scrollToElem.offsetTop-150) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }

    scrollToElem() {
        if (this.props.location.state) {
            const { buildyourteam } = this.props.location.state;
            if (buildyourteam !== undefined || buildyourteam !== null) {
                let elmnt = document.getElementById("content-1");
                window.scrollTo({
                    top: elmnt.offsetTop-100,
                    behavior: 'smooth',
                });
            }
            else {
                this.loadFromTop();
            }
        } else {
            this.loadFromTop();
        }
    }

    loadFromTop() {
        let elmnt = document.getElementsByTagName("html")[0];
        window.scrollTo({
            top: elmnt.offsetTop,
            behavior: 'smooth',
        });
    }

    render() {
        return (
            <div>
                <SubHeader />
                <div className="cl"></div>
                <HeaderCarousel />
                <div className="cl"></div>
                <TechieRequirement />
                <div className="cl"></div>
                <div className="site-inner" id="content-1">
                    <div id="content" className="site-content">
                        <div className="site-inner" id="scroll_down">
                            <BYPersonalisedTeam />
                            <HowDoesItWork />
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <OurTestimonials />
                    <FMTGuarantee />
                </div>
            </div>
        );
    }
}

export default Home;