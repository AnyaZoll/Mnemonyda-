class ValidateForm {
    constructor(typeStrategy, formData){
       this.typeStrategy = typeStrategy;
       this.formData = formData;
    }

    setStrategy(typeStrategy){
        this.formData = this.formData;
    }

    validate(){
        return this.typeStrategy(this.formData);
    }

    validateEmail(formData){
        if(formData.email === ""){
            return "Введите email";
        }
        else if (!/\S+@\S+\.S+/.test(formData.email)){
            return "Введите корректный адрес электронной почты";
        }
        return null;
    }

    validatePassword(formData){
        if(formData.password === ""){
            return "Введите пароль";
        }

    }
}

