const admin = require("firebase-admin");
const filterorderC = require("./filterorderC");
const filterserveC = require("./filterserveC");
const filterorderG = require("./filterorderG");
const filterserveG = require("./filterserveG");
const filterorderS = require("./filterorderS");
const filterserveS = require("./filterserveS");
const filterorderT = require("./filterorderT");
const filterserveT = require("./filterserveT");
const filterorderY = require("./filterorderY");
const filterserveY = require("./filterserveY");
const filterdisplayC = require("./filterdisplayC");
const filterdisplayG = require("./filterdisplayG");
const filterdisplayS = require("./filterdisplayS");
const filterdisplayT = require("./filterdisplayT");
const filterdisplayY = require("./filterdisplayY");
const queueProcess = require("./queueprocess");
admin.initializeApp();

exports.KitchenDatabaseC = filterorderC;
exports.DeliveryDatabaseC = filterserveC;
exports.DisplayDatabaseC = filterdisplayC;
exports.KitchenDatabaseG = filterorderG;
exports.DeliveryDatabaseG = filterserveG;
exports.DisplayDatabaseG = filterdisplayG;
exports.KitchenDatabaseS = filterorderS;
exports.DeliveryDatabaseS = filterserveS;
exports.DisplayDatabaseS = filterdisplayS;
exports.KitchenDatabaseT = filterorderT;
exports.DeliveryDatabaseT = filterserveT;
exports.DisplayDatabaseT = filterdisplayT;
exports.KitchenDatabaseY = filterorderY;
exports.DeliveryDatabaseY = filterserveY;
exports.DisplayDatabaseY = filterdisplayY;
exports.FunctionQueue = queueProcess;

