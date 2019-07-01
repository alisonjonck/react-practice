import React, { PureComponent } from "react";

const fieldStyle = {
    fontSize: 12,
    marginTop: 5
};
const labelStyle = {
    padding: 5
};

export default class Field extends PureComponent {
    render() {
        const me = this, props = me.props;

        return (
            <div style={fieldStyle}>
                <label htmlFor={props.id} style={labelStyle}>{props.label}</label>
                <input type="text" id={props.id} autoFocus={props.autoFocus} onFocus={props.onFocus} />
            </div>
        );
    }
}