// Modulo de seguranca
const jwt = require('jsonwebtoken');
const config_param = require('./config')();
const user = require('../controllers/user');

var models = require('../models');
var sequelize = require('sequelize');


const acl = require('./acl-module/index');
const acl_rules = require('./acl-rules.js')();

// path specified
// looks for ac.json in the config folder
acl.config({
    baseUrl: 'api',
    rules: acl_rules,
    decodedObjectName: 'decoded',
    roleSearchPath: 'decoded.Perfil.sigla'
});

// module.exports = acl
// const node_acl = require('acl');
// const acl = require('./acl');


module.exports = {

    // swagger-tools style handler
    Bearer: async function (req, authOrSecDef, authorization, cb) {
        var token = '';
        var self = this;

        if (authorization) {
            var parts = authorization.split(' ');
            if (parts.length === 2) {
                var scheme = parts[0];
                var credentials = parts[1];
                if (/^Bearer$/i.test(scheme)) {
                    token = credentials;
                }
                else {
                    cb(new Error('Format is Authorization: Bearer [token]'));
                    return;
                }
            }
        }
        if (token) {
            try {
                jwt.verify(token, config_param.secret, {}, async function (err, decoded) {
                    console.log('Err', err);
                    if (err) {
                        return cb(new Error('Invalid token'));
                    }

                    var userPerfil = await user.getPorLoginAplicacao(decoded.login, (decoded.Perfil.Aplicacao.sigla));
                    console.log('UserPerfil==>', userPerfil);

                    //if(!userPerfil || !userPerfil[0] || userPerfil[0].dataValues.SituacaoCodigo != 1){
                    //    return cb(new Error('User not active'));
                    // }
                    // console.log("Token decodificado:", decoded);
                    //req.decoded = userPerfil[0].toJSON(); //decoded
                    req.decoded = {};//FIX: Validar se o usuario esta carregado com um perfil ativo

                    // TODO: Fazer validação via campo do banco needs_perfil
                    if (decoded.Perfil.Aplicacao.sigla === 'MGP') {
                        req.decoded = decoded
                        return cb()
                    } else {
                        checkACL(req, cb); // cb();
                    }
                });
            } catch (e) {
                console.log(e);
                cb(e);
            }
        }
        else {
            cb(new Error('No authorization token was found'));
        }

    },


    getPerfil(req) {
        try {
            if (req.headers.authorization) {
                return jwt.verify(req.headers.authorization.split(' ')[1], config_param.secret);
            } else {
                return null;
            }
        } catch (e) {
            // Para assinatura invalida o perfil escolhido e o publico
            return null;
        }
    }
};




//CHECK ACL ACEESS
const checkACL = async function (req, cb) {

    // Testa se usuario quer somente trocar a senha
    if (req.originalUrl === '/changepassword') {
        cb()
        return
    }

    var options = acl.getConfig();
    const role = acl.findRoleFromRequest(
        req,
        options.roleSearchPath,
        options.defaultRole,
        options.decodedObjectName
    );

    let hasAccess = acl.checkACL(role, req.originalUrl, req.method)

    if (hasAccess) {

        //check if operation in the model is permited
        var unidades = await models.Unidade.findAll({
            hierarchy: true,
        })

        cb()
    } else {
        return cb(new Error(`Usuário não tem permissão para executar essa operação!`))
    }

}

