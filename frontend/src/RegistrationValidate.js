function Validate(values){
    let error = {}
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.username === ""){
        error.username = "Please Enter username"
    }else{
        error.username =""
    }

    if(values.password === ""){
        error.password = "Please Enter a password"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Password didn't match"
    }else {
        error.password = ""
    }

    if(values.pinnumber === ""){
        error.pinnumber = "Please Enter pinnumber"
    }else{
        error.pinnumber =""
    }
    return error;
    
}
export default Validate; 