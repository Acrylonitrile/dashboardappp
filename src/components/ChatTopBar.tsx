import { styled } from "styled-components"
import {
  faPhone,
  faVideoCamera,
  faEllipsisV,
  faCircle
} from "@fortawesome/free-solid-svg-icons"
import blackcat from "../Images/blackcat.jpeg"
import {
  ChatItemDetails,
  ChatName,
  ProfilePic
} from "../components/ChatListItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ChatTopBar() {
  return (
    <>
      <TopBar>
        <ProfilePic src={blackcat} />
        <ChatItemDetails>
          <ChatName>Lauren Perrier</ChatName>
          <Status>
            <StatusDot>
              <FontAwesomeIcon icon={faCircle} />
            </StatusDot>{" "}
            online
          </Status>
        </ChatItemDetails>
        <TopButtonsArea>
          <TopButton>
            <FontAwesomeIcon icon={faVideoCamera} />
          </TopButton>
          <TopButton>
            <FontAwesomeIcon icon={faPhone} />
          </TopButton>
          <TopButton>
            <FontAwesomeIcon icon={faEllipsisV} />
          </TopButton>
        </TopButtonsArea>
      </TopBar>
    </>
  )
}

export default ChatTopBar

const TopBar = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 0px;
  width: 100%;
  padding: 0px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 2;
  background-color: white;
`
const Status = styled.div`
  color: #00000096;
`
const TopButtonsArea = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  align-items: center;
  justify-content: flex-end;
`
const TopButton = styled.button`
  height: 40px;
  width: 40px;
  background-color: #e9e9e9;
  color: #3f3f3f;
  border-radius: 50%;
  border: none;
  margin: 0px 5px;
`
const StatusDot = styled.span`
  color: green;
`
