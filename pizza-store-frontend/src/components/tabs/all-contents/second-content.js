import React, { Component } from "react";
import SmallCard from "../../small-card/small-card";

const Toppings = [
    {
        kind: 'pizza',
        cals: '80cal'
    },

    {
        kind: 'pizza',
        cals: '70cal'
    },

    {
        kind: 'pizza',
        cals: '60cal'
    },

    {
        kind: 'pizza',
        cals: '50cal'
    },

    {
        kind: 'pizza',
        cals: '40cal'
    },
    
    {
        kind: 'pizza',
        cals: '80cal'
    },

    {
        kind: 'pizza',
        cals: '70cal'
    },

    {
        kind: 'pizza',
        cals: '60cal'
    },
]

class SecondContent extends Component {
    render() {
        return (
            <div className="tab-content">
                <div className="left-content">
                </div>
                <div className="right-content">
                    {
                        Toppings.map((item, key) => {
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
export default SecondContent;