import styled from 'styled-components'
import GridList from '@material-ui/core/GridList'
import { scrollbar } from '@/css/utils'

export const EventList = styled.div.attrs({
  className: 'EventList'
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

export const EventListHeader = styled.div.attrs({
  className: 'EventListHeader'
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`

export const EventListHeaderTitle = styled.div.attrs({
  className: 'EventListHeaderTitle'
})`
  font-size: 32px;
  line-height: 2;
  font-weight: 400;
`

export const EventListContent = styled(GridList).attrs({
  className: 'EventListContent'
})`
  && {
    flex-direction: column;
    flex-wrap: nowrap;
    overflow: hidden;
    overflow-y: auto;
    ${scrollbar};
  }
`