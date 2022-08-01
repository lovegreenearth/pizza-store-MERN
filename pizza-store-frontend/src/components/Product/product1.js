import React, { Component } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import Button_1 from "../Button/button1";

export default class Product1 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className={this.props.className} key={this.props.number}>
                <div className="product-position">
                    <img src={this.props.source} alt="#" />
                    <div className="title-button">
                        <div className="title">{this.props.title}</div>
                        <Button_1 value={this.props.button_value} />
                    </div>
                </div>
            </div>
        )
    }
}