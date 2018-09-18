import React, { Component } from 'react';

import Header from '../header';
import Footer from '../footer';

export default class Master extends Component {
    render() { 
        return (
            <div id="background">
                <div id="page">
                    <Header />
                    {this.props.children}
                    <Footer />
                </div>
            </div>
        ) 
    };
}