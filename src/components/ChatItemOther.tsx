import { styled } from "styled-components"
import blackcat from "../Images/blackcat.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons"
import {
  ChatBubbleSelf,
  ChatProfilPic,
  ChatSelf,
  ChatEllipsis
} from "./ChatItemSelf"

function ChatItemOther() {
  return (
    <>
      <ChatOther>
        <ChatProfilPicOther src={blackcat} />
        <ChatBubbleOther>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          inventore quidem voluptatem labore, perferendis dicta, deserunt rerum
          est eveniet id deleniti. Nemo cum
        </ChatBubbleOther>
        <ChatEllipsis>
          <FontAwesomeIcon icon={faEllipsisV} />
        </ChatEllipsis>
      </ChatOther>
    </>
  )
}

export default ChatItemOther

const ChatOther = styled(ChatSelf)`
  justify-content: flex-start;
`

const ChatProfilPicOther = styled(ChatProfilPic)`
  margin-left: 0px;
  margin-right: 10px;
`

const ChatBubbleOther = styled(ChatBubbleSelf)`
  background-color: #e9e9e9;
  color: black;
  border-radius: 20px;
  border-top-left-radius: 0px;
`
