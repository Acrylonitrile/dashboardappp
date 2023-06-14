import { styled } from "styled-components"
import ChatTopBar from "../components/ChatTopBar"
import ChatInput from "../components/ChatInput"
import blackcat from "../Images/blackcat.jpeg"
import ChatItemSelf from "../components/ChatItemSelf"
import ChatItemOther from "../components/ChatItemOther"

function ChatMain() {
  return (
    <>
      <MainWrapper>
        <ChatTopBar />
        <ChatContent>
          <ChatItemSelf />
          <ChatItemOther />
          <ChatItemSelf />
          <ChatItemOther />
          <ChatItemSelf />
          <ChatItemOther />
          <ChatItemSelf />
          <ChatItemOther />
          <ChatItemSelf />
          <ChatItemOther />
          <ChatItemSelf />
          <ChatItemOther />
          <ChatItemSelf />
          <ChatItemOther />
          <ChatItemSelf />
          <ChatItemOther />
          <ChatItemSelf />
          <ChatItemOther />
          <ChatItemSelf />
          <ChatItemOther />
          <ChatItemSelf />
          <ChatItemOther />
          <ChatItemSelf />
          <ChatItemOther />
        </ChatContent>
        <ChatInput />
      </MainWrapper>
    </>
  )
}

export default ChatMain

const MainWrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 93%;
  overflow: scroll;
  border-radius: 10px;
  position: relative;
`
const ChatContent = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: absolute;
  bottom: 80px;
  width: 100%;
  height: 100%;
  overflow: scroll;
  @media (max-width: 1000px) {
    & > div {
      margin-top: 20px;
    }
  }
`
