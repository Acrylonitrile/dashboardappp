import { styled } from "styled-components"
import { RowWrap } from "../Molecules/formstyles"
import SecuritySection from "./subpages/SecuritySection"
import { useState } from "react"
import AccountSettings from "./subpages/AccountSettings"

type buttonStates = "account" | "security"

function SettingsPage() {
  const [buttonState, setButtonState] = useState<buttonStates>("account")

  const buttonProps = (buttonName: buttonStates) => ({
    $isSelected: buttonName === buttonState,
    onClick: () => {
      if (!(buttonName === buttonState)) setButtonState(buttonName)
    }
  })

  return (
    <>
      <SubDirectory>Settings</SubDirectory>
      <RowWrap>
        <TabButton {...buttonProps("account")}>Account</TabButton>
        <TabButton {...buttonProps("security")}>Security</TabButton>
        <TabButton $isSelected={false}>Privacy Policy</TabButton>
      </RowWrap>
      {buttonState === "account" ? <AccountSettings /> : <SecuritySection />}

      {/* <AccountSettings /> */}
      {/* <SecuritySection /> */}
    </>
  )
}

export default SettingsPage

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
const TabButton = styled.button<{ $isSelected: boolean }>`
  height: 40px;
  padding: 0px 20px;
  background-color: ${(props) => (props.$isSelected ? "#8550ff" : "#cfbaff")};
  color: ${(props) => (props.$isSelected ? "white" : "#210367")};
  margin-bottom: 20px;
  margin-right: 10px;
  border: none;
  border-radius: 10px;
  transition: 0.1s;
`
