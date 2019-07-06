import React, { Component } from "react";
import ScrollableAnchor from 'react-scrollable-anchor';
import setHash from "../../../helpers/setHash";

const formStepStyle = {
    padding: 30,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
};

const titleStyle = {
    fontSize: 30
};

export default class FormStep extends Component {
    render() {
        const props = this.props,
            title = props.title && <label style={titleStyle}>{props.title}</label>,
            childrenWithSmoothScroll = props.children.map(child => {
                return React.cloneElement(child, { onFocus: setHash.bind(null, props.id) });
            });

        return (
            <ScrollableAnchor id={props.id}>
                <div style={formStepStyle}>
                    {title}

                    {childrenWithSmoothScroll}
                </div>
            </ScrollableAnchor>
        )
    }
}