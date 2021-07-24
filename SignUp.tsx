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
import BackImage from '../image/Layer2.jpg'
import Logo from '../image/logo-pie-people.svg'
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
           
           
            margin: '0 auto',
            borderRadius: '5px',
            border: 'solid 1px #e6e6e6',
            backgroundColor: '#ffffff',  
             [theme.breakpoints.down('lg')]: {
                
                width: '858.2px',
                height: '691px',
                padding: '14.6px 45.6px 40.5px 45.9px',
               
                marginRight: 105,
                marginTop: 3
                

            },
            [theme.breakpoints.down('md')]: {
                
                width: '480.3px',
                height: '940.5px',
                padding: '11.1px 46.6px 45.6px 30px',
                marginLeft: 72,
                marginRight: 72,
                marginTop: 3
                

            },
            [theme.breakpoints.down('sm')]: {
                
                width: '480.3px',
                height: '940.5px',
                padding: '11.1px 46.6px 45.6px 30px',
                marginLeft: 72,
                marginRight: 72,
                marginTop: 3
                

            },
         
            [theme.breakpoints.down('xs')]: {
                width: '319px',
                height: '745px',
                marginRight: '28px'
            }
        },
        textField: {
            '& > *': {
                [theme.breakpoints.up('xs')]:{
                    width: 269,

                },
              
                [theme.breakpoints.up('sm')]: {
                 width: '388px',
                  
                    height: '63px'
                   
                },
                [theme.breakpoints.up('md')]: {
                    width: '388px',
                     
                       height: '63px'
                      
                   },
                   [theme.breakpoints.up('lg')]: {
                    width: '357px',
                     
                       height: '63px'
                      
                   },
               

            },
        },
   
        input:{
            [theme.breakpoints.up('xs')]:{
                width: '269px',
                height:'40px',
                border: 'solid 1px #e6e6e6',

                backgroundColor: '#ffffff'

            },

             [theme.breakpoints.up('sm')]: {
               
                height: '48px',
                margin:'13.2px 0.5px 12.2px 0',
                width: '388px',
                border: 'solid 1px #e6e6e6',

                backgroundColor: '#ffffff'
                   
                },
             [theme.breakpoints.up('md')]: {
               
                    height: '48px',
                    margin:'13.2px 0.5px 12.2px 0',
                    width: '388px',
                    border: 'solid 1px #e6e6e6',
    
                    backgroundColor: '#ffffff'
                       
                    },
            [theme.breakpoints.up('lg')]: {
               
                        height: '48px',
                      
                        width: '357px',
                        border: 'solid 1px #e6e6e6',
        
                        backgroundColor: '#ffffff'
                           
                        },
                    

        },
        submitButton: {
            marginTop: '24px',
        } ,
        back:{
            [theme.breakpoints.up('xs')]:{
                width: '357px',
                height:'812px',
               
                
            },
            [theme.breakpoints.up('sm')]: {
                
                width: '768px',
                height: '1024px',
                padding: '63.8px 132px 28.6px 144px'

            },
            [theme.breakpoints.up('md')]: {
                
                width: '960px',
                height: '1024px',
                padding: '63.8px 132px 28.6px 144px'

            },
            [theme.breakpoints.down('lg')]:{
                width: '1280px',
                height:'800px',
              
                padding: ' 54px 210.8px 55px 200px'
            },

        },
        btn:{
           
            backgroundColor: '#3ab7d4',
            boxShadow: 'none',
            [theme.breakpoints.down('sm')]: {
                
                width: '388px',
                height: '48px',
                

            },
            [theme.breakpoints.up('md')]: {
                
                width: '388px',
                height: '48px',
                

            },
            [theme.breakpoints.up('xs')]:{
                width: '269px',
                height:'48px'

            },
            [theme.breakpoints.up('lg')]:{
                width: '375px',
                height:'51px'

            },
        },
        title: { textAlign: 'center' },
        successMessage: { color: 'green' },
        errorMessage: { color: 'red' },
        logo:{
         
            objectFit: 'contain',
            [theme.breakpoints.up('md')]: {
                
                marginLeft: 203,
                width: '73px',
                heght: 73

            },
            [theme.breakpoints.up('sm')]: {
                
                marginLeft: 203,
                width: '73px',
                heght: 73

            },
              [theme.breakpoints.up('xs')]:{
                width: '91.3px',
                height: '91.3px',
               
                marginLeft: '114px',

            },
            [theme.breakpoints.up('lg')]:{
                width: '106px',
                height: '106px',
               
                marginLeft: '376px',

            },

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
       company:{
        marginLeft: '5px',
        [theme.breakpoints.down('sm')]: {
            margin:' 69.3px 26.4px 13.2px 0',
            fontSize: '17px',  
         
              
           },
           [theme.breakpoints.down('md')]: {
            margin:' 69.3px 26.4px 13.2px 0',
            fontSize: '17px',  
         
              
           },
           [theme.breakpoints.down('xs')]: {
           
            fontSize: '15px',  
         
              
           },
        marginRight:'178px',
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
       name:{
        marginLeft: '5px',
        marginRight:'215px',
        [theme.breakpoints.down('md')]: {
            margin: '12.2px 67.4px 13.2px 0',
            fontSize: '17px'
             
         
              
           },
           [theme.breakpoints.down('sm')]: {
            margin: '12.2px 67.4px 13.2px 0',
            fontSize: '17px'
             
         
              
           },
           [theme.breakpoints.down('xs')]: {
           
            fontSize: '15px'
             
         
              
           },
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
       email:{
        marginLeft: '5px',
        marginRight:'253px',
        [theme.breakpoints.down('md')]: {
            margin: '12.2px 21.4px 13.2px 0',
            fontSize: '17px',  
         
              
           },
           [theme.breakpoints.down('sm')]: {
            margin: '12.2px 21.4px 13.2px 0',
            fontSize: '17px',  
         
              
           },
           [theme.breakpoints.down('xs')]: {
           
            fontSize: '15px',  
         
              
           },

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
       confirEmail:{
        marginLeft: '5px',
        marginRight:'190px',
        [theme.breakpoints.down('md')]: {
            fontSize: '17px',  
            margin: '12.2px 40.4px 13.2px 0'

        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '17px',  
            margin: '12.2px 40.4px 13.2px 0'

        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px',  
          

        },
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
       pass:{
        marginLeft: '5px',
        marginRight:'221px',
        fontFamily: 'Nexa',
        [theme.breakpoints.down('md')]: {
            fontSize: '17px',  
            margin: '12.2px 74.4px 13.2px 0'

        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '17px',  
            margin: '12.2px 74.4px 13.2px 0'

        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px',  
            

        },
        fontSize: '15px',    
        fontWeight: 'bold',    
        fontStretch: 'normal', 
        fontStyle: 'normal',
        lineHeight: '2.33',
        letterSpacing: '0.23px',
        textAlign: 'left',  
        color: '#474646',
       },
       confirPass:{
        marginLeft: '5px',
        marginRight:'158px',
        fontFamily: 'Nexa',
        [theme.breakpoints.down('md')]: {
            fontSize: '17px',  
            margin:' 12.2px 3.4px 13.2px 0'

        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '17px',  
            margin:' 12.2px 3.4px 13.2px 0'

        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px',  
            

        },
        fontSize: '15px',    
        fontWeight: 'bold',    
        fontStretch: 'normal', 
        fontStyle: 'normal',
        lineHeight: '2.33',
        letterSpacing: '0.23px',
        textAlign: 'left',  
        color: '#474646',
       },
       phone:{
        marginLeft: '5px',
        marginRight:'185px',
        [theme.breakpoints.down('md')]: {
            fontSize: '17px',  
            margin: '12.2px 33.4px 13.2px 0'

        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '17px',  
            margin: '12.2px 33.4px 13.2px 0'

        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px',  
           

        },
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

interface ISignUpForm {
    companyName: string
    fullName: string
    password: string
    confirmPassword: string
    email: string
    confirmEmail: string
    phoneNumber: number|string
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
        message: 'Signed up successfully.',
        type: 'success',
    },
    duplicate: {
        message: 'Email-id already exist. Please use different email-id.',
        type: 'error',
    },
    error: {
        message: 'Something went wrong. Please try again.',
        type: 'error',
    },
}

const SignUp: React.FunctionComponent = () => {
    const classes = useStyles()
    const [displayFormStatus, setDisplayFormStatus] = useState(false)
    const [formStatus, setFormStatus] = useState<IFormStatus>({
        message: '',
        type: '',
    })

    const createNewUser = async (data: ISignUpForm, resetForm: Function) => {
        try {
            // API call integration will be here. Handle success / error response accordingly.
            if (data) {
                setFormStatus(formStatusProps.success)
                resetForm({})
            }
        } catch (error) {
            const response = error.response
            if (
                response.data === 'user already exist' &&
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
        <div style={{backgroundImage: `url(${BackImage})`,     objectFit: `contain`,

        opacity: `0.7`}} className={classes.back}>
            <Formik
                initialValues={{
                    companyName: '',
                    fullName: '',
                    password: '',
                    confirmPassword: '',
                    email: '',
                    confirmEmail: '',
                    phoneNumber: '',
                }}
                onSubmit={(values: ISignUpForm, actions) => {
                    createNewUser(values, actions.resetForm)
                    setTimeout(() => {
                        actions.setSubmitting(false)
                    }, 500)
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email()
                        .required('Enter valid email-id'),
                    fullName: Yup.string().required('Please enter your name'),
                    password: Yup.string()
                        .matches(
                            /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/
                        )
                        .required(
                            'Please valid password. One uppercase, one lowercase, one special character and no spaces'
                        ),
                    confirmPassword: Yup.string()
                        .required('Required')
                        .test(
                            'password-match',
                            'Password musth match',
                            function (value) {
                                return this.parent.password === value
                            }
                        ),
                        confirmEmail: Yup.string()
                        .required('Required')
                        .test(
                            'email-match',
                            'email musth match',
                            function (value) {
                                return this.parent.email === value
                            }
                        ),
                        phoneNumber: Yup.string().required('Please enter your phone number'),
                })}
            >
                {(props: FormikProps<ISignUpForm>) => {
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
                        <Form >
                            
                    
                            <Grid 
                                
                                container
                                justify="space-around"
                                direction="row"
                            >
                                <Grid
                                    item
                                    lg={6}
                                    md={12}
                                    sm={10}
                                    xs={10}
                                    className={classes.textField}
                                >
                                    <span className={classes.company}>Company Name</span> <br />
                                    <TextField
                                        name="companyName"
                                        id="companyName"
                                       
                                        variant="outlined"
                                        value={values.companyName}
                                        InputProps={{className:  classes.input}}
                                        type="text"
                                   
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    lg={6}
                                    md={12}
                                    sm={10}
                                    xs={10}
                                    className={classes.textField}
                                >
                                    <span className={classes.name}>Your Name</span><br />
                                    <TextField
                                        name="fullName"
                                        id="fullName"
                                        InputProps={{className:  classes.input}}
                                      
                                        variant="outlined"
                                        value={values.fullName}
                                        type="text"
                                   
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Grid>  
                                <Grid
                                    item
                                    lg={6}
                                    md={12}
                                    sm={10}
                                    xs={10}
                                    className={classes.textField}
                                >
                                    <span className={classes.email}>Email</span><br />
                                    <TextField
                                        name="email"
                                        id="email"
                                       
                                        variant="outlined"
                                        InputProps={{className:  classes.input}}
                                        value={values.email}
                                        type="email"
                                   
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    lg={6}
                                    md={12}
                                    sm={10}
                                    xs={10}
                                    className={classes.textField}
                                >
                                    <span className={classes.confirEmail}>Confirm Email</span><br />
                                    <TextField
                                        name="confirmEmail"
                                        id="confirmEmail"
                                       
                                        variant="outlined"
                                        InputProps={{className:  classes.input}}
                                        value={values.confirmEmail}
                                        type="email"
                                
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    lg={6}
                                    md={12}
                                    sm={10}
                                    xs={10}
                                    className={classes.textField}
                                >
                                    <span className={classes.pass}>Password</span><br />
                                    <TextField
                                        name="password"
                                        id="password"
                                     
                                        variant="outlined"
                                        value={values.password}
                                        InputProps={{className:  classes.input}}
                                        type="password"
                                   
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    lg={6}
                                    md={12}
                                    sm={10}
                                    xs={10}
                                    className={classes.textField}
                                >
                                    <span className={classes.confirPass}>Confirm Password</span><br />
                                    <TextField
                                        name="confirmPassword"
                                        id="confirmPassword"
                                      
                                        variant="outlined"
                                        value={values.confirmPassword}
                                        type="password"
                                        InputProps={{className:  classes.input}}
                                     
                                    
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    sm={10}
                                    xs={10}
                                    className={classes.textField}
                                >
                                    <span className={classes.phone}>Phone Number</span> <br />
                                 <TextField
                                        name="phoneNumber"
                                        id="phoneNumber"
                                       
                                        variant="outlined"
                                        InputProps={{className:  classes.input}}
                                        value={values.phoneNumber}
                                        type="tel"
                                  
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    lg={10}
                                    md={12}
                                    sm={10}
                                    xs={10}
                                    className={classes.submitButton}
                                >
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        className={classes.btn}
                                        disabled={isSubmitting}
                                    >
                                        Sign Up
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
                                <span className={classes.acont}>Already have an Acount<a href='../component/Login.tsx' className={classes.sign} >Sign In</a></span>
                             
                               
                            </Grid>
                        </Form>
                        </div>
                    )
                }}
            </Formik>
        </div>
    )
}

export default SignUp;

