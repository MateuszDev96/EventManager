import { ModelEvent } from '@/api/event/model'
import { ActionType, IActionType } from './actions'
import {
  mutationPendingFetchEvent,
  mutationFetchEvent,
  mutationCreateEvent
} from './mutations'

export interface IInitialState {
  pendingFetchEvent: boolean
  events: ModelEvent[]
}

const initialState: IInitialState = {
  pendingFetchEvent: false,
  events: []
}

export const reducer = (state = initialState, action: IActionType) => {
  switch (action.type) {
    case ActionType.ActionPendingFetchEvent:
      return mutationPendingFetchEvent(state, action)
    case ActionType.ActionFetchEvent:
      return mutationFetchEvent(state, action)
    case ActionType.ActionCreateEvent:
      return mutationCreateEvent(state, action)
    default:
      return state
  }
}