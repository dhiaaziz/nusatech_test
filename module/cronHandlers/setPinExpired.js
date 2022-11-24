const Pin = require("../pin/model");
const moment = require('moment');
const { Op } = require("sequelize");

module.exports = () => {
  console.log('JOBS SET PIN EXPIRED');
  // console.log(new Date());
  // console.log( moment().subtract(1, 'hours').toDate())
  const pin = Pin.findAll({
    //where updated_at < 1 hour ago
    where: {
      status: "registered",
      updated_at: {
        [Op.lt]: moment().subtract(1, 'hours').toDate()
      }
    },
  })
    .then((data) => {
      data.forEach((pin) => {
        pin.update({
          status: "expired",
        })
      })
    })
}