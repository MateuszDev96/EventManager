import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Collapse from '@material-ui/core/Collapse'

export const EventListCard = styled(Card).attrs({
  className: 'EventListCard'
})`
  && {
    flex-shrink: 0;
    width: 360px;
    border-radius: 0;
    border: 0;
    border-bottom: 1px solid #d7d7d7;
    box-shadow: none;
    margin-bottom: 20px;
  }
`

export const EventListCardHeader = styled(Box).attrs({
  className: 'EventListCardHeader'
})`
  && {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const EventListCardSubHeader = styled(EventListCardHeader).attrs({
  className: 'EventListCardSubHeader'
})``

export const EventListCardContent = styled(Box).attrs({
  className: 'EventListCardContent'
})`
  && {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`

export const EventListCardCollapse = styled(Collapse).attrs({
  className: 'EventListCardCollapse'
})`
  && {
    width: 100%;
  }
`

export const EventListCardImage = styled(CardMedia).attrs({
  className: 'EventListCardImage'
})`
  && {
    height: 100px;
  }
`