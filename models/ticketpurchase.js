'use strict';
module.exports = function(sequelize, DataTypes) {
  var TicketPurchase = sequelize.define('TicketPurchase', {
    uid: DataTypes.STRING,
    invoice_uid: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return TicketPurchase;
};