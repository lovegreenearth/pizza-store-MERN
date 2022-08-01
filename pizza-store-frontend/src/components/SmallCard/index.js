import './style.scss'
import React, { Component } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import images from '../../../constant';

export default class SmallCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            select: "Select",
        }
    }

    render() {
        return (
            <div className="small-card">
                <div className="small-card-detail-list">
                    <div className="small-card-select">{this.state.select}</div>
                    <div className="small-card-kind">{this.props.kind}</div>
                    <div className="small-card-cals">{this.props.cals}</div>
                </div>
                <LazyLoadImage alt={images.smallCardImg.alt} src={images.smallCardImg.src} />
            </div>
        )
    }
}