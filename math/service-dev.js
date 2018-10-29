const Seneca = require('seneca');

Seneca({ tag: 'math' })
  .test('print')
  .use('./logic')

  .use('mesh', {
    pin: 'role:math',
    bases: ['127.0.0.1']
  })
  .ready(function ready() {
    console.log(
      'Math service is ready!',
      this.id,
      Object.keys(this.list_plugins())
    );
  });
