import styled, { css } from 'styled-components'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CardActions from '@material-ui/core/CardActions'

export const EventForm = styled.div.attrs({
  className: 'EventForm'
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  .MuiFormControl-root,
  .MuiInput-root {
    width: 100%;
  }
`

export const EventFormDialog = styled.div.attrs({
  className: 'EventFormDialog'
})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`

export const EventFormTitle = styled.div.attrs({
  className: 'EventFormTitle'
})`
  font-size: 36px;
  line-height: 2;
`

export const EventFormActions = styled(CardActions).attrs({
  className: 'EventFormActions'
})`
  && {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
`

export const EventFormControlLabel = styled(FormControlLabel).attrs({
  className: 'EventFormControlLabel'
})`
  && {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    margin: 0;
  }
`