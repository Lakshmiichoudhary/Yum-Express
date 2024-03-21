export const validation = (email, password, ConfirmPassword, isLogin) => {
    if (!email || !password) {
        return "All fields are required";
    }

    if (!isLogin && ConfirmPassword === "") {
        return "Confirm Password is required";
    }

    const emailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    if (!emailValid) {
        return "Enter valid email";
    }

    if (!passwordValid) {
        return "Your password is not strong enough";
    }

    if (ConfirmPassword && password !== ConfirmPassword) {
        return "Password did not match";
    }

    return null;
};
