const soap = require('soap'),
      LocalStrategy   = require('passport-local').Strategy,
      LdapStrategy    = require('passport-ldapauth').Strategy;
      JsonStrategy    = require('passport-json').Strategy;
const config_param = require('./config')();
const crypto = require('crypto');
//var parseString = require('xml2js').parseString;


module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    /*passport.serializeUser(function(user, done) {
        done(null, user);
    });*/

    // used to deserialize the user
    /*passport.deserializeUser(function(id, done) {
        //User.findById(id, function(err, user) {
            done(err, user);
        //});
    });*/



    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // Valida o usuario na base local (username/password)
    passport.use('local', new LocalStrategy((username, password, done) =>{
        console.log('local', username, password);
        if(username=='user@teste.com' && password=='teste'){
          return done(null, {nome:'Nome do usuario', email:username});
        }
        return done(null, false, null);
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        /*User.findOne({ 'local.email' :  email }, function(err, user) {
            // if there are any errors, return the error before anything else
            if (err)
                return done(err);

            // if no user is found, return the message
            if (!user)
                return done(null, false, null); // req.flash is the way to set flashdata using connect-flash

            // if the user is found but the password is wrong
            if (!user.validPassword(password))
                return done(null, false, null); // create the loginMessage and save it to session as flashdata

            // all is well, return successful user
            return done(null, user);
        });*/
    }));

    // =========================================================================
    // SCPA Login ==============================================================
    // =========================================================================
    passport.use('scpa', new JsonStrategy((username, password, done) =>{
        console.log('Acessando scpa:', process.env.WSDL || config_param.wsdl);
        soap.createClient(process.env.WSDL || config_param.wsdl, function(err, client) {
          if(err){
            console.log(err);
            return res.status(500).send(err);
          }

          var password_hash = crypto.createHash('sha256').update(password, 'utf8').digest().toString('hex');

          client.buscaPerfilUsuario(
              {autenticacao: {email: username, senha: password_hash, siglaSistema: config_param.system}},
              (err, result)=>{
                if(err){
                  var erroSCPA = err.body.substring(err.body.indexOf('<detalhamento>')+14,err.body.indexOf('</detalhamento>'));
                  done(erroSCPA);
                  return;
                }

                done(null, {
                              cpf: result.respostaBuscaPerfilUsuario.usuario.cpf,
                              nome: result.respostaBuscaPerfilUsuario.usuario.nome,
                              email: result.respostaBuscaPerfilUsuario.usuario.email
                          });
                // Busca os perfis so SCPA e mapeia com os perfis do sistema.

                /*if(err!=result.respostaBuscaPerfilUsuario || !result.respostaBuscaPerfilUsuario.perfis || !result.respostaBuscaPerfilUsuario.perfis.perfil){
                  if(String(err).indexOf('Error')!== -1){
                    res.status(403).send({codret:1000, message:'Login/Senha inválida'});
                  }else{
                    res.status(403).send({codret:1000, message:'Usuário não possui perfil para login no sistema SAGE'});
                  }
                }else{

                }

                if(!err && result.respostaBuscaPerfilUsuario.perfis.perfil){
                  var perfis = {}
                  var array_perfis = [];
                  result.respostaBuscaPerfilUsuario.perfis.perfil.forEach((item)=>{
                    var esferas = [];
                    item.esferas.esferasPerfil.forEach((esfera)=>{
                        esferas.push(esfera.configuracao);
                    });
                    perfis[item.perfil.sigla]=esferas;
                    array_perfis.push(item.perfil.sigla);
                  });
                  var temp = {
                      cpf: result.respostaBuscaPerfilUsuario.usuario.cpf,
                      nome: result.respostaBuscaPerfilUsuario.usuario.nome,
                      email: result.respostaBuscaPerfilUsuario.usuario.email,
                      perfis: perfis
                  };

                  // Salva dados usuario
                  models.User.findOne({email:result.respostaBuscaPerfilUsuario.usuario.email}).then((resp)=>{
                      temp['perfis'] = array_perfis;
                      if(resp){
                        resp.update(temp).then((result)=>{
                          //console.log("Dados de usuário atualizado:", result);
                        });
                        //models.User.update(temp, { where: { cpf: result.respostaBuscaPerfilUsuario.usuario.cpf }}).then((user)=> {

                        //});
                      }else{
                        models.User.create(temp).then((user)=> {
                          console.log("Dados de usuário criado:", user);
                        });
                      }

                      temp['ultimo_login']=resp['dt_atualizacao'];
                      var token = jwt.sign(temp, config_param.secret, { expiresIn: '7d' });
                      res.json({token: util.format('Bearer %s', token), user: temp});

                  }).catch(err=>{
                      console.log('Erro na atualização de dados de usuário', err);
                  });
                  */
              });
        });
    }));
    // =========================================================================
    // LDAP Login ==============================================================
    // =========================================================================

    var opts = {
        server: {
                url: 'ldap://localhost:389',
                bindDn: 'cn=teste, dc=synapsys, dc=com, dc=br',
                bindCredentials: 'teste12345678',
                searchBase: 'OU=XX1, OU=XX2, DC=synapsys, DC=com, DC=br',
                searchFilter: '(uid={{username}})',
               // passReqToCallback : true
              }
    };

    passport.use('ldap-login', new LdapStrategy(opts, function(req, user, done) {
        console.log("Passport LDAP authentication.");
        log.info('Passport LDAP authentication.');
        done(null, user);
      }
    ));
};
