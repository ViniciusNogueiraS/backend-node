//DEFINE A CLASSE COM ATRIBUTOS E MÉTODOS DO MÓDULO

export default class Product {

    public id: string = '';
    public name: string = '';
    public price: number = 0.00;

    constructor(id: string, name: string, price: number) {
        this.id = id
        this.name = name
        this.price = price
    }

    public toString() {
        return JSON.stringify(this);
    }

}