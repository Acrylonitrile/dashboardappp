import { styled } from "styled-components"
import logo from "../Images/logo.png"
import CollapsingList from "./CollapsingList"
import {
  faCross,
  faGauge,
  faGear,
  faLayerGroup
} from "@fortawesome/free-solid-svg-icons"
import { dashBoardList, AppsList, settingsList } from "./sideBarLists"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props {
  sideBarVisible: boolean
  setSideBarVisible: (sideBarVisible: boolean) => void
}

function SideBar({ sideBarVisible, setSideBarVisible }: Props) {
  return (
    <>
      <MainWrapper $isVisible={sideBarVisible}>
        <CloseButton onClick={() => setSideBarVisible(false)}>
          <FontAwesomeIcon icon={faCross} />
        </CloseButton>
        <Logo src={logo} />
        <CollapsingList title="DashBoard" icon={faGauge} list={dashBoardList} />
        <CollapsingList title="Apps" icon={faLayerGroup} list={AppsList} />
        <CollapsingList title="Settings" icon={faGear} list={settingsList} />
      </MainWrapper>
    </>
  )
}

export default SideBar

const MainWrapper = styled.div<{ $isVisible: boolean }>`
  display: ${(props) => (props.$isVisible ? "flex" : "none")};
  flex-direction: column;
  background-color: white;
  padding: 20px 10px;
  height: 100%;
  width: ${(props) => (props.$isVisible ? "320px" : "0px")};
  box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.1);
  transition: 0.2s;
  position: relative;
  @media (max-width: 800px) {
    overflow: visible;
    z-index: 2;
    position: absolute;
    left: 0px;
    box-shadow: 5px 0px 40px rgba(0, 0, 0, 0.7);
  }
`

const Logo = styled.img`
  object-fit: contain;
  overflow: hidden;
  height: 70px;
  width: 200px;
  padding: 10px 20px;
  margin-bottom: 20px;
`

const CloseButton = styled.button`
  height: 50px;
  width: 50px;
  background-color: white;
  border: none;
  border-radius: 50%;
  position: absolute;
  display: none;
  right: -60px;
  @media (max-width: 800px) {
    box-shadow: 5px 0px 40px rgba(0, 0, 0, 0.7);
    display: initial;
  }
`
