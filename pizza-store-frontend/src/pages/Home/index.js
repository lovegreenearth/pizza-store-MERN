import React from "react"
import { Link } from 'react-router-dom'
import Product1 from "../../components/Product/product1";
import DemoCarousel from "../../components/Carousel";
import { AiFillPlayCircle } from "react-icons/ai";
import { HomeData } from "./HomeData";
import { useNavigate } from "react-router-dom";

const Home = () => {
  console.log(HomeData.products)
  let navigate = useNavigate();
  return (
    <div className="home-page">
    <div className="carousel-container">
      <div className="label">
        <div>FEATURED SPECIAL</div>
        <div>
          <Link to="/see-all" className="navigation-button">
            SEE ALL<AiFillPlayCircle className="navigation-icon" />
          </Link>
        </div>
      </div>
      <div className="underline"></div>
      <div className="banner">
        <DemoCarousel />
      </div>
    </div>
    <div className="product-container">
      <div className="label">MENU</div>
      <div className="underline"></div>
      <div className="product-list">
        {
          HomeData.products.map((item, key) => {
            return(
              <div key={key}>
                <Product1 
                  source={item.src.src} 
                  className='product1'
                  title={item.title} 
                  button_value={item.button_value}
                  onClick={() => navigate('/Product')}
                  />
              </div>
            )
          })
        }
      </div>
    </div>
  </div>
  )
}

export default Home