const CONSUL = process.env.CONSUL_SERVICE_HOST || 'localhost';

('use strict');

const Chairo = require('chairo');

const Hapi = require('hapi');

const server = Hapi.server({
  port: 3000,
  host: '0.0.0.0'
});

server.route({
  method: 'GET',
  path: '/math/add',
  handler: request => {
    return request.seneca.actAsync('role:math,cmd:add', {
      left: request.query.left,
      right: request.query.right
    });
  }
});

server.route({
  method: 'GET',
  path: '/',
  handler: request => {
    return request.seneca.actAsync('role:ping,cmd:test');
  }
});

server.route({
  method: 'GET',
  path: '/ping/math',
  handler: request => {
    return request.seneca.actAsync('role:ping,service:math');
  }
});

(async () => {
  await server.register({ plugin: Chairo });

  if (process.env.NODE_ENV === 'production') {
    server.seneca.use('consul-registry', {
      host: CONSUL
    });
    server.seneca.use('mesh', {
      host: '@eth0',
      discover: {
        registry: {
          active: true
        }
      },
      sneeze: { silent: false }
    });
  } else {
    server.seneca.use('mesh', {
      bases: ['127.0.0.1']
    });
  }

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
})();

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});
