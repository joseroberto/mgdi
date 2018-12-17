var acl_rules  = require('../helpers/acl-rules')();

module.exports = {
  getAclRules: (req, res)=>{
    res.json({acl_rules: acl_rules});
  }
}
