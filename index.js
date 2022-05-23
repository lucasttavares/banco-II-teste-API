/*console.log("Hello World!")

require('dotenv').config()

console.log(process.env.DB_NAME) */
/* 
const sequelize = require('./banco/db');

async function autenticar(){

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

autenticar(); */

/* const Pessoa = require('./models/Pessoa');

(async () => { */
/*     const pessoa = Pessoa.build({nome: "Paulo"});        ==> cria tuplas no banco
    await pessoa.save()
        .then(console.log("Sucesso"))
        .catch(error => {
            console.log(error);
    }); */

/*     Pessoa.findAll().then(p => {             ==> retorna obj com registros do banco
        console.log(p);
    });

})();
 */

var express = require('express')
var app = express()

app.use(express.json())

const pessoaController = require('./controllers/PessoaController')

app.get('/pessoas/:id', pessoaController.getPessoa);

app.post('/pessoas', pessoaController.addPessoa);

app.delete('/pessoas/:id', pessoaController.deletePessoa);

app.put('/pessoas', pessoaController.attPessoa);

app.listen(3000)