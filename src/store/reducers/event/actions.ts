import { IModelEvent, IPureModelEvent } from '@/api/event/model'

export enum ActionType {
  ActionPendingFetchEvent = 'ActionPendingFetchEvent',
  ActionFetchEvent = 'ActionFetchEvent',
  ActionCreateEvent = 'ActionCreateEvent',
}

export type IActionType = ActionResultPendingFetchEvent | ActionResultFetchEvent | ActionResultCreateEvent

export interface ActionPropsPendingFetchEvent {
  pending: boolean
}

export interface ActionResultPendingFetchEvent extends ActionPropsPendingFetchEvent {
  type: ActionType.ActionPendingFetchEvent
}

export const actionPendingFetchEvent = (props: ActionPropsPendingFetchEvent): ActionResultPendingFetchEvent => {
  const { pending } = props

  return {
    type: ActionType.ActionPendingFetchEvent,
    pending
  }
}

export interface ActionPropsFetchEvent {
  events: IModelEvent[]
}

export interface ActionResultFetchEvent extends ActionPropsFetchEvent {
  type: ActionType.ActionFetchEvent
}

export const actionFetchEvent = (props: ActionPropsFetchEvent): ActionResultFetchEvent => {
  const { events } = props

  return {
    type: ActionType.ActionFetchEvent,
    events
  }
}

export interface ActionPropsCreateEvent {
  event: IPureModelEvent
}

export interface ActionResultCreateEvent extends ActionPropsCreateEvent {
  type: ActionType.ActionCreateEvent
}

export const actionCreateEvent = (props: ActionPropsCreateEvent): ActionResultCreateEvent => {
  const { event } = props

  return {
    type: ActionType.ActionCreateEvent,
    event
  }
}