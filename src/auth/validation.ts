import Joi, { required } from "joi";

export const registerValidation = (data: any) => {
  const schema = Joi.object({
    userName: Joi.string().min(6).alphanum().required(),
    DOB: Joi.date(),
    email: Joi.string().email(),
    password: Joi.string().min(6),
  });

  return schema.validate(data);
};

export const loginValidation = (data: any) => {
  const schema = Joi.object({
    email: Joi.string().min(6).email(),
    password: Joi.string().min(6),
  });

  return Joi.valid(data, schema);
};
