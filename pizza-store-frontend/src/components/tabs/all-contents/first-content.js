import React, { Component } from "react";
import SmallCard from "../../small-card/small-card";

const Daugh_Sauce_Cheese = [
    {
        kind: 'Regular Dough',
        cals: '80cal'
    },

    {
        kind: 'Regular Dough',
        cals: '70cal'
    },

    {
        kind: 'Regular Dough',
        cals: '60cal'
    },

    {
        kind: 'Regular Dough',
        cals: '50cal'
    },

    {
        kind: 'Regular Dough',
        cals: '40cal'
    },
]

class FirstContent extends Component {
    render() {
        return (
            <div className="tab-content">
                <div className="left-content">
                </div>
                <div className="right-content">
                    {
                        Daugh_Sauce_Cheese.map((item, key) => {
                            return (
                                <SmallCard kind={item.kind} cals={item.cals} key={key} />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
};
export default FirstContent;