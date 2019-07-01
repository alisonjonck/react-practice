import React from "react";
import InitialInfoStep from "../../Orgs/InitialInfoStep";
import CriticalInfoStep from "../../Orgs/CriticalInfoStep";
import SubmitButton from "../../Mols/SubmitButton";

const formStyle = {
    display: "flex",
    flexDirection: "column"
};

const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
}

export default () => {
    return (
        <div>
            <h3>{"Cotação Seguro - Minuto 😃"}</h3>

            <form style={formStyle} onSubmit={onSubmit}>
                <InitialInfoStep id="initial-info" title="Informações básicas" />

                <CriticalInfoStep id="critical-info" title="Dados do condutor principal" />

                <SubmitButton />
            </form>
        </div>
    );
}