import React, { PureComponent } from "react";
import Field from "../../Orgs/Field";
import FormStep from "../../Orgs/FormStep";

import setHash from "../../../helpers/setHash";

export default class CriticalInfoStep extends PureComponent {
    render() {
        const me = this, props = me.props;

        return (
            <FormStep id={props.id} title={props.title}>
                <Field labelWidth="lg" id="fullname" ref={el => me.firstInputRef = el} label="Nome completo do condutor principal" onFocus={setHash.bind(null, props.id, "fullname")} />

                <Field labelWidth="lg" id="primaryendereco" label="Endereço principal de pernoite do carro" />

                <Field labelWidth="md" id="phonerecado" label="Telefone para recado" />

                <Field labelWidth="md" id="primaryemail" label="E-mail principal" />

                <Field labelWidth="md" id="anocarro" label="Ano do modelo do carro" />
            </FormStep>
        );
    }
}