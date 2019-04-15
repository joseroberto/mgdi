// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  // url: 'http://mgdiapi.saude.gov.br',
  url: 'http://mgdi-api-test-digisus.cloud.saude.gov',
  API_URL: "/api",
  aplicacao: 1, // codigo da aplicacao MGI
  urlNewUser: "http://aplicacao-homologacao.saude.gov.br/datasus-scpaweb-usuario/visao/login/login-sistema.jsf",
  urlForgetPassword: "http://aplicacao-homologacao.saude.gov.br/datasus-scpaweb-usuario/visao/login/gerar-senha.jsf"
};
