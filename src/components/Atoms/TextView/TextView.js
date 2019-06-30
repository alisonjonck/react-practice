import React from 'react';

const TextView = (props) => {
    return (
        <label className="text-view">{props.children}</label>
    );
};

export default TextView;