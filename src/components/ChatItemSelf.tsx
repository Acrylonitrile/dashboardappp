import { styled } from "styled-components"
import blackcat from "../Images/blackcat.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons"

function ChatItemSelf() {
  return (
    <>
      <ChatSelf>
        <ChatEllipsis>
          <FontAwesomeIcon icon={faEllipsisV} />
        </ChatEllipsis>
        <ChatBubbleSelf>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          inventore quidem voluptatem labore, perferendis dicta, deserunt rerum
          est eveniet id deleniti. Nemo cum
        </ChatBubbleSelf>
        <ChatProfilPic src={blackcat} />
      </ChatSelf>
    </>
  )
}

export default ChatItemSelf

export const ChatSelf = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  min-height: 80px;
  padding: 10px;
  width: 100%;
`
export const ChatProfilPic = styled.img`
  height: 30px;
  width: 30px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 50%;
  margin-left: 10px;
`
export const ChatBubbleSelf = styled.div`
  background-color: #006eff;
  color: white;
  min-height: 60px;
  max-width: 80%;
  padding: 10px 15px;
  border-radius: 20px;
  border-top-right-radius: 0px;
  font-size: 12px;
`

export const ChatEllipsis = styled.button`
  height: 30px;
  width: 30px;
  background-color: white;
  border: none;
`
