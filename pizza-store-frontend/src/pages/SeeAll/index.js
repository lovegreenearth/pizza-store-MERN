import React, { Component } from "react"
import Product2 from "../../components/Product/product2";
import productImg from "../../assets/img/item.png";
import Banner from "../../assets/img/banner-2.png";

const products = [
    {
        source: productImg,
        title: "2 MEDIUM PIZZAS, DRINKS + DIPS",
        desc: "Medium 2-topping pizza (minimum of 2 required)",
        price: "Starting from $8.99",
        button_value: "CUSTOMIZE"
    },

    {
        source: productImg,
        title: "2 MEDIUM PIZZAS, DRINKS + DIPS",
        desc: "Medium 2-topping pizza (minimum of 2 required)",
        price: "Starting from $8.99",
        button_value: "CUSTOMIZE"
    },

    {
        source: productImg,
        title: "2 MEDIUM PIZZAS, DRINKS + DIPS",
        desc: "Medium 2-topping pizza " + "(minimum of 2 required)",
        price: "Starting from $8.99",
        button_value: "CUSTOMIZE"
    },

    {
        source: productImg,
        title: "2 MEDIUM PIZZAS, DRINKS + DIPS",
        desc: "Medium 2-topping pizza (minimum of 2 required)",
        price: "Starting from $8.99",
        button_value: "CUSTOMIZE"
    },

    {
        source: productImg,
        title: "2 MEDIUM PIZZAS, DRINKS + DIPS",
        desc: "Medium 2-topping pizza (minimum of 2 required)",
        price: "Starting from $8.99",
        button_value: "CUSTOMIZE"
    },

    {
        source: productImg,
        title: "2 MEDIUM PIZZAS, DRINKS + DIPS",
        desc: "Medium 2-topping pizza (minimum of 2 required)",
        price: "Starting from $8.99",
        button_value: "CUSTOMIZE"
    },

    {
        source: productImg,
        title: "2 MEDIUM PIZZAS, DRINKS + DIPS",
        desc: "Medium 2-topping pizza (minimum of 2 required)",
        price: "Starting from $8.99",
        button_value: "CUSTOMIZE"
    },

    {
        source: productImg,
        title: "2 MEDIUM PIZZAS, DRINKS + DIPS",
        desc: "Medium 2-topping pizza (minimum of 2 required)",
        price: "Starting from $8.99",
        button_value: "CUSTOMIZE"
    },
]

export default class SeeAll extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="page-2">
                <div className="banner-container">
                    <div className="banner">
                        <img src={Banner} />
                    </div>
                </div>
                <div className="product-container">
                    <div className="label">
                        <span>SPECIALS</span>

                    </div>
                    <div className="product-list">
                        {
                            products.map((item, key) => (
                                <div key={key}>
                                    <Product2 source={item.source} className={'product2'} title={item.title} desc={item.desc} price={item.price} button_value={item.button_value} history={this.props.history} />
                                </div>
                                
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}