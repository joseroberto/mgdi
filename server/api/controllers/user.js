const models = require('../models');
const perfil = require('./perfil');
const crypto = require('crypto');
const status = require('./status-aprovacao');
const util = require('util');
const jwt = require('jsonwebtoken');
const config_param = require('../helpers/config')();

module.exports = {

  getUsers: (req, res) => {
    var attr = {
      attributes: ["codigo", "nome", "email", "celular", "ramal", "sexo", "cargo", "SituacaoCodigo", "cpf"],
      include: [
        { model: models.Unidade, as: 'Unidade' },
        { model: models.Perfil, as: 'Perfil' }
      ],
      where: {},
      order: [
        ['nome', 'ASC'],
      ]

    };

    if (req.swagger.params.situacao.value === undefined) {
      attr.where = { SituacaoCodigo: 1 };
    } else if (req.swagger.params.situacao.value !== -1) {
      attr.where = { SituacaoCodigo: req.swagger.params.situacao.value };
    }

    if (req.swagger.params.aplicacao.value !== undefined) {
      attr.include[1].include = [{ model: models.Aplicacao, as: 'Aplicacao', where: { sigla: req.swagger.params.aplicacao.value } }];
    }
    models.User.findAll(attr).then(function (lista) {
      res.json({ users: lista });
    });
  },
  getPorId: (req, res) => {
    models.User.findOne({
      attributes: { exclude: ['senha'] },
      where: { codigo: req.swagger.params.codigo.value }
    }).then(function (user) {
      if (!user) {
        res.status(404).json({ codret: 1010, message: "Não existe o usuário" });
        return;
      }
      res.json(user)
    })
  },
  getPorLogin: async (login) => {
    return models.User.findOne({
      attributes: { exclude: ['senha'] },
      where: { login: login }
    });
  },
  getPorLoginSenha: (login, senha) => {
    return models.User.findOne({
      attributes: { exclude: ['senha'] },
      where: { login: login, senha: senha }
    });
  },
  getPorLoginAplicacao: async (login, sigla_aplicacao) => {
    return getPorLoginAplicacao(login, sigla_aplicacao)
  },
  createSolicitacao: (req, res) => {
    console.log('Solicitacao de perfil');
    createPerfil(req.body, req.decoded).then((perfil) => {
      console.log("Perfil: ", perfil)
      res.json({ codret: 0, mensagem: "Solicitação de perfil de acesso cadastrado com sucesso", userId: perfil.codigo });
    }).catch(err => {
      console.log('Erro', err);
      res.status(500).json({ codret: 1001, message: "Erro no cadastramento da solicitação de perfil", error: err.message });
    });
  },
  aprovaSolicitacao: (req, res) => {
    changeSituacao(req.swagger.params.codigo.value, 1).then(item => {
      res.json({ codret: 0, mensagem: "Solicitação de perfil de acesso aprovada com sucesso" });
    }).catch(err => {
      console.log('Erro', err);
      res.status(500).json({ codret: 1001, message: "Erro no cadastramento da solicitação de perfil" });
    });
  },
  rejeitaSolicitacao: (req, res) => {
    changeSituacao(req.swagger.params.codigo.value, 2).then(item => {
      res.json({ codret: 0, mensagem: "Solicitação de perfil de acesso rejeitada com sucesso" });
    }).catch(err => {
      console.log('Erro', err);
      res.status(500).json({ codret: 1001, message: "Erro no cadastramento da solicitação de perfil" });
    });
  },
  inativaSolicitacao: (req, res) => {
    changeSituacao(req.swagger.params.codigo.value, 3).then(item => {
      res.json({ codret: 0, mensagem: "Solicitação de perfil de acesso inativada com sucesso" });
    }).catch(err => {
      console.log('Erro', err);
      res.status(500).json({ codret: 1001, message: "Erro no cadastramento da solicitação de perfil" });
    });
  },
  getPerfil: (req, res) => {
    console.log(req.headers.authorization);
    //jwt.verify(token, config_param.secret);
    res.json(req.headers.authorization);
  },
  changePassword: (req, res) => {
    var current_pass = req.body.current_password;
    var hash = crypto.createHash('sha256').update(current_pass, 'utf8').digest()
    var new_password = req.body.new_password;
    var conf_password = req.body.conf_password;

    var data = jwt.verify(req.headers.authorization.split(' ')[1], config_param.secret);
    var login = data.login;
    console.log('=====>', current_pass, hash)
    if (new_password != conf_password) {
      res.status(500).json({ codret: 1050, mensagem: "Senhas não conferem" });
    } else if (new_password === current_pass) {
      res.status(500).json({ codret: 1051, mensagem: "Senhas não pode ser igual à anterior" });
    } else {
      models.User.findOne({
        where: { login: login, senha: hash }
      }).then(resp => {
        if (resp) {
          resp.senha = crypto.createHash('sha256').update(new_password, 'utf8').digest();
          resp.save();
          res.json({ codret: 0, mensagem: "Senha trocada com sucesso" });
        } else {
          return res.status(403).send('Usuário/Senha inválida.')
        }
      }).catch(err => {
        console.log('Erro', err);
        res.status(500).json({ codret: 1001, message: "Erro na troca de senha" });
      });
    }
  },
  resetPassword: (req, res) => {
    // var hash = crypto.createHash('sha256').update(current_pass, 'utf8').digest()
    var data = jwt.verify(req.headers.authorization.split(' ')[1], config_param.secret);

    if (data.Perfil.sigla !== 'ADP')
      return res.status(401).json({ codret: 1050, mensagem: "Você não tem permissão para esta ação" });

    models.User.findOne({
      where: { codigo: req.body.userId }
    }).then(user => {
      console.log("A: ", user)
      if (user) {
        user.senha = crypto.createHash('sha256').update(`nova${user.cpf.substring(0, 5)}`, 'utf8').digest();
        user.save();
        res.json({ codret: 0, mensagem: "Senha trocada com sucesso" });
      } else {
        return res.status(403).send('Este usuário não existe.')
      }
    }).catch(err => {
      console.log('Erro', err);
      res.status(500).json({ codret: 1001, message: "Erro na troca de senha" });
    });

  },
  refreshToken: (req, res) => {
    getPorLoginAplicacao(req.decoded.login, req.decoded.Perfil.Aplicacao.sigla).then(userPerfil => {
      if (userPerfil.length > 0 && userPerfil[0]) {
        var token = jwt.sign(userPerfil[0].dataValues, config_param.secret, { expiresIn: req.decoded.Perfil.Aplicacao.sigla === 'MGP' ? '30m' : '7d' });
        res.json({ token: util.format('Bearer %s', token) });
      } else {
        delete req.decoded.iat
        delete req.decoded.exp
        var token = jwt.sign(req.decoded, config_param.secret, { expiresIn: req.decoded.Perfil.Aplicacao.sigla === 'MGP' ? '30m' : '7d' });
        res.json({ token: util.format('Bearer %s', token) });
      }
    });
  }
}

