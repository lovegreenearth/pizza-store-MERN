import React, { Component } from "react";
import Cheese from '../../components/svg/cheese';
import Topping from "../../components/svg/topping";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsCircleHalf } from "react-icons/bs"
import { BsCircleFill } from "react-icons/bs"
import { BiDollarCircle } from "react-icons/bi"
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import images from '../../constant';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Quantity from "../../components/Button/qty";
import Button from "../../components/Button/button1";
import { customizeData } from "./data";

import StaticDough from "../../assets/img/Dough/Regular Dough.png";
import StaticSauce from "../../assets/img/BaseSauce/Buffalo.png";
import StaticCheese from "../../assets/img/Cheese/Extra Cheese.png";
import StaticVeggie from "../../assets/img/Veggie/Argula.png"
import StaticWhole from "../../assets/img/VeggieTopping/Arugula.png"
import StaticLeft from "../../assets/img/left-half/Arugula-left.png";
import StaticRight from "../../assets/img/right-half/Arugular-right.png";
import StaticMeat from "../../assets/img/Meat/Italian Ham.png";

class Customization extends Component {
  constructor(props) {
    
    super(props);
    
    this.state = { 
      ...customizeData,
      quantity: 1,
      activeTopping: [],
      activeToppingIng: "",
      activeExtra: [],
      activeExtraTopping: "",
      activeSpecial: [],
      activeSpecialTopping: "",
      toppingImg: [images.initialPizzaImg.src],
      toppingBase: [],
      toppingExtra: [],
      type: "wholeSrc",
      selection: {},
      nameSelect: [],
      priceTotal: 0,
      priceTopping: 0,
      priceBase: JSON.parse(localStorage.getItem('product')).price,
      baseData: JSON.parse(localStorage.getItem('product')),
      doughData: [],
      sauceData: [],
      cheeseData: [],
      toppingData: [],
      toppingVeggieData: [],
      toppingMeatData: [],
      toppingCheeseData: [],
    }
  }

