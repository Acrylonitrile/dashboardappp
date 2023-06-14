import { styled } from "styled-components"
import theme from "../components/theme"
import ChatListItem from "../components/ChatListItem"

function ChatMenu() {
  return (
    <>
      <MainWrapper>
        <Heading>Messages</Heading>
        <Input bgcolor={theme.offWhite} placeholder="Search here..." />
        <SubHeader>All Messages</SubHeader>
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
      </MainWrapper>
    </>
  )
}

export default ChatMenu

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media (max-width: 800px) {
    width: 100%;
  }
`

const Heading = styled.div`
  font-size: 20px;
  padding: 0px 10px;
`
const Input = styled.input<{ bgcolor: string }>`
  height: 40px;
  background-color: ${(props) => props.bgcolor};
  padding: 0px 20px;
  margin: 10px 0px;
  border: none;
  border-radius: 30px;
`
const SubHeader = styled.div`
  font-size: 14px;
  padding: 10px 0px;
`
