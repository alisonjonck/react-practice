import React from "react";
import Field from "../../Orgs/Field";
import FormStep from "../../Orgs/FormStep";

export default (props) => {
    return (
        <FormStep id={props.id} title={props.title}>
            <Field id="nome" label="Nome" />

            <Field id="sobrenome" label="Sobrenome" />

            <Field id="email" label="E-mail" />

            <Field id="endereco" label="Endereço" />

            <Field id="celular" label="Celular" />
        </FormStep>
    );
}