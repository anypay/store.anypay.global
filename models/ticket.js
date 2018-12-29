'use strict';
module.exports = function(sequelize, DataTypes) {
  var Ticket = sequelize.define('Ticket', {
    ticket_purchase_id: DataTypes.INTEGER,
    uid: DataTypes.STRING,
    checked_at: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Ticket;
};