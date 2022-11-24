const router = require("express").Router();
const user = require("../module/user/route");
const wallet = require("../module/wallet/route");
const currency = require("../module/currency/route");
const pin = require("../module/pin/route");



router.get("/", (req, res) => {
  return res.status(200).json({ 
    success: true,
    message: "Welcome to the API",
  })
});

router.use("/user", user);
// router.use("/wallet", wallet);
// router.use("/currency", currency);
// router.use("/pin", pin);


module.exports = router;
