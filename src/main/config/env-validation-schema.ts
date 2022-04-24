import * as Joi from '@hapi/joi';

export const EnvValidationSchema = Joi.object({
  STAGE: Joi.string().required().valid('test', 'prod', 'dev'),
  PORT: Joi.number().default(3000).required(),
  CORS_ORIGIN: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
  URL: Joi.string().required(),
});
