import React, { Component } from 'react';
import './login.css';

export default  class Login extends Component {
    render() { 
        return (
            <div>
                <div class="header"> Welcome to Login</div>
                <input type='button' value="Login" onClick={(event) => {
                    //this.props.history.push('home');
                    localStorage.setItem('address', JSON.stringify({
                        line1: 'Yousufguda',
                        line2: 'Ameerpet'
                    }));
		            sessionStorage.setItem('gender', 'M');
                    this.props.history.push({
                        pathname: 'home',
                        params: { username: 'Karthik' },
                        search: 'age=20&city=Hyderabad'
                    });
                } } />
            </div>        
        )
    }
}