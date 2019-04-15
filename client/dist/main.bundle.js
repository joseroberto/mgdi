webpackJsonp([17,28],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__speech_recognition_api__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoiceRecognitionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VoiceRecognitionService = (function () {
    function VoiceRecognitionService() {
        this.events = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.commandsList = [];
        this.callbacks = {
            start: [],
            error: [],
            end: [],
            result: [],
            resultMatch: [],
            resultNoMatch: [],
            errorNetwork: [],
            errorPermissionBlocked: [],
            errorPermissionDenied: []
        };
        this.autoRestart = false;
        this.lastStartedAt = 0;
    }
    VoiceRecognitionService.prototype.commandToRegExp = function (command) {
        var optionalParam = /\s*\((.*?)\)\s*/g, optionalRegex = /(\(\?:[^)]+\))\?/g, namedParam = /(\(\?)?:\w+/g, splatParam = /\*\w+/g, escapeRegExp = /[\-{}\[\]+?.,\\\^$|#]/g;
        command = command.replace(escapeRegExp, '\\$&').replace(optionalParam, '(?:$1)?').replace(namedParam, function (match, optional) {
            return optional ? match : '([^\\s]+)';
        }).replace(splatParam, '(.*?)').replace(optionalRegex, '\\s*$1?\\s*');
        return new RegExp('^' + command + '$', 'i');
    };
    ;
    VoiceRecognitionService.prototype.isInitialized = function () {
        return !!this.recognition;
    };
    ;
    VoiceRecognitionService.prototype.initIfNeeded = function () {
        if (!this.isInitialized()) {
            this.init({}, false);
        }
    };
    ;
    // Initialize smartSpeechRecognition with a list of commands to recognize.
    // e.g. smartSpeechRecognition.init({'hello :name': helloFunction})
    // smartSpeechRecognition understands commands with named variables, splats, and optional words.
    VoiceRecognitionService.prototype.init = function (commands, resetCommands) {
        var _this = this;
        if (resetCommands === void 0) { resetCommands = true; }
        var recognition = this.recognition;
        // Abort previous instances of recognition already running
        if (recognition && recognition.abort) {
            recognition.abort();
        }
        // initiate SpeechRecognition
        recognition = new __WEBPACK_IMPORTED_MODULE_1__speech_recognition_api__["a" /* SpeechRecognition */]();
        // Set the max number of alternative transcripts to try and match with a command
        recognition.maxAlternatives = 5;
        recognition.continuous = true;
        // Sets the language to the default 'en-US'. This can be changed with smartSpeechRecognition.setLanguage()
        recognition.lang = __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].voice_command_lang || 'en-US';
        recognition.onstart = function () {
            // invokeCallbacks(callbacks.start);
            //debugState
            if (__WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugState) {
                console.log('%c ✔ SUCCESS: User allowed access the microphone service to start ', __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugStyle_success);
                console.log('Language setting is set to: ' + recognition.lang, __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugStyle);
            }
            _this.events.next({
                type: 'start'
            });
        };
        recognition.onerror = function (event) {
            // this.invokeCallbacks(this.callbacks.error);
            switch (event.error) {
                case 'network':
                    // this.invokeCallbacks(this.callbacks.errorNetwork);
                    break;
                case 'not-allowed':
                case 'service-not-allowed':
                    // if permission to use the mic is denied, turn off auto-restart
                    _this.autoRestart = false;
                    //debugState
                    if (__WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugState) {
                        console.log('%c WARNING: Microphone was not detected (either user denied access or it is not installed properly) ', __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugStyle_warning);
                    }
                    // determine if permission was denied by user or automatically.
                    if (new Date().getTime() - _this.lastStartedAt < 200) {
                        // invokeCallbacks(callbacks.errorPermissionBlocked);
                    }
                    else {
                        // invokeCallbacks(callbacks.errorPermissionDenied);
                        //console.log("You need your mic to be active")
                    }
                    _this.events.emit({
                        type: 'error',
                        payload: event
                    });
                    break;
            }
        };
        recognition.onend = function () {
            // invokeCallbacks(this.callbacks.end);
            // smartSpeechRecognition will auto restart if it is closed automatically and not by user action.
            _this.events.emit({
                type: 'end',
                payload: event
            });
            if (_this.autoRestart) {
                // play nicely with the browser, and never restart smartSpeechRecognition automatically more than once per second
                var timeSinceLastStart = new Date().getTime() - _this.lastStartedAt;
                if (timeSinceLastStart < 1000) {
                    setTimeout(function () {
                        _this.start({});
                    }, 1000 - timeSinceLastStart);
                }
                else {
                    _this.start({});
                }
            }
        };
        recognition.onresult = function (event) {
            // this.invokeCallbacks(this.callbacks.result);
            var results = event.results[event.resultIndex];
            var commandText;
            // go over each of the 5 results and alternative results received (we've set maxAlternatives to 5 above)
            for (var i = 0; i < results.length; i++) {
                // the text recognized
                commandText = results[i].transcript.trim();
                if (__WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugState) {
                    console.log('Speech recognized: %c' + commandText, __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugStyle);
                }
                var _loop_1 = function (j, l) {
                    var result = _this.commandsList[j].command.exec(commandText);
                    if (result) {
                        var parameters = result.slice(1);
                        if (__WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugState) {
                            console.log('command matched: %c' + _this.commandsList[j].originalPhrase, __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugStyle);
                            if (parameters.length) {
                                console.log('with parameters', parameters);
                            }
                        }
                        if (_this.commandsList[j].type == 'action') {
                            setTimeout(function () {
                                _this.events.emit(_this.commandsList[j]);
                            }, 50);
                        }
                        else {
                            // execute the matched command
                            _this.commandsList[j].callback.apply(_this, parameters);
                        }
                        // this.invokeCallbacks(this.callbacks.resultMatch);
                        // for commands "sound on", "stop" and "mute" do not play sound or display message
                        var ignoreCallsFor = ["sound on", "mute", "stop"];
                        if (ignoreCallsFor.indexOf(_this.commandsList[j].originalPhrase) < 0) {
                            _this.events.emit({
                                type: 'match',
                                payload: _this.commandsList[j].originalPhrase
                            });
                        } // end if
                        return { value: true };
                    }
                };
                // try and match recognized text to one of the commands on the list
                for (var j = 0, l = _this.commandsList.length; j < l; j++) {
                    var state_1 = _loop_1(j, l);
                    if (typeof state_1 === "object")
                        return state_1.value;
                } // end for
            } // end for
            // invokeCallbacks(callbacks.resultNoMatch);
            //console.log("no match found for: " + commandText)
            _this.events.emit({
                type: 'no match',
                payload: commandText
            });
            return false;
        };
        // build commands list
        if (resetCommands) {
            this.commandsList = [];
        }
        if (commands.length) {
            this.addCommands(commands);
        }
        this.recognition = recognition;
    };
    // Start listening (asking for permission first, if needed).
    // Call this after you've initialized smartSpeechRecognition with commands.
    // Receives an optional options object:
    // { autoRestart: true }
    VoiceRecognitionService.prototype.start = function (options) {
        if (options === void 0) { options = {}; }
        this.initIfNeeded();
        if (options.autoRestart !== undefined) {
            this.autoRestart = !!options.autoRestart;
        }
        else {
            this.autoRestart = true;
        }
        this.lastStartedAt = new Date().getTime();
        this.recognition.start();
    };
    // abort the listening session (aka stop)
    VoiceRecognitionService.prototype.abort = function () {
        this.autoRestart = false;
        if (this.recognition && this.recognition.abort) {
            this.recognition.abort();
        }
    };
    // Turn on output of debug messages to the console. Ugly, but super-handy!
    VoiceRecognitionService.prototype.debug = function (newState) {
        if (arguments.length > 0) {
            __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugState = !!newState;
        }
        else {
            __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugState = true;
        }
    };
    // Set the language the user will speak in. If not called, defaults to 'en-US'.
    // e.g. 'fr-FR' (French-France), 'es-CR' (Español-Costa Rica)
    VoiceRecognitionService.prototype.setLanguage = function (language) {
        this.initIfNeeded();
        this.recognition.lang = language;
    };
    // Add additional commands that smartSpeechRecognition will respond to. Similar in syntax to smartSpeechRecognition.init()
    VoiceRecognitionService.prototype.addCommands = function (commands) {
        var _this = this;
        var action, command;
        this.initIfNeeded();
        Object.keys(commands).forEach(function (phrase) {
            action = window[commands[phrase]] || commands[phrase];
            //convert command to regex
            command = _this.commandToRegExp(phrase);
            if (typeof action === 'function') {
                _this.commandsList.push({
                    type: 'function',
                    command: command,
                    callback: action,
                    originalPhrase: phrase
                });
            }
            if (typeof action === 'object') {
                _this.commandsList.push({
                    type: 'action',
                    command: command,
                    payload: action.payload,
                    actionType: action.type,
                    originalPhrase: phrase
                });
            }
        });
        if (__WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugState) {
            console.log('Commands successfully loaded: %c' + this.commandsList.length, __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].debugStyle);
        }
    };
    // Remove existing commands. Called with a single phrase, array of phrases, or methodically. Pass no params to remove all commands.
    VoiceRecognitionService.prototype.removeCommands = function (commandsToRemove) {
        if (commandsToRemove === undefined) {
            this.commandsList = [];
            return;
        }
        commandsToRemove = Array.isArray(commandsToRemove) ? commandsToRemove : [commandsToRemove];
        this.commandsList = this.commandsList.filter(function (command) {
            for (var i = 0; i < commandsToRemove.length; i++) {
                if (commandsToRemove[i] === command.originalPhrase) {
                    return false;
                }
            }
            return true;
        });
    };
    ;
    // Lets the user add a callback of one of 9 types:
    // start, error, end, result, resultMatch, resultNoMatch, errorNetwork, errorPermissionBlocked, errorPermissionDenied
    // Can also optionally receive a context for the callback function as the third argument
    VoiceRecognitionService.prototype.addCallback = function (type, callback, context) {
        if (this.callbacks[type] === undefined) {
            return;
        }
        var cb = window[callback] || callback;
        if (typeof cb !== 'function') {
            return;
        }
        this.callbacks[type].push({
            callback: cb,
            context: context || this
        });
    };
    VoiceRecognitionService.prototype.invokeCallbacks = function (callbacks) {
        callbacks.forEach(function (callback) {
            callback.callback.apply(callback.context);
        });
    };
    ;
    return VoiceRecognitionService;
}());
VoiceRecognitionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], VoiceRecognitionService);

//# sourceMappingURL=voice-recognition.service.js.map

/***/ }),

/***/ 1184:
/***/ (function(module, exports, __webpack_require__) {

const assert = __webpack_require__(614);
const objectPath = __webpack_require__(891);

/**
 *
 * @param {[String]} url [url string to be converted to]
 * * @return {[Array]}        [Array containing the url contents]
 */
const urlToArray = url => {
  if (typeof url !== 'string') {
    throw new Error('Only string arguments are allowed');
  }
  return url.replace(/^\/+|\/+$/gm, '').split('/');
};

const stripQueryStrings = url => url.split(/[?#]/)[0];

/**
 * deny method is used to buid the deny response Object
 *
 * @param {[String]} customMessage [The message you would like added to the response]
 * @param {[Object]} response      [The response object when access is denied]
 */

const deny = (customMessage, response) => {
  let message = customMessage ? customMessage : 'Unauthorized access';

  if (response && typeof response === 'object') {
    return response;
  }

  return {
    status: 'Access denied',
    success: false,
    message: message
  };
};

/**
 *  This method is used to ensure the correct wild card is supplied
 * @param {[String]} term
 * @param {String} name
 */

const assertIsGlobOrArray = (term, name) => {
  if (typeof term !== 'string' && !Array.isArray(term)) {
    throw new Error(`TypeError: ${name} should be a array or string`);
  }

  if (typeof term === 'string' && term !== '*') {
    throw new Error(
      `DefinitionError: Unrecognised glob "${term}" , use "*" instead`
    );
  }
};




/**
 * Maps each policy to user group
 * @param {[Array]} policies [Array of policies ]
 */
const mapPolicyToGroup = policies => {
  if (!policies) {
    return;
  }

  const mappedPolicies = new Map();

  policies.forEach(policy => {
    assert.equal(typeof policy.group, 'string');
    assert.equal(Array.isArray(policy.permissions), true);

    policy.permissions.forEach(permission => {
      assert(typeof permission.resource, 'string');
      assertIsGlobOrArray(permission.methods, 'Methods');
      if (permission.action !== 'allow' && permission.action !== 'deny') {
        throw new Error('TypeError: action should be either "deny" or "allow"');
      }
    });
    // Transform policies into a map
    mappedPolicies.set(policy.group, policy.permissions);
  });
  return mappedPolicies;
};

/**
 *  Validates policies and ensure
 * @param {[Array]} policies
 */
const validatePolicies = policies => {
  if (!Array.isArray(policies)) {
    throw new Error('TypeError: Expected Array but got ' + typeof policies);
  }
  return mapPolicyToGroup(policies);
};

const createRegexFromResource = resource => {
  if (resource.startsWith(':') || resource === '*') {
    return '.*';
  }
  return `^${resource}$`;
};

const matchUrlToResource = (route, resource) => {
  if (resource === '*') return true;

  //  create an array form both route url and resource
  const routeArray = urlToArray(route);
  const resourceArray = urlToArray(resource);

  for (let key = 0; key < routeArray.length; key++) {
    if (key >= resourceArray.length) return false;

    if (resourceArray[key] === '*') return true;

    if (!routeArray[key].match(createRegexFromResource(resourceArray[key])))
      return false;
  }

  if (resourceArray.length > routeArray.length) {
    return resourceArray[routeArray.length] == '*';
  }

  return true;
};

const getPrefix = resource => resource.slice(0, resource.length - 2);

const findPermissionsForRoute = (route, method, prefix = '', policy) => {
  // Strip query strings from route
  route = stripQueryStrings(route);
  let permissionArray = []

  for (let permission of policy) {
    let resource = permission.resource;
    // check if route prefix has been specified
    if (prefix) {
      resource = `${prefix}/${resource}`.replace(/\/+/g, '/');
    }

    if (permission.subRoutes && permission.resource !== '*') {
      const currentPrefix = resource.endsWith('/*')
        ? getPrefix(resource)
        : resource;

      let currentPermission = findPermissionForRoute(
        route,
        method,
        currentPrefix,
        permission.subRoutes
      );

      if (currentPermission) {
        return currentPermission;
      }
    }

    if (matchUrlToResource(route, resource)) {
      permissionArray.push(permission)
      // if (isAllowed(method, permission)) {
      //   permissionMatch = permission;
      // }
    }
  }

  if(permissionArray.length == 0) return false;
  return permissionArray;

};

const isAllowed = (method, permission) => {

  const isGlobOrHasMethod = permission.methods === '*' || permission.methods.includes(method);
 
  switch (isGlobOrHasMethod) {
    case true:
      return permission.action === 'allow' ? true : false;
    default:
      return permission.action === 'allow' ? false : true;
  }

};

const checkIfHasAccess = ( method, permissions ) => {
  let hasAccess = false;
  permissions.forEach((permission)=>{
    let isGlobOrHasMethod = permission.methods === '*' || permission.methods.includes(method);
    if(isGlobOrHasMethod){
      hasAccess = isAllowed(method, permission)
    }
  })
  return hasAccess;
};




const findRoleFromRequest = (
  req,
  searchPath,
  defaultRole,
  decodedObjectName
) => {
  if (searchPath && objectPath.get(req, searchPath)) {
    return objectPath.get(req, searchPath);
  }

  if (decodedObjectName && objectPath.get(req, `${decodedObjectName}.role`)) {
    return objectPath.get(req, `${decodedObjectName}.role`);
  }

  if (req.decoded && req.decoded.role) {
    return objectPath.get(req, 'decoded.role');
  }

  if (req.session && req.session.role) {
    return objectPath.get(req, 'session.role');
  }

  return defaultRole;
};

module.exports = {
  urlToArray,
  mapPolicyToGroup,
  findRoleFromRequest,
  findPermissionsForRoute,
  checkIfHasAccess,
  isAllowed,
  validatePolicies,
  matchUrlToResource,
  assertIsGlobOrArray,
  deny
};

/***/ }),

/***/ 1185:
/***/ (function(module, exports, __webpack_require__) {


const {
  mapPolicyToGroup,
  findRoleFromRequest,
  findPermissionsForRoute,
  checkIfHasAccess,
  deny
} = __webpack_require__(1184);

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

/***/ }),

/***/ 1192:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(500);


/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_smartadmin_config__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var JsonApiService = (function () {
    function JsonApiService(http) {
        this.http = http;
    }
    JsonApiService.prototype.fetch = function (url) {
        return this.http.get(this.getBaseUrl() + __WEBPACK_IMPORTED_MODULE_2__shared_smartadmin_config__["a" /* config */].API_URL + url)
            .delay(100)
            .map(this.extractData)
            .catch(this.handleError);
    };
    JsonApiService.prototype.getBaseUrl = function () {
        return location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/';
    };
    JsonApiService.prototype.extractData = function (res) {
        var body = res.json();
        if (body) {
            return body.data || body;
        }
        else {
            return {};
        }
    };
    JsonApiService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(errMsg);
    };
    return JsonApiService;
}());
JsonApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], JsonApiService);

var _a;
//# sourceMappingURL=json-api.service.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moment_pipe__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__time_directive__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__field_filter_pipe__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__body_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notification_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toggle_active_directive__ = __webpack_require__(612);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UtilsModule = UtilsModule_1 = (function () {
    function UtilsModule() {
    }
    UtilsModule.forRoot = function () {
        return {
            ngModule: UtilsModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_4__body_service__["a" /* BodyService */], __WEBPACK_IMPORTED_MODULE_5__notification_service__["a" /* NotificationService */]]
        };
    };
    return UtilsModule;
}());
UtilsModule = UtilsModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_6__toggle_active_directive__["a" /* ToggleActiveDirective */], __WEBPACK_IMPORTED_MODULE_1__moment_pipe__["a" /* MomentPipe */], __WEBPACK_IMPORTED_MODULE_2__time_directive__["a" /* TimeDirective */], __WEBPACK_IMPORTED_MODULE_3__field_filter_pipe__["a" /* FieldFilterPipe */]],
        exports: [__WEBPACK_IMPORTED_MODULE_6__toggle_active_directive__["a" /* ToggleActiveDirective */], __WEBPACK_IMPORTED_MODULE_1__moment_pipe__["a" /* MomentPipe */], __WEBPACK_IMPORTED_MODULE_2__time_directive__["a" /* TimeDirective */], __WEBPACK_IMPORTED_MODULE_3__field_filter_pipe__["a" /* FieldFilterPipe */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__body_service__["a" /* BodyService */], __WEBPACK_IMPORTED_MODULE_5__notification_service__["a" /* NotificationService */]]
    })
], UtilsModule);

var UtilsModule_1;
//# sourceMappingURL=utils.module.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__languages_model__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_api_json_api_service__ = __webpack_require__(141);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return I18nService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var I18nService = (function () {
    function I18nService(jsonApiService, ref) {
        this.jsonApiService = jsonApiService;
        this.ref = ref;
        this.state = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.initLanguage(__WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].defaultLocale || 'us');
        this.fetch(this.currentLanguage.key);
    }
    I18nService.prototype.fetch = function (locale) {
        var _this = this;
        this.jsonApiService.fetch("/langs/" + locale + ".json")
            .subscribe(function (data) {
            _this.data = data;
            _this.state.next(data);
            _this.ref.tick();
        });
    };
    I18nService.prototype.initLanguage = function (locale) {
        var language = __WEBPACK_IMPORTED_MODULE_3__languages_model__["a" /* languages */].find(function (it) {
            return it.key == locale;
        });
        if (language) {
            this.currentLanguage = language;
        }
        else {
            throw new Error("Incorrect locale used for I18nService: " + locale);
        }
    };
    I18nService.prototype.setLanguage = function (language) {
        this.currentLanguage = language;
        this.fetch(language.key);
    };
    I18nService.prototype.subscribe = function (sub, err) {
        return this.state.subscribe(sub, err);
    };
    I18nService.prototype.getTranslation = function (phrase) {
        return this.data && this.data[phrase] ? this.data[phrase] : phrase;
    };
    return I18nService;
}());
I18nService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__core_api_json_api_service__["a" /* JsonApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_api_json_api_service__["a" /* JsonApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]) === "function" && _b || Object])
], I18nService);

var _a, _b;
//# sourceMappingURL=i18n.service.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_notification_service__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoundService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SoundService = SoundService_1 = (function () {
    function SoundService(notificationService) {
        this.notificationService = notificationService;
        this.config = {
            basePath: __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].sound_path,
            mainExt: '.mp3',
            alternateExt: '.ogg',
        };
    }
    SoundService.prototype.get = function (name) {
        var _this = this;
        if (SoundService_1.cache[name]) {
            return Promise.resolve(SoundService_1.cache[name]);
        }
        else {
            return new Promise(function (resolve, reject) {
                var audioElement = document.createElement('audio');
                if (navigator.userAgent.match('Firefox/')) {
                    audioElement.setAttribute('src', _this.config.basePath + name + _this.config.alternateExt);
                }
                else {
                    audioElement.setAttribute('src', _this.config.basePath + name + _this.config.mainExt);
                }
                audioElement.addEventListener('error', reject);
                audioElement.load();
                SoundService_1.cache[name] = audioElement;
                resolve(audioElement);
            });
        }
    };
    SoundService.prototype.play = function (name) {
        if (__WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].sound_on) {
            this.get(name).then(function (audio) {
                audio.play();
            });
        }
    };
    SoundService.prototype.mute = function () {
        __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].sound_on = false;
        this.notificationService.smallBox({
            title: "MUTE",
            content: "All sounds have been muted!",
            color: "#a90329",
            timeout: 4000,
            icon: "fa fa-volume-off"
        });
    };
    SoundService.prototype.soundOn = function () {
        __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].sound_on = true;
        this.notificationService.smallBox({
            title: "UNMUTE",
            content: "All sounds have been turned on!",
            color: "#40ac2b",
            sound_file: 'voice_alert',
            timeout: 5000,
            icon: "fa fa-volume-up"
        });
    };
    return SoundService;
}());
SoundService.cache = {};
SoundService = SoundService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__utils_notification_service__["a" /* NotificationService */]) === "function" && _a || Object])
], SoundService);

var SoundService_1, _a;
//# sourceMappingURL=sound.service.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService() {
        this.userAnnouncedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.cicloAnnounced$ = this.userAnnouncedSource.asObservable();
    }
    UserService.prototype.announceUserChange = function (item) {
        this.userAnnouncedSource.next(item);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commands_help_component__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sound_sound_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__speech_recognition_api__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__voice_recognition_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_notification_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_body_service__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__layout_layout_service__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoiceControlService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var VoiceControlService = VoiceControlService_1 = (function () {
    function VoiceControlService(componentFactoryResolver, app, soundService, voiceRecognitionService, notificationService, bodyService, router, layoutService) {
        var _this = this;
        this.componentFactoryResolver = componentFactoryResolver;
        this.app = app;
        this.soundService = soundService;
        this.voiceRecognitionService = voiceRecognitionService;
        this.notificationService = notificationService;
        this.bodyService = bodyService;
        this.router = router;
        this.layoutService = layoutService;
        this.state = {
            enabled: !!__WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].voice_command,
            available: false,
            autoStart: !!__WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].voice_command_auto,
            localStorage: !!__WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].voice_localStorage,
            lang: __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].voice_command_lang,
            started: false,
        };
        this.helpShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.state.available = !!__WEBPACK_IMPORTED_MODULE_4__speech_recognition_api__["a" /* SpeechRecognition */];
        if (__WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].voice_command_auto) {
            this.voiceControlOn();
        }
        this.voiceRecognitionService.events.subscribe(function (event) {
            switch (event.type) {
                case 'start':
                    _this.bodyService.removeClass("service-not-allowed");
                    _this.bodyService.addClass("service-allowed");
                    break;
                case 'error':
                    _this.bodyService.removeClass("service-allowed");
                    _this.bodyService.addClass("service-not-allowed");
                    break;
                case 'match':
                    _this.notificationService.smallBox({
                        title: event.payload,
                        content: "loading...",
                        color: "#333",
                        sound_file: 'voice_alert',
                        timeout: 2000
                    });
                    break;
                case 'no match':
                    _this.notificationService.smallBox({
                        title: "Error: <strong>" + ' " ' + event.payload + ' " ' + "</strong> no match found!",
                        content: "Please speak clearly into the microphone",
                        color: "#a90329",
                        timeout: 5000,
                        icon: "fa fa-microphone"
                    });
                    break;
                case 'action':
                    _this.respondToAction(event);
                    break;
            }
        });
    }
    VoiceControlService.prototype.attachHelp = function () {
        if (this.state.available && !VoiceControlService_1.helpModal) {
            var component = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__commands_help_component__["a" /* CommandsHelpComponent */]);
            var viewContainerRef = this.app['_rootComponents'][0]._component.viewContainerRef;
            VoiceControlService_1.helpModal = viewContainerRef.createComponent(component, viewContainerRef.length);
        }
    };
    VoiceControlService.prototype.showHelp = function () {
        var _this = this;
        setTimeout(function () {
            // debugger
            VoiceControlService_1.helpModal._component.show();
            _this.helpShown.next(true);
        }, 50);
    };
    VoiceControlService.prototype.hideHelp = function () {
        VoiceControlService_1.helpModal && VoiceControlService_1.helpModal._component.hide();
    };
    VoiceControlService.prototype.voiceControlOn = function () {
        this.soundService.play('voice_on');
        if (!this.voiceRecognitionService.commandsList.length) {
            this.voiceRecognitionService.addCommands(__WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].voice_commands);
        }
        this.voiceRecognitionService.start();
        this.state.started = true;
        this.bodyService.addClass('voice-command-active');
    };
    VoiceControlService.prototype.voiceControlOff = function () {
        this.soundService.play('voice_off');
        this.voiceRecognitionService.abort();
        this.state.started = false;
        this.bodyService.removeClass('voice-command-active');
    };
    VoiceControlService.prototype.respondToAction = function (action) {
        switch (action.actionType) {
            case 'voice':
                switch (action.payload) {
                    case 'help on':
                        this.showHelp();
                        break;
                    case 'help off':
                        this.hideHelp();
                        break;
                    case 'stop':
                        this.voiceControlOff();
                        this.notificationService.smallBox({
                            title: "VOICE COMMAND OFF",
                            content: "Your voice commands has been successfully turned off. Click on the <i class='fa fa-microphone fa-lg fa-fw'></i> icon to turn it back on.",
                            color: "#40ac2b",
                            sound_file: 'voice_off',
                            timeout: 8000,
                            icon: "fa fa-microphone-slash"
                        });
                        break;
                }
                break;
            case 'navigate':
                this.router.navigate(action.payload);
                break;
            case 'layout':
                switch (action.payload) {
                    case 'show navigation':
                        this.layoutService.onCollapseMenu(false);
                        break;
                    case 'hide navigation':
                        this.layoutService.onCollapseMenu(true);
                        break;
                }
                break;
            case 'sound':
                switch (action.payload) {
                    case 'mute':
                        this.soundService.mute();
                        break;
                    case 'sound on':
                        this.soundService.soundOn();
                        break;
                }
                break;
        }
    };
    return VoiceControlService;
}());
VoiceControlService = VoiceControlService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__sound_sound_service__["a" /* SoundService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__sound_sound_service__["a" /* SoundService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__voice_recognition_service__["a" /* VoiceRecognitionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__voice_recognition_service__["a" /* VoiceRecognitionService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__utils_notification_service__["a" /* NotificationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__utils_body_service__["a" /* BodyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__utils_body_service__["a" /* BodyService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* Router */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_9__layout_layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__layout_layout_service__["a" /* LayoutService */]) === "function" && _h || Object])
], VoiceControlService);

