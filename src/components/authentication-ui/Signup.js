import React, { useContext } /**/from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import {Providers, Title} from './Login'
import {colors,media} from "../../tokens"
import styled,{keyframes} from "styled-components"
import LoaderButton from '../LoadingButton'
import {FaBell, FaEdit} from "react-icons/fa"
import {MdFavoriteBorder} from "react-icons/md"
import fonts from '../../tokens/fonts'
 import { GlobalContext } from '../../context/GlobalState';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'

const features = [
    {
        label: "mes annonces",
        icon: <FaEdit />,
        description: "Gérez vos annonces et bénéficiez de nos offres Fidélité.",
        color: "#4759ef"
    },
    {
        label: "mes alertes",
        icon: <FaBell />,
        description: "Gérer vos alertes e-mails en toute simplicité. ",
        color: "#eb6d67"
    },
    {
        label: "mes favoris",
        icon: <MdFavoriteBorder />,
        description: "Retrouvez les annonces que vous avez sélectionnées. ",
        color: colors.yellow
    }
]
const SignUp = () => {
    const context = useContext(GlobalContext)
    console.log(context)
    if (context.user.isLoggedIn) return <Redirect to="/profile" />
    if (context.signupStage === "SUCCESS"){
        return <Redirect to="/profile" />
    }
    return (
        <Wrapper>
            <Container>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                            authCode: '',
                        }}
                        validate={values => {
                            const errors = {}
                            if (context.signupStage === 0 && !values.email) {
                                errors.email = 'Required'
                            } 
                            else if (context.signupStage === 0 && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                errors.email = 'Invalid email address'
                            }
                            if (context.signupStage === 0 && !values.password) {
                                errors.password = 'Required'
                            }
                            if (context.signupStage === 1 && !values.authCode) {
                                errors.authCode = 'Required'
                            }
                            return errors
                        }}
                        onSubmit={async (values, { setSubmitting }) => {
                            console.log('onSubmit')
                            if(context.signupStage===0){
                                console.log("polo1")
                                context.userActions.registerUser(context.signupStage,{username:values.email.split("@")[0], password: values.password,attributes:{email: values.email}})
                            }
                            else{
                                console.log("polo2")
                                context.userActions.registerUser(context.signupStage,{username:values.email.split("@")[0],authCode:values.authCode})
                            }
                        }}
                    >
                        {({ isSubmitting }) => {
                            if (context.signupStage === 0) {
                                return (
                                    <Form>
                                        <Title>S'enregistrer</Title>
                                        <label
                                            htmlFor="username"
                                            className="block mt-6 text-gray-500 text-base"
                                        >
                                            <p>Email</p>
                                            <Field
                                                type="email"
                                                name="email"
                                                className="block border-gray-300 border-2 rounded text-gray-700 text-sm w-full px-2 py-2"
                                            />
                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                                className="text-red-500 text-sm"
                                            />
                                        </label>
                                        <label
                                            htmlFor="password"
                                            className="block mt-6 text-gray-500 text-base"
                                        >
                                            <p>Password</p>
                                            <Field
                                                type="password"
                                                name="password"
                                                className="block border-gray-300 border-2 rounded text-gray-700 text-sm w-full px-2 py-2"
                                            />
                                            <ErrorMessage
                                                name="password"
                                                component="div"
                                                className="text-red-500 text-sm"
                                            />
                                        </label>
                                        
                                        <LoaderButton type="submit" isLoading={isSubmitting}>
                                            Sign up
                                        </LoaderButton>
                                        <Providers />
                                    </Form>
                                )
                            }
                            if(context.signupStage===1) {
                                return (
                                    <Form>
                                        <label
                                            htmlFor="authCode"
                                        >
                                            <p>Authorization Code</p>
                                            <Field
                                                type="text"
                                                name="authCode"
                                            />
                                            <ErrorMessage
                                                name="authCode"
                                                component="div"
                                                className="text-red-500 text-sm"
                                            />
                                        </label>
                                        
                                        <LoaderButton type="submit" isLoading={isSubmitting}>
                                        Confirm Signup
                                        </LoaderButton>
                                    </Form>
                                )
                            }
                        }}
                    </Formik>
        </Container>
        <Container>
                    <Title >
                        En créant ce compte j'ai accès à...
                    </Title>
                    <Features>
                        {features.map(feat=>{
                            return <Feature key={feat.label}>
                                <Icon color={feat.color}>
                                    {feat.icon}
                                </Icon>
                                <Contain>
                                    <Title >{feat.label}</Title>
                                    <Description>
                                        {feat.description}
                                    </Description>
                                </Contain>
                            </Feature>
                        })}
                    </Features>
        </Container>
    </Wrapper>
  )
}
const Container = styled.div`
    margin: 20px;
`
const Features = styled.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
    
`
const Feature = styled.li`
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: left;
`
const Icon = styled.div`
    background: ${props=>props.color};
    height: 50px;
    width: 50px;
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
`
const Contain = styled.div`
    padding: 30px 10px;
    /* border: solid green; */
`
const Description = styled.div`
    color: ${colors.text};
    font-size: ${fonts.sizeSm};

`
const jump = keyframes`
  from{
    transform: translateY(0);
  }
  to{
    transform: translateY(-3px);
  }
`;
const Wrapper = styled.div`
    padding: 70px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1300px;
    margin: 0 auto;
    @media ${media.large} {
        grid-template-columns: 1fr;
    }
    .container{
        /* padding: 20px; */
    }
    form{
        /* border: solid blue; */
        box-sizing: border-box;
        box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
        margin: 0 auto;
        width: 100%;
        max-width: 414px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        position: relative;
        label{
            display: block;
            position: relative;
            .err-msg{
                color: tomato;
            }
        }
        input{
            width: 100%;
            box-sizing: border-box;
            padding: 11px 13px;
            margin-bottom: 0.9rem;
            border-radius: 0;
            outline: 0;
            border: 1px solid ${colors.grey7};
            border-radius: 2px;
            font-size: 14px;
            transition: all 0.3s ease-out;
            :focus{
                border: 1px solid ${colors.yellow};
                box-shadow: 0 0 3px ${colors.yellow}, 0 1px 5px rgba(0, 0, 0, 0.1);
            }
        }
        button{
            max-width: 100%;
            padding: 11px 13px;
            color: black;
            font-weight: 600;
            text-transform: uppercase;
            background: ${colors.yellow};
            border: none;
            border-radius: 3px;
            outline: 0;
            cursor: pointer;
            margin-top: 0.6rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease-out;
            :hover {
                animation: ${jump} 0.2s ease-out forwards;
            }
        }
    }
`



export default SignUp