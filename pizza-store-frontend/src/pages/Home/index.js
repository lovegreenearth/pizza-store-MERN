import React, { Component } from "react"
import { Link } from 'react-router-dom'
import Product1 from "../../components/Product/product1";
import productImg from "../../assets/img/item.png";
import DemoCarousel from "../../components/Carousel";
import { AiFillPlayCircle } from "react-icons/ai";

const products = [
  {
    source: productImg,
    title: "2 MEDIUM PIZZAS, DRINKS + DIPS",
    button_value: "ORDER NOW"
  },

  {
    source: productImg,
    title: "2 MEDIUM PIZZAS, DRINKS + DIPS",
    button_value: "ORDER NOW"
  },

  {
    source: productImg,
    title: "2 MEDIUM PIZZAS, DRINKS + DIPS",
    button_value: "ORDER NOW"
  },

  {
    source: productImg,
    title: "2 MEDIUM PIZZAS, DRINKS + DIPS",
    button_value: "ORDER NOW"
  },

  {
    source: productImg,
    title: "2 MEDIUM PIZZAS, DRINKS + DIPS",
    button_value: "ORDER NOW"
  },

  {
    source: productImg,
    title: "2 MEDIUM PIZZAS, DRINKS + DIPS",
    button_value: "ORDER NOW"
  },

  {
    source: productImg,
    title: "2 MEDIUM PIZZAS, DRINKS + DIPS",
    button_value: "ORDER NOW"
  },

  {
    source: productImg,
    title: "2 MEDIUM PIZZAS, DRINKS + DIPS",
    button_value: "ORDER NOW"
  }
]

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="home-page">
        <div className="carousel-container">
          <div className="label">
            <div>FEATURED SPECIAL</div>
            <div><Link to="/see-all" className="navigation-button">SEE ALL<AiFillPlayCircle className="navigation-icon" /></Link></div>
          </div>
          <div className="underline"></div>
          <div className="banner">
            <DemoCarousel />
          </div>
        </div>
        <div className="product-container">
          <div className="label">
            MENU
          </div>
          <div className="underline"></div>
          <div className="product-list">
            {
              products.map((item, key) => (
                <div key={key}>
                    <Product1 source={item.source} className={'product1'} title={item.title} button_value={item.button_value} />
                </div>
                
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}