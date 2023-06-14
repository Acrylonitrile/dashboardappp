import { styled } from "styled-components"
import blackcat from "../Images/blackcat.jpeg"

function ChatListItem() {
  return (
    <>
      <MainWrapper>
        <ProfilePic src={blackcat} />
        <ChatItemDetails>
          <ChatName>Laurent Perrier</ChatName>
          <ChatStatus>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
            tenetur.
          </ChatStatus>
        </ChatItemDetails>
        <ChatInfo>
          <ChatTime>4:30PM</ChatTime>
          <ChatUnread>2</ChatUnread>
        </ChatInfo>
      </MainWrapper>
    </>
  )
}

export default ChatListItem

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0px;
  height: 60px;
  align-items: center;
`
export const ProfilePic = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
`
export const ChatItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  padding: 0px 10px;
  & > div {
    margin: 2px 0px;
  }
`
export const ChatName = styled.div`
  font-weight: bold;
`
const ChatStatus = styled.div`
  color: #000000a1;
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ChatInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  font-size: 12px;
  margin-left: auto;
`

const ChatTime = styled.div`
  color: #000000a1;
`
const ChatUnread = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #006aff;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;
`
