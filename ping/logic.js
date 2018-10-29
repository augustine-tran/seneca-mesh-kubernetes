module.exports = function pingLogic(options) {
  const seneca = this;

  seneca.add('role:ping,cmd:test', function(msg, done) {
    done(null, { answer: 'aloha! service id: ' + this.id });
  });

  seneca.add('role:ping,service:math', function(msg, done) {
    seneca.act('role:math,cmd:ping', (err, res) => {
      if (err) {
        return done(null, { ok: false, why: err.message });
      }

      return done(null, res);
    });
  });
};
