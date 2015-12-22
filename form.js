var config = require('./config');

module.exports = {
  UMkey: config.Retail,
  UMredir: 'http://localhost:8080/api/paid',
  UMcard : '4000100011112224',
  UMexpir: '0915',
  UMamount : 10.00
};
