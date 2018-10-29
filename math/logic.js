module.exports = function mathLogic(options) {
  const seneca = this;

  seneca.add('role:math,cmd:add', function(msg, done) {
    done(null, { answer: parseInt(msg.left + msg.right), service: seneca.id });
  });

  seneca.add('role:math,cmd:divide', function(msg, done) {
    done(null, { answer: msg.left / msg.right, service: seneca.id });
  });

  seneca.add('role:math,cmd:ping', function(msg, done) {
    done(null, { answer: 'Helo from Math, id: ' + seneca.id });
  });
};
