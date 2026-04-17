import dotenv from 'dotenv'
import { Client } from 'pg'

// Configurando o caminho do .env. ESSENCIAL
dotenv.config({path: "/home/gabriel/Documentos/cruzeiro_do_sul/web/conectando_banco_dados/.env"})
// Transforma a porta em numero
const PGPortNumber = Number(process.env.PHPORT!) as number;

// Configurando a conexao com o banco de dados utilizando o modulo Client
const client = new Client({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: PGPortNumber,
    //A escolha da database e feita aqui
    database: process.env.PGDATABASE
})

// Conectando ao banco de dados
await client.connect()

// Query funcionando
const text = 'SELECT * FROM cliente;' 
try {
   const res = await client.query(text)
   console.log(res)
} catch (err) {
   console.error(err);
} finally {
   await client.end()
   console.log('client has been disconnected')
}

