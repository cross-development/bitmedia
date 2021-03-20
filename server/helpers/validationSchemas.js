//Validate
const Joi = require('joi');

/**
 * =============== Query schemas =============================================
 */
const querySchema = Joi.object({
	page: Joi.number().min(1).default(1),
	count: Joi.number()
		.custom((value, helpers) => {
			const isValidId = value >= 1 && value <= 50;

			return !isValidId
				? helpers.message({
						custom: "Invalid 'count'. Must be a number and be in the range from 1 to 50",
				  })
				: value;
		})
		.default(1),

	from: Joi.string().custom((value, helpers) => {
		const dateRegex = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
		const isValidDate = dateRegex.test(value);

		return !isValidDate
			? helpers.message({ custom: "Invalid 'date'. Please, use YYYY-MM-DD string format" })
			: value;
	}),

	to: Joi.string().custom((value, helpers) => {
		const dateRegex = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
		const isValidDate = dateRegex.test(value);

		return !isValidDate
			? helpers.message({ custom: "Invalid 'date'. Please, use YYYY-MM-DD string format" })
			: value;
	}),
});

/**
 * =============== Params schemas =============================================
 */
const paramSchema = Joi.object({
	id: Joi.custom((value, helpers) => {
		const isValidId = Number(value) || !isNaN(value);

		return !isValidId ? helpers.message({ custom: "Invalid 'id'. Must be a number" }) : value;
	}).required(),
});

module.exports = { querySchema, paramSchema };
