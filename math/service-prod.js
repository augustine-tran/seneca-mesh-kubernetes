var CONSUL = process.env.CONSUL_SERVICE_HOST || 'localhost';

var Seneca = require('seneca');

Seneca({ tag: 'math' })
  .test('print')
  .use('./logic')
  .use('consul-registry', {
    host: CONSUL
  })

  .use('mesh', {
    //bases: BASES,
    host: '@eth0',
    pin: 'role:math',
    discover: {
      registry: {
        active: true
      }
    },
    sneeze: { silent: false }
  })
  .ready(function ready() {
    console.log('Math service is ready!', this.id);
  });
