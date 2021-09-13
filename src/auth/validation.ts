import Joi from "@hapi/joi";

const registerValidation = (data: any) => {
  const schema = {
    name: Joi.string().min(6),
    email: Joi.string().min(6).email(),
    password: Joi.string().min(6),
  };

  return Joi.valid(data, schema);
};

const loginValidation = (data: any) => {
  const schema = {
    email: Joi.string().min(6).email(),
    password: Joi.string().min(6),
  };

  return Joi.valid(data, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.LoginValidation = loginValidation;
