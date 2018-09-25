import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class DemoCarousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                { src : 'assets/1.jpg', text: 'Legend 1' },
                { src : 'assets/2.jpg', text: 'Legend 2' },
                { src : 'assets/3.jpg', text: 'Legend 3' }
            ]
        }
    }
    itemClick(index, item){
        //debugger;
    }
    render() {
        return (
            <Carousel showThumbs={false} onClickItem={this.itemClick.bind(this)} showArrows={false}>
                {
                    this.state.items.map(item => <div>
                        <img src={item.src} />
                        <p className="legend">{item.text}</p>
                    </div>)
                }
            </Carousel>
        );
    }
};