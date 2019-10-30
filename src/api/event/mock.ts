import { mock } from '@/middlewares/axios'
import {
  fetchEventURL,
  createEventURL
} from '.'
import { IModelEvent, EnumEventType } from './model'

const events: IModelEvent[] = [{
  id: '1',
  title: 'Event1',
  date: new Date(),
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, dicta.',
  image: '/public/assets/img/event.jpg',
  type: EnumEventType.CULTURE,
  phone: '123-456-789',
  email: 'email@gmail.com',
  place: 'Warszawa'
}, {
  id: '2',
  title: 'Event2',
  date: new Date(),
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, expedita corporis? Molestiae illo, voluptates cupiditate deleniti nobis ut.',
  image: '/public/assets/img/event.jpg',
  type: EnumEventType.HEALTH,
  phone: '123-456-789',
  email: 'email@gmail.com',
  place: 'Wrocław'
}, {
  id: '3',
  title: 'Event3',
  date: new Date(),
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti vero fuga, eos non eum nobis.',
  image: '/public/assets/img/event.jpg',
  type: EnumEventType.SPORT,
  phone: '123-456-789',
  email: 'email@gmail.com',
  place: 'Katowice'
}]

export interface IResponseFetchEvent {
  events: IModelEvent[]
}

const responseFetchEvent: IResponseFetchEvent = {
  events
}

mock.onGet(fetchEventURL).reply(200, responseFetchEvent)
mock.onPost(createEventURL).reply((response) => {
  return [200, response.data]
})