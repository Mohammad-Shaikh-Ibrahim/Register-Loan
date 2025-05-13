import './RequestLoanForm.css'
import MyInput from './MyInput';
import Modal from './Modal';
import { useState } from "react";
import { LoanInputContext } from "../contexts/LoanInputContextForm"

export default function RequestLoanForm() {
    const [errorMessage, setErrorMessage] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [formInputs, setFormInputs] = useState({
        name: '',
        phoneNumber: '',
        age: '',
        isEmployee: false,
        salary: ''
    });

    function handleSubmitPage(event) {
        event.preventDefault();
        setErrorMessage(null)
        const { age, phoneNumber } = formInputs
        if (phoneNumber.length < 10 || phoneNumber < 12) {
            setErrorMessage("The Phone Number Must Be Between 10 & 12 digit")
        }
        else if (age < 18 || age > 100) {
            setErrorMessage("The Age Not Allowed")
        }
        setShowModal(true)
        console.log(formInputs);
    }

    function handleHiddeModal() {
        setShowModal(false)
    }

    function handleNameInputChange(value) {
        setFormInputs({ ...formInputs, name: value });
    }

    function handlePhoneNumberInputChange(value) {
        setFormInputs({ ...formInputs, phoneNumber: value });
    }

    function handleAgeInputChange(value) {
        setFormInputs({ ...formInputs, age: value });
    }

    let btnIsDisabled = formInputs.name == "" || formInputs.phoneNumber == "" || formInputs.age == ""
    return (
        <div className='flex' onClick={handleHiddeModal}>
            <form onSubmit={handleSubmitPage} className="request-loan-form">
                <h1>Request Loan</h1>
                <hr />
                <LoanInputContext.Provider value={{
                    labelTitle: "Name",
                    handleChange: handleNameInputChange,
                    inputValue: formInputs.name,
                }}>
                    <MyInput/>
                </LoanInputContext.Provider>
                <LoanInputContext.Provider value={{
                    labelTitle: "Phone Number",
                    handleChange: handlePhoneNumberInputChange,
                    inputValue: formInputs.phoneNumber,
                }}>
                    <MyInput/>
                </LoanInputContext.Provider>
                <LoanInputContext.Provider value={{
                    labelTitle: "Age",
                    handleChange: handleAgeInputChange,
                    inputValue: formInputs.age,
                }}>
                    <MyInput/>
                </LoanInputContext.Provider>
                <label htmlFor="isEmployee">Are You an Employee?</label>
                <input
                    id="isEmployee"
                    name="isEmployee"
                    type="checkbox"
                    checked={formInputs.isEmployee}
                    onChange={e => setFormInputs({ ...formInputs, isEmployee: e.target.checked })}
                />

                <div className={`salary-wrapper ${formInputs.isEmployee ? "visible" : ""}`}>
                    <label htmlFor="salary">Salary</label>
                    <select
                        id="salary"
                        name="salary"
                        value={formInputs.salary}
                        onChange={(e) =>
                            setFormInputs({ ...formInputs, salary: e.target.value })
                        }
                    >
                        <option value="">Select your salary range</option>
                        <option value="Less than $500">Less than $500</option>
                        <option value="Between $500 and $2000">Between $500 and $2000</option>
                        <option value="Above $2000">Above $2000</option>
                    </select>
                </div>

                <button type="submit"
                    disabled={btnIsDisabled}
                    className={btnIsDisabled ? "disabled" : ""}
                >Submit</button>
            </form>
            <Modal isVisible={showModal} errorMessage={errorMessage} />
        </div>
    );
}
