import React, { Component } from 'react';

class FormAssinatura extends Component {
    constructor() {
        super();
    }

    onSubmitHandler(event) {
        event.preventDefault();
    }

    render() {
        var me = this, props = me.props;

        return (
            <form onSubmit={me.onSubmitHandler} {...props}>
                <input type="text" placeholder="Seu e-mail aqui" />

                <button type="submit">Assinar</button>
            </form>
        );
    }
}

export default FormAssinatura;