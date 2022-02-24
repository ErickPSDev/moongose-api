//Generar un endpoint que permita listar

const { response } = require('express')
const express = require('express')

const server = express()

server.get('/koders', (request, response) => {
    //
    response.json({
        sucess: true,
        data: {
            koders: []
        }
    })
})

server.listen(8080, () => {
    console.log ('Server listening at port 8080')
})