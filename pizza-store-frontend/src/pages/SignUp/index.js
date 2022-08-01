import React, { Component } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button_1 from "../../components/Button/button1";
import images from '../../constant';


export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmpw: ""
        }

        this.fnameRef = React.createRef();
        this.lnameRef = React.createRef();
        this.email = React.createRef();
        this.password = React.createRef();
        this.confirmpw = React.createRef();
    }

    onClick() {

    }

    render() {
        return (
            <div className="signup-container">
                <header className="signup-header">REGISTER</header>
                <div className="signup-content">
                    <div className="email-container">

                        <div className="signup-banner">
                            <LazyLoadImage src={images.signUpBanner.src} alt={images.signUpBanner.alt} />
                        </div>

                        <div className="email">

                            <div className="first-name">
                                <div><label>First Name</label></div>
                                <div className="input"><input type="text" name="Ufirstname" id="Ufirstname" ref={this.fnameRef} /></div>
                            </div>

                            <div className="last-name">
                                <div><label>Last Name</label></div>
                                <div className="input"><input type="text" name="Ulastname" id="Ulastname" ref={this.lnameRef} /></div>
                            </div>

                            <div className="email-input">
                                <div><label>Email Address</label></div>
                                <div className="input"><input type="email" name="Uname" id="Uname" placeholder="" ref={this.emailRef} /></div>
                            </div>

                            <div className="password-input">
                                <div><label>Password</label></div>
                                <div className="input"><input type="password" name="Upassword" id="Upassword" placeholder="" /></div>
                            </div>

                            <div className="password-confirm">
                                <div><label>Confirm Password</label></div>
                                <div className="input"><input type="password" name="Uconfirmpassword" id="Uconfirmpassword" /></div>
                            </div>
                            
                            <Button_1 value="SIGN UP" onClick={this.onClick} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}