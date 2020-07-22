import React from 'react'

function Form(props) {
    const {
        values,
        inputChange,
        submit,
        // errors,
        // disabled,
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
                        onChange={(e) => onInputChange(e)}
                        name='name'
                        type='text'
                    />
                </label>
                <button>Sumbmit</button>
            </div>
        </form>
    )
}

export default Form