import React, { Component } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import images from '../../../constant';
import Button_1 from "../Button/button1";
import { BsCheckCircleFill } from "react-icons/bs";
import Quantity from "../Button/qty";

const Data = {
    price: "$9.99",
    desc: "There are 2 more selections that are available in section TOPPINGS",
};

export default class InitialPizza extends Component {
    render() {
        return (
            <div className="pizza-detail">
                <div className="left-content">
                    <div className="add-cart">
                        <LazyLoadImage alt={images.initialPizzaImg.alt} src={images.initialPizzaImg.src} />
                        <div>
                            <div className="quantity-price">
                                <Quantity />
                                <div className="price">{Data.price}</div>
                            </div>
                            <div className="desc">{Data.desc}</div>
                            <div className="cart-button">
                                <Button_1 value="ADD TO CART" />
                            </div>
                        </div>
                    </div>
                    <div className="ingrediant">
                        <div className="label">My Pizza</div>
                        <div className="ingrediant-element">
                            {<BsCheckCircleFill />}
                            <span>regular thin crust</span>
                        </div>
                        <div className="ingrediant-element">
                            {<BsCheckCircleFill />}
                            <span>regular thin crust</span>
                        </div>
                        <div className="ingrediant-element">
                            {<BsCheckCircleFill />}
                            <span>regular thin crust</span>
                        </div>
                        <div className="ingrediant-element">
                            {<BsCheckCircleFill />}
                            <span>regular thin crust</span>
                        </div>
                        <div className="ingrediant-element">
                            {<BsCheckCircleFill />}
                            <span>regular thin crust</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}