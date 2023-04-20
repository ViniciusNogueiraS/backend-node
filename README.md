# backend-node
### REST API Backend Node.js with TypeScript, Restify and Prisma.

```html
<table border="1">
    <thead>
        <th>Rota</th>
        <th>Método da requisição</th>
        <th>Serviço</th>
        <th>Necessita de autorização</th>
    </thead>
    <tbody>
        <tr>
            <td>👉 /api/v1/product</td>
            <td>GET</td>
            <td>Retorna todos os Produtos</td>
            <td>NÃO</td>
        </tr>
        <tr>
            <td>👉 /api/v1/product/:id</td>
            <td>GET</td>
            <td>Retorna um Produto específico</td>
            <td>NÃO</td>
        </tr>
        <tr>
            <td>👉 /api/v1/product <i>(BODY name: string, price: float)</i></td>
            <td>POST</td>
            <td>Adiciona um novo Produto</td>
            <td>NÃO</td>
        </tr>
    </tbody>
</table>
```