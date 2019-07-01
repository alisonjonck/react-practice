import React from "react";
import Field from "../../Orgs/Field";

const formStyle = {
    display: "flex",
    flexDirection: "column"
};
const submitStyle = {
    maxWidth: 200,
    marginTop: 15
};

const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
}

export default () => {
    return (
        <div>
            {"Um formulário de exemplo"}

            <form style={formStyle} onSubmit={onSubmit}>
                <Field id="nome" label="Nome" />

                <Field id="sobrenome" label="Sobrenome" />

                <Field id="email" label="E-mail" />

                <Field id="endereco" label="Endereço" />

                <Field id="celular" label="Celular" />

                <button type="submit" style={submitStyle}>Enviar</button>
            </form>
        </div>
    );
}