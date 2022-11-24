const { DataTypes } = require("sequelize");
const sq = require("../../config/connection");

const user =  require("../user/model");

const pin = sq.define(
  "pin",
  {
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pin: {
      type: DataTypes.STRING(6),
      allowNull: false,
      unique: true,
    },
    status: {
      type: DataTypes.ENUM(
        ["pending", "registered", "verified", 'expired'],
      ),
      allowNull: false,
      defaultValue: "pending",
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

pin.belongsTo(user, { foreignKey: "id_user" });
user.hasMany(pin, { foreignKey: "id_user" });


module.exports = pin;