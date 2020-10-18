'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerRoutes = registerRoutes;

var _tasks = require('./api/task/tasks.routes');

var _tasks2 = _interopRequireDefault(_tasks);

var _auth = require('./api/auth/auth.routes');

var _auth2 = _interopRequireDefault(_auth);

var _register = require('./api/register/register.routes');

var _register2 = _interopRequireDefault(_register);

var _user = require('./api/user/user.routes');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerRoutes(app) {
  app.use('/api', _tasks2.default);
  app.use('/api', _auth2.default);
  app.use('/api', _register2.default);
  app.use('/api', _user2.default);
}