import React, { Component } from "react";
import Tab_1 from "./components/tabs/tab_1";
import InitialPizza from "./components/customize/initial_pizza";

export default class Customize extends Component {
    render() {
        return (
            <div className="customize-page">
                <Tab_1 />
                {/* <InitialPizza /> */}
            </div>
        );
    }
}
