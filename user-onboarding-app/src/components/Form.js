import React from 'react'

function Form(props) {
    const {
        values,
        inputChange,
        submit,
        errors,
        disabled,
    } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onInputChange  = event => {
        const { name, value } = event.target
        inputChange(name, value)
    }

    return (
        <form>
            <div>
                <h2 onSubmit={onSubmit}>Form </h2>
                <label>Name
                    <input
                        value={values.name} 
                        onChange={onInputChange}
                        name='name'
                        type='text'
                    />
                </label>
                <button disabled={disabled}>Submit</button>
                <div>
                    <div>{errors.name}</div>
                </div>
            </div>
        </form>
    )
}

export default Form