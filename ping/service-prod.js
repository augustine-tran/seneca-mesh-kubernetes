//var BASES = process.env.BASES.split(',')
var CONSUL = process.env.CONSUL_SERVICE_HOST || 'localhost';

var Seneca = require('seneca');

Seneca({ tag: 'ping' })
  .test('print')
  .use('./logic')
  .use('consul-registry', {
    host: CONSUL
  })

  .use('mesh', {
    //bases: BASES,
    host: '@eth0',
    pin: 'role:ping',
    discover: {
      registry: {
        active: true
      }
    },
    sneeze: { silent: false }
  })

  .ready(function ready() {
    console.log('Ping service is ready!', this.id);
  });
