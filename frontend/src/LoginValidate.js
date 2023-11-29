function Validate(values){
    let errors = {}
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.username === ""){
        errors.username = "Please Enter username"
    }else{
        errors.username =""
    }

    if(values.password === ""){
        errors.password = "Please Enter a password"
    }
    else if(!password_pattern.test(values.password)){
        errors.password = "Password didn't match"
    }else {
        errors.password = ""
    }
    return errors;
    
}
export default Validate;