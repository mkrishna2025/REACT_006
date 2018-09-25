import React, { Component } from 'react';
import './login.css';
import $ from 'jquery';
import swal from 'sweetalert';

export default  class Login extends Component {
    onLogin(){
        var formData = new FormData();
        formData.append('username', this.username);
        formData.append('password', this.password);

        fetch('http://trainingkit.azurewebsites.net/api/Users/CheckUserExists',{
          method:'POST',
          body: formData
        }).then(response => {
            return response.json();
        })
        .then(response => {
          if(response.data){
            swal("Alert","Login Success");
            this.props.history.push('home');
          } else {
            swal("Alert", 'Invalid Credentials', "error");
          }
        })
        .catch(error => {
          alert(error);
        });
    }
    componentDidMount(){
        var button = $('#Login')[0];
        if(button){
            button.style.background = 'yellow';
        }
    }
    render() { 
        return (
            <div>
                <div class="header"> Welcome to Login</div>
                <br/>
                <br/>
                User Name: <input type='text' onChange={event => this.username = event.target.value} />
                <br/>
                <br/>
                Password: <input type='text' onChange={event => this.password = event.target.value} />
                <br/>
                <br/>
                <input type='button' id="Login" value='Login with API' onClick={this.onLogin.bind(this)} />
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