function updateCountryView(){
    var ddCountry = document.getElementById("ddCountry");
    var divCountry = document.getElementById("divCountry");

    if(ddCountry.value == "Yes"){
        divCountry.classList.remove("invisible");
    }else{
        divCountry.classList.add("invisible");
    }
}
function validateForm(){

    var DoB = document.querySelector("#txtDOB");
    var divDoBError = document.querySelector("#divDoBError")
    var forIsValid = true;
    if(DoB.value == ""){
        divDoBError.classList.remove("invisible");
        divDoBError.innerHTML = "The date of birth can not be empty."
        DoB.classList.add("hasError");
        forIsValid = false;
    }else{
        var DoBDate = new Date(DoB.value);
        var todayDate = new Date();
        if(DobDate >= todayDate){
            divDoBError.classList.remove("invisible");
            divDoBError.innerHTML = "Date of birth must be before today's date"
            DoB.classList.add("hasError");
            forIsValid = false;
        }else{
            divDoBError.classList.add("invisible");
            divDoBError.innerHTML = ""
            DoB.classList.remove("hasError");
        }
    }
   
var ddCountry = document.querySelector("#addCountry");
    if(ddCountry.value =="Yes"){
        var txtCountry = document.querySelector("#txtXountry");
        if(txtCountry.value = ""){
            document.querySelector("#divCountryError").classList.remove("invisible");
            txtCountry.classList.add("hasError");
            formIsValid = false;
        }else{
            document.querySelector("#divCountryError").classList.add("invisible");
            txtCountry.classList.remove("hassError");
        }
    }
var elements = document.getElementsByTagName("input");
var invalidChars = ['#', '!', '~'];
for(let i =0; i < element.length; i++){
    for(let j =0; j < invalidChars.length; j++){
        if(elements[i].value.indexOf(invalidChars[j] != -1)){
            elements[i].classList.add("hasError");
            formIsValid = false;
        }
}

    return false;
}