var VoiceControlService_1, _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=voice-control.service.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REST; });


var REST = (function () {
    function REST(http) {
        this.http = http;
    }
    REST.prototype.getURL = function (url, useprefix) {
        if (useprefix === void 0) { useprefix = true; }
        if (useprefix)
            return "" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].url + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].API_URL + url;
        else
            return "" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].url + url;
    };
    REST.prototype.get = function (path) {
        return this.http.get(this.getURL(path), this.jwt()).map(function (response) { return response.json(); });
    };
    REST.prototype.post = function (path, objeto) {
        return this.http.post(this.getURL(path), objeto, this.jwt()).map(function (response) { return response.json(); });
    };
    REST.prototype.put = function (path, objeto) {
        return this.http.put(this.getURL(path), objeto, this.jwt()).map(function (response) { return response.json(); });
    };
    REST.prototype.patch = function (path, objeto) {
        return this.http.patch(this.getURL(path), objeto, this.jwt()).map(function (response) { return response.json(); });
    };
    REST.prototype.delete = function (path) {
        return this.http.delete(this.getURL(path), this.jwt()).map(function (response) { return response.json(); });
    };
    REST.prototype.gethttp = function () {
        return this.http;
    };
    REST.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentToken = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        if (currentToken) {
            headers.append('Authorization', currentToken);
        }
        return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    return REST;
}());

//# sourceMappingURL=REST.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_selector_language_selector_component__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__i18n_pipe__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__i18n_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return I18nModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var I18nModule = (function () {
    function I18nModule() {
    }
    return I18nModule;
}());
I18nModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["i" /* BsDropdownModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__language_selector_language_selector_component__["a" /* LanguageSelectorComponent */],
            __WEBPACK_IMPORTED_MODULE_2__i18n_pipe__["a" /* I18nPipe */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__language_selector_language_selector_component__["a" /* LanguageSelectorComponent */], __WEBPACK_IMPORTED_MODULE_2__i18n_pipe__["a" /* I18nPipe */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__i18n_service__["a" /* I18nService */]]
    })
], I18nModule);

//# sourceMappingURL=i18n.module.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_index__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_smartadmin_config__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = (function () {
    function LoginComponent(router, auth, unidadeService, usuarioService, util, perfilService, parametroService) {
        this.router = router;
        this.auth = auth;
        this.unidadeService = unidadeService;
        this.usuarioService = usuarioService;
        this.util = util;
        this.perfilService = perfilService;
        this.parametroService = parametroService;
        this.model = {};
        this.env = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */];
        this.colecaoPerfis = [];
        this.colecaoUnidades = [];
        this.validatorOptions = {
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                nome: {
                    validators: {
                        notEmpty: {
                            message: 'Nome é obrigatório'
                        },
                        stringLength: {
                            max: 50,
                            min: 3,
                            message: 'Digite um nome válido'
                        }
                    }
                },
                celular: {
                    validators: {
                        notEmpty: {
                            message: 'Número de telefone celular é obrigatório'
                        }
                    }
                },
                cpf: {
                    validators: {
                        notEmpty: {
                            message: 'CPF é obrigatório'
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'Email é obrigatório'
                        },
                        emailAddress: {
                            message: 'Email inválido'
                        }
                    }
                },
                sexo: {
                    validators: {
                        notEmpty: {
                            message: 'Informação de sexo é obrigatória'
                        }
                    }
                },
                unidade: {
                    validators: {
                        notEmpty: {
                            message: 'Unidade de lotação é obrigatória'
                        }
                    }
                },
                perfilusr: {
                    validators: {
                        notEmpty: {
                            message: 'Perfil é obrigatório'
                        }
                    }
                }
            }
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        // TODO: Colocar essa parte no open form
        this.newuser = new __WEBPACK_IMPORTED_MODULE_4__model_index__["f" /* User */]();
        this.title = __WEBPACK_IMPORTED_MODULE_6__shared_smartadmin_config__["a" /* config */].title;
        this.parametroService.change.subscribe(function (parametros) {
            _this.orgao = parametros.company;
            _this.tipo_login = parametros.login;
        });
        this.perfilService.getAll().subscribe(function (resp) {
            _this.colecaoPerfis = resp.perfis;
        }, function (err) { return _this.util.msgErroInfra(err); });
        this.unidadeService.getAll().subscribe(function (resp) {
            _this.colecaoUnidades = resp.unidades;
        }, function (err) { return _this.util.msgErroInfra(err); });
        this.auth.logout();
        this.parametroService.load();
    };
    LoginComponent.prototype.isSCPA = function () {
        return this.tipo_login == 'scpa';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.model.usuario, this.model.senha).subscribe(function (resp) {
            console.log("Sucesso no login", resp);
            _this.router.navigate(['/admin'], { queryParams: { q: 'login' } });
        }, function (err) {
            console.log("Erro no login", err);
            var mensagem = JSON.parse(err._body);
            if ([403, 500].indexOf(err.status) > -1) {
                _this.util.msgErro(mensagem.message);
            }
            else if (err.status == 406) {
                var entidade = JSON.parse(err._body);
                console.log('entidade', entidade);
                localStorage.setItem('token', entidade.token);
                _this.newuser = Object.assign(new __WEBPACK_IMPORTED_MODULE_4__model_index__["f" /* User */](), entidade.user);
                //$('#nome').prop('disabled', 'nome' in entidade.user);
                //$('#email').prop('disabled', ('email' in entidade.user) && entidade.user.email);
                _this.complementoModal.show();
                setTimeout(function () {
                    $.each($('input[saMaskedInput]'), function (index, value) {
                        $(value).mask($(value).attr('saMaskedInput'));
                    });
                }, 500);
            }
            else {
                _this.util.msgErroInfra("Erro no acesso ao login. Tente mais tarde!");
            }
        });
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        // Campos com controle de mascara não atualiza a model do angular2.
        this.newuser.celular = $('#celular').val();
        this.newuser.cpf = $('#cpf').val();
        this.newuser.telefone = $('#telefone').val();
        this.newuser.ramal = $('#ramal').val();
        $(':input[type="submit"]').prop('disabled', false);
        this.newuser.sexo = $("input[type='radio'][name='sexo']:checked").val();
        //if(this.newuser.Perfil && this.newuser.Perfil.exige_unidade){
        this.newuser.UnidadeCodigo = JSON.parse($('#UnidadeCodigo').val());
        var PerfilSelecionado = this.colecaoPerfis.find(function (item) { return item.codigo == _this.newuser.PerfilCodigo; });
        console.log('PerfilSelecionado==>', PerfilSelecionado);
        if (!this.newuser.UnidadeCodigo && PerfilSelecionado && PerfilSelecionado.exige_unidade) {
            this.util.msgErro("Unidade de lotação é obrigatória");
            return false;
        }
        //}
        //
        var user = Object.assign(new __WEBPACK_IMPORTED_MODULE_4__model_index__["f" /* User */](), this.newuser);
        // Limpa formatacoes
        user.celular = user.celular.replace(/[\.\(\)-\s]/g, '');
        user.cpf = user.cpf.replace(/[\.-]/g, '');
        user.telefone = user.telefone.replace(/[\.\(\)-\s]/g, '');
        this.f = form;
        if (form.valid) {
            this.usuarioService.createSolicitacao(user).subscribe(function (resp) {
                if (resp.codret == 0) {
                    _this.util.msgSucesso(resp.mensagem);
                    _this.complementoModal.hide();
                }
                else {
                    _this.util.msgErro(resp.mensagem);
                }
            }, function (err) { return _this.util.msgErro(JSON.parse(err._body).message); });
        }
        else {
            //var validator = form.validate();
            //validator.resetForm();
            console.log('Formulário inválido');
        }
        console.log('Submetido', form, this.newuser);
    };
    return LoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('complementoModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["e" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["e" /* ModalDirective */]) === "function" && _a || Object)
], LoginComponent.prototype, "complementoModal", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(907)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["f" /* UnidadeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["f" /* UnidadeService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["q" /* UsuarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["q" /* UsuarioService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["i" /* UtilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["i" /* UtilService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["t" /* PerfilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["t" /* PerfilService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["h" /* ParametroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["h" /* ParametroService */]) === "function" && _h || Object])
], LoginComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__REST__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AclService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { environment } from '../../environments/environment';
// var acl = require("../../../../server/api/helpers/acl-module/index.js");
var acl = __webpack_require__(1185);
var AclService = (function (_super) {
    __extends(AclService, _super);
    function AclService(http) {
        var _this = _super.call(this, http) || this;
        var acl = JSON.parse(localStorage.getItem('acl'));
        var role = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(JSON.parse(localStorage.getItem('currentUser')), 'Perfil.sigla', 'guest');
        _this.userUnidadesPath = JSON.parse(localStorage.getItem('acl_unidades'));
        _this.userUnidadeCod = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(JSON.parse(localStorage.getItem('currentUser')), 'UnidadeCodigo', false);
        _this.setRules(acl, role);
        //update with last rules
        _this.get('/acl-rules').subscribe(function (resp) {
            localStorage.setItem('acl', JSON.stringify(resp.acl_rules));
            localStorage.setItem('acl_unidades', JSON.stringify(resp.unidades));
            _this.userUnidadesPath = resp.unidades;
            _this.setRules(acl, role);
        });
        return _this;
    }
    AclService.prototype.getAll = function () {
        return this.get('/acl-rules');
    };
    AclService.prototype.setRules = function (acl_rules, role) {
        acl.config({
            baseUrl: '',
            rules: acl_rules,
        });
        this.role = role;
    };
    AclService.prototype.getPermission = function (route, method, unidadeCod) {
        if (unidadeCod === void 0) { unidadeCod = 0; }
        var options = acl.getConfig();
        var policy = options.policies.get(this.role);
        var access = acl.checkACL(this.role, route, method);
        if (this.role == "ADM")
            return access;
        //check if in $area, if it is, check permission for it
        if (unidadeCod) {
            if (this.userUnidadesPath.includes(unidadeCod)) {
                //make
                return true;
            }
            else {
                return false;
            }
        }
        return access;
    };
    return AclService;
}(__WEBPACK_IMPORTED_MODULE_3__REST__["a" /* REST */]));
AclService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AclService);

var _a;
//# sourceMappingURL=acl.service.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_user_service__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_acl_service__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__REST__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_cookie_service__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthenticationService = (function (_super) {
    __extends(AuthenticationService, _super);
    function AuthenticationService(http, userService, cookieService, aclService) {
        var _this = _super.call(this, http) || this;
        _this.userService = userService;
        _this.cookieService = cookieService;
        _this.aclService = aclService;
        return _this;
    }
    AuthenticationService.prototype.login = function (usuario, senha) {
        var _this = this;
        return this.gethttp().post(_super.prototype.getURL.call(this, '/login', false), { username: usuario, password: senha, aplicacao: __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].aplicacao }, _super.prototype.jwt.call(this)).map(function (response) {
            var resp = response.json();
            localStorage.setItem('token', resp.token);
            //this.userService.announceUserChange(resp.user);
            var user = resp.user;
            user['apelido'] = _this.label(resp.user.nome);
            user['picture'] = 'assets/img/avatars/male.png';
            console.log(user);
            localStorage.setItem('currentUser', JSON.stringify(user));
            localStorage.setItem('acl', JSON.stringify(resp.acl));
            _this.aclService.setRules(resp.acl, resp.user.Perfil.sigla);
            //localStorage.setItem('currentUser', JSON.stringify(resp.user));
            return resp;
        });
    };
    AuthenticationService.prototype.label = function (nome) {
        return nome.split(' ')[0];
    };
    AuthenticationService.prototype.canActivate = function () {
        return 'token' in localStorage;
    };
    AuthenticationService.prototype.getProfile = function () {
        return this.getURL('/profile');
    };
    AuthenticationService.prototype.logout = function () {
        this.cookieService.delete('token');
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
        localStorage.removeItem('acl');
    };
    return AuthenticationService;
}(__WEBPACK_IMPORTED_MODULE_4__REST__["a" /* REST */]));
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_user_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_cookie_service__["a" /* CookieService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_acl_service__["a" /* AclService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_acl_service__["a" /* AclService */]) === "function" && _d || Object])
], AuthenticationService);

var _a, _b, _c, _d;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = FadeZoomInTop;
/**
 * Created by griga on 12/26/16.
 */
function FadeZoomInTop() {
    var __ref__ = window['Reflect'];
    function parseMeta(metaInformation) {
        for (var _i = 0, metaInformation_1 = metaInformation; _i < metaInformation_1.length; _i++) {
            var metadata = metaInformation_1[_i]; //metadata is @Component metadata
            // decorator logic goes here
            // metadata.animations = [fadeZoomInTop()];
            // metadata.host = {"[@fadeZoomInTop]": ''};
        }
    }
    //value represents the annotation parameter(s)
    return function (target) {
        var metaInformation = __ref__.getOwnMetadata('annotations', target);
        if (metaInformation) {
            parseMeta(metaInformation);
        }
    };
}
//# sourceMappingURL=fade-zoom-in-top.decorator.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return languages; });
var languages = [
    {
        "key": "br",
        "alt": "Brasil",
        "title": "Brasil"
    },
    {
        "key": "us",
        "alt": "United States",
        "title": "English (US)"
    },
    {
        "key": "fr",
        "alt": "France",
        "title": "Français"
    },
    {
        "key": "es",
        "alt": "Spanish",
        "title": "Español"
    }
];
//# sourceMappingURL=languages.model.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_fade_zoom_in_top_decorator__ = __webpack_require__(224);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmptyLayoutComponent = (function () {
    function EmptyLayoutComponent() {
    }
    EmptyLayoutComponent.prototype.ngOnInit = function () {
    };
    return EmptyLayoutComponent;
}());
EmptyLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__animations_fade_zoom_in_top_decorator__["a" /* FadeZoomInTop */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-empty-layout',
        template: __webpack_require__(911),
        styles: []
    }),
    __metadata("design:paramtypes", [])
], EmptyLayoutComponent);

//# sourceMappingURL=empty-layout.component.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_fade_zoom_in_top_decorator__ = __webpack_require__(224);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainLayoutComponent = (function () {
    function MainLayoutComponent() {
    }
    MainLayoutComponent.prototype.ngOnInit = function () {
    };
    return MainLayoutComponent;
}());
MainLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__animations_fade_zoom_in_top_decorator__["a" /* FadeZoomInTop */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main-layout',
        template: __webpack_require__(912),
        styles: []
    }),
    __metadata("design:paramtypes", [])
], MainLayoutComponent);

//# sourceMappingURL=main-layout.component.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_info_login_info_component__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logout_logout_component__ = __webpack_require__(607);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__login_info_login_info_component__["a" /* LoginInfoComponent */], __WEBPACK_IMPORTED_MODULE_3__logout_logout_component__["a" /* LogoutComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__login_info_login_info_component__["a" /* LoginInfoComponent */], __WEBPACK_IMPORTED_MODULE_3__logout_logout_component__["a" /* LogoutComponent */]]
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BodyService = (function () {
    function BodyService() {
        this.$body = $('body');
    }
    BodyService.prototype.addClass = function (className) {
        this.$body.addClass(className);
    };
    BodyService.prototype.removeClass = function (className) {
        this.$body.removeClass(className);
    };
    BodyService.prototype.toggleClass = function (className, state) {
        this.$body.toggleClass(className, state);
    };
    return BodyService;
}());
BodyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], BodyService);

//# sourceMappingURL=body.service.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommandsHelpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommandsHelpComponent = (function () {
    function CommandsHelpComponent() {
    }
    CommandsHelpComponent.prototype.ngOnInit = function () {
    };
    CommandsHelpComponent.prototype.show = function () {
        this.seeCommandsModal.show();
    };
    CommandsHelpComponent.prototype.hide = function () {
        this.seeCommandsModal.hide();
    };
    return CommandsHelpComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('seeCommandsModal'),
    __metadata("design:type", Object)
], CommandsHelpComponent.prototype, "seeCommandsModal", void 0);
CommandsHelpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-commands-help',
        template: __webpack_require__(930),
        styles: [],
    }),
    __metadata("design:paramtypes", [])
], CommandsHelpComponent);

