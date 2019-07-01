import React from 'react';

const submitStyle = {
    maxWidth: 200,
    margin: 30
};

export default (props) => {
    return (
        <button type="submit" style={submitStyle}>Enviar</button>
    );
};