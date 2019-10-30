import * as React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import { format } from '@/utils/date'
import { useTranslation } from 'react-i18next'
import { i18nKeys } from '@/i18n/i18nKeys'
import * as Styled from './EventListCardStyled'
import { ModelEvent } from '@/api/event/model'
import { eventTypeKeys } from '@/i18n/i18nKeys'

import { IconExplore, IconEmail, IconPhone } from '@/components/common/Icons'

interface IProps {
  event: ModelEvent
}

export const EventListCard = (props: IProps) => {
  const { image, title, description, type, place, email, phone, date } = props.event
  const { t } = useTranslation()
  const [state, setState] = React.useState({
    isShowMore: false
  })

  const onClickButtonMore = React.useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      isShowMore: !prevState.isShowMore
    }))
  }, [state.isShowMore])

  return (
    <Styled.EventListCard >
      <CardActionArea>
        <Styled.EventListCardImage
          image={image}
          title={title}
        />
        <CardContent>
          <Styled.EventListCardHeader>
            <Typography variant="h5" component="h2" noWrap>
              {title}
            </Typography>
            <Typography variant="body2" component="p" noWrap>
              {t(eventTypeKeys[type])}
            </Typography>
          </Styled.EventListCardHeader>
          <Styled.EventListCardSubHeader>
            <Typography gutterBottom variant="body2" component="p" noWrap>
              {format(date, 'dd/MMM/yyyy HH:mm')}
            </Typography>
          </Styled.EventListCardSubHeader>
          <Styled.EventListCardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
            <Styled.EventListCardCollapse in={state.isShowMore} unmountOnExit>
              <List>
                <ListItem disableGutters>
                  <ListItemAvatar>
                    <IconExplore />
                  </ListItemAvatar>
                  <ListItemText primary={place} />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemAvatar>
                    <IconEmail />
                  </ListItemAvatar>
                  <ListItemText primary={email} />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemAvatar>
                    <IconPhone />
                  </ListItemAvatar>
                  <ListItemText primary={phone} />
                </ListItem>
              </List>
            </Styled.EventListCardCollapse>
          </Styled.EventListCardContent>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={onClickButtonMore}>
          {state.isShowMore ? t(i18nKeys.EventListCardButtonLess) : t(i18nKeys.EventListCardButtonMore)}
        </Button>
      </CardActions>
    </Styled.EventListCard>
  )
}