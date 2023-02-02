//DEFINE OS ENDPOINTS
import { Server } from 'restify'
import * as controller from './produto-controller'

export function setEndpoints(base: string, app: Server) {
    app.get(`${base}/product/:id`, (req, res, next) => controller.getOne(req, res, next))
}