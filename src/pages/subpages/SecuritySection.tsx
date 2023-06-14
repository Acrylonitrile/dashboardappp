import { styled } from "styled-components"
import { SubmitButton } from "../..//Molecules/formstyles"
import { Form, FormikProvider, useFormik } from "formik"
import CustomInput from "../../Molecules/CustomInput"
import * as yup from "yup"

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/

const securitySchema = yup.object().shape({
  oldpassword: yup
    .string()
    .min(6)
    .matches(passwordRules, { message: "Please create a stronger passsword" })
    .required("Required"),
  newpassword: yup
    .string()
    .min(6)
    .matches(passwordRules, { message: "Please create a stronger passsword" })
    .required("Required"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("newpassword")], "Passwords must match")
    .required("required"),
  email: yup.string().email("Please Enter a Valid Email").required("Required")
})

function SecuritySection() {
  const formStates = useFormik({
    initialValues: {
      oldpassword: "",
      newpassword: "",
      confirmpassword: "",
      email: ""
    },
    onSubmit: (values, actions) => {
      console.log(values)
      actions.resetForm()
    },
    validationSchema: securitySchema,
    validateOnMount: true
  })

  return (
    <>
      <SubDirectory>
        Security
        <Subheader>Update your password here</Subheader>
      </SubDirectory>
      <FormikProvider value={formStates}>
        <Form>
          <CustomInput
            name="oldpassword"
            label="Old Password"
            type="password"
          />
          <CustomInput
            name="newpassword"
            label="New Password"
            type="password"
          />
          <CustomInput
            name="confirmpassword"
            label="Confirm Password"
            type="password"
          />
          <CustomInput name="email" label="Email Address" type="email" />
          <Button type="submit">Change Password</Button>
        </Form>
      </FormikProvider>
    </>
  )
}

export default SecuritySection

const SubDirectory = styled.div`
  width: 100%;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
  padding-bottom: 10px;
`
const Subheader = styled.div`
  font-weight: normal;
  font-size: 12px;
`
const Button = styled(SubmitButton)`
  width: auto;
  padding: 0px 30px;
`
