import React, { Component } from "react"
import { Link } from "react-router-dom"
import Banner from "../../assets/img/banner.png"

export default class CarouselElement extends Component {
    render() {
        return (
            <div className="carousel">
                <div className="content">
                    <div className="title" >
                        <div className="title-indent">
                            <div className="header-1" >
                                <span>2</span> MEDIUM PIZZAS,
                                <br />
                                DRINKS + DIPS
                            </div>
                            <div className="header-2">
                                2 Medium Pizzas + 4 Toppings* (combined) + 4 Drinks(355ml) + 2 Dips. Upsize to Large for $6
                            </div>
                            <div className="header-3"> Additional charge for premium toppings </div>
                            <div className="price">
                                $159
                            </div>
                            <Link to="/customize" ><button> Order Now</button></Link>
                        </div>
                    </div>
                    <div className="image">
                        <img src={Banner} alt="banner img" />
                    </div>
                </div>
            </div>
        )
    }
}

