import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().min(8).required(),
});
