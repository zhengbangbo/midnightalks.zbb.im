import { http, HttpResponse } from 'msw'
import { mockXml } from './resolvers/mockXml'

export const handlers = [
  http.get('https://cors-anywhere.zbb.workers.dev/https%3A%2F%2Frss.lizhi.fm%2Frss%2F14275.xml', mockXml),
]
