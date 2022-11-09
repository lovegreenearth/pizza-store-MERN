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
  const [ activeBaseSpecial, setActiveBaseSpecial ] = useState("");
  const [ activeDough, setActiveDough ] = useState("");
  const [ activeSauce, setActiveSauce ] = useState("");
  const [ activeCheese, setActiveCheese ] = useState("");
  const [ activeSpecial, setActiveSpecial ] = useState("");
 
  // Fetch Data from MongoDB
  const [doughData, setDoughData] = useState([]);
  const [sauceData, setSauceData] = useState([]);
  const [cheeseData, setCheeseData] = useState([]);
  const [specialData, setSpecialData] = useState([]);
  const [toppingVeggieData, setToppingVeggieData] = useState([]);
  const [toppingMeatData, setToppingMeatData] = useState([]);
  const [toppingCheeseData, setToppingCheeseData] = useState([]);

  // topping click
  const [activeTopping, setActiveTopping] = useState([]);
  const [activeToppingIng, setActiveToppingIng] = useState([]);
  const [toppingBase, setToppingBase] = useState([]);
  const [nameSelect, setNameSelect] = useState([])
  const [priceTopping, setPriceTopping] = useState(0)

  // pizza Board
  const [selection, setSelection] = useState({})

  useEffect(() => {
    if(props.status) {
      setActiveTab(props.data[0])
      setActiveSubTab(props.data[1])
      setActiveToppingSubTab(props.data[2])
      setActiveBaseDough(props.data[3])
      setActiveBaseSauce(props.data[4])
      setActiveBaseCheese(props.data[5])
      setActiveBaseSpecial(props.data[6])
      setActiveTopping(props.data[7])
      setActiveToppingIng(props.data[8])
      setToppingBase(props.data[9])
      setNameSelect(props.data[10])
      setSelection(props.data[11])
    } else {
      setActiveTab(1)
      setActiveSubTab(1)
      setActiveToppingSubTab(1)
      setActiveBaseDough("")
      setActiveBaseSauce("")
      setActiveBaseCheese("")
      setActiveBaseSpecial("")
      setActiveTopping([])
      setActiveToppingIng([])
      setToppingBase([])
      setNameSelect([])
      setSelection({})
    }
  }, [props.show])
  
  useEffect(() => {

    axios.post('/doughs', {

    })
    .then(res => res.data)
    .then(data => {
      setDoughData(data)
    })

    axios.post('/sauce', {

    })
    .then(res => res.data)
    .then(data => {
      setSauceData(data)
    })

    axios.post('/cheese', {

    })
    .then(res => res.data)
    .then(data => {
      setCheeseData(data);
    })

    axios.post('/special', {

    })
    .then(res => res.data)
    .then(data => {
      setSpecialData(data)
    })

    axios.post('/topping', {

    })
    .then(res => res.data)
    .then(data => {
      // setToppingData(data)
      data.filter(top => top.category === "Veggie").forEach(object => {
        object.count = 1;
        object.status = [false, true, false]
      });
      setToppingVeggieData(data.filter(top => top.category === "Veggie"))

      data.filter(top => top.category === "Meat").forEach(object => {
        object.count = 1;
        object.status = [false, true, false]
      });
      setToppingMeatData(data.filter(top => top.category === "Meat"))
      
      data.filter(top => top.category === "Cheese").forEach(object => {
        object.count = 1;
        object.status = [false, true, false]
      });
      setToppingCheeseData(data.filter(top => top.category === "Cheese"))
    })
  }, [])

  const _renderPizzaBoard = () => {

    return (
      <div className="pizza-board">
      <div className="title">
        <div className='pizza-title'>{props.title}</div>
        <div className='pizza-price'>{"$ " + (props.price + priceTopping).toFixed(2)}</div>
      </div>
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
          <LazyLoadImage alt={StaticInitial} src={StaticInitial} />
          {
            toppingBase.map((base, index) => {
              return (
                <div className="multiTopping">
                  <LazyLoadImage alt={base} src={"/" + base} key={base}/>
                </div>
              )
            })
          }
          
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
      setActiveDough(dough.name);
      setSelection({
        ...selection,
        "dough": dough.name
      })
    }

    const handleSauce = (sauce) => {
      setActiveBaseSauce(sauce._id);
      setActiveSauce(sauce.name);
      setSelection({
        ...selection,
        "sauce": sauce.name
      })
    }

    const handleCheese = (cheese) => {
      setActiveBaseCheese(cheese._id);
      setActiveCheese(cheese.name);
      setSelection({
        ...selection,
        "cheese": cheese.name
      })
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
    
    let tempTopping = [...activeTopping];
    let tempVeggie = [...activeToppingIng];
    let tempBaseTopping = [...toppingBase];

    const handleTopping = (item) => {
      if (tempTopping.filter(top => top === item._id).length > 0) {
        const index = tempTopping.indexOf(tempTopping.filter(top => top === item._id)[0]);
        const indexName = tempVeggie.indexOf(tempVeggie.filter(top => top === item.name)[0]);
        
        tempTopping.splice(index, 1);
        tempVeggie.splice(indexName, 1);
        tempBaseTopping.splice(indexName, 1);
        nameSelect.splice(indexName,1);

        let newArray = nameSelect.filter(
          (value) => {
            return value !== item.name
          }
        )
        setNameSelect(newArray)    // remove the whole names in nameSelect
        calculation(newArray)

        toppingVeggieData.forEach(ing => {
          if(ing.name === item.name) {
            item.count = 1;
          }
        })
        toppingMeatData.forEach(ing => {
          if(ing.name === item.name) {
            item.count = 1;
          }
        })
        toppingCheeseData.forEach(ing => {
          if(ing.name === item.name) {
            item.count = 1;
          }
        })

      } else {
        tempTopping.push(item._id);
        tempVeggie.push(item.name);
        tempBaseTopping.push(item.imgWhole);
        nameSelect.push(item.name);
        calculation(nameSelect)
      }
      setActiveTopping(tempTopping);
      setToppingBase(tempBaseTopping);
      setActiveToppingIng(tempVeggie);
      setSelection({
        ...selection,
        "topping": tempVeggie
      })
    }
    const minusQuantity = (e, item) => {
      e.stopPropagation();
      let veggie = [...toppingVeggieData]
      veggie.forEach(ing => {
        if(ing.name === item.name) {
          if(item.count >= 2) {
            item.count = item.count - 1;
            let index = 0;
            nameSelect.forEach((name, i) =>{
              if(name === item.name) {
                index = i;
              }
            })
            nameSelect.splice(index, 1);
          }
        }
      })
      let meat = [...toppingMeatData]
      meat.forEach(ing => {
        if(ing.name === item.name) {
          if(item.count >= 2) {
            item.count = item.count - 1;
            let index = 0;
            nameSelect.forEach((name, i) =>{
              if(name === item.name) {
                index = i;
              }
            })
            nameSelect.splice(index, 1);
          }
        }
      })
      let cheese = [...toppingCheeseData]
      cheese.forEach(ing => {
        if(ing.name === item.name) {
          if(item.count >= 2) {
            item.count = item.count - 1;
            let index = 0;
            nameSelect.forEach((name, i) =>{
              if(name === item.name) {
                index = i;
              }
            })
            nameSelect.splice(index, 1);
          }
        }
      })
      setToppingVeggieData(veggie)
      setToppingMeatData(meat)
      setToppingCheeseData(cheese)
      calculation(nameSelect)
    }
    const plusQuantity = (e,item) => {
      e.stopPropagation();
      let veggie = [...toppingVeggieData]
      veggie.forEach((ing) => {
        if(ing.name === item.name) {
          item.count = item.count + 1;
          nameSelect.push(item.name)
        }
      })
      let meat = [...toppingMeatData]
      meat.forEach(ing => {
        if(ing.name === item.name) {
          item.count = item.count + 1;
          nameSelect.push(item.name)
        }
      })
      let cheese = [...toppingCheeseData]
      cheese.forEach(ing => {
        if(ing.name === item.name) {
          item.count = item.count + 1;
          nameSelect.push(item.name)
        }
      })
      setToppingVeggieData(veggie);
      setToppingMeatData(meat);
      setToppingCheeseData(cheese)
      calculation(nameSelect)
    }
    
    const calculation = (nameSelect) => {
      let price = 0;
      if(nameSelect.length > 4) {
        for (let i = 4; i < nameSelect.length; i++) {
          let veggie = toppingVeggieData.filter(top => top.name === nameSelect[i]);
          let meat = toppingMeatData.filter(top => top.name === nameSelect[i]);
          let cheese = toppingCheeseData.filter(top => top.name === nameSelect[i]);
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
      setPriceTopping(price)
    }
    const addLeftImage = (e, item) => {
      e.stopPropagation();
      let tempActiveTopping = [...activeToppingIng]
      let index = 0;
      tempActiveTopping.forEach((c, i) => {
        if(c === item.name) {
          index = i;
          
        }
      })
      let tempToppingBase = [...toppingBase];
      tempToppingBase[index] = item.imgLeft;

      let veggieData = [...toppingVeggieData]
      veggieData.forEach((ing) => {
        if(ing.name === item.name) {
          item.status = [true, false, false]
        }
      })
      let meatData = [...toppingMeatData]
      meatData.forEach((ing) => {
        if(ing.name === item.name) {
          item.status = [true, false, false]
        }
      })
      let cheeseData = [...toppingCheeseData]
      cheeseData.forEach((ing) => {
        if(ing.name === item.name) {
          item.status = [true, false, false]
        }
      })

      setToppingBase(tempToppingBase)
    }
    const addWholeImage = (e, item) => {
      e.stopPropagation();
      let tempActiveTopping = [...activeToppingIng]
      let index = 0;
      tempActiveTopping.forEach((c, i) => {
        if(c === item.name) {
          index = i;
        }
      })
      let tempToppingBase = [...toppingBase];
      tempToppingBase[index] = item.imgWhole;

      let veggieData = [...toppingVeggieData]
      veggieData.forEach((ing) => {
        if(ing.name === item.name) {
          item.status = [false, true, false]
        }
      })
      let meatData = [...toppingMeatData]
      meatData.forEach((ing) => {
        if(ing.name === item.name) {
          item.status = [false, true, false]
        }
      })
      let cheeseData = [...toppingCheeseData]
      cheeseData.forEach((ing) => {
        if(ing.name === item.name) {
          item.status = [false, true, false]
        }
      })

      setToppingBase(tempToppingBase)
    }
    const addRightImage = (e, item) => {
      e.stopPropagation();
      let tempActiveTopping = [...activeToppingIng]
      let index = 0;
      tempActiveTopping.forEach((c, i) => {
        if(c === item.name) {
          index = i;
        }
      })
      let tempToppingBase = [...toppingBase];
      tempToppingBase[index] = item.imgRight;

      let veggieData = [...toppingVeggieData]
      veggieData.forEach((ing) => {
        if(ing.name === item.name) {
          item.status = [false, false, true]
        }
      })
      let meatData = [...toppingMeatData]
      meatData.forEach((ing) => {
        if(ing.name === item.name) {
          item.status = [false, false, true]
        }
      })
      let cheeseData = [...toppingCheeseData]
      cheeseData.forEach((ing) => {
        if(ing.name === item.name) {
          item.status = [false, false, true]
        }
      })

      setToppingBase(tempToppingBase)
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
                      key={index}>
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
      setActiveBaseSpecial(special._id);
      setActiveSpecial(special.name)
      setSelection({
        ...selection,
        "special": special.name
      })
    }
    return (
      <div className="sub-tab-content">
      
         <div className="sub-tab-1">
          <div className="ingredients">
          {
            specialData.map((special, index) => {
              return (
                <div className={"baseSauce-item" + (activeBaseSpecial === special._id ? " active" : "")}
                    onClick={() => handleSpecial(special)}
                    key={special.name}>
                {
                  activeBaseSpecial === special._id 
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

  const status = [
    activeTab, 
    activeSubTab, 
    activeToppingSubTab, 
    activeBaseDough, 
    activeBaseSauce,
    activeBaseCheese,
    activeBaseSpecial,
    activeTopping,
    activeToppingIng,
    toppingBase,
    nameSelect,
    selection,
  ]
  const total = activeDough + " " + activeSauce + " " + activeCheese + " " + activeToppingIng + " " + activeSpecial
  
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
      <button className='closeButton' onClick={() => props.onHide(status, total, priceTopping)}><AiOutlineClose /></button>
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