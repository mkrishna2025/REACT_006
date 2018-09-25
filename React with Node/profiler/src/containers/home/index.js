import React, { Component } from 'react';
import  './home.css';
import Image1 from '../../images/1.jpg';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        var params = this.props.history.location.params || { username: '' };
        var searchParams = new URLSearchParams(this.props.history.location.search);
        var address = JSON.parse(localStorage.getItem('address'));
        var gender = sessionStorage.getItem('gender');
        return (
            <div>
                <div class="header"> Welcome to Home, {params.username}, {searchParams.get('age')}, {searchParams.get('city')}</div> 
                <div style={{ color: 'blue'}}> List of Courses</div>
                <img src= {Image1} />
                <Link to={{
                    pathname: '/Google',
                    search: 'username=karthik',
                    params: { secretAccessKey: '123456' }
                    }}> Google 
                </Link>
            </div>
        );
    }
}