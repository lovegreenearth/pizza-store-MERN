import { React, useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import Product1 from "../../components/Product/product1";
import DemoCarousel from "../../components/Carousel";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Static from "../../assets/img/HomeProduct/create_your_own.png"

const Home = () => {
  let navigate = useNavigate();
  const [data, setData] = useState([])
  useEffect(
    () => {
        fetch(`http://localhost:5000/menus`, {
            method: 'GET',
            headers: {
              "Content-Type": "application/json"
            }
        })
        .then(res =>res.json())
        .then(data => {
            setData(data)
        })
    }
    , []
  )
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
          data.map((item, key) => {
            return(
              <div key={key}>
                <Product1
                  source={Static}
                  className='product1'
                  title={item.name}
                  button_value = "ORDER NOW"
                  onClick={() => navigate(`Product/${item._id}`)} />
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