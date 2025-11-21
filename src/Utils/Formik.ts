import { getIn } from "formik"

export const getFieldErrorState = (form: any, name: string) => {
    const error = getIn(form.errors, name)
    const touch = getIn(form.touched, name)
    return !!(touch && error)
  }
  
  export const getHelperOrErrorText = (form: any, name: string) => {
    const error = getIn(form.errors, name)
    const touch = getIn(form.touched, name)
    if (touch && error) {
      return error
    }
    return ''
  }