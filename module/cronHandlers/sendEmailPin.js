const Pin = require("../pin/model");
const User = require("../user/model");

const mailHelper = require('../../helpers/mail');
// mail.kirim(`azizwkwkwk@gmail.com`, `PIN REGISTRASI APLIKASI NUSATECH`, `<h2 style="text-align: center;">PIN REGISTRASI</h2><h1 style="text-align: center"> ok </h1>`)


module.exports = () => {
  console.log('JOBS SEND EMAIL PIN');
  const pin = Pin.findAll({
    where: {
      status: "pending",
    },
  })
    .then((data) => {
      // console.log(data);
      data.forEach((pin) => {
        // console.log(pin);
        const userRelated = User.findOne({
          where: {
            id: pin.id_user,
          },
        })
          .then((user) => {
            // console.log(user);
            user.update({
              status: "registered",
            })
            mailHelper.send(user.email, `PIN REGISTRASI APLIKASI NUSATECH`, `<h2 style="text-align: center;">PIN REGISTRASI</h2><h1 style="text-align: center"> ${pin.pin} </h1>`)
          })
          .catch((err) => {
            console.log(err);
          })
        // mailHelper.send(pin.user.email, `PIN REGISTRASI APLIKASI NUSATECH`, `<h2 style="text-align: center;">PIN REGISTRASI</h2><h1 style="text-align: center"> ${pin.pin} </h1>`)
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