export enum EnumEventType {
  SPORT = 'SPORT',
  CULTURE = 'CULTURE',
  HEALTH = 'HEALTH',
}

export interface IModelEvent {
  id?: string,
  title: string
  date: Date
  description: string
  image: string
  type: EnumEventType
  phone: string
  email: string
  place: string
}

export type IPureModelEvent = Omit<IModelEvent, 'id'>

const isCompleteModelEvent = (event: IModelEvent | IPureModelEvent): event is IModelEvent => {
  return (event as IModelEvent).id !== undefined
}

export class ModelEvent implements IModelEvent {
  id?: string
  title: string
  date: Date
  description: string
  image: string
  type: EnumEventType
  phone: string
  email: string
  place: string

  constructor(event: IModelEvent | IPureModelEvent) {
    this.title = event.title
    this.date = new Date(event.date)
    this.description = event.description
    this.image = event.image
    this.type = event.type
    this.phone = event.phone
    this.email = event.email
    this.place = event.place

    if (!isCompleteModelEvent(event)) {
      this.id = Math.random().toString(36).slice(2)
    } else {
      this.id = event.id
    }
  }
}