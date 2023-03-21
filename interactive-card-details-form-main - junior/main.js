const nroCard = document.querySelector('.nroCard');
const nameCard = document.querySelector('.nameCard');
const vencCardMonth = document.querySelector('.vencCardMonth');
const vencCardYear = document.querySelector('.vencCardYear');
const cvcCard = document.querySelector('.cvcCard');
const containerDatos = document.querySelector('.containerDatos');
const formDatosUsuario = document.querySelector('.formDatosUsuario');
const containerCentral = document.querySelector('.containerCentral');
const container = document.querySelector('.container');

const btnConfirm = document.querySelector('.btnConfirm');

const inputName = document.querySelector('.inputName');
const inputNroCard = document.querySelector('.inputNroTarjeta');
const inputMonth = document.querySelector('.inputMonth');
const inputYear = document.querySelector('.inputYear');
const inputCVC = document.querySelector('.inputCVC');


const errorName = document.createElement('p');
const errorNumber = document.createElement('p');
const errorMonth = document.createElement('p');
const errorYear = document.createElement('p');
const errorCVC = document.createElement('p');

let quantityName = 0;
let quantityNumber = 0;
let quantityMonth = 0;
let quantityYear = 0;
let quantityCVC = 0;


inputMonth.addEventListener('keypress', (event) => {
   
    let month = vencCardMonth.innerHTML + event.key;
    let text = month;

    if (vencCardMonth.innerHTML.length < 2 && Number(month) < 13) {
        vencCardMonth.innerHTML += event.key;
    } 

    if (Number(month) > 12) {
        text = text.slice(0, text.length - 1);
        // console.log(text)
        
        month = '';
    }
});

inputMonth.addEventListener("keyup", (event) => {

    if (event.key === "Backspace") {
        let text = vencCardMonth.innerHTML;
        quantityMonth = vencCardMonth.innerHTML;
        text = text.slice(0, text.length - 1);
        quantityMonth = quantityMonth.slice(0, text.length - 1);
        vencCardMonth.innerHTML = text;

        if (quantityMonth.length < 1) {
            errorMonth.innerHTML = '';
        }
    }
});

inputYear.addEventListener('keypress', (event) => {
    // inputMonth.value = "";
    if (vencCardYear.innerHTML.length === 0) {
        vencCardYear.innerHTML += '/'
    }
    if (vencCardYear.innerHTML.length < 3) {
        vencCardYear.innerHTML += event.key;
    }
});

inputYear.addEventListener("keyup", (event) => {

    if (event.key === "Backspace") {
        let text = vencCardYear.innerHTML;
        quantityYear = vencCardYear.innerHTML;
        text = text.slice(0, text.length - 1);
        quantityYear = quantityYear.slice(0, text.length - 1);
        vencCardYear.innerHTML = text;


        console.log(quantityYear.length)
        if (quantityYear.length < 1) {
            errorMonth.innerHTML = '';
            console.log( 'if (quantityYear.length < 1)', quantityYear.length)
        }

        if (vencCardYear.innerHTML.length === 1) {
            vencCardYear.innerHTML = ''
        }
    }
});

inputCVC.addEventListener('keypress', (event) => {
    // console.log('inputCVC entra??')
    if (cvcCard.innerHTML.length < 3) {
        cvcCard.innerHTML += event.key;
    }
});

inputCVC.addEventListener("keyup", (event) => {

    if (event.key === "Backspace") {
        let text = cvcCard.innerHTML;
        quantityCVC = cvcCard.innerHTML;
        text = text.slice(0, text.length - 1);
        quantityCVC = quantityCVC.slice(0, text.length - 1);
        cvcCard.innerHTML = text;

        if (quantityCVC.length < 1) {
            errorCVC.innerHTML = '';
        }
    }
});

inputName.addEventListener("keypress", (event) => {

    quantityName = nameCard.innerHTML;

    if (quantityName.length <= 15) {
        if (event.keyCode = 49 || event.keyCode >= 65 && event.keyCode <= 90) {
            nameCard.innerHTML += (event.key).toUpperCase();
        }
    }

    if (quantityName.length < 15) {
        errorName.innerHTML = '';
    }
});

