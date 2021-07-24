import React, { useState } from 'react'
import {
    Grid,
    TextField,
    Button,
    makeStyles,
    createStyles,
    Theme,
} from '@material-ui/core'
import BackImage from '../image/Layer2.jpg'
import * as Yup from 'yup'
import { Formik, Form, FormikProps } from 'formik'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '319px',
            height: '371px',
            padding: '16px 25px 17.9px',
            borderRadius: '5px',
            border: 'solid 1px #e6e6e6',
            backgroundColor: '#ffffff',
            margin: '0 auto',
        },
        btn2:{
            width: '269px',
            backgroundColor: '#e1e6ea',

        },
        textField: {
            '& > *': {
                width: '269px',
                marginLeft: '0'
            },
        },
        submitButton: {
            marginTop: '24px',
        },

        title: { textAlign: 'center' },
        successMessage: { color: 'green' },
        errorMessage: { color: 'red' },
        btn:{
            width: '269px',
            backgroundColor: '#3ab7d4'
        },
        email:{
            marginLeft:'5px',
            marginRight:'257px',
            fontFamily: 'Nexa',
            fontSize: '15px',    
            fontWeight: 'bold',    
            fontStretch: 'normal', 
            fontStyle: 'normal',
            lineHeight: '2.33',
            letterSpacing: '0.23px',
            textAlign: 'left',  
            color: '#474646',
        },
        text:{
            marginLeft:'71px',
            fontFamily: 'Nexa',
            fontSize: '20px',    
            fontWeight: 'bold',    
            fontStretch: 'normal', 
            fontStyle: 'normal',
            lineHeight: '2.33',
            letterSpacing: '0.23px',
            textAlign: 'left',  
            color: '#474646',
        },
        txt: {
            marginBottom: '5px',
            fontFamily: 'Nexa',
            fontSize: '15px',    
            fontWeight: 'bold',    
            fontStretch: 'normal', 
            fontStyle: 'normal',
            lineHeight: '2.33',
            letterSpacing: '0.23px',
            textAlign: 'left',  
            color: '#474646',

        }
    })
)
interface ForgetForm {
 
    email: string
  
}
interface IFormStatus {
    message: string
    type: string
}
interface IFormStatusProps {
    [key: string]: IFormStatus
}

const formStatusProps: IFormStatusProps = {
    success: {
        message: 'reset password successfull',
        type: 'success',
    },
    duplicate: {
        message: 'the email you entered unknown',
        type: 'error',
    },
    error: {
        message: 'Something went wrong. Please try again.',
        type: 'error',
    },
}
function ForgetPass(){
    const classes = useStyles()
    const [displayFormStatus, setDisplayFormStatus] = useState(false)
    const [formStatus, setFormStatus] = useState<IFormStatus>({
        message: '',
        type: '',
    })

    const resetPass = async (data: ForgetForm , resetForm: Function) => {
        try {
            // API call integration will be here. Handle success / error response accordingly.
            if (data) {
                setFormStatus(formStatusProps.success)
                resetForm({})
            }
        } catch (error) {
            const response = error.response
            if (
                response.data === 'invalid email' &&
                response.status === 400
            ) {
                setFormStatus(formStatusProps.duplicate)
            } else {
                setFormStatus(formStatusProps.error)
            }
        } finally {
            setDisplayFormStatus(true)
        }
    }
    return(
        <div style={{backgroundImage: `url(${BackImage})`,width: `100%`, height: `100%`,   padding: `165px 28px 135px` , objectFit: `contain`,

        opacity: `0.7`}}>
            <Formik
               initialValues={{
               
                email: '',
             
            }}
            onSubmit={(values: ForgetForm, actions) => {
                resetPass(values, actions.resetForm)
                setTimeout(() => {
                    actions.setSubmitting(false)
                }, 500)
            }}
         
            validationSchema={Yup.object().shape({
           
                email: Yup.string()
                    .email()
                    .required('Enter valid email-id'),
         
            })}

            
            >
              {(props: FormikProps<ForgetForm>) => {
                        const {
                            values,
                            touched,
                            errors,
                            handleBlur,
                            handleChange,
                            isSubmitting,
                        } = props
                        return (
                            <div className={classes.root}>
                            <h1 className={classes.text}>Forgot Password?</h1>
                            <span className={classes.txt}> We'll send you an email with a reset link</span>
                            <Form>
                            
                                <Grid
                                    container
                                    justify="space-around"
                                    direction="row"
                                >
                                    <span className={classes.email}>Email</span><br />
                                    <Grid
                                        item
                                        lg={10}
                                        md={10}
                                        sm={10}
                                        xs={10}
                                        className={classes.textField}
                                    >
                                        <TextField
                                            name="Email"
                                            id="email"
                                          
                                            value={values.email}
                                            variant="outlined"
                                            type="email"
                                            helperText={
                                                errors.email && touched.email
                                                    ? errors.email
                                                    : 'Enter your email.'
                                            }
                                            error={
                                                errors.email && touched.email
                                                    ? true
                                                    : false
                                            }
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        lg={10}
                                        md={10}
                                        sm={10}
                                        xs={10}
                                        className={classes.submitButton}
                                    >
                                        <Button
                                            type="submit"
                                            variant="contained"
                                        
                                            disabled={isSubmitting}
                                            className={classes.btn}
                                        >
                                          Reset Form
                                        </Button>
                                        {displayFormStatus && (
                                            <div className="formStatus">
                                                {formStatus.type === 'error' ? (
                                                    <p
                                                        className={
                                                            classes.errorMessage
                                                        }
                                                    >
                                                        {formStatus.message}
                                                    </p>
                                                ) : formStatus.type ===
                                                'success' ? (
                                                    <p
                                                        className={
                                                            classes.successMessage
                                                        }
                                                    >
                                                        {formStatus.message}
                                                    </p>
                                                ) : null}
                                            </div>
                                        )}
                                    </Grid>
                                   
                                    <Grid
                                        item
                                        lg={10}
                                        md={10}
                                        sm={10}
                                        xs={10}
                                        className={classes.submitButton}
                                    >
                                        <Button
                                            type="submit"
                                            variant="contained"
                                        
                                            disabled={isSubmitting}
                                            className={classes.btn2}
                                        >
                                           Cancel
                                        </Button>
                                        {displayFormStatus && (
                                            <div className="formStatus">
                                                {formStatus.type === 'error' ? (
                                                    <p
                                                        className={
                                                            classes.errorMessage
                                                        }
                                                    >
                                                        {formStatus.message}
                                                    </p>
                                                ) : formStatus.type ===
                                                'success' ? (
                                                    <p
                                                        className={
                                                            classes.successMessage
                                                        }
                                                    >
                                                        {formStatus.message}
                                                    </p>
                                                ) : null}
                                            </div>
                                        )}
                                    </Grid>
                                   
                                </Grid>
                            </Form>
                            </div>
                        )
                    }}

            </Formik>
           
        </div>
    )


}
export default ForgetPass;
