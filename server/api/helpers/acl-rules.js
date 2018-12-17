const yaml   = require('js-yaml');
const path = require("path");
const fs   = require('fs');

module.exports = ()=>{
  var doc = yaml.safeLoad(fs.readFileSync( path.join(__dirname, '../..','config/acl.yaml'), 'utf8'));
  return doc;
}
