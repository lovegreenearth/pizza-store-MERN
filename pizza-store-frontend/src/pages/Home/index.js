import { React, useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import ProductOne from "../../components/Product/product1";
import DemoCarousel from "../../components/Carousel";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  let navigate = useNavigate();
  const [data, setData] = useState([])
  useEffect(
    () => {
      axios.post('/menus', {
       
      })
      .then(res =>res.data)
      .then(data => {
        setData(data)
      })
    }, [])
  return (
    <div className="home-page">
      <div className="carousel-container">
        <div className="label">
          <div className="label-special">FEATURED SPECIAL</div>
          <div>
            <Link to="/see-all" className="navigation-button">
              <div className="navigation-seeAll">See All</div>
              <AiFillPlayCircle className="navigation-icon" />
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
            data.map((item, index) => {
              return(
                <div key={index}>
                    <ProductOne
                      title={item.name}
                      source={item.img}
                      buttonValue="Order Now"
                      onClick={() => navigate(`Product/${item._id}`)}
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