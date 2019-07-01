import React from "react";

const formStepStyle = {
    padding: 30
};

export default (props) => {
    const title = props.title && <label>{props.title}</label>;
    
    return (
        <section id={props.id} style={formStepStyle}>
            {title}
            
            {props.children}
        </section>
    )
}