//# sourceMappingURL=commands-help.component.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechRecognition; });
var SpeechRecognition = (window['SpeechRecognition'] || window['webkitSpeechRecognition'] || window['mozSpeechRecognition'] || window['msSpeechRecognition']);
//# sourceMappingURL=speech-recognition.api.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    version: "0.1.2",
    title: "MGDI - Módulo de Gestão de Dados e Indicadores",
    defaultLocale: "br",
    API_URL: "assets/api",
    menu_speed: 200,
    smartSkin: "smart-style-0",
    skins: [
        {
            name: "smart-style-0",
            logo: "assets/img/logo.png",
            skinBtnClass: "btn btn-block btn-xs txt-color-white margin-right-5",
            style: {
                backgroundColor: '#4E463F'
            },
            label: "Smart Default"
        },
        {
            name: "smart-style-1",
            logo: "assets/img/logo-white.png",
            skinBtnClass: "btn btn-block btn-xs txt-color-white",
            style: {
                background: '#3A4558'
            },
            label: "Dark Elegance"
        },
        {
            name: "smart-style-2",
            logo: "assets/img/logo-blue.png",
            skinBtnClass: "btn btn-xs btn-block txt-color-darken margin-top-5",
            style: {
                background: '#fff'
            },
            label: "Ultra Light"
        },
        {
            name: "smart-style-3",
            logo: "assets/img/logo-pale.png",
            skinBtnClass: "btn btn-xs btn-block txt-color-white margin-top-5",
            style: {
                background: '#f78c40'
            },
            label: "Google Skin"
        },
        {
            name: "smart-style-4",
            logo: "assets/img/logo-pale.png",
            skinBtnClass: "btn btn-xs btn-block txt-color-white margin-top-5",
            style: {
                background: '#bbc0cf',
                border: '1px solid #59779E',
                color: '#17273D !important'
            },
            label: "PixelSmash"
        },
        {
            name: "smart-style-5",
            logo: "assets/img/logo-pale.png",
            skinBtnClass: "btn btn-xs btn-block txt-color-white margin-top-5",
            style: {
                background: 'rgba(153, 179, 204, 0.2)',
                border: '1px solid rgba(121, 161, 221, 0.8)',
                color: '#17273D !important'
            },
            label: "Glass"
        },
    ],
    GOOGLE_API_KEY: 'AIzaSyDd8YW8k_J-Jkti-W4QNk5dL8O_5_2QUWY',
    sound_path: "assets/sound/",
    sound_on: true,
    /**
     * DEBUGGING MODE
     * debugState = true; will spit all debuging message inside browser console.
     * The colors are best displayed in chrome browser.
     */
    debugState: false,
    debugStyle: 'font-weight: bold; color: #00f;',
    debugStyle_green: 'font-weight: bold; font-style:italic; color: #46C246;',
    debugStyle_red: 'font-weight: bold; color: #ed1c24;',
    debugStyle_warning: 'background-color:yellow',
    debugStyle_success: 'background-color:green; font-weight:bold; color:#fff;',
    debugStyle_error: 'background-color:#ed1c24; font-weight:bold; color:#fff;',
    /**
     *  VOICE CONTROL
     */
    voice_command: false,
    voice_command_auto: false,
    /**
     *  Sets the language to the default 'en-US'. (supports over 50 languages
     *  by google)
     *
     *  Afrikaans         ['af-ZA']
     *  Bahasa Indonesia  ['id-ID']
     *  Bahasa Melayu     ['ms-MY']
     *  CatalГ            ['ca-ES']
     *  ДЊeЕЎtina         ['cs-CZ']
     *  Deutsch           ['de-DE']
     *  English           ['en-AU', 'Australia']
     *                    ['en-CA', 'Canada']
     *                    ['en-IN', 'India']
     *                    ['en-NZ', 'New Zealand']
     *                    ['en-ZA', 'South Africa']
     *                    ['en-GB', 'United Kingdom']
     *                    ['en-US', 'United States']
     *  EspaГ±ol          ['es-AR', 'Argentina']
     *                    ['es-BO', 'Bolivia']
     *                    ['es-CL', 'Chile']
     *                    ['es-CO', 'Colombia']
     *                    ['es-CR', 'Costa Rica']
     *                    ['es-EC', 'Ecuador']
     *                    ['es-SV', 'El Salvador']
     *                    ['es-ES', 'EspaГ±a']
     *                    ['es-US', 'Estados Unidos']
     *                    ['es-GT', 'Guatemala']
     *                    ['es-HN', 'Honduras']
     *                    ['es-MX', 'MГ©xico']
     *                    ['es-NI', 'Nicaragua']
     *                    ['es-PA', 'PanamГЎ']
     *                    ['es-PY', 'Paraguay']
     *                    ['es-PE', 'PerГє']
     *                    ['es-PR', 'Puerto Rico']
     *                    ['es-DO', 'RepГєblica Dominicana']
     *                    ['es-UY', 'Uruguay']
     *                    ['es-VE', 'Venezuela']
     *  Euskara           ['eu-ES']
     *  FranГ§ais         ['fr-FR']
     *  Galego            ['gl-ES']
     *  Hrvatski          ['hr_HR']
     *  IsiZulu           ['zu-ZA']
     *  ГЌslenska         ['is-IS']
     *  Italiano          ['it-IT', 'Italia']
     *                    ['it-CH', 'Svizzera']
     *  Magyar            ['hu-HU']
     *  Nederlands        ['nl-NL']
     *  Norsk bokmГҐl     ['nb-NO']
     *  Polski            ['pl-PL']
     *  PortuguГЄs        ['pt-BR', 'Brasil']
     *                    ['pt-PT', 'Portugal']
     *  RomГўnДѓ          ['ro-RO']
     *  SlovenДЌina       ['sk-SK']
     *  Suomi             ['fi-FI']
     *  Svenska           ['sv-SE']
     *  TГјrkГ§e          ['tr-TR']
     *  Р±СЉР»РіР°СЂСЃРєРё['bg-BG']
     *  PСѓСЃСЃРєРёР№     ['ru-RU']
     *  РЎСЂРїСЃРєРё      ['sr-RS']
     *  н•њкµ­м–ґ         ['ko-KR']
     *  дё­ж–‡            ['cmn-Hans-CN', 'ж™®йЂљиЇќ (дё­е›Ѕе¤§й™†)']
     *                    ['cmn-Hans-HK', 'ж™®йЂљиЇќ (й¦™жёЇ)']
     *                    ['cmn-Hant-TW', 'дё­ж–‡ (еЏ°зЃЈ)']
     *                    ['yue-Hant-HK', 'зІµиЄћ (й¦™жёЇ)']
     *  ж—Ґжњ¬иЄћ         ['ja-JP']
     *  Lingua latД«na    ['la']
     */
    voice_command_lang: 'pt-BR',
    /**
     *  Use localstorage to remember on/off (best used with HTML Version)
     */
    voice_localStorage: false,
    /**
     * Voice Commands
     * Defines all voice command variables and functions
     */
    voice_commands: {
        'show dashboard': {
            type: 'navigate', payload: ['/dashboard/+analytics']
        },
        'show +social': {
            type: 'navigate', payload: ['/dashboard/+social']
        },
        'show outlook': {
            type: 'navigate', payload: ['/outlook']
        },
        'show graphs': {
            type: 'navigate', payload: ['/graphs/chart-js']
        },
        'show flot chart': {
            type: 'navigate', payload: ['/graphs/flot-charts']
        },
        'show morris chart': {
            type: 'navigate', payload: ['/graphs/morris-charts']
        },
        'show inline chart': {
            type: 'navigate', payload: ['/graphs/sparklines']
        },
        'show dygraphs': {
            type: 'navigate', payload: ['/graphs/dygraphs']
        },
        'show tables': {
            type: 'navigate', payload: ['/tables/normal']
        },
        'show data table': {
            type: 'navigate', payload: ['/tables/datatables']
        },
        'show form': {
            type: 'navigate', payload: ['/forms/elements']
        },
        'show form layouts': {
            type: 'navigate', payload: ['/forms/layouts']
        },
        'show form validation': {
            type: 'navigate', payload: ['/forms/validation']
        },
        'show form elements': {
            type: 'navigate', payload: ['/forms/bootstrap-elements']
        },
        'show form plugins': {
            type: 'navigate', payload: ['/forms/plugins']
        },
        'show form wizards': {
            type: 'navigate', payload: ['/forms/wizards']
        },
        'show bootstrap editor': {
            type: 'navigate', payload: ['/forms/editors']
        },
        'show dropzone': {
            type: 'navigate', payload: ['/forms/dropzone']
        },
        'show image cropping': {
            type: 'navigate', payload: ['/forms/image-cropping']
        },
        'show general elements': {
            type: 'navigate', payload: ['/ui/general-elements']
        },
        'show buttons': {
            type: 'navigate', payload: ['/ui/buttons']
        },
        'show fontawesome': {
            type: 'navigate', payload: ['/ui/icons/font-awesome']
        },
        'show glyph icons': {
            type: 'navigate', payload: ['/ui/icons/glyphicons']
        },
        'show flags': {
            type: 'navigate', payload: ['/ui/icons/flags']
        },
        'show grid': {
            type: 'navigate', payload: ['/ui/grid']
        },
        'show tree view': {
            type: 'navigate', payload: ['/ui/treeviews']
        },
        'show nestable lists': {
            type: 'navigate', payload: ['/ui/nestable-lists']
        },
        'show jquery U I': {
            type: 'navigate', payload: ['/ui/jquery-ui']
        },
        'show typography': {
            type: 'navigate', payload: ['/ui/typography']
        },
        'show calendar': {
            type: 'navigate', payload: ['/calendar']
        },
        'show widgets': {
            type: 'navigate', payload: ['/widgets']
        },
        'show gallery': {
            type: 'navigate', payload: ['/app-views/gallery']
        },
        'show maps': {
            type: 'navigate', payload: ['/maps']
        },
        'go back': function () {
            history.back();
        },
        'scroll up': function () {
            jQuery('html, body').animate({ scrollTop: 0 }, 100);
        },
        'scroll down': function () {
            jQuery('html, body').animate({ scrollTop: jQuery(document).height() }, 100);
        },
        'hide navigation': {
            type: 'layout',
            payload: 'hide navigation'
        },
        'show navigation': {
            type: 'layout',
            payload: 'show navigation'
        },
        'mute': {
            type: 'sound',
            payload: 'mute',
        },
        'sound on': {
            type: 'sound',
            payload: 'sound on',
        },
        'stop': {
            type: 'voice',
            payload: 'stop'
        },
        'help': {
            type: 'voice',
            payload: 'help on'
        },
        'got it': {
            type: 'voice',
            payload: 'help off'
        },
        'logout': {
            type: 'navigate',
            payload: ['/auth/login'],
        },
    }
};
// required for SmartNotification // @todo
window['jQuery'].sound_on = config.sound_on;
window['jQuery'].sound_path = config.sound_path;
//# sourceMappingURL=smartadmin.config.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_notification_service__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var store = {
    smartSkin: localStorage.getItem('sm-skin') || __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].smartSkin,
    skin: __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].skins.find(function (_skin) {
        return _skin.name == (localStorage.getItem('sm-skin') || __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].smartSkin);
    }),
    skins: __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].skins,
    fixedHeader: localStorage.getItem('sm-fixed-header') == 'true',
    fixedNavigation: localStorage.getItem('sm-fixed-navigation') == 'true',
    fixedRibbon: localStorage.getItem('sm-fixed-ribbon') == 'true',
    fixedPageFooter: localStorage.getItem('sm-fixed-page-footer') == 'true',
    insideContainer: localStorage.getItem('sm-inside-container') == 'true',
    rtl: localStorage.getItem('sm-rtl') == 'true',
    menuOnTop: false,
    //menuOnTop: localStorage.getItem('sm-menu-on-top') == 'true',
    colorblindFriendly: localStorage.getItem('sm-colorblind-friendly') == 'true',
    shortcutOpen: false,
    isMobile: (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())),
    device: '',
    mobileViewActivated: false,
    menuCollapsed: false,
    menuMinified: true,
};
var LayoutService = (function () {
    function LayoutService(notificationService) {
        var _this = this;
        this.notificationService = notificationService;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.store = store;
        this.trigger();
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].fromEvent(window, 'resize').debounceTime(100).map(function () {
            _this.trigger();
        }).subscribe();
    }
    LayoutService.prototype.trigger = function () {
        this.processBody(this.store);
        this.subject.next(this.store);
    };
    LayoutService.prototype.subscribe = function (next, err, complete) {
        return this.subject.subscribe(next, err, complete);
    };
    LayoutService.prototype.onSmartSkin = function (skin) {
        this.store.skin = skin;
        this.store.smartSkin = skin.name;
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onFixedHeader = function () {
        this.store.fixedHeader = !this.store.fixedHeader;
        if (this.store.fixedHeader == false) {
            this.store.fixedRibbon = false;
            this.store.fixedNavigation = false;
        }
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onFixedNavigation = function () {
        this.store.fixedNavigation = !this.store.fixedNavigation;
        if (this.store.fixedNavigation) {
            this.store.insideContainer = false;
            this.store.fixedHeader = true;
        }
        else {
            this.store.fixedRibbon = false;
        }
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onFixedRibbon = function () {
        this.store.fixedRibbon = !this.store.fixedRibbon;
        if (this.store.fixedRibbon) {
            this.store.fixedHeader = true;
            this.store.fixedNavigation = true;
            this.store.insideContainer = false;
        }
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onFixedPageFooter = function () {
        this.store.fixedPageFooter = !this.store.fixedPageFooter;
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onInsideContainer = function () {
        this.store.insideContainer = !this.store.insideContainer;
        if (this.store.insideContainer) {
            this.store.fixedRibbon = false;
            this.store.fixedNavigation = false;
        }
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onRtl = function () {
        this.store.rtl = !this.store.rtl;
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onMenuOnTop = function () {
        this.store.menuOnTop = !this.store.menuOnTop;
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onColorblindFriendly = function () {
        this.store.colorblindFriendly = !this.store.colorblindFriendly;
        this.dumpStorage();
        this.trigger();
    };
    LayoutService.prototype.onCollapseMenu = function (value) {
        if (typeof value !== 'undefined') {
            this.store.menuCollapsed = value;
        }
        else {
            this.store.menuCollapsed = !this.store.menuCollapsed;
        }
        this.trigger();
    };
    LayoutService.prototype.onMinifyMenu = function () {
        this.store.menuMinified = !this.store.menuMinified;
        this.trigger();
    };
    LayoutService.prototype.onShortcutToggle = function (condition) {
        if (condition == null) {
            this.store.shortcutOpen = !this.store.shortcutOpen;
        }
        else {
            this.store.shortcutOpen = !!condition;
        }
        this.trigger();
    };
    LayoutService.prototype.dumpStorage = function () {
        localStorage.setItem('sm-skin', this.store.smartSkin);
        localStorage.setItem('sm-fixed-header', this.store.fixedHeader);
        localStorage.setItem('sm-fixed-navigation', this.store.fixedNavigation);
        localStorage.setItem('sm-fixed-ribbon', this.store.fixedRibbon);
        localStorage.setItem('sm-fixed-page-footer', this.store.fixedPageFooter);
        localStorage.setItem('sm-inside-container', this.store.insideContainer);
        localStorage.setItem('sm-rtl', this.store.rtl);
        localStorage.setItem('sm-menu-on-top', this.store.menuOnTop);
        localStorage.setItem('sm-colorblind-friendly', this.store.colorblindFriendly);
    };
    LayoutService.prototype.factoryReset = function () {
        this.notificationService.smartMessageBox({
            title: "<i class='fa fa-refresh' style='color:green'></i> Limpa base local",
            content: "Deseja retornar as configurações iniciais e dar um RESET nas configurações armazenadas?",
            buttons: '[Não][Sim]'
        }, function (ButtonPressed) {
            if (ButtonPressed == "Sim" && localStorage) {
                localStorage.clear();
                location.reload();
            }
        });
    };
    LayoutService.prototype.processBody = function (state) {
        var $body = $('body');
        var $html = $('html');
        $body.removeClass(state.skins.map(function (it) { return (it.name); }).join(' '));
        $body.addClass(state.skin.name);
        $("#logo img").attr('src', state.skin.logo);
        $body.toggleClass('fixed-header', state.fixedHeader);
        $body.toggleClass('fixed-navigation', state.fixedNavigation);
        $body.toggleClass('fixed-ribbon', state.fixedRibbon);
        $body.toggleClass('fixed-page-footer', state.fixedPageFooter);
        $body.toggleClass('container', state.insideContainer);
        $body.toggleClass('smart-rtl', state.rtl);
        $body.toggleClass('menu-on-top', state.menuOnTop);
        $body.toggleClass('colorblind-friendly', state.colorblindFriendly);
        $body.toggleClass('shortcut-on', state.shortcutOpen);
        state.mobileViewActivated = $(window).width() < 979;
        $body.toggleClass('mobile-view-activated', state.mobileViewActivated);
        if (state.mobileViewActivated) {
            $body.removeClass('minified');
        }
        if (state.isMobile) {
            $body.addClass("mobile-detected");
        }
        else {
            $body.addClass("desktop-detected");
        }
        if (state.menuOnTop)
            $body.removeClass('minified');
        if (!state.menuOnTop) {
            $html.toggleClass("hidden-menu-mobile-lock", state.menuCollapsed);
            $html.toggleClass("hidden-menu", state.menuCollapsed);
            $body.removeClass("minified");
        }
        else if (state.menuOnTop && state.mobileViewActivated) {
            $html.toggleClass("hidden-menu-mobile-lock", state.menuCollapsed);
            $body.toggleClass("hidden-menu", state.menuCollapsed);
            $body.removeClass("minified");
        }
        if (state.menuMinified && !state.menuOnTop && !state.mobileViewActivated) {
            $body.addClass("minified");
            $body.removeClass("hidden-menu");
            $html.removeClass("hidden-menu-mobile-lock");
        }
    };
    return LayoutService;
}());
LayoutService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__utils_notification_service__["a" /* NotificationService */]) === "function" && _a || Object])
], LayoutService);

var _a;
//# sourceMappingURL=layout.service.js.map

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/admin/admin.module": [
		1196,
		0
	],
	"app/site/site.module": [
		1197,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 499;


/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(542);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__categoria_analise__ = __webpack_require__(549);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__categoria_analise__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tag_categoria__ = __webpack_require__(533);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unidade_medida__ = __webpack_require__(534);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tag__ = __webpack_require__(556);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__indicador__ = __webpack_require__(552);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__indicador__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__unidade_responsavel__ = __webpack_require__(557);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__unidade_responsavel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__granularidade__ = __webpack_require__(551);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__polaridade__ = __webpack_require__(554);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__arquivo__ = __webpack_require__(548);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_8__arquivo__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user__ = __webpack_require__(558);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_9__user__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__perfil__ = __webpack_require__(553);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__status_aprovacao__ = __webpack_require__(555);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__fonte_parametro__ = __webpack_require__(550);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_12__fonte_parametro__["a"]; });













//# sourceMappingURL=index.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_module__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_site_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_module__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ribbon_ribbon_component__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shortcut_shortcut_component__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__layout_switcher_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_layouts_main_layout_component__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_layouts_empty_layout_component__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_layouts_auth_layout_component__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ribbon_route_breadcrumbs_component__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils_utils_module__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_markdown_to_html__ = __webpack_require__(777);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartadminLayoutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var SmartadminLayoutModule = (function () {
    function SmartadminLayoutModule() {
    }
    return SmartadminLayoutModule;
}());
SmartadminLayoutModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap__["a" /* ModalModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__header_header_module__["a" /* HeaderModule */],
            __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_module__["a" /* NavigationModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_16__utils_utils_module__["a" /* UtilsModule */],
            __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap__["b" /* TooltipModule */],
            __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap__["i" /* BsDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_17_ng2_markdown_to_html__["a" /* MarkdownToHtmlModule */].forRoot(),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_5__footer_footer_site_component__["a" /* FooterSiteComponent */],
            __WEBPACK_IMPORTED_MODULE_7__ribbon_ribbon_component__["a" /* RibbonComponent */],
            __WEBPACK_IMPORTED_MODULE_8__shortcut_shortcut_component__["a" /* ShortcutComponent */],
            __WEBPACK_IMPORTED_MODULE_9__layout_switcher_component__["a" /* LayoutSwitcherComponent */],
            __WEBPACK_IMPORTED_MODULE_10__app_layouts_main_layout_component__["a" /* MainLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_11__app_layouts_empty_layout_component__["a" /* EmptyLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_13__app_layouts_auth_layout_component__["a" /* AuthLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_15__ribbon_route_breadcrumbs_component__["a" /* RouteBreadcrumbsComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__header_header_module__["a" /* HeaderModule */],
            __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_module__["a" /* NavigationModule */],
            __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_5__footer_footer_site_component__["a" /* FooterSiteComponent */],
            __WEBPACK_IMPORTED_MODULE_7__ribbon_ribbon_component__["a" /* RibbonComponent */],
            __WEBPACK_IMPORTED_MODULE_8__shortcut_shortcut_component__["a" /* ShortcutComponent */],
            __WEBPACK_IMPORTED_MODULE_9__layout_switcher_component__["a" /* LayoutSwitcherComponent */],
        ]
    })
], SmartadminLayoutModule);

//# sourceMappingURL=layout.module.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__on_off_switch_component__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnOffSwitchModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OnOffSwitchModule = (function () {
    function OnOffSwitchModule() {
    }
    return OnOffSwitchModule;
}());
OnOffSwitchModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__on_off_switch_component__["a" /* OnOffSwitchComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__on_off_switch_component__["a" /* OnOffSwitchComponent */]]
    })
], OnOffSwitchModule);

//# sourceMappingURL=on-off-switch.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select2_directive__ = __webpack_require__(588);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Select2Module; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Select2Module = (function () {
    function Select2Module() {
    }
    return Select2Module;
}());
Select2Module = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__select2_directive__["a" /* Select2Directive */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__select2_directive__["a" /* Select2Directive */]],
    })
], Select2Module);

//# sourceMappingURL=select2.module.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterSiteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterSiteComponent = (function () {
    function FooterSiteComponent(parametroService) {
        this.parametroService = parametroService;
    }
    FooterSiteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.versionClient = __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].version;
        this.title = __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].title;
        this.parametroService.change.subscribe(function (parametros) {
            _this.versionServer = parametros.version;
            _this.titleServer = parametros.title;
            _this.enviroment = parametros.enviroment;
        });
    };
    FooterSiteComponent.prototype.ngOnDestroy = function () {
        //this.parametroService.change.unsubscribe();
    };
    return FooterSiteComponent;
}());
FooterSiteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-footer-site',
        template: __webpack_require__(913)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["h" /* ParametroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["h" /* ParametroService */]) === "function" && _a || Object])
], FooterSiteComponent);

var _a;
//# sourceMappingURL=footer-site.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = (function () {
    function FooterComponent(parametroService) {
        this.parametroService = parametroService;
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.versionClient = __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].version;
        this.title = __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].title;
        this.parametroService.change.subscribe(function (parametros) {
            _this.versionServer = parametros.version;
            _this.titleServer = parametros.title;
            _this.enviroment = parametros.enviroment;
        });
        var user = localStorage.getItem('currentUser');
        if (user) {
            var item_user = JSON.parse(user);
            this.ultimo_login = this.timeConversion(new Date().getTime() - new Date(item_user.ultimo_login).getTime());
        }
    };
    FooterComponent.prototype.timeConversion = function (millisec) {
        var seconds = (millisec / 1000);
        var minutes = (millisec / (1000 * 60));
        var hours = (millisec / (1000 * 60 * 60));
        var days = (millisec / (1000 * 60 * 60 * 24));
        if (seconds < 60) {
            return seconds.toFixed(0) + " Seg";
        }
        else if (minutes < 60) {
            return minutes.toFixed(0) + " Min";
        }
        else if (hours < 24) {
            return hours.toFixed(0) + " Hrs";
        }
        else {
            return days.toFixed(0) + " Dias";
        }
    };
    FooterComponent.prototype.ngOnDestroy = function () {
        //this.parametroService.change.unsubscribe();
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-footer',
        template: __webpack_require__(914)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["h" /* ParametroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["h" /* ParametroService */]) === "function" && _a || Object])
], FooterComponent);

var _a;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesMessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivitiesMessageComponent = (function () {
    function ActivitiesMessageComponent() {
    }
    ActivitiesMessageComponent.prototype.ngOnInit = function () {
    };
    return ActivitiesMessageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ActivitiesMessageComponent.prototype, "item", void 0);
ActivitiesMessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '[activitiesMessage]',
        template: __webpack_require__(915),
    }),
    __metadata("design:paramtypes", [])
], ActivitiesMessageComponent);

//# sourceMappingURL=activities-message.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesNotificationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivitiesNotificationComponent = (function () {
    function ActivitiesNotificationComponent() {
    }
    ActivitiesNotificationComponent.prototype.ngOnInit = function () {
    };
    ActivitiesNotificationComponent.prototype.setClasses = function () {
        var classes = {
            'fa fa-fw fa-2x': true
        };
        classes[this.item.icon] = true;
        return classes;
    };
    return ActivitiesNotificationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ActivitiesNotificationComponent.prototype, "item", void 0);
ActivitiesNotificationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '[activitiesNotification]',
        template: __webpack_require__(916),
    }),
    __metadata("design:paramtypes", [])
], ActivitiesNotificationComponent);

//# sourceMappingURL=activities-notification.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesTaskComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivitiesTaskComponent = (function () {
    function ActivitiesTaskComponent() {
    }
    ActivitiesTaskComponent.prototype.ngOnInit = function () {
    };
    ActivitiesTaskComponent.prototype.setProgressClasses = function () {
        return {
            'progress-bar': true,
            'progress-bar-success': this.item.status == 'MINOR' || this.item.status == 'NORMAL',
            'bg-color-teal': this.item.status == 'PRIMARY' || this.item.status == 'URGENT',
            'progress-bar-danger': this.item.status == 'CRITICAL'
        };
    };
    return ActivitiesTaskComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ActivitiesTaskComponent.prototype, "item", void 0);
ActivitiesTaskComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '[activitiesTask]',
        template: __webpack_require__(917),
    }),
    __metadata("design:paramtypes", [])
], ActivitiesTaskComponent);

//# sourceMappingURL=activities-task.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activities_service__ = __webpack_require__(602);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivitiesComponent = (function () {
    function ActivitiesComponent(el, renderer, activitiesService) {
        this.el = el;
        this.renderer = renderer;
        this.activitiesService = activitiesService;
        this.active = false;
        this.loading = false;
        this.activities = [];
        this.count = 0;
        this.lastUpdate = new Date();
    }
    ActivitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activitiesService.getActivities().subscribe(function (data) {
            _this.activities = data;
            _this.count = data.reduce(function (sum, it) { return sum + it.data.length; }, 0);
            _this.currentActivity = data[0];
        });
    };
    ActivitiesComponent.prototype.setActivity = function (activity) {
        this.currentActivity = activity;
    };
    ActivitiesComponent.prototype.onToggle = function () {
        var _this = this;
        var dropdown = $('.ajax-dropdown', this.el.nativeElement);
        this.active = !this.active;
        if (this.active) {
            dropdown.fadeIn();
            this.documentSub = this.renderer.listenGlobal('document', 'mouseup', function (event) {
                if (!_this.el.nativeElement.contains(event.target)) {
                    dropdown.fadeOut();
                    _this.active = false;
                    _this.documentUnsub();
                }
            });
        }
        else {
            dropdown.fadeOut();
            this.documentUnsub();
        }
    };
    ActivitiesComponent.prototype.update = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.lastUpdate = new Date();
            _this.loading = false;
        }, 1000);
    };
    ActivitiesComponent.prototype.ngOnDestroy = function () {
        this.documentUnsub();
    };
    ActivitiesComponent.prototype.documentUnsub = function () {
        this.documentSub && this.documentSub();
        this.documentSub = null;
    };
    return ActivitiesComponent;
}());
ActivitiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-activities',
        template: __webpack_require__(918),
        providers: [__WEBPACK_IMPORTED_MODULE_1__activities_service__["a" /* ActivitiesService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__activities_service__["a" /* ActivitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__activities_service__["a" /* ActivitiesService */]) === "function" && _c || Object])
], ActivitiesComponent);

var _a, _b, _c;
//# sourceMappingURL=activities.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_service__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapseMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CollapseMenuComponent = (function () {
    function CollapseMenuComponent(layoutService) {
        this.layoutService = layoutService;
    }
    CollapseMenuComponent.prototype.onToggle = function () {
        this.layoutService.onCollapseMenu();
    };
    return CollapseMenuComponent;
}());
CollapseMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-collapse-menu',
        template: __webpack_require__(919)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */]) === "function" && _a || Object])
], CollapseMenuComponent);

var _a;
//# sourceMappingURL=collapse-menu.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullScreenComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullScreenComponent = (function () {
    function FullScreenComponent() {
    }
    FullScreenComponent.prototype.ngOnInit = function () {
    };
    FullScreenComponent.prototype.onToggle = function () {
        var $body = $('body');
        var documentMethods = {
            enter: ['requestFullscreen', 'mozRequestFullScreen', 'webkitRequestFullscreen', 'msRequestFullscreen'],
            exit: ['cancelFullScreen', 'mozCancelFullScreen', 'webkitCancelFullScreen', 'msCancelFullScreen']
        };
        if (!$body.hasClass("full-screen")) {
            $body.addClass("full-screen");
            document.documentElement[documentMethods.enter.filter(function (method) {
                return document.documentElement[method];
            })[0]]();
        }
        else {
            $body.removeClass("full-screen");
            document[documentMethods.exit.filter(function (method) {
                return document[method];
            })[0]]();
        }
    };
    return FullScreenComponent;
}());
FullScreenComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-full-screen',
        template: __webpack_require__(920)
    }),
    __metadata("design:paramtypes", [])
], FullScreenComponent);

//# sourceMappingURL=full-screen.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderSiteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderSiteComponent = (function () {
    function HeaderSiteComponent(parametroService) {
        this.parametroService = parametroService;
    }
    HeaderSiteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = __WEBPACK_IMPORTED_MODULE_1__smartadmin_config__["a" /* config */].title;
        this.parametroService.change.subscribe(function (parametros) {
            _this.orgao = parametros.company;
        });
    };
    return HeaderSiteComponent;
}());
HeaderSiteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-header-site',
        template: __webpack_require__(921),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["h" /* ParametroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["h" /* ParametroService */]) === "function" && _a || Object])
], HeaderSiteComponent);

var _a;
//# sourceMappingURL=header-site.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(router, parametroService) {
        this.router = router;
        this.parametroService = parametroService;
        this.searchMobileActive = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parametroService.change.subscribe(function (parametros) {
            _this.orgao = parametros.company;
        });
    };
    HeaderComponent.prototype.toggleSearchMobile = function () {
        this.searchMobileActive = !this.searchMobileActive;
        $('body').toggleClass('search-mobile', this.searchMobileActive);
    };
    HeaderComponent.prototype.onSubmit = function () {
        this.router.navigate(['/miscellaneous/search']);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-header',
        template: __webpack_require__(922),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["h" /* ParametroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["h" /* ParametroService */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_popover__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngx_popover__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__collapse_menu_collapse_menu_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recent_projects_recent_projects_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__full_screen_full_screen_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__activities_activities_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__activities_activities_message_activities_message_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__activities_activities_notification_activities_notification_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__activities_activities_task_activities_task_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_site_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_utils_module__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__speech_button_speech_button_component__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__i18n_i18n_module__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__user_user_module__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__voice_control_voice_control_module__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var HeaderModule = (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());
HeaderModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_17__voice_control_voice_control_module__["a" /* VoiceControlModule */],
            __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap__["i" /* BsDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_13__utils_utils_module__["a" /* UtilsModule */], __WEBPACK_IMPORTED_MODULE_15__i18n_i18n_module__["a" /* I18nModule */], __WEBPACK_IMPORTED_MODULE_16__user_user_module__["a" /* UserModule */], __WEBPACK_IMPORTED_MODULE_3_ngx_popover__["PopoverModule"],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__activities_activities_message_activities_message_component__["a" /* ActivitiesMessageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__activities_activities_notification_activities_notification_component__["a" /* ActivitiesNotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_10__activities_activities_task_activities_task_component__["a" /* ActivitiesTaskComponent */],
            __WEBPACK_IMPORTED_MODULE_5__recent_projects_recent_projects_component__["a" /* RecentProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__full_screen_full_screen_component__["a" /* FullScreenComponent */],
            __WEBPACK_IMPORTED_MODULE_4__collapse_menu_collapse_menu_component__["a" /* CollapseMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_7__activities_activities_component__["a" /* ActivitiesComponent */],
            __WEBPACK_IMPORTED_MODULE_11__header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__header_site_component__["a" /* HeaderSiteComponent */],
            __WEBPACK_IMPORTED_MODULE_14__speech_button_speech_button_component__["a" /* SpeechButtonComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_11__header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__header_site_component__["a" /* HeaderSiteComponent */]
        ]
    })
], HeaderModule);

//# sourceMappingURL=header.module.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recent_projects_service__ = __webpack_require__(521);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecentProjectsComponent = (function () {
    function RecentProjectsComponent(projectsService) {
        this.projectsService = projectsService;
    }
    RecentProjectsComponent.prototype.ngOnInit = function () {
        this.projects = this.projectsService.getProjects();
    };
    RecentProjectsComponent.prototype.clearProjects = function () {
        this.projectsService.clearProjects();
        this.projects = this.projectsService.getProjects();
    };
    return RecentProjectsComponent;
}());
RecentProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-recent-projects',
        template: __webpack_require__(923),
        providers: [__WEBPACK_IMPORTED_MODULE_1__recent_projects_service__["a" /* RecentProjectsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__recent_projects_service__["a" /* RecentProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__recent_projects_service__["a" /* RecentProjectsService */]) === "function" && _a || Object])
], RecentProjectsComponent);

