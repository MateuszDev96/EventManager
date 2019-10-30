import { Dispatch } from 'redux'
import { instance } from '@/middlewares/axios'
import './mock'
import { IResponseFetchEvent } from './mock'
import {
  actionPendingFetchEvent,
  actionFetchEvent,
  actionCreateEvent
} from '@/store/reducers/event/actions'
import { IPureModelEvent } from './model'

export const fetchEventURL = '/event'
export const createEventURL = '/add'

export const fetchEvent = () => {
  return async (dispatch: Dispatch) => {
    dispatch(actionPendingFetchEvent({
      pending: true
    }))

    try {
      const { data } = await instance.get<IResponseFetchEvent>(fetchEventURL)

      dispatch(actionFetchEvent(data))
    } catch(e) {}
    finally {
      dispatch(actionPendingFetchEvent({
        pending: false
      }))
    }
  }
}

interface IPropsCreateEvent {
  event: IPureModelEvent
}

export const createEvent = (props: IPropsCreateEvent) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await instance.post<IPropsCreateEvent>(fetchEventURL, props)

      dispatch(actionCreateEvent(data))
    } catch(e) {}
  }
}