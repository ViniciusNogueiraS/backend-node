//TRATA OS DADOS E DIRECIONA PARA O SERVIÇO
import { Request, Response } from 'restify'
import * as service from './product-service';
import Product from './product-model';

export function getOne(req: Request, res: Response) {
    service.getOne(req.params?.id).then(result => {
        res.send(200, result);
    })
    .catch(err => res.send(500, 'Erro ==> '+err))
}

export function getAll(req: Request, res: Response) {
    service.getAll().then(result => {
        res.send(200, result);
    })
    .catch(err => res.send(500, 'Erro ==> '+err))
}

export function post(req: Request, res: Response) {

    let newProduct = null;

    if (req.body) {
        if (
            typeof req.body.name == "string" &&
            typeof req.body.price == "number"
        ) {
            newProduct = new Product({
                id: undefined,
                name: req.body.name,
                price: req.body.price
            });
        }
    }else res.send(500, 'Erro ==> Invalid data');

    if (!newProduct) {
        res.send(500, 'Erro ==> Invalid data');
        return;
    }

    service.post(newProduct).then(result => {
        res.send(200, result);
    })
    .catch(err => res.send(500, 'Erro ==> '+err))
}

export function update(req: Request, res: Response) {
    service.update(req.body?.product).then(result => {
        res.send(200, result);
    })
    .catch(err => res.send(500, 'Erro ==> '+err))
}

export function remove(req: Request, res: Response) {
    service.remove(req.params?.id).then(result => {
        res.send(200, result);
    })
    .catch(err => res.send(500, 'Erro ==> '+err))
}