/**

Exercícios de Treino de Fluência em NODE JS
 
*************************************************************************
NOTA: O Node JS é um ambiente de execução de Java Script, multiplataforma.

NOTA: Node JS NÃO é biblioteca e nem framework.

NOTA: Node JS NÃO tem o DOM e nem o BOM disponíveis, pois é backend.
*************************************************************************

NOTA: Fiz este curso completo, até o dia 23/06/2023, haviam apenas 46 aulas e 
eu completei todas elas. A linha debaixo é apenas para ver se o João Ribeiro 
lançou mais aulas depois disso.
 
Parei em: https://www.youtube.com/watch?v=NL6by_ecBw0&list=PLXik_5Br-zO8Ul2-XnkTf99jiYaDylAAW&index=46


*************************************************************************
NOTA: NUNCA mexa na pasta "node_modules" e no arquivo "package-lock.json" 

NOTA: Conceito de Middleware - São partes do código que são executadas entre
o "request" e o envio das respostas.

NOTA: Tratando-se de APIs criadas por programadores, 90% respondem em formato JSON.
O formato JSON é atualmente o mais utilizado.

SITE DE DOCS E TUTORIAIS: https://developer.mozilla.org/pt-BR/
*************************************************************************


MOD INTERMEDIÁRIO - PROGS DE BAS_19 ATÉ BAS_40
Aquecimento - O programa deverá realizar as seguintes tarefas:

 
7-) Crie um projeto novo e utilize o comando "npm init" para gerar os arquivos de configuração.
Instale o framework "express" de forma local no projeto e cheque o arquivo de dependências para
ver se ele está descrito ali. Utilizando o "express", crie um servidor que responda com textos
diferentes utilizando o tag "h1" na resposta. Faça respostas para três rotas diferentes e não 
se esqueça de criar o arquivo ".gitignore";

*/
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.end("<h1>HOME</h1>")
})

app.get('/1', (req, res) => {
    console.log("TESTE");
    res.end("<h1>ROTA 1</h1>")
})

app.get("/2", (req, res) => {
    res.end("<h1>ROTA 2</h1>")
})

app.get("/3", (req, res) => {
    res.end("<h1>ROTA 3</h1>")
})

app.listen(8000)
