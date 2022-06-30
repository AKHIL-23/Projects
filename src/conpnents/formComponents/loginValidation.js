const loginValidation = (values) => {
    let errors = {};
    errors.submitStatus = false
    //Validation for email 
    if (!values.email) {
        errors.email = "email required "
        // errors.submitStatus = false
    }

    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
        errors.email = "invailed email"
        // errors.submitStatus = false
    }
    else if (!/^\S/.test(values.email)) {
        errors.email = "remove white space ";
        // errors.submitStatus = false

    }

    //validation for password
    else if (!values.password) {
        errors.password = "password required "
        // errors.submitStatus = false
    }

    else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(values.password)) {
        errors.password = "invailed password"
        // errors.submitStatus = false
    }

    //  validation for Role 

    else {
        errors.submitStatus = true
    }
    console.log(errors)
    return errors;

}
export default loginValidation