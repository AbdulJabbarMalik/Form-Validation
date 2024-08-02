
const em = document.querySelector(".email");
const nam = document.querySelector(".name");
const mess = document.querySelector(".message");
const form = document.getElementById("form")
const btn = document.querySelector(".btn");


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    
    errorDisplay.innerText = '';
    
};


const isValidEmail = (email) => {
    const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
const validateInputs = () => {
    const usernameValue = nam.value.trim();
    const emailValue = em.value.trim();
    const messagevalue = mess.value.trim();
   

    if(usernameValue === '') {
        setError(nam, 'Username is required');
    } else {
        setSuccess(nam);
    }

    if(messagevalue === '') {
        setError(mess, 'message is required');
    } else {
        setSuccess(mess);
    }

    if(emailValue === '') {
        setError(em, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(em, 'Provide a valid email address');
    } else {
        setSuccess(em);
    }


};




