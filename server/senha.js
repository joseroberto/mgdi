
const crypto = require('crypto');

if (process.argv.length < 4){
    console.log( 'Uso:  node senha.js <user> <password>')
    process.exit()
}
user = process.argv[2]
senha = process.argv[3]
buffer = crypto.createHash('sha256').update(user+senha, 'utf8').digest()
hash = buffer.toString('hex')
console.log(`update dbmgdi.tb_user_mgi set by_senha_hash = E'\\\\x${hash}' where ds_login = '${user}';`)