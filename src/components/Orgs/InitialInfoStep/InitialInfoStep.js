import React from "react";
import Field from "../../Orgs/Field";
import FormStep from "../../Orgs/FormStep";

import setHash from "../../../helpers/setHash";

export default (props) => {
    return (
        <FormStep id={props.id} title={props.title}>
            <Field id="nome" label="Nome" autoFocus onFocus={setHash.bind(null, props.id, "nome")} />

            <Field id="sobrenome" label="Sobrenome" />

            <Field id="email" label="E-mail" />

            <Field id="endereco" label="Endereço" />

            <Field id="celular" label="Celular" onFocus={setHash.bind(null, props.id, "celular")} />
        </FormStep>
    );
}