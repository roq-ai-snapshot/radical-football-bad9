import * as yup from 'yup';
import { parentRequestValidationSchema } from 'validationSchema/parent-requests';

export const playerValidationSchema = yup.object().shape({
  position: yup.string().required(),
  date_of_birth: yup.date().required(),
  height: yup.number().integer().required(),
  weight: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  academy_id: yup.string().nullable().required(),
  parent_request: yup.array().of(parentRequestValidationSchema),
});
