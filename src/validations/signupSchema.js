import {object, ref, string} from 'yup'

export const signupSchema = object({
    email:string()
        .required({"empty_email": "Please, fill email box"})
        .email({"invalid_email":"Email is not valid"}),
    password:string()
        .required({"empty_password": "Please, fill password box"})
        .min(6,{"invalid_password":"Password must have at least 6 char."}),
    confirmPassword:string()
        .required({"invalid_confirm_password":"Please, confirm password"})
        .oneOf([ref('password'),null],{"invalid_match_password":"Passwords must match"}),

})