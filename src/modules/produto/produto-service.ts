//DEFINE OS SERVIÇOS E SE COMUNICA COM O BANCO DE DADOS

import Produto from "./produto-model";

export function getOne(id: string): Promise<string> {
    
    return new Promise((resolve, reject) => {
        let p = new Produto(id, 'teste')

        if (p) resolve(p.toString())
        else reject('erro');
    })
}