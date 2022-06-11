

const Validation = (values) => {

    let errors = {};
    errors.submitStatus = false

    if (!values.username) {
        errors.username = "User Name Required"
    }
    else if ((values.username.trim()).length < 3) {
        errors.username = "User Name Min Contain 3 Chracters"
        console.log((values.username.trim()).length);
    }
    else if (!values.email) {
        // ------------------------- Validation for email start from here ---------------------- 
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
        //---------------------------------validation for password start from here---------------------------------------------------------
    } else if (!values.password) {
        errors.password = "password required "
        // errors.submitStatus = false
    }

    else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(values.password)) {
        errors.password = "invailed password"
        // errors.submitStatus = false
    }
    else if (!values.confirmPassword) {
        errors.confirmPassword = "Confirm Password required "
    }
    else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "password and Confirm Password can't Match"
    }
    else if (!values.contactNumber) {
        //---------------------------------Validation for contact number start from here---------------------------------------------
        errors.Mnumber = "Mobile Number required "
        // errors.submitStatus = false
    }
    else if (!/^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/.test(values.contactNumber)) {
        errors.Mnumber = "invailed mobile Number"
        // errors.submitStatus = false
    }
    //     // ---------------------------Validation for role start from here ----------------------
    else if (!values.role) {
        errors.role = "Role Required"

    }
    // else if (values.role !== "Student" && values.role !== "Faculty") {
    //     errors.role = "Invailed role option please select form the given option"
    //     console.log(values.role);

    // }
    else if (!values.gender) {
        // -------------------validation for gender start from here --------------------
        errors.gender = "Gender Required"

    }
    else if (values.gender !== "Male" && values.gender !== "Female" && values.gender !== "Others") {
        errors.gender = "Invalied gender option"

    }
    else {
        errors.submitStatus = true
    }



    console.log(errors)
    return errors;
}

export default Validation