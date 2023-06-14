import { styled } from "styled-components"
import SideBar from "../components/sidebar"
import SearchBar from "../components/searchBar"
import SettingsPage from "./SettingsPage"
import { Route, Routes, useMatch } from "react-router-dom"
import Chats from "./Chats"
import { useState } from "react"

function ContentPage() {
  const [sideBarVisible, setSideBarVisible] = useState(true)

  return (
    <>
      <MainWrapper>
        <SideBar
          sideBarVisible={sideBarVisible}
          setSideBarVisible={setSideBarVisible}
        />
        <PageWrapper>
          <SearchBar
            sideBarVisible={sideBarVisible}
            setSideBarVisible={setSideBarVisible}
          />
          <ContentWrapper>
            {/* <SettingsPage /> */}
            <Chats />
          </ContentWrapper>
        </PageWrapper>
      </MainWrapper>
    </>
  )
}

export default ContentPage

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  position: relative;
  @media (max-width: 800px) {
    height: 200vh;
  }
`
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 100%;
  @media (max-width: 800px) {
    margin-left: 0px;
  }
`
const ContentWrapper = styled.div`
  margin: 20px 20px 0px 0px;
  background-color: white;
  border-radius: 10px;
  box-shadow: -5px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  color: #210067;
  height: 100vh;
  overflow: scroll;
  @media (max-width: 800px) {
    height: 100%;
  }
`
