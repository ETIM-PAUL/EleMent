import * as Yup from "yup";

export const yupProfileValidation = Yup.object().shape({
  name: Yup.string()
    .required()
    .nullable()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .min(3, "Must at least be more than 3 characters"),
  email: Yup.string().email().required(),
  address: Yup.mixed().required(),
});