const PORT = process.env.PORT || 10000;

const Seneca = require('seneca');

Seneca({ tag: 'math' })
  .test('print')
  .use('seneca-repl', {
    host: '0.0.0.0',
    port: PORT
  })
  .use('mesh', {
    isbase: true
  })
  .ready(function ready() {
    console.log(`Repl service is ready on port ${PORT}!`, this.id);
  });
