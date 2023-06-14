import { styled } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPaperPlane,
  faVideoCamera,
  faPhone
} from "@fortawesome/free-solid-svg-icons"

function ChatInput() {
  return (
    <>
      <ChatInputArea>
        <FontAwesomeIcon icon={faVideoCamera} />
        <FontAwesomeIcon icon={faPhone} />
        <Input placeholder="Type something..." />
        <SendButton>
          <FontAwesomeIcon icon={faPaperPlane} />
        </SendButton>
      </ChatInputArea>
    </>
  )
}

export default ChatInput

const ChatInputArea = styled.div`
  background: #e9e9e9;
  width: 100%;
  border-radius: 10px;
  position: absolute;
  height: 80px;
  bottom: 0px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 2;
  & > * {
    margin: 0px 10px;
  }
`
const Input = styled.input`
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 0px 20px;
  flex-grow: 1;
  @media (max-width: 800px) {
    width: 50px;
  }
`
const SendButton = styled.button`
  height: 50px;
  width: 50px;
  background-color: #006aff;
  color: white;
  border-radius: 50%;
  border: none;
`
