import { GlobalStyle } from "./globalStyle"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ContentPage from "./pages/ContentPage"
import Login from "./pages/loginPage"
import SignUp from "./pages/SignUp"
import ForgotPassword from "./pages/ForgotPassword"

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          {/* <Route path="/content" element={<ContentPage />} />
          <Route path="/authorization"> */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