inputName.addEventListener("keyup", (event) => {

    if (event.key === "Backspace") {
        let text = nameCard.innerHTML;
        let quantityName = nameCard.innerHTML;
        text = text.slice(0, text.length - 1);
        quantityName = quantityName.slice(0, text.length - 1);
        nameCard.innerHTML = text;

        if (quantityName.length < 15) {
            errorName.innerHTML = '';
        }
    }
});

inputNroCard.addEventListener("keypress", (event) => {

    quantityNumber = nroCard.innerHTML;

    var remainder = (quantityNumber.length + 1) % 5;
    if (remainder == 0) {
        nroCard.innerHTML += ' ';
    }

    if (quantityNumber.length <= 18) {
        if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode >= 97 && event.keyCode <= 122) {
            nroCard.innerHTML += event.key;
        }
    }

    if (event.key === "Backspace") {
        let text = nroCard.innerHTML;
        quantityNumber = nroCard.innerHTML;
        text = text.slice(0, text.length - 1);
        quantityNumber = text;
        nroCard.innerHTML = text;

        if (quantityNumber.length < 20) {
            errorNumber.innerHTML = '';
        }
    }

    if (quantityName.length < 15) {
        errorNumber.innerHTML = '';
    }
});

inputNroCard.addEventListener("keyup", (event) => {

    if (event.key === "Backspace") {
        let text = nroCard.innerHTML;
        quantityNumber = nroCard.innerHTML;
        text = text.slice(0, text.length - 1);
        if (text[text.length - 1] === ' ') {
            text = text.slice(0, text.length - 1);
        }
        quantityNumber = text;
        nroCard.innerHTML = text;

        if (quantityNumber.length < 20) {
            errorNumber.innerHTML = '';
        }
    }

    if (quantityName.length < 15) {
        errorNumber.innerHTML = '';
    }

});

inputNroCard.addEventListener("keydown", (event) => {
    if (errorNumber.innerHTML) {
        if (event.key === "Backspace") {
            let text = nroCard.innerHTML;
            quantityNumber = nroCard.innerHTML;
            text = text.slice(0, text.length - 1);
            quantityNumber = text;
            nroCard.innerHTML = text;

            if (quantityNumber.length < 20) {
                errorNumber.innerHTML = '';
            }
        }
    }

    if (quantityName.length < 15) {
        errorNumber.innerHTML = '';
    }

});

