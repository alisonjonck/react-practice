import React, { PureComponent } from "react";

const fieldStyle = {
    fontSize: 22,
    minHeight: 60,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const inputStyle = {
    maxHeight: 45,
    margin: 5
};

const labelStyle = {
    padding: 5
};

export default class Field extends PureComponent {
    render() {
        const me = this, props = me.props,
            labelWidth = props.labelWidth === 'md' ? 220 : props.labelWidth === 'lg' ? 350 : 120;
            
        const labelStyleFormatted = Object.assign({}, labelStyle, { width: labelWidth });

        return (
            <div style={fieldStyle}>
                <label htmlFor={props.id} style={labelStyleFormatted}>{props.label}</label>
                <input style={inputStyle} type="text" id={props.id} autoFocus={props.autoFocus} onFocus={props.onFocus} />
            </div>
        );
    }
}