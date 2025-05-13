import { useContext } from "react"
import { LoanInputContext } from "../contexts/LoanInputContextForm"
export default function MyInput() {
    const inputContext = useContext(LoanInputContext);

    return (
        <>
            <label htmlFor={inputContext.labelTitle}>{inputContext.labelTitle}</label>
            <input
                id={inputContext.labelTitle}
                name={inputContext.labelTitle}
                type="text"
                value={inputContext.inputValue}
                onChange={(event) => { inputContext.handleChange(event.target.value) }}
            />
        </>
    );
}