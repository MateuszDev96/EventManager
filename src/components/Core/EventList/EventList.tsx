import * as React from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import { i18nKeys } from '@/i18n/i18nKeys'
import { getterEvents, getterPendingFetchEvent } from '@/store/getters'
import * as Styled from './EventListStyled'

import { EventListCard } from './EventListCard'

export const EventList = () => {
  const { t } = useTranslation()
  const isPendingFetchEvent = useSelector(React.useMemo(getterPendingFetchEvent, []))
  const events = useSelector(React.useMemo(getterEvents, []))

  return (
    <Styled.EventList>
      <Styled.EventListHeader>
        <Styled.EventListHeaderTitle>
          {t(i18nKeys.EventListTitle)}
        </Styled.EventListHeaderTitle>
        <Link component={NavLink} to="/form">
          <Button variant="contained" color="primary">
            {t(i18nKeys.EventListButtonAddEvent)}
          </Button>
        </Link>
      </Styled.EventListHeader>
      <Styled.EventListContent>
        {isPendingFetchEvent && <span>Loading...</span>}
        {events.map((event) => <EventListCard event={event} key={event.id} />)}
      </Styled.EventListContent>
    </Styled.EventList>
  )
}