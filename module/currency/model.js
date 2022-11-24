const { DataTypes } = require("sequelize");
const sq = require("../../config/connection");

const currency = sq.define(
  "currency",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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

module.exports = currency;