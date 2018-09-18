import React, { Component } from 'react';

export default class Footer extends Component {
    render() { 
        return (
            <div id="footer">
                    <ul>
                        <li class="first">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="menu.html">Menu</a></li>
                            <li><a href="beer.html">Beer</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                        </li>
                        <li> <span>Follow us:</span> <a href="#" class="facebook">&nbsp;</a> <a href="#" class="twitter">&nbsp;</a> </li>
                    </ul>
                    <p>Copyright &copy; 2012 <a href="#">Company Name</a> All rights reserved | Website Template By <a target="_blank" href="http://www.freewebsitetemplates.com/">freewebsitetemplates.com</a></p>
            </div>
        ) 
    };
}