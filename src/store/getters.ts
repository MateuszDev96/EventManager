import { createSelector } from 'reselect'
import { IAppState } from '@/@types/common'

export const getterPendingFetchEvent = () => createSelector((store: IAppState) => store, (store) => store.event.pendingFetchEvent)
export const getterEvents = () => createSelector((store: IAppState) => store, (store) => store.event.events)