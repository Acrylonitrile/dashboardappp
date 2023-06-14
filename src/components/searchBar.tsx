import { styled } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBars,
  faBell,
  faCalendar,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons"
import blackCat from "../Images/blackcat.jpeg"

interface Props {
  sideBarVisible: boolean
  setSideBarVisible: (sideBarVisible: boolean) => void
}

function SearchBar({ sideBarVisible, setSideBarVisible }: Props) {
  return (
    <>
      <MainWrapper>
        <LeftItems>
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setSideBarVisible(!sideBarVisible)}
          />
          <Input placeholder="Search here..." />
        </LeftItems>
        <RightItems>
          <DateArea>
            <FontAwesomeIcon icon={faCalendar} />
            {new Date().toDateString()}
          </DateArea>
          <CircularIconWrap>
            <FontAwesomeIcon icon={faEnvelope} />
          </CircularIconWrap>
          <CircularIconWrap>
            <FontAwesomeIcon icon={faBell} />
          </CircularIconWrap>
          <CircularIconWrap>
            <Image src={blackCat} />
          </CircularIconWrap>
        </RightItems>
      </MainWrapper>
    </>
  )
}

export default SearchBar

const MainWrapper = styled.div`
  min-height: 80px;
  background-color: white;
  width: 100%;
  padding: 10px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    & > div {
      margin: 10px 0px;
    }
  }
`
const Input = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 30px;
  background-color: #f3f3f3;
  border: none;
  margin: 0px 40px;
  padding: 0px 20px;
`

const LeftItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const RightItems = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 800px) {
    justify-content: center;
  }
`
const DateArea = styled.div`
  height: 40px;
  padding: 0px 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #8558ff;
  margin: 0px 10px;
`
const CircularIconWrap = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
  overflow: hidden;
`
const Image = styled.img`
  object-fit: cover;
  overflow: hidden;
`
