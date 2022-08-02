import React, { Component, useState } from "react";
import Cheese from '../../components/svg/cheese';
import Topping from "../../components/svg/topping";
import { BsCheckCircleFill } from "react-icons/bs";
import images from '../../constant';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Quantity from "../../components/Button/qty";
import Button_1 from "../../components/Button/button1";
import { CustomizeData } from "./data";

export default class Customization extends Component {
  constructor(props) {
    super(props);

    this.state = { ...CustomizeData }
  }
  _renderTabItem = (tab, activeTab) => {
    return <div className={"tab-item" + (activeTab == tab.id ? ' active-tab' : '')} onClick={() => this.setState({activeTab: tab.id})} key={tab.id}>
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
      price: "$9.99",
      desc: "There are 2 more selections that are available in section TOPPINGS",
    };

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
          <LazyLoadImage alt={images.initialPizzaImg.alt} src={images.initialPizzaImg.src} />
        </div>
        <div className="add-cart">
          <div> 
            <div className="quantity-price">
                <Quantity />
                <div className="price">{data.price}</div>
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
    return <div className={"sub-tab-item" + (activeTab == tab.id ? ' active-sub-tab' : '')} onClick={() => this.setState({activeSubTab: tab.id})} key={tab.id}>
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

  _renderIngredients = (index) => {
    let { DoughType, BaseSauce, activeSubTab, activeIngredient } = this.state;
    
    const handleIngredient = (item) =>  {
      this.setState({activeIngredient: item})
      console.log(activeIngredient)
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
                          <div className="ingredient-title">Select</div> 
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
              BaseSauce.map(ing => {
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
                          <div className="ingredient-title">Select</div> 
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
        activeSubTab === 5 && <div className="sub-tab-3"></div>
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

              </div>
            }
            {
              activeTab === 3 && <div className="tab-3">

              </div>
            }
            {
              activeTab === 4 && <div className="tab-4">

              </div>
            }
          </div>
        </div>
    );
  }
}