var _a;
//# sourceMappingURL=recent-projects.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentProjectsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecentProjectsService = (function () {
    function RecentProjectsService() {
        this.projects = [
            {
                "href": "/",
                "title": "Online e-merchant management system - attaching integration with the iOS"
            },
            {
                "href": "/",
                "title": "Notes on pipeline upgradee"
            },
            {
                "href": "/",
                "title": "Assesment Report for merchant account"
            }
        ];
    }
    RecentProjectsService.prototype.getProjects = function () {
        return this.projects;
    };
    RecentProjectsService.prototype.clearProjects = function () {
        this.projects = [];
    };
    return RecentProjectsService;
}());
RecentProjectsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], RecentProjectsService);

//# sourceMappingURL=recent-projects.service.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_service__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutSwitcherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutSwitcherComponent = (function () {
    function LayoutSwitcherComponent(layoutService) {
        this.layoutService = layoutService;
    }
    LayoutSwitcherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.layoutService.subscribe(function (store) {
            _this.store = store;
        });
        this.store = this.layoutService.store;
    };
    LayoutSwitcherComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    LayoutSwitcherComponent.prototype.onToggle = function () {
        this.isActivated = !this.isActivated;
    };
    LayoutSwitcherComponent.prototype.onSmartSkin = function (skin) {
        this.layoutService.onSmartSkin(skin);
    };
    LayoutSwitcherComponent.prototype.onFixedHeader = function () {
        this.layoutService.onFixedHeader();
    };
    LayoutSwitcherComponent.prototype.onFixedNavigation = function () {
        this.layoutService.onFixedNavigation();
    };
    LayoutSwitcherComponent.prototype.onFixedRibbon = function () {
        this.layoutService.onFixedRibbon();
    };
    LayoutSwitcherComponent.prototype.onFixedPageFooter = function () {
        this.layoutService.onFixedPageFooter();
    };
    LayoutSwitcherComponent.prototype.onInsideContainer = function () {
        this.layoutService.onInsideContainer();
    };
    LayoutSwitcherComponent.prototype.onRtl = function () {
        this.layoutService.onRtl();
    };
    LayoutSwitcherComponent.prototype.onMenuOnTop = function () {
        this.layoutService.onMenuOnTop();
    };
    LayoutSwitcherComponent.prototype.onColorblindFriendly = function () {
        this.layoutService.onColorblindFriendly();
    };
    LayoutSwitcherComponent.prototype.factoryReset = function () {
        this.layoutService.factoryReset();
    };
    return LayoutSwitcherComponent;
}());
LayoutSwitcherComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-layout-switcher',
        template: __webpack_require__(925)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */]) === "function" && _a || Object])
], LayoutSwitcherComponent);

var _a;
//# sourceMappingURL=layout-switcher.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BigBreadcrumbsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BigBreadcrumbsComponent = (function () {
    function BigBreadcrumbsComponent() {
    }
    BigBreadcrumbsComponent.prototype.ngOnInit = function () {
    };
    return BigBreadcrumbsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], BigBreadcrumbsComponent.prototype, "icon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BigBreadcrumbsComponent.prototype, "items", void 0);
BigBreadcrumbsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-big-breadcrumbs',
        template: "\n   <div><h1 class=\"page-title txt-color-blueDark\">\n   <i class=\"fa-fw fa fa-{{icon}}\"></i>{{items[0]}}\n   <span *ngFor=\"let item of items.slice(1)\">> {{item}}</span>\n</h1></div>\n  ",
    }),
    __metadata("design:paramtypes", [])
], BigBreadcrumbsComponent);

//# sourceMappingURL=big-breadcrumbs.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_service__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinifyMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MinifyMenuComponent = (function () {
    function MinifyMenuComponent(layoutService) {
        this.layoutService = layoutService;
    }
    MinifyMenuComponent.prototype.toggle = function () {
        this.layoutService.onMinifyMenu();
    };
    return MinifyMenuComponent;
}());
MinifyMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-minify-menu',
        template: "<span class=\"minifyme\" (click)=\"toggle()\">\n    <i class=\"fa fa-arrow-circle-left hit\"></i>\n</span>",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */]) === "function" && _a || Object])
], MinifyMenuComponent);

var _a;
//# sourceMappingURL=minify-menu.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = (function () {
    function NavigationComponent(parametroService, acl) {
        this.parametroService = parametroService;
        this.acl = acl;
        this.enviroment = '';
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parametroService.change.subscribe(function (parametros) {
            _this.enviroment = parametros.enviroment;
        });
    };
    NavigationComponent.prototype.isProduction = function () {
        return this.enviroment == 'production';
    };
    NavigationComponent.prototype.userCan = function (router, method) {
        return this.acl.getPermission(router, method);
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-navigation',
        template: __webpack_require__(926)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["h" /* ParametroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["h" /* ParametroService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["v" /* AclService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["v" /* AclService */]) === "function" && _b || Object])
], NavigationComponent);

var _a, _b;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__i18n_i18n_module__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__big_breadcrumbs_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__minify_menu_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__smart_menu_directive__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_user_module__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import {ChatModule} from "../../chat/chat.module";
var NavigationModule = (function () {
    function NavigationModule() {
    }
    return NavigationModule;
}());
NavigationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__i18n_i18n_module__["a" /* I18nModule */],
            __WEBPACK_IMPORTED_MODULE_7__user_user_module__["a" /* UserModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__big_breadcrumbs_component__["a" /* BigBreadcrumbsComponent */],
            __WEBPACK_IMPORTED_MODULE_4__minify_menu_component__["a" /* MinifyMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_5__navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_6__smart_menu_directive__["a" /* SmartMenuDirective */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__big_breadcrumbs_component__["a" /* BigBreadcrumbsComponent */],
            __WEBPACK_IMPORTED_MODULE_4__minify_menu_component__["a" /* MinifyMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_5__navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_6__smart_menu_directive__["a" /* SmartMenuDirective */],
        ]
    })
], NavigationModule);

//# sourceMappingURL=navigation.module.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_layout_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartMenuDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SmartMenuDirective = (function () {
    function SmartMenuDirective(menu, router, layoutService) {
        var _this = this;
        this.menu = menu;
        this.router = router;
        this.layoutService = layoutService;
        this.togglersBinded = false;
        this.processLayout = function (store) {
            if (store.menuOnTop) {
                _this.$menu.find('li.open').each(function (i, li) {
                    _this.toggle($(li), false);
                });
            }
            else {
                _this.$menu.find('li.active').each(function (i, li) {
                    $(li).parents('li').each(function (j, parentLi) {
                        _this.toggle($(parentLi), true);
                    });
                });
            }
            if (store.mobileViewActivated) {
                $('body').removeClass("minified");
            }
        };
        this.$menu = $(this.menu.nativeElement);
    }
    SmartMenuDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutSub = this.layoutService.subscribe(function (store) {
            _this.processLayout(store);
        });
        this.routerSub = this.router.events.subscribe(function (event) {
            setTimeout(function () {
                _this.processLayout(_this.layoutService.store);
            }, 1);
            _this.routerSub.unsubscribe();
        });
        $('[routerLink]', this.$menu).on('click', function () {
            if (_this.layoutService.store.mobileViewActivated) {
                _this.layoutService.onCollapseMenu();
            }
        });
    };
    SmartMenuDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (!this.togglersBinded) {
            this.$menu.find('li:has(> ul)').each(function (i, li) {
                var $menuItem = $(li);
                var $a = $menuItem.find('>a');
                var sign = $('<b class="collapse-sign"><em class="fa fa-plus-square-o"/></b>');
                $a.on('click', function (e) {
                    _this.toggle($menuItem);
                    e.stopPropagation();
                    return false;
                }).append(sign);
            });
            this.togglersBinded = true;
        }
    };
    SmartMenuDirective.prototype.ngOnDestroy = function () {
        this.layoutSub.unsubscribe();
    };
    SmartMenuDirective.prototype.toggle = function ($el, condition) {
        var _this = this;
        if (condition === void 0) { condition = !$el.data('open'); }
        $el.toggleClass('open', condition);
        if (condition) {
            $el.find('>ul').slideDown();
        }
        else {
            $el.find('>ul').slideUp();
        }
        $el.find('>a>.collapse-sign>em')
            .toggleClass('fa-plus-square-o', !condition)
            .toggleClass('fa-minus-square-o', condition);
        $el.data('open', condition);
        if (condition) {
            $el.siblings('.open').each(function (i, it) {
                var sib = $(it);
                _this.toggle(sib, false);
            });
        }
    };
    return SmartMenuDirective;
}());
SmartMenuDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[saSmartMenu]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__layout_layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layout_layout_service__["a" /* LayoutService */]) === "function" && _c || Object])
], SmartMenuDirective);

var _a, _b, _c;
//# sourceMappingURL=smart-menu.directive.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_service__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RibbonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RibbonComponent = (function () {
    function RibbonComponent(layoutService) {
        this.layoutService = layoutService;
    }
    RibbonComponent.prototype.ngOnInit = function () {
    };
    RibbonComponent.prototype.resetWidgets = function () {
        this.layoutService.factoryReset();
    };
    return RibbonComponent;
}());
RibbonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-ribbon',
        template: __webpack_require__(927)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */]) === "function" && _a || Object])
], RibbonComponent);

var _a;
//# sourceMappingURL=ribbon.component.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_service__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortcutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShortcutComponent = (function () {
    function ShortcutComponent(layoutService, router, renderer, el) {
        this.layoutService = layoutService;
        this.router = router;
        this.renderer = renderer;
        this.el = el;
        this.state = 'out';
    }
    ShortcutComponent.prototype.shortcutTo = function (route) {
        this.router.navigate(route);
        this.layoutService.onShortcutToggle(false);
    };
    ShortcutComponent.prototype.ngOnInit = function () {
    };
    ShortcutComponent.prototype.listen = function () {
        var _this = this;
        this.layoutSub = this.layoutService.subscribe(function (store) {
            _this.state = store.shortcutOpen ? 'in' : 'out';
            if (store.shortcutOpen) {
                _this.documentSub = _this.renderer.listenGlobal('document', 'mouseup', function (event) {
                    if (!_this.el.nativeElement.contains(event.target)) {
                        _this.layoutService.onShortcutToggle(false);
                        _this.documentUnsub();
                    }
                });
            }
            else {
                _this.documentUnsub();
            }
        });
    };
    ShortcutComponent.prototype.ngAfterContentInit = function () {
        this.listen();
    };
    ShortcutComponent.prototype.ngAfterViewInit = function () {
    };
    ShortcutComponent.prototype.ngOnDestroy = function () {
        this.layoutSub.unsubscribe();
    };
    ShortcutComponent.prototype.documentUnsub = function () {
        this.documentSub && this.documentSub();
        this.documentSub = null;
    };
    return ShortcutComponent;
}());
ShortcutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-shortcut',
        template: __webpack_require__(928) //,
        // animations: [
        //   trigger('shortcutState', [
        //     state('out', style({
        //       height: 0,
        //     })),
        //     state('in', style({
        //       height: '*',
        //     })),
        //     transition('out => in', animate('250ms ease-out')),
        //     transition('in => out', animate('250ms 300ms ease-in '))
        //   ])
        // ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__layout_service__["a" /* LayoutService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object])
], ShortcutComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=shortcut.component.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sound_sound_module__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_utils_module__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__voice_control_service__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__commands_help_component__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__voice_recognition_service__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoiceControlModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var VoiceControlModule = VoiceControlModule_1 = (function () {
    function VoiceControlModule() {
    }
    VoiceControlModule.forRoot = function () {
        return {
            ngModule: VoiceControlModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_5__voice_control_service__["a" /* VoiceControlService */], __WEBPACK_IMPORTED_MODULE_7__voice_recognition_service__["a" /* VoiceRecognitionService */]]
        };
    };
    return VoiceControlModule;
}());
VoiceControlModule = VoiceControlModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* ModalModule */], __WEBPACK_IMPORTED_MODULE_3__sound_sound_module__["a" /* SoundModule */], __WEBPACK_IMPORTED_MODULE_4__utils_utils_module__["a" /* UtilsModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_6__commands_help_component__["a" /* CommandsHelpComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__commands_help_component__["a" /* CommandsHelpComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__voice_control_service__["a" /* VoiceControlService */], __WEBPACK_IMPORTED_MODULE_7__voice_recognition_service__["a" /* VoiceRecognitionService */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_6__commands_help_component__["a" /* CommandsHelpComponent */]]
    })
], VoiceControlModule);

var VoiceControlModule_1;
//# sourceMappingURL=voice-control.module.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagCategoria; });
var TagCategoria = (function () {
    function TagCategoria() {
        this.codigo = 0;
        this.Tags = [];
    }
    return TagCategoria;
}());

//# sourceMappingURL=tag-categoria.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnidadeMedida; });
var UnidadeMedida = (function () {
    function UnidadeMedida() {
        this.codigo = 0;
    }
    return UnidadeMedida;
}());

//# sourceMappingURL=unidade-medida.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_validate_directive__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bootstrap_validator_directive__ = __webpack_require__(597);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartadminValidationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SmartadminValidationModule = (function () {
    function SmartadminValidationModule() {
    }
    return SmartadminValidationModule;
}());
SmartadminValidationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__ui_validate_directive__["a" /* UiValidateDirective */],
            __WEBPACK_IMPORTED_MODULE_3__bootstrap_validator_directive__["a" /* BootstrapValidatorDirective */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__ui_validate_directive__["a" /* UiValidateDirective */],
            __WEBPACK_IMPORTED_MODULE_3__bootstrap_validator_directive__["a" /* BootstrapValidatorDirective */]
        ]
    })
], SmartadminValidationModule);

//# sourceMappingURL=smartadmin-validation.module.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_forms_input_smartadmin_input_module__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_forms_validation_smartadmin_validation_module__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_resolver__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_service__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_core_module__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_layout_layout_module__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_login_component__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_index__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
 * Platform and Environment providers/directives/pipes
 */

// App is our top level component



// Core providers




// Servicos

// Application wide providers
var APP_PROVIDERS = __WEBPACK_IMPORTED_MODULE_10__app_resolver__["a" /* APP_RESOLVER_PROVIDERS */].concat([
    __WEBPACK_IMPORTED_MODULE_11__app_service__["a" /* AppState */]
]);
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_14__auth_login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap__["a" /* ModalModule */], __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap__["b" /* TooltipModule */],
            __WEBPACK_IMPORTED_MODULE_7__shared_forms_validation_smartadmin_validation_module__["a" /* SmartadminValidationModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_12__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_13__shared_layout_layout_module__["a" /* SmartadminLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_6__shared_forms_input_smartadmin_input_module__["a" /* SmartadminInputModule */]
        ],
        exports: [],
        providers: [
            // ENV_PROVIDERS,
            APP_PROVIDERS,
            __WEBPACK_IMPORTED_MODULE_16__services_index__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_16__services_index__["b" /* ClassificacaoIndicadorService */],
            __WEBPACK_IMPORTED_MODULE_16__services_index__["c" /* Classificacao6sIndicadorService */],
            __WEBPACK_IMPORTED_MODULE_16__services_index__["d" /* PeriodicidadeService */],
            __WEBPACK_IMPORTED_MODULE_16__services_index__["e" /* UnidadeMedidaService */],
            __WEBPACK_IMPORTED_MODULE_16__services_index__["f" /* UnidadeService */],
            __WEBPACK_IMPORTED_MODULE_16__services_index__["g" /* IndicadorService */],
            __WEBPACK_IMPORTED_MODULE_16__services_index__["h" /* ParametroService */],
            __WEBPACK_IMPORTED_MODULE_16__services_index__["i" /* UtilService */],
            __WEBPACK_IMPORTED_MODULE_16__services_index__["j" /* TagCategoriaService */],
            __WEBPACK_IMPORTED_MODULE_16__services_index__["k" /* TagService */],
            __WEBPACK_IMPORTED_MODULE_16__services_index__["l" /* CategoriaAnaliseService */],
            __WEBPACK_IMPORTED_MODULE_16__services_index__["m" /* TipoConsultaService */],
            __WEBPACK_IMPORTED_MODULE_16__services_index__["n" /* BancoDadosService */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_16__services_index__["o" /* GranularidadeService */],
            __WEBPACK_IMPORTED_MODULE_16__services_index__["p" /* CriterioAgregacaoService */],
            __WEBPACK_IMPORTED_MODULE_16__services_index__["q" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_16__services_index__["r" /* ConsultaService */],
            __WEBPACK_IMPORTED_MODULE_16__services_index__["s" /* PolaridadeService */],
            __WEBPACK_IMPORTED_MODULE_16__services_index__["t" /* PerfilService */],
            __WEBPACK_IMPORTED_MODULE_16__services_index__["u" /* FonteParametroService */],
            __WEBPACK_IMPORTED_MODULE_16__services_index__["v" /* AclService */],
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_11__app_service__["a" /* AppState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__app_service__["a" /* AppState */]) === "function" && _b || Object])
], AppModule);

var _a, _b;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* unused harmony export DataResolver */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_RESOLVER_PROVIDERS; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of({ res: 'I am data' });
    };
    return DataResolver;
}());
DataResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], DataResolver);

// an array of services to resolve routes with data
var APP_RESOLVER_PROVIDERS = [
    DataResolver
];
//# sourceMappingURL=app.resolver.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_layout_app_layouts_main_layout_component__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_layout_app_layouts_empty_layout_component__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_login_component__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__ = __webpack_require__(223);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/**
 * Created by griga on 7/11/16.
 */





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__shared_layout_app_layouts_empty_layout_component__["a" /* EmptyLayoutComponent */], loadChildren: 'app/site/site.module#SiteModule' },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_1__shared_layout_app_layouts_main_layout_component__["a" /* MainLayoutComponent */], loadChildren: 'app/admin/admin.module#AdminModule', canActivate: [__WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__auth_login_component__["a" /* LoginComponent */] },
    { path: '**', redirectTo: '' }
    //
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true });
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    return AppState;
}());
AppState = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AppState);

//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_json_api_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_layout_layout_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_user_user_service__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_voice_control_voice_control_service__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_sound_sound_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_module_import_guard__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_voice_control_voice_recognition_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var CoreModule = (function () {
    function CoreModule(parentModule) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__guards_module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'CoreModule');
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["b" /* TooltipModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["i" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["j" /* ProgressbarModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["g" /* AlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["h" /* TabsModule */].forRoot(),
        ],
        declarations: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__api_json_api_service__["a" /* JsonApiService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_layout_layout_service__["a" /* LayoutService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_voice_control_voice_control_service__["a" /* VoiceControlService */],
            __WEBPACK_IMPORTED_MODULE_8__shared_voice_control_voice_recognition_service__["a" /* VoiceRecognitionService */],
            __WEBPACK_IMPORTED_MODULE_6__shared_sound_sound_service__["a" /* SoundService */],
        ]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throwIfAlreadyLoaded;
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}
//# sourceMappingURL=module-import-guard.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Arquivo; });
var Arquivo = (function () {
    function Arquivo() {
    }
    return Arquivo;
}());

//# sourceMappingURL=arquivo.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaAnalise; });
var CategoriaAnalise = (function () {
    function CategoriaAnalise() {
        this.codigo = '';
        this.referencia = '';
        this.Itens = [];
    }
    return CategoriaAnalise;
}());

//# sourceMappingURL=categoria-analise.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FonteParametro; });
var FonteParametro = (function () {
    function FonteParametro() {
        this.codigo = 0;
    }
    return FonteParametro;
}());

//# sourceMappingURL=fonte-parametro.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Granularidade */
var Granularidade = (function () {
    function Granularidade() {
        this.sigla = '';
        this.descricao = '';
    }
    return Granularidade;
}());

//# sourceMappingURL=granularidade.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Indicador; });
var Indicador = (function () {
    function Indicador() {
        this.id = 0;
        this.codigo = '';
        this.titulo = '';
        this.tituloCompleto = '';
        this.descricao = '';
        this.ClassificacaoIndicadorCodigo = 0;
        this.Classificacao6sIndicadorCodigo = 0;
        this.UnidadeMedidaCodigo = 2;
        this.metodo_calculo = '';
        this.conceituacao = '';
        this.interpretacao = '';
        this.usos = '';
        this.limitacoes = '';
        this.notas = '';
        this.observacoes = '';
        this.fonte_dados = '';
        this.objetivoRelevancia = '';
        this.diretrizNacional = '';
        this.carga_manual = false;
        this.acumulativo = false;
        this.ativo = true;
        this.privado = false;
        this.TipoConsultaCodigo = 0;
        this.ParametroFonteCodigo = null;
        this.BancoDadosCodigo = 0;
        this.secretaria = null;
        this.UnidadeCodigo = 1;
        this.GranularidadeCodigo = 0;
        this.CriterioAgregacaoCodigo = 0;
        this.PeriodicidadeAtualizacaoCodigo = 30;
        this.PeriodicidadeAvaliacaoCodigo = 30;
        this.PeriodicidadeMonitoramentoCodigo = 30;
        this.especifico = false;
        this.parametro = null;
        this.ultima_atualizacao = null;
        this.PolaridadeCodigo = 0;
        this.IndicadoresRelacionados = [];
        this.ResponsavelTecnico = [];
        this.IndicadoresRelacionados = [];
        this.ResponsavelGerencial = [];
        this.CategoriasAnalise = [];
        this.tags = [];
        this.unidadesMedidaSuplementar = [];
    }
    return Indicador;
}());

//# sourceMappingURL=indicador.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Perfil */
var Perfil = (function () {
    function Perfil() {
        this.codigo = 0;
        this.sigla = '';
        this.descricao = '';
        this.ativo = false;
        this.exige_unidade = false;
    }
    return Perfil;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Polaridade */
var Polaridade = (function () {
    function Polaridade() {
        this.codigo = 0;
    }
    return Polaridade;
}());

//# sourceMappingURL=polaridade.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StatusAprovacao */
var StatusAprovacao = (function () {
    function StatusAprovacao() {
    }
    return StatusAprovacao;
}());

//# sourceMappingURL=status-aprovacao.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Tag */
var Tag = (function () {
    function Tag() {
        this.codigo = 0;
    }
    return Tag;
}());

//# sourceMappingURL=tag.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnidadeResponsavel; });
var UnidadeResponsavel = (function () {
    function UnidadeResponsavel() {
        this.codigo = 0;
        this.sigla = '';
        this.nome = '';
        this.email = '';
        this.isInformal = false;
        this.codigo = null;
    }
    return UnidadeResponsavel;
}());

//# sourceMappingURL=unidade-responsavel.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
        this.codigo = 0;
        this.login = '';
        this.cpf = '';
        this.nome = '';
        this.email = '';
        this.ramal = '';
        this.celular = '';
        this.telefone = '';
        this.cargo = '';
        this.sexo = '';
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* unused harmony export AnnounceUserService */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnnounceUserService = (function () {
    function AnnounceUserService() {
        this.userAnnouncedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.cicloAnnounced$ = this.userAnnouncedSource.asObservable();
    }
    AnnounceUserService.prototype.announceUserChange = function (item) {
        this.userAnnouncedSource.next(item);
    };
    return AnnounceUserService;
}());
AnnounceUserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AnnounceUserService);

//# sourceMappingURL=announce-user.service.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__REST__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BancoDadosService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BancoDadosService = (function (_super) {
    __extends(BancoDadosService, _super);
    function BancoDadosService(http) {
        return _super.call(this, http) || this;
    }
    BancoDadosService.prototype.getAll = function () {
        return this.get('/banco-dados');
    };
    return BancoDadosService;
}(__WEBPACK_IMPORTED_MODULE_2__REST__["a" /* REST */]));
BancoDadosService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BancoDadosService);

var _a;
//# sourceMappingURL=banco-dados.service.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__REST__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaAnaliseService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriaAnaliseService = (function (_super) {
    __extends(CategoriaAnaliseService, _super);
    function CategoriaAnaliseService(http) {
        return _super.call(this, http) || this;
    }
    CategoriaAnaliseService.prototype.getAll = function () {
        return _super.prototype.get.call(this, '/categoria-analise');
    };
    CategoriaAnaliseService.prototype.get = function (codigo) {
        return _super.prototype.get.call(this, "/categoria-analise/" + codigo);
    };
    CategoriaAnaliseService.prototype.apaga = function (codigo) {
        return _super.prototype.delete.call(this, "/categoria-analise/" + codigo);
    };
    CategoriaAnaliseService.prototype.create = function (categoria) {
        console.log('Gravando...', categoria);
        return _super.prototype.post.call(this, '/categoria-analise', categoria);
    };
    CategoriaAnaliseService.prototype.update = function (categoria) {
        return _super.prototype.put.call(this, "/categoria-analise/" + categoria.codigo, categoria);
    };
    return CategoriaAnaliseService;
}(__WEBPACK_IMPORTED_MODULE_2__REST__["a" /* REST */]));
CategoriaAnaliseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CategoriaAnaliseService);

var _a;
//# sourceMappingURL=categoria-analise.service.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__REST__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassificacaoIndicadorService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClassificacaoIndicadorService = (function (_super) {
    __extends(ClassificacaoIndicadorService, _super);
    function ClassificacaoIndicadorService(http) {
        return _super.call(this, http) || this;
    }
    ClassificacaoIndicadorService.prototype.getAll = function () {
        return this.get('/classificacao');
    };
    return ClassificacaoIndicadorService;
}(__WEBPACK_IMPORTED_MODULE_2__REST__["a" /* REST */]));
ClassificacaoIndicadorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ClassificacaoIndicadorService);

var _a;
//# sourceMappingURL=classificacao-indicador.service.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__REST__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Classificacao6sIndicadorService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Classificacao6sIndicadorService = (function (_super) {
    __extends(Classificacao6sIndicadorService, _super);
    function Classificacao6sIndicadorService(http) {
        return _super.call(this, http) || this;
    }
    Classificacao6sIndicadorService.prototype.getAll = function () {
        return this.get('/classificacao6s');
    };
    return Classificacao6sIndicadorService;
}(__WEBPACK_IMPORTED_MODULE_2__REST__["a" /* REST */]));
Classificacao6sIndicadorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], Classificacao6sIndicadorService);

