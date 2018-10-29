const Seneca = require('seneca');

Seneca({ tag: 'ping' })
  .test('print')
  .use('./logic')

  .use('mesh', {
    pin: 'role:ping',
    bases: ['127.0.0.1']
  })
  .ready(function ready() {
    console.log(
      'Ping service is ready!',
      this.id,
      Object.keys(this.list_plugins())
    );
  });
