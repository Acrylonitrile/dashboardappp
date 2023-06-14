import { styled } from "styled-components"
import { RowWrap, SubmitButton } from "../..//Molecules/formstyles"
import { Form, useFormik, FormikProvider } from "formik"
import CustomInput from "../../Molecules/CustomInput"
import * as yup from "yup"

const accountSchema = yup.object().shape({
  firstname: yup.string().required("Required"),
  lastname: yup.string().required("Required"),
  email: yup.string().email("Please Enter a Valid Email").required("Required")
})

function AccountSettings() {
  const formStates = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      image: ""
    },
    onSubmit: (values, actions) => {
      console.log(values)
      actions.resetForm()
    },
    validationSchema: accountSchema,
    validateOnMount: true
  })

  return (
    <>
      <SubDirectory>
        Profile
        <Subheader>Update your photo and personal details here</Subheader>
      </SubDirectory>
      <FormikProvider value={formStates}>
        <Form>
          <RowWrap>
            <CustomInput name="firstname" label="First Name" type="text" />
            <CustomInput name="lastname" label="Last Name" type="text" />
          </RowWrap>
          <CustomInput name="email" label="Email Address" type="email" />
          <CustomInput name="image" label="Upload Image" type="file" />
          <Button type="submit" disabled={!formStates.isValid}>
            Update
          </Button>
        </Form>
      </FormikProvider>
    </>
  )
}

export default AccountSettings

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
  width: 100px;
`