var _a;
//# sourceMappingURL=classificacao6s-indicador.service.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__REST__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultaService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ConsultaService = (function (_super) {
    __extends(ConsultaService, _super);
    function ConsultaService(http) {
        return _super.call(this, http) || this;
    }
    ConsultaService.prototype.search = function (codigo, data, tipo, formato) {
        if (data === void 0) { data = ''; }
        if (tipo === void 0) { tipo = ''; }
        if (formato === void 0) { formato = 'LIN'; }
        return __awaiter(this, void 0, void 0, function () {
            var search, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        search = '';
                        if (data) {
                            search += "data=" + data + "&";
                        }
                        if (tipo) {
                            search += "tipo=" + tipo + "&";
                        }
                        if (formato) {
                            search += "formato=" + formato + "&";
                        }
                        console.log("/indicador/" + codigo + "/resultset?" + search);
                        return [4 /*yield*/, this.get("/indicador/" + codigo + "/resultset?" + search).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    return ConsultaService;
}(__WEBPACK_IMPORTED_MODULE_2__REST__["a" /* REST */]));
ConsultaService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ConsultaService);

var _a;
//# sourceMappingURL=consulta.service.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__REST__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriterioAgregacaoService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CriterioAgregacaoService = (function (_super) {
    __extends(CriterioAgregacaoService, _super);
    function CriterioAgregacaoService(http) {
        return _super.call(this, http) || this;
    }
    CriterioAgregacaoService.prototype.getAll = function () {
        return this.get('/criterio-agregacao');
    };
    return CriterioAgregacaoService;
}(__WEBPACK_IMPORTED_MODULE_2__REST__["a" /* REST */]));
CriterioAgregacaoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CriterioAgregacaoService);

var _a;
//# sourceMappingURL=criterio-agregacao.service.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__REST__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FonteParametroService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FonteParametroService = (function (_super) {
    __extends(FonteParametroService, _super);
    function FonteParametroService(http) {
        return _super.call(this, http) || this;
    }
    FonteParametroService.prototype.getAll = function () {
        return this.get('/fonte-parametro');
    };
    FonteParametroService.prototype.getItem = function (codigo) {
        return _super.prototype.get.call(this, "/fonte-parametro/" + codigo);
    };
    FonteParametroService.prototype.apaga = function (codigo) {
        return _super.prototype.delete.call(this, "/fonte-parametro/" + codigo);
    };
    FonteParametroService.prototype.create = function (fonte) {
        console.log('Gravando...', fonte);
        return _super.prototype.post.call(this, '/fonte-parametro', fonte);
    };
    FonteParametroService.prototype.update = function (fonte) {
        console.log('Atualizando...', fonte);
        return _super.prototype.put.call(this, "/fonte-parametro/" + fonte.codigo, fonte);
    };
    return FonteParametroService;
}(__WEBPACK_IMPORTED_MODULE_2__REST__["a" /* REST */]));
FonteParametroService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FonteParametroService);

var _a;
//# sourceMappingURL=fonte-parametro.service.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__REST__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GranularidadeService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GranularidadeService = (function (_super) {
    __extends(GranularidadeService, _super);
    function GranularidadeService(http) {
        return _super.call(this, http) || this;
    }
    GranularidadeService.prototype.getAll = function () {
        return this.get('/granularidade');
    };
    return GranularidadeService;
}(__WEBPACK_IMPORTED_MODULE_2__REST__["a" /* REST */]));
GranularidadeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GranularidadeService);

var _a;
//# sourceMappingURL=granularidade.service.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__REST__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndicadorService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var IndicadorService = (function (_super) {
    __extends(IndicadorService, _super);
    function IndicadorService(http) {
        return _super.call(this, http) || this;
    }
    IndicadorService.prototype.getAll = function (limit, offset, query) {
        if (!limit) {
            limit = 9999;
        }
        if (!offset) {
            offset = 0;
        }
        if (!query) {
            query = '';
        }
        console.log('query', query);
        var path = "/indicador?limit=" + limit + "&offset=" + offset + "&" + query;
        return _super.prototype.get.call(this, path);
    };
    IndicadorService.prototype.getAllSync = function (limit, offset, query) {
        return __awaiter(this, void 0, void 0, function () {
            var path;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!limit) {
                            limit = 9999;
                        }
                        if (!offset) {
                            offset = 0;
                        }
                        if (!query) {
                            query = '';
                        }
                        console.log('query', query);
                        path = "/indicador?limit=" + limit + "&offset=" + offset + "&" + query;
                        return [4 /*yield*/, _super.prototype.get.call(this, path).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    IndicadorService.prototype.get = function (codigo) {
        return _super.prototype.get.call(this, "/indicador/" + codigo);
    };
    IndicadorService.prototype.create = function (indicador) {
        return _super.prototype.post.call(this, '/indicador', indicador);
    };
    IndicadorService.prototype.update = function (indicador) {
        return _super.prototype.put.call(this, "/indicador/" + indicador.codigo, indicador);
    };
    IndicadorService.prototype.delete = function (codigo) {
        return _super.prototype.delete.call(this, "/indicador/" + codigo);
    };
    IndicadorService.prototype.updateConceituacao = function (codigo, conceituacao) {
        return _super.prototype.patch.call(this, "/indicador/" + codigo + "/conceituacao", { conceituacao: conceituacao });
    };
    IndicadorService.prototype.updateObjetivoRelevancia = function (codigo, objetivoRelevancia) {
        return _super.prototype.patch.call(this, "/indicador/" + codigo + "/objetivoRelevancia", { objetivoRelevancia: objetivoRelevancia });
    };
    IndicadorService.prototype.updateInterpretacao = function (codigo, interpretacao) {
        return _super.prototype.patch.call(this, "/indicador/" + codigo + "/interpretacao", { interpretacao: interpretacao });
    };
    IndicadorService.prototype.updateUso = function (codigo, usos) {
        return _super.prototype.patch.call(this, "/indicador/" + codigo + "/uso", { usos: usos });
    };
    IndicadorService.prototype.updateLimitacao = function (codigo, limitacoes) {
        return _super.prototype.patch.call(this, "/indicador/" + codigo + "/limitacao", { limitacoes: limitacoes });
    };
    IndicadorService.prototype.updateNota = function (codigo, notas) {
        return _super.prototype.patch.call(this, "/indicador/" + codigo + "/nota", { notas: notas });
    };
    IndicadorService.prototype.updateObservacao = function (codigo, observacoes) {
        return _super.prototype.patch.call(this, "/indicador/" + codigo + "/observacao", { observacoes: observacoes });
    };
    IndicadorService.prototype.updateMetodoCalculo = function (codigo, metodo_calculo) {
        return _super.prototype.patch.call(this, "/indicador/" + codigo + "/metodo_calculo", { metodo_calculo: metodo_calculo });
    };
    IndicadorService.prototype.updateProcedimentoOperacional = function (codigo, procedimento_operacional) {
        return _super.prototype.patch.call(this, "/indicador/" + codigo + "/procedimento_operacional", { procedimento_operacional: procedimento_operacional });
    };
    IndicadorService.prototype.updateFonteDados = function (codigo, fonte_dados) {
        return _super.prototype.patch.call(this, "/indicador/" + codigo + "/fonte_dados", { fonte_dados: fonte_dados });
    };
    IndicadorService.prototype.adicionaIndicadorRelacionado = function (id_pai, id) {
        return _super.prototype.patch.call(this, "/indicador/" + id_pai + "/indicador-relacionado/" + id, '');
    };
    IndicadorService.prototype.deleteIndicadorRelacionado = function (id_pai, id) {
        return _super.prototype.delete.call(this, "/indicador/" + id_pai + "/indicador-relacionado/" + id);
    };
    IndicadorService.prototype.adicionaResponsavelGerencial = function (id_pai, id) {
        return _super.prototype.patch.call(this, "/indicador/" + id_pai + "/responsavel-gerencial/" + id, '');
    };
    IndicadorService.prototype.deleteResponsavelGerencial = function (id_pai, id) {
        return _super.prototype.delete.call(this, "/indicador/" + id_pai + "/responsavel-gerencial/" + id);
    };
    IndicadorService.prototype.adicionaResponsavelTecnico = function (id_pai, id) {
        return _super.prototype.patch.call(this, "/indicador/" + id_pai + "/responsavel-tecnico/" + id, '');
    };
    IndicadorService.prototype.deleteResponsavelTecnico = function (id_pai, id) {
        return _super.prototype.delete.call(this, "/indicador/" + id_pai + "/responsavel-tecnico/" + id);
    };
    IndicadorService.prototype.adicionaCategoriaRelacionada = function (id, categoria_analise) {
        return _super.prototype.patch.call(this, "/indicador/" + id + "/categoria-analise/" + categoria_analise, '');
    };
    IndicadorService.prototype.deleteCategoriaRelacionada = function (id, categoria_analise) {
        return _super.prototype.delete.call(this, "/indicador/" + id + "/categoria-analise/" + categoria_analise);
    };
    IndicadorService.prototype.getCountPorUnidade = function () {
        return _super.prototype.get.call(this, '/indicador-porunidade');
    };
    IndicadorService.prototype.getCountPorTag = function () {
        return _super.prototype.get.call(this, '/indicador-portag');
    };
    IndicadorService.prototype.getPorTipoConsulta = function (tipo) {
        return _super.prototype.get.call(this, "/indicador/importacao?tipo=" + tipo);
    };
    return IndicadorService;
}(__WEBPACK_IMPORTED_MODULE_2__REST__["a" /* REST */]));
IndicadorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], IndicadorService);

var _a;
//# sourceMappingURL=indicador.service.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__REST__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParametroService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParametroService = (function (_super) {
    __extends(ParametroService, _super);
    function ParametroService(http) {
        var _this = _super.call(this, http) || this;
        _this.parametro = {};
        _this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return _this;
    }
    ParametroService.prototype.load = function () {
        var _this = this;
        _super.prototype.get.call(this, '/version').subscribe(function (resp) {
            _this.parametro = resp;
            _this.change.emit(_this.parametro);
        });
    };
    return ParametroService;
}(__WEBPACK_IMPORTED_MODULE_2__REST__["a" /* REST */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ParametroService.prototype, "change", void 0);
ParametroService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], ParametroService);

var _a, _b;
//# sourceMappingURL=parametro.service.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__REST__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PerfilService = (function (_super) {
    __extends(PerfilService, _super);
    function PerfilService(http) {
        return _super.call(this, http) || this;
    }
    PerfilService.prototype.getAll = function () {
        return this.get("/perfil?aplicacao=" + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].aplicacao);
    };
    return PerfilService;
}(__WEBPACK_IMPORTED_MODULE_2__REST__["a" /* REST */]));
PerfilService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PerfilService);

var _a;
//# sourceMappingURL=perfil.service.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__REST__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeriodicidadeService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PeriodicidadeService = (function (_super) {
    __extends(PeriodicidadeService, _super);
    function PeriodicidadeService(http) {
        return _super.call(this, http) || this;
    }
    PeriodicidadeService.prototype.getAll = function () {
        return this.get('/periodicidade');
    };
    return PeriodicidadeService;
}(__WEBPACK_IMPORTED_MODULE_2__REST__["a" /* REST */]));
PeriodicidadeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PeriodicidadeService);

var _a;
//# sourceMappingURL=periodicidade.service.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__REST__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolaridadeService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PolaridadeService = (function (_super) {
    __extends(PolaridadeService, _super);
    function PolaridadeService(http) {
        return _super.call(this, http) || this;
    }
    PolaridadeService.prototype.getAll = function () {
        return this.get('/polaridade');
    };
    return PolaridadeService;
}(__WEBPACK_IMPORTED_MODULE_2__REST__["a" /* REST */]));
PolaridadeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PolaridadeService);

var _a;
//# sourceMappingURL=polaridade.service.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__REST__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagCategoriaService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TagCategoriaService = (function (_super) {
    __extends(TagCategoriaService, _super);
    function TagCategoriaService(http) {
        return _super.call(this, http) || this;
    }
    TagCategoriaService.prototype.getAll = function () {
        return _super.prototype.get.call(this, '/tag-categoria');
    };
    TagCategoriaService.prototype.getItem = function (codigo) {
        return _super.prototype.get.call(this, "/tag-categoria/" + codigo);
    };
    TagCategoriaService.prototype.apaga = function (codigo) {
        return _super.prototype.delete.call(this, "/tag-categoria/" + codigo);
    };
    TagCategoriaService.prototype.create = function (tagcategoria) {
        console.log('Gravando...', tagcategoria);
        return _super.prototype.post.call(this, '/tag-categoria', tagcategoria);
    };
    TagCategoriaService.prototype.update = function (tagcategoria) {
        return _super.prototype.put.call(this, "/tag-categoria/" + tagcategoria.codigo, tagcategoria);
    };
    return TagCategoriaService;
}(__WEBPACK_IMPORTED_MODULE_2__REST__["a" /* REST */]));
TagCategoriaService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TagCategoriaService);

var _a;
//# sourceMappingURL=tag-categoria.service.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__REST__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TagService = (function (_super) {
    __extends(TagService, _super);
    function TagService(http) {
        return _super.call(this, http) || this;
    }
    TagService.prototype.getAll = function () {
        return this.get('/tag');
    };
    return TagService;
}(__WEBPACK_IMPORTED_MODULE_2__REST__["a" /* REST */]));
TagService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TagService);

var _a;
//# sourceMappingURL=tag.service.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__REST__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipoConsultaService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TipoConsultaService = (function (_super) {
    __extends(TipoConsultaService, _super);
    function TipoConsultaService(http) {
        return _super.call(this, http) || this;
    }
    TipoConsultaService.prototype.getAll = function () {
        return this.get('/tipo-consulta');
    };
    return TipoConsultaService;
}(__WEBPACK_IMPORTED_MODULE_2__REST__["a" /* REST */]));
TipoConsultaService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TipoConsultaService);

var _a;
//# sourceMappingURL=tipo-consulta.service.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__REST__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnidadeMedidaService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnidadeMedidaService = (function (_super) {
    __extends(UnidadeMedidaService, _super);
    function UnidadeMedidaService(http) {
        return _super.call(this, http) || this;
    }
    UnidadeMedidaService.prototype.getAll = function () {
        return this.get('/unidade-medida');
    };
    UnidadeMedidaService.prototype.getItem = function (codigo) {
        return _super.prototype.get.call(this, "/unidade-medida/" + codigo);
    };
    UnidadeMedidaService.prototype.apaga = function (codigo) {
        return _super.prototype.delete.call(this, "/unidade-medida/" + codigo);
    };
    UnidadeMedidaService.prototype.create = function (unidademedida) {
        console.log('Gravando...', unidademedida);
        return _super.prototype.post.call(this, '/unidade-medida', unidademedida);
    };
    UnidadeMedidaService.prototype.update = function (unidademedida) {
        console.log('Atualizando...', unidademedida);
        return _super.prototype.put.call(this, "/unidade-medida/" + unidademedida.codigo, unidademedida);
    };
    return UnidadeMedidaService;
}(__WEBPACK_IMPORTED_MODULE_2__REST__["a" /* REST */]));
UnidadeMedidaService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UnidadeMedidaService);

var _a;
//# sourceMappingURL=unidade-medida.service.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__REST__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnidadeService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnidadeService = (function (_super) {
    __extends(UnidadeService, _super);
    function UnidadeService(http) {
        return _super.call(this, http) || this;
    }
    UnidadeService.prototype.getAll = function () {
        return this.get('/unidade');
    };
    UnidadeService.prototype.getUnidade = function (codigo) {
        return this.get("/unidade/" + codigo);
    };
    UnidadeService.prototype.create = function (unidade) {
        return _super.prototype.post.call(this, '/unidade', unidade);
    };
    UnidadeService.prototype.update = function (unidade) {
        return _super.prototype.put.call(this, "/unidade/" + unidade.codigo, unidade);
    };
    UnidadeService.prototype.apaga = function (codigo) {
        return _super.prototype.delete.call(this, "/unidade/" + codigo);
    };
    UnidadeService.prototype.getUnidadesHierarchical = function () {
        return this.get('/unidade-hierarquia');
    };
    return UnidadeService;
}(__WEBPACK_IMPORTED_MODULE_2__REST__["a" /* REST */]));
UnidadeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UnidadeService);

var _a;
//# sourceMappingURL=unidade.service.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__REST__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsuarioService = (function (_super) {
    __extends(UsuarioService, _super);
    function UsuarioService(http) {
        return _super.call(this, http) || this;
    }
    UsuarioService.prototype.getAll = function () {
        return this.get('/user');
    };
    UsuarioService.prototype.createSolicitacao = function (perfil) {
        return this.post('/user', perfil);
    };
    UsuarioService.prototype.getPorSituacao = function (codigo) {
        return this.get("/user?situacao=" + codigo);
    };
    UsuarioService.prototype.aprovaSolicitacaoPerfil = function (codigo) {
        return this.post("/user/" + codigo + "/aprova", '');
    };
    UsuarioService.prototype.rejeitaSolicitacaoPerfil = function (codigo) {
        return this.post("/user/" + codigo + "/rejeita", '');
    };
    UsuarioService.prototype.getPerfil = function () {
        return this.get('/user/perfil');
    };
    return UsuarioService;
}(__WEBPACK_IMPORTED_MODULE_2__REST__["a" /* REST */]));
UsuarioService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UsuarioService);

var _a;
//# sourceMappingURL=usuario.service.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_utils_notification_service__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilService = (function () {
    function UtilService(notificationService) {
        this.notificationService = notificationService;
    }
    UtilService.prototype.msgSucesso = function (mensagem) {
        this.notificationService.smallBox({
            title: "Sucesso",
            content: mensagem,
            color: "#739E73",
            iconSmall: "fa fa-thumbs-up bounce animated",
            timeout: 4000
        });
    };
    UtilService.prototype.msgErro = function (mensagem) {
        this.notificationService.smallBox({
            title: "Erro",
            content: mensagem,
            color: "#C46A69",
            iconSmall: "fa fa-warning shake animated",
            timeout: 4000
        });
    };
    UtilService.prototype.msgErroInfra = function (err) {
        console.log(err);
        var mensagem = err;
        this.notificationService.smallBox({
            title: "Erro na Infraestrutura",
            content: mensagem,
            color: "#C79121",
            iconSmall: "fa fa-shield fadeInLeft animated",
            timeout: 4000
        });
    };
    UtilService.prototype.msgSucessoDelete = function (mensagem) {
        this.notificationService.smallBox({
            title: "Registro Apagado",
            content: mensagem,
            color: "#DB4A67",
            iconSmall: "fa fa-warning fadeInLeft animated",
            timeout: 4000
        });
    };
    UtilService.prototype.msgSucessoEdicao = function (mensagem) {
        this.notificationService.smallBox({
            title: "Registro Atualizado",
            content: mensagem,
            color: "#002E70",
            iconSmall: "fa fa-warning fadeInLeft animated",
            timeout: 4000
        });
    };
    UtilService.prototype.msgQuestion = function (mensagem) {
        this.notificationService.smallBox({
            title: "Pergunta",
            content: mensagem + " <p class='text-align-right'><a href-void class='btn btn-primary btn-sm btn-sim'>Sim</a> <a href-void class='btn btn-danger btn-sm btn-nao'>Não</a></p>",
            color: "#296191",
            //timeout: 8000,
            icon: "fa fa-bell swing animated"
        });
        var promise = new Promise(function (resolve, reject) {
            $('.btn-sim').click(function () {
                resolve('sim');
            });
            $('.btn-nao').click(function () {
                reject('nao');
            });
        });
        return promise;
    };
    return UtilService;
}());
UtilService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_utils_notification_service__["a" /* NotificationService */]) === "function" && _a || Object])
], UtilService);

var _a;
//# sourceMappingURL=util.service.js.map

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorpickerDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorpickerDirective = (function () {
    function ColorpickerDirective(el) {
        this.el = el;
    }
    ColorpickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(11).then(__webpack_require__.bind(null, 1199)).then(function () {
            _this.render();
        });
    };
    ColorpickerDirective.prototype.render = function () {
        $(this.el.nativeElement).colorpicker(this.saColorpicker || {});
    };
    return ColorpickerDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ColorpickerDirective.prototype, "saColorpicker", void 0);
ColorpickerDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[saColorpicker]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], ColorpickerDirective);

var _a;
//# sourceMappingURL=colorpicker.directive.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuallistboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DuallistboxComponent = (function () {
    function DuallistboxComponent(el) {
        this.el = el;
        this.itemsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selected = [];
        this.nonSelectedListLabel = 'Non-selected';
        this.selectedListLabel = 'Selected';
        this.preserveSelectionOnMove = 'moved';
        this.moveOnSelect = false;
        this.size = 10;
        this.element = $(this.el.nativeElement);
    }
    DuallistboxComponent.prototype.onClick = function () {
        var _this = this;
        var selected = this.element.find('.smart-duallistbox').val() || [];
        if (selected.some(function (it) { return _this.selected.indexOf(it) == -1; })
            ||
                this.selected.some(function (it) { return selected.indexOf(it) == -1; })) {
            this.selected = selected;
            this.items.forEach(function (item) {
                if (_this.selected.indexOf(item.key) > -1) {
                    item.selected = true;
                }
                else {
                    delete item.selected;
                }
            });
            this.itemsChange.emit(this.items);
        }
    };
    DuallistboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selected = this.items.filter(function (item) { return item.selected; }).map(function (item) { return item.key; });
        __webpack_require__.e/* import() */(10).then(__webpack_require__.bind(null, 1202)).then(function () {
            _this.render();
        });
    };
    DuallistboxComponent.prototype.render = function () {
        var options = {
            nonSelectedFilter: this.nonSelectedFilter,
            nonSelectedListLabel: this.nonSelectedListLabel,
            selectedListLabel: this.selectedListLabel,
            preserveSelectionOnMove: this.preserveSelectionOnMove,
            moveOnSelect: this.moveOnSelect,
            size: this.size
        };
        this.element.bootstrapDualListbox(options);
    };
    return DuallistboxComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DuallistboxComponent.prototype, "items", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DuallistboxComponent.prototype, "itemsChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DuallistboxComponent.prototype, "selected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DuallistboxComponent.prototype, "nonSelectedFilter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DuallistboxComponent.prototype, "nonSelectedListLabel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DuallistboxComponent.prototype, "selectedListLabel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DuallistboxComponent.prototype, "preserveSelectionOnMove", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], DuallistboxComponent.prototype, "moveOnSelect", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], DuallistboxComponent.prototype, "size", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DuallistboxComponent.prototype, "onClick", null);
DuallistboxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'duallistbox',
        template: "\n     <select multiple (click)=\"onChange()\" class=\"smart-duallistbox\">\n        <option *ngFor=\"let item of items\" [selected]=\"item.selected\" [value]=\"item.key\">{{item.value}}</option>\n      </select>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], DuallistboxComponent);

var _a;
//# sourceMappingURL=duallistbox.component.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FileInputComponent = (function () {
    function FileInputComponent() {
    }
    FileInputComponent.prototype.ngOnInit = function () {
    };
    return FileInputComponent;
}());
FileInputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-file-input',
        template: "\n    <div class=\"input input-file\">\n        <span class=\"button\"><input type=\"file\" #file  (change)=\"viewport.value = file.value\"/>Browse</span><input #viewport type=\"text\" placeholder=\"Include some files\" readonly/>\n    </div>\n  ",
    }),
    __metadata("design:paramtypes", [])
], FileInputComponent);

//# sourceMappingURL=file-input.component.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonSliderDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IonSliderDirective = (function () {
    function IonSliderDirective(el) {
        this.el = el;
    }
    IonSliderDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, 1207)).then(function () {
            _this.render();
        });
    };
    IonSliderDirective.prototype.render = function () {
        $(this.el.nativeElement).ionRangeSlider();
    };
    return IonSliderDirective;
}());
IonSliderDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[ionSlider]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], IonSliderDirective);

var _a;
//# sourceMappingURL=ionslider.directive.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KnobDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KnobDirective = (function () {
    function KnobDirective(el) {
        var _this = this;
        this.el = el;
        __webpack_require__.e/* import() */(14).then(__webpack_require__.bind(null, 1200)).then(function () {
            _this.render();
        });
    }
    KnobDirective.prototype.render = function () {
        $(this.el.nativeElement).knob(this.saKnob || {});
    };
    return KnobDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], KnobDirective.prototype, "saKnob", void 0);
KnobDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[saKnob]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], KnobDirective);

var _a;
//# sourceMappingURL=knob.directive.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaskedInput; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MaskedInput = (function () {
    function MaskedInput(el) {
        this.el = el;
    }
    MaskedInput.prototype.ngOnInit = function () {
        var _this = this;
        //System.import('script-loader!jquery.maskedinput/src/jquery.maskedinput.js').then(()=>{
        __webpack_require__.e/* import() */(12).then(__webpack_require__.bind(null, 1211)).then(function () {
            var options = _this.saMaskedPlaceholder ? { placeholder: _this.saMaskedPlaceholder } : '';
            $(_this.el.nativeElement).mask(_this.saMaskedInput, options);
        });
    };
    return MaskedInput;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MaskedInput.prototype, "saMaskedInput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MaskedInput.prototype, "saMaskedPlaceholder", void 0);
MaskedInput = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[saMaskedInput]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], MaskedInput);

var _a;
//# sourceMappingURL=masked-input.directive.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NouisliderDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NouisliderDirective = (function () {
    function NouisliderDirective(el) {
        this.el = el;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NouisliderDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(13).then(__webpack_require__.bind(null, 1201)).then(function (noUiSlider) {
            var slider = _this.el.nativeElement;
            var options = _this.nouiSlider || {
                range: {
                    min: 0,
                    max: 1000
                },
            };
            noUiSlider.create(slider, options);
            slider.noUiSlider.on('change', function () {
                _this.change.emit(slider.noUiSlider.get());
            });
        });
    };
    return NouisliderDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NouisliderDirective.prototype, "nouiSlider", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], NouisliderDirective.prototype, "change", void 0);
NouisliderDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[nouiSlider]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], NouisliderDirective);

