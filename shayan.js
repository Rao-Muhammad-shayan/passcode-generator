function passwordGenerator() {
    let password = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let specialChar = "!@#$%^&*()_+";
    

    let pLength = parseInt(document.getElementById("passwordlength").value);
   

    let pUpper = document.getElementById("upppercase");
    let pLower = document.getElementById("lowercase");
    let pNumber = document.getElementById("number");
    let pSymbols = document.getElementById("symbols");
    let pQuantity = parseInt(document.getElementById("Quantity").value);
    let pShower = document.getElementById("passcodeShower");

 
    if (pNumber.checked && pLower.checked && pUpper.checked &&pSymbols.checked) {
   if(pQuantity>0 && pQuantity<=5){

    for (let i = 0; i < pQuantity; i++) {
        let newPassword = "";
        for (let j = 0; j < pLength; j++) {
            let random = Math.floor(Math.random() * characters.length);
            newPassword += characters[random];
        }
        password += newPassword + "\n";
    }





        pShower.value = password; 
    }else{
        alert(`Enter quantity between 0-5`)
    }


}
else if ((pNumber.checked && pLower.checked && pUpper.checked)) 

{
let combine=numbers+lowerCase+upperCase;
if(pQuantity>0 && pQuantity<=5){

    for (let i = 0; i < pQuantity; i++) {
        let newPassword = "";
        for (let j = 0; j < pLength; j++) {
            let random = Math.floor(Math.random() * combine.length);
            newPassword += combine[random];
        }
        password += newPassword + "\n";
    }

    pShower.value = password;
}}

else if ((pNumber.checked && pLower.checked&&pSymbols)) {
let combine=numbers+lowerCase+specialChar;
if(pQuantity>0 && pQuantity<=5){

    for (let i = 0; i < pQuantity; i++) {
        let newPassword = "";
        for (let j = 0; j < pLength; j++) {
            let random = Math.floor(Math.random() * combine.length);
            newPassword += combine[random];
        }
        password += newPassword + "\n";
    }

    pShower.value = password;
}
else{
    alert(`Enter quantity between 0-5`)
}

}
else if(pLower.checked&&pUpper.checked&&pSymbols.checked){
    let combine=lowerCase+upperCase+Symbol;
    if(pQuantity>0 && pQuantity<=5){

        for (let i = 0; i < pQuantity; i++) {
            let newPassword = "";
            for (let j = 0; j < pLength; j++) {
                let random = Math.floor(Math.random() * combine.length);
                newPassword += combine[random];
            }
            password += newPassword + "\n";
        }
    
        pShower.value = password;
    }else{
        alert(`Enter quantity between 0-5`)
    }


}
else if(pNumber.checked&&pUpper.checked&&pSymbols.checked){
    let combine=numbers+upperCase+specialChar;
    if(pQuantity>0 && pQuantity<=5){

        for (let i = 0; i < pQuantity; i++) {
            let newPassword = "";
            for (let j = 0; j < pLength; j++) {
                let random = Math.floor(Math.random() * combine.length);
                newPassword += combine[random];
            }
            password += newPassword + "\n";
        }
    
        pShower.value = password;
    }else{
        alert(`Enter quantity between 0-5`)
    }
}

 else   if ( pUpper.checked) {
   if(pQuantity>0 && pQuantity<=5){

    for (let i = 0; i < pQuantity; i++) {
        let newPassword = "";
        for (let j = 0; j < pLength; j++) {
            let random = Math.floor(Math.random() * upperCase.length);
            newPassword += upperCase[random];
        }
        password += newPassword + "\n";
    }





        pShower.value = password; 
    }else{
        alert(`Enter quantity between 0-5`)
    }

}
 else   if ( pLower.checked) {

   if(pQuantity>0 && pQuantity<=5){

    for (let i = 0; i < pQuantity; i++) {
        let newPassword = "";
        for (let j = 0; j < pLength; j++) {
            let random = Math.floor(Math.random() * lowerCase.length);
            newPassword += lowerCase[random];
        }
        password += newPassword + "\n";
    }





        pShower.value = password;
    }else{
        alert(`Enter quantity between 0-5`)
    }


}
 else   if ( pNumber.checked) {

   if(pQuantity>0 && pQuantity<=5){

    for (let i = 0; i < pQuantity; i++) {
        let newPassword = "";
        for (let j = 0; j < pLength; j++) {
            let random = Math.floor(Math.random() * numbers.length);
            newPassword += numbers[random];
        }
        password += newPassword + "\n";
    }





        pShower.value = password;
    }
    else{
        alert(`Enter quantity between 0-5`)
    }


}
 else   if ( pSymbols.checked) {

   if(pQuantity>0 && pQuantity<=5){

    for (let i = 0; i < pQuantity; i++) {
        let newPassword = "";
        for (let j = 0; j < pLength; j++) {
            let random = Math.floor(Math.random() *specialChar.length);
            newPassword +=specialChar[random];
        }
        password += newPassword + "\n";
    }





        pShower.value = password;
    }

    else{
        alert(`Enter quantity between 0-5`)
    }


}

}
function lengthQuantity(event) {
    if (event.key === "Enter") {
        let pQuantity = parseInt(document.getElementById("Quantity").value);
        if (pQuantity > 5) {
            alert("Please enter a number between 0 and 5");
        }
    }
}
function showValue(){
    let pLength = parseInt(document.getElementById("passwordlength").value);
    let l=document.getElementById("valueoflength")
   l.innerHTML=pLength
}