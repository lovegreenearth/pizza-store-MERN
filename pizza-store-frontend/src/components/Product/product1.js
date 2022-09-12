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
			<div className={this.props.className} key={this.props.number}>
				<div className="product-position">
					<img src={this.props.source} alt="#" />
					<div className="position-content">
						<div className="title-button">
							<div className="title">{this.props.title}</div>
						</div>
						<Button value={this.props.button_value} onClick={this.props.onClick} />
					</div>
				</div>
			</div>
		)
	}
}