var _a;
//# sourceMappingURL=nouislider.directive.js.map

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnOffSwitchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnOffSwitchComponent = OnOffSwitchComponent_1 = (function () {
    function OnOffSwitchComponent() {
        this.modelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    OnOffSwitchComponent.prototype.ngOnInit = function () {
        this.value = this.model;
        this.widgetId = 'on-off-switch' + OnOffSwitchComponent_1.widgetsCounter++;
    };
    OnOffSwitchComponent.prototype.onChange = function () {
        this.modelChange.emit(this.value);
    };
    return OnOffSwitchComponent;
}());
OnOffSwitchComponent.widgetsCounter = 0;
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], OnOffSwitchComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], OnOffSwitchComponent.prototype, "model", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], OnOffSwitchComponent.prototype, "modelChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], OnOffSwitchComponent.prototype, "value", void 0);
OnOffSwitchComponent = OnOffSwitchComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'on-off-switch',
        template: __webpack_require__(908),
    }),
    __metadata("design:paramtypes", [])
], OnOffSwitchComponent);

var OnOffSwitchComponent_1;
//# sourceMappingURL=on-off-switch.component.js.map

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_dom_helpers__ = __webpack_require__(608);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Select2Directive; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Select2Directive = (function () {
    function Select2Directive(el) {
        this.el = el;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_dom_helpers__["a" /* addClassName */])(this.el.nativeElement, ['sa-cloak', 'sa-hidden']);
    }
    Select2Directive.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 1209)).then(function () {
            $(_this.el.nativeElement).select2();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_dom_helpers__["b" /* removeClassName */])(_this.el.nativeElement, ['sa-hidden']);
        });
    };
    return Select2Directive;
}());
Select2Directive = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[select2]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], Select2Directive);

var _a;
//# sourceMappingURL=select2.directive.js.map

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartClockpickerDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SmartClockpickerDirective = (function () {
    function SmartClockpickerDirective(el) {
        this.el = el;
    }
    SmartClockpickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 1206)).then(function () {
            _this.render();
        });
    };
    SmartClockpickerDirective.prototype.render = function () {
        $(this.el.nativeElement).clockpicker(this.smartClockpicker || {
            placement: 'top',
            donetext: 'Done'
        });
    };
    return SmartClockpickerDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SmartClockpickerDirective.prototype, "smartClockpicker", void 0);
SmartClockpickerDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[smartClockpicker]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], SmartClockpickerDirective);

var _a;
//# sourceMappingURL=smart-clockpicker.directive.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartSliderDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SmartSliderDirective = (function () {
    function SmartSliderDirective(el) {
        this.el = el;
    }
    SmartSliderDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(9).then(__webpack_require__.bind(null, 1203)).then(function () {
            _this.render();
        });
    };
    SmartSliderDirective.prototype.render = function () {
        $(this.el.nativeElement).bootstrapSlider();
    };
    return SmartSliderDirective;
}());
SmartSliderDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[smartSlider]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], SmartSliderDirective);

var _a;
//# sourceMappingURL=smart-slider.directive.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartTagsDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SmartTagsDirective = (function () {
    function SmartTagsDirective(el) {
        this.el = el;
    }
    SmartTagsDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, 1204)).then(function () {
            _this.render();
        });
    };
    SmartTagsDirective.prototype.render = function () {
        $(this.el.nativeElement).tagsinput();
    };
    return SmartTagsDirective;
}());
SmartTagsDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[smartTags]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], SmartTagsDirective);

var _a;
//# sourceMappingURL=smart-tags.directive.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartTimepickerDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SmartTimepickerDirective = (function () {
    function SmartTimepickerDirective(el) {
        this.el = el;
    }
    SmartTimepickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 1205)).then(function () {
            _this.render();
        });
    };
    SmartTimepickerDirective.prototype.render = function () {
        $(this.el.nativeElement).timepicker();
    };
    return SmartTimepickerDirective;
}());
SmartTimepickerDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[smartTimepicker]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], SmartTimepickerDirective);

var _a;
//# sourceMappingURL=smart-timepicker.directive.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__colorpicker_directive__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__file_input_file_input_component__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__knob_directive__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__masked_input_directive__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_datepicker_directive__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ui_spinner_directive__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__x_editable_component__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__duallistbox_component__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nouislider_directive__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionslider_directive__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__smart_slider_directive__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__smart_tags_directive__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__smart_timepicker_directive__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__smart_clockpicker_directive__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__select2_select2_module__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__on_off_switch_on_off_switch_module__ = __webpack_require__(507);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartadminInputModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var SmartadminInputModule = (function () {
    function SmartadminInputModule() {
    }
    return SmartadminInputModule;
}());
SmartadminInputModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__colorpicker_directive__["a" /* ColorpickerDirective */],
            __WEBPACK_IMPORTED_MODULE_3__file_input_file_input_component__["a" /* FileInputComponent */],
            __WEBPACK_IMPORTED_MODULE_4__knob_directive__["a" /* KnobDirective */],
            __WEBPACK_IMPORTED_MODULE_5__masked_input_directive__["a" /* MaskedInput */],
            __WEBPACK_IMPORTED_MODULE_6__ui_datepicker_directive__["a" /* UiDatepickerDirective */],
            __WEBPACK_IMPORTED_MODULE_7__ui_spinner_directive__["a" /* UiSpinner */],
            __WEBPACK_IMPORTED_MODULE_8__x_editable_component__["a" /* XEditableComponent */],
            __WEBPACK_IMPORTED_MODULE_9__duallistbox_component__["a" /* DuallistboxComponent */],
            __WEBPACK_IMPORTED_MODULE_10__nouislider_directive__["a" /* NouisliderDirective */],
            __WEBPACK_IMPORTED_MODULE_11__ionslider_directive__["a" /* IonSliderDirective */],
            __WEBPACK_IMPORTED_MODULE_12__smart_slider_directive__["a" /* SmartSliderDirective */],
            __WEBPACK_IMPORTED_MODULE_13__smart_tags_directive__["a" /* SmartTagsDirective */],
            __WEBPACK_IMPORTED_MODULE_14__smart_timepicker_directive__["a" /* SmartTimepickerDirective */],
            __WEBPACK_IMPORTED_MODULE_15__smart_clockpicker_directive__["a" /* SmartClockpickerDirective */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__colorpicker_directive__["a" /* ColorpickerDirective */],
            __WEBPACK_IMPORTED_MODULE_3__file_input_file_input_component__["a" /* FileInputComponent */],
            __WEBPACK_IMPORTED_MODULE_4__knob_directive__["a" /* KnobDirective */],
            __WEBPACK_IMPORTED_MODULE_5__masked_input_directive__["a" /* MaskedInput */],
            __WEBPACK_IMPORTED_MODULE_6__ui_datepicker_directive__["a" /* UiDatepickerDirective */],
            __WEBPACK_IMPORTED_MODULE_7__ui_spinner_directive__["a" /* UiSpinner */],
            __WEBPACK_IMPORTED_MODULE_8__x_editable_component__["a" /* XEditableComponent */],
            __WEBPACK_IMPORTED_MODULE_9__duallistbox_component__["a" /* DuallistboxComponent */],
            __WEBPACK_IMPORTED_MODULE_10__nouislider_directive__["a" /* NouisliderDirective */],
            __WEBPACK_IMPORTED_MODULE_11__ionslider_directive__["a" /* IonSliderDirective */],
            __WEBPACK_IMPORTED_MODULE_12__smart_slider_directive__["a" /* SmartSliderDirective */],
            __WEBPACK_IMPORTED_MODULE_13__smart_tags_directive__["a" /* SmartTagsDirective */],
            __WEBPACK_IMPORTED_MODULE_14__smart_timepicker_directive__["a" /* SmartTimepickerDirective */],
            __WEBPACK_IMPORTED_MODULE_15__smart_clockpicker_directive__["a" /* SmartClockpickerDirective */],
            __WEBPACK_IMPORTED_MODULE_16__select2_select2_module__["a" /* Select2Module */],
            __WEBPACK_IMPORTED_MODULE_17__on_off_switch_on_off_switch_module__["a" /* OnOffSwitchModule */],
        ]
    })
], SmartadminInputModule);

//# sourceMappingURL=smartadmin-input.module.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiDatepickerDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UiDatepickerDirective = (function () {
    function UiDatepickerDirective(el) {
        this.el = el;
    }
    UiDatepickerDirective.prototype.ngOnInit = function () {
        var onSelectCallbacks = [];
        var saUiDatepicker = this.saUiDatepicker || {};
        var element = $(this.el.nativeElement);
        if (saUiDatepicker.minRestrict) {
            onSelectCallbacks.push(function (selectedDate) {
                $(saUiDatepicker.minRestrict).datepicker('option', 'minDate', selectedDate);
            });
        }
        if (saUiDatepicker.maxRestrict) {
            onSelectCallbacks.push(function (selectedDate) {
                $(saUiDatepicker.maxRestrict).datepicker('option', 'maxDate', selectedDate);
            });
        }
        //Let others know about changes to the data field
        onSelectCallbacks.push(function (selectedDate) {
            element.triggerHandler("change");
            var form = element.closest('form');
            if (typeof form.bootstrapValidator == 'function') {
                try {
                    form.bootstrapValidator('revalidateField', element);
                }
                catch (e) {
                    console.log(e.message);
                }
            }
        });
        var options = $.extend(saUiDatepicker, {
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            onSelect: function (selectedDate) {
                onSelectCallbacks.forEach(function (callback) {
                    callback.call(callback, selectedDate);
                });
            }
        });
        element.datepicker(options);
    };
    return UiDatepickerDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], UiDatepickerDirective.prototype, "saUiDatepicker", void 0);
UiDatepickerDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[saUiDatepicker]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], UiDatepickerDirective);

var _a;
//# sourceMappingURL=ui-datepicker.directive.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiSpinner; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UiSpinner = (function () {
    function UiSpinner(el) {
        this.el = el;
    }
    UiSpinner.prototype.ngOnInit = function () {
        var options;
        if (this.saUiSpinner == 'decimal') {
            options = {
                step: 0.01,
                numberFormat: "n"
            };
        }
        else if (this.saUiSpinner == 'currency') {
            options = {
                min: 5,
                max: 2500,
                step: 25,
                start: 1000,
                numberFormat: "C"
            };
        }
        $(this.el.nativeElement).spinner((options || this.saUiSpinner) || {});
    };
    return UiSpinner;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], UiSpinner.prototype, "saUiSpinner", void 0);
UiSpinner = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[saUiSpinner]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], UiSpinner);

var _a;
//# sourceMappingURL=ui-spinner.directive.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XEditableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var XEditableComponent = XEditableComponent_1 = (function () {
    function XEditableComponent(el) {
        this.el = el;
        this.model = '';
        this.modelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.type = 'text';
        this.disabled = false;
        this.widgetId = 'x-editable' + XEditableComponent_1.widgetsCounter++;
    }
    XEditableComponent.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(15).then(__webpack_require__.bind(null, 1198)).then(function () {
            _this.render();
        });
    };
    XEditableComponent.prototype.ngAfterContentChecked = function () {
        var _this = this;
        if (this._options && ['type',
            'placement',
            'mode',
            'value',
            'disabled',
            'placeholder',
            'originalTitle',
            'source',
            'showbuttons',
            'template',
            'viewformat',
            'format',
            'pk',
        ].some(function (it) {
            return _this._options[it] != _this[it];
        })) {
            this.render();
        }
    };
    XEditableComponent.prototype.render = function () {
        var _this = this;
        var element = $(this.el.nativeElement);
        var options = {
            type: this.type,
            placement: this.placement,
            mode: this.mode,
            value: this.value,
            disabled: this.disabled,
            placeholder: this.placeholder,
            originalTitle: this.originalTitle,
            source: this.source,
            showbuttons: this.showbuttons,
            template: this.template,
            viewformat: this.viewformat,
            format: this.format,
            pk: this.pk,
        };
        element.editable('destroy');
        element.editable(options);
        element.on('save', function (e, params) {
            _this.model = params.newValue;
            _this.modelChange.emit(params.newValue);
        });
        this._options = options;
    };
    return XEditableComponent;
}());
XEditableComponent.widgetsCounter = 0;
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "model", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "modelChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "placement", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "mode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "originalTitle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "source", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "showbuttons", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "template", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "viewformat", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "format", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "className", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], XEditableComponent.prototype, "pk", void 0);
XEditableComponent = XEditableComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'x-editable',
        template: '<a attr.id="{{widgetId}}" class="{{className}}"><ng-content></ng-content>{{model }}</a>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], XEditableComponent);

var XEditableComponent_1, _a;
//# sourceMappingURL=x-editable.component.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BootstrapValidatorDirective; });
//
// FIX: Manutencao no componente efetuada em 03/02/2018
// Descricao: Fazer com que o formulario so seja submetido apos a validacao do jquery
//    parece que com o html5, mesmo com return false da funcao (submit), o formulario ainda estar
//    sendo submetido.  Agora deve-se programar um evento (onSubmit) = "funcao".  So executa se
//   validacao ok.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BootstrapValidatorDirective = (function () {
    function BootstrapValidatorDirective(el) {
        var _this = this;
        this.el = el;
        this.onSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.s = function () {
            var bootstrapValidator = _this.$form.data('bootstrapValidator');
            bootstrapValidator.validate();
            if (bootstrapValidator.isValid())
                _this.onSubmit.emit(_this.$form);
            else
                return;
        };
    }
    BootstrapValidatorDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 1210)).then(function () {
            _this.attach();
        });
    };
    BootstrapValidatorDirective.prototype.attach = function () {
        this.$form = $(this.el.nativeElement);
        this.$form.bootstrapValidator(this.saBootstrapValidator || {});
        this.$form.submit(function (ev) { ev.preventDefault(); });
    };
    BootstrapValidatorDirective.prototype.isValid = function () {
        var bootstrapValidator = this.$form.data('bootstrapValidator');
        return bootstrapValidator.isValid();
    };
    return BootstrapValidatorDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BootstrapValidatorDirective.prototype, "saBootstrapValidator", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], BootstrapValidatorDirective.prototype, "onSubmit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('submit'),
    __metadata("design:type", Object)
], BootstrapValidatorDirective.prototype, "s", void 0);
BootstrapValidatorDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[saBootstrapValidator]'
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], BootstrapValidatorDirective);

var _a, _b;
//# sourceMappingURL=bootstrap-validator.directive.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiValidateDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UiValidateDirective = (function () {
    function UiValidateDirective(el) {
        var _this = this;
        this.el = el;
        __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 1208)).then(function () {
            _this.attach();
        });
    }
    UiValidateDirective.prototype.attach = function () {
        var $form = $(this.el.nativeElement);
        var validateCommonOptions = {
            rules: {},
            messages: {},
            errorElement: 'em',
            errorClass: 'invalid',
            highlight: function (element, errorClass, validClass) {
                $(element).addClass(errorClass).removeClass(validClass);
                $(element).parent().addClass('state-error').removeClass('state-success');
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).removeClass(errorClass).addClass(validClass);
                $(element).parent().removeClass('state-error').addClass('state-success');
            },
            errorPlacement: function (error, element) {
                if (element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                }
                else {
                    error.insertAfter(element);
                }
            }
        };
        $form.find('[data-smart-validate-input], [smart-validate-input]').each(function () {
            var $input = $(this), fieldName = $input.attr('name');
            validateCommonOptions.rules[fieldName] = {};
            if ($input.data('required') != undefined) {
                validateCommonOptions.rules[fieldName].required = true;
            }
            if ($input.data('email') != undefined) {
                validateCommonOptions.rules[fieldName].email = true;
            }
            if ($input.data('maxlength') != undefined) {
                validateCommonOptions.rules[fieldName].maxlength = $input.data('maxlength');
            }
            if ($input.data('minlength') != undefined) {
                validateCommonOptions.rules[fieldName].minlength = $input.data('minlength');
            }
            if ($input.data('message')) {
                validateCommonOptions.messages[fieldName] = $input.data('message');
            }
            else {
                Object.keys($input.data()).forEach(function (key) {
                    if (key.search(/message/) == 0) {
                        if (!validateCommonOptions.messages[fieldName])
                            validateCommonOptions.messages[fieldName] = {};
                        var messageKey = key.toLowerCase().replace(/^message/, '');
                        validateCommonOptions.messages[fieldName][messageKey] = $input.data(key);
                    }
                });
            }
        });
        $form.validate($.extend(validateCommonOptions, this.saUiValidate));
    };
    return UiValidateDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], UiValidateDirective.prototype, "saUiValidate", void 0);
UiValidateDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[saUiValidate]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], UiValidateDirective);

var _a;
//# sourceMappingURL=ui-validate.directive.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__i18n_service__ = __webpack_require__(144);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return I18nPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var I18nPipe = (function () {
    function I18nPipe(i18nService) {
        this.i18nService = i18nService;
    }
    I18nPipe.prototype.transform = function (phrase, args) {
        return this.i18nService.getTranslation(phrase);
    };
    return I18nPipe;
}());
I18nPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'i18n',
        pure: false
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__i18n_service__["a" /* I18nService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__i18n_service__["a" /* I18nService */]) === "function" && _a || Object])
], I18nPipe);

var _a;
//# sourceMappingURL=i18n.pipe.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__languages_model__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__i18n_service__ = __webpack_require__(144);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageSelectorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LanguageSelectorComponent = (function () {
    function LanguageSelectorComponent(i18n) {
        this.i18n = i18n;
    }
    LanguageSelectorComponent.prototype.ngOnInit = function () {
        this.languages = __WEBPACK_IMPORTED_MODULE_1__languages_model__["a" /* languages */];
        this.currentLanguage = this.i18n.currentLanguage;
    };
    LanguageSelectorComponent.prototype.setLanguage = function (language) {
        this.currentLanguage = language;
        this.i18n.setLanguage(language);
    };
    return LanguageSelectorComponent;
}());
LanguageSelectorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-language-selector',
        template: __webpack_require__(909),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__i18n_service__["a" /* I18nService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__i18n_service__["a" /* I18nService */]) === "function" && _a || Object])
], LanguageSelectorComponent);

var _a;
//# sourceMappingURL=language-selector.component.js.map

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthLayoutComponent = (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
    };
    return AuthLayoutComponent;
}());
AuthLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-auth-layout',
        template: __webpack_require__(910),
        styles: []
    }),
    __metadata("design:paramtypes", [])
], AuthLayoutComponent);

//# sourceMappingURL=auth-layout.component.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_api_json_api_service__ = __webpack_require__(141);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivitiesService = (function () {
    function ActivitiesService(jsonApiService) {
        this.jsonApiService = jsonApiService;
        this.url = '/activities/activities.json';
    }
    ActivitiesService.prototype.getActivities = function () {
        return this.jsonApiService.fetch(this.url);
    };
    return ActivitiesService;
}());
ActivitiesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_api_json_api_service__["a" /* JsonApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_api_json_api_service__["a" /* JsonApiService */]) === "function" && _a || Object])
], ActivitiesService);

var _a;
//# sourceMappingURL=activities.service.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__voice_control_voice_control_service__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voice_control_voice_recognition_service__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechButtonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeechButtonComponent = (function () {
    function SpeechButtonComponent(voiceControlService, voiceRecognitionService) {
        var _this = this;
        this.voiceControlService = voiceControlService;
        this.voiceRecognitionService = voiceRecognitionService;
        this.hasError = false;
        this.enabled = false;
        this.speechPopoverShown = false;
        this.enabled = this.voiceControlService.state.enabled && this.voiceControlService.state.available;
        this.voiceRecognitionService.events.delay(50).subscribe(function (event) {
            _this.respondTo(event);
        });
        this.voiceControlService.helpShown.delay(50).subscribe(function () {
            if (_this.speechPopoverShown) {
                _this.speechPopover.hide();
            }
        });
    }
    SpeechButtonComponent.prototype.ngOnInit = function () {
        this.voiceControlService.attachHelp();
    };
    SpeechButtonComponent.prototype.seeCommands = function () {
        this.voiceControlService.showHelp();
    };
    SpeechButtonComponent.prototype.toggleVoiceControl = function () {
        this.speechPopoverShown = !this.speechPopoverShown;
        if (!this.voiceControlService.state.started) {
            this.voiceControlService.voiceControlOn();
        }
        else {
            this.voiceControlService.voiceControlOff();
        }
    };
    SpeechButtonComponent.prototype.respondTo = function (event) {
        switch (event.type) {
            case 'start':
                this.hasError = false;
                break;
            case 'error':
                this.hasError = true;
                break;
            case 'match':
            case 'no match':
                if (this.speechPopoverShown) {
                    this.speechPopover.hide();
                }
                break;
        }
    };
    return SpeechButtonComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('speechPopover'),
    __metadata("design:type", Object)
], SpeechButtonComponent.prototype, "speechPopover", void 0);
SpeechButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-speech-button',
        template: __webpack_require__(924),
        styles: [".vc-title-error {display: block;}"]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__voice_control_voice_control_service__["a" /* VoiceControlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__voice_control_voice_control_service__["a" /* VoiceControlService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__voice_control_voice_recognition_service__["a" /* VoiceRecognitionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__voice_control_voice_recognition_service__["a" /* VoiceRecognitionService */]) === "function" && _b || Object])
], SpeechButtonComponent);

var _a, _b;
//# sourceMappingURL=speech-button.component.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteBreadcrumbsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RouteBreadcrumbsComponent = (function () {
    function RouteBreadcrumbsComponent(route, router) {
        this.route = route;
        this.router = router;
        this.items = [];
    }
    RouteBreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (e) { return e instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */]; })
            .subscribe(function (v) {
            _this.items = [];
            _this.extract(_this.router.routerState.root);
        });
    };
    RouteBreadcrumbsComponent.prototype.extract = function (route) {
        var _this = this;
        var pageTitle = route.data.value['pageTitle'];
        if (pageTitle && this.items.indexOf(pageTitle) == -1) {
            this.items.push(route.data.value['pageTitle']);
        }
        if (route.children) {
            route.children.forEach(function (it) {
                _this.extract(it);
            });
        }
    };
    return RouteBreadcrumbsComponent;
}());
RouteBreadcrumbsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-route-breadcrumbs',
        template: "\n        <ol class=\"breadcrumb\">\n           <li *ngFor=\"let item of items\">{{item}}</li>\n        </ol>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], RouteBreadcrumbsComponent);

var _a, _b;
//# sourceMappingURL=route-breadcrumbs.component.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sound_service__ = __webpack_require__(145);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoundModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SoundModule = SoundModule_1 = (function () {
    function SoundModule() {
    }
    SoundModule.forRoot = function () {
        return {
            ngModule: SoundModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_2__sound_service__["a" /* SoundService */]]
        };
    };
    return SoundModule;
}());
SoundModule = SoundModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [],
        providers: [__WEBPACK_IMPORTED_MODULE_2__sound_service__["a" /* SoundService */]]
    })
], SoundModule);

var SoundModule_1;
//# sourceMappingURL=sound.module.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_layout_service__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginInfoComponent = (function () {
    function LoginInfoComponent(userService, layoutService) {
        this.userService = userService;
        this.layoutService = layoutService;
    }
    LoginInfoComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.user);
    };
    LoginInfoComponent.prototype.toggleShortcut = function () {
        this.layoutService.onShortcutToggle();
    };
    return LoginInfoComponent;
}());
LoginInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-login-info',
        template: __webpack_require__(929),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__layout_layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__layout_layout_service__["a" /* LayoutService */]) === "function" && _b || Object])
], LoginInfoComponent);

var _a, _b;
//# sourceMappingURL=login-info.component.js.map

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_notification_service__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = (function () {
    function LogoutComponent(router, notificationService) {
        this.router = router;
        this.notificationService = notificationService;
    }
    LogoutComponent.prototype.showPopup = function () {
        var _this = this;
        this.notificationService.smartMessageBox({
            title: "<i class='fa fa-sign-out txt-color-orangeDark'></i> Sair <span class='txt-color-orangeDark'><strong>" + $('#show-shortcut').text() + "</strong></span> ?",
            content: "Você pode melhorar a segurança após sair fechar seu browser",
            buttons: '[Não][Sim]'
        }, function (ButtonPressed) {
            if (ButtonPressed == "Sim") {
                _this.logout();
            }
        });
    };
    LogoutComponent.prototype.logout = function () {
        this.router.navigate(['/']);
    };
    LogoutComponent.prototype.ngOnInit = function () {
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-logout',
        template: "\n<div id=\"logout\" (click)=\"showPopup()\" class=\"btn-header transparent pull-right\">\n        <span> <a routerlink=\"/auth/login\" title=\"Sair\" data-action=\"userLogout\"\n                  data-logout-msg=\"Voc\u00EA pode melhorar a seguran\u00E7a ap\u00F3s sair fechar seu browser\"><i\n          class=\"fa fa-sign-out\"></i></a> </span>\n    </div>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__utils_notification_service__["a" /* NotificationService */]) === "function" && _b || Object])
], LogoutComponent);

var _a, _b;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addClassName;
/* harmony export (immutable) */ __webpack_exports__["b"] = removeClassName;
/**
 * by griga
 */
/**
 * by griga
 */ function addClassName(el, classNames) {
    if (!Array.isArray(classNames)) {
        classNames = [classNames];
    }
    classNames.forEach(function (className) {
        if (el.classList) {
            el.classList.add(className);
        }
        else {
            el.className += ' ' + className;
        }
    });
    return el;
}
function removeClassName(el, classNames) {
    if (!Array.isArray(classNames)) {
        classNames = [classNames];
    }
    classNames.forEach(function (className) {
        if (el.classList) {
            el.classList.remove(className);
        }
        else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    });
    return el;
}
//# sourceMappingURL=dom-helpers.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FieldFilterPipe = (function () {
    function FieldFilterPipe() {
    }
    FieldFilterPipe.prototype.transform = function (items, field, value) {
        if (!items)
            return [];
        if (!value)
            return items;
        return items.filter(function (it) { return it[field].toLowerCase().indexOf(value.toLowerCase()) > -1; });
    };
    return FieldFilterPipe;
}());
FieldFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'fieldFilter',
    })
], FieldFilterPipe);

//# sourceMappingURL=field-filter.pipe.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MomentPipe = (function () {
    function MomentPipe() {
    }
    MomentPipe.prototype.transform = function (value, format) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(value).format(format);
    };
    return MomentPipe;
}());
MomentPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'moment'
    })
], MomentPipe);

