

const Validation = (values) => {

    let errors = {};

    //Validation for name 
    if (!values.username) {
        errors.name = "required name  ";
        errors.submitStatus = false

    }
    else if (/^[a-zA-Z ]{30}$/.test(values.name)) {
        errors.name = "invalid  name  ";
        errors.submitStatus = false

    }
    //validation for email
    else if (!values.email) {
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
    //validation for  contact number 
    else if (!values.contactNumber) {
        errors.Mnumber = "Mobile Number required "
        errors.submitStatus = false
    }
    else if (!/^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/.test(values.contactNumber)) {
        errors.Mnumber = "invalid mobile number ";
        errors.submitStatus = false;
    }
    //Admission and passout data validation 
    else if (!values.admission_date) {
        errors.admission_date = "Admission data required"
        errors.submitStatus = false

    }

    //validation for address 
    else if (!values.address) {
        errors.address = "Address required"
        errors.submitStatus = false

    }
    //validation for age 
    else if (!values.age) {
        errors.age = "age required "
        errors.submitStatus = false

    }
    else if (values.age < 18) {
        errors.age = "age should be  18+"
        errors.submitStatus = false


    }
    else if (values.age > 35) {
        errors.age = "age should be less than 35"
        errors.submitStatus = false


    }
    //validation for city 
    else if (!values.city) {
        errors.city = "city required"
        errors.submitStatus = false

    }
    //state validation 
    else if (!values.state) {
        errors.state = " select your state required"
        errors.submitStatus = false


    }
    // if all contidition willfalse than submit true
    else {
        errors.submitStatus = true

    }



    return errors;
}

export default Validation