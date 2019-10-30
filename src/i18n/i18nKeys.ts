import { EnumEventType } from '@/api/event/model'

export const eventTypeKeys = {
  [EnumEventType.CULTURE]: 'EventCULTURE',
  [EnumEventType.HEALTH]: 'EventHEALTH',
  [EnumEventType.SPORT]: 'EventSPORT',
}

export const i18nKeys = Object.assign({
  EventListTitle: 'EventListTitle',
  EventListButtonAddEvent: 'EventListButtonAddEvent',
  EventListCardButtonMore: 'EventListCardButtonMore',
  EventListCardButtonLess: 'EventListCardButtonLess',
  EventFormTitle: 'EventFormTitle',
  EventFormLabelTitle: 'EventFormLabelTitle',
  EventFormLabelDate: 'EventFormLabelDate',
  EventFormLabelDescription: 'EventFormLabelDescription',
  EventFormLabelImage: 'EventFormLabelImage',
  EventFormLabelEventType: 'EventFormLabelEventType',
  EventFormLabelPhone: 'EventFormLabelPhone',
  EventFormLabelEmail: 'EventFormLabelEmail',
  EventFormLabelPlace: 'EventFormLabelPlace',
  EventFormActionsButtonReset: 'EventFormActionsButtonReset',
  EventFormActionsButtonCreate: 'EventFormActionsButtonCreate',
}, eventTypeKeys)