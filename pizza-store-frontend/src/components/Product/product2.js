import React, { Component } from "react";
import Button from "../Button/button1";

export default class ProductTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

        this.clickEvent = this.clickEvent.bind(this);
    }

    clickEvent() {
        window.location.href = "/customize"
    }

    render() {
        return (
            <div className={this.props.className} key={this.props.key}>
                <div className="product-position">
                    <img src={this.props.source} alt="#" />
                    <div><div className="title">{this.props.title}</div>
                        <div className="desc">{this.props.desc}</div>
                        <div className="price">{this.props.price}</div>
                        <Button Color="#FCA017"One onClick={this.clickEvent} value={this.props.button_value} />
                    </div>
                </div>
            </div>
        )
    }
}