const validation = (userData, setErrors) => {
    const errors = {};

    if(!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(userData.email)){
        errors.email = 'Invalid email address';
    }
    if (!userData.email){
        errors.email = 'Email address is required';
    }
    if(userData.email.length > 35){
        errors.email = 'Email address is too long';
    }

    if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(userData.password)){
        errors.password = 'Invalid password';
    }

    setErrors(errors);

    return errors;
}

export default validation;

//^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$