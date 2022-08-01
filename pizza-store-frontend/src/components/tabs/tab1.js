import './tab1.scss'
import React, { Component } from "react";
import FirstTab from "./all-tabs/firstTab";
import SecondTab from "./all-tabs/second-tab";
import ThirdTab from "./all-tabs/third-tab";
import FourthTab from "./all-tabs/fourth-tab";
import Cheese from "../svg/cheese";
import Topping from "../svg/topping";

export default class Tab_1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: "tab_1_1",
        }
    }

    handleTab1() {
        this.setState({ activeTab: "tab_1_1" })
    };

    handleTab2() {
        this.setState({ activeTab: "tab_1_2" })
    };

    handleTab3() {
        this.setState({ activeTab: "tab_1_3" })
    };

    handleTab4() {
        this.setState({ activeTab: "tab_1_4" })
    };

    render() {
        return (
            <div className="tabs">
                <ul className="nav">
                    <li className={this.state.activeTab === "tab_1_1" ? "active border-radius-left" : "initial-left"} onClick={() => this.handleTab1()}><Cheese className="cheese-icon" />Daugh/Sause<br />/Cheese</li>
                    <li className={this.state.activeTab === "tab_1_2" ? "active" : ""} onClick={() => this.handleTab2()}><Topping className="topping-icon" />Toppings</li>
                    <li className={this.state.activeTab === "tab_1_3" ? "active" : ""} onClick={() => this.handleTab3()}>Extra Flaviour Toppings</li>
                    <li className={this.state.activeTab === "tab_1_4" ? "active border-radius-right" : "initial-right"} onClick={() => this.handleTab4()}>Special Introduction</li>
                </ul>
                <div className="outlet">
                    {this.state.activeTab === "tab_1_1" && <FirstTab />}
                    {this.state.activeTab === "tab_1_2" && <SecondTab />}
                    {this.state.activeTab === "tab_1_3" && <ThirdTab />}
                    {this.state.activeTab === "tab_1_4" && <FourthTab />}
                </div>
            </div>
        );
    }
};