btnConfirm.addEventListener('click', (event) => {
    errorNumber.innerHTML = '';
    errorName.innerHTML = '';
    errorMonth.innerHTML = '';
    errorCVC.innerHTML = '';

    event.preventDefault();

    let errorChar = false;
    let anyError = false;

    for (numbers of nroCard.innerHTML) {
        // console.log('numbers outside ', numbers)
        // console.log('numbers.match(/[a-z,A-Z]/g)', numbers.match(/[a-z,A-Z]/g))
        if (numbers.match(/[a-z,A-Z]/g)) {
            console.log('numbers inside ', numbers)
            errorChar = true;
        }
    }

    if (nroCard.innerHTML === '') {
        console.log('no puede quedar vacio el NUMERO')
        errorNumber.innerHTML = "This value can't be empty";
        errorNumber.style.position = "absolute";
        errorNumber.style.top = "365px";
        errorNumber.style.left = "867px";
        errorNumber.style.color = "red";
        errorNumber.style.fontSize = "8px";
        containerDatos.append(errorNumber);
        anyError = true;

    } else if (nroCard.innerHTML.length < 16) {
        console.log('no puede quedar vacio el NOMBRE')
        errorNumber.innerHTML = "You need to introduce all 16 numbers";
        errorNumber.style.position = "absolute";
        errorNumber.style.top = "365px";
        errorNumber.style.left = "867px";
        errorNumber.style.color = "red";
        errorNumber.style.fontSize = "8px";
        containerDatos.append(errorNumber);
        anyError = true;

    } else if (errorChar === true) {
        console.log('no puede quedar vacio el NOMBRE')
        errorNumber.innerHTML = "This value can't have any letters only numbers";
        errorNumber.style.position = "absolute";
        errorNumber.style.top = "365px";
        errorNumber.style.left = "867px";
        errorNumber.style.color = "red";
        errorNumber.style.fontSize = "8px";
        containerDatos.append(errorNumber);
        anyError = true;
    }  
    
    if (nameCard.innerHTML === '') {
        console.log('no puede quedar vacio el NOMBRE')
        errorName.innerHTML = "This value can't be empty";
        errorName.style.position = "absolute";
        errorName.style.top = "285px";
        errorName.style.left = "867px";
        errorName.style.color = "red";
        errorName.style.fontSize = "8px";
        containerDatos.append(errorName);
        anyError = true;
    }

    if (vencCardMonth.innerHTML === '' || vencCardYear.innerHTML === '') {
        console.log('no puede quedar vacio el MES')
        errorMonth.innerHTML = "This value can't be empty";
        errorMonth.style.position = "absolute";
        errorMonth.style.top = "445px";
        errorMonth.style.left = "867px";
        errorMonth.style.color = "red";
        errorMonth.style.fontSize = "8px";
        containerDatos.append(errorMonth);
        anyError = true;        
    } 

    // if (Number(vencCardMonth.innerHTML) < 1 || Number(vencCardMonth.innerHTML) > 12) {
    //     console.log('no puede quedar vacio el MES')
    //     errorMonth.innerHTML = "This value can't be less than 1 or higher than 12";
    //     errorMonth.style.position = "absolute";
    //     errorMonth.style.top = "445px";
    //     errorMonth.style.left = "867px";
    //     errorMonth.style.color = "red";
    //     errorMonth.style.fontSize = "8px";
    //     containerDatos.append(errorMonth);
    //     anyError = true;  
    // }
    // if (Number(vencCardYear.innerHTML.match(/-\d+/)) < 0 || Number(vencCardYear.innerHTML) > 999) {
    //     console.log('no puede quedar vacio el MES')
    //     errorMonth.innerHTML = "This value can't be less than 0 or higher than 999";
    //     errorMonth.style.position = "absolute";
    //     errorMonth.style.top = "445px";
    //     errorMonth.style.left = "867px";
    //     errorMonth.style.color = "red";
    //     errorMonth.style.fontSize = "8px";
    //     containerDatos.append(errorMonth);
    //     anyError = true;  
    // }

    if (cvcCard.innerHTML === '') {
        console.log('no puede quedar vacio el CVC')
        errorCVC.innerHTML = "This value can't be empty";
        errorCVC.style.position = "absolute";
        errorCVC.style.top = "445px";
        errorCVC.style.left = "1015px";
        errorCVC.style.color = "red";
        errorCVC.style.fontSize = "8px";
        containerDatos.append(errorCVC);
        anyError = true;
    }

    if (anyError === false) {



        while(formDatosUsuario.hasChildNodes()) {
            console.log(formDatosUsuario.firstChild)
            formDatosUsuario.firstChild.remove();
        }

        const circleOk = document.createElement('img');
        const messageThanks = document.createElement('p');
        const messageAdded = document.createElement('p');
        const btnConfirm = document.createElement('button');

        circleOk.src = './images/icon-complete.svg'
        circleOk.style.height = '50px';
        circleOk.style.width = '50px';
        circleOk.style.gridColumnStart = '2';
        circleOk.style.gridRow = '2';
        circleOk.style.marginLeft = '45px'

        messageThanks.innerHTML = 'THANK YOU!'
        messageThanks.style.gridColumn = '1 / 4 span';
        messageThanks.style.gridRow = '3';
        messageThanks.style.marginLeft = '60px'
        
        messageThanks.style.color = "black";
        messageThanks.style.fontSize = "1.5rem";
        messageThanks.style.letterSpacing = "1.5px";
        messageThanks.style.fontFamily = '\'Space Grotesk\', sans-serif';


        messageAdded.innerHTML = 'We\'ve added your card details'
        messageAdded.style.gridColumn = '1 / 4 span';
        messageAdded.style.gridRow = '5';
        messageAdded.style.color = "rgba(188, 186, 186, 0.493)";
        messageAdded.style.fontSize = "1rem";
        messageAdded.style.fontFamily = '\'Space Grotesk\', sans-serif';
        messageAdded.style.marginLeft = '15px'

        btnConfirm.innerHTML = 'Continue'
        btnConfirm.style.textAlign = 'center';
        btnConfirm.style.gridColumn = '1 / 4 span';
        btnConfirm.style.gridRow = '8';
        btnConfirm.style.fontSize = '14px';
        btnConfirm.style.fontFamily = '\'Space Grotesk\', sans-serif';
        btnConfirm.style.borderRadius = '5px';
        btnConfirm.style.color = "rgb(255, 255, 255)";
        btnConfirm.style.fontSize = "1rem";
        btnConfirm.style.border = 'none';
        btnConfirm.style.width = '280px';
        btnConfirm.style.height = '40px';
        btnConfirm.style.backgroundColor = 'hsl(278, 68%, 11%)';


        formDatosUsuario.append(circleOk)
        formDatosUsuario.append(messageThanks)
        formDatosUsuario.append(messageAdded)
        formDatosUsuario.append(btnConfirm)
        containerDatos.append(formDatosUsuario)
        containerCentral.append(containerDatos)
        container.append(containerCentral)

         // containerCentral.style.alignItems = 'center';
        // containerCentral.style.justifyContent = 'center';
/*
        circleOk.src = './images/icon-complete.svg'
        messageThanks.innerHTML = 'THANK YOU!'
        messageAdded.innerHTML = 'We\'ve added your card details'
        
        circleOk.style.position = "absolute";
        // circleOk.style.top = "235px";
        // circleOk.style.left = "985px";
        // circleOk.style.top = "5rem";
        // circleOk.style.left = "1rem";
        // circleOk.style.gridColumnStart= "1";
        // circleOk.style.gridColumnEnd= "1";
        circleOk.style.gridRow= "2";
        circleOk.style.width = '65px';
        circleOk.style.height = '65px';
        // circleOk.style.color = "red";
        circleOk.style.fontSize = "4px";
        container.appendChild(circleOk);
        // containerDatos.appendChild(circleOk);

        messageThanks.style.position = "absolute";
        // messageThanks.style.top = "310px";
        // messageThanks.style.left = "950px";

        // messageThanks.style.gridColumnStart= "2";
        // messageThanks.style.gridColumnEnd= "2";
        messageThanks.style.gridRow= "3";

        messageThanks.style.color = "black";
        messageThanks.style.fontSize = "1.5rem";
        messageThanks.style.letterSpacing = "1.5px";
        messageThanks.style.fontFamily = '\'Space Grotesk\', sans-serif';
        container.appendChild(messageThanks);
        // containerDatos.appendChild(messageThanks);

        messageAdded.style.position = "absolute";
        // messageAdded.style.top = "370px";
        // messageAdded.style.left = "915px";

        // messageAdded.style.gridColumnStart= "5";
        // messageAdded.style.gridColumnEnd= "5";
        messageAdded.style.gridRow= "4";

        messageAdded.style.color = "rgba(188, 186, 186, 0.493)";
        messageAdded.style.fontSize = "1rem";
        messageAdded.style.fontFamily = '\'Space Grotesk\', sans-serif';
        container.appendChild(messageAdded)
        // containerDatos.appendChild(messageAdded)

        btnConfirm.innerHTML = 'Continue'
        btnConfirm.style.textAlign = 'center';
        btnConfirm.style.fontSize = '14px';
        btnConfirm.style.fontFamily = '\'Space Grotesk\', sans-serif';
        btnConfirm.style.borderRadius = '5px';
        btnConfirm.style.position = "absolute";
        // btnConfirm.style.top = "450px";
        // btnConfirm.style.left = "880px";
        btnConfirm.style.color = "rgb(255, 255, 255)";
        btnConfirm.style.fontSize = "1rem";
        btnConfirm.style.border = 'none';
        btnConfirm.style.width = '280px';
        btnConfirm.style.height = '40px';
        btnConfirm.style.backgroundColor = 'hsl(278, 68%, 11%)';

        // messageAdded.style.gridColumnStart= "5";
        // messageAdded.style.gridColumnEnd= "5";
        // btnConfirm.style.gridRow= "5";

        // containerDatos.appendChild(btnConfirm)


        formDatosUsuario.appendChild(btnConfirm)
        containerDatos.appendChild(formDatosUsuario)
*/
    }

});