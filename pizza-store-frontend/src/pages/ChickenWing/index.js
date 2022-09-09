import { React, useState, useEffect } from "react"
import "./style.scss"
import Radio from "../../components/Radio";
import Chicken from "../../assets/img/chickenWings.jpg"
import Quantity from "../../components/Button/qty";
import Button from "../../components/Button/button1";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Static from "../../assets/img/BaseSauce/Buffalo.png"
import { BsCheckCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToChicken } from "../../redux/actions";

const ChickenWings = () =>  {
  const [ quantity, setQuantity ] = useState(1)
  const [ chickenWing, setChickenWing ] = useState([]);
  const [ active, setActive ] = useState("");
  const [ sauceType, setSauceType ] = useState("");
  const [ wingStyle, setWingStyle ] = useState("");
  const [ sauceAmount, setSauceAmount ] = useState("");
  const [ bread, setBread ] = useState("");
  const [ array, setArray ] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/chickenWing`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
    })
    .then(res =>res.json())
    .then(data => {
        setChickenWing(data)
    })
    
  }, [])
  
  const activeIndividual = (item) => {
    setActive(item._id);
    
  }

  const dispatch = useDispatch();

  const addCart = () => {
    const newChicken = {
      name: JSON.parse(localStorage.getItem("product")).name,
      price: JSON.parse(localStorage.getItem("product")).price,
      quantity: quantity,
    } 
    dispatch(addToChicken(newChicken))
  }

  const getData = (title, content) => {
    switch (title) {
      case "Chicken Wings":
        setWingStyle(content);
        console.log(typeof(content))
        setArray((prevState) => ({...prevState, [title]: content}))
      break;

      case "Wings Style":
        setWingStyle(content);
        setArray((prevState) => ({...prevState, [title]: content}))
      break;

      case "Amount of Sauce(required)":
        setSauceAmount(content);
        setArray((prevState) => ({...prevState, [title]: content}))
      break;

      default: 
        setBread(content);
        setArray((prevState) => ({...prevState, [title]: content}))
    }
  }

  console.log("array ----> " , array)
  // const array = [];
  // array.push(sauceType);
  // array.push(wingStyle);
  // array.push(sauceAmount);
  // array.push(bread);

  return (
    <div>
      <div className="chicken-configuration">
        <div className="radio-selection">
          <Radio title="Chicken Wings" contentOne="Tossed Sauce" contentTwo="Onside Sauce" onChangeState={getData} />
          <Radio title="Wings Style" contentOne="Bread" contentTwo="Non-Breaded" onChangeState={getData} />
        </div>
        <div className="configuration">
          <div className="title">{ JSON.parse(localStorage.getItem("product")).name }</div> 
          <div className="chicken-img">
            <LazyLoadImage src={Chicken} />
          </div>
          <div className="desc">
            <div className="note">
              {
                Object.entries(array).map(([key, val]) => 
                <div className="option" key={key}>
                  <div><BsCheckCircleFill /></div>
                  <div className="txt">{" " + val}</div>
                </div>
              )
              }
            </div>
            <div className="add-cart">
              <div className="quantity-price">
                <Quantity onChange={(qty) => setQuantity(qty)} />
                <div className="price">{ "$ " + JSON.parse(localStorage.getItem("product")).price * quantity }</div>
              </div>
              <Button value="ADD TO CART" onClick={() => addCart()} />
            </div>
          </div>
        </div>
        <div className="radio-selection">
          <Radio title="Amount of Sauce(required)" contentOne="Regular" contentTwo="Light" onChangeState={getData} />
          <Radio title="Garlic Bread(required)" contentOne="Garlic Bread Plair" contentTwo="Garlic Bread Cheese" onChangeState={getData} />
        </div>
      </div>

      <div className="wingSauce">
        {
          chickenWing.map((item) => {
            return (
              <div className={ "individual" + (active === item._id ? " active" : "") }  onClick={() => activeIndividual(item)} key={item._id}>
                {
                  active === item._id
                  ? <div className="select">
                      <div className="select-img"><LazyLoadImage src={Static} /></div>
                      <div className="select-content">
                        <div className="select-title">{item.name}</div>
                      </div> 
                    </div> 
                  : <div className="normal">
                      <div className="img"><LazyLoadImage src={Static} /></div>
                      <div className="title">{item.name}</div>
                    </div>
                }
              </div>
            )
          })
        }
      </div>
    </div>
    
  )
}

export default ChickenWings;

    