  componentDidMount() {
    fetch(`http://localhost:5000/doughs`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(res =>res.json())
    .then(data => {
        this.setState({doughData: data})
    })

    fetch(`http://localhost:5000/sauce`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(res =>res.json())
    .then(data => {
        this.setState({sauceData: data})
    })

    fetch(`http://localhost:5000/cheese`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(res =>res.json())
    .then(data => {
        this.setState({cheeseData: data})
    })

    fetch(`http://localhost:5000/topping`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(res =>res.json())
    .then(data => {
        this.setState({toppingData: data})
        this.setState({
          toppingVeggieData: this.state.toppingData.filter(top => top.category === "Veggie")
        })
        this.state.toppingVeggieData.forEach(object => {
          object.count = 1;
        });

        this.setState({
          toppingMeatData: this.state.toppingData.filter(top => top.category === "Meat")
        })
        this.state.toppingMeatData.forEach(object => {
          object.count = 1;
        });

        this.setState({
          toppingCheeseData: this.state.toppingData.filter(top => top.category === "Cheese")
        })
        this.state.toppingCheeseData.forEach(object => {
          object.count = 1;
        });
    })
  }

  _renderTabItem = (tab, activeTab) => {
    return (
      <div className={"tab-item" + (activeTab === tab.id ? ' active-tab' : '')} 
          onClick={() => this.setState({activeTab: tab.id})}>
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

  _renderPizzaBoard = () => {

    const setQty = (qty) => {
      this.setState({
        quantity: qty
      })
    }

    const addPizza = () => {
      const newPizza = {
        name: JSON.parse(localStorage.getItem('product')).name,
        quantity: this.state.quantity,
        desc: total_desc,
        price: JSON.parse(localStorage.getItem('product')).price,
      }
      this.props.addToCart(newPizza)
    }

    const total_desc = this.state.activeToppingIng
          + this.state.activeExtraTopping
          + this.state.activeSpecialTopping;
    
    const price= (this.state.priceBase + this.state.priceTopping).toFixed(2)

    return <div className="pizza-board">
      <div className="title">{this.state.baseData.name}</div>
      <div className="configuration">
        <div className="criteria">
          {
            Object.entries(this.state.selection).map(([key, val]) => 
              <div className="criteria-item" key={key}>
                <div><BsCheckCircleFill /></div>
                <span>{" " + val}</span>
              </div>
            )
          }
        </div>
        <div className="pizza-piece">
          <LazyLoadImage alt={images.initialPizzaImg.alt} src={this.state.toppingImg} />
          {
            this.state.toppingBase.map((base, index) => {
              return (
                <div className="multiTopping">
                  <LazyLoadImage alt={images.initialPizzaImg.alt} src={base} key={index}/>
                </div>
              )
            })
          }
          {
            this.state.toppingExtra.map((extra, index) => {
              return (
                <div className="multiTopping" key={index}>
                  <LazyLoadImage alt={images.initialPizzaImg.alt} src={extra} />
                </div>
              )
            })
          }
        </div>
        <div className="add-cart">
          <div> 
            <div className="quantity-price">
                <Quantity onChange={setQty}/>
                <div className="price">{"$ " + price * this.state.quantity}</div>
            </div>
            {/* <div className="desc">{ total_desc }</div> */}
            <div className="cart-button">
              <Button value="ADD TO CART" onClick={() => addPizza()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  }

  _renderSubTabItems = (tab, activeTab, index) => {
    return <div className={"sub-tab-item" + (activeTab === tab.id ? ' active-sub-tab' : '')} 
                onClick={() => this.setState({activeSubTab: tab.id})} 
                key={index}>
      {tab.name}
    </div>;
  }

  _renderSubTab = () => {
    const { subTabs, activeSubTab } = this.state;

    return <div className="sub-tabs">
      {
        subTabs.map((tab, index) => {
          return this._renderSubTabItems(tab, activeSubTab, index);
        })
      }
    </div>
  }
  _renderIngredients = () => {
    let { activeSubTab, activeBaseDough, activeBaseSauce, activeBaseCheese } = this.state;
    
    const handleDough = (dough) =>  {
      this.setState({activeBaseDough: dough._id})
      this.setState(prevState => {
        let selection = Object.assign({}, prevState.selection); 
        selection.dough = dough.name;
        return { selection };
      })
    }
    const handleSauce = (sauce) =>  {
      this.setState({activeBaseSauce: sauce._id})
      this.setState(prevState => {
        let selection = Object.assign({}, prevState.selection); 
        selection.sauce = sauce.name;
        return { selection };
      })
    };
    const handleCheese = (cheese) =>  {
      this.setState({activeBaseCheese: cheese._id})
      this.setState(prevState => {
        let selection = Object.assign({}, prevState.selection); 
        selection.cheese = cheese.name;
        return { selection };
      })
    };
    return <div className="sub-tab-content">
      {
        activeSubTab === 1 && <div className="sub-tab-2">
          <div className="ingredients">
            {
              this.state.doughData.map((dough, index) => {
                return (
                  <div className={"baseSauce-item" + (activeBaseDough === dough._id ? " active" : "")}
                      onClick={() => handleDough(dough)}
                      key={index}>
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
        activeSubTab === 2 && <div className="sub-tab-2">
          <div className="ingredients">
            {
              this.state.sauceData.map((sauce, index) => {
                return (
                  <div className={"baseSauce-item" + (activeBaseSauce === sauce._id ? " active" : "")}
                      onClick={() => handleSauce(sauce)}
                      key={index}>
                  {
                    activeBaseSauce === sauce._id 
                    ? <div className="selected">
                        <div className="baseSauce-img-selected">
                          <LazyLoadImage src={StaticSauce} />
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
                          <LazyLoadImage src={StaticSauce} />
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
        activeSubTab === 3 && <div className="sub-tab-3">
          <div className="ingredients">
            {
              this.state.cheeseData.map((cheese, index) => {
                return (
                  <div className={"baseSauce-item" + (activeBaseCheese === cheese._id ? " active" : "")}
                      onClick={() => handleCheese(cheese)}
                      key={index}>
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
  }
  _renderToppingSubTab = () => {
    const { subToppingTabs, activeSubTab } = this.state;
    return <div className="sub-tabs">
      {
        subToppingTabs.map((tab, index) => {
          return this._renderSubTabItems(tab, activeSubTab, index);
        })
      }
      
    </div>
  }
  _renderToppingIngredients = () => {
    let { activeSubTab, activeTopping, activeToppingIng, toppingBase } = this.state;

    let tempTopping = [...this.state.activeTopping];
    let tempVeggie = [...activeToppingIng];
    let tempBaseTopping = [...toppingBase];
    
    const handleTopping = (item) =>  {
      if (tempTopping.filter(top => top === item._id).length > 0) {
        const index = tempTopping.indexOf(tempTopping.filter(top => top === item._id)[0]);
        const indexName = tempVeggie.indexOf(tempVeggie.filter(top => top === item.name)[0]);
        
        tempTopping.splice(index, 1);
        tempVeggie.splice(indexName, 1);
        tempBaseTopping.splice(indexName, 1);

        this.state.toppingVeggieData.forEach(ing => {
          if(ing.name === item.name) {
            item.count = 1;
          }
        })
        this.state.toppingMeatData.forEach(ing => {
          if(ing.name === item.name) {
            item.count = 1;
          }
        })
        this.state.toppingCheeseData.forEach(ing => {
          if(ing.name === item.name) {
            item.count = 1;
          }
        })

        this.setState({
          toppingSauce: tempVeggie,
        }) 
        let newArray = this.state.nameSelect.filter(
          (value) => {
            return value !== item.name
          }
        )
        this.setState({nameSelect: newArray})

        calculatePrice(newArray)

      } else {
        tempTopping.push(item._id);
        tempVeggie.push(item.name);
        tempBaseTopping.push(StaticWhole)
        this.state.nameSelect.push(item.name)
        calculatePrice(this.state.nameSelect)
      }
     
      this.setState({
        activeTopping: tempTopping,
        activeToppingIng: tempVeggie,
        toppingBase: tempBaseTopping,
      })
      this.setState(prevState => {
        let selection = Object.assign({}, prevState.selection); 
        selection.topping = tempVeggie;
        return { selection };
      })
    };
    const addLeftImage = (e, veggie) => {
      e.stopPropagation();
      let tempActiveTopping = [...this.state.activeToppingIng]
      let index = 0;
      tempActiveTopping.forEach((item, i) => {
        if(item === veggie.name) {
          index = i;
        }
      })
      let tempToppingBase = [...this.state.toppingBase];
      tempToppingBase[index] = StaticLeft;

      this.setState({
        toppingBase: tempToppingBase
      })
    }
    const addWholeImage = (e, veggie) => {
      e.stopPropagation();
      let tempActiveTopping = [...this.state.activeToppingIng]
      let index = 0;
      tempActiveTopping.forEach((item, i) => {
        if(item === veggie.name) {
          index = i;
        }
      })
      let tempToppingBase = [...this.state.toppingBase];
      tempToppingBase[index] = StaticWhole;
      this.setState({
        toppingBase: tempToppingBase
      })
    }
    const addRightImage = (e, veggie) => {
      e.stopPropagation();
      let tempActiveTopping = [...this.state.activeToppingIng]
      let index = 0;
      tempActiveTopping.forEach((item, i) => {
        if(item === veggie.name) {
          index = i;
        }
      })
      let tempToppingBase = [...this.state.toppingBase];
      tempToppingBase[index] = StaticRight;
      this.setState({
        toppingBase: tempToppingBase
      })
    }
    const calculatePrice = (nameSelect) => {
      let price = 0;
      if(nameSelect.length > 4) {
        for (let i = 4; i < nameSelect.length; i++) {
          let veggie= this.state.toppingVeggieData.filter(top => top.name === nameSelect[i]);
          let meat= this.state.toppingMeatData.filter(top => top.name === nameSelect[i]);
          let cheese= this.state.toppingCheeseData.filter(top => top.name === nameSelect[i]);
          if(veggie.length > 0) {
            price += veggie[0].price;
          }
          if(meat.length > 0) {
            price += meat[0].price;
          }
          if(cheese.length > 0) {
            price += cheese[0].price;
          }
        }
      } else {
        price = 0;
      }
      this.setState({
        priceTopping: price,
      })
    }
    
    const plusQuantity = (e, item) => {
      e.stopPropagation()
      let veggie = [...this.state.toppingVeggieData]
      veggie.forEach((ing) => {
        if(ing.name === item.name) {
          item.count = item.count + 1;
          this.state.nameSelect.push(item.name)
        }
      })
      let meat = [...this.state.toppingMeatData]
      meat.forEach(ing => {
        if(ing.name === item.name) {
          item.count = item.count + 1;
          this.state.nameSelect.push(item.name)
        }
      })
      let cheese = [...this.state.toppingCheeseData]
      cheese.forEach(ing => {
        if(ing.name === item.name) {
          item.count = item.count + 1;
          this.state.nameSelect.push(item.name)
        }
      })
      calculatePrice(this.state.nameSelect)
      this.setState({
        toppingVeggieData: veggie,
        toppingMeatData: meat,
        toppingCheeseData: cheese
      })
    } 
    
    const minusQuantity = (e, item) => {
      e.stopPropagation();
      let veggie = [...this.state.toppingVeggieData]
      veggie.forEach(ing => {
        if(ing.name === item.name) {
          if(item.count >= 2) {
            item.count = item.count - 1;
            let index = 0;
            this.state.nameSelect.forEach((name, i) =>{
              if(name === item.name) {
                index = i;
              }
            })
            this.state.nameSelect.splice(index, 1);
          }
        }
      })

      let meat = [...this.state.toppingMeatData]
      meat.forEach(ing => {
        if(ing.name === item.name) {
          if(item.count >= 2) {
            item.count = item.count - 1;
          }
        }
      })
      let cheese = [...this.state.toppingCheeseData]
      cheese.forEach(ing => {
        if(ing.name === item.name) {
          if(item.count >= 2) {
            item.count = item.count - 1;
          }
        }
      })
      calculatePrice(this.state.nameSelect)
      this.setState({
        toppingVeggieData: veggie,
        toppingMeatData: meat,
        toppingCheeseData: cheese
      })
    }
    
    return <div className="sub-tab-content">
      {
        activeSubTab === 1 && <div className="sub-tab-1">
          <div className="ingredients">
            {
              this.state.toppingVeggieData.map((veggie, index) => {
                return (
                  <div className={"baseSauce-item" + (activeTopping.filter(top => top === veggie._id).length > 0 ? " active" : "")}
                      onClick={() => handleTopping(veggie)}
                      key={index}>
                  {
                    activeTopping.filter(top => top === veggie._id).length > 0 
                    ? <div className="selected">
                        <div className="baseSauce-img-selected">
                          <LazyLoadImage src={StaticVeggie} />
                        </div>
                        <div className="baseSauce-detail-selected">
                          <div className="baseSauce-title-selected">{veggie.name}</div>
                          <div className="icon-half">
                            <button onClick={(e) => addLeftImage(e, veggie)}><BsCircleHalf /></button>
                            <button onClick={(e) => addWholeImage(e, veggie)}><BsCircleFill /></button>
                            <button className="flip" onClick={(e) => addRightImage(e, veggie)}><BsCircleHalf /></button>
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
                          <LazyLoadImage src={StaticVeggie} />
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
        activeSubTab === 2 && <div className="sub-tab-2">
          <div className="ingredients">
            {
              this.state.toppingMeatData.map((meat, index) => {
                return (
                  <div className={"baseSauce-item" + (activeTopping.filter(top => top === meat._id).length > 0 ? " active" : "")}
                      onClick={() => handleTopping(meat)}
                      key={index}>
                  {
                    activeTopping.filter(top => top === meat._id).length > 0 
                    ? <div className="selected">
                        <div className="baseSauce-img-selected">
                          <LazyLoadImage src={StaticMeat} />
                        </div>
                        <div className="baseSauce-detail-selected">
                          <div className="baseSauce-title-selected">{meat.name}</div>
                          <div className="icon-half">
                            <button onClick={(e) => addLeftImage(e, meat)}><BsCircleHalf /></button>
                            <button onClick={(e) => addWholeImage(e, meat)}><BsCircleFill /></button>
                            <button className="flip" onClick={(e) => addRightImage(e, meat)}><BsCircleHalf /></button>
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
                          <LazyLoadImage src={StaticMeat} />
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
        activeSubTab === 3 && <div className="sub-tab-3">
          <div className="ingredients">
            {
              this.state.toppingCheeseData.map((cheese, index) => {
                return (
                  <div className={"baseSauce-item" + (activeTopping.filter(top => top === cheese._id).length > 0 ? " active" : "")}
                      onClick={() => handleTopping(cheese)}
                      key={index}>
                  {
                    activeTopping.filter(top => top === cheese._id).length > 0 
                    ? <div className="selected">
                        <div className="baseSauce-img-selected">
                          <LazyLoadImage src={StaticCheese} />
                        </div>
                        <div className="baseSauce-detail-selected">
                          <div className="baseSauce-title-selected">{cheese.name}</div>
                          <div className="icon-half">
                            <button onClick={(e) => addLeftImage(e, cheese)}><BsCircleHalf /></button>
                            <button onClick={(e) => addWholeImage(e, cheese)}><BsCircleFill /></button>
                            <button className="flip" onClick={(e) => addRightImage(e, cheese)}><BsCircleHalf /></button>
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
  }
  _renderExtraIngredients = () => {
    let { extraTopping, activeExtra, activeExtraTopping, toppingExtra } = this.state;

    const handleExtra = (item) =>  {
      let tempExtra = [...this.state.activeExtra];
      let tempExtraTopping = [...toppingExtra];
      let tempName = [...activeExtraTopping];

      if (tempExtra.filter(top => top === item.id).length > 0) {
        const index = tempExtra.indexOf(tempExtra.filter(top => top === item.id)[0]);
        tempExtra.splice(index, 1);
        tempExtraTopping.splice(index, 1);
        tempName.splice(index, 1)
      } else {
        tempExtra.push(item.id);
        tempExtraTopping.push(item.toppingSrc[this.state.type])
        tempName.push(item.name)
      }
      this.setState({
        activeExtra: tempExtra,
        activeExtraTopping: tempName,
        toppingExtra: tempExtraTopping
      })
      this.setState(prevState => {
        let selection = Object.assign({}, prevState.selection); 
        selection.extra = tempName;
        return { selection };
      })
    };
    const addLeftImage = (e) => {
      e.stopPropagation();
      this.setState({type: "leftSrc"})
    }
    const addWholeImage = (e) => {
      e.stopPropagation();
      this.setState({type: "wholeSrc"})
    }
    const addRightImage = (e) => {
      e.stopPropagation();
      this.setState({type: "rightSrc"})
    }

    return <div className="sub-tab-content">
      
        <div className="sub-tab-1">
          <div className="ingredients">
          {
            extraTopping.map((extra, index) => {
              return (
                <div className={"baseSauce-item" + (activeExtra.filter(top => top === extra.id).length > 0 ? " active" : "")}
                    onClick={() => handleExtra(extra)}
                    key={index}>
                {
                  activeExtra.filter(top => top === extra.id).length > 0 
                  ? <div className="selected">
                      <div className="baseSauce-img-selected">
                        <LazyLoadImage alt={extra.src.alt} src={extra.src.src} />
                      </div>
                      <div className="baseSauce-detail-selected">
                        <div className="baseSauce-title-selected">{extra.name}</div>
                        <BiDollarCircle className="icon" /> <br />
                        <div className="icon-half">
                          <button className="style" onClick={addLeftImage}><BsCircleHalf /></button>
                          <button onClick={addWholeImage}><BsCircleFill /></button>
                          <button className="flip" onClick={addRightImage}><BsCircleHalf /></button>
                        </div>
                          <div className="baseSauce-cals-selected">{extra.cals} Cals</div>
                      </div>
                    </div>
                  : <div className="img-wrap">
                      <div className="baseSauce-detail">
                        <div className="title">Select</div> 
                          <div style={{clear: "both"}}></div>
                        <div className="baseSauce-name">{extra.name}</div> 
                          <div style={{clear: "both"}}></div>
                        <BiDollarCircle className="icon" /> <br />
                          <div style={{clear: "both"}}></div>
                        <div className="baseSauce-cals">{extra.cals} Cals</div>
                      </div>
                      <div className="baseSauce-img">
                        <LazyLoadImage alt={extra.src.alt} src={extra.src.src} />
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
  }
  _renderSpecialIngredients = () => {
    let { special, activeSpecial } = this.state;

    const handleSpecial = (item) =>  {
      this.setState({activeSpecial: item.id});
      this.setState({activeSpecialTopping: item.name})
      this.setState(prevState => {
        let selection = Object.assign({}, prevState.selection); 
        selection.special = item.name;
        return { selection };
      })
    } 

    return <div className="sub-tab-content">
      
         <div className="sub-tab-1">
          <div className="ingredients">
          {
            special.map((special, index) => {
              return (
                <div className={"baseSauce-item" + (activeSpecial === special.id ? " active" : "")}
                    onClick={() => handleSpecial(special)}
                    key={index}>
                {
                  activeSpecial === special.id 
                  ? <div className="selected">
                      <div className="baseSauce-img-selected" >
                        <LazyLoadImage alt={special.src.alt} src={special.src.src} />
                      </div>
                      <div className="baseSauce-detail-selected">
                        <div className="baseSauce-title-selected">{special.name}</div>
                        <BiDollarCircle className="icon" /> <br />
                          <div className="baseSauce-cals-selected">{special.cals} Cals</div>
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
                        <div className="baseSauce-cals">{special.cals} Cals</div>
                      </div>
                      <div className="baseSauce-img">
                        <LazyLoadImage alt={special.src.alt} src={special.src.src} />
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
  }
  
  render() {
    const { activeTab, tabs } = this.state;

    return (
        <div className="customization-page">
          <div className="top-tabs">
            {
              tabs.map(tab => {
                return this._renderTabItem(tab, activeTab);
              })
            }
          </div>
          <div className="tab-content">
            {
              activeTab === 1 && <div className="tab-1">
                {
                  this._renderPizzaBoard()
                }
                {
                  this._renderSubTab()
                }
                {
                  this._renderIngredients()
                }
              </div>
            }
            {
              activeTab === 2 && <div className="tab-2">
                {
                  this._renderPizzaBoard()
                }
                {
                  this._renderToppingSubTab()
                }
                {
                  this._renderToppingIngredients()
                }
              </div>
            }
            {
              activeTab === 3 && <div className="tab-3">
                {
                  this._renderPizzaBoard()
                }
                {
                  this._renderExtraIngredients()
                }
              </div>
            }
            {
              activeTab === 4 && <div className="tab-4">
                {
                  this._renderPizzaBoard()
                }
                {
                  this._renderSpecialIngredients()
                }
              </div>
            }
          </div>
        </div>
    );
  }
}

export default Customization