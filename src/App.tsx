import { GlobalStyle } from "./globalStyle"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ContentPage from "./pages/ContentPage"
import Login from "./pages/loginPage"
import SignUp from "./pages/SignUp"
import ForgotPassword from "./pages/ForgotPassword"
import Chats from "./pages/Chats"
import SettingsPage from "./pages/SettingsPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<ContentPage />}>
            <Route path="" element={<Chats />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
          <Route path="authorization">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="forgotpassword" element={<ForgotPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
