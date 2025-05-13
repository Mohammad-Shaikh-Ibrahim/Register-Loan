export default function MyInput({ inputName, value, handleChange }) {
    return (<>
        <label htmlFor={inputName}>{inputName}</label>
        <input
            id={inputName}
            name={inputName}
            type="text"
            value={value}
            onChange={event => handleChange(event.target.value)}
        /></>)
}