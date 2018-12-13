
const {
  mapPolicyToGroup,
  findRoleFromRequest,
  findPermissionsForRoute,
  checkIfHasAccess,
  deny
} = require('./acl-module');

let options = {
  path: '.',
  filename: 'nacl.json',
  policies: new Map(),
  defaultRole: 'guest'
};

function config(config, response) {
  options = Object.assign({}, options, config, { response });

  if (config && config.rules) {
    options.policies = mapPolicyToGroup(config.rules);
  } 
  if (!options.policies.size) {
    return '\u001b[33mWARNING: You have not set any policies, All traffic will be denied\u001b[39m';
  }
  return options.policies;
}

function getConfig() {
    return options;
}






//CHECK ACL ACEESS
function checkACL(role,route,method){
  
    const policy = options.policies.get(role);
    if (!policy) {
        return false
    }

    const permissions = findPermissionsForRoute(
      route,
      method,
      options.baseUrl,
      policy
    );

    if (!permissions) {
      return false
    }
    
    let hasAccess =  checkIfHasAccess( method, permissions);

    if(hasAccess){
      return true
    }else{
      return false
    }
}



/**
 * [authorize Express middleware]
 * @param  {[type]}   req  [Th request object]
 * @param  {[type]}   res  [The response object]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */

function authorize(req, res, next) {
  // const role = findRoleFromRequest(
  //   req,
  //   options.roleSearchPath,
  //   options.defaultRole,
  //   options.decodedObjectName
  // );

  // if (req.originalUrl === '/') {
  //   return next();
  // }

  // const policy = options.policies.get(role);

  // if (!policy) {
  //   return res.status(403).json({
  //     status: 'Access denied',
  //     success: false,
  //     message: `REQUIRED: Policy for role ${role} is not defined`
  //   });
  // }

  // const permission = findPermissionsForRoute(
  //   req.originalUrl,
  //   req.method,
  //   options.baseUrl,
  //   policy
  // );

  // if (!permission) {
  //   if (typeof options.denyCallback === 'function') {
  //     return options.denyCallback(res);
  //   }
  //   return res.status(403).json(deny(options.customMessage, options.response));
  // }

  // return checkIfHasAccess(
  //   req.method,
  //   res,
  //   next,
  //   permission,
  //   options.customMessage,
  //   options.response,
  //   options.denyCallback
  // );
}


module.exports = {
  config,
  checkACL,
  authorize,
  options,
  getConfig,
  mapPolicyToGroup,
  findRoleFromRequest,
  findPermissionsForRoute,
  checkIfHasAccess,
  deny
};