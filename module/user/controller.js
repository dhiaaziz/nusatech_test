const User = require("./model");
const Pin = require("../pin/model");
const bcrypt = require("../../helpers/bcrypt");
const jwt = require("../../helpers/jwt");

const ApiError = require("../../helpers/api-error");

const signup = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    // return res.send(pinCreate);
    console.log(req.body);
    if (!email || !password || !name) {
      throw ApiError.badRequest ("email, password, name is required");
    }
    let encryptedPassword = bcrypt.hashPassword(password);

    const userGet = await User.findOne({
      where: {
        email: email,
      },
    })
    if (userGet) throw ApiError.badRequest("email already exist");

    const data = await User.create({
      email,
      password: encryptedPassword,
      name,
    });

    const randomString = Math.random().toString(36).substring(2, 8);
    let pin
    pin = await Pin.findOne({
      where: {
        id_user: data.id,
        status: "pending",
    }
    });

    if(!pin){{
        pin = Pin.create({
          pin: randomString,
          id_user: data.id,
        });
      } {
        pin = Pin.update({
          pin: randomString,
        })
      }
    }

    delete data.dataValues.password;
    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw ApiError.badRequest ("email, password is required");
    }
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    if (!user) throw ApiError.badRequest("email or password is wrong");

    if(user.status === "pending") throw ApiError.badRequest("please verify your email first");

    const isPasswordValid = bcrypt.comparePassword(password, user.password);
    if (!isPasswordValid) throw ApiError.badRequest("email or password is wrong");
    const token = jwt.generateToken({
      id: user.id,
      email: user.email,
      name: user.name,
    });
    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      token,
      data : {
        email: user.email,
        name: user.name,
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
  signin,
}