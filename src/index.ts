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
server.get('/', restify.plugins.serveStatic({
    directory: './public',
    default: 'index.html'
}))

// Cors
server.use(cors({
    origin: '*',
    maxAge: 5,
    allowedHeaders: '*',
    exposedHeaders: '*'
}))

// Importa os endpoints
import * as products from './modules/product/product-router'

// Aplica os endpoints por módulo
products.setEndpoints(BASE_URL, server);

// Inicia o sevidor
server.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}...`)
})