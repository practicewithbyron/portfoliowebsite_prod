import validator from "validator";

export function IsEmail(email)
{
    return validator.isEmail(email);
}