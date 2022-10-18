import React, { Component } from "react";
import Button from "../../components/Button/button1";
import { CgFacebook } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

			this.state = {
					email: "",
					password: ""
			}
	}

	onSignIn = () => {
		const sendData = {
			email: this.state.email,
			password: this.state.password
		}

		axios.post('/users/login',sendData)
    .then(res => res.data)
    .then(data => {
      if (data.token) {
				this.props.onSuccess();
				alert('success');
		} else if (data.msg) 
			{
				alert(data.msg);
			}
    })
	}

	render() {
		const { email, password } = this.state;

		return (
			<div className="signIn-container">
				<header className="signIn-header">SIGN IN</header>
				<div className="signIn-content">
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

							<div className="signIn-register-container">
								<div className="signIn-button-container">
										<Button   value="SIGN IN" onClick={this.onSignIn} />
								</div>
								<div className="register-comment">
										Don't have an account?
								</div>
								<div className="goto-register">
										<a href="/signup">Creat one here.</a>
								</div>
								<div className="signIn-avatar"><CgFacebook size={30} /></div>
								<div className="signIn-avatar"><FcGoogle size={30} /></div>
							</div>
						</div>
					</div>

					<div className="easy-access-container">
						<div className="easy-access">
							<header className="easy-access-header">Easy Access</header>

							<div className="signIn-facebook">
								<button><CgFacebook size={30} /><span>Sign in with Facebook</span></button>
							</div>

							<div className="facebook-or-google">
								<div className="border"></div>
								<span>or</span>
								<div className="border"></div>
							</div>

							<div className="signIn-google">
								<button><FcGoogle size={30} /><span>Sign in With Google</span></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}