import { styled } from "styled-components"
import theme from "../components/theme"
import ChatMenu from "../Molecules/ChatSideMenu"
import ChatMain from "../Molecules/ChatMain"

function Chats() {
  return (
    <>
      <MainWrapper bgcolor={theme.offWhite}>
        <ChatSideBar>
          <ChatMenu />
        </ChatSideBar>
        <ChatArea>
          <ChatMain />
        </ChatArea>
      </MainWrapper>
    </>
  )
}

export default Chats

const MainWrapper = styled.div<{ bgcolor: string }>`
  background-color: ${(props) => props.bgcolor};
  height: 100vh;
  margin: -30px;
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
    height: 100%;
  }
`

const ChatSideBar = styled.div`
  height: 100%;
  overflow: scroll;
  width: 300px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.1);
  margin-right: 10px;
  margin: 0px 10px 10px 0px;
  @media (max-width: 800px) {
    width: 100%;
  }
`
const ChatArea = styled.div`
  flex-grow: 1;
  background-color: white;
  border-radius: 10px;
  box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.1);
  height: 100%;
`
