//DEFINE A CLASSE COM ATRIBUTOS E MÉTODOS DO MÓDULO

export default class Produto {

    public id: string = '';
    public name: string = '';

    constructor(id: string, name: string) {
        this.id = id
        this.name = name
    }

    public toString() {
        return ({...this})+''
    }

}