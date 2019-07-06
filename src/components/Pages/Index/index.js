import React from "react";
import InitialInfoStep from "../../Orgs/InitialInfoStep";
import CriticalInfoStep from "../../Orgs/CriticalInfoStep";
import SubmitButton from "../../Mols/SubmitButton";

const formStyle = {
    display: "flex",
    flexDirection: "column",
    height: '100%'
};

const titleStyle = {
    textAlign: 'center',
    width: '100%'
};

const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
}

export default () => {
    return (
        <div>
            <h1 style={titleStyle}>{"Cotação Seguro - Minuto 😃"}</h1>

            <form style={formStyle} onSubmit={onSubmit}>
                <InitialInfoStep id="initial-info" title="Informações básicas" />

                <CriticalInfoStep id="critical-info" title="Dados do condutor principal" />

                <SubmitButton />
            </form>
        </div>
    );
}