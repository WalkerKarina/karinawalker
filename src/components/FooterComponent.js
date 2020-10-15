import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Social from '../components/SocialComponent';

function Footer(props){
	return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-auto">
                	<Social/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;
