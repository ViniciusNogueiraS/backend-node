import cors from 'cors'
import * as restify from 'restify';

// Porta do servidor
const PORT = process.env.PORT || 3000

// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

// URL-BASE do servidor
const BASE_URL = '/api/v1'

const server = restify.createServer();

// Endpoint raiz
server.get('/', (req, res) => {
    res.send('Bem-vindo!')
})

// Cors
server.use(cors({
    origin: '*',
    maxAge: 5,
    allowedHeaders: '*',
    exposedHeaders: '*'
}))

// Resposta padrão para quaisquer outras requisições:
server.use((req, res) => {
    res.status(404)
})

// Inicia o sevidor
server.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})

// Importa os endpoints
import * as products from './modules/produto/produto-router'

// Aplica os endpoints
products.setEndpoints(BASE_URL, server);
