import React, {useEffect, useState} from 'react'
import './style.scss';
import { AiOutlineClose } from "react-icons/ai";
import { customizeData } from '../../Customization/data';
import Cheese from '../../../components/svg/cheese';
import Topping from "../../../components/svg/topping";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BiDollarCircle } from "react-icons/bi"
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { IoIosRadioButtonOn } from "react-icons/io"
import { BiAdjust } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsFillCircleFill } from "react-icons/bs";
import Quantity from "../../../components/Button/qty";
import Button from "../../../components/Button/button1";

  // Static Image...
import StaticDough from "../../../assets/img/static/Regular Dough.png";
import StaticCheese from "../../../assets/img/static/Extra Cheese.png";
import StaticSpecial from "../../../assets/img/Regular.png";
import StaticInitial from "../../../assets/img/initial.png"

const PizzaCustomization = (props) => {
  const [activeTab, setActiveTab] = useState(1)
  const [activeSubTab, setActiveSubTab] = useState(1)
  const [activeToppingSubTab, setActiveToppingSubTab] = useState(1)

  // Click SubTab
  const [ activeBaseDough, setActiveBaseDough ] = useState("");
  const [ activeBaseSauce, setActiveBaseSauce ] = useState("");
  const [ activeBaseCheese, setActiveBaseCheese ] = useState("");
  const [ activeSpecial, setActiveSpecial ] = useState("");
  const [activeTopping, setActiveTopping] = useState([])

  // Fetch Data from MongoDB
  const [doughData, setDoughData] = useState([]);
  const [sauceData, setSauceData] = useState([]);
  const [cheeseData, setCheeseData] = useState([]);
  const [specialData, setSpecialData] = useState([]);
  const [toppingData, setToppingData] = useState([]);
  const [toppingVeggieData, setToppingVeggieData] = useState([]);
  const [toppingMeatData, setToppingMeatData] = useState([]);
  const [toppingCheeseData, setToppingCheeseData] = useState([])

  // topping click
  

  // pizza Board
  const [quantity, setQuantity] = useState(1);
  const [selection, setSelection] = useState({})
  const [toppingImg, setToppingImg] = useState([StaticInitial]);
  const [toppingBase, setToppingBase] = useState([]);
  const [toppingExtra, setToppingExtra] = useState([]);
  const [selectSize, setSelectSize] = useState(Array(4).fill(false));
  const [selectPrice, setSelectPrice] = useState("Small")

  useEffect(() => {
    axios.post('/doughs', {

    })
    .then(res => res.data)
    .then(data => {
      setDoughData(data)
      // this.setState({activeDough: this.state.doughData.filter((item) => item._id === JSON.parse(localStorage.getItem("product")).standard[0])[0].name})
    })

    axios.post('/sauce', {

    })
    .then(res => res.data)
    .then(data => {
      setSauceData(data)
      // this.setState({activeSauce: this.state.sauceData.filter((item) => item._id === JSON.parse(localStorage.getItem("product")).standard[1])[0].name})
    })

    axios.post('/cheese', {

    })
    .then(res => res.data)
    .then(data => {
      setCheeseData(data);
      // this.setState({activeCheese: this.state.cheeseData.filter((item) => item._id === JSON.parse(localStorage.getItem("product")).standard[2])[0].name})
    })

    axios.post('/special', {

    })
    .then(res => res.data)
    .then(data => {
      setSpecialData(data)
      // this.setState({activeSpecialTopping: this.state.specialData.filter((item) => item._id === JSON.parse(localStorage.getItem("product")).standard[3])[0].name})
    })

    axios.post('/topping', {

    })
    .then(res => res.data)
    .then(data => {
      setToppingData(data)
      setToppingVeggieData(data.filter(top => top.category === "Veggie"))
      // this.setState({
      //   toppingVeggieData: this.state.toppingData.filter(top => top.category === "Veggie")
      // })
      toppingVeggieData.forEach(object => {
        object.count = 1;
        object.status = [false, true, false]
      });

      setToppingMeatData(data.filter(top => top.category === "Meat"))
      toppingMeatData.forEach(object => {
        object.count = 1;
        object.status = [false, true, false]
      });

      setToppingCheeseData(data.filter(top => top.category === "Cheese"))
      
      toppingCheeseData.forEach(object => {
        object.count = 1;
        object.status = [false, true, false]
      });
    })
  }, [])

  const _renderPizzaBoard = () => {
   
    const addPizza = () => {
     console.log("add to Combo")
    }
    const activeSize = (index) => {
      let select = selectSize.map((_, _index) => index === _index ? true: false)
      console.log(index)
      let size;
      if(index === 0) {
        size = "Small"
      }
      if(index === 1) {
        size = "Medium"
      }
      if(index === 2) {
        size = "Large"
      }
      if(index === 3) {
        size = "X-Large"
      }
      
      setSelectSize(select);
      setSelectPrice(size)
    }
    return (
      <div className="pizza-board">
      <div className="title">{props.title}</div>
      <div className="configuration">
        <div className="criteria">
          {
            Object.entries(selection).map(([key, val]) => 
              <div className="criteria-item" key={key}>
                {val.length > 0 && <div><BsCheckCircleFill /></div>}
                <span>{" " + val}</span>
              </div>
            )
          }
        </div>
        <div className="pizza-piece">
          <LazyLoadImage alt={StaticInitial} src={toppingImg} />
          {
            toppingBase.map((base, index) => {
              return (
                <div className="multiTopping">
                  <LazyLoadImage alt={StaticInitial} src={base} key={index}/>
                </div>
              )
            })
          }
          {
            toppingExtra.map((extra, index) => {
              return (
                <div className="multiTopping" key={index}>
                  <LazyLoadImage alt={StaticInitial} src={extra} />
                </div>
              )
            })
          }
        </div>
        <div className="add-cart">
          <div> 
            <div className="select-size">
              {
                customizeData.selectData.map((item, index) => {
                  return (
                    <div className="select-individual" 
                         onClick={() => activeSize(index)} 
                         style={{border: selectSize[index] && "2px solid #ee5a00"}}
                         key={item.name}>
                      <div className="size">
                        <div className="size-img" style={{fontSize: item.imgSize}}><BsFillCircleFill /></div>
                        <div className="size-text">
                          <span style={{borderBottom: selectSize[index] && "2px solid #ee5a00"}}>{item.size}</span>
                        </div>
                      </div>
                      <div className="slices">{item.slices + " Slices"}</div>
                    </div>
                  )
                  
                })
              }
            </div>
            <div className="quantity-price">
                {/* <div className="price">{"$ " + (price * quantity).toFixed(2)}</div> */}
            </div>
            {/* <div className="desc">{ total_desc }</div> */}
            <div className="cart-button">
              {/* <Button Class={"pizza-Btn" + (!isAdded ? " active" :"")} 
                      value={!isAdded ? "ADDED" : "ADD TO CART"} 
                      onClick={() => addPizza()} 
                      status={!isAdded ? true : false}/> */}
              <Button value="Add To Card" 
                onClick={() => addPizza()}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }

  const _renderTabItem = (tab, activeTab) => {
    return (
      <div className={"tab-item" + (activeTab === tab.id ? ' active-tab' : '')} 
          onClick={() => setActiveTab(tab.id)} key={tab.name}>
        {
          tab.id === 1 && <Cheese className="cheese-icon" />
        }
        {
          tab.id === 2 && <Topping className="cheese-icon" />
        }
        {tab.name}
      </div>
    )
  }

  const _renderSubTab = () => {

    const _renderSubTabItems = (tab, activeTab, index) => {
      return (
        <div className={"sub-tab-item" + (activeTab === tab.id ? ' active-sub-tab' : '')} 
             onClick={() => setActiveSubTab(tab.id)} 
             key={index}>
          {tab.name}
        </div>
      )
    }

    return (
      <div className='sub-tabs'>
        {
          customizeData.subTabs.map((tab, index) => {
            return _renderSubTabItems(tab, activeSubTab, index)
          })
        }
      </div>
    )
  }

  const _renderIntegrate = () => {

    const handleDough = (dough) => {
      setActiveBaseDough(dough._id);
    }

    const handleSauce = (sauce) => {
      setActiveBaseSauce(sauce._id)
    }

    const handleCheese = (cheese) => {
      setActiveBaseCheese(cheese._id)
    }

    return (
      <div className='sub-tab-content'>
        {
          activeSubTab === 1 && 
            <div className='sub-tab-2'>
              <div className='ingredients'>
              {
              doughData.map((dough, index) => {
                return (
                  <div className={"baseSauce-item" + (activeBaseDough === dough._id ? " active" : "")}
                      onClick={() => handleDough(dough)}
                      key={dough._id}>
                  {
                    activeBaseDough === dough._id 
                    ? <div className="selected">
                        <div className="baseSauce-img-selected">
                          <LazyLoadImage src={StaticDough} />
                        </div>
                        <div className="baseSauce-detail-selected">
                          <div className="baseSauce-title-selected">{dough.name}</div>
                          <BiDollarCircle className="icon" /> <br />
                          <div className="baseSauce-cals-selected">{dough.cal} Cals</div>
                        </div>
                      </div>
                    : <div className="img-wrap">
                        <div className="baseSauce-detail">
                          <div className="title">Select</div> 
                            <div style={{clear: "both"}}></div>
                          <div className="baseSauce-name">{dough.name}</div> 
                            <div style={{clear: "both"}}></div>
                          <BiDollarCircle className="icon" />
                            <div style={{clear: "both"}}></div>
                          <div className="baseSauce-cals">{dough.cal} Cals</div>
                        </div>
                        <div className="baseSauce-img">
                          <LazyLoadImage src={StaticDough} />
                        </div>
                      </div>
                  }
                  </div>
                )
              })
            }
              </div>
            </div>
        }
        {
          activeSubTab === 2 && 
            <div className='sub-tab-2'>
               <div className="ingredients">
            {
              sauceData.map((sauce, index) => {
                return (
                  <div className={"baseSauce-item" + (activeBaseSauce === sauce._id ? " active" : "")}
                      onClick={() => handleSauce(sauce)}
                      key={sauce.name}>
                  {
                    activeBaseSauce === sauce._id 
                    ? <div className="selected">
                        <div className="baseSauce-img-selected">
                          <LazyLoadImage src={"/" + sauce.img} />
                        </div>
                        <div className="baseSauce-detail-selected">
                          <div className="baseSauce-title-selected">{sauce.name}</div>
                          <BiDollarCircle className="icon" /> <br />
                          <div className="baseSauce-cals-selected">{sauce.cal} Cals</div>
                        </div>
                      </div>
                    : <div className="img-wrap">
                        <div className="baseSauce-detail">
                          <div className="title">Select</div> 
                            <div style={{clear: "both"}}></div>
                          <div className="baseSauce-name">{sauce.name}</div> 
                            <div style={{clear: "both"}}></div>
                          <BiDollarCircle className="icon" />
                            <div style={{clear: "both"}}></div>
                          <div className="baseSauce-cals">{sauce.cal} Cals</div>
                        </div>
                        <div className="baseSauce-img">
                          <LazyLoadImage src={"/" + sauce.img} />
                        </div>
                      </div>
                  }
                  </div>
                )
              })
            }
          </div>
            </div>
        }
        {
          activeSubTab === 3 && 
            <div className='sub-tab-2'>
              <div className="ingredients">
            {
              cheeseData.map((cheese, index) => {
                return (
                  <div className={"baseSauce-item" + (activeBaseCheese === cheese._id ? " active" : "")}
                      onClick={() => handleCheese(cheese)}
                      key={cheese.name}>
                  {
                    activeBaseCheese === cheese._id 
                    ? <div className="selected">
                        <div className="baseSauce-img-selected">
                          <LazyLoadImage src={StaticCheese} />
                        </div>
                        <div className="baseSauce-detail-selected">
                          <div className="baseSauce-title-selected">{cheese.name}</div>
                          <BiDollarCircle className="icon" /> <br />
                           <div className="baseSauce-cals-selected">{cheese.cal} Cals</div>
                        </div>
                      </div>
                    : <div className="img-wrap">
                        <div className="baseSauce-detail">
                          <div className="title">Select</div> 
                            <div style={{clear: "both"}}></div>
                          <div className="baseSauce-name">{cheese.name}</div> 
                            <div style={{clear: "both"}}></div>
                          <BiDollarCircle className="icon" />
                            <div style={{clear: "both"}}></div>
                          <div className="baseSauce-cals">{cheese.cal} Cals</div>
                        </div>
                        <div className="baseSauce-img">
                          <LazyLoadImage src={StaticCheese} />
                        </div>
                      </div>
                  }
                  </div>
                )
              })
            }
          </div>
            </div>
        }
      </div>
    )
  }

  const _renderToppingSubTab = () => {
    const _renderToppingSubTabItems = (tab, activeToppingSubTab, index) => {
      return (
        <div className={"sub-tab-item" + (activeToppingSubTab === tab.id ? ' active-sub-tab' : '')} 
             onClick={() => setActiveToppingSubTab(tab.id)} 
             key={index}>
          {tab.name}
        </div>
      )
    }

    return (
      <div className='sub-tabs'>
        {
          customizeData.subToppingTabs.map((tab, index) => {
            return _renderToppingSubTabItems(tab, activeToppingSubTab, index);
          })
        }
      </div>
    )
  }

  const _renderToppingIngredients = () => {
    

    const handleTopping = () => {
      
    }
    const minusQuantity = () => {
      console.log("Minus")
    }
    const plusQuantity = () => {
      console.log("Plus")
    }
    const addLeftImage = () => {
      console.log("add Left image")
    }
    const addWholeImage = () => {
      console.log("add Whole Image")
    }
    const addRightImage = () => {
      console.log("add Right Image")
    }
    return (
      <div className='sub-tab-content'>
        {
          activeToppingSubTab === 1 && 
          <div className='sub-tab-1'>
            <div className="ingredients">
            {
              toppingVeggieData.map((veggie, index) => {
                return (
                  <div className={"baseSauce-item" + (activeTopping.filter(top => top === veggie._id).length > 0 ? " active" : "")}
                      onClick={() => handleTopping(veggie)}
                      key={veggie.name}>
                  {
                    activeTopping.filter(top => top === veggie._id).length > 0 
                    ? <div className="selected">
                        <div className="baseSauce-img-selected">
                          <LazyLoadImage src={"/" + veggie.img} />
                        </div>
                        <div className="baseSauce-detail-selected">
                          <div className="baseSauce-title-selected">{veggie.name}</div>
                          <div className="icon-half">
                            <button className={ "flip left-button" + (veggie.status[0] ? " activeBtn": "")} onClick={(e) => addLeftImage(e, veggie)}><BiAdjust /></button>
                            <button className={ "whole-button" + (veggie.status[1] ? " activeBtn": "")} onClick={(e) => addWholeImage(e, veggie)}><IoIosRadioButtonOn /></button>
                            <button className={ "right-button" + (veggie.status[2] ? " activeBtn": "")} onClick={(e) => addRightImage(e, veggie)}><BiAdjust /></button>
                          </div>
                          <div className="price">
                            <BiDollarCircle className="icon" /> 
                            <span>{veggie.price}</span>
                          </div>
                          <div className="baseSauce-cals-selected">{veggie.cal} Cals</div>
                          <div className="quantity">
                            <button onClick={(e) => minusQuantity(e, veggie)}> <AiFillMinusCircle /> </button>
                            <span className="quan-detail">{veggie.count}</span>
                            <button onClick={(e) => plusQuantity(e, veggie)}> <AiFillPlusCircle /> </button>
                          </div>
                        </div>
                      </div>
                    : <div className="img-wrap">
                        <div className="baseSauce-detail">
                          <div className="title">Select</div> 
                            <div style={{clear: "both"}}></div>
                          <div className="baseSauce-name">{veggie.name}</div> 
                            <div style={{clear: "both"}}></div>
                          <BiDollarCircle className="icon" /> <br />
                          <div className="baseSauce-cals">{veggie.cal} Cals</div>
                        </div>
                        <div className="baseSauce-img">
                          <LazyLoadImage src={"/" + veggie.img} />
                        </div>
                      </div>
                  }
                    
                  </div>
                )
              })
            }
          </div>
          </div>
        }
        {
          activeToppingSubTab === 2 && 
          <div className='sub-tab-2'>
            <div className="ingredients">
            {
              toppingMeatData.map((meat, index) => {
                return (
                  <div className={"baseSauce-item" + (activeTopping.filter(top => top === meat._id).length > 0 ? " active" : "")}
                      onClick={() => handleTopping(meat)}
                      key={meat.name}>
                  {
                    activeTopping.filter(top => top === meat._id).length > 0 
                    ? <div className="selected">
                        <div className="baseSauce-img-selected">
                          <LazyLoadImage src={"/" + meat.img} />
                        </div>
                        <div className="baseSauce-detail-selected">
                          <div className="baseSauce-title-selected">{meat.name}</div>
                          <div className="icon-half">
                            <button className={ "flip left-button" + (meat.status[0] ? " activeBtn": "")} onClick={(e) => addLeftImage(e, meat)}><BiAdjust /></button>
                            <button className={ "whole-button" + (meat.status[1] ? " activeBtn": "")} onClick={(e) => addWholeImage(e, meat)}><IoIosRadioButtonOn /></button>
                            <button className={ "right-button" + (meat.status[2] ? " activeBtn": "")} onClick={(e) => addRightImage(e, meat)}><BiAdjust /></button>
                          </div>
                          <div className="price">
                            <BiDollarCircle className="icon" /> 
                            <span>{meat.price}</span>
                          </div>
                          <div className="baseSauce-cals-selected">{meat.cal} Cals</div>
                          <div className="quantity">
                            <button onClick={(e) => minusQuantity(e, meat)}> <AiFillMinusCircle /> </button>
                            <span className="quan-detail">{meat.count}</span>
                            <button onClick={(e) => plusQuantity(e, meat)}> <AiFillPlusCircle /> </button>
                          </div>
                        </div>
                      </div>
                    : <div className="img-wrap">
                        <div className="baseSauce-detail">
                          <div className="title">Select</div> 
                            <div style={{clear: "both"}}></div>
                          <div className="baseSauce-name">{meat.name}</div> 
                            <div style={{clear: "both"}}></div>
                            <BiDollarCircle className="icon" />
                            <div style={{clear: "both"}}></div>
                          <div className="baseSauce-cals">{meat.cal} Cals</div>
                        </div>
                        <div className="baseSauce-img">
                          <LazyLoadImage src={"/" + meat.img} />
                        </div>
                      </div>
                  }
                  </div>
                )
              })
            }
          </div>
          </div>
        }
        {
          activeToppingSubTab === 3 && 
          <div className='sub-tab-3'>
            <div className="ingredients">
            {
              toppingCheeseData.map((cheese) => {
                return (
                  <div className={"baseSauce-item" + (activeTopping.filter(top => top === cheese._id).length > 0 ? " active" : "")}
                      onClick={() => handleTopping(cheese)}
                      key={cheese.name}>
                  {
                    activeTopping.filter(top => top === cheese._id).length > 0 
                    ? <div className="selected">
                        <div className="baseSauce-img-selected">
                          <LazyLoadImage src={"/" + cheese.img} />
                        </div>
                        <div className="baseSauce-detail-selected">
                          <div className="baseSauce-title-selected">{cheese.name}</div>
                          <div className="icon-half">
                            <button className={ "flip left-button" + (cheese.status[0] ? " activeBtn": "")} onClick={(e) => addLeftImage(e, cheese)}><BiAdjust /></button>
                            <button className={ "whole-button" + (cheese.status[1] ? " activeBtn": "")} onClick={(e) => addWholeImage(e, cheese)}><IoIosRadioButtonOn /></button>
                            <button className={ "right-button" + (cheese.status[2] ? " activeBtn": "")} onClick={(e) => addRightImage(e, cheese)}><BiAdjust /></button>
                          </div>
                          <div className="price">
                            <BiDollarCircle className="icon" /> 
                            <span>{cheese.price}</span>
                          </div>
                          <div className="baseSauce-cals-selected">{cheese.cal} Cals</div>
                          <div className="quantity">
                            <button onClick={(e) => minusQuantity(e, cheese)}> <AiFillMinusCircle /> </button>
                            <span className="quan-detail">{cheese.count}</span>
                          <button onClick={(e) => plusQuantity(e, cheese)}> <AiFillPlusCircle /> </button>
                        </div>
                        </div>
                      </div>
                    : <div className="img-wrap">
                        <div className="baseSauce-detail">
                          <div className="title">Select</div> 
                            <div style={{clear: "both"}}></div>
                          <div className="baseSauce-name">{cheese.name}</div> 
                            <div style={{clear: "both"}}></div>
                          <BiDollarCircle className="icon" />
                            <div style={{clear: "both"}}></div>
                          <div className="baseSauce-cals">{cheese.cal} Cals</div>
                        </div>
                        <div className="baseSauce-img">
                          <LazyLoadImage src={"/" + cheese.img} />
                        </div>
                      </div>
                  }
                  </div>
                )
              })
            }
          </div>
          </div>
        }
      </div>
    )
  }

  const _renderSpecialIngredients = () => {
    const handleSpecial = (special) => {
      setActiveSpecial(special._id)
    }
    return (
      <div className="sub-tab-content">
      
         <div className="sub-tab-1">
          <div className="ingredients">
          {
            specialData.map((special, index) => {
              return (
                <div className={"baseSauce-item" + (activeSpecial === special._id ? " active" : "")}
                    onClick={() => handleSpecial(special)}
                    key={special.name}>
                {
                  activeSpecial === special._id 
                  ? <div className="selected">
                      <div className="baseSauce-img-selected" >
                        <img alt="special" src={StaticSpecial} />
                      </div>
                      <div className="baseSauce-detail-selected">
                        <div className="baseSauce-title-selected">{special.name}</div>
                        <BiDollarCircle className="icon" /> <br />
                          <div className="baseSauce-cals-selected">{special.cal} Cals</div>
                      </div>
                    </div>
                  : <div className="img-wrap">
                      <div className="baseSauce-detail">
                        <div className="title">Select</div> 
                          <div style={{clear: "both"}}></div>
                        <div className="baseSauce-name">{special.name}</div> 
                          <div style={{clear: "both"}}></div>
                        <BiDollarCircle className="icon" />
                          <div style={{clear: "both"}}></div>
                        <div className="baseSauce-cals">{special.cal} Cals</div>
                      </div>
                      <div className="baseSauce-img">
                        <img alt="Special" src={StaticSpecial} />
                      </div>
                    </div>
                }
                </div>
              )
            })
          }
          </div>
        </div>
      
    </div>
    )
  }
  
  return (
    <div style={{
                 display: props.show ? "visible" : "hidden",
                 position: 'fixed',
                 top: props.show ? "0": "100vh", 
                 transition: "all 1s ease-out",
                 overflow: "scroll"
                 }}
         className="pizza-customization"
    >
      <button className='closeButton' onClick={props.onHide}><AiOutlineClose /></button>
      <div className='top-tabs'>
        {
          customizeData.tabs.map(tab => {
            return _renderTabItem(tab, activeTab);
          })
        }
      </div>
      
      <div className='tab-content'>
        {
          activeTab === 1 &&
          <div className='tab-1'>
            {
              _renderPizzaBoard()
            }
            {
              _renderSubTab()
            }
            
            {
              _renderIntegrate()
            }
          </div>
        }
        {
          activeTab === 2 &&
          <div className='tab-2'>
            {
              _renderPizzaBoard()
            }
            {
              _renderToppingSubTab()
            }
            {
              _renderToppingIngredients()
            }
          </div>
        }
        {
          activeTab === 3 &&
          <div className='tab-1'>
             {
              _renderPizzaBoard()
            }
            {
              _renderSpecialIngredients()
            }
          </div>
        }
      </div>
    </div>
  )
}

export default PizzaCustomization;