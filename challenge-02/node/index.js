const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
}

const mysql = require('mysql2')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO PEOPLE(name) values('Sato')`
connection.query(sql)

app.get('/', (req, res) => {
    console.log("Request to GET people")
    getPeople().catch(error => {
        console.log(error)
    }).then(value => {
        res.send(getHtml(value))
    })
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})

function getPeople() {
    let sql = 'SELECT * FROM PEOPLE';
    return new Promise((resolve, reject) => {
        connection.query(sql, (error, results, fields) => {
            if (error) {
                reject(`Erro: ${error}`)
            }
            resolve(results)
        })
    });
}

const title = `
<p>
    <p><h1>Full Cycle Rocks!</h1></p>
</p>
`

function getHtml(people) {
    let peopleHtml = ''
    if (people != null) {
        people.forEach(element => {
            peopleHtml += `<li>${element.name}</li>`
        })
        peopleHtml = `<ul>${peopleHtml}</ul>`
    }

    return `${title}
    <p>
        <p>- Lista de nomes cadastrada no banco de dados:</p>
        ${peopleHtml}
    </p>
    `
}
