import React, { Component } from "react"
import { Link } from "react-router-dom"
import Banner from "../../assets/img/HomeBanner.jpg"
import ButtonOne from "../Button/button1"

export default class CarouselElement extends Component {
	render() {
		return (
			<div className="individual-carousel">
				<div className="carousel-detail">
					<div className="detail-title"><span>2 </span>Medium Pizzas, Drinks+Dips</div>
					<div className="detail-content">
						2 Medium Pizzas+ 4 Toppings (combined) + 4 Drinks (355ml) + 2 Dips. Upsize to Large for $6
					</div>
					<div className="detail-additional">
						Additional charge for premium toppings
					</div>
					<div className="detail-price">$ 159</div>
					<hr />
					<div className="detail-button">
						<ButtonOne value="Order Now" />
					</div>
				</div>
				<div className="carousel-img" >
					<img src={Banner} alt="Banner" />
				</div>
				
			</div>
		)
	}
}

