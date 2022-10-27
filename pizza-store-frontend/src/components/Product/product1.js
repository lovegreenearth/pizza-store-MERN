import React, { Component } from "react";
import Button from "../Button/button1";

export default class ProductOne extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	render() {
		return (
			<div className="individual-product-Comp">
				<div className="product-title">{this.props.title}</div>
				<img className="product-img" src={this.props.source} alt="Home menu" />
				<Button value={this.props.buttonValue} onClick={this.props.onClick} />
			</div>
		)
	}
}