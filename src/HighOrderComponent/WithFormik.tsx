import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup";


const WithFormik = ({children}:any) => {
     const getInitialValues = () => { return { name:  ""}};
    const getValidationSchema = ()=> { return Yup.object().shape({} ) }
    const handleSubmit = ()=>{}
  return (
    <div className='WithFormik'>
         {
        <Formik
        onSubmit={handleSubmit }
        initialValues={getInitialValues}
        validationSchema={getValidationSchema}
      >
        
        {(formik) => (
          <Form>
            {children}
          </Form>
        )}
      </Formik>
      }
   
    </div>
  )
}

export default WithFormik