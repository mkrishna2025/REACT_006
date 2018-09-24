import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class DemoCarousel extends Component {
    itemClick(index, item){
        //debugger;
    }
    render() {
        return (
            <Carousel showThumbs={false} onClickItem={this.itemClick.bind(this)} showArrows={false}>
                <div>
                    <img src="assets/1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};