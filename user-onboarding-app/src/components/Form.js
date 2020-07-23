import React from 'react'

function Form(props) {
    const {
        values,
        inputChange,
        checkboxChange,
        submit,
        errors,
        disabled,
    } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onCheckboxChange = event => {
        const { name, checked } = event.target
        checkboxChange(name, checked)
    }

    const onInputChange  = event => {
        const name = event.target.name
        const value = event.target.value
       
        inputChange(name, value)
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <h2>Form </h2>
                <label>Name
                    <input
                        value={values.name} 
                        onChange={onInputChange}
                        name='name'
                        type='text'
                    />
                </label>
                <label>Email
                    <input
                        value={values.email} 
                        onChange={onInputChange}
                        name='email'
                        type='email'
                    />
                </label>
                <label>Password
                    <input
                        value={values.password} 
                        onChange={onInputChange}
                        name='password'
                        type='password'
                    />
                </label>
                <h4>Do you agree to the Terms of Service?</h4>
                <label>Agree
                    <input 
                        type='checkbox'
                        name='termsOfService'
                        checked={values.termsOfService === true}
                        onChange={onCheckboxChange}
                    />
                </label>
                <button disabled={disabled}>Submit</button>
                <div className="form-errors">
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.termsOfService}</div>
                </div>
            </div>
        </form>
    )
}

export default Form