//# sourceMappingURL=moment.pipe.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimeDirective = (function () {
    function TimeDirective() {
    }
    return TimeDirective;
}());
TimeDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: 'time' })
], TimeDirective);

//# sourceMappingURL=time.directive.js.map

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleActiveDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToggleActiveDirective = (function () {
    function ToggleActiveDirective() {
    }
    return ToggleActiveDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.active'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ToggleActiveDirective.prototype, "saToggleActive", void 0);
ToggleActiveDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[saToggleActive]'
    }),
    __metadata("design:paramtypes", [])
], ToggleActiveDirective);

//# sourceMappingURL=toggle-active.directive.js.map

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_mergeMap__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_ui_npm_jquery_ui_min_js__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_ui_npm_jquery_ui_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery_ui_npm_jquery_ui_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_imports_loader_jQuery_jquery_jquery_color_jquery_color_js__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_imports_loader_jQuery_jquery_jquery_color_jquery_color_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_imports_loader_jQuery_jquery_jquery_color_jquery_color_js__);
// RxJS


// Smartadmin Dependencies
window['jQuery'] = __webpack_require__(143);
window['$'] = window['jQuery'];

__webpack_require__(619); // required for X-editable
__webpack_require__(617); // required for X-editable
__webpack_require__(615); // required for bootstrap-colorpicker
__webpack_require__(618); //
__webpack_require__(616); //
window['moment'] = __webpack_require__(2);

__webpack_require__(1183);
//# sourceMappingURL=lib.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__(223);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classificacao_indicador_service__ = __webpack_require__(562);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__classificacao_indicador_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classificacao6s_indicador_service__ = __webpack_require__(563);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__classificacao6s_indicador_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__indicador_service__ = __webpack_require__(568);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__indicador_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__periodicidade_service__ = __webpack_require__(571);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__periodicidade_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__unidade_medida_service__ = __webpack_require__(576);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__unidade_medida_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_service__ = __webpack_require__(579);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_6__util_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tag_categoria_service__ = __webpack_require__(573);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_7__tag_categoria_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tag_service__ = __webpack_require__(574);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_8__tag_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__categoria_analise_service__ = __webpack_require__(561);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_9__categoria_analise_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__banco_dados_service__ = __webpack_require__(560);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_10__banco_dados_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tipo_consulta_service__ = __webpack_require__(575);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_11__tipo_consulta_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__announce_user_service__ = __webpack_require__(559);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__unidade_service__ = __webpack_require__(577);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_13__unidade_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__granularidade_service__ = __webpack_require__(567);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_14__granularidade_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__criterio_agregacao_service__ = __webpack_require__(565);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_15__criterio_agregacao_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__usuario_service__ = __webpack_require__(578);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_16__usuario_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__consulta_service__ = __webpack_require__(564);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_17__consulta_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__polaridade_service__ = __webpack_require__(572);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_18__polaridade_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__perfil_service__ = __webpack_require__(570);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_19__perfil_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__fonte_parametro_service__ = __webpack_require__(566);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_20__fonte_parametro_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__parametro_service__ = __webpack_require__(569);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_21__parametro_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__acl_service__ = __webpack_require__(222);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_22__acl_service__["a"]; });























//# sourceMappingURL=index.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationService = (function () {
    function NotificationService() {
    }
    NotificationService.prototype.smallBox = function (data, cb) {
        $.smallBox(data, cb);
    };
    NotificationService.prototype.bigBox = function (data, cb) {
        $.bigBox(data, cb);
    };
    NotificationService.prototype.smartMessageBox = function (data, cb) {
        $.SmartMessageBox(data, cb);
    };
    return NotificationService;
}());
NotificationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], NotificationService);

//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 269,
	"./af.js": 269,
	"./ar": 276,
	"./ar-dz": 270,
	"./ar-dz.js": 270,
	"./ar-kw": 271,
	"./ar-kw.js": 271,
	"./ar-ly": 272,
	"./ar-ly.js": 272,
	"./ar-ma": 273,
	"./ar-ma.js": 273,
	"./ar-sa": 274,
	"./ar-sa.js": 274,
	"./ar-tn": 275,
	"./ar-tn.js": 275,
	"./ar.js": 276,
	"./az": 277,
	"./az.js": 277,
	"./be": 278,
	"./be.js": 278,
	"./bg": 279,
	"./bg.js": 279,
	"./bm": 280,
	"./bm.js": 280,
	"./bn": 281,
	"./bn.js": 281,
	"./bo": 282,
	"./bo.js": 282,
	"./br": 283,
	"./br.js": 283,
	"./bs": 284,
	"./bs.js": 284,
	"./ca": 285,
	"./ca.js": 285,
	"./cs": 286,
	"./cs.js": 286,
	"./cv": 287,
	"./cv.js": 287,
	"./cy": 288,
	"./cy.js": 288,
	"./da": 289,
	"./da.js": 289,
	"./de": 292,
	"./de-at": 290,
	"./de-at.js": 290,
	"./de-ch": 291,
	"./de-ch.js": 291,
	"./de.js": 292,
	"./dv": 293,
	"./dv.js": 293,
	"./el": 294,
	"./el.js": 294,
	"./en-SG": 295,
	"./en-SG.js": 295,
	"./en-au": 296,
	"./en-au.js": 296,
	"./en-ca": 297,
	"./en-ca.js": 297,
	"./en-gb": 298,
	"./en-gb.js": 298,
	"./en-ie": 299,
	"./en-ie.js": 299,
	"./en-il": 300,
	"./en-il.js": 300,
	"./en-nz": 301,
	"./en-nz.js": 301,
	"./eo": 302,
	"./eo.js": 302,
	"./es": 305,
	"./es-do": 303,
	"./es-do.js": 303,
	"./es-us": 304,
	"./es-us.js": 304,
	"./es.js": 305,
	"./et": 306,
	"./et.js": 306,
	"./eu": 307,
	"./eu.js": 307,
	"./fa": 308,
	"./fa.js": 308,
	"./fi": 309,
	"./fi.js": 309,
	"./fo": 310,
	"./fo.js": 310,
	"./fr": 313,
	"./fr-ca": 311,
	"./fr-ca.js": 311,
	"./fr-ch": 312,
	"./fr-ch.js": 312,
	"./fr.js": 313,
	"./fy": 314,
	"./fy.js": 314,
	"./ga": 315,
	"./ga.js": 315,
	"./gd": 316,
	"./gd.js": 316,
	"./gl": 317,
	"./gl.js": 317,
	"./gom-latn": 318,
	"./gom-latn.js": 318,
	"./gu": 319,
	"./gu.js": 319,
	"./he": 320,
	"./he.js": 320,
	"./hi": 321,
	"./hi.js": 321,
	"./hr": 322,
	"./hr.js": 322,
	"./hu": 323,
	"./hu.js": 323,
	"./hy-am": 324,
	"./hy-am.js": 324,
	"./id": 325,
	"./id.js": 325,
	"./is": 326,
	"./is.js": 326,
	"./it": 328,
	"./it-ch": 327,
	"./it-ch.js": 327,
	"./it.js": 328,
	"./ja": 329,
	"./ja.js": 329,
	"./jv": 330,
	"./jv.js": 330,
	"./ka": 331,
	"./ka.js": 331,
	"./kk": 332,
	"./kk.js": 332,
	"./km": 333,
	"./km.js": 333,
	"./kn": 334,
	"./kn.js": 334,
	"./ko": 335,
	"./ko.js": 335,
	"./ku": 336,
	"./ku.js": 336,
	"./ky": 337,
	"./ky.js": 337,
	"./lb": 338,
	"./lb.js": 338,
	"./lo": 339,
	"./lo.js": 339,
	"./lt": 340,
	"./lt.js": 340,
	"./lv": 341,
	"./lv.js": 341,
	"./me": 342,
	"./me.js": 342,
	"./mi": 343,
	"./mi.js": 343,
	"./mk": 344,
	"./mk.js": 344,
	"./ml": 345,
	"./ml.js": 345,
	"./mn": 346,
	"./mn.js": 346,
	"./mr": 347,
	"./mr.js": 347,
	"./ms": 349,
	"./ms-my": 348,
	"./ms-my.js": 348,
	"./ms.js": 349,
	"./mt": 350,
	"./mt.js": 350,
	"./my": 351,
	"./my.js": 351,
	"./nb": 352,
	"./nb.js": 352,
	"./ne": 353,
	"./ne.js": 353,
	"./nl": 355,
	"./nl-be": 354,
	"./nl-be.js": 354,
	"./nl.js": 355,
	"./nn": 356,
	"./nn.js": 356,
	"./pa-in": 357,
	"./pa-in.js": 357,
	"./pl": 358,
	"./pl.js": 358,
	"./pt": 360,
	"./pt-br": 359,
	"./pt-br.js": 359,
	"./pt.js": 360,
	"./ro": 361,
	"./ro.js": 361,
	"./ru": 362,
	"./ru.js": 362,
	"./sd": 363,
	"./sd.js": 363,
	"./se": 364,
	"./se.js": 364,
	"./si": 365,
	"./si.js": 365,
	"./sk": 366,
	"./sk.js": 366,
	"./sl": 367,
	"./sl.js": 367,
	"./sq": 368,
	"./sq.js": 368,
	"./sr": 370,
	"./sr-cyrl": 369,
	"./sr-cyrl.js": 369,
	"./sr.js": 370,
	"./ss": 371,
	"./ss.js": 371,
	"./sv": 372,
	"./sv.js": 372,
	"./sw": 373,
	"./sw.js": 373,
	"./ta": 374,
	"./ta.js": 374,
	"./te": 375,
	"./te.js": 375,
	"./tet": 376,
	"./tet.js": 376,
	"./tg": 377,
	"./tg.js": 377,
	"./th": 378,
	"./th.js": 378,
	"./tl-ph": 379,
	"./tl-ph.js": 379,
	"./tlh": 380,
	"./tlh.js": 380,
	"./tr": 381,
	"./tr.js": 381,
	"./tzl": 382,
	"./tzl.js": 382,
	"./tzm": 384,
	"./tzm-latn": 383,
	"./tzm-latn.js": 383,
	"./tzm.js": 384,
	"./ug-cn": 385,
	"./ug-cn.js": 385,
	"./uk": 386,
	"./uk.js": 386,
	"./ur": 387,
	"./ur.js": 387,
	"./uz": 389,
	"./uz-latn": 388,
	"./uz-latn.js": 388,
	"./uz.js": 389,
	"./vi": 390,
	"./vi.js": 390,
	"./x-pseudo": 391,
	"./x-pseudo.js": 391,
	"./yo": 392,
	"./yo.js": 392,
	"./zh-cn": 393,
	"./zh-cn.js": 393,
	"./zh-hk": 394,
	"./zh-hk.js": 394,
	"./zh-tw": 395,
	"./zh-tw.js": 395
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 776;


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    // url: 'http://mgdiapi.saude.gov.br',
    url: 'http://mgdi-api-test-digisus.cloud.saude.gov',
    API_URL: "/api",
    aplicacao: 1,
    urlNewUser: "http://aplicacao-homologacao.saude.gov.br/datasus-scpaweb-usuario/visao/login/login-sistema.jsf",
    urlForgetPassword: "http://aplicacao-homologacao.saude.gov.br/datasus-scpaweb-usuario/visao/login/gerar-senha.jsf"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 907:
