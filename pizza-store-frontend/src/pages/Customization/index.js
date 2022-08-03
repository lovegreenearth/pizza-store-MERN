import React, { Component, useState } from "react";
import Cheese from '../../components/svg/cheese';
import Topping from "../../components/svg/topping";
import { BsCheckCircleFill } from "react-icons/bs";
import { BiDollarCircle } from "react-icons/bi"
import images from '../../constant';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Quantity from "../../components/Button/qty";
import Button_1 from "../../components/Button/button1";
import { CustomizeData } from "./data";

export default class Customization extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      ...CustomizeData,
      quantity: 1
    }
  }
  _renderTabItem = (tab, activeTab) => {
    return <div className={"tab-item" + (activeTab === tab.id ? ' active-tab' : '')} 
                onClick={() => this.setState({activeTab: tab.id})} 
                key={tab.id}>
      {
        tab.id === 1 && <Cheese className="cheese-icon" />
      }
      {
        tab.id === 2 && <Topping className="cheese-icon" />
      }
      {tab.name}
    </div>;
  }

  _renderPizzaBoard = () => {
    const crieterias = [
      {
        id: 1,
        name: 'regular thin crust'
      },
      {
        id: 2,
        name: 'mozzarella cheese'
      },
      {
        id: 3,
        name: 'Hot Honey Drizzle'
      },
      {
        id: 4,
        name: 'Home Style Italian Tomato Sause'
      }
    ];

    const data = {
      price: 9.99,
      desc: "There are 2 more selections that are available in section TOPPINGS",
    };

    const setQty = (qty) => {
      this.setState({
        quantity: qty
      })
    }

    return <div className="pizza-board">
      <div className="title">
        My Pizza
      </div>
      <div className="configuration">
        <div className="criteria">
          {
            crieterias.map(c => {
              return <div className="criteria-item" key={c.id}>
                <BsCheckCircleFill />
                <span>{ c.name }</span>
              </div>
            })
          }
        </div>
        <div className="pizza-piece">
          <LazyLoadImage alt={images.initialPizzaImg.alt} src={images.initialPizzaImg.src} className="multi" />
        </div>
        <div className="add-cart">
          <div> 
            <div className="quantity-price">
                <Quantity onChange={setQty}/>
                <div className="price">{"$ " + data.price*this.state.quantity}</div>
            </div>
            <div className="desc">{data.desc}</div>
            <div className="cart-button">
                <Button_1 value="ADD TO CART" />
            </div>
          </div>
        </div>
      </div>
    </div>
  }

  _renderSubTabItems = (tab, activeTab, index) => {
    return <div className={"sub-tab-item" + (activeTab === tab.id ? ' active-sub-tab' : '')} 
                onClick={() => this.setState({activeSubTab: tab.id})} 
                key={tab.id}>
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
    let { DoughType, BaseSauce, BaseCheese, activeSubTab, activeIngredient } = this.state;

    const handleIngredient = (item) =>  {
      this.setState({activeIngredient: item})
    };
    return <div className="sub-tab-content">
      {
        activeSubTab === 1 && <div className="sub-tab-1">
          <div className="ingredients">
            {
              DoughType.map(ing => {
                return (
                  <div className={"ingredient-item" + (activeIngredient === ing.id ? " active" : "")}
                      onClick={() => handleIngredient(ing.id)}
                      id={ing.id} key={ing.id}>
                  {
                    activeIngredient === ing.id 
                    ? <div>
                        <div className="ingredient-img-selected">
                          <LazyLoadImage alt={ing.src.alt} src={ing.src.src} />
                        </div>
                        <div className="ingredient-detail-selected">
                          <div className="ingredient-title-selected">{ing.name}</div>
                           <div className="ingredient-cals-selected">{ing.cals} Cals</div>
                        </div>
                      </div>
                    : <div>
                        <div className="ingredient-detail">
                          <div className="title">Select</div> 
                            <div style={{clear: "both"}}></div>
                          <div className="ingredient-name">{ing.name}</div> 
                            <div style={{clear: "both"}}></div>
                          <div className="ingredient-cals">{ing.cals} Cals</div>
                        </div>
                        <div className="ingredient-img">
                          <LazyLoadImage alt={ing.src.alt} src={ing.src.src} />
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
        activeSubTab === 3 && <div className="sub-tab-2">
          <div className="ingredients">
            {
              BaseSauce.map(sauce => {
                return (
                  <div className={"baseSauce-item" + (activeIngredient === sauce.id ? " active" : "")}
                      onClick={() => handleIngredient(sauce.id)}
                      id={sauce.id} key={sauce.id}>
                  {
                    activeIngredient === sauce.id 
                    ? <div className="selected">
                        <div className="baseSauce-img-selected">
                          <LazyLoadImage alt={sauce.src.alt} src={sauce.src.src} />
                        </div>
                        <div className="baseSauce-detail-selected">
                          <div className="baseSauce-title-selected">{sauce.name}</div>
                          <BiDollarCircle className="icon" /> <br />
                           <div className="baseSauce-cals-selected">{sauce.cals} Cals</div>
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
                          <div className="baseSauce-cals">{sauce.cals} Cals</div>
                        </div>
                        <div className="baseSauce-img">
                          <LazyLoadImage alt={sauce.src.alt} src={sauce.src.src} />
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
        activeSubTab === 5 && <div className="sub-tab-3">
          <div className="ingredients">
            {
              BaseCheese.map(sauce => {
                return (
                  <div className={"baseSauce-item" + (activeIngredient === sauce.id ? " active" : "")}
                      onClick={() => handleIngredient(sauce.id)}
                      id={sauce.id} key={sauce.id}>
                  {
                    activeIngredient === sauce.id 
                    ? <div className="selected">
                        <div className="baseSauce-img-selected">
                          <LazyLoadImage alt={sauce.src.alt} src={sauce.src.src} />
                        </div>
                        <div className="baseSauce-detail-selected">
                          <div className="baseSauce-title-selected">{sauce.name}</div>
                          <BiDollarCircle className="icon" /> <br />
                           <div className="baseSauce-cals-selected">{sauce.cals} Cals</div>
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
                          <div className="baseSauce-cals">{sauce.cals} Cals</div>
                        </div>
                        <div className="baseSauce-img">
                          <LazyLoadImage alt={sauce.src.alt} src={sauce.src.src} />
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
    console.log(activeSubTab)
    return <div className="sub-tabs">
      {
        subToppingTabs.map((tab, index) => {
          return this._renderSubTabItems(tab, activeSubTab, index);
        })
      }
      
    </div>
  }
  _renderToppingIngredients = () => {
    let { Veggie, Meat, Cheese, activeSubTab, activeIngredient } = this.state;

    const handleIngredient = (item) =>  {
      this.setState({activeIngredient: item})
    };

    return <div className="sub-tab-content">
      {
        activeSubTab === 1 && <div className="sub-tab-1">
          <div className="ingredients">
            {
              Veggie.map(ing => {
                return (
                  <div className={"baseSauce-item" + (activeIngredient === ing.id ? " active" : "")}
                      onClick={() => handleIngredient(ing.id)}
                      id={ing.id} key={ing.id}>
                  {
                    activeIngredient === ing.id 
                    ? <div className="selected">
                        <div className="baseSauce-img-selected">
                          <LazyLoadImage alt={ing.src.alt} src={ing.src.src} />
                        </div>
                        <div className="baseSauce-detail-selected">
                          <div className="baseSauce-title-selected">{ing.name}</div>
                           <div className="baseSauce-cals-selected">{ing.cals} Cals</div>
                        </div>
                      </div>
                    : <div className="img-wrap">
                        <div className="baseSauce-detail">
                          <div className="title">Select</div> 
                            <div style={{clear: "both"}}></div>
                          <div className="baseSauce-name">{ing.name}</div> 
                            <div style={{clear: "both"}}></div>
                          <div className="baseSauce-cals">{ing.cals} Cals</div>
                        </div>
                        <div className="baseSauce-img">
                          <LazyLoadImage alt={ing.src.alt} src={ing.src.src} />
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
        activeSubTab === 3 && <div className="sub-tab-2">
          <div className="ingredients">
            {
              Meat.map(sauce => {
                return (
                  <div className={"baseSauce-item" + (activeIngredient === sauce.id ? " active" : "")}
                      onClick={() => handleIngredient(sauce.id)}
                      id={sauce.id} key={sauce.id}>
                  {
                    activeIngredient === sauce.id 
                    ? <div className="selected">
                        <div className="baseSauce-img-selected">
                          <LazyLoadImage alt={sauce.src.alt} src={sauce.src.src} />
                        </div>
                        <div className="baseSauce-detail-selected">
                          <div className="baseSauce-title-selected">{sauce.name}</div>
                          <BiDollarCircle className="icon" /> <br />
                           <div className="baseSauce-cals-selected">{sauce.cals} Cals</div>
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
                          <div className="baseSauce-cals">{sauce.cals} Cals</div>
                        </div>
                        <div className="baseSauce-img">
                          <LazyLoadImage alt={sauce.src.alt} src={sauce.src.src} />
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
        activeSubTab === 5 && <div className="sub-tab-3">
          <div className="ingredients">
            {
              Cheese.map(sauce => {
                return (
                  <div className={"baseSauce-item" + (activeIngredient === sauce.id ? " active" : "")}
                      onClick={() => handleIngredient(sauce.id)}
                      id={sauce.id} key={sauce.id}>
                  {
                    activeIngredient === sauce.id 
                    ? <div className="selected">
                        <div className="baseSauce-img-selected">
                          <LazyLoadImage alt={sauce.src.alt} src={sauce.src.src} />
                        </div>
                        <div className="baseSauce-detail-selected">
                          <div className="baseSauce-title-selected">{sauce.name}</div>
                          <BiDollarCircle className="icon" /> <br />
                           <div className="baseSauce-cals-selected">{sauce.cals} Cals</div>
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
                          <div className="baseSauce-cals">{sauce.cals} Cals</div>
                        </div>
                        <div className="baseSauce-img">
                          <LazyLoadImage alt={sauce.src.alt} src={sauce.src.src} />
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
    let { ExtraTopping, activeSubTab, activeIngredient } = this.state;

    const handleIngredient = (item) =>  {
      this.setState({activeIngredient: item})
    };

    return <div className="sub-tab-content">
      {
        activeSubTab === 1 && <div className="sub-tab-1">
          <div className="ingredients">
          {
              ExtraTopping.map(sauce => {
                return (
                  <div className={"baseSauce-item" + (activeIngredient === sauce.id ? " active" : "")}
                      onClick={() => handleIngredient(sauce.id)}
                      id={sauce.id} key={sauce.id}>
                  {
                    activeIngredient === sauce.id 
                    ? <div className="selected">
                        <div className="baseSauce-img-selected">
                          <LazyLoadImage alt={sauce.src.alt} src={sauce.src.src} />
                        </div>
                        <div className="baseSauce-detail-selected">
                          <div className="baseSauce-title-selected">{sauce.name}</div>
                          <BiDollarCircle className="icon" /> <br />
                           <div className="baseSauce-cals-selected">{sauce.cals} Cals</div>
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
                          <div className="baseSauce-cals">{sauce.cals} Cals</div>
                        </div>
                        <div className="baseSauce-img">
                          <LazyLoadImage alt={sauce.src.alt} src={sauce.src.src} />
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
  _renderSpecialIngredients = () => {
    let { Special, activeSubTab, activeIngredient } = this.state;

    const handleIngredient = (item) =>  {
      this.setState({activeIngredient: item})
    };

    return <div className="sub-tab-content">
      {
        activeSubTab === 1 && <div className="sub-tab-1">
          <div className="ingredients">
          {
              Special.map(sauce => {
                return (
                  <div className={"baseSauce-item" + (activeIngredient === sauce.id ? " active" : "")}
                      onClick={() => handleIngredient(sauce.id)}
                      id={sauce.id} key={sauce.id}>
                  {
                    activeIngredient === sauce.id 
                    ? <div className="selected">
                        <div className="baseSauce-img-selected" >
                          <LazyLoadImage alt={sauce.src.alt} src={sauce.src.src} />
                        </div>
                        <div className="baseSauce-detail-selected">
                          <div className="baseSauce-title-selected">{sauce.name}</div>
                          <BiDollarCircle className="icon" /> <br />
                           <div className="baseSauce-cals-selected">{sauce.cals} Cals</div>
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
                          <div className="baseSauce-cals">{sauce.cals} Cals</div>
                        </div>
                        <div className="baseSauce-img">
                          <LazyLoadImage alt={sauce.src.alt} src={sauce.src.src} />
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