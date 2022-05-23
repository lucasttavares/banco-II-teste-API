const Pessoa = require('../models/Pessoa')

const attPessoa = async function(req, res){
  
  const pessoa = await Pessoa.findByPk(req.body.id);

  if(pessoa === null){
    res.status(400);
    res.send('Usuário não encontrado');
  }

  else{
    pessoa.nome = req.body.nome;
    pessoa.save().then(p =>{
      res.status(200)
      res.send('OK')
    })
  }
}

const deletePessoa = async function(req, res){

  const pessoa = await Pessoa.findByPk(req.params.id);

    if(pessoa === null){
      res.status(400);
      res.send('Usuário não encontrado');
    }

    else{
      pessoa.destroy().then(p =>{
        res.status(200)
        res.send('Usuário deletado')
      })
    }
}

const addPessoa = async function (req, res){

  const pessoa = Pessoa.build(req.body);

  pessoa.save().then(p =>{
    res.status(200)
    res.send('OK')
  }).catch(err =>{
    console.log(err)
    res.status(400)
    res.send('NÃO OK')
  })
}

const getPessoa = async function (req, res) {

    const pessoa = await Pessoa.findByPk(req.params.id);

      if(pessoa === null){
        res.status(400);
        res.send('Usuário não encontrado');
      }

      else{
        res.status(200);
        res.send(pessoa);
      }

  }

module.exports = {getPessoa, addPessoa, deletePessoa, attPessoa};