//DEFINE OS ENDPOINTS
import { Server } from 'restify'
import * as controller from './product-controller'

export function setEndpoints(base: string, server: Server) {
    server.get(`${base}/product`, (req, res) => controller.getAll(req, res))
    server.get(`${base}/product/:id`, (req, res) => controller.getOne(req, res))
    server.post(`${base}/product`, (req, res) => controller.post(req, res))
    server.put(`${base}/product/:id`, (req, res) => controller.update(req, res))
    server.del(`${base}/product/:id`, (req, res) => controller.remove(req, res))
}