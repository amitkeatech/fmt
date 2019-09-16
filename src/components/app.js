import React, { Component } from 'react';

import Routes from '../routes';
import Header from './home/header';
import Footer from './home/footer';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="cl"></div>
                <div>
                    <Routes />
                </div>
                <div className="cl"></div>
                <Footer />
            </div>
        );
    }
}

// export default withRouter(connect(mapStateToProps)(App))