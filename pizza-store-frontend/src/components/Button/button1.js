import './button1.scss'
import React, { Component } from "react";

export default class Button_1 extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="button">
                <button>{this.props.value}</button>
            </div>
        )
    }
}