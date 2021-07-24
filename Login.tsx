import React, { useState } from 'react'
import {
    Grid,
    TextField,
    Button,
    makeStyles,
    createStyles,
    Theme,
} from '@material-ui/core'

import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import Logo from '../image/logo-pie-people.svg'



import BackImage from '../image/Layer2.jpg'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {

            [theme.breakpoints.up('xs')]:{
                width: '319px',
                height: '512px',
                padding: '26.9px 24.6px 50.2px 25px',
                marginLeft: '100px'
            },
           [theme.breakpoints.up('sm')]:{
                width: '480px',
                height: '593.6px'
           },
           
            borderRadius: '5px',
            border: 'solid 1px #e6e6e6',
            backgroundColor: '#ffffff',
          
        },
        textField: {
            '& > *': {
                [theme.breakpoints.up('sm')]:{
                    width: '388px',
                    height:'63px'
                },
              
                [theme.breakpoints.up('xs')]:
                {
                    width: '269px',
                    height: '63px'
                },
            },
        },
        input:{
            [theme.breakpoints.up('xs')]:{
                width: '269px',
                height: '40px'
            },
            [theme.breakpoints.up('sm')]:{
                width: '388px',
                height: '48px'
            },
        },
        submitButton: {
            marginTop: '24px',
          
        },
        btn:{
           
            backgroundColor: '#3ab7d4',
            [theme.breakpoints.down('sm')]:{
                width: '386px',
                height: '50px'

            },
            [theme.breakpoints.up('xs')]:{
                width: '269px',
            },
        },
        title: { textAlign: 'center' },
        successMessage: { color: 'green' },
        errorMessage: { color: 'red' },
       logo:{
           [theme.breakpoints.up('xs')]:{
                  width: '91.3px',
                height: '91.3px',
                marginLeft: '114px', 
    }, 
        [theme.breakpoints.up('sm')]: {
            width: '115px',
            height: '115px'
        },
     
        margin: '0 auto',
       
        objectFit: 'contain'
       },
       email:{
        width: '41px',
        height: '19px',
       marginRight:'138px',
   
        fontFamily: 'Nexa',
        fontSize: '15px',    
        fontWeight: 'bold',    
        fontStretch: 'normal', 
        fontStyle: 'normal',
        lineHeight: '2.33',
        letterSpacing: '0.23px',
        textAlign: 'left',  
        color: '#474646',
        marginBottom: '30px'
       },
       password:{
        
        fontFamily: 'Nexa',
        fontSize: '15px',    
        fontWeight: 'bold',    
        fontStretch: 'normal', 
        fontStyle: 'normal',
        lineHeight: '2.33',
        letterSpacing: '0.23px',
        textAlign: 'left',  
        color: '#474646',
        marginBottom: '30px'
       },
       for:{
        [theme.breakpoints.up('xs')]:{
            marginLeft: '174px',
        },
      
        fontFamily: 'Nexa',    
        fontSize: '14px' ,   
        textDecoration: 'none',
        fontStretch: 'normal',
        fontStyle: 'normal',   
        lineHeight: '2.5',  
        letterSpacing: 'normal',    
        textAlign: 'left',
        color: '#474646'

       },
       acont:{
        fontFamily: 'Nexa',
        fontSize: '14px'  ,
          
        fontStretch: 'normal',     
        fontStyle: 'normal',     
        lineHeight: '2.5',    
        letterSpacing: 'normal', 
        textAlign: 'left',
        color: '#474646',
        marginTop: '30.8px',
        marginBottom: '50px',
       },
       sign:{
           textDecoration: 'none',
           fontWeight: 'bold',
           color: '#3ab7d4'
       },
       back:{
        padding: '165px 28px 135px'
       }
    })
)

interface ILoginForm {
    email: string
    password: string
   
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
        message: 'sign in successfully.',
        type: 'success',
    },
    duplicate: {
        message: 'Email-id does not  exist. Please use different email-id.',
        type: 'error',
    },
    error: {
        message: 'Something went wrong. Please try again.',
        type: 'error',
    },
}

const Login: React.FunctionComponent = () => {
    const classes = useStyles()
    const [displayFormStatus, setDisplayFormStatus] = useState(false)
    const [formStatus, setFormStatus] = useState<IFormStatus>({
        message: '',
        type: '',
    })

    const userSign = async (data: ILoginForm, resetForm: Function) => {
        try {
           
            if (data) {
                setFormStatus(formStatusProps.success)
                resetForm({})
            }
        } catch (error) {
            const response = error.response
            if (
                response.data === 'this email or username does not exist' &&
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

    return (
        <div style={{backgroundImage: `url(${BackImage})`,width: `100%`, height: `100%`,    objectFit: `contain`,

        opacity: `0.7` }} className={classes.back}>
           
            
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    
                    }}
                    onSubmit={(values: ILoginForm, actions) => {
                        userSign(values, actions.resetForm)
                        setTimeout(() => {
                            actions.setSubmitting(false)
                        }, 500)
                    }}
                    validationSchema={Yup.object().shape({
                   
                        email: Yup.string()
                            .email()
                            .required('Enter valid email-id'),
                        password: Yup.string()
                            .matches(
                                /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/
                            )
                            .required(
                                'Please valid password. One uppercase, one lowercase, one special character and no spaces'
                            ),
                   
                    })}
                >
                    {(props: FormikProps<ILoginForm>) => {
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
                            <img src={Logo}  className={classes.logo}/>
                            <Form>
                            
                                <Grid
                                    container
                                    justify="space-around"
                                    direction="row"
                                >
                                    <span className={classes.email}>Email</span><br /><br /><br />
                                    <Grid
                                        item
                                        lg={12}
                                        md={12}
                                        sm={12}
                                        xs={12}
                                        className={classes.textField}
                                    >
                                        <TextField
                                            name="Email"
                                            id="email"
                                            InputProps={{className: classes.input}}
                                            value={values.email}
                                            variant="outlined"
                                            type="email"
                                       
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
                                        className={classes.textField}
                                    >
                                        <span className={classes.password}>Password</span><br />
                                        <TextField
                                            name="password"
                                            id="password"
                                            InputProps={{className: classes.input}}
                                            value={values.password}
                                            variant="outlined"
                                            type="password"
                                  
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </Grid><br />
                                    <a href='../component/ForgetPassword.tsx' className={classes.for}>Forgot Password?</a>
                                    <Grid
                                        item
                                        lg={12}
                                        md={12}
                                        sm={12}
                                        xs={12}
                                        className={classes.submitButton}
                                    >
                                        <Button
                                            type="submit"
                                            variant="contained"
                                        
                                            disabled={isSubmitting}
                                            className={classes.btn}
                                        >
                                            Sign in
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
                                    <span className={classes.acont}>Don't have an acount?<a href='../component/SignUp.tsx' className={classes.sign} >Sign Up</a></span>
                                </Grid>
                            </Form>
                            </div>
                        )
                    }}
                </Formik>
                </div>
      
        )
    }

export default Login;