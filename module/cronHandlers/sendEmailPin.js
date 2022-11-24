const Pin = require("../pin/model");
const User = require("../user/model");

module.exports = () => {
  console.log('JOBS SEND EMAIL PIN');
  const pin = Pin.findAll({
    where: {
      status: "pending",
    },
  })
    .then((data) => {
      console.log(data);
      data.forEach((pin) => {
        pin.update({
          status: "registered",
        })
      })
    })
    .catch((err) => {
      console.log(err);
    });
  // console.log(pin);
}