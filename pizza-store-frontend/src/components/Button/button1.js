import './button1'
import React, { Component } from "react";

export default class ButtonOne extends Component {

	constructor(props) {
		super(props);
		this.state = {

		};
	}
	render() {
		return (
			<div className="button">
				<button onClick={this.props.onClick}>{this.props.value}</button>
			</div>
	)
	}
}