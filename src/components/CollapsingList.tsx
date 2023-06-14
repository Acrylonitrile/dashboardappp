import { styled } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

interface Props {
  icon: IconProp
  title: string
  list: string[]
}

function CollapsingList({ icon, title, list }: Props) {
  const [collapse, setCollapse] = useState(true)
  var count = 0

  return (
    <>
      <MainWrapper>
        <Header
          onClick={() => {
            setCollapse(!collapse)
          }}
        >
          <IconWrap>
            <FontAwesomeIcon icon={icon} />
          </IconWrap>
          {title}
          <ArroWrap $collapse={collapse}>
            <FontAwesomeIcon icon={faAngleRight} />
          </ArroWrap>
        </Header>
        <List $collapse={collapse}>
          {list.map((item) => (
            <ListItem key={count++}>{item}</ListItem>
          ))}
        </List>
      </MainWrapper>
    </>
  )
}

export default CollapsingList

const MainWrapper = styled.div`
  min-height: 50px;
  border-radius: 7px;
  font-size: 18px;
  margin-bottom: 10px;
`
const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
  border-radius: 7px;
  height: 50px;
  &:hover {
    background-color: #8256fa43;
    cursor: pointer;
  }
`
const IconWrap = styled.div`
  margin-right: 10px;
`
const ArroWrap = styled.div<{ $collapse: boolean }>`
  margin-left: auto;
  transform: rotate(${(props) => (props.$collapse ? "0deg" : "90deg")});
  transition: 0.2s;
`
const List = styled.ul<{ $collapse: boolean }>`
  list-style-type: disc;
  overflow: hidden;
  transition: 0.2s;
  height: ${(props) => (props.$collapse ? "0px" : "auto")};
`
const ListItem = styled.li`
  padding: 0px 30px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: 0.2s;
  border-radius: 7px;
  &:hover {
    color: white;
    background-color: #8156fa;
    cursor: pointer;
  }
`
