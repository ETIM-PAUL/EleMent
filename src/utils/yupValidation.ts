import * as Yup from "yup";

export const yupProfileValidation = Yup.object().shape({
  name: Yup.string()
    .required()
    .nullable()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .min(3, "Must at least be more than 3 characters"),
    rollNumber: Yup.number().required(),
  email: Yup.string().email().required(),
  address: Yup.mixed().required(),
});

export const yupBillValidation = Yup.object().shape({
  tellerNumber: Yup.number()
    .required()
    .nullable()
    .min(3, "Must at least be more than 3 characters"),
    DOP: Yup.date().required().max(new Date()),
    billType: Yup.mixed().required(),
});