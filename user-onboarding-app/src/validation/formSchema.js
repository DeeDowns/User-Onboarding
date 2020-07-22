import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Name must be at least 3 characters long.")
      .required("Name is Required."),
    email: yup
      .string()
      .email("Must be a valid email address.")
      .required("Email address is required."),
    password: yup
      .string()
      .min(6,"Password must be at least 6 characters long.")
      .required("Password is required."),
    termsOfService: yup
      .boolean()
      .required("Please agree to the terms of service")
  });


export default formSchema