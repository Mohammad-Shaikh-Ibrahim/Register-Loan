import './RegisterForm.css'
import Modal from './Modal';
import { useState } from "react";

export default function RegisterForm() {
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
    let btnIsDisabled = formInputs.name == "" || formInputs.phoneNumber == "" || formInputs.age == ""
    return (
        <div className='flex' onClick={handleHiddeModal}>
            <form onSubmit={handleSubmitPage} className="register-form">
                <h1>Register Loan</h1>
                <hr />
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={formInputs.name}
                    onChange={e => setFormInputs({ ...formInputs, name: e.target.value })}
                />

                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="number"
                    value={formInputs.phoneNumber}
                    onChange={e => setFormInputs({ ...formInputs, phoneNumber: e.target.value })}
                />

                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    name="age"
                    type="number"
                    value={formInputs.age}
                    onChange={e => setFormInputs({ ...formInputs, age: e.target.value })}
                />

                <label htmlFor="isEmployee">Are You an Employee?</label>
                <input
                    id="isEmployee"
                    name="isEmployee"
                    type="checkbox"
                    checked={formInputs.isEmployee}
                    onChange={e => setFormInputs({ ...formInputs, isEmployee: e.target.checked })}
                />


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


                <button type="submit"
                    disabled={btnIsDisabled}
                    className={btnIsDisabled ? "disabled" : ""}
                >Submit</button>
            </form>
            <Modal isVisible={showModal} errorMessage={errorMessage} />
        </div>
    );
}
