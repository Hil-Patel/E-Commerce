import * as yup from "yup"

export const LoginSchemas=yup.object({
    username:yup.string().min(2).required("Username is required"),
    password:yup.string().min(6).required("Password is required")
})