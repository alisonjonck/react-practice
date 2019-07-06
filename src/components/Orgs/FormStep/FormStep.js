import React from "react";

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

export default (props) => {
    const title = props.title && <label style={titleStyle}>{props.title}</label>;
    
    return (
        <section id={props.id} style={formStepStyle}>
            {title}
            
            {props.children}
        </section>
    )
}