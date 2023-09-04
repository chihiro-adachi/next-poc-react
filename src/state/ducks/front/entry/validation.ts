import Joi from "joi";
import { tlds } from '@hapi/tlds';

// Review Form
export const entryForm = Joi.object({
    name_name01: Joi.string().required().max(255),
    name_name02: Joi.string().required().max(255),
    kana_kana01: Joi.string().required().max(255),
    kana_kana02: Joi.string().required().max(255),
    email: Joi.string().required().max(255).email({ tlds: { allow: tlds }} as Joi.EmailOptions),
    address_pref: Joi.string().required().max(255),
    postal_code: Joi.string().required().max(9),
    phone_number: Joi.string().required().max(11),
    address_addr01: Joi.string().required().max(255),
    address_addr02: Joi.string().required().max(255),
    plain_password: Joi.string().required().max(255).min(8),
});

const validationForms = {
    entryForm
}

export default validationForms;
