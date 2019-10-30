import update from 'immutability-helper'
import { IInitialState } from './'
import {
  ActionResultPendingFetchEvent,
  ActionResultFetchEvent,
  ActionPropsCreateEvent
} from './actions'
import { ModelEvent } from '@/api/event/model'

export const mutationPendingFetchEvent = (state: IInitialState, props: ActionResultPendingFetchEvent) => {
  const { pending } = props

  return update(state, {
    pendingFetchEvent: {
      $set: pending
    }
  }) 
}

export const mutationFetchEvent = (state: IInitialState, props: ActionResultFetchEvent) => {
  const events = props.events.map((event) => new ModelEvent(event))

  return update(state, {
    events: {
      $set: events
    }
  }) 
}

export const mutationCreateEvent = (state: IInitialState, props: ActionPropsCreateEvent) => {
  const { event } = props

  return update(state, {
    events: {
      $unshift: [new ModelEvent(event)]
    }
  }) 
}