'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
exports.create = create;
exports.update = update;
exports.remove = remove;
exports.show = show;

var _stringUtil = require('../../utilities/string-util');

function index(req, res) {
  // FIND ALL TASKS
  return res.status(200).json();
}
function create(req, res) {
  // CREATE TASK
  return res.status(201).json();
}

function update(req, res) {
  // UPDATE TASK
  return res.status(204).json();
}

function remove(req, res) {
  // DELETE TASK
  return res.status(204).json();
}

function show(req, res) {
  // GET TASK BY ID
  return res.status(200).json();
}