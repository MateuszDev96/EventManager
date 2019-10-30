import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { GlobalStyles } from '@/css/global'
import { fetchEvent } from '@/api/event'
import '@/middlewares/i18n'

import { EventList } from './EventList'
import { EventForm } from './EventForm'

export const Core = hot(() => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchEvent())
  }, [])

  return (
    <>
      <Switch>
        <Route path="/" exact component={EventList} />
        <Route path="/form" exact component={EventForm} />
        <Redirect from="/*" to="/" />
      </Switch>
      <GlobalStyles />
    </>
  )
})