import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import formSchema from './validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'
import User from './components/User'


const initialFormValues = {
  name: '',
  // email: '',
  // password: '',
  // termsOfService: false,
}

const initialFormErrors = {
  name: '',
  // email: '',
  // password: '',
}
const initialUsers = []
const initialDisabled = true


function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
    .then(res => {
      console.log(res.data.data)
      setUsers(res.data.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        console.log(res)
        setUsers([ res.data, ...users ])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const inputChange = (name, value) => {
    setFormValues({...formValues, [name]: value})
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })
  }

  const submit = () => {
    const newUser = {
      name: formValues.name.trim()
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="App">  
      <Form 
        values={formValues}
        inputChange={inputChange}
        submit={submit}
      /> 
      {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }
    </div>
  );
}

export default App;
