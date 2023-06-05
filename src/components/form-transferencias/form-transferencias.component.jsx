import React from "react";
import FormInput from "../form-input/form-input.component";
import "./form-transferencias.styles.scss";
import {useFormNumbers} from '../../hooks/useFormNumbers'
import { currencyToNumber } from "../../helpers/currency.helper";

export const FormTransferencias = () => {
    const [formValues, handleChange] = useFormNumbers({
        transfer: "",
    });
    const { transfer } = formValues;
    const handleClick = () => {
        const p = currencyToNumber(transfer)
        console.log(p);
    }
    return (
        <div className="form-transferir">
            <FormInput
                name="transfer"
                type="text"
                value={transfer}
                handleChange={handleChange}
                label="Monto a transferir"
                required
            />
        </div>
    );
};
