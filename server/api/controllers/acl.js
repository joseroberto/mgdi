var acl_rules  = require('../helpers/acl-rules')();
var models  = require('../models');


module.exports = {
  getAclRules: (req, res)=>{


    if( ! req.decoded){
          res.json({acl_rules: acl_rules});
    }else{

        models.Unidade.findAll({
            hierarchy: false
          }).then( unidades =>
          {
            unidades = unidades.map(uni => uni.toJSON());

            let unidade_path = [];

            let get_child = (unidade)=>{
                unidade_path.push(unidade)
            }

       

            res.json({acl_rules: acl_rules});
          }
          )
    }

      
  }
}
