import './firstTab.scss'
import React, { Component } from "react";
import FirstContent from "../all-contents/first-content";
import SecondContent from "../all-contents/second-content";
import ThirdContent from "../all-contents/third-content";

export default class FirstTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: "first_tab_1",
        }
    };

    handleTab001() {
        this.setState({ activeTab: "first_tab_1" })
    };

    handleTab002() {
        this.setState({ activeTab: "first_tab_2" })
    };

    handleTab003() {
        this.setState({ activeTab: "first_tab_3" })
    };

    render() {
        return (
            <div className="tabs-2">
                <ul className="nav-2">
                    <li className={this.state.activeTab === "first_tab_1" ? "active" : ""} onClick={() => this.handleTab001()}>Daugh</li><span></span>
                    <li className={this.state.activeTab === "first_tab_2" ? "active" : ""} onClick={() => this.handleTab002()}>Base Sause</li><span></span>
                    <li className={this.state.activeTab === "first_tab_3" ? "active" : ""} onClick={() => this.handleTab003()}>Base Cheese</li>
                </ul>
                <div className="outlet-2">
                    {this.state.activeTab === "first_tab_1" && <FirstContent />}
                    {this.state.activeTab === "first_tab_2" && <SecondContent />}
                    {this.state.activeTab === "first_tab_3" && <ThirdContent />}
                </div>
            </div>
        );
    };
}