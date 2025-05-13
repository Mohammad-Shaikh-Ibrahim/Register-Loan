import { useContext } from "react"
import { LoanInputContext } from "../contexts/LoanInputContextForm"
import { UserContext } from "../contexts/UserContext";

export default function MyInput() {
    const inputContext = useContext(LoanInputContext);
    const userData = useContext(UserContext)

    return (
        <>
            <label htmlFor={inputContext.labelTitle}>{userData.name} {inputContext.labelTitle}</label>
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