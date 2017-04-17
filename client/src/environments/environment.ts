// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  url: 'http://localhost:8000',
  API_URL: "api",
  urlNewUser: "http://srvjddf72.saude.gov:10480/datasus-scpaweb-usuario/visao/login/login-sistema.jsf",
  urlForgetPassword: "http://srvjddf72.saude.gov:10480/datasus-scpaweb-usuario/visao/login/gerar-senha.jsf"
};
