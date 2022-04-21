

const Validation = (values) => {

    let errors = {};
    if (!values.email) {
        errors.email = "email required "
        errors.submitStatus = false
    }

    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
        errors.email = "invailed email"
        errors.submitStatus = false
    }
    else if (!/^\S/.test(values.email)) {
        errors.email = "remove white space ";
        errors.submitStatus = false

    }
    else {
        errors.submitStatus = true
    }
    if (!values.password) {
        errors.password = "password required "
        errors.submitStatus = false
    }

    else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(values.password)) {
        errors.password = "invailed password"
        errors.submitStatus = false
    }
    else {
        errors.submitStatus = true
    }
    if (!values.contactnumber) {
        errors.Mnumber = "Mobile Number required "
        errors.submitStatus = false
    }

    else if (!/^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/.test(values.contactnumber)) {
        errors.Mnumber = "invailed Monile Number"
        errors.submitStatus = false
    }
    else {
        errors.submitStatus = true
    }



    console.log(errors)
    return errors;
}

export default Validation