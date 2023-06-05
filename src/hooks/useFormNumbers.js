import { useState } from "react"
import { formatCurrency } from "../helpers/currency.helper";

export const useFormNumbers = (initialState = {}) => {
    const [values, setValues] = useState(initialState);
    const reset = () => {
        setValues(initialState)
    }

    const handleInputChange = ({ target }) => {
        const formatted = formatCurrency(target.value)
        setValues({
            ...values,
            [target.name]: formatted
        })

    }
    return [values, handleInputChange, reset];
}
