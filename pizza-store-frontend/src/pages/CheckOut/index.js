import React, { useState } from 'react'
import "./style.scss"
import Button from "../../components/Button/button1"
import { useSelector } from "react-redux";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import Static from "../../assets/img/cart-small.png"
import { BsDashCircle } from "react-icons/bs"
import { AiOutlineCheckCircle } from "react-icons/ai";
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import NativeSelect from '@mui/material/NativeSelect';
import { BsCheckLg } from "react-icons/bs";

const SelectRadio = (props) => {
  const [activeRadio, setActiveRadio] = useState([false, false])
  const selectOne = () => {
    setActiveRadio([true, false])
  }
  const selectTwo = () => {
    setActiveRadio([false, true])
  }
  return (
    <div className='select-mode' >
      <div className='select-option' onClick={() => {selectOne(); props.one();}}>
        {activeRadio[0] ? <AiOutlineCheckCircle style={{color: "#FCA017", fontSize: "20px"}} />  : <div className='option-tag' />}
        <div className={'option-content' + (activeRadio[0] ? " activeContent" : "")}>{props.titleOne}</div>
      </div>
      <div className='select-option'onClick={() => {selectTwo(); props.two();}}>
        {activeRadio[1] ? <AiOutlineCheckCircle style={{color: "#FCA017", fontSize: "20px"}} />  : <div className='option-tag' />}
        <div className={'option-content' + (activeRadio[1] ? " activeContent" : "")}>{props.titleTwo}</div>
      </div>
    </div>
  )
}

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const CheckOut = () => {
  const [active, setActive] = useState(false)
  const [activeAddress, setActiveAddress] = useState(false)
  const [selectMode, setSelectMode] = useState([false, false])
  const [selectTime, setSelectTime] = useState([false, false])
  const [selectPlace, setSelectPlace] = useState([false, false])
  const [selectConfirm, setSelectConfirm] = useState(false)
  
  const items = useSelector(state => state.items);

  const activeShow = () => {
    setActive(current => !current)
  }
  const showAddress = () => {
    setActiveAddress(current => !current)
  }

  const priceSubTotal = items.reduce((accumulator, value) => {
    return accumulator + value.price * value.quantity;
  }, 0)

  const priceGST = 7.56;
  const pricePST = 0.00;
  const priceTotal = priceSubTotal + priceGST + pricePST;
  const pickup = () => {
    setSelectMode([true, false])
    setSelectPlace([false, false])
  }
  const delivery = () => {
    setSelectMode([false, true])
  }
  const now = () => {
    setSelectTime([true, false])
  }
  const future = () => {
    setSelectTime([false, true])
  }
  const residential = () => {
    setSelectPlace([true, false])
  }
  const university = () => {
    setSelectPlace([false, true])
  }
  const frontDoor = () => {
    console.log("frontDoor")
  }
  const backDoor = () => {
    console.log("BackDoor")
  }
  const confirm = () => {
    console.log("confirm")
    setSelectConfirm(current => !current)
  }

  const [values, setValues] = useState({
    textmask: '(100) 000-0000',
  });
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const InputCSS = {
    '&.MuiInputBase-root:after': {
      borderBottom: '2px solid black'
    },
    ':hover:not(.Mui-disabled):before': {
      borderBottom: '2px solid rgba(0, 0, 0, 0.6)'
    },
    '&.MuiInputBase-root:before': {
      borderBottom: '1px solid rgba(0, 0, 0, 0.6)'
    },
  }
  const LabelCSS = {
    '&.Mui-focused': {
      color: 'rgba(0, 0, 0, 0.6)',
    },
  }
  const InputOtherCSS = {
    width: '80%',
    marginBottom: '20px',
    ':before': {
      borderBottom: '1px solid rgba(0, 0, 0, 0.6)'
    },
    ':hover:not(.Mui-disabled):before': {
      borderBottom: '2px solid rgba(0, 0, 0, 0.6)'
    },
    ':after': {
      borderBottom: '2px solid black'
    }
  }
  const FormCSS = {
    width: '80%'
  }
  const NickCSS = {
    '& .Mui-focused': {
      color: 'rgba(0, 0, 0, 0.6)',
    },
    '& >: after': {
      borderBottom: '1px solid rgba(0, 0, 0, 0.42)'
    }
  }

  var getMonth = function(idx) {
    var objDate = new Date();
    objDate.setDate(1);
    objDate.setMonth(idx-1);
    var locale = "en-us",
      month = objDate.toLocaleString(locale, { month: "short" });
      return month;
  }
  var days = ['Sun','Mon','Tues','Wed','Thrus','Fri','Sat'];
  const setThird = new Date()
  setThird.setDate(setThird.getDate()+2)
  const setFourth = new Date()
  setFourth.setDate(setFourth.getDate()+3)

  const third = days[setThird.getDay()] + ", " +  getMonth(setThird.getMonth()+1) + " " + setThird.getDate()
  const fourth = days[setFourth.getDay()] + ", " +  getMonth(setFourth.getMonth()+1) + " " + setFourth.getDate()

  return (
    <div className='checkOut-container'>
      <div className='main-title'>CHECK OUT</div>
      <div className='main-content'>
        <div className='summary'>
          <div className='summary-title'>Order Summary</div>
          <hr />
          <div className='detail-group'>
            <div className='summary-detail'>
              <div className='detail-title'>Sub total:</div>
              <div className='detail-price'>{"$ " + (priceSubTotal).toFixed(2)}</div>
            </div>
            <div className='summary-detail'>
              <div className='detail-title'>GST:</div>
              <div className='detail-price'>{"$ " + priceGST}</div>
            </div>
            <div className='summary-detail'>
              <div className='detail-title'>PST:</div>
              <div className='detail-price'>{"$ " + pricePST}</div>
            </div>
          </div>
          <hr />
          <div className='total'>
            <div className='total-title'>Total:</div>
            <div className='total-price'>{"$ " + (priceTotal).toFixed(2)}</div>
          </div>
          <Button value="Place Order" />
        </div>
        <div className='review'>
          <div className='review-order'>
            <div className='order-title' onClick={activeShow}>
              <div className='title-txt'>1. Review Order</div>
              <div className='title-symbol'>
                {active ? <VscTriangleDown /> : <VscTriangleUp />}
              </div>
            </div>
            <hr />
            {
              active && 
              <div className='order-content'>
                {
                  items.map((item, index) => {
                    return (
                      <div className='review-individual' key={index}>
                        <div className='individual-img'>
                          <img src={Static} alt="Review" />
                        </div>
                        <div className='individual-content'>
                          <div className='individual-title'>
                            {
                              item.extra 
                              ? item.size + " " + item.name
                              : item.name
                            }
                          </div>
                          <div className='individual-desc'>
                            {
                              item.extra 
                              ? item.extra
                              : <div className="combo-part">
                              {
                                 Object.entries(item).map(([key, val]) => 
                                 key === 'name' || key === 'extra' || key === 'price' || key === 'quantity' ||
                                 key === 'size' || key === 'status' 
                                 ? ''
                                 : <div className="combo-content" key={key}>
                                    <span className="key">{key + ": "}</span>
                                    <span className="value">{val}</span>
                                 </div>
                               )
                              }
                            </div>
                            }
                          </div>
                          <div className='individual-final'>
                            <div className='remove-button'><BsDashCircle style={{fontSize: "12px"}} /> Remove</div>
                            <div className='individual-price'>{"$ " + (item.quantity*item.price).toFixed(2)}</div>
                          </div>
                        </div>
                       
                      </div>
                    )
                  })
                }
                <hr />
              </div>
            }
            
          </div>
          <div className='address'>
            <div className='address-title' onClick={showAddress}>
              <div className='title-txt'>2. Address</div>
              <div className='title-symbol'>{activeAddress ? <VscTriangleDown /> : <VscTriangleUp />}</div>
            </div>
          {
            activeAddress && 
            <div className='address-selection'>
              <SelectRadio titleOne="PickUp" titleTwo="Delivery" one={pickup} two={delivery} />
              <SelectRadio titleOne="For Now" titleTwo="For Future" one={now} two={future} />
              {
                selectMode[1] && <SelectRadio titleOne="Residential" titleTwo="University" one={residential} two={university} />
              }
              
            </div>
          }
          {
            selectTime[1] && 
            <div className='select-time'>
              <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Select Date
                  </InputLabel>
                  <NativeSelect
                    defaultValue={30}
                    inputProps={{
                      name: 'age',
                      id: 'uncontrolled-native',
                    }}
                    sx={{width: '80%'}}
                  >
                    <option value={10}>Today</option>
                    <option value={20}>Tomorrow</option>
                    <option value={30}>{third}</option>
                    <option value={30}>{fourth}</option>
                  </NativeSelect>
                </FormControl>
              
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Select Time
                  </InputLabel>
                  <NativeSelect
                    defaultValue={30}
                    inputProps={{
                      name: 'age',
                      id: 'uncontrolled-native',
                    }}
                    sx={{width: '80%'}}
                  >
                    <option value={10}>9:00, AM</option>
                    <option value={20}>9:15, AM</option>
                    <option value={30}>9:30, AM</option>
                    <option value={30}>9:45, AM</option>
                    <option value={10}>10:00, AM</option>
                    <option value={20}>10:15, AM</option>
                    <option value={30}>10:30, AM</option>
                    <option value={30}>10:45, AM</option>
                    <option value={10}>11:00, AM</option>
                    <option value={20}>11:15, AM</option>
                    <option value={30}>11:30, AM</option>
                    <option value={30}>11:45, AM</option>
                  </NativeSelect>
                </FormControl>
            </div>
          }
          {
            selectMode[0] && 
            <div className='pickup'>
              <div className='select-option' onClick={() => confirm()}>
                {selectConfirm && <BsCheckLg style={{color: "#FCA017", fontSize: "20px"}} />}
                <div className={'option-content' + (selectConfirm ? " activeContent" : "")}>Please Confirm Address</div>
              </div>
            </div>
            
          }
          {
            selectMode[1] && selectPlace[0] && 
            <div className='delivery'>
              <TextField
                label="Nick Name(Optional)"
                variant="standard"
                focused
                sx={{width: '50%', ...NickCSS}}
              />
              <br />
              <TextField
                label="Number & Street Name"
                variant="standard"
                focused
                sx={{width: '50%', ...NickCSS}}
              />
              <div className='extra-option'>
                <TextField
                  label="Apt # (Optional)"
                  variant="standard"
                  focused
                  sx={{width: '30%', ...NickCSS}}
                />
                <TextField
                  label="Buzzer(Optional)"
                  variant="standard"
                  focused
                  sx={{width: '30%', ...NickCSS}}
                />
                <SelectRadio titleOne="Front Door" titleTwo="Back Door" one={frontDoor} two={backDoor} />
              </div>
            </div>
          }
          {
            selectMode[1] && selectPlace[1] && 
            <div className='university'>
              <TextField
                label="Nick Name(Optional)"
                variant="standard"
                focused
                sx={{width: '50%', ...NickCSS}}
              />
              <br />
              <div className='select-university'>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native" 
                    sx={{'&.Mui-focused': {color: 'rgba(0, 0, 0, 0.6)'}}}>
                    Select University
                  </InputLabel>
                  <NativeSelect
                    defaultValue={30}
                    inputProps={{
                      name: 'age',
                      id: 'uncontrolled-native',
                    }}
                    sx={{width: '80%', ':after': {borderBottom: '2px solid rgba(0, 0, 0, 0.6)'}}}
                  >
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </NativeSelect>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native"
                    sx={{'&.Mui-focused': {color: 'rgba(0, 0, 0, 0.6)'}}}>
                    Select Building
                  </InputLabel>
                  <NativeSelect
                    defaultValue={30}
                    inputProps={{
                      name: 'age',
                      id: 'uncontrolled-native',
                    }}
                    sx={{width: '80%', ':after': {borderBottom: '2px solid rgba(0, 0, 0, 0.6)'}}}
                  >
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </NativeSelect>
                </FormControl>
              </div>
              <div className='select-room'>
              <FormControl fullWidth sx={{width: '80%'}}>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native"
                    sx={{'&.Mui-focused': {color: 'rgba(0, 0, 0, 0.6)'}}}>
                    Building Entrance(Optional)
                  </InputLabel>
                  <NativeSelect
                    defaultValue={30}
                    inputProps={{
                      name: 'age',
                      id: 'uncontrolled-native',
                    }} sx={{width: '80%', ':after': {borderBottom: '2px solid rgba(0, 0, 0, 0.6)'}}}
                    
                  >
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </NativeSelect>
                </FormControl>
                <FormControl variant="standard" sx={{width: '80%'}} >
                  <InputLabel htmlFor="input-with-icon-adornment" 
                    sx={{'&.Mui-focused': {color: 'rgba(0, 0, 0, 0.6)'}}}>
                    Room Number
                  </InputLabel>
                  <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start"  >
                        <AccountCircle />
                      </InputAdornment>
                    } sx={{width: '80%', ':after': {borderBottom: '2px solid rgba(0, 0, 0, 0.6)'}}} 
                  />
                </FormControl>
              </div>
            </div>
          }
          <hr />
          <div className='contact-info'>
              <div className='contact-title'>Contact Information</div>
              <div className='contact-option'>
                <div className='input-info'>
                  <FormControl variant="standard" sx={{...FormCSS}}>
                    <InputLabel htmlFor="formatted-text-mask-input" sx={{...LabelCSS}}>Phone Number</InputLabel>
                    <Input
                      value={values.textmask}
                      onChange={handleChange}
                      name="textmask"
                      id="formatted-text-mask-input"
                      inputComponent={TextMaskCustom}
                      sx={{
                        ...InputCSS,
                        }}
                    />
                  </FormControl>
                  <FormControl variant="standard" sx={{...FormCSS}}>
                    <InputLabel htmlFor="input-with-icon-adornment" sx={{...LabelCSS}}>
                      Extension(Optional)
                    </InputLabel>
                    <Input
                      id="input-with-icon-adornment"
                      startAdornment={
                        <InputAdornment position="start"  >
                          <AccountCircle />
                        </InputAdornment>
                      } sx={{...InputOtherCSS}}
                    />
                  </FormControl>
                  
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut;