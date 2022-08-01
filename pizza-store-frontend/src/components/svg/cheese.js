import React, { Component } from "react";

export default class Cheese extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="33.597" height="27.087" {...this.props}>
                <g data-name="Group 65">
                    <path d="M17.864 15.353a1.41 1.41 0 1 1 0 .1z" fill={this.props.color} fillRule="evenodd" data-name="Ellipse 20" />
                    <path d="M33.122 9.033 21.889.262A1.236 1.236 0 0 0 20.63.105L.757 8.868C.303 9.057 0 9.512 0 10.007v15.845c0 .682.553 1.235 1.235 1.235h16.19c.682 0 1.235-.553 1.235-1.235a4.404 4.404 0 0 1 4.399-4.399 4.404 4.404 0 0 1 4.398 4.399c0 .682.553 1.235 1.236 1.235h3.669c.682 0 1.235-.553 1.235-1.235V10.007c0-.373-.171-.736-.475-.974ZM20.95 2.663l7.822 6.109H7.098l13.853-6.109Zm10.175 21.954h-1.31c-.583-3.2-3.391-5.634-6.757-5.634-3.366 0-6.175 2.434-6.758 5.634H2.47V11.242h28.655v13.375Z" fill={this.props.color} fillRule="evenodd" data-name="Path 14" />
                    <path d="M9.37 22.858a3.715 3.715 0 0 0 3.712-3.71 3.715 3.715 0 0 0-3.711-3.712 3.715 3.715 0 0 0-3.712 3.711 3.715 3.715 0 0 0 3.712 3.711Zm0-4.952c.685 0 1.241.557 1.241 1.241s-.556 1.241-1.24 1.241c-.685 0-1.241-.557-1.241-1.24 0-.685.556-1.242 1.24-1.242Z" fill={this.props.color} fillRule="evenodd" data-name="Path 13" />
                </g>
            </svg>
        )
    }
}