/***/ (function(module, exports) {

module.exports = "<div id=\"extr-page\">\n<!-- <header id=\"header\" class=\"animated fadeInDown\">\n  <div id=\"textura\"></div>\n  <div id=\"logo-group\">\n    <span id=\"logo\"> <img src=\"assets/img/logo-digisus-mgdi.svg\" alt=\"SmartAdmin\"> </span>\n  </div>\n\n  <span id=\"extr-page-header-space\" *ngIf=\"isSCPA()\"> <span class=\"hidden-mobile hiddex-xs\">Não tem uma conta?</span> <a [href]=\"env.urlNewUser\" class=\"btn btn-danger\">Cria uma conta</a> </span>\n\n</header> -->\n<div id=\"logoHeader\">\n  <span id=\"logo\"> <img src=\"assets/img/logo-digisus-mgdi.svg\" alt=\"MGDI\"> </span>\n</div>\n<div id=\"main\" role=\"main\" class=\"animated fadeInDown\">\n\n  <div id=\"content\" class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-7 col-lg-8 hidden-xs hidden-sm\">\n        <h1 class=\"txt-color-red login-header-big\">{{ title }}</h1>\n\n        <div class=\"hero\">\n          <div class=\"pull-left login-desc-box-l\">\n            <h4 class=\"paragraph-header\">Controle dos indicadores do {{ orgao }}</h4>\n          </div>\n          <img src=\"assets/img/demo/iphoneview.png\" class=\"pull-right display-image\" alt=\"\" style=\"width:210px\">\n        </div>\n\n      </div>\n      <div class=\"col-xs-12 col-sm-12 col-md-5 col-lg-4\">\n        <div class=\"well no-padding\">\n          <form class=\"smart-form client-form\" (ngSubmit)=\"login()\" f=\"ngForm\" novalidate>\n            <header>\n              Login\n            </header>\n            <fieldset>\n              <section>\n                <label class=\"label\">Usuário</label>\n                <label class=\"input\"> <i class=\"icon-append fa fa-user\"></i>\n                  <input type=\"email\" name=\"email\" data-smart-validate-input=\"\"\n                  data-required=\"\" data-email=\"\" data-message-required=\"Entre com seu email\"\n                  data-message-email=\"Entre com um usuário válido\" [(ngModel)]=\"model.usuario\" #username=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" required>\n                  <b class=\"tooltip tooltip-top-right\"><i class=\"fa fa-user txt-color-teal\"></i>\n                    Entre com usuário/senha</b></label>\n              </section>\n              <section>\n                <label class=\"label\">Senha</label>\n                <label class=\"input\"> <i class=\"icon-append fa fa-lock\"></i>\n                  <input type=\"password\" name=\"password\" data-smart-validate-input=\"\" data-required=\"\" data-minlength=\"3\" data-maxnlength=\"20\" data-message=\"Entre com uma senha\"\n                  [(ngModel)]=\"model.senha\" #username=\"ngModel\" [ngModelOptions]=\"{standalone: true}\" required>\n                  <b class=\"tooltip tooltip-top-right\"><i class=\"fa fa-lock txt-color-teal\"></i> Entre\n                    sua senha</b> </label>\n\n                <div class=\"note\">\n                  <a [href]=\"env.urlForgetPassword\">Esqueceu a senha?</a>\n                </div>\n              </section>\n              <section>\n                <label class=\"checkbox\">\n                  <input type=\"checkbox\" name=\"remember\" checked>\n                  <i></i>Lembre-se</label>\n              </section>\n            </fieldset>\n            <footer>\n              <button class=\"btn btn-primary\">\n                Entrar\n              </button>\n            </footer>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n\n\n<div bsModal #complementoModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\n       aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"complementoModal.hide()\">\n          &times;\n        </button>\n        <h4 class=\"modal-title\">Complemento de cadastro</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            <div class=\"well no-padding\">\n\n              <form id=\"form-complemento\" #f=\"ngForm\" [saBootstrapValidator]=\"validatorOptions\"\n                  (onSubmit)=\"onSubmit(f)\">\n                  <fieldset style=\"margin: 15px\">\n                    <legend>Usuário</legend>\n\n                    <div class=\"row\">\n                      <div class=\"form-group col-xs-12 col-lg-12\">\n                        <label></label>\n                        <div class=\"inputGroupContainer\">\n                          <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control\" name=\"nome\" id=\"nome\" placeholder=\"Nome Completo\" [(ngModel)]=\"newuser.nome\" />\n                            <span class=\"input-group-addon\"><i class=\"icon-append fa fa-user\"></i></span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"row\">\n                      <div class=\"form-group col-xs-6 col-lg-6\">\n                        <label></label>\n                        <div class=\"inputGroupContainer\">\n                          <div class=\"input-group\">\n                            <input type=\"text\" id=\"cpf\" class=\"form-control\" name=\"cpf\" placeholder=\"CPF\" saMaskedInput=\"099.099.099-09\" [(ngModel)]=\"newuser.cpf\">\n                            <span class=\"input-group-addon\"><i class=\"icon-append fa fa-circle-o\"></i></span>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"form-group col-xs-6 col-lg-6\">\n                        <label></label>\n                        <div class=\"inputGroupContainer\">\n                          <div class=\"input-group\">\n                            <input class=\"form-control\" id=\"email\" type=\"email\" name=\"email\" placeholder=\"Endereço de email\" [(ngModel)]=\"newuser.email\"/>\n                            <span class=\"input-group-addon\"><i class=\"icon-append fa fa-envelope\"></i></span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"form-group col-xs-12 col-lg-12\">\n                        <label></label>\n                        <div class=\"inputGroupContainer\">\n                          <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control\" name=\"cargo\" placeholder=\"Cargo ocupado\" [(ngModel)]=\"newuser.cargo\"/>\n                            <span class=\"input-group-addon\"><i class=\"icon-append fa fa-briefcase\"></i></span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"row\">\n                      <div class=\"form-group col-xs-6 col-lg-6\">\n                        <label></label>\n                        <div class=\"inputGroupContainer\">\n                          <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control\" id=\"telefone\" name=\"telefone\" placeholder=\"Telefone Fixo para Contato\"\n                              saMaskedInput=\"(00) 0000-0000\" [ngModel]=\"newuser.telefone\" />\n                            <span class=\"input-group-addon\"><i class=\"icon-append fa fa-phone\"></i></span>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"form-group col-xs-6 col-lg-6\">\n                        <label></label>\n                        <div class=\"inputGroupContainer\">\n                          <div class=\"input-group\">\n                            <input class=\"form-control\" id=\"celular\" name=\"celular\" type=\"text\"\n                            placeholder=\"Telefone Celular\" [ngModel]=\"newuser.celular\" saMaskedInput=\"(00) 0 0000-0000\"/>\n                            <span class=\"input-group-addon\"><i class=\"icon-append fa fa-mobile\"></i></span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"row\">\n                      <div class=\"form-group col-xs-6 col-lg-6\">\n                        <label></label>\n                        <div class=\"inputGroupContainer\">\n                          <div class=\"input-group\">\n                            <input type=\"text\" class=\"form-control\" name=\"ramal\" id=\"ramal\"\n                              placeholder=\"Ramal\" saMaskedInput=\"9999\" [ngModel]=\"newuser.ramal\"/>\n                            <span class=\"input-group-addon\"><i class=\"icon-append fa fa-phone\"></i></span>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"form-group col-xs-6 col-lg-6\">\n                          <label></label>\n                          <br/>\n                          <label class=\"radio radio-inline no-margin\">\n                            <input type=\"radio\" name=\"sexo\" value=\"M\" class=\"radiobox style-1\" [(ngModel)]=\"newuser.sexo\"/>\n                            <span>Masculino</span> </label>\n\n                          <label class=\"radio radio-inline\">\n                            <input type=\"radio\" name=\"sexo\" value=\"F\" class=\"radiobox style-1\" [(ngModel)]=\"newuser.sexo\"/>\n                            <span>Feminino</span> </label>\n                        </div>\n                    </div>\n                    <legend >Perfil solicitado</legend>\n                    <div class=\"row\" style=\"margin: 10px\">\n\n                      <div class=\"form-group col-md-12\">\n                          <ng-container *ngFor=\"let item of colecaoPerfis\">\n                              <label class=\"radio\">\n                                <input type=\"radio\" class=\"radiobox style-1\" name=\"perfilusr\" [(ngModel)]=\"newuser.PerfilCodigo\" [value]=\"item.codigo\">\n                                <span>{{ item.sigla }} - {{ item.titulo }}</span>\n                              </label>\n                          </ng-container>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"form-group col-xs-12 col-lg-12\">\n                        <label></label>\n                        <div class=\"selectContainer\">\n                            <select name=\"UnidadeCodigo\"  select2 style=\"width:100%\" class=\"select2\" id=\"UnidadeCodigo\" [(ngModel)]=\"newuser.UnidadeCodigo\">\n                              <option value=\"\" disabled>Selecione uma unidade</option>\n                              <optgroup label=\"Unidade de Lotação\">\n                              <ng-container *ngFor=\"let item of colecaoUnidades\">\n                                <option value=\"{{item.codigo}}\">{{ item.sigla }} - {{ item.nome}}</option>\n                              </ng-container>\n                              </optgroup>\n                            </select>\n                        </div>\n                      </div>\n                    </div>\n\n                  </fieldset>\n\n\n                  <div class=\"form-actions\">\n                      <div class=\"row\">\n                        <div class=\"col-md-12\">\n                          <button class=\"btn btn-primary\" type=\"submit\">\n                            <i class=\"fa fa-eye\"></i>\n                            Salva\n                          </button>\n                        </div>\n                      </div>\n                  </div>\n              </form>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 908:
/***/ (function(module, exports) {

module.exports = "<div class=\"onoffswitch-container\">\n  <span class=\"onoffswitch-title\">{{title}}<ng-content></ng-content></span>\n  <span class=\"onoffswitch\">\n    <input type=\"checkbox\" class=\"onoffswitch-checkbox\" [(ngModel)]=\"value\" [checked]=\"value\"\n           (ngModelChange)=\"onChange()\"\n           id=\"{{widgetId}}\"/>\n    <label class=\"onoffswitch-label\" htmlFor=\"{{widgetId}}\">\n      <span class=\"onoffswitch-inner\"  data-swchon-text=\"ON\"\n            data-swchoff-text=\"OFF\"></span>\n        <span class=\"onoffswitch-switch\"></span>\n    </label>\n  </span>\n</div>\n"

/***/ }),

/***/ 909:
/***/ (function(module, exports) {

module.exports = "<ul class=\"header-dropdown-list hidden-xs ng-cloak\">\n  <li class=\"dropdown\" dropdown>\n    <a class=\"dropdown-toggle\" dropdownToggle> <img src=\"assets/img/blank.gif\"\n                                                                 class=\"flag flag-{{currentLanguage.key}}\"\n                                                                 alt=\"{{currentLanguage.alt}}\"> <span> {{currentLanguage.title}} </span>\n      <i class=\"fa fa-angle-down\"></i> </a>\n    <ul *dropdownMenu class=\"dropdown-menu\">\n      <li [class.active]=\"language==currentLanguage\"\n          *ngFor=\"let language of languages\">\n        <a (click)=\"setLanguage(language)\" class=\"dropdown-item\" ><img src=\"assets/img/blank.gif\" class=\"flag flag-{{language.key}}\"\n                                                    alt=\"{{language.alt}}\"> {{language.title}}</a>\n      </li>\n    </ul>\n  </li>\n</ul>\n\n"

/***/ }),

/***/ 910:
/***/ (function(module, exports) {

module.exports = "<div id=\"extr-page\">\n<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 911:
/***/ (function(module, exports) {

module.exports = "<sa-header-site></sa-header-site>\n<router-outlet></router-outlet>\n<sa-footer-site></sa-footer-site>\n"

/***/ }),

/***/ 912:
/***/ (function(module, exports) {

module.exports = "<sa-header></sa-header>\n\n<sa-navigation></sa-navigation>\n\n<div id=\"main\" role=\"main\">\n  <router-outlet></router-outlet>\n</div>\n\n<sa-footer></sa-footer>\n\n<!--<sa-shortcut></sa-shortcut>-->\n"

/***/ }),

/***/ 913:
/***/ (function(module, exports) {

module.exports = "<footer class=\"no-print\">\n  <div class=\"row padding-10\">\n      <div class=\"col-md-10\">\n        <div class=\"txt-color-black\">{{ title }}  © 2017 - Versão {{ versionClient }} -\n          <a (click)=\"lgModal.show()\">Release Notes</a> - Ambiente {{ enviroment }}\n        </div>\n      </div>\n  </div>\n</footer>\n\n<div bsModal #lgModal=\"bs-modal\" class=\"modal fade no-print\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" (click)=\"lgModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h3>{{ titleServer }} - {{ versionServer }}</h3>\n        <h4 class=\"modal-title\">Release Notes</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div markdown-to-html src=\"CHANGELOG.md\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 914:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-footer no-print\">\n    <div class=\"row\">\n      <div class=\"col-xs-8 col-sm-8\">\n          <span class=\"txt-color-white\">{{ title }}  © 2017 - Versão {{ versionClient }}  -\n            <a (click)=\"lgModal.show()\">Release Notes</a> - Ambiente {{ enviroment }}\n          </span>\n      </div>\n\n        <div class=\"col-xs-4 col-sm-4 text-right hidden-xs\">\n            <div class=\"txt-color-white inline-block\">\n                <i class=\"txt-color-blueLight hidden-mobile\">Último login <i class=\"fa fa-clock-o\"></i>\n                    <strong>{{ ultimo_login }}&nbsp;</strong> </i>\n\n                <div class=\"btn-group\" dropdown dropup=\"true\">\n                    <button class=\"btn btn-xs dropdown-toggle bg-color-blue txt-color-white\" dropdownToggle>\n                        <i class=\"fa fa-link\"></i> <span class=\"caret\"></span>\n                    </button>\n                    <ul class=\"dropdown-menu\" *dropdownMenu style=\"right: 0px; left: auto\">\n                        <li>\n                            <div class=\"padding-5\">\n                                <p class=\"txt-color-darken font-sm no-margin\">Indicadores acessados</p>\n\n                                <div class=\"progress progress-micro no-margin\">\n                                    <div class=\"progress-bar progress-bar-success\" style=\"width: 50%;\"></div>\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"divider\"></li>\n                        <li>\n                            <div class=\"padding-5\">\n                                <p class=\"txt-color-darken font-sm no-margin\">Indicadores calculados</p>\n\n                                <div class=\"progress progress-micro no-margin\">\n                                    <div class=\"progress-bar progress-bar-success\" style=\"width: 20%;\"></div>\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"divider\"></li>\n                        <li>\n                            <div class=\"padding-5\">\n                                <p class=\"txt-color-darken font-sm no-margin\">Indicadores carregados <span class=\"text-danger\">*critical*</span>\n                                </p>\n\n                                <div class=\"progress progress-micro no-margin\">\n                                    <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%;\"></div>\n                                </div>\n                            </div>\n                        </li>\n                        <li class=\"divider\"></li>\n                        <li>\n                            <div class=\"padding-5\">\n                                <button class=\"btn btn-block btn-default\">Atualiza</button>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div bsModal #lgModal=\"bs-modal\" class=\"modal fade no-print\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" (click)=\"lgModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h3>Server: {{ titleServer }} - {{ versionServer }}</h3>\n        <h4 class=\"modal-title\">Release Notes</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div markdown-to-html src=\"CHANGELOG.md\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 915:
/***/ (function(module, exports) {

module.exports = "<span class={{item.status}}>\n  <a class=\"msg\">\n    <img src={{item.image}} alt=\"\" class=\"air air-top-left margin-top-5\" width=\"40\"\n         height=\"40\"/>\n    <span class=\"from\">{{item.title}}</span>\n    <span>{{item.time}}</span>\n    <span class=\"subject\">{{item.subject}}</span>\n    <span class=\"msg-body\">{{item.message}}</span>\n  </a>\n</span>\n"

/***/ }),

/***/ 916:
/***/ (function(module, exports) {

module.exports = "<span class=\"padding-10\">\n  <em class=\"badge padding-5 no-border-radius bg-color-blueLight pull-left margin-right-5\">\n    <i [ngClass]=\"setClasses()\"></i>\n  </em>\n  <span>{{item.message}}<br/>\n    <span class=\"pull-right font-xs text-muted\"><i>{{item.time}}</i></span>\n  </span>\n</span>\n"

/***/ }),

/***/ 917:
/***/ (function(module, exports) {

module.exports = "<span>\n  <div class=\"bar-holder no-padding\">\n    <p class=\"margin-bottom-5\">\n      <i *ngIf=\"item.status == 'PRIMARY'\" class=\"fa fa-warning text-warning\"></i>\n        <strong>{{item.status}}:</strong> <i>{{item.title}}</i>\n        <span class=\"pull-right semi-bold\"\n              [ngClass]=\"{\n                'pull-right': true,\n                'semi-bold':true,\n                'text-danger': item.status == 'CRITICAL',\n                'text-muted': item.status != 'CRITICAL'\n              }\">\n          <span *ngIf=\"item.width == 100\">\n            <i class=\"fa fa-check text-success\"></i> Complete\n          </span>\n          <span *ngIf=\"item.width != 100\">{{item.width + '%'}}</span>\n        </span>\n    </p>\n    <div class=\"progress\" [class]=\"item.size\">\n      <div [ngClass]=\"setProgressClasses()\" [style.width]=\"item.width + '%'\"></div>\n    </div>\n    <em class=\"note no-margin\">last updated on {{lastUpdate | moment: \"MMMM Do, h:mm a\"}}</em>\n  </div>\n</span>\n"

/***/ }),

/***/ 918:
/***/ (function(module, exports) {

module.exports = "<span id=\"activity\" class=\"activity-dropdown\" (click)=\"onToggle()\">\n  <i class=\"fa fa-user\"></i>\n  <b class=\"badge bg-color-red\">{{count}}</b>\n</span>\n\n<div class=\"ajax-dropdown\" #dropdown>\n  <div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\">\n    <label [ngClass]=\"{\n      'btn btn-default': true,\n      active: activity==currentActivity\n    }\" *ngFor=\"let activity of activities\"\n           (click)=\"setActivity(activity)\"\n    >\n      <input type=\"radio\" name=\"activity\"/>\n      {{activity.title}} ({{activity.data.length}})\n    </label>\n\n  </div>\n\n  <!-- notification content -->\n   <div class=\"ajax-notifications custom-scroll\">\n      <ul class=\"notification-body\" *ngIf=\"currentActivity\" >\n        <ng-template ngFor let-item [ngForOf]=\"currentActivity.data\">\n\n          <li activitiesMessage *ngIf=\"item.type == 'message'\" [item]=\"item\"></li>\n          <li activitiesNotification *ngIf=\"item.type == 'notification'\" [item]=\"item\"></li>\n          <li activitiesTask *ngIf=\"item.type == 'task'\" [item]=\"item\"></li>\n\n        </ng-template>\n\n      </ul>\n    </div>\n  <!-- end notification content -->\n\n  <!-- footer: refresh area -->\n      <span> Last updated on: {{lastUpdate | moment:\"h:mm:ss a\"}}\n    <button type=\"button\" (click)=\"update()\"\n            class=\"btn btn-xs btn-default pull-right\">\n        <i class=\"fa fa-refresh\" *ngIf=\"!loading\"></i>\n        <i class=\"fa fa-refresh fa-spin\" *ngIf=\"loading\"></i>\n        <span *ngIf=\"loading\">loading...</span>\n    </button>\n    </span>\n  <!-- end footer -->\n</div>\n"

/***/ }),

/***/ 919:
/***/ (function(module, exports) {

module.exports = "<div id=\"hide-menu\" class=\"btn-header pull-right\">\n        <span> <a (click)=\"onToggle()\" title=\"Collapse Menu\"><i\n                class=\"fa fa-reorder\"></i></a> </span>\n</div>"

/***/ }),

/***/ 920:
/***/ (function(module, exports) {

module.exports = "<div id=\"fullscreen\" class=\"btn-header transparent pull-right\">\n        <span> <a (click)=\"onToggle()\" title=\"Full Screen\"><i\n                class=\"fa fa-arrows-alt\"></i></a> </span>\n</div>"

/***/ }),

/***/ 921:
/***/ (function(module, exports) {

module.exports = "<div id=\"logoHeader\">\n  <div class='textura'></div>\n  <div class=\"row\">\n      <div class=\"col-xs-8\">\n        <span id=\"logo\"> <img src=\"assets/img/logo-digisus-mgdi.svg\" alt=\"MGDI\"> </span>\n      </div>\n      <div class=\"col-xs-4\">\n        <span id=\"extr-page-header-space\"> <a href=\"#/login\" class=\"btn btn-danger\">Login</a>  </span>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ 922:
/***/ (function(module, exports) {

module.exports = "<header id=\"header\" class=\"no-print\">\n  <div id=\"logo-group\">\n\n    <!-- PLACE YOUR LOGO HERE -->\n    <span id=\"logo\"> <img src=\"assets/img/logo-digisus-mgdi.svg\" alt=\"SmartAdmin\"> </span>\n    <!-- END LOGO PLACEHOLDER -->\n\n\n    <!-- Note: The activity badge color changes when clicked and resets the number to 0\n    Suggestion: You may want to set a flag when this happens to tick off all checked messages / notifications -->\n\n  </div>\n  <div><h1 class=\"txt-color-white login-header-big\">{{ orgao }}</h1></div>\n  <!-- pulled right: nav area -->\n  <div class=\"pull-right\">\n\n    <sa-collapse-menu></sa-collapse-menu>\n\n    <!-- #MOBILE -->\n    <!-- Top menu profile link : this shows only when top menu is active -->\n    <ul id=\"mobile-profile-img\" class=\"header-dropdown-list hidden-xs padding-5\" >\n      <li class=\"\">\n        <a href=\"#\" class=\"dropdown-toggle no-margin userdropdown\" data-toggle=\"dropdown\">\n          <img src=\"assets/img/avatars/jr50.png\" alt=\"JRoberto\" class=\"online\"/>\n        </a>\n        <ul class=\"dropdown-menu pull-right\">\n          <li>\n            <a (click)=\"(null)\" class=\"padding-10 padding-top-0 padding-bottom-0\"><i\n              class=\"fa fa-cog\"></i> Setting</a>\n          </li>\n          <li class=\"divider\"></li>\n          <li>\n            <a routerLink=\"/admin/perfil\" class=\"padding-10 padding-top-0 padding-bottom-0\"> <i\n              class=\"fa fa-user\"></i>\n              <u>P</u>rofile</a>\n          </li>\n          <li class=\"divider\"></li>\n          <li>\n            <a (click)=\"(null)\" class=\"padding-10 padding-top-0 padding-bottom-0\"\n               data-action=\"toggleShortcut\"><i class=\"fa fa-arrow-down\"></i> <u>S</u>hortcut</a>\n          </li>\n          <li class=\"divider\"></li>\n          <li>\n            <a (click)=\"(null)\" class=\"padding-10 padding-top-0 padding-bottom-0\"\n               data-action=\"launchFullscreen\"><i class=\"fa fa-arrows-alt\"></i> Full <u>S</u>creen</a>\n          </li>\n          <li class=\"divider\"></li>\n          <li>\n            <a routerLink=\"/login\" class=\"padding-10 padding-top-5 padding-bottom-5\" data-action=\"userLogout\"><i\n              class=\"fa fa-sign-out fa-lg\"></i> <strong><u>L</u>ogout</strong></a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n\n    <!-- logout button -->\n    <sa-logout></sa-logout>\n    <!-- end logout button -->\n\n    <!-- search mobile button (this is hidden till mobile view port) -->\n    <div id=\"search-mobile\" class=\"btn-header transparent pull-right\">\n      <span> <a (click)=\"toggleSearchMobile()\" title=\"Search\"><i class=\"fa fa-search\"></i></a> </span>\n    </div>\n    <!-- end search mobile button -->\n\n    <!-- input: search field -->\n    <form #searchForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"header-search pull-right\">\n      <input id=\"search-fld\" type=\"text\" name=\"param\" required\n             placeholder=\"Procura dados\">\n      <button type=\"submit\">\n        <i class=\"fa fa-search\"></i>\n      </button>\n      <a id=\"cancel-search-js\" (click)=\"toggleSearchMobile()\" title=\"Cancel Search\"><i class=\"fa fa-times\"></i></a>\n    </form>\n    <!-- end input: search field -->\n\n    <!-- fullscreen button -->\n    <sa-full-screen></sa-full-screen>\n    <!-- end fullscreen button -->\n\n    <!-- #Voice Command: Start Speech -->\n    <sa-speech-button></sa-speech-button>\n    <!-- end voice command -->\n\n\n    <!-- multiple lang dropdown : find all flags in the flags page -->\n    <sa-language-selector></sa-language-selector>\n    <!-- end multiple lang -->\n\n\n\n  </div>\n  <!-- end pulled right: nav area -->\n\n</header>\n"

/***/ }),

/***/ 923:
/***/ (function(module, exports) {

module.exports = "<div class=\"project-context hidden-xs dropdown\" dropdown *ngIf=\"false\">\n\n  <span class=\"label\">{{ 'Indicadores' | i18n }}:</span>\n    <span class=\"project-selector dropdown-toggle\" dropdownToggle>{{'Indicadores Recentes'| i18n}} <i ng-if=\"projects.length\"\n                                                                                                            class=\"fa fa-angle-down\"></i></span>\n\n  <ul *dropdownMenu class=\"dropdown-menu\">\n    <li *ngFor=\"let project of projects\">\n      <a href=\"{{project.href}}\">{{project.title}}</a>\n    </li>\n    <li class=\"divider\"></li>\n    <li>\n      <a (click)=\"clearProjects()\"><i class=\"fa fa-power-off\"></i> Limpa</a>\n    </li>\n  </ul>\n\n</div>\n"

/***/ }),

/***/ 924:
/***/ (function(module, exports) {

module.exports = "\n<div id=\"speech-btn\" class=\"btn-header transparent pull-right hidden-sm hidden-xs\" *ngIf=\"enabled\">\n  <div [popover]=\"speechPopover\">\n    <a title=\"Voice Command\" id=\"voice-command-btn\" (click)=\"toggleVoiceControl()\"><i\n        class=\"fa fa-microphone\"></i></a>\n  </div>\n  <popover-content #speechPopover [closeOnClickOutside]=\"true\"\n                   placement=\"bottom\">\n    <ng-template [ngIf]=\"!hasError\">\n      <h4 class=\"vc-title\">Voice command activated <br/>\n        <small>Please speak clearly into the mic</small>\n      </h4>\n      <a (click)=\"seeCommands()\" class=\"btn btn-success\">See Commands</a>\n      <a class=\"btn bg-color-purple txt-color-white\"\n         (click)=\"speechPopover.hide()\">Close Popup</a>\n    </ng-template>\n    <ng-template [ngIf]=\"hasError\">\n      <h4 class=\"vc-title-error text-center\">\n        <i class=\"fa fa-microphone-slash\"></i> Voice command failed\n        <br/>\n        <small class=\"txt-color-red\">Must <strong>\"Allow\"</strong> Microphone</small>\n        <br/>\n        <small class=\"txt-color-red\">Must have <strong>Internet Connection</strong>\n        </small>\n      </h4>\n    </ng-template>\n  </popover-content>\n</div>\n\n\n\n"

/***/ }),

/***/ 925:
/***/ (function(module, exports) {

module.exports = "<div class=\"demo\" [class.activate]=\"isActivated\"><span id=\"demo-setting\" (click)=\"onToggle()\"><i\n  class=\"fa fa-cog txt-color-blueDark\"></i></span>\n\n  <form>\n    <legend class=\"no-padding margin-bottom-10\">Layout Options</legend>\n    <section>\n      <label><input type=\"checkbox\" (click)=\"onFixedHeader()\" [(ngModel)]=\"store.fixedHeader\" name=\"fixedHeader\"\n                    class=\"checkbox style-0\"><span>Fixed Header</span></label>\n      <label><input type=\"checkbox\"\n                    (click)=\"onFixedNavigation()\" [(ngModel)]=\"store.fixedNavigation\" name=\"fixedNavigation\"\n                    class=\"checkbox style-0\"><span>Fixed Navigation</span></label>\n      <label><input type=\"checkbox\"\n                    (click)=\"onFixedRibbon()\" [(ngModel)]=\"store.fixedRibbon\" name=\"fixedRibbon\"\n                    class=\"checkbox style-0\"><span>Fixed Ribbon</span></label>\n      <label><input type=\"checkbox\"\n                    (click)=\"onFixedPageFooter()\" [(ngModel)]=\"store.fixedPageFooter\" name=\"fixedPageFooter\"\n                    class=\"checkbox style-0\"><span>Fixed Footer</span></label>\n      <label><input type=\"checkbox\"\n                    (click)=\"onInsideContainer()\" [(ngModel)]=\"store.insideContainer\" name=\"insideContainer\"\n                    class=\"checkbox style-0\"><span>Inside <b>.container</b></span></label>\n      <label><input type=\"checkbox\"\n                    (click)=\"onRtl()\" [(ngModel)]=\"store.rtl\" name=\"rtl\"\n                    class=\"checkbox style-0\"><span>RTL</span></label>\n      <label><input type=\"checkbox\"\n                    (click)=\"onMenuOnTop()\" [(ngModel)]=\"store.menuOnTop\" name=\"menuOnTop\"\n                    class=\"checkbox style-0\"><span>Menu on <b>top</b></span></label>\n      <label><input type=\"checkbox\"\n                    (click)=\"onColorblindFriendly()\" [(ngModel)]=\"store.colorblindFriendly\" name=\"colorblindFriendly\"\n                    class=\"checkbox style-0\"><span>For Colorblind <div\n        class=\"font-xs text-right\">(experimental)\n            </div></span>\n      </label><span id=\"smart-bgimages\"></span></section>\n    <section><h6 class=\"margin-top-10 semi-bold margin-bottom-5\">Clear Localstorage</h6><a\n      (click)=\"factoryReset()\" class=\"btn btn-xs btn-block btn-primary\" id=\"reset-smart-widget\"><i\n      class=\"fa fa-refresh\"></i> Factory Reset</a></section>\n\n    <h6 class=\"margin-top-10 semi-bold margin-bottom-5\">SmartAdmin Skins</h6>\n\n\n    <section id=\"smart-styles\">\n          <a *ngFor=\"let skin of store.skins\"\n             (click)=\"onSmartSkin(skin)\"\n             [class]=\"skin.skinBtnClass\"\n             [ngStyle]=\"skin.style\">\n             <i *ngIf=\"skin.name == store.smartSkin\" class=\"fa fa-check fa-fw\"></i> {{skin.label}} <sup *ngIf=\"skin.beta\">beta</sup></a>\n        </section>\n  </form>\n</div>\n"

/***/ }),

/***/ 926:
/***/ (function(module, exports) {

module.exports = "<aside id=\"left-panel\">\n\n  <!-- User info -->\n  <sa-login-info></sa-login-info>\n  <!-- end user info -->\n\n  <nav>\n    <!-- NOTE: Notice the gaps after each icon usage <i></i>..\n    Please note that these links work a bit different than\n    traditional href=\"\" links. See documentation for details.\n    -->\n\n    <ul saSmartMenu>\n\n        <li routerLinkActive=\"active\">\n            <a routerLink=\"/admin/painel\" title=\"Painel\">\n                <i class=\"fa fa-lg fa-fw fa-tachometer\"></i>\n                <span\n                  class=\"menu-item-parent\">{{'Painel' | i18n}}</span>\n                </a>\n        </li>\n        <li>\n          <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-pencil-square-o\"></i> <span\n            class=\"menu-item-parent\">{{'Indicadores' | i18n}}</span></a>\n          <ul>\n            <li routerLinkActive=\"active\" *ngIf=\"userCan('indicador','POST')\">\n              <a routerLink=\"/admin/indicador\">{{'Novo indicador' | i18n}}</a>\n            </li>\n            <li routerLinkActive=\"active\">\n              <a routerLink=\"/admin/indicadorlista\">{{'Lista indicadores' | i18n}}</a>\n            </li>\n            <li routerLinkActive=\"active\" *ngIf=\"false\">\n              <a routerLink=\"/admin/indicadorlistaunidade\">{{'Lista por unidade' | i18n}}</a>\n            </li>\n            <li routerLinkActive=\"active\" *ngIf=\"userCan('importadados','POST')\">\n              <a routerLink=\"/admin/importa/3\">{{'Importa dados' | i18n}}</a>\n            </li>\n            <li routerLinkActive=\"active\">\n              <a routerLink=\"/admin/importa/4\">{{'Formulário de dados' | i18n}}</a>\n            </li>\n          </ul>\n        </li>\n        <li *ngIf=\"!isProduction()\" >\n          <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-table\"></i> <span\n            class=\"menu-item-parent\">{{'Programas/Metas' | i18n}}</span></a>\n          <ul>\n            <li routerLinkActive=\"active\">\n              <a routerLink=\"/admin/programa\">{{'Lista Programas/Metas' | i18n}}</a>\n            </li>\n          </ul>\n        </li>\n        <li >\n          <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-list-alt\"></i> <span\n            class=\"menu-item-parent\">{{'Cadastros Auxiliares' | i18n}}</span></a>\n          <ul>\n            <li routerLinkActive=\"active\">\n              <a routerLink=\"/admin/unidade\">{{'Lista de Unidades' | i18n}}</a>\n            </li>\n            <li routerLinkActive=\"active\">\n              <a routerLink=\"/admin/usuario\">{{'Lista de Usuários' | i18n}}</a>\n            </li>\n            <li routerLinkActive=\"active\" *ngIf=\"userCan('categoria-analise','POST')\">\n              <a routerLink=\"/admin/categoria-analise\">{{'Nova Categoria de Análise' | i18n}}</a>\n            </li>\n            <li routerLinkActive=\"active\">\n              <a routerLink=\"/admin/lista-categoria-analise\">{{'Lista Categorias de Análise' | i18n}}</a>\n            </li>\n            <li routerLinkActive=\"active\" *ngIf=\"userCan('tag','POST')\">\n              <a routerLink=\"/admin/tag\">{{'Novo Grupo de Marcador' | i18n}}</a>\n            </li>\n            <li routerLinkActive=\"active\">\n              <a routerLink=\"/admin/lista-tag\">{{'Lista Grupos de Marcadores' | i18n}}</a>\n            </li>\n            <li routerLinkActive=\"active\" *ngIf=\"userCan('unidade-medida','POST')\">\n              <a routerLink=\"/admin/unidade-medida\">{{'Nova Unidade de Medida' | i18n}}</a>\n            </li>\n            <li routerLinkActive=\"active\">\n              <a routerLink=\"/admin/lista-unidade-medida\">{{'Lista Unidades de Medida' | i18n}}</a>\n            </li>\n            <li routerLinkActive=\"active\" *ngIf=\"userCan('fonte-dados','POST')\">\n              <a routerLink=\"/admin/fonte-dados\">{{'Nova Fonte de Dados' | i18n}}</a>\n            </li>\n            <li routerLinkActive=\"active\">\n              <a routerLink=\"/admin/lista-fonte-dados\">{{'Lista Fonte de Dados' | i18n}}</a>\n            </li>\n          </ul>\n        </li>\n        <li *ngIf=\"false\">\n          <a href=\"#\"><i class=\"fa fa-lg fa-fw fa-bar-chart-o\"></i> <span\n            class=\"menu-item-parent\">{{'Gráficos' | i18n}}</span></a>\n          <ul>\n            <li routerLinkActive=\"active\">\n              <a routerLink=\"/admin/grafico\">{{'Morbidade' | i18n}}</a>\n            </li>\n            <li routerLinkActive=\"active\">\n              <a routerLink=\"/admin/grafico2\">{{'Microcefalia' | i18n}}</a>\n            </li>\n            <li routerLinkActive=\"active\">\n              <a routerLink=\"/graphs/sparklines\">{{'Zika' | i18n}}</a>\n            </li>\n          </ul>\n        </li>\n    </ul>\n  </nav>\n\n  <sa-minify-menu></sa-minify-menu>\n\n</aside>\n"

/***/ }),

/***/ 927:
/***/ (function(module, exports) {

module.exports = "<!-- RIBBON -->\n<div id=\"ribbon\">\n  <ng-template #tipContent><i class=\"text-warning fa fa-warning\"></i> Warning! This will reset all your widget settings.</ng-template>\n\n  <span class=\"ribbon-button-alignment\">\n\t\t\t\t\t<span id=\"refresh\" class=\"btn btn-ribbon\" (click)=\"resetWidgets()\"\n                placement=\"bottom\"\n                [tooltip]=\"tipContent\">\n\t\t\t\t\t\t<i class=\"fa fa-refresh\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t</span>\n  <sa-route-breadcrumbs></sa-route-breadcrumbs>\n</div>\n"

/***/ }),

/***/ 928:
/***/ (function(module, exports) {

module.exports = "<div id=\"shortcut\" [@shortcutState]=\"state\">\n  <ul>\n    <li>\n      <a (click)=\"shortcutTo(['admin/perfil'])\" class=\"jarvismetro-tile big-cubes selected bg-color-pinkDark\"> <span class=\"iconbox\"> <i\n        class=\"fa fa-user fa-4x\"></i> <span>Profile </span> </span> </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 929:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-info\">\n  <span *ngIf=\"user?.picture\"><a (click)=\"toggleShortcut()\">\n\t   <img [src]=\"user.picture\" alt=\"me\"\n          class=\"online\"/><span>{{user.apelido }}</span> <i class=\"fa fa-angle-down\"></i>\n    </a>\n   </span>\n</div>\n"

/***/ }),

/***/ 930:
/***/ (function(module, exports) {

module.exports = "<div bsModal #seeCommandsModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" [config]=\"{}\"\n     role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n\n        <h1><i class=\"fa fa-microphone text-muted\"></i>&nbsp;&nbsp; SmartAdmin Voice Command</h1>\n        <hr class=\"simple\">\n        <h5>Instruction</h5>\n\n        Click <span class=\"text-success\">\"Allow\"</span> to access your microphone and activate Voice Command.\n        You will notice a <span class=\"text-primary\"><strong>BLUE</strong> Flash</span> on the microphone icon\n        indicating activation.\n        The icon will appear <span class=\"text-danger\"><strong>RED</strong></span> <span class=\"label label-danger\"><i\n          class=\"fa fa-microphone fa-lg\"></i></span> if you <span class=\"text-danger\">\"Deny\"</span> access or don't have\n        any microphone installed.\n        <br>\n        <br>\n        As a security precaution, your browser will disconnect the microphone every 60 to 120 seconds (sooner if not\n        being used). In which case Voice Command will prompt you again to <span class=\"text-success\">\"Allow\"</span> or\n        <span class=\"text-danger\">\"Deny\"</span> access to your microphone.\n        <br>\n        <br>\n        If you host your page over <strong>http<span class=\"text-success\">s</span></strong> (secure socket layer)\n        protocol you can wave this security measure and have an unintrupted Voice Command.\n        <br>\n        <br>\n        <h5>Commands</h5>\n        <ul>\n          <li>\n            <strong>'show' </strong> then say the <strong>*page*</strong> you want to go to. For example <strong>\"show\n            inbox\"</strong> or <strong>\"show calendar\"</strong>\n          </li>\n          <li>\n            <strong>'mute' </strong> - mutes all sound effects for the theme.\n          </li>\n          <li>\n            <strong>'sound on'</strong> - unmutes all sound effects for the theme.\n          </li>\n          <li>\n            <span class=\"text-danger\"><strong>'stop'</strong></span> - deactivates voice command.\n          </li>\n          <li>\n            <span class=\"text-primary\"><strong>'help'</strong></span> - brings up the command list\n          </li>\n          <li>\n            <span class=\"text-danger\"><strong>'got it'</strong></span> - closes help modal\n          </li>\n          <li>\n            <strong>'hide navigation'</strong> - toggle navigation collapse\n          </li>\n          <li>\n            <strong>'show navigation'</strong> - toggle navigation to open (can be used again to close)\n          </li>\n          <li>\n            <strong>'scroll up'</strong> - scrolls to the top of the page\n          </li>\n          <li>\n            <strong>'scroll down'</strong> - scrollts to the bottom of the page\n          </li>\n          <li>\n            <strong>'go back' </strong> - goes back in history (history -1 click)\n          </li>\n          <li>\n            <strong>'logout'</strong> - logs you out\n          </li>\n        </ul>\n        <br>\n        <h5>Adding your own commands</h5>\n        Voice Command supports up to 80 languages. Adding your own commands is extreamly easy. All commands are stored\n        inside <strong>smartadmin.config.js</strong> file under the <code>config.voice_commands = {{'{...}'}}</code>.\n\n        <hr class=\"simple\">\n        <div class=\"text-right\">\n          <button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"seeCommandsModal.hide()\">\n            Got it!\n          </button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ })

},[1192]);
//# sourceMappingURL=main.bundle.js.map