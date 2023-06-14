import { styled } from "styled-components"
import { Link } from "react-router-dom"
import { Formik } from "formik"
import {
  FormWrapper,
  Header,
  SubHeader,
  ButtonRow,
  SubmitButton,
  Button,
  Form,
  TextZone,
  RowWrap
} from "../Molecules/formstyles"
import * as yup from "yup"
import CustomInput from "../Molecules/CustomInput"
import CustomCheckbox from "../Molecules/CustomCheckbox"

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/

const signUpSchema = yup.object().shape({
  firstname: yup.string().required("Required"),
  lastname: yup.string().required("Required"),
  email: yup.string().email("Please Enter a Valid Email").required("Required"),
  password: yup
    .string()
    .min(6)
    .matches(passwordRules, { message: "Please create a stronger passsword" })
    .required("Required")
})

function SignUp() {
  return (
    <>
      <MainWrapper>
        <FormWrapper>
          <Header>Get Started</Header>
          <SubHeader>
            Already Have An Account? <Link to="/">Sign in</Link>.
          </SubHeader>
          <ButtonRow>
            <Button bgcolor="ffffff">Sign In with Google</Button>
            <Button bgcolor="4040d5">Sign In with Facebook</Button>
          </ButtonRow>

          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              password: "",
              rememberme: false
            }}
            onSubmit={(values, actions) => {
              console.log(values)
              actions.resetForm()
            }}
            validationSchema={signUpSchema}
          >
            {(props) => (
              <Form>
                <TextZone>
                  <CustomInput
                    label="First Name"
                    name="firstname"
                    type="text"
                    placeholder="First Name"
                  />
                  <CustomInput
                    label="Last Name"
                    name="lastname"
                    type="text"
                    placeholder="Last Name"
                  />
                  <CustomInput
                    label="Email"
                    name="email"
                    type="text"
                    placeholder="Enter Email Address"
                  />
                  <CustomInput
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                  />
                </TextZone>
                <RowWrap>
                  <CustomCheckbox
                    label="Remember Me"
                    name="rememberme"
                    type="checkbox"
                  />
                </RowWrap>
                <SubmitButton
                  type="submit"
                  id="submit"
                  disabled={
                    props.errors.email ||
                    props.errors.password ||
                    props.errors.firstname ||
                    props.errors.lastname
                      ? true
                      : false
                  }
                >
                  Sign Up
                </SubmitButton>
              </Form>
            )}
          </Formik>
        </FormWrapper>
      </MainWrapper>
    </>
  )
}

export default SignUp

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`
