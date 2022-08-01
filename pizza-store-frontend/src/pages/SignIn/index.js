import React, { Component } from "react";
import Button_1 from "../../components/Button/button1";
import { CgFacebook } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";

export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    onSignIn() {
        console.log("sign in button")
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className="signin-container">
                <header className="signin-header">SIGN IN</header>
                <div className="signin-content">
                    <div className="email-container">
                        <div className="email">
                            <header className="email-header">Email</header>

                            <div className="email-input">
                                <div>
                                    <label>Email Address</label>
                                </div>
                                <div className="input">
                                    <input type="email" name="Uname" id="Uname" value={email} onChange={(e) => this.setState({email: e.target.value})} />
                                </div>
                            </div>

                            <div className="password-input">
                                <div>
                                    <label>Password</label>
                                </div>
                                <div className="input">
                                    <input type="password" name="Upassword" id="Upassword" value={password} onChange={(e) => this.setState({password: e.target.value})} />
                                </div>
                            </div>

                            <div className="show-forgot-container">
                                <div className="forgot-password">
                                    <a>
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div className="signin-register-container">
                                <div className="signin-button-container">
                                    <Button_1 value="SIGN IN" onClick={this.onSignIn} />
                                </div>
                                <div className="register-comment">
                                    Don't have an account?
                                </div>
                                <div className="goto-register">
                                    <a href="#">Creat one here.</a>
                                </div>
                                <div className="signin-avatar"><CgFacebook size={30} /></div>
                                <div className="signin-avatar"><FcGoogle size={30} /></div>
                            </div>
                        </div>
                    </div>

                    <div className="easy-access-container">
                        <div className="easy-access">
                            <header className="easy-access-header">Easy Access</header>

                            <div className="signin-facebook">
                                <button><CgFacebook size={30} /><span>Sign in with Facebook</span></button>
                            </div>

                            <div className="facebook-or-google">
                                <div className="border"></div>
                                <span>or</span>
                                <div className="border"></div>
                            </div>

                            <div className="signin-google">
                                <button><FcGoogle size={30} /><span>Sign in With Google</span></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}