function changeSituacao(codigo, situacao) {
  return models.User.findAll({ attributes: { exclude: ['senha'] }, where: { codigo: codigo } }).map(resp => {
    resp.SituacaoCodigo = situacao;
    resp.save();
  });
}

function getPorLoginAplicacao(login, sigla_aplicacao) {
  return models.User.findAll({
    attributes: { exclude: ['senha'] },
    include: [{
      model: models.Perfil, required: false,
      as: 'Perfil',
      include: [{ model: models.Aplicacao, as: 'Aplicacao', where: { sigla: sigla_aplicacao } }]
    }],
    where: { login: login }
  });
}

async function createPerfil(entidade, loggedUser) {
  var numPerfil = await models.User.count();
  if (loggedUser && loggedUser.Perfil.sigla === 'ADP')
    entidade['SituacaoCodigo'] = 1;
  else
    entidade['SituacaoCodigo'] = 0;

  let perfil = await models.Perfil.findOne({ where: { sigla: entidade.PerfilSigla } })
  entidade.PerfilCodigo = perfil.codigo

  if (entidade.Unidade && entidade.Unidade.codigo)
    entidade.UnidadeCodigo = entidade.Unidade.codigo

  // Checa se nao tem perfil cadastrado e coloca o primeiro como ADM
  if (numPerfil == 0) {
    var vlPerfil = await perfil.getPerfilPorSigla('ADM');
    entidade['PerfilCodigo'] = vlPerfil[0].dataValues.codigo;
    entidade['SituacaoCodigo'] = 1; // Aprovado
  }

  // console.log('create', entidade);
  if ('codigo' in entidade) {
    if ('senha' in entidade) {
      throw new Error('Erro no cadastramento da solicitação de perfil')
    } else {
      return models.User.findOne({ where: { codigo: entidade.codigo } }).then(user => {
        return user.update(entidade)
      })
    }
  } else {
    // Verifica se há o campo senha
    if ('senha' in entidade) {
      console.log("ENTIDADE: ", entidade)
      entidade.senha = crypto.createHash('sha256').update(entidade.senha, 'utf8').digest()
      return models.User.create(entidade).catch(err => {
        console.log("AAAA: ", err.errors)
        if (err.errors && err.errors[0].type === 'unique violation') {
          if (err.errors[0].path === 'ds_cpf')
            throw new Error('Este CPF já existe.')
          if (err.errors[0].path === 'ds_email')
            throw new Error('Este E-mail já existe.')
        }
      })
    } else {
      throw new Error('Erro no cadastramento da solicitação de perfil: a senha é obrigatória')
    }
  }
}
