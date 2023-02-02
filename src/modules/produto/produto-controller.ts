//TRATA OS DADOS E DIRECIONA PARA O SERVIÇO
import { Next, Request, Response } from 'restify'
import * as service from './produto-service';

export function getOne(req: Request, res: Response, next: Next) {
    service.getOne(req.params?.id).then(result => {
        res.send(200, result);
    })
    .catch(err => res.send(500, err))
}