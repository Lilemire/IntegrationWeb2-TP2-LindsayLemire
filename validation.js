const form = document.getElementById('form');
const courriel = document.getElementById('courrielInput')

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('succes');
};

const setSucces = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = ' ';
    inputControl.classList.add('succes');
    inputControl.classList.remove('error');
};

const isValidCourriel = courriel => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(courriel).toLowerCase());
};

const validateForm = () => {
    let noError = true;
    const courrielValue = courriel.ariaValueMax.trim();

    if (courrielValue === ' ') {
        setError(courriel, 'Le courriel est necessaire');
        noError = false;
    } else if (courrielValue.length < 8) {
        setError(courriel, 'Entrez un courriel valide');
        noError = false;
    } else {
        setSucces(courriel);
    }

    return noError
};