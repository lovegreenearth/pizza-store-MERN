import React, { Component } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button1 from "../../components/Button/button1";
import images from '../../constant';


export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstNameAlert: "",
            lastNameAlert: "",
            emailAlert: "",
            passwordAlert: "",
            confirmpwAlert: ""
        }

        this.fnameRef = React.createRef();
        this.lnameRef = React.createRef();
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
        this.confirmpwRef = React.createRef();
    }

    onSignUp = () => {
        const emailMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.emailRef.current.value);
        let flag = 0;
        this.setState({
            firstNameAlert: "",
            lastNameAlert: "",
            emailAlert: "",
            passwordAlert: "",
            confirmpwAlert: ""
        })

        if (!this.fnameRef.current.value){
            this.setState({
                firstNameAlert: "Please Enter First Name"
            })
            flag = 1;
        }
        if (!this.lnameRef.current.value){
            this.setState({
                lastNameAlert: "Please Enter Last Name"
            })
            flag = 1;
        }
        if (!this.emailRef.current.value || !emailMatch){
            this.setState({
                emailAlert: "Please Enter Valid Email"
            })
            flag = 1;
        }
        if (!this.passwordRef.current.value){
            this.setState({
                passwordAlert: "Please Enter Password"
            })
            flag = 1;
        }
        if (!this.confirmpwRef.current.value){
            this.setState({
                confirmpwAlert: "Please Confirm Password"
            })
            flag = 1;
        }
        if (this.passwordRef.current.value && this.passwordRef.current.value.length < 5){
            this.setState({
                passwordAlert: "Password must be more than 6 letters"
            })
            flag = 1;
        }
        if (this.passwordRef.current.value !== this.confirmpwRef.current.value){
            this.setState({
                confirmpwAlert: "Please Confrim Correct Password"
            })
            flag = 1;
        }
        if (flag === 0) {
            const sendData = {
                email: this.emailRef.current.value,
                password: this.passwordRef.current.value,
                passwordCheck: this.confirmpwRef.current.value,
                displayName: this.fnameRef.current.value + ' ' + this.lnameRef.current.value
            }
            fetch(`http://localhost:5000/users/register`, {
                method: 'POST',
                headers: {
                "Content-Type": "application/json"
                },
                body:JSON.stringify(sendData)
            })
            .then(res =>res.json())
            .then(data => {
                if (data.msg) {
                    alert(data.msg);
                } else if (data.role) {
                    this.props.onSuccess();
                    alert("success");
                }
            })
        }
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
                                <div><label>First Name<span>{this.state.firstNameAlert}</span></label></div>
                                <div className="input"><input type="text" name="Ufirstname" id="Ufirstname" ref={this.fnameRef} /></div>
                            </div>

                            <div className="last-name">
                                <div><label>Last Name<span>{this.state.lastNameAlert}</span></label></div>
                                <div className="input"><input type="text" name="Ulastname" id="Ulastname" ref={this.lnameRef} /></div>
                            </div>

                            <div className="email-input">
                                <div><label>Email Address<span>{this.state.emailAlert}</span></label></div>
                                <div className="input"><input type="email" name="Uname" id="Uname" placeholder="" ref={this.emailRef} /></div>
                            </div>

                            <div className="password-input">
                                <div><label>Password<span>{this.state.passwordAlert}</span></label></div>
                                <div className="input"><input type="password" name="Upassword" id="Upassword" placeholder="" ref={this.passwordRef} /></div>
                            </div>

                            <div className="password-confirm">
                                <div><label>Confirm Password<span>{this.state.confirmpwAlert}</span></label></div>
                                <div className="input"><input type="password" name="Uconfirmpassword" id="Uconfirmpassword" ref={this.confirmpwRef} /></div>
                            </div>

                            <Button1 value="SIGN UP" onClick={this.onSignUp}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}