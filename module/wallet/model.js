const { DataTypes } = require("sequelize");
const sq = require("../../config/connection");

const currency = require("../currency/model");
const user = require("../user/model");

const wallet = sq.define(
  "wallet",
  {
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },
    id_currency: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE,
    }
  },
  {
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    freezeTableName: true,
  }
);

wallet.belongsTo(currency, { foreignKey: "id_currency" });
currency.hasMany(wallet, { foreignKey: "id_currency" });

wallet.belongsTo(user, { foreignKey: "id_user" });
user.hasMany(wallet, { foreignKey: "id_user" });




module.exports = wallet;