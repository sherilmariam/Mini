const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'shwethamercelin', 
  user: 'root', 
  password: 'mariapricepalate',
  database: 'pricepalate',
  connectionLimit: 5
});

module.exports = pool;
