import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Name must be at least 3 characters long.")
      .required("Name is Required."),
    // email: yup
    //   .string()
    //   .email("")
    //   .required(""),
    // password: yup
    //   .string()
    //   .oneOf(""),
    // termsOfService: yup
    //   .string()
    //   .oneOf("")
  });


export default formSchema