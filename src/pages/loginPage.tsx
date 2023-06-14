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

const loginSchema = yup.object().shape({
  email: yup.string().email("Please Enter a Valid Email").required("Required"),
  password: yup
    .string()
    .min(6)
    .matches(passwordRules, { message: "Please create a stronger passsword" })
    .required("Required")
})

function Login() {
  return (
    <>
      <MainWrapper>
        <FormWrapper>
          <Header>Sign In</Header>
          <SubHeader>
            Don't have An Account? <Link to="./signup">Sign Up</Link>.
          </SubHeader>
          <ButtonRow>
            <Button bgcolor="ffffff">Sign In with Google</Button>
            <Button bgcolor="4040d5">Sign In with Facebook</Button>
          </ButtonRow>

          <Formik
            initialValues={{ email: "", password: "", rememberme: false }}
            onSubmit={(values, actions) => {
              console.log(values)
              actions.resetForm()
            }}
            validationSchema={loginSchema}
            validateOnMount={true}
          >
            {(props) => (
              <Form>
                <TextZone onMouseEnter={() => console.log(props.isValid)}>
                  <CustomInput
                    label="Email"
                    name="email"
                    type="email"
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
                  <ForgotLink>
                    <Link to="./forgotpassword">Forgot Password?</Link>
                  </ForgotLink>
                </RowWrap>
                <SubmitButton
                  type="submit"
                  id="submit"
                  disabled={!props.isValid}
                >
                  Sign In
                </SubmitButton>
              </Form>
            )}
          </Formik>
        </FormWrapper>
      </MainWrapper>
    </>
  )
}

export default Login

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const ForgotLink = styled.div`
  margin-